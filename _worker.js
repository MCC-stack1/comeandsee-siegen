/*
  Come & See Siegen – Termin-Funktion für Cloudflare Pages ("Advanced Mode", läuft auch bei Drag-and-drop-Upload).

  Aufgabe: Holt die kommenden Termine aus dem öffentlichen Google Kalender und liefert sie als einfaches JSON
  unter /api/events. Dadurch verbindet sich der Browser der Besucher nie mit Google (Datenschutz), und der
  API-Schlüssel bleibt geheim auf dem Server.

  Einrichtung (einmalig, siehe LIESMICH.md):
    Cloudflare → Workers & Pages → dein Projekt → Settings → Variables and Secrets
      GOOGLE_API_KEY  (Typ: Secret)  = API-Schlüssel mit aktivierter "Google Calendar API"
      CALENDAR_ID     (optional)     = Kalender-ID, falls sie sich ändert (sonst gilt der Wert unten)

  Alle anderen Anfragen reichen wir unverändert an die statischen Dateien weiter (env.ASSETS).
  Über _routes.json wird diese Funktion ohnehin nur für /api/* aufgerufen.
*/

const DEFAULT_CALENDAR_ID = '094b9fa813f411ea56f3fd6004c6c61d29b9bafc27d0c747bd0e05fdb02740bd@group.calendar.google.com';
const TIME_ZONE = 'Europe/Berlin';
const LOOKAHEAD_DAYS = 180;   // so weit in die Zukunft werden Termine geholt
const MAX_EVENTS = 30;
const CACHE_SECONDS = 300;    // 5 Minuten Zwischenspeicher

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'X-Content-Type-Options': 'nosniff'
};

function json(body, status, cacheSeconds) {
  const headers = new Headers(JSON_HEADERS);
  headers.set('Cache-Control', cacheSeconds ? `public, max-age=${cacheSeconds}, s-maxage=${cacheSeconds}` : 'no-store');
  return new Response(JSON.stringify(body), { status: status || 200, headers });
}

/* Beschreibung aus Google kann HTML enthalten: in reinen Text umwandeln und kürzen. */
function toPlainText(html, max) {
  let t = String(html || '')
    .replace(/<\s*br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|li|h[1-6])\s*>/gi, '\n')
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/gi, ' ').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'").replace(/&amp;/gi, '&')
    .replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n').trim();
  if (t.length > max) t = t.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
  return t;
}

function normalize(item) {
  if (!item || item.status === 'cancelled' || !item.start) return null;
  const allDay = !!item.start.date && !item.start.dateTime;
  const start = item.start.dateTime || item.start.date;
  const end = (item.end && (item.end.dateTime || item.end.date)) || '';
  if (!start) return null;
  return {
    start,
    end,
    allDay,
    title: toPlainText(item.summary, 120),
    place: toPlainText(item.location, 140).replace(/\n/g, ', '),
    note: toPlainText(item.description, 280)
  };
}

async function handleEvents(request, env) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return json({ error: 'method-not-allowed' }, 405);
  }
  const key = env.GOOGLE_API_KEY;
  if (!key) return json({ error: 'not-configured' }, 503);   // Seite zeigt dann den Hinweis + Kalender-Buttons

  // Zwischenspeicher (pro Cloudflare-Standort), damit Google nicht bei jedem Besuch gefragt wird.
  const cache = caches.default;
  const cacheKey = new Request(new URL('/api/events', request.url).toString(), { method: 'GET' });
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const calendarId = env.CALENDAR_ID || DEFAULT_CALENDAR_ID;
  const now = new Date();
  const upstream = new URL('https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(calendarId) + '/events');
  upstream.search = new URLSearchParams({
    key,
    singleEvents: 'true',          // wiederkehrende Termine ("jeden Sonntag") in einzelne Termine auflösen
    orderBy: 'startTime',
    timeMin: now.toISOString(),
    timeMax: new Date(now.getTime() + LOOKAHEAD_DAYS * 86400000).toISOString(),
    maxResults: String(MAX_EVENTS),
    timeZone: TIME_ZONE,
    fields: 'items(status,summary,description,location,start,end)'
  }).toString();

  let res;
  try {
    res = await fetch(upstream.toString(), { headers: { Accept: 'application/json' }, cf: { cacheTtl: 0 } });
  } catch (e) {
    return json({ error: 'upstream-unreachable' }, 502);
  }
  if (!res.ok) {
    // Nie Details (und damit evtl. den Schlüssel) an Besucher weitergeben.
    return json({ error: 'upstream-' + res.status }, 502);
  }
  let data;
  try { data = await res.json(); } catch (e) { return json({ error: 'upstream-invalid' }, 502); }

  const events = (Array.isArray(data.items) ? data.items : []).map(normalize).filter(Boolean);
  const response = json({ updated: now.toISOString(), timeZone: TIME_ZONE, events }, 200, CACHE_SECONDS);
  await cache.put(cacheKey, response.clone());
  return response;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/events') return handleEvents(request, env);
    return env.ASSETS.fetch(request);
  }
};

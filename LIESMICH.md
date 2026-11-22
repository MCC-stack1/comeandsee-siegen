# Come & See Siegen – Website

Statische Website (Deutsch + Englisch) mit Sprachauswahl, Terminliste aus dem Google Kalender und Instagram-Bereich.
Keine Cookies, kein Tracking, keine Verbindung des Besucher-Browsers zu Google oder Instagram.

## Ordner

```
index.html                 Sprachauswahl (Deutsch / English)  → comeandsee-siegen.com
de/index.html              Startseite Deutsch                 → /de/
de/impressum.html          Impressum          de/datenschutz.html     Datenschutz
en/index.html              Startseite Englisch                → /en/
en/legal-notice.html       Legal notice       en/privacy-policy.html  Privacy policy
assets/links.js            WhatsApp, Instagram, Google Kalender (gilt für beide Sprachen)
assets/images/             Bilder (logo, michael.png, Favicon, Vorschaubild für WhatsApp …)
assets/fonts/              Schriftdateien (siehe LIESMICH.txt dort)
assets/style.css, app.js   Design und Seitenlogik (normalerweise nicht anfassen)
_worker.js                 Holt die Termine aus dem Google Kalender (läuft bei Cloudflare)
_routes.json               Sorgt dafür, dass _worker.js nur für /api/* läuft
_headers                   Sicherheits-Header
_redirects                 Alte Adressen /impressum und /datenschutz leiten auf /de/ um
```

## Veröffentlichen mit Cloudflare Pages

1. Cloudflare → **Workers & Pages → Create → Pages → Upload assets** (oder bei einem bestehenden Projekt **Create deployment**).
2. Den **ganzen Ordner** hochladen (oder die ZIP-Datei). Wichtig: auch die Dateien, die mit `_` beginnen
   (`_worker.js`, `_routes.json`, `_headers`, `_redirects`) müssen dabei sein.
3. Unter **Custom domains** die Domain `comeandsee-siegen.com` zuweisen.

## Google Kalender einrichten (einmalig, ca. 10 Minuten)

Die Seite zeigt die kommenden Termine aus eurem Kalender als eigene Liste im Seitenstil. Solange der Schlüssel fehlt, sieht
man stattdessen den Hinweis „Neue Termine kommen über WhatsApp“ plus die Buttons „Im Google Kalender öffnen / abonnieren“.

1. **Kalender öffentlich machen:** Google Kalender → Einstellungen des Kalenders → *Zugriffsberechtigungen* →
   „Für die Öffentlichkeit freigeben“ → **„Alle Termindetails anzeigen“**. Nur Termine mit Sichtbarkeit „Standard/Öffentlich“
   erscheinen. In Titel, Ort und Beschreibung nichts Privates eintragen (Telefonnummern, private Adressen, Namen von Personen).
2. **API-Schlüssel erzeugen:** https://console.cloud.google.com → neues Projekt „come-and-see“ → *APIs & Dienste → Bibliothek* →
   „Google Calendar API“ **aktivieren** → *APIs & Dienste → Anmeldedaten → Anmeldedaten erstellen → API-Schlüssel*.
   Danach beim Schlüssel „Schlüssel einschränken“ → *API-Einschränkungen* → nur **Google Calendar API** wählen.
3. **Schlüssel bei Cloudflare hinterlegen:** Projekt → *Settings → Variables and Secrets → Add* →
   Name `GOOGLE_API_KEY`, Typ **Secret**, Wert = der Schlüssel. Danach die Seite **neu veröffentlichen** (Create deployment).
4. **Testen:** `https://comeandsee-siegen.com/api/events` im Browser öffnen. Es muss eine Liste mit `"events": [...]` erscheinen.
   Neue Termine erscheinen nach spätestens 5 Minuten auf der Website.

Die Kalender-ID steht in `assets/links.js` (und als Vorgabe in `_worker.js`). Wiederkehrende Termine („jeden Sonntag“)
werden automatisch aufgelöst. Gezeigt werden die nächsten 180 Tage, höchstens 12 Termine auf der Seite.

## Texte, Bilder, Termine ändern

Die Texte stehen in `de/index.html` und `en/index.html` im Block `<script type="application/json" id="cs-state">`.
Dort nur den Text zwischen den Anführungszeichen ändern.

- **Messe, Treffpunkt:** Block `"meeting"` (`"mass"`, `"spot"`).
- **Foto bei „Wer wir sind“:** Bild in `assets/images/` legen und bei `"image"` eintragen, z. B. `"image": "assets/images/gruppe.jpg"`.
- **Galerie:** `"gallery": [ { "src": "assets/images/foto1.jpg", "caption": "Ausflug" } ]`
- **Einzelne Termine von Hand** (zusätzlich zum Kalender): `"events": [ { "date": "2026-12-06", "time": "12:30 Uhr", "title": "Ausflug", "place": "Siegen", "note": "" } ]`
- **Instagram-Beiträge anzeigen** (bis zu 6, Bild auf dem eigenen Server, Klick führt zum Beitrag; nur mit Einwilligung der abgebildeten Personen!):
  `"instagram": { "posts": [ { "src": "assets/images/insta/beitrag1.jpg", "url": "https://www.instagram.com/p/XXXXXXXX/", "alt": "Beschreibung des Fotos" } ] }`
  (Bilder im Format 4:3, ca. 900 × 675 px, JPG, unter 200 KB; Beispiele liegen in `assets/images/insta/`). Ohne Einträge zeigt die Seite nur die Profil-Karte.
- **QR-Codes:** entstehen automatisch aus den Links in `assets/links.js`. Ändert sich der WhatsApp-Link, dort neu eintragen.

Bilder am besten als JPG/WebP, höchstens ca. 1800 px breit und unter 500 KB.

## Schriften

Cinzel und Alegreya Sans liegen als `.woff2`-Dateien in `assets/fonts/` und werden von der eigenen Seite geladen (nicht von Google).

## Vorschau auf dem eigenen Rechner

Im Ordner `python3 -m http.server` starten und http://localhost:8000 öffnen. Die Terminliste braucht Cloudflare
(`/api/events`) und zeigt lokal nur den Hinweis plus Kalender-Buttons.

## Hinweise

- Die Datenschutzerklärung ist auf Cloudflare Pages, den Google Kalender (Abruf über den eigenen Server) und den
  Instagram-Link zugeschnitten. Wird später z. B. Cloudflare Web Analytics aktiviert oder ein Instagram-Feed
  eingebettet, muss sie angepasst werden.
- Die Texte sind keine Rechtsberatung. Die Website wird als private Initiative betrieben (DSGVO, Aufsicht: LDI NRW).
  Gehört sie später zu einer Pfarrei oder zum Bistum, gilt ggf. das kirchliche Datenschutzgesetz (KDG).
- Prüfen, ob die Rechte an allen Bildern bei euch liegen und ob alle erkennbaren Personen auf Fotos eingewilligt haben.

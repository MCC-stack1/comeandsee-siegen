# Come & See Siegen – Website

Statische Website (Deutsch + Englisch) mit Sprachauswahl, Terminliste aus dem Google Kalender und Instagram-Bereich.
Keine Cookies, kein Tracking, keine Verbindung des Besucher-Browsers zu Google oder Instagram.

## Ordner (Repository-Wurzel)

```
wrangler.jsonc             Einstellungen des Workers (Name, Ordner der Website, Kalender-Funktion)
worker/index.js            Kalender-Funktion: liefert die Termine unter /api/events
public/                    Die Website selbst (alles, was Besucher sehen)
  index.html               Sprachauswahl (Deutsch / English)  → comeandsee-siegen.com
  de/index.html            Startseite Deutsch                 → /de/
  de/impressum.html        Impressum          de/datenschutz.html     Datenschutz
  en/index.html            Startseite Englisch                → /en/
  en/legal-notice.html     Legal notice       en/privacy-policy.html  Privacy policy
  assets/links.js          WhatsApp, Instagram, Google Kalender (gilt für beide Sprachen)
  assets/images/           Bilder (Logo, Fotos, Favicon, Vorschaubild für WhatsApp …)
  assets/fonts/            Schriftdateien
  assets/style.css, app.js Design und Seitenlogik (normalerweise nicht anfassen)
  _headers                 Sicherheits-Header
  _redirects               Alte Adressen /impressum und /datenschutz leiten auf /de/ um
```

## Veröffentlichen (Cloudflare Worker, verbunden mit GitHub)

Die Terminliste braucht Worker-Code. Der Datei-Uploader im Cloudflare-Dashboard ("Upload static files") kann nur
statische Dateien und ist dafür **nicht** geeignet. Deshalb läuft die Veröffentlichung über GitHub:

1. Den Inhalt dieses Ordners in das GitHub-Repository legen, das mit dem Worker verbunden ist
   (`wrangler.jsonc`, `worker/` und `public/` direkt im Hauptordner des Repositorys; alte Dateien der früheren Version löschen).
2. In `wrangler.jsonc` muss `"name"` genau dem Namen des Workers in Cloudflare entsprechen.
3. Cloudflare veröffentlicht nach jedem Speichern (Commit) automatisch neu. Unter **Settings → Build** des Workers sollte als
   Deploy-Befehl `npx wrangler deploy` stehen und das Stammverzeichnis leer bzw. `/` sein.

## Google Kalender einrichten (einmalig, ca. 10 Minuten)

Die Seite zeigt die kommenden Termine aus eurem Kalender als eigene Liste im Seitenstil. Solange der Schlüssel fehlt, sieht
man stattdessen den Hinweis „Neue Termine kommen über WhatsApp“ plus die Buttons „Im Google Kalender öffnen / abonnieren“.

1. **Kalender öffentlich machen:** Google Kalender → Einstellungen des Kalenders → *Zugriffsberechtigungen* →
   „Für die Öffentlichkeit freigeben“ → **„Alle Termindetails anzeigen“**. Nur Termine mit Sichtbarkeit „Standard/Öffentlich“
   erscheinen. In Titel, Ort und Beschreibung nichts Privates eintragen (Telefonnummern, private Adressen, Namen von Personen).
2. **API-Schlüssel erzeugen:** https://console.cloud.google.com → neues Projekt „come-and-see“ → *APIs & Dienste → Bibliothek* →
   „Google Calendar API“ **aktivieren** → *APIs & Dienste → Anmeldedaten → Anmeldedaten erstellen → API-Schlüssel*.
   Danach beim Schlüssel „Schlüssel einschränken“ → *API-Einschränkungen* → nur **Google Calendar API** wählen.
3. **Schlüssel bei Cloudflare hinterlegen:** Das geht erst, **nachdem der Worker mit dem Code aus `worker/` veröffentlicht wurde**
   (bei einem reinen Datei-Worker meldet Cloudflare "Variables cannot be added to a Worker that only has static assets").
   Danach: Workers & Pages → dein Worker → *Settings → Variables and Secrets → Add* →
   Name `GOOGLE_API_KEY`, Typ **Secret** (nicht "Text", sonst wird er beim nächsten Veröffentlichen überschrieben), Wert = der Schlüssel → *Deploy*.
4. **Testen:** `https://comeandsee-siegen.com/api/events` im Browser öffnen. Es muss eine Liste mit `"events": [...]` erscheinen.
   Neue Termine erscheinen nach spätestens 5 Minuten auf der Website.

Die Kalender-ID steht in `public/assets/links.js` (und als Vorgabe in `worker/index.js`). Wiederkehrende Termine („jeden Sonntag“)
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

Im Ordner `public/` `python3 -m http.server` starten und http://localhost:8000 öffnen. Die Terminliste braucht Cloudflare
(`/api/events`) und zeigt lokal nur den Hinweis plus Kalender-Buttons.

## Hinweise

- Die Datenschutzerklärung ist auf Cloudflare (Worker), den Google Kalender (Abruf über den eigenen Server) und den
  Instagram-Link zugeschnitten. Wird später z. B. Cloudflare Web Analytics aktiviert oder ein Instagram-Feed
  eingebettet, muss sie angepasst werden.
- Die Texte sind keine Rechtsberatung. Die Website wird als private Initiative betrieben (DSGVO, Aufsicht: LDI NRW).
  Gehört sie später zu einer Pfarrei oder zum Bistum, gilt ggf. das kirchliche Datenschutzgesetz (KDG).
- Prüfen, ob die Rechte an allen Bildern bei euch liegen und ob alle erkennbaren Personen auf Fotos eingewilligt haben.

# Come & See Siegen – Website

Statische Website (Deutsch + Englisch), ohne Cookies, ohne Tracking, ohne externe Dienste.

## Ordner

```
index.html                 Startseite Deutsch
en/index.html              Startseite Englisch
impressum.html             Impressum (DE)        en/legal-notice.html    (EN)
datenschutz.html           Datenschutz (DE)      en/privacy-policy.html  (EN)
assets/links.js            WhatsApp- und Instagram-Link (gilt für beide Sprachen)
assets/images/             Bilder (michael.png = Grafik oben auf der Startseite)
assets/fonts/              Schriftdateien (siehe LIESMICH.txt dort)
assets/style.css, app.js   Design und Seitenlogik (normalerweise nicht anfassen)
```

## Vor der Veröffentlichung unbedingt

1. **Impressum und Datenschutz ausfüllen.** Alle gelb markierten Stellen `[…]` in den
   4 Dateien ersetzen (Name, Anschrift, E-Mail, ggf. Aufsichtsbehörde).
2. **Links eintragen** in `assets/links.js` (WhatsApp-Einladungslink, Instagram).
   Danach erscheinen die QR-Codes automatisch.
3. **Schriften ablegen** (siehe `assets/fonts/LIESMICH.txt`).
4. Prüfen, ob du die Rechte an allen Bildern hast.

## Texte und Bilder ändern

Die Texte stehen in `index.html` (Deutsch) und `en/index.html` (Englisch) im Block
`<script type="application/json" id="cs-state">`. Dort Text zwischen den Anführungszeichen ändern.

- **Foto bei „Wer wir sind“:** Bild in `assets/images/` legen und bei `"image"` eintragen,
  z. B. `"image": "assets/images/gruppe.jpg"`.
- **Galerie:** `"gallery": [ { "src": "assets/images/foto1.jpg", "caption": "Ausflug" } ]`
- **Termine:** `"events": [ { "date": "2026-12-06", "time": "12:30 Uhr", "title": "Ausflug", "place": "Siegen", "note": "" } ]`
  (vergangene Termine blendet die Seite automatisch aus)

Bilder am besten als JPG/WebP, höchstens ca. 1800 px breit und unter 500 KB.

## Veröffentlichen mit Cloudflare Pages

1. Konto auf cloudflare.com anlegen → **Workers & Pages → Create → Pages → Upload assets**.
2. Diesen ganzen Ordner (oder die ZIP-Datei) hochladen, Projektname vergeben, **Deploy**.
3. Unter **Custom domains** deine Domain hinzufügen. Wenn du die Domain bei Cloudflare
   registrierst, richtet Cloudflare DNS und HTTPS automatisch ein.

Vorschau auf dem eigenen Rechner: Im Ordner `python3 -m http.server` starten und
http://localhost:8000 öffnen (ein Doppelklick auf die Datei geht auch, der Sprachwechsel
funktioniert dann aber evtl. nicht überall).

## Hinweise

- Die Datenschutzerklärung ist auf Cloudflare Pages als Hoster zugeschnitten. Bei einem
  anderen Hoster oder wenn du später z. B. Cloudflare Web Analytics aktivierst, muss sie angepasst werden.
- Die Texte sind Vorlagen und keine Rechtsberatung. Gehört die Seite zu einer Pfarrei
  oder einem Bistum, gilt statt der DSGVO ggf. das kirchliche Datenschutzgesetz (KDG),
  dann bitte mit der Pfarrei klären.

/*
  Come & See Siegen – Seitenlogik (statische Version, DE/EN)
  Die Sprache kommt aus <html lang="de|en">, die Inhalte aus <script id="cs-state"> der jeweiligen Seite,
  die WhatsApp-/Instagram-Links aus assets/links.js.
*/
(function () {
  'use strict';

  var ART = {"hero":"<svg class=\"emblem\" viewBox=\"0 -24 820 534\" role=\"img\" aria-label=\"%ARIA%\"><defs><linearGradient id=\"csh-gold\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#B07E22\"/><stop offset=\"0.5\" stop-color=\"#F0D27A\"/><stop offset=\"1\" stop-color=\"#B07E22\"/></linearGradient><linearGradient id=\"csh-goldv\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#F0D27A\"/><stop offset=\"1\" stop-color=\"#B07E22\"/></linearGradient><radialGradient id=\"csh-halo\" cx=\"400\" cy=\"153\" r=\"190\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#FFE7A0\" stop-opacity=\"0.34\"/><stop offset=\"0.35\" stop-color=\"#EBC865\" stop-opacity=\"0.13\"/><stop offset=\"1\" stop-color=\"#EBC865\" stop-opacity=\"0\"/></radialGradient><radialGradient id=\"csh-ray\" cx=\"400\" cy=\"153\" r=\"150\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#F3D27A\" stop-opacity=\"0.24\"/><stop offset=\"0.6\" stop-color=\"#F3D27A\" stop-opacity=\"0.108\"/><stop offset=\"1\" stop-color=\"#F3D27A\" stop-opacity=\"0\"/></radialGradient><radialGradient id=\"csh-spark\" cx=\"400\" cy=\"153\" r=\"40\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#FFFFFF\" stop-opacity=\"0.85\"/><stop offset=\"0.28\" stop-color=\"#FFF6D8\" stop-opacity=\"0.6\"/><stop offset=\"0.62\" stop-color=\"#F7DC8A\" stop-opacity=\"0.28\"/><stop offset=\"1\" stop-color=\"#F7DC8A\" stop-opacity=\"0\"/></radialGradient><linearGradient id=\"csh-fL\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#F7DE8F\"/><stop offset=\"1\" stop-color=\"#E2B654\"/></linearGradient><linearGradient id=\"csh-fM\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#D9AD4D\"/><stop offset=\"1\" stop-color=\"#BF8D2E\"/></linearGradient><linearGradient id=\"csh-fD\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0\" stop-color=\"#B3832A\"/><stop offset=\"1\" stop-color=\"#94671B\"/></linearGradient><linearGradient id=\"csh-fLh\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#E9C266\"/><stop offset=\"1\" stop-color=\"#F7DE8F\"/></linearGradient><linearGradient id=\"csh-fDh\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\"><stop offset=\"0\" stop-color=\"#A97C25\"/><stop offset=\"1\" stop-color=\"#93661A\"/></linearGradient><mask id=\"csh-m\" maskUnits=\"userSpaceOnUse\" x=\"30\" y=\"-10\" width=\"220\" height=\"440\"><g fill=\"#fff\"><rect x=\"50\" y=\"134\" width=\"60\" height=\"286\"/><rect x=\"46\" y=\"128\" width=\"68\" height=\"8\"/><path d=\"M46 130 L80 24 L114 130 Z\"/><rect x=\"170\" y=\"134\" width=\"60\" height=\"286\"/><rect x=\"166\" y=\"128\" width=\"68\" height=\"8\"/><path d=\"M166 130 L200 24 L234 130 Z\"/><rect x=\"108.5\" y=\"232\" width=\"63\" height=\"188\"/><path d=\"M106 236 L140 196 L174 236 Z\"/><rect x=\"44\" y=\"406\" width=\"192\" height=\"14\"/></g><path d=\"M73.5 122 V112.5 A2.5 2.5 0 0 1 78.5 112.5 V122 Z M81.5 122 V112.5 A2.5 2.5 0 0 1 86.5 112.5 V122 Z M60 168 V150 A5 5 0 0 1 70 150 V168 Z M75 168 V150 A5 5 0 0 1 85 150 V168 Z M90 168 V150 A5 5 0 0 1 100 150 V168 Z M65 208 V193 A5 5 0 0 1 75 193 V208 Z M85 208 V193 A5 5 0 0 1 95 193 V208 Z M73 278 L73 252 A7 7 0 0 1 87 252 L87 278 Z M66 344 V322 A5 5 0 0 1 76 322 V344 Z M84 344 V322 A5 5 0 0 1 94 322 V344 Z M72 406 V378 A8 8 0 0 1 88 378 V406 Z M193.5 122 V112.5 A2.5 2.5 0 0 1 198.5 112.5 V122 Z M201.5 122 V112.5 A2.5 2.5 0 0 1 206.5 112.5 V122 Z M180 168 V150 A5 5 0 0 1 190 150 V168 Z M195 168 V150 A5 5 0 0 1 205 150 V168 Z M210 168 V150 A5 5 0 0 1 220 150 V168 Z M185 208 V193 A5 5 0 0 1 195 193 V208 Z M205 208 V193 A5 5 0 0 1 215 193 V208 Z M193 278 L193 252 A7 7 0 0 1 207 252 L207 278 Z M186 344 V322 A5 5 0 0 1 196 322 V344 Z M204 344 V322 A5 5 0 0 1 214 322 V344 Z M192 406 V378 A8 8 0 0 1 208 378 V406 Z M130 233 V224.3 A2.25 2.25 0 0 1 134.5 224.3 V233 Z M137.5 233 V218.5 A2.5 2.5 0 0 1 142.5 218.5 V233 Z M145.5 233 V224.3 A2.25 2.25 0 0 1 150 224.3 V233 Z M127 420 L127 372 A13 13 0 0 1 153 372 L153 420 Z\" fill=\"#000\"/><path d=\"M53 129 L80 93 L107 129 M50 177 H110 M50 226 H110 M50 298 H110 M173 129 L200 93 L227 129 M170 177 H230 M170 226 H230 M170 298 H230 M110 298 H170 M117 352 L140 324 L163 352\" fill=\"none\" stroke=\"#000\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><path d=\"M114 236 V227.7 H119 V221.8 H124 V215.9 H129 V210.1 H134 V204.2 H139 H146 V210.1 H151 V215.9 H156 V221.8 H161 V227.7 H166 V236 M140 329 V339 M136.5 333 H143.5\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.6\"/></mask></defs><g class=\"glow\"><circle cx=\"400\" cy=\"153\" r=\"190\" fill=\"url(#csh-halo)\"/><path d=\"M400 153 L526.2 174.5 L524.8 181.5 Z M400 153 L528.4 230.6 L520.8 241.9 Z M400 153 L474.1 257.4 L468.1 261.4 Z M400 153 L435.9 298.6 L422.6 301.3 Z M400 153 L378.5 279.2 L371.5 277.8 Z M400 153 L322.4 281.4 L311.1 273.8 Z M400 153 L295.6 227.1 L291.6 221.1 Z M400 153 L254.4 188.9 L251.7 175.6 Z M400 153 L273.8 131.5 L275.2 124.5 Z M400 153 L271.6 75.4 L279.2 64.1 Z M400 153 L325.9 48.6 L331.9 44.6 Z M400 153 L364.1 7.4 L377.4 4.7 Z M400 153 L421.5 26.8 L428.5 28.2 Z M400 153 L477.6 24.6 L488.9 32.2 Z M400 153 L504.4 78.9 L508.4 84.9 Z M400 153 L545.6 117.1 L548.3 130.4 Z\" fill=\"url(#csh-ray)\"/></g><g transform=\"translate(-43.2 2) scale(1.2)\"><rect x=\"30\" y=\"-10\" width=\"220\" height=\"440\" fill=\"#FFFDF8\" mask=\"url(#csh-m)\"/><g fill=\"#F2C744\"><rect x=\"78\" y=\"0\" width=\"4\" height=\"28\"/><rect x=\"72\" y=\"8\" width=\"16\" height=\"4\"/><circle cx=\"80\" cy=\"27\" r=\"4.5\"/><rect x=\"198\" y=\"0\" width=\"4\" height=\"28\"/><rect x=\"192\" y=\"8\" width=\"16\" height=\"4\"/><circle cx=\"200\" cy=\"27\" r=\"4.5\"/><rect x=\"138\" y=\"180\" width=\"4\" height=\"20\"/><rect x=\"133\" y=\"186\" width=\"14\" height=\"4\"/></g><circle cx=\"140\" cy=\"266\" r=\"14.5\" fill=\"#F2C744\"/><circle cx=\"140\" cy=\"266\" r=\"11\" fill=\"#FFFDF8\"/><circle cx=\"140.00\" cy=\"266.00\" r=\"2.5\" fill=\"#F2C744\"/><circle cx=\"140.00\" cy=\"259.70\" r=\"2.5\" fill=\"#F2C744\"/><circle cx=\"134.54\" cy=\"262.85\" r=\"2.5\" fill=\"#F2C744\"/><circle cx=\"134.54\" cy=\"269.15\" r=\"2.5\" fill=\"#F2C744\"/><circle cx=\"140.00\" cy=\"272.30\" r=\"2.5\" fill=\"#F2C744\"/><circle cx=\"145.46\" cy=\"269.15\" r=\"2.5\" fill=\"#F2C744\"/><circle cx=\"145.46\" cy=\"262.85\" r=\"2.5\" fill=\"#F2C744\"/></g><g class=\"cross\"><polygon points=\"370,20 400,50 400,153 370,125\" fill=\"url(#csh-fL)\"/><polygon points=\"430,20 400,50 400,153 430,125\" fill=\"url(#csh-fM)\"/><polygon points=\"370,20 430,20 400,50\" fill=\"#FBE9AE\"/><polygon points=\"370,125 400,153 293,153 265,125\" fill=\"url(#csh-fLh)\"/><polygon points=\"370,181 400,153 293,153 265,181\" fill=\"url(#csh-fDh)\"/><polygon points=\"265,125 265,181 293,153\" fill=\"#E6BD60\"/><polygon points=\"430,125 400,153 507,153 535,125\" fill=\"#EFCB72\"/><polygon points=\"430,181 400,153 507,153 535,181\" fill=\"#A27522\"/><polygon points=\"535,125 535,181 507,153\" fill=\"#B98A2C\"/><polygon points=\"370,181 400,153 400,466 370,496\" fill=\"url(#csh-fL)\"/><polygon points=\"430,181 400,153 400,466 430,496\" fill=\"url(#csh-fD)\"/><polygon points=\"370,496 430,496 400,466\" fill=\"#8E6318\"/><path d=\"M400 50 L400 466 M293 153 L507 153\" stroke=\"#FFF3CF\" stroke-width=\"1.4\" opacity=\"0.6\"/><path d=\"M370 20 H430 V125 H535 V181 H430 V496 H370 V181 H265 V125 H370 Z\" fill=\"none\" stroke=\"#6B4A12\" stroke-width=\"1.4\" stroke-linejoin=\"miter\"/><circle cx=\"400\" cy=\"153\" r=\"40\" fill=\"url(#csh-spark)\"/><polygon points=\"422.6,175.6 400.0,157.0 377.4,175.6 396.0,153.0 377.4,130.4 400.0,149.0 422.6,130.4 404.0,153.0\" fill=\"#FFFFFF\" opacity=\"0.8\"/><polygon points=\"418.0,153.0 402.1,155.1 400.0,171.0 397.9,155.1 382.0,153.0 397.9,150.9 400.0,135.0 402.1,150.9\" fill=\"#FFFFFF\" opacity=\"0.55\"/><rect x=\"352\" y=\"492\" width=\"96\" height=\"14\" rx=\"3\" fill=\"#FFFDF8\"/></g><image href=\"%MICHAEL%\" x=\"539.5\" y=\"69.3\" width=\"275.4\" height=\"437.2\" preserveAspectRatio=\"none\"/></svg>","church":"<svg class=\"church\" viewBox=\"36 -4 208 428\" role=\"img\" aria-label=\"%ARIA%\"><defs><mask id=\"csl-m\" maskUnits=\"userSpaceOnUse\" x=\"30\" y=\"-10\" width=\"220\" height=\"440\"><g fill=\"#fff\"><rect x=\"50\" y=\"134\" width=\"60\" height=\"286\"/><rect x=\"46\" y=\"128\" width=\"68\" height=\"8\"/><path d=\"M46 130 L80 24 L114 130 Z\"/><rect x=\"170\" y=\"134\" width=\"60\" height=\"286\"/><rect x=\"166\" y=\"128\" width=\"68\" height=\"8\"/><path d=\"M166 130 L200 24 L234 130 Z\"/><rect x=\"108.5\" y=\"232\" width=\"63\" height=\"188\"/><path d=\"M106 236 L140 196 L174 236 Z\"/><rect x=\"44\" y=\"406\" width=\"192\" height=\"14\"/></g><path d=\"M73.5 122 V112.5 A2.5 2.5 0 0 1 78.5 112.5 V122 Z M81.5 122 V112.5 A2.5 2.5 0 0 1 86.5 112.5 V122 Z M60 168 V150 A5 5 0 0 1 70 150 V168 Z M75 168 V150 A5 5 0 0 1 85 150 V168 Z M90 168 V150 A5 5 0 0 1 100 150 V168 Z M65 208 V193 A5 5 0 0 1 75 193 V208 Z M85 208 V193 A5 5 0 0 1 95 193 V208 Z M73 278 L73 252 A7 7 0 0 1 87 252 L87 278 Z M66 344 V322 A5 5 0 0 1 76 322 V344 Z M84 344 V322 A5 5 0 0 1 94 322 V344 Z M72 406 V378 A8 8 0 0 1 88 378 V406 Z M193.5 122 V112.5 A2.5 2.5 0 0 1 198.5 112.5 V122 Z M201.5 122 V112.5 A2.5 2.5 0 0 1 206.5 112.5 V122 Z M180 168 V150 A5 5 0 0 1 190 150 V168 Z M195 168 V150 A5 5 0 0 1 205 150 V168 Z M210 168 V150 A5 5 0 0 1 220 150 V168 Z M185 208 V193 A5 5 0 0 1 195 193 V208 Z M205 208 V193 A5 5 0 0 1 215 193 V208 Z M193 278 L193 252 A7 7 0 0 1 207 252 L207 278 Z M186 344 V322 A5 5 0 0 1 196 322 V344 Z M204 344 V322 A5 5 0 0 1 214 322 V344 Z M192 406 V378 A8 8 0 0 1 208 378 V406 Z M130 233 V224.3 A2.25 2.25 0 0 1 134.5 224.3 V233 Z M137.5 233 V218.5 A2.5 2.5 0 0 1 142.5 218.5 V233 Z M145.5 233 V224.3 A2.25 2.25 0 0 1 150 224.3 V233 Z M127 420 L127 372 A13 13 0 0 1 153 372 L153 420 Z\" fill=\"#000\"/><path d=\"M53 129 L80 93 L107 129 M50 177 H110 M50 226 H110 M50 298 H110 M173 129 L200 93 L227 129 M170 177 H230 M170 226 H230 M170 298 H230 M110 298 H170 M117 352 L140 324 L163 352\" fill=\"none\" stroke=\"#000\" stroke-width=\"2.2\" stroke-linejoin=\"round\"/><path d=\"M114 236 V227.7 H119 V221.8 H124 V215.9 H129 V210.1 H134 V204.2 H139 H146 V210.1 H151 V215.9 H156 V221.8 H161 V227.7 H166 V236 M140 329 V339 M136.5 333 H143.5\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.6\"/></mask></defs><g><rect x=\"30\" y=\"-10\" width=\"220\" height=\"440\" fill=\"currentColor\" mask=\"url(#csl-m)\"/><g class=\"gi\"><rect x=\"78\" y=\"0\" width=\"4\" height=\"28\"/><rect x=\"72\" y=\"8\" width=\"16\" height=\"4\"/><circle cx=\"80\" cy=\"27\" r=\"4.5\"/><rect x=\"198\" y=\"0\" width=\"4\" height=\"28\"/><rect x=\"192\" y=\"8\" width=\"16\" height=\"4\"/><circle cx=\"200\" cy=\"27\" r=\"4.5\"/><rect x=\"138\" y=\"180\" width=\"4\" height=\"20\"/><rect x=\"133\" y=\"186\" width=\"14\" height=\"4\"/></g><circle cx=\"140\" cy=\"266\" r=\"14.5\" class=\"gi\"/><circle cx=\"140\" cy=\"266\" r=\"11\" fill=\"currentColor\"/><circle cx=\"140.00\" cy=\"266.00\" r=\"2.5\" class=\"gi\"/><circle cx=\"140.00\" cy=\"259.70\" r=\"2.5\" class=\"gi\"/><circle cx=\"134.54\" cy=\"262.85\" r=\"2.5\" class=\"gi\"/><circle cx=\"134.54\" cy=\"269.15\" r=\"2.5\" class=\"gi\"/><circle cx=\"140.00\" cy=\"272.30\" r=\"2.5\" class=\"gi\"/><circle cx=\"145.46\" cy=\"269.15\" r=\"2.5\" class=\"gi\"/><circle cx=\"145.46\" cy=\"262.85\" r=\"2.5\" class=\"gi\"/></g></svg>"};

  var ROOT = document.documentElement.getAttribute('data-root') || '';
  var LANG = (document.documentElement.lang || 'de').slice(0, 2) === 'en' ? 'en' : 'de';

  /* ---------- Texte der Oberfläche ---------- */
  var I18N = {
    de: {
      locale: 'de-DE',
      nav: [['about', 'Über uns'], ['sunday', 'Sonntag'], ['events', 'Termine'], ['instagram', 'Instagram'], ['faq', 'Fragen'], ['location', 'Anfahrt'], ['press', 'Presse']],
      legal: [['Impressum', 'impressum.html'], ['Datenschutz', 'datenschutz.html']],
      lang: { href: '../en/index.html', label: 'EN', title: 'Read this page in English', code: 'en' },
      artHero: 'St. Michael Siegen mit zwei Türmen, goldenes Kreuz mit Lichtschein und der Erzengel Michael mit Schwert',
      artChurch: 'Zeichnung der Kirche St. Michael in Siegen',
      brandSub: 'KATHOLISCH SIEGEN', brandAria: 'Come & See, zum Seitenanfang',
      navAria: 'Seitennavigation', footAria: 'Fußzeile', contactAria: 'Kontakt', menuAria: 'Menü', greetAria: 'Willkommen in vielen Sprachen',
      join: 'Beitreten',
      heroEyebrow: 'Multikulturell · Katholisch · Siegen', verse: '„Kommt und seht!“', verseRef: 'Joh 1,39',
      igShort: 'Instagram',
      jcEyebrow: 'Sei dabei', jcTitle: 'Scannen, beitreten, vorbeikommen.',
      jcText: 'In unserer WhatsApp-Community erfährst du alle Treffen, Ausflüge und Neuigkeiten. Auf Instagram siehst du, was bei uns los ist.',
      jcSteps: ['Code scannen', 'Community beitreten', 'Sonntag vorbeikommen'],
      waTitle: 'WhatsApp-Community', waSub: 'Allgemein · Austausch & Study', igSub: 'Fotos & Neuigkeiten',
      qrScan: 'Mit der Handykamera scannen', qrSoon: 'QR-Code folgt in Kürze', qrLabel: 'QR-Code: ', openAria: ' öffnen',
      waJoin: 'WhatsApp-Community beitreten', igView: 'Instagram ansehen',
      aboutEyebrow: 'Wer wir sind', aboutAlt: 'Gruppenfoto von Come & See', quote: 'Kommt und seht!', quoteRef: 'Joh 1,39',
      sunEyebrow: 'Ein Sonntag mit uns', sunTitle: 'So sieht ein Sonntag bei uns aus', sunIn: ' in ', sunLead: '. Du musst nichts vorbereiten. Komm einfach, wie du bist.',
      evEyebrow: 'Termine & Ausflüge', evTitle: 'Was als Nächstes ansteht', evLead: 'Neben dem Treffen nach der Messe sind wir regelmäßig gemeinsam unterwegs.',
      evEmptyT: 'Neue Termine kommen über WhatsApp', evEmptyP: 'Aktuelle Treffen und Ausflüge kündigen wir in unserer WhatsApp-Community an. Tritt bei, dann verpasst du nichts.',
      evEmptyBtn: 'Zur Community', evDefault: 'Termin',
      calOpen: 'Im Google Kalender öffnen', calSub: 'Kalender abonnieren', calLoading: 'Termine werden geladen …', calLoadingP: 'Einen Moment bitte.',
      calAllDay: 'ganztägig', calUntil: 'bis', calClock: ' Uhr', calMore: 'Weitere Termine findest du in unserem Google Kalender.',
      prEyebrow: 'Presse & Medien', prTitle: 'Das schreiben andere über uns', prLead: '', prNote: '', prRead: 'Weiterlesen',
      igEyebrow: 'Instagram', igTitle: 'Unser Alltag auf Instagram',
      igLead: 'Eindrücke aus unserer Gemeinschaft: von Sonntagen, Ausflügen und besonderen Momenten.',
      igName: 'Come & See Siegen', igCardP: 'Folge uns, damit du nichts verpasst. Auf Instagram teilen wir Fotos und Neuigkeiten aus unserer Gemeinschaft.',
      igProfileBtn: 'Profil auf Instagram öffnen', igAvatarAlt: 'Logo von Come & See Siegen', igPostAlt: 'Beitrag von Come & See auf Instagram', igPostOpen: 'Beitrag auf Instagram öffnen',
      galEyebrow: 'Galerie', galTitle: 'Eindrücke aus unserer Gemeinschaft', galLead: 'Momente von unseren Sonntagen, Ausflügen und gemeinsamen Aktionen.',
      galPh: ['Nach der Messe', 'Unterwegs', 'Im Glauben'], galSoon: 'Fotos folgen bald', galEnlarge: 'Foto vergrößern', galAlt: 'Foto von Come & See',
      joinEyebrow: 'Mach mit', joinTitle: 'Werde Teil der Community', joinLead: 'Scanne einen Code mit der Kamera deines Handys oder tippe auf den Button. Wir freuen uns auf dich.',
      joinWaP: 'Hier kündigen wir Treffen, Ausflüge und Neuigkeiten an und bleiben unter der Woche in Kontakt.', chipGeneral: 'Allgemein', chipStudy: 'Austausch & Study',
      joinWaBtn: 'Community beitreten', joinIgP: 'Fotos, Eindrücke und Ankündigungen. Folge uns und sieh, was bei uns los ist.', joinIgBtn: 'Profil öffnen',
      joinSteps: ['Code scannen oder antippen', 'Community beitreten', 'Sonntag nach der Messe vorbeikommen'],
      faqEyebrow: 'Häufige Fragen', faqTitle: 'Gut zu wissen', faqSide: 'Deine Frage ist nicht dabei? Schreib uns auf Instagram oder in der WhatsApp-Community.', faqBtn: 'Frag uns auf WhatsApp',
      locEyebrow: 'So findest du uns', locTitle: 'Treffpunkt ', route: 'Route planen', copyAddr: 'Adresse kopieren', copied: 'Adresse kopiert',
      footVerse: '„Kommt und seht!“ (Joh 1,39)', footAbout: 'Multikulturelle katholische Gemeinschaft in Siegen. ',
      footPage: 'Seite', footContact: 'Kontakt', footContactFallback: 'Über die WhatsApp-Community und Instagram', footLegal: 'Rechtliches',
      copyright: 'Come & See · Katholisch Siegen',
      modalClose: 'Schließen', modalTitle: 'Scanne den Code mit deiner Handykamera',
      modalP: 'Kamera öffnen, auf den Code richten und den Link antippen, der erscheint. Auf dem Handy kannst du auch direkt auf die Buttons tippen.', igOpen: 'Instagram öffnen',
      lbOf: function (i, n) { return 'Foto ' + i + ' von ' + n; }, lbPrev: 'Vorheriges Foto', lbNext: 'Nächstes Foto',
      fabDesk: 'QR-Code · Beitreten', fabWa: 'WhatsApp beitreten', fabNow: 'Jetzt beitreten'
    },
    en: {
      locale: 'en-GB',
      nav: [['about', 'About us'], ['sunday', 'Sunday'], ['events', 'Events'], ['instagram', 'Instagram'], ['faq', 'FAQ'], ['location', 'Directions'], ['press', 'Press']],
      legal: [['Legal notice', 'legal-notice.html'], ['Privacy policy', 'privacy-policy.html']],
      lang: { href: '../de/index.html', label: 'DE', title: 'Diese Seite auf Deutsch lesen', code: 'de' },
      artHero: 'St. Michael’s Church in Siegen with two towers, a golden cross with rays of light and the Archangel Michael with a sword',
      artChurch: 'Drawing of St. Michael’s Church in Siegen',
      brandSub: 'CATHOLIC SIEGEN', brandAria: 'Come & See, back to top',
      navAria: 'Page navigation', footAria: 'Footer', contactAria: 'Contact', menuAria: 'Menu', greetAria: 'Welcome in many languages',
      join: 'Join',
      heroEyebrow: 'Multicultural · Catholic · Siegen', verse: '“Come and see.”', verseRef: 'John 1:39',
      igShort: 'Instagram',
      jcEyebrow: 'Join us', jcTitle: 'Scan, join, drop by.',
      jcText: 'In our WhatsApp community you will find all our gatherings, trips and news. On Instagram you can see what we are up to.',
      jcSteps: ['Scan the code', 'Join the community', 'Come by on Sunday'],
      waTitle: 'WhatsApp community', waSub: 'General · Sharing & Study', igSub: 'Photos & news',
      qrScan: 'Scan with your phone camera', qrSoon: 'QR code coming soon', qrLabel: 'QR code: ', openAria: ' – open',
      waJoin: 'Join the WhatsApp community', igView: 'View Instagram',
      aboutEyebrow: 'Who we are', aboutAlt: 'Group photo of Come & See', quote: 'Come and see!', quoteRef: 'John 1:39',
      sunEyebrow: 'A Sunday with us', sunTitle: 'What a Sunday looks like', sunIn: ' at ', sunLead: '. You don’t need to prepare anything. Just come as you are.',
      evEyebrow: 'Events & trips', evTitle: 'What’s coming up', evLead: 'Besides our gathering after Mass, we regularly go out and about together.',
      evEmptyT: 'New dates are announced via WhatsApp', evEmptyP: 'We announce current gatherings and trips in our WhatsApp community. Join us so you don’t miss anything.',
      evEmptyBtn: 'To the community', evDefault: 'Event',
      calOpen: 'Open in Google Calendar', calSub: 'Subscribe to calendar', calLoading: 'Loading events …', calLoadingP: 'One moment please.',
      calAllDay: 'all day', calUntil: 'until', calClock: '', calMore: 'You can find further dates in our Google Calendar.',
      prEyebrow: 'Press & media', prTitle: 'What others write about us', prLead: '', prNote: 'The linked pages are in German.', prRead: 'Read more',
      igEyebrow: 'Instagram', igTitle: 'Our everyday life on Instagram',
      igLead: 'Impressions from our community: from Sundays, trips and special moments.',
      igName: 'Come & See Siegen', igCardP: 'Follow us so you don’t miss anything. On Instagram we share photos and news from our community.',
      igProfileBtn: 'Open profile on Instagram', igAvatarAlt: 'Logo of Come & See Siegen', igPostAlt: 'Come & See post on Instagram', igPostOpen: 'Open post on Instagram',
      galEyebrow: 'Gallery', galTitle: 'Impressions from our community', galLead: 'Moments from our Sundays, trips and activities together.',
      galPh: ['After Mass', 'Out and about', 'In faith'], galSoon: 'Photos coming soon', galEnlarge: 'Enlarge photo', galAlt: 'Photo of Come & See',
      joinEyebrow: 'Join in', joinTitle: 'Become part of the community', joinLead: 'Scan a code with your phone’s camera or tap the button. We look forward to meeting you.',
      joinWaP: 'This is where we announce gatherings, trips and news, and where we stay in touch during the week.', chipGeneral: 'General', chipStudy: 'Sharing & Study',
      joinWaBtn: 'Join the community', joinIgP: 'Photos, impressions and announcements. Follow us and see what is going on.', joinIgBtn: 'Open profile',
      joinSteps: ['Scan or tap the code', 'Join the community', 'Come by after Mass on Sunday'],
      faqEyebrow: 'Frequently asked questions', faqTitle: 'Good to know', faqSide: 'Your question is not here? Write to us on Instagram or in the WhatsApp community.', faqBtn: 'Ask us on WhatsApp',
      locEyebrow: 'How to find us', locTitle: 'Meeting point ', route: 'Plan route', copyAddr: 'Copy address', copied: 'Address copied',
      footVerse: '“Come and see.” (John 1:39)', footAbout: 'Multicultural Catholic community in Siegen. ',
      footPage: 'Page', footContact: 'Contact', footContactFallback: 'Via the WhatsApp community and Instagram', footLegal: 'Legal',
      copyright: 'Come & See · Catholic Siegen',
      modalClose: 'Close', modalTitle: 'Scan the code with your phone camera',
      modalP: 'Open your camera, point it at the code and tap the link that appears. On your phone you can also tap the buttons directly.', igOpen: 'Open Instagram',
      lbOf: function (i, n) { return 'Photo ' + i + ' of ' + n; }, lbPrev: 'Previous photo', lbNext: 'Next photo',
      fabDesk: 'QR code · Join', fabWa: 'Join on WhatsApp', fabNow: 'Join now'
    }
  };
  var T = I18N[LANG];
  var GREET = ['Willkommen', 'Welcome', 'Bienvenue', 'Benvenuti', 'Bienvenidos', 'Witamy', 'Bem-vindos', 'Dobrodošli', 'Ласкаво просимо', 'Karibu', 'Akwaaba', 'Mabuhay', 'Chào mừng', 'Welkom', 'Fáilte'];

    /* Compact QR encoder (byte mode, versions 1-40, EC level L/M/Q/H), after Project Nayuki's reference design. */
const QR = (() => {
  const ECC = { L: [0, 1], M: [1, 0], Q: [2, 3], H: [3, 2] }; // [table row, format bits]
  const EC_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
  ];
  const NUM_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]
  ];
  const rawModules = v => {
    let r = (16 * v + 128) * v + 64;
    if (v >= 2) { const n = Math.floor(v / 7) + 2; r -= (25 * n - 10) * n - 55; if (v >= 7) r -= 36; }
    return r;
  };
  const dataCodewords = (v, e) => Math.floor(rawModules(v) / 8) - EC_PER_BLOCK[e][v] * NUM_BLOCKS[e][v];
  const gfMul = (x, y) => {
    let z = 0;
    for (let i = 7; i >= 0; i--) { z = (z << 1) ^ ((z >>> 7) * 0x11D); z ^= ((y >>> i) & 1) * x; }
    return z & 0xFF;
  };
  const rsDivisor = deg => {
    const r = new Array(deg).fill(0); r[deg - 1] = 1; let root = 1;
    for (let i = 0; i < deg; i++) {
      for (let j = 0; j < r.length; j++) { r[j] = gfMul(r[j], root); if (j + 1 < r.length) r[j] ^= r[j + 1]; }
      root = gfMul(root, 0x02);
    }
    return r;
  };
  const rsRemainder = (data, div) => {
    const r = div.map(() => 0);
    for (const b of data) {
      const f = b ^ r.shift(); r.push(0);
      div.forEach((c, i) => { r[i] ^= gfMul(c, f); });
    }
    return r;
  };
  const utf8 = s => Array.from(new TextEncoder().encode(s));

  function encode(text, level) {
    const lv = ECC[level] || ECC.M, e = lv[0];
    const bytes = utf8(text);
    let ver = 1, cap = 0;
    for (; ver <= 40; ver++) {
      cap = dataCodewords(ver, e) * 8;
      const need = 4 + (ver < 10 ? 8 : 16) + bytes.length * 8;
      if (need <= cap) break;
    }
    if (ver > 40) throw new Error('Text zu lang für einen QR-Code');
    const bits = [];
    const put = (val, len) => { for (let i = len - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
    put(4, 4); put(bytes.length, ver < 10 ? 8 : 16); bytes.forEach(b => put(b, 8));
    put(0, Math.min(4, cap - bits.length));
    put(0, (8 - bits.length % 8) % 8);
    for (let pad = 0xEC; bits.length < cap; pad ^= 0xEC ^ 0x11) put(pad, 8);
    const data = [];
    for (let i = 0; i < bits.length; i += 8) { let b = 0; for (let j = 0; j < 8; j++) b = (b << 1) | bits[i + j]; data.push(b); }

    // error correction + interleaving
    const nb = NUM_BLOCKS[e][ver], eccLen = EC_PER_BLOCK[e][ver], raw = Math.floor(rawModules(ver) / 8);
    const nShort = nb - raw % nb, shortLen = Math.floor(raw / nb), div = rsDivisor(eccLen);
    const blocks = [];
    for (let i = 0, k = 0; i < nb; i++) {
      const dat = data.slice(k, k + shortLen - eccLen + (i < nShort ? 0 : 1)); k += dat.length;
      const ecc = rsRemainder(dat, div);
      if (i < nShort) dat.push(0);
      blocks.push(dat.concat(ecc));
    }
    const cw = [];
    for (let i = 0; i < blocks[0].length; i++)
      blocks.forEach((b, j) => { if (i !== shortLen - eccLen || j >= nShort) cw.push(b[i]); });

    // matrix
    const size = ver * 4 + 17;
    const mod = Array.from({ length: size }, () => new Array(size).fill(false));
    const fn = Array.from({ length: size }, () => new Array(size).fill(false));
    const setF = (x, y, d) => { mod[y][x] = d; fn[y][x] = true; };
    for (let i = 0; i < size; i++) { setF(6, i, i % 2 === 0); setF(i, 6, i % 2 === 0); }
    const finder = (x, y) => {
      for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) {
        const d = Math.max(Math.abs(dx), Math.abs(dy)), xx = x + dx, yy = y + dy;
        if (xx >= 0 && xx < size && yy >= 0 && yy < size) setF(xx, yy, d !== 2 && d !== 4);
      }
    };
    finder(3, 3); finder(size - 4, 3); finder(3, size - 4);
    if (ver > 1) {
      const n = Math.floor(ver / 7) + 2;
      const step = ver === 32 ? 26 : Math.ceil((ver * 4 + 4) / (n * 2 - 2)) * 2;
      const pos = [6];
      for (let p = size - 7; pos.length < n; p -= step) pos.splice(1, 0, p);
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
        if ((i === 0 && j === 0) || (i === 0 && j === n - 1) || (i === n - 1 && j === 0)) continue;
        for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++)
          setF(pos[i] + dx, pos[j] + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
      }
    }
    const drawFormat = mask => {
      const d = (lv[1] << 3) | mask; let rem = d;
      for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
      const b = ((d << 10) | rem) ^ 0x5412, g = i => ((b >>> i) & 1) !== 0;
      for (let i = 0; i <= 5; i++) setF(8, i, g(i));
      setF(8, 7, g(6)); setF(8, 8, g(7)); setF(7, 8, g(8));
      for (let i = 9; i < 15; i++) setF(14 - i, 8, g(i));
      for (let i = 0; i < 8; i++) setF(size - 1 - i, 8, g(i));
      for (let i = 8; i < 15; i++) setF(8, size - 15 + i, g(i));
      setF(8, size - 8, true);
    };
    drawFormat(0);
    if (ver >= 7) {
      let rem = ver;
      for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1F25);
      const b = (ver << 12) | rem;
      for (let i = 0; i < 18; i++) {
        const bit = ((b >>> i) & 1) !== 0, a = size - 11 + i % 3, c = Math.floor(i / 3);
        setF(a, c, bit); setF(c, a, bit);
      }
    }
    // place codewords
    let bi = 0;
    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let vert = 0; vert < size; vert++) for (let j = 0; j < 2; j++) {
        const x = right - j, up = ((right + 1) & 2) === 0, y = up ? size - 1 - vert : vert;
        if (!fn[y][x] && bi < cw.length * 8) { mod[y][x] = ((cw[bi >>> 3] >>> (7 - (bi & 7))) & 1) !== 0; bi++; }
      }
    }
    const maskFn = [
      (x, y) => (x + y) % 2 === 0, (x, y) => y % 2 === 0, (x) => x % 3 === 0, (x, y) => (x + y) % 3 === 0,
      (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0, (x, y) => x * y % 2 + x * y % 3 === 0,
      (x, y) => (x * y % 2 + x * y % 3) % 2 === 0, (x, y) => ((x + y) % 2 + x * y % 3) % 2 === 0
    ];
    const applyMask = m => {
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++)
        if (!fn[y][x] && maskFn[m](x, y)) mod[y][x] = !mod[y][x];
    };
    const penalty = () => {
      let p = 0;
      const line = get => {
        let run = 1, color = get(0);
        for (let i = 1; i < size; i++) {
          if (get(i) === color) { run++; if (run === 5) p += 3; else if (run > 5) p++; }
          else { color = get(i); run = 1; }
        }
        const pat = [true, false, true, true, true, false, true];
        for (let i = 0; i + 7 <= size; i++) {
          let ok = true;
          for (let k = 0; k < 7; k++) if (get(i + k) !== pat[k]) { ok = false; break; }
          if (!ok) continue;
          const lightBefore = i >= 4 && [1, 2, 3, 4].every(k => !get(i - k));
          const lightAfter = i + 11 <= size && [7, 8, 9, 10].every(k => !get(i + k));
          if (lightBefore || lightAfter) p += 40;
        }
      };
      for (let y = 0; y < size; y++) line(i => mod[y][i]);
      for (let x = 0; x < size; x++) line(i => mod[i][x]);
      let dark = 0;
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
        if (mod[y][x]) dark++;
        if (x < size - 1 && y < size - 1) {
          const c = mod[y][x];
          if (c === mod[y][x + 1] && c === mod[y + 1][x] && c === mod[y + 1][x + 1]) p += 3;
        }
      }
      const total = size * size;
      p += (Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1) * 10;
      return p;
    };
    let best = 0, bestP = Infinity;
    for (let m = 0; m < 8; m++) {
      applyMask(m); drawFormat(m);
      const p = penalty();
      if (p < bestP) { bestP = p; best = m; }
      applyMask(m);
    }
    applyMask(best); drawFormat(best);
    return { size, version: ver, mask: best, modules: mod };
  }

  function svg(text, opts) {
    const o = Object.assign({ level: 'M', quiet: 4, dark: '#1b1b1b', light: '#ffffff', label: 'QR-Code' }, opts || {});
    const q = encode(text, o.level), n = q.size + o.quiet * 2;
    let d = '';
    for (let y = 0; y < q.size; y++) {
      let x = 0;
      while (x < q.size) {
        if (!q.modules[y][x]) { x++; continue; }
        let w = 1; while (x + w < q.size && q.modules[y][x + w]) w++;
        d += `M${x + o.quiet} ${y + o.quiet}h${w}v1h-${w}z`;
        x += w;
      }
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges" role="img" aria-label="${o.label}"><rect width="${n}" height="${n}" fill="${o.light}"/><path d="${d}" fill="${o.dark}"/></svg>`;
  }
  return { encode, svg };
})();

  /* ---------- Helfer ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ESC[c]; }); }
  function paras(s) {
    return String(s || '').split(/\n\s*\n/).map(function (p) { return p.trim(); }).filter(Boolean)
      .map(function (p) { return '<p>' + esc(p).replace(/\n/g, '<br>') + '</p>'; }).join('');
  }
  function clone(o) { return JSON.parse(JSON.stringify(o)); }
  /* Bilder: nur relative Pfade zu Bilddateien, z. B. "assets/images/gruppe.jpg" */
  function imgSrc(src) {
    return typeof src === 'string' && !/\.\./.test(src) && /^[A-Za-z0-9_\-\/.]+\.(jpe?g|png|webp|gif|avif)$/i.test(src) ? ROOT + src.replace(/^\//, '') : '';
  }
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function icon(name, cls) {
    var P = {
      qr: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3h-3zM20.5 14v.5M14 20.5h.5M17.5 20.5h3v-3"/>',
      chat: '<path d="M4 4.5h16v11.5H9.5L5 20v-4H4z"/><path d="M8.5 9.5h7M8.5 12.5h4.5"/>',
      camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.6"/><path d="M8 7l1.6-3h4.8L16 7"/>',
      pin: '<path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
      clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>',
      calendar: '<rect x="3" y="5" width="18" height="16"/><path d="M3 10h18M8 3v4M16 3v4"/>',
      book: '<path d="M3 5.5c3-1.2 6-1 9 1 3-2 6-2.2 9-1v13.5c-3-1.2-6-1-9 1-3-2-6-2.2-9-1z"/><path d="M12 6.5v13.5"/>',
      talk: '<path d="M3 4h12v8.5H8.2L4.5 15.5v-3H3z"/><path d="M9 15.5v1.5h7.2l3.8 3v-3h1V9h-3.5"/>',
      trip: '<path d="M2.5 19.5l6.5-9.5 4.2 6.2 3-4.2 5.3 7.5z"/><circle cx="17" cy="5.8" r="2.1"/>',
      candle: '<path d="M8.8 21h6.4V10.5H8.8z"/><path d="M12 10.5V8.2"/><path d="M12 2.6c1.7 2 2.1 3.3 0 4.9-2.1-1.6-1.7-2.9 0-4.9z"/>',
      users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.6 3.3-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/><circle cx="17.2" cy="9" r="2.6"/><path d="M16.6 14.5c2.6.2 4.3 1.9 5 4.5"/>',
      route: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5"/>',
      copy: '<rect x="8" y="8" width="12" height="12"/><path d="M16 8V4H4v12h4"/>',
      menu: '<path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17"/>',
      close: '<path d="M6 6l12 12M18 6L6 18"/>',
      edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
      left: '<path d="M15 5l-7 7 7 7"/>', right: '<path d="M9 5l7 7-7 7"/>',
      up: '<path d="M5.5 15l6.5-6.5 6.5 6.5"/>', down: '<path d="M5.5 9l6.5 6.5L18.5 9"/>',
      trash: '<path d="M4 7h16M9.5 7V4h5v3M6.2 7l1 13h9.6l1-13"/>',
      plus: '<path d="M12 5v14M5 12h14"/>',
      image: '<rect x="3" y="4" width="18" height="16"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>'
    };
    return '<svg' + (cls ? ' class="' + cls + '"' : '') + ' viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (P[name] || '') + '</svg>';
  }
  var CROSS = '<svg viewBox="0 0 16 22" aria-hidden="true"><path d="M6 0h4v6h6v4h-6v12H6V10H0V6h6z"/></svg>';

  /* ---------- Inhalte ---------- */
  var SKELETON = {
    hero: { lead: '' },
    meeting: { when: '', mass: '', place: '', street: '', city: '', spot: '' },
    about: { title: '', text: '', image: '', caption: '' },
    pillars: [], sunday: [], events: [], gallery: [], press: [], faq: [], footer: { contact: '' },
    instagram: { posts: [] }
  };
  function merge(base, over) {
    if (Array.isArray(base)) return Array.isArray(over) ? over : base;
    if (base && typeof base === 'object') {
      var out = {};
      Object.keys(base).forEach(function (k) { out[k] = merge(base[k], over && over[k]); });
      return out;
    }
    return over == null ? base : over;
  }
  var state;
  try { state = merge(clone(SKELETON), JSON.parse($('#cs-state').textContent)); }
  catch (e) { state = clone(SKELETON); }
  var LINKS = window.CS_LINKS || {};
  var menuOpen = false, lbIndex = -1;

  /* ---------- Links & QR ---------- */
  function linkInfo() {
    var w = String(LINKS.whatsapp || '').trim();
    var wa = /^https:\/\/\S+$/i.test(w) ? w : '';
    var g = String(LINKS.instagram || '').trim(), handle = '';
    var m = g.match(/instagram\.com\/([A-Za-z0-9._]{1,30})/i);
    if (m) handle = m[1]; else if (/^@?[A-Za-z0-9._]{1,30}$/.test(g)) handle = g.replace(/^@/, '');
    return { wa: wa, ig: handle ? { handle: handle, url: 'https://www.instagram.com/' + handle + '/' } : null };
  }
  var qrCache = {};
  function qrSvg(url, label) {
    var key = url + '|' + label;
    if (!qrCache[key]) {
      try { qrCache[key] = QR.svg(url, { level: 'M', dark: '#2B0609', light: '#FFFFFF', label: T.qrLabel + label }); }
      catch (e) { qrCache[key] = ''; }
    }
    return qrCache[key];
  }
  function qrTile(kind, bare) {
    var L = linkInfo(), wa = kind === 'wa';
    var url = wa ? L.wa : (L.ig && L.ig.url);
    var title = wa ? T.waTitle : 'Instagram';
    var sub = wa ? T.waSub : (L.ig ? '@' + L.ig.handle : T.igSub);
    var ic = icon(wa ? 'chat' : 'camera');
    var cap = bare ? '<div class="qr-cap"><span>' + (url ? T.qrScan : '&nbsp;') + '</span></div>'
      : '<div class="qr-cap"><strong>' + ic + title + '</strong><span>' + esc(sub) + '</span></div>';
    var svg = url ? qrSvg(url, title) : '';
    if (!svg) {
      return '<div class="qr-tile"><div class="qr-empty"><div>' + icon('qr') + T.qrSoon + '</div></div>' + cap + '</div>';
    }
    return '<a class="qr-tile" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(title + T.openAria) + '"><div class="qr-box">' + svg + '</div>' + cap + '</a>';
  }
  function waBtn(cls, label) {
    var L = linkInfo();
    var t = icon('chat') + '<span>' + (label || T.waJoin) + '</span>';
    return L.wa ? '<a class="btn ' + cls + '" href="' + esc(L.wa) + '" target="_blank" rel="noopener noreferrer">' + t + '</a>'
      : '<button class="btn ' + cls + '" type="button" data-action="join">' + t + '</button>';
  }
  function igBtn(cls, label) {
    var L = linkInfo();
    var t = icon('camera') + '<span>' + (label || T.igView) + '</span>';
    return L.ig ? '<a class="btn ' + cls + '" href="' + esc(L.ig.url) + '" target="_blank" rel="noopener noreferrer">' + t + '</a>'
      : '<button class="btn ' + cls + '" type="button" data-action="join">' + t + '</button>';
  }

  /* ---------- Abschnitte ---------- */
  function navHTML() {
    var links = T.nav.map(function (n) { return '<a href="#' + n[0] + '" data-go="' + n[0] + '">' + n[1] + '</a>'; }).join('');
    return '<header class="nav" id="top"><div class="wrap nav-in">' +
      '<a class="brand" href="#start" data-go="start" aria-label="' + esc(T.brandAria) + '">' + CROSS +
      '<span><span class="brand-t">Come &amp; See</span><span class="brand-s">' + T.brandSub + '</span></span></a>' +
      '<nav class="nav-links" aria-label="' + T.navAria + '">' + links + '</nav>' +
      '<a class="lang-switch" href="' + T.lang.href + '" hreflang="' + T.lang.code + '" lang="' + T.lang.code + '" title="' + esc(T.lang.title) + '">' + T.lang.label + '</a>' +
      '<button class="btn btn-gold btn-sm" type="button" data-action="join">' + icon('qr') + '<span class="btn-join-label">' + T.join + '</span></button>' +
      '<button class="menu-btn" type="button" data-action="menu" aria-expanded="' + menuOpen + '" aria-controls="mmenu" aria-label="' + T.menuAria + '">' + icon(menuOpen ? 'close' : 'menu') + '</button>' +
      '</div><div class="mobile-menu" id="mmenu"' + (menuOpen ? '' : ' hidden') + '><div class="wrap"><nav aria-label="' + T.navAria + '">' + links + '</nav></div></div></header>';
  }

  function ribbonHTML() {
    var set = '<div class="ribbon-set">' + GREET.map(function (g) { return '<span>' + g + '</span><i></i>'; }).join('') + '</div>';
    return '<div class="ribbon" aria-label="' + T.greetAria + '"><div class="ribbon-track">' + set + set.replace('class="ribbon-set"', 'class="ribbon-set" aria-hidden="true"') + '</div></div>';
  }

  function heroArt() {
    return ART.hero.replace('%ARIA%', esc(T.artHero)).replace('%MICHAEL%', ROOT + 'assets/images/michael.png');
  }

  function joinCardHTML() {
    var S = T.jcSteps;
    return '<div class="joincard frame">' +
      '<div class="jc-text"><p class="eyebrow">' + T.jcEyebrow + '</p><h2 class="jc-title">' + T.jcTitle + '</h2>' +
      '<p>' + T.jcText + '</p>' +
      '<div class="jc-steps"><span><b>1</b>' + S[0] + '</span><span><b>2</b>' + S[1] + '</span><span><b>3</b>' + S[2] + '</span></div></div>' +
      qrTile('wa') + qrTile('ig') +
      '<div class="jc-buttons">' + waBtn('btn-red') + igBtn('btn-line') + '</div></div>';
  }

  function heroHTML(s) {
    var m = s.meeting;
    var where = [m.place, String(m.city || '').replace(/^\d+\s*/, '')].filter(Boolean).join(', ');
    return '<section class="hero on-red" id="start" aria-labelledby="hero-title">' + ribbonHTML() +
      '<div class="wrap hero-grid"><div class="hero-text">' +
      '<p class="eyebrow">' + T.heroEyebrow + '</p>' +
      '<h1 id="hero-title"><span>Come</span><span>&amp; See</span></h1>' +
      '<p class="verse">' + T.verse + ' <small>' + T.verseRef + '</small></p>' +
      '<p class="lead">' + esc(s.hero.lead) + '</p>' +
      '<div class="meet">' + icon('clock') + '<div><strong>' + esc(m.when) + '</strong><span>' + esc([m.mass, where].filter(Boolean).join(' · ')) + '</span></div></div>' +
      '<div class="hero-cta">' + waBtn('btn-gold') + igBtn('btn-ghost', T.igShort) + '</div>' +
      '</div><div class="hero-art">' + heroArt() + '</div></div>' +
      '<div class="wrap hero-join">' + joinCardHTML() + '</div></section>';
  }

  function aboutHTML(s) {
    var a = s.about, img = imgSrc(a.image);
    var photo = img
      ? '<figure class="photo frame"><img src="' + esc(img) + '" alt="' + esc(a.caption || T.aboutAlt) + '">' + (a.caption ? '<figcaption>' + esc(a.caption) + '</figcaption>' : '') + '</figure>'
      : '<figure class="photo frame"><div class="photo-fallback"><div class="pf-in">' + CROSS + '<blockquote>' + T.quote + '</blockquote><cite>' + T.quoteRef + '</cite></div></div></figure>';
    var pillars = s.pillars.map(function (p) {
      return '<div class="pillar">' + icon(p.icon || 'candle') + '<h3>' + esc(p.title) + '</h3><p>' + esc(p.text) + '</p></div>';
    }).join('');
    return '<section class="sec about" id="about" aria-labelledby="about-t"><div class="wrap">' +
      '<div class="about-grid"><div class="about-text"><p class="eyebrow">' + T.aboutEyebrow + '</p><h2 class="h2" id="about-t">' + esc(a.title) + '</h2>' +
      '<div class="prose lead">' + paras(a.text) + '</div></div>' + photo + '</div>' +
      (pillars ? '<div class="pillars">' + pillars + '</div>' : '') + '</div></section>';
  }

  function sundayHTML(s) {
    var R = ['I', 'II', 'III', 'IV', 'V', 'VI'], m = s.meeting;
    var steps = s.sunday.map(function (st, i) {
      return '<li class="step"><span class="step-num" aria-hidden="true">' + (R[i] || i + 1) + '</span><h3>' + esc(st.title) + '</h3><p>' + esc(st.text) + '</p>' +
        (i === 0 && m.mass ? '<span class="tag">' + esc(m.mass) + '</span>' : '') + '</li>';
    }).join('');
    return '<section class="sec sec-2" id="sunday" aria-labelledby="sun-t"><div class="wrap">' +
      '<div class="sec-head"><p class="eyebrow">' + T.sunEyebrow + '</p><h2 class="h2" id="sun-t">' + T.sunTitle + '</h2>' +
      '<p class="lead">' + esc(m.when) + (m.place ? T.sunIn + esc(m.place) : '') + T.sunLead + '</p></div>' +
      '<ol class="steps">' + steps + '</ol></div></section>';
  }

  function today() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
  function eventCard(e, past) {
    var d = /^\d{4}-\d{2}-\d{2}$/.test(e.date || '') ? new Date(e.date + 'T12:00:00') : null;
    var day = d ? d.getDate() : '–';
    var mon = d ? d.toLocaleDateString(T.locale, { month: 'short' }).replace('.', '') : '';
    var wd = d ? d.toLocaleDateString(T.locale, { weekday: 'long' }) : '';
    var meta = [];
    var until = e.endDate && /^\d{4}-\d{2}-\d{2}$/.test(e.endDate)
      ? ' ' + T.calUntil + ' ' + new Date(e.endDate + 'T12:00:00').toLocaleDateString(T.locale, { weekday: 'long', day: 'numeric', month: 'long' }) + (e.endTime ? ', ' + e.endTime : '') : '';
    if (wd || e.time) meta.push('<span>' + icon('clock') + esc([wd, e.time].filter(Boolean).join(', ') + until) + '</span>');
    if (e.place) meta.push('<span>' + icon('pin') + esc(e.place) + '</span>');
    return '<article class="event' + (past ? ' past' : '') + '"><div class="event-date"><b>' + day + '</b><span>' + esc(mon) + '</span></div>' +
      '<div class="event-body"><h3>' + esc(e.title || T.evDefault) + '</h3>' + (meta.length ? '<div class="event-meta">' + meta.join('') + '</div>' : '') +
      (e.note ? '<p class="event-note">' + esc(e.note) + '</p>' : '') + '</div></article>';
  }
  /* ---- Google Kalender: Termine kommen von /api/events (Funktion in worker/index.js), nie direkt von Google ---- */
  var TZ = 'Europe/Berlin';
  var cal = { state: 'idle', events: [] };
  function calCfg() {
    var c = LINKS.calendar || {}, id = String(c.id || '').trim(), api = String(c.api || '').trim();
    return { id: /^[^\s@]+@[^\s@]+$/.test(id) ? id : '', api: /^\/[A-Za-z0-9_\-\/]*$/.test(api) ? api : '' };
  }
  function calLinks() {
    var id = calCfg().id; if (!id) return null;
    return {
      open: 'https://calendar.google.com/calendar/embed?src=' + encodeURIComponent(id) + '&ctz=' + encodeURIComponent(TZ) + '&hl=' + LANG,
      sub: 'https://calendar.google.com/calendar/r?cid=' + btoa(id).replace(/=+$/, '')
    };
  }
  function ymdIn(d) { return new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d); }
  function hmIn(d) { return new Intl.DateTimeFormat(T.locale, { timeZone: TZ, hour: LANG === 'en' ? 'numeric' : '2-digit', minute: '2-digit', hour12: LANG === 'en' }).format(d); }
  function addDays(ymd, n) { var d = new Date(ymd + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
  function fromCal(x) {
    try {
      if (!x || !x.start) return null;
      var out = { date: '', time: '', endDate: '', sort: String(x.start), title: String(x.title || ''), place: String(x.place || ''), note: String(x.note || '') };
      if (x.allDay) {
        out.date = String(x.start).slice(0, 10);
        var last = x.end ? addDays(String(x.end).slice(0, 10), -1) : out.date;
        if (last > out.date) out.endDate = last; else out.time = T.calAllDay;
      } else {
        var s = new Date(x.start), e = x.end ? new Date(x.end) : null;
        if (isNaN(s.getTime())) return null;
        out.date = ymdIn(s); out.time = hmIn(s) + T.calClock;
        if (e && !isNaN(e.getTime()) && e > s) {
          var endDay = ymdIn(new Date(e.getTime() - 60000));   // Ende exakt um Mitternacht gehört noch zum Vortag
          if (endDay === out.date) out.time = hmIn(s) + ' – ' + hmIn(e) + T.calClock;
          else { out.endDate = endDay; out.endTime = hmIn(e) + T.calClock; }
        }
      }
      return out.date ? out : null;
    } catch (err) { return null; }
  }
  function refreshEvents() {
    var el = document.getElementById('events'); if (!el) return;
    el.outerHTML = eventsHTML(state);
  }
  function loadCalendar() {
    var C = calCfg(); if (!C.api || !window.fetch) { cal.state = 'idle'; return; }
    var ctl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, 9000);
    fetch(C.api, { headers: { Accept: 'application/json' }, credentials: 'omit', signal: ctl ? ctl.signal : undefined })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
      .then(function (j) { cal.events = (j && Array.isArray(j.events) ? j.events : []).map(fromCal).filter(Boolean); cal.state = 'ok'; })
      .catch(function () { cal.state = 'error'; cal.events = []; })
      .then(function () { clearTimeout(timer); refreshEvents(); });
  }
  cal.state = calCfg().api ? 'loading' : 'idle';

  function eventsHTML(s) {
    var t = today(), CL = calLinks(), CAP = 12;
    var list = s.events.filter(function (e) { return e.title || e.date; }).concat(cal.events).slice()
      .sort(function (a, b) { return ((a.date || '9999') + (a.sort || a.time || '')).localeCompare((b.date || '9999') + (b.sort || b.time || '')); });
    var shown = list.filter(function (e) { return !e.date || (e.endDate || e.date) >= t; });
    var more = shown.length > CAP; shown = shown.slice(0, CAP);
    var body = shown.length
      ? '<div class="events">' + shown.map(function (e) { return eventCard(e, false); }).join('') + '</div>'
      : (cal.state === 'loading'
        ? '<div class="empty frame cal-loading" role="status">' + icon('calendar', 'ic') + '<div><h3>' + T.calLoading + '</h3><p>' + T.calLoadingP + '</p></div></div>'
        : '<div class="empty frame">' + icon('calendar', 'ic') + '<div><h3>' + T.evEmptyT + '</h3><p>' + T.evEmptyP + '</p></div>' + waBtn('btn-red', T.evEmptyBtn) + '</div>');
    var actions = CL
      ? '<div class="cal-actions">' + (more ? '<p class="muted">' + T.calMore + '</p>' : '') +
        '<div class="cal-buttons"><a class="btn btn-red" href="' + esc(CL.open) + '" target="_blank" rel="noopener noreferrer">' + icon('calendar') + '<span>' + T.calOpen + '</span></a>' +
        '<a class="btn btn-line" href="' + esc(CL.sub) + '" target="_blank" rel="noopener noreferrer"><span>' + T.calSub + '</span></a></div></div>'
      : '';
    return '<section class="sec" id="events" aria-labelledby="ev-t"><div class="wrap">' +
      '<div class="sec-head"><p class="eyebrow">' + esc(T.evEyebrow) + '</p><h2 class="h2" id="ev-t">' + T.evTitle + '</h2>' +
      '<p class="lead">' + T.evLead + '</p></div>' + body + actions + '</div></section>';
  }

  function galleryItems(s) {
    return s.gallery.map(function (g) { return { src: imgSrc(g.src), caption: g.caption || '' }; }).filter(function (g) { return g.src; });
  }
  function galleryHTML(s) {
    var g = galleryItems(s);
    var body = g.length
      ? '<div class="gallery">' + g.map(function (x, i) {
          return '<button class="g-item" type="button" data-action="lb" data-i="' + i + '" aria-label="' + esc(T.galEnlarge + (x.caption ? ': ' + x.caption : '')) + '">' +
            '<img src="' + esc(x.src) + '" alt="' + esc(x.caption || T.galAlt) + '" loading="lazy">' + (x.caption ? '<span class="g-cap">' + esc(x.caption) + '</span>' : '') + '</button>';
        }).join('') + '</div>'
      : '<div class="gallery ph">' + [[T.galPh[0], 'talk'], [T.galPh[1], 'trip'], [T.galPh[2], 'candle']].map(function (p) {
          return '<div class="g-ph">' + icon(p[1]) + '<div><strong>' + p[0] + '</strong><span>' + T.galSoon + '</span></div></div>';
        }).join('') + '</div>';
    return '<section class="sec sec-2" id="gallery" aria-labelledby="gal-t"><div class="wrap">' +
      '<div class="sec-head"><p class="eyebrow">' + T.galEyebrow + '</p><h2 class="h2" id="gal-t">' + T.galTitle + '</h2>' +
      '<p class="lead">' + T.galLead + '</p></div>' + body + '</div></section>';
  }

  /* ---- Presse & Medien: Links zu Berichten über die Gemeinschaft (state.press), ersetzt die Galerie ---- */
  function pressHTML(s) {
    var items = (s.press || []).map(function (x) {
      var u = String((x && x.url) || '');
      return /^https:\/\//i.test(u) && x.title ? { url: u, title: x.title } : null;
    }).filter(Boolean);
    if (!items.length) return '';
    var rows = items.map(function (x) {
      return '<li><a class="press-link" href="' + esc(x.url) + '" target="_blank" rel="noopener noreferrer"><span>' + esc(x.title) + '</span><span class="press-arrow" aria-hidden="true">↗</span></a></li>';
    }).join('');
    var lead = ((T.prLead || '') + ' ' + (T.prNote || '')).trim();
    return '<section class="sec" id="press" aria-labelledby="pr-t"><div class="wrap">' +
      '<div class="sec-head"><p class="eyebrow">' + T.prEyebrow + '</p><h2 class="h2" id="pr-t">' + T.prTitle + '</h2>' +
      (lead ? '<p class="lead">' + lead + '</p>' : '') + '</div><ul class="press-list">' + rows + '</ul></div></section>';
  }

  /* ---- Instagram: Profil-Karte + optional selbst gepflegte Beitragsbilder (state.instagram.posts) ---- */
  function igPostUrl(u) {
    var m = String(u || '').match(/^https:\/\/(?:www\.)?instagram\.com\/(?:[A-Za-z0-9_.]+\/)?((?:p|reel|tv)\/[A-Za-z0-9_-]+)/i);
    return m ? 'https://www.instagram.com/' + m[1] + '/' : '';
  }
  function instaHTML(s) {
    var L = linkInfo(); if (!L.ig) return '';
    var posts = ((s.instagram && s.instagram.posts) || []).map(function (p) {
      return { src: imgSrc(p && p.src), url: igPostUrl(p && p.url) || L.ig.url, caption: (p && p.caption) || '', alt: (p && p.alt) || '' };
    }).filter(function (p) { return p.src; }).slice(0, 6);
    var grid = posts.length
      ? '<div class="ig-posts">' + posts.map(function (p) {
          return '<a class="ig-post" href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(T.igPostOpen + (p.alt || p.caption ? ': ' + (p.alt || p.caption) : '')) + '">' +
            '<img src="' + esc(p.src) + '" alt="' + esc(p.alt || p.caption || T.igPostAlt) + '" loading="lazy">' +
            (p.caption ? '<span class="g-cap">' + esc(p.caption) + '</span>' : '') + '</a>';
        }).join('') + '</div>'
      : '';
    return '<section class="sec" id="instagram" aria-labelledby="ig-t"><div class="wrap">' +
      '<div class="sec-head"><p class="eyebrow">' + T.igEyebrow + '</p><h2 class="h2" id="ig-t">' + T.igTitle + '</h2>' +
      '<p class="lead">' + T.igLead + '</p></div>' +
      '<div class="ig-grid' + (grid ? ' has-posts' : '') + '">' +
      '<article class="ig-card frame"><div class="ig-head">' +
      '<img class="ig-avatar" src="' + esc(ROOT + 'assets/images/logo-avatar.jpg') + '" alt="' + esc(T.igAvatarAlt) + '" width="96" height="96" loading="lazy">' +
      '<div><h3>' + esc(T.igName) + '</h3><a class="ig-handle" href="' + esc(L.ig.url) + '" target="_blank" rel="noopener noreferrer">@' + esc(L.ig.handle) + '</a></div></div>' +
      '<p>' + T.igCardP + '</p>' +
      '<div class="ig-cta">' + igBtn('btn-red', T.igProfileBtn) + '</div></article>' +
      grid + '</div></div></section>';
  }

  function joinHTML() {
    var L = linkInfo(), S = T.joinSteps;
    return '<section class="sec join on-red" id="join" aria-labelledby="join-t"><div class="wrap">' +
      '<div class="sec-head center"><p class="eyebrow">' + T.joinEyebrow + '</p><h2 class="h2" id="join-t">' + T.joinTitle + '</h2>' +
      '<p class="lead">' + T.joinLead + '</p></div>' +
      '<div class="join-grid">' +
      '<article class="jcard frame"><h3>' + icon('chat') + T.waTitle + '</h3>' +
      '<p>' + T.joinWaP + '</p>' +
      '<div class="chips"><span class="chip"><i></i>' + T.chipGeneral + '</span><span class="chip study"><i></i>' + esc(T.chipStudy) + '</span></div>' +
      qrTile('wa', true) + waBtn('btn-red', T.joinWaBtn) + '</article>' +
      '<article class="jcard frame"><h3>' + icon('camera') + 'Instagram</h3>' +
      '<p>' + T.joinIgP + '</p>' +
      '<div class="chips"><span class="chip">' + (L.ig ? '@' + esc(L.ig.handle) : esc(T.igSub)) + '</span></div>' +
      qrTile('ig', true) + igBtn('btn-red', T.joinIgBtn) + '</article></div>' +
      '<ol class="join-steps"><li><b>1</b>' + S[0] + '</li><li><b>2</b>' + S[1] + '</li><li><b>3</b>' + S[2] + '</li></ol>' +
      '</div></section>';
  }

  function faqHTML(s) {
    var items = s.faq.filter(function (f) { return f.q; }).map(function (f, i) {
      return '<details class="faq-item"' + (i === 0 ? ' open' : '') + '><summary><span>' + esc(f.q) + '</span><span class="pm" aria-hidden="true"></span></summary><div class="faq-a">' + paras(f.a) + '</div></details>';
    }).join('');
    return '<section class="sec" id="faq" aria-labelledby="faq-t"><div class="wrap faq-grid">' +
      '<div class="faq-side"><p class="eyebrow">' + T.faqEyebrow + '</p><h2 class="h2" id="faq-t">' + T.faqTitle + '</h2>' +
      '<p class="muted">' + T.faqSide + '</p>' +
      '<div class="hero-cta">' + waBtn('btn-red', T.faqBtn) + '</div></div>' +
      '<div class="faq-list">' + items + '</div></div></section>';
  }

  function addressText(m) { return [m.place, m.street, m.city].filter(Boolean).join(', '); }
  function locHTML(s) {
    var m = s.meeting;
    var maps = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(addressText(m));
    return '<section class="sec sec-2" id="location" aria-labelledby="loc-t"><div class="wrap loc-grid">' +
      '<div class="loc-art frame">' + ART.church.replace('%ARIA%', esc(T.artChurch)) + '<div class="ground"></div></div>' +
      '<div class="loc-text"><p class="eyebrow">' + T.locEyebrow + '</p><h2 class="h2" id="loc-t">' + T.locTitle + esc(m.place) + '</h2>' +
      '<address class="address"><strong>' + esc(m.place) + '</strong><span>' + esc(m.street) + '</span><span>' + esc(m.city) + '</span></address>' +
      '<div class="loc-facts"><div>' + icon('clock') + '<p><strong>' + esc(m.when) + '</strong>' + (m.mass ? '<br>' + esc(m.mass) : '') + '</p></div>' +
      (m.spot ? '<div>' + icon('users') + '<p>' + esc(m.spot) + '</p></div>' : '') + '</div>' +
      '<div class="loc-actions"><a class="btn btn-red" href="' + esc(maps) + '" target="_blank" rel="noopener noreferrer">' + icon('route') + '<span>' + T.route + '</span></a>' +
      '<button class="btn btn-line" type="button" data-action="copy-address">' + icon('copy') + '<span>' + T.copyAddr + '</span></button></div>' +
      '</div></div></section>';
  }

  function footHTML(s) {
    var L = linkInfo();
    var contact = [];
    if (L.wa) contact.push('<a href="' + esc(L.wa) + '" target="_blank" rel="noopener noreferrer">' + T.waTitle + '</a>');
    if (L.ig) contact.push('<a href="' + esc(L.ig.url) + '" target="_blank" rel="noopener noreferrer">Instagram @' + esc(L.ig.handle) + '</a>');
    return '<footer class="foot"><div class="wrap"><div class="foot-grid">' +
      '<div><span class="brand-t">Come &amp; See</span><p class="foot-verse">' + T.footVerse + '</p>' +
      '<p>' + T.footAbout + esc(s.meeting.when) + (s.meeting.place ? T.sunIn + esc(s.meeting.place) : '') + '.</p></div>' +
      '<div><h4>' + T.footPage + '</h4><nav aria-label="' + T.footAria + '">' + T.nav.map(function (n) { return '<a href="#' + n[0] + '" data-go="' + n[0] + '">' + n[1] + '</a>'; }).join('') + '</nav></div>' +
      '<div><h4>' + T.footContact + '</h4><nav aria-label="' + T.contactAria + '">' + (contact.join('') || '<span>' + T.footContactFallback + '</span>') + '</nav>' +
      (s.footer.contact ? '<p class="foot-contact">' + (/^[^\s@<>"]+@[^\s@<>"]+\.[A-Za-z]{2,}$/.test(s.footer.contact)
        ? '<a href="mailto:' + esc(s.footer.contact) + '">' + esc(s.footer.contact) + '</a>' : esc(s.footer.contact)) + '</p>' : '') + '</div>' +
      '</div><div class="foot-bottom"><span>© ' + new Date().getFullYear() + ' ' + T.copyright + '</span><span class="foot-legal">' +
      T.legal.map(function (l) { return '<a href="' + l[1] + '">' + l[0] + '</a>'; }).join('') + '</span></div></div></footer>';
  }

  /* ---------- Rendern ---------- */
  var app = document.getElementById('app');
  var layers = {};
  function layer(id) {
    if (!layers[id]) {
      var el = document.createElement('div');
      el.id = id; el.className = 'cs-layer'; el.hidden = true;
      document.body.appendChild(el); layers[id] = el;
    }
    return layers[id];
  }
  function renderPage() {
    var s = state;
    var y = window.scrollY;
    app.innerHTML = navHTML() + '<main>' + heroHTML(s) + aboutHTML(s) + sundayHTML(s) + eventsHTML(s) + instaHTML(s) + joinHTML() + faqHTML(s) + locHTML(s) + pressHTML(s) + '</main>' + footHTML(s);
    if (Math.abs(window.scrollY - y) > 2) window.scrollTo(0, y);
    renderFloat();
    onScroll();
  }
  function renderFloat() {
    var L = linkInfo(), f = layer('cs-float');
    f.hidden = false;
    var mob = L.wa
      ? '<a class="btn btn-gold fab-main fab-mob" href="' + esc(L.wa) + '" target="_blank" rel="noopener noreferrer">' + icon('chat') + '<span>' + T.fabWa + '</span></a>'
      : '<button class="btn btn-gold fab-main fab-mob" type="button" data-action="join">' + icon('qr') + '<span>' + T.fabNow + '</span></button>';
    f.innerHTML = '<div class="fab off" id="fab"><button class="btn btn-gold fab-main fab-desk" type="button" data-action="join">' + icon('qr') + '<span>' + T.fabDesk + '</span></button>' + mob +
      (L.ig ? '<a class="btn btn-gold fab-ig" href="' + esc(L.ig.url) + '" target="_blank" rel="noopener noreferrer" aria-label="' + esc(T.igOpen) + '">' + icon('camera') + '</a>' : '') + '</div>';
  }
  var fabTick = false;
  function onScroll() {
    if (fabTick) return; fabTick = true;
    requestAnimationFrame(function () {
      fabTick = false;
      var fab = document.getElementById('fab'); if (!fab) return;
      var hj = $('.hero-join'), js = $('#join'), vh = window.innerHeight;
      var pastHero = hj ? hj.getBoundingClientRect().bottom < 0 : true;
      var r = js ? js.getBoundingClientRect() : null;
      var inJoin = r ? (r.top < vh && r.bottom > 0) : false;
      fab.classList.toggle('off', !pastHero || inJoin);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* ---------- Overlays ---------- */
  function openJoin() {
    var m = layer('cs-modal');
    m.innerHTML = '<div class="overlay" data-backdrop="1"><div class="modal frame" role="dialog" aria-modal="true" aria-labelledby="m-t">' +
      '<button class="x-btn" type="button" data-action="close-modal" aria-label="' + T.modalClose + '">' + icon('close') + '</button>' +
      '<p class="eyebrow">' + T.jcEyebrow + '</p><h2 id="m-t">' + T.modalTitle + '</h2>' +
      '<p>' + T.modalP + '</p>' +
      '<div class="modal-qrs"><div class="qr-col">' + qrTile('wa') + '</div><div class="qr-col">' + qrTile('ig') + '</div></div>' +
      '<div class="hero-cta">' + waBtn('btn-red') + igBtn('btn-line', T.igOpen) + '</div></div></div>';
    m.hidden = false;
    var x = $('.x-btn', m); if (x) x.focus({ preventScroll: true });
  }
  function closeLayer(id) { var l = layers[id]; if (l) { l.hidden = true; l.innerHTML = ''; } }
  function openLightbox(i) {
    var g = galleryItems(state); if (!g.length) return;
    lbIndex = (i + g.length) % g.length;
    var x = g[lbIndex], l = layer('cs-lb');
    l.innerHTML = '<div class="overlay lightbox" data-backdrop="1" role="dialog" aria-modal="true" aria-label="' + esc(T.lbOf(lbIndex + 1, g.length)) + '">' +
      '<button class="x-btn" type="button" data-action="close-lb" aria-label="' + T.modalClose + '">' + icon('close') + '</button>' +
      (g.length > 1 ? '<button class="lb-nav lb-prev" type="button" data-action="lb-prev" aria-label="' + T.lbPrev + '">' + icon('left') + '</button>' +
        '<button class="lb-nav lb-next" type="button" data-action="lb-next" aria-label="' + T.lbNext + '">' + icon('right') + '</button>' : '') +
      '<figure class="lb-fig"><img src="' + esc(x.src) + '" alt="' + esc(x.caption || T.galAlt) + '">' +
      '<figcaption>' + esc(x.caption || '') + (g.length > 1 ? ' <span class="muted">(' + (lbIndex + 1) + '/' + g.length + ')</span>' : '') + '</figcaption></figure></div>';
    l.hidden = false;
  }
  function toast(msg) {
    var t = layer('cs-toast');
    t.innerHTML = '<div class="toast" role="status">' + esc(msg) + '</div>';
    t.hidden = false;
    clearTimeout(toast.t); toast.t = setTimeout(function () { t.hidden = true; }, 2800);
  }
  function scrollToId(id) {
    var el = document.getElementById(id); if (!el) return;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }
  function copyText(text, okMsg) {
    var fallback = function () { toast(text); };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { toast(okMsg); }, fallback);
      else fallback();
    } catch (e) { fallback(); }
  }

  /* ---------- Ereignisse ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target;
    var back = t.closest && t.closest('[data-backdrop]');
    if (back && t === back) { closeLayer('cs-modal'); closeLayer('cs-lb'); return; }
    var go = t.closest('[data-go]');
    if (go) {
      e.preventDefault(); scrollToId(go.getAttribute('data-go'));
      if (menuOpen) {
        menuOpen = false;
        var mm = document.getElementById('mmenu'); if (mm) mm.hidden = true;
        var mb = $('.menu-btn'); if (mb) { mb.setAttribute('aria-expanded', 'false'); mb.innerHTML = icon('menu'); }
      }
      return;
    }
    var a = t.closest('[data-action]'); if (!a) return;
    var act = a.getAttribute('data-action');
    if (act === 'join') { e.preventDefault(); openJoin(); }
    else if (act === 'close-modal') closeLayer('cs-modal');
    else if (act === 'menu') {
      menuOpen = !menuOpen;
      var m = document.getElementById('mmenu'); if (m) m.hidden = !menuOpen;
      a.setAttribute('aria-expanded', String(menuOpen)); a.innerHTML = icon(menuOpen ? 'close' : 'menu');
    }
    else if (act === 'lb') openLightbox(parseInt(a.getAttribute('data-i'), 10));
    else if (act === 'lb-prev') openLightbox(lbIndex - 1);
    else if (act === 'lb-next') openLightbox(lbIndex + 1);
    else if (act === 'close-lb') closeLayer('cs-lb');
    else if (act === 'copy-address') copyText(addressText(state.meeting), T.copied);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (layers['cs-lb'] && !layers['cs-lb'].hidden) closeLayer('cs-lb');
      else if (layers['cs-modal'] && !layers['cs-modal'].hidden) closeLayer('cs-modal');
    } else if (layers['cs-lb'] && !layers['cs-lb'].hidden) {
      if (e.key === 'ArrowLeft') openLightbox(lbIndex - 1);
      if (e.key === 'ArrowRight') openLightbox(lbIndex + 1);
    }
  });

  renderPage();
  loadCalendar();
})();

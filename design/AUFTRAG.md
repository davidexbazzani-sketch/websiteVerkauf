# Auftrag: Website „Studio Elbschein“

Baue die Website für „Studio Elbschein“, unser kleines Webdesign-Team aus Hamburg (Anna: Kundenkontakt, Jan: Fotos, Davide: Webentwicklung). Wir bauen Websites mit eigenen Fotos für inhabergeführte Läden in Blankenese, Rissen und Wedel. „Studio Elbschein“ ist ein Arbeitsname und wird später noch ausgetauscht.

## Das Designsystem liegt in `design/`

Lies es vollständig, bevor du Code schreibst:

1. `design/README.md` – Brand-Book: Tonalität, Farben, Typo, Abstände, Bilder, Icons und Regeln für die Umsetzung. Diese Regeln sind verbindlich.
2. `design/tokens.css` und `design/tokens.json` – alle Design Tokens als CSS-Variablen (Farben, Schriften, 8-px-Raster, Radien, Schatten, Maße).
3. `design/components/bundle.css` – fertige Styles aller Komponenten (Präfix `lu-`). Übernimm sie, aber ohne die Klassen `lu-pv*` (die sind nur für Vorschauen).
4. `design/components/bundle.js` – React-Referenzimplementierung aller Komponenten. Markup, Klassen, ARIA-Attribute, Verhalten und **alle Texte** (Objekt `content`) sind die Vorlage. `design/components/index.d.ts` beschreibt die Props.
5. `design/components/<Name>/README.md` – Regeln je Komponente.
6. `design/referenz/*.png` – Screenshots jeder Sektion, Desktop (1440 px) und Mobil (375 px) nebeneinander. Genau so soll es aussehen.
7. `design/fonts/` – Fraunces und Inter als WOFF2. Nur diese Dateien verwenden.

## Technik

- **Astro** (aktuelle Version), rein statischer Build. Baue die Komponenten aus `bundle.js` als `.astro`-Komponenten nach – mit demselben Markup und denselben Klassen. **Kein React im Browser.**
- JavaScript nur als kleines Vanilla-JS für: Burger-Menü (inkl. Esc zum Schließen und Fokus zurück auf den Button), Vorher/Nachher-Slider und Formular.
- **Kein Tracking, keine Cookies, keine externen Anfragen.** Schriften aus `public/fonts/`, Fraunces per `<link rel="preload">`. Keine Google Fonts, keine eingebetteten Karten, keine CDNs.
- **Zentrale Konfiguration** `src/config.ts` mit Name, Telefon (`tel:`-Link), WhatsApp-Link, E-Mail, Domain, Paketen, Preisen und Pflege-Abos. Der Name darf nirgendwo sonst fest im Code stehen – auch nicht in `<title>`, Meta-Tags, Footer, Impressum oder Favicon. Ein Namenswechsel muss mit einer einzigen Änderung erledigt sein.
- Platzhalter in `[eckigen Klammern]` (Mobilnummer, E-Mail, Umfang Pflege-Abo Plus, Rechtstexte) übernimmst du unverändert in die Konfiguration.

## Seiten

- `/` – Onepager in dieser Reihenfolge: Header, Hero, So funktioniert’s (`#so-gehts`), Vorher/Nachher (`#beispiele`), Pakete & Preise (`#pakete`), Über uns (`#ueber-uns`), Kontakt (`#kontakt`), Footer. Hero in **Variante A „Bogenfenster“**; Variante B „Schaufenster“ als Prop vorbereiten.
- `/impressum` und `/datenschutz` im schlichten Text-Layout (`LegalPage`) mit den Gerüst-Texten und dem gelben Entwurfshinweis.
- `404` im selben Stil, mit Link zur Startseite.

## Kontaktformular

- Felder, Pflichtfelder, Fehlermeldungen und alle Zustände genau wie `ContactForm` in `bundle.js`: normal, Fokus, Fehler bei Pflichtfeld, Senden läuft, Erfolg („Danke! Anna meldet sich innerhalb von 24 Stunden.“), Fehler beim Senden.
- Ohne JavaScript funktioniert es als normales POST-Formular; mit JavaScript per `fetch` ohne Seitenwechsel.
- Spam-Schutz über ein verstecktes Honeypot-Feld, kein Captcha von Drittanbietern.
- Die Buttons „Paket anfragen“ wählen das jeweilige Paket im Dropdown „Wunschpaket“ vor.
- **Wohin die Anfragen gehen, hängt vom Hosting ab – frag mich das, bevor du den Versand baust.** Bis dahin ist der Endpoint ein Wert in `src/config.ts`.

## Qualität

- Semantisches HTML, genau ein `<h1>`, jede Sektion als `<section aria-labelledby>`, Skip-Link „Zum Inhalt springen“, `<main id="inhalt">`, `lang="de"`.
- Vollständig per Tastatur bedienbar, sichtbarer Fokus (`--focus-ring`), Kontraste wie im README (WCAG AA), `prefers-reduced-motion` beachten.
- Bilder: vorerst die Platzhalter mit Motivbeschreibung. Später kommen echte Fotos über `astro:assets` (WebP/AVIF, `srcset`, `loading="lazy"` außer im Hero). Jedes Bild hat einen beschreibenden Alt-Text.
- Pro Seite Title und Meta-Description, Open-Graph-Tags, `sitemap.xml`, `robots.txt` und ein schlichtes SVG-Favicon (Initialen in Fraunces, aus dem Namen in der Konfiguration erzeugt).
- Ziel: Lighthouse mobil ≥ 95 in allen Kategorien.

## Vorgehen

1. Lies das Designsystem und schreib mir in 5–10 Zeilen, wie du es umsetzt. Sammle alle offenen Fragen (z. B. Hosting, Formularversand, Domain) und stell sie mir auf einmal.
2. Setze danach Sektion für Sektion um. Starte `npm run dev` und vergleiche jede Sektion bei 1440 px und 375 px mit den Screenshots in `design/referenz/`.
3. Zum Schluss muss `npm run build` ohne Fehler laufen. Schreib eine kurze `README.md` mit den Befehlen und der Stelle, an der Name und Kontaktdaten geändert werden.

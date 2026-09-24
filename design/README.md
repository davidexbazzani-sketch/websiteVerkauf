Studio Elbschein ist ein kleines Webdesign-Team aus Hamburg: Anna (Kundenkontakt), Jan (Fotos) und Davide (Webentwicklung). Wir bauen moderne Websites mit echten Fotos für inhabergeführte Geschäfte in Blankenese, Rissen und Wedel. Die Seite soll wirken wie ein gutes Café-Menü – hell, ruhig, hochwertig – und nicht wie eine IT-Firma. „Studio Elbschein“ ist ein Arbeitsname: Er steht an genau einer Stelle (`content.name`) und wird in der Umsetzung aus einer zentralen Konfiguration gelesen, damit er sich später mit einer Änderung austauschen lässt.

## Inhalt und Tonalität

- **Sie, nie du.** Hanseatisch-zurückhaltend, warm und persönlich. Kurze Sätze, keine Ausrufezeichen – außer im einen „Danke!“ nach dem Absenden.
- **Keine Fachbegriffe.** Nicht „responsive“, „SEO“, „CMS“, „Hosting-Stack“, sondern „auf jedem Handy gut lesbar“, „bei Google gut zu finden“, „wir kümmern uns um alles“. Wo ein Begriff unvermeidbar ist (Domain, Hosting), steht er in einer Liste, nie in einer Überschrift.
- **Menschen statt Agentur.** Namen nennen: „Anna kommt vorbei“, „Jan fotografiert Ihren Laden“. Kein „wir als Full-Service-Agentur“.
- **Leser im Mittelpunkt.** Überschriften sprechen über den Laden des Lesers: „Ihr Laden verdient eine Website, die so schön ist wie Ihr Schaufenster.“, „Erzählen Sie uns von Ihrem Laden“.
- **Lokal, aber dezent.** Elbe, Treppenviertel, maritimes Licht dürfen anklingen – über Bildmotive, das Bogenfenster im Hero, die treppenförmig versetzten Schritt-Karten. Keine Anker, Möwen, Steuerräder, Rettungsringe.
- **Zahlen im deutschen Format:** „1.290 €“, „29 €/Monat“, „2 Std.“, Datum „24.09.2026“. Gedankenstrich „–“ mit Leerzeichen, deutsche Anführungszeichen „…“.
- **Keine Emojis**, keine erfundenen Kundenstimmen oder Statistiken. Beispielkarten sind als „Beispiel“ gekennzeichnet, bis es echte Projekte gibt.
- Platzhalter stehen in eckigen Klammern: `[MOBILNUMMER]`, `[hallo@DOMAIN.de]`, `[Umfang festlegen]` (Pflege-Abo Plus).

## Farbe

- Seitenhintergrund ist `cream`. Karten liegen auf `sky` (Standard), abgehobene Elemente (Preiskarten, Formularpanel, Beispielkarten) auf `paper` mit `shadow-sm`.
- Sektionen wechseln zwischen `cream`, `sky-soft` (Vorher/Nachher, Kontakt) und `lavender-soft` (Über uns, Footer) – nie zwei gleich getönte Sektionen hintereinander.
- **Pastell nur als Fläche, nie als Text.** `sage`, `peach`, `lavender`, `sky` und alle `*-soft` sind Flächen; Text darauf ist immer `ink`.
- Einzige farbige Textfarben: `sage-deep` (Links, Überzeilen, Häkchen, Erfolg) und `error`. `sage-deep` und `ink-muted` nie auf `lavender` oder `sage` setzen – dort nur `ink`.
- Der primäre Button ist `primary` (Salbeigrün) mit `on-primary` (Anthrazit). Weiße Schrift auf Salbei ist verboten (1,9:1).
- Formularrahmen `line-strong` (3,3:1 auf `cream`), dekorative Linien `line`.
- Fehler und Erfolg haben immer Icon und Wort, nie nur Farbe.

Geprüfte Kontraste (WCAG AA): `ink` auf allen Flächen ≥ 5,6:1 · `ink-muted` auf `cream` 6,8:1, `sky` 5,7:1, `peach` 4,6:1 · `sage-deep` auf `cream` 6,1:1, `sky` 5,1:1 · `error` auf `cream` 6,5:1.

## Typografie

- Überschriften, Preise, Wortmarke und Zitate in **Fraunces** (`--font-display`), alles andere in **Inter** (`--font-body`).
- Beide Schriften sind als variable WOFF2-Dateien (Latin) in `fonts/` hinterlegt und werden **vom eigenen Server** geladen – nie über `fonts.googleapis.com` (DSGVO). `font-display: swap`; die Hero-Schrift per `<link rel="preload">` vorladen.
- Skala: `display-hero` 64/72 (mobil `display-hero-mobile` 40/48) nur für die H1 · `heading-section` 48/56 (mobil 32/40) für H2 · `heading-card` 24/32 für H3 · `price` 48/56 · `lead` 20/32 für Sublines · `body` 17/28 – bewusst groß, viele Leser sind 40–65 · `body-sm` 15/24 · `label` 16/24 halbfett für Buttons und Feldbeschriftungen · `eyebrow` 13/16 in Versalien mit 0,08em Sperrung · `caption` 13/20.
- Kursive Fraunces nur für das hervorgehobene Wort im Hero („*Schaufenster*“) und die Ziffern der Schritte. Nie ganze Absätze kursiv.
- Umschaltpunkt Mobil/Desktop ist `breakpoint` (880 px), per Container-Query auf die jeweilige Sektion.

## Raum und Layout

- **8-px-Raster:** alle Abstände aus `space-1` (8) bis `space-16` (128); `space-half` (4) nur zwischen Icon und Text.
- Inhaltsbreite `container-max` (1200 px), Seitenrand `space-6` (Desktop) / `space-3` (mobil). Lange Texte max. `prose-max` (720 px).
- Sektionen: `space-16` oben und unten (Desktop), `space-8` (mobil). Viel Weißraum ist gewollt.
- Onepager mit Ankern: `#so-gehts` (Navigation „Leistungen“), `#beispiele`, `#pakete`, `#ueber-uns`, `#kontakt`. Reihenfolge: Header · Hero · So funktioniert’s · Vorher/Nachher · Pakete & Preise · Über uns · Kontakt · Footer.

## Formen, Schatten, Zustände

- Buttons und Badges sind Pillen (`radius-full`). Karten und Fotos `radius-lg`, große Hero-Fotos und Panels `radius-xl`, Felder `radius-md`.
- Das **Bogenfoto** (oben halbrund, unten `radius-lg`) ist das wiedererkennbare Formmotiv – eine leise Anspielung auf die Fenster im Treppenviertel. Pro Ansicht höchstens einmal.
- Schatten sind weich und warm: `shadow-sm` für Karten, `shadow-md` für die hervorgehobene Preiskarte und Foto-Stapel, `shadow-lg` für Menü und Slider-Griff. Keine harten Rahmen plus Schatten.
- **Fokus:** überall `focus-ring` – 2 px `cream`-Abstand, dann 2 px `ink` – nur bei `:focus-visible`. Nie `outline: none` ohne Ersatz.
- Hover: primärer Button `sage-hover`, gedrückt `sage-pressed`; Karten mit Link heben sich um 2 px (`shadow-md`). Übergänge 150 ms `ease-out`; bei `prefers-reduced-motion` keine Animation.

## Bilder

- Große Fotoflächen für Jans Aufnahmen: Ladenfronten, Hände beim Blumenbinden, Kaffee, Inhaberinnen und Inhaber – natürliches, helles Licht, echte Orte, keine Stockfotos.
- Bis die Fotos da sind: `PhotoPlaceholder` in `peach`, `lavender` oder `sky` mit Motivbeschreibung. Diese Beschreibung wird später der Alt-Text.
- Jedes Bild bekommt einen beschreibenden Alt-Text („Inhaberin bindet einen Strauß mit Pfingstrosen“). Rein dekorative Flächen `alt=""`.
- Auslieferung als WebP/AVIF mit `srcset`, `loading="lazy"` außer im Hero.

## Icons

- Eigene, schlichte Linien-Icons im Bundle (`Icon`, 24er Raster, 1,75 px Strich, `currentColor`). Kein Icon-Font, keine externe Bibliothek.
- Icons stehen immer neben Text; allein nur mit `label`.
- Für WhatsApp wird kein Markenlogo nachgezeichnet: Icon `chat` plus das Wort „WhatsApp“. Wer das offizielle Logo nutzen will, lädt es aus dem Brand-Kit von WhatsApp.
- Es gibt kein Bildlogo: die Wortmarke ist der Name in Fraunces (`wordmark`).

## Umsetzung (für die Übergabe)

- Statische Seite mit Astro oder reinem HTML/CSS. Die React-Komponenten im Bundle sind die **Referenz** für Markup, Klassen und Verhalten – in Astro als `.astro`-Komponenten nachbauen, `bundle.css` und die Token-Variablen direkt übernehmen. JavaScript nur für Burger-Menü, Vorher/Nachher-Slider und Formular.
- Kein Tracking, keine Cookies, keine externen Skripte, Schriften oder Karten-Einbettungen (Karte als statisches Bild mit Link zu einem Kartendienst).
- Semantisches HTML: ein `<h1>`, jede Sektion `<section aria-labelledby>`, Navigation in `<nav>`, Listen als `<ul>`/`<ol>`. Vollständig per Tastatur bedienbar; ein „Zum Inhalt springen“-Link als erstes Element.
- `lang="de"`, `<meta name="viewport">`, sinnvolle `<title>` und Meta-Beschreibung pro Seite.
- Unterseiten `impressum.html` und `datenschutz.html` nutzen `LegalPage`. Die Rechtstexte sind Gerüste mit Platzhaltern und müssen vor dem Livegang geprüft werden.
- Klassen tragen das Präfix `lu-`. Die Klassen `lu-pv*` in `bundle.css` sind nur für die Vorschauen und gehören nicht auf die Website.

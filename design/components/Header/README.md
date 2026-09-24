# Header

Sticky Kopfzeile mit Wortmarke, Ankernavigation (Leistungen, Pakete, Über uns, Kontakt) und dem Button „Kostenlosen Entwurf anfragen“; unter 880 px ein Burger-Menü.

- **Props:** `name`, `links` (`[{label, href}]`), `cta` (`{label, href}`), `skipHref`, `current` (href des aktiven Ankers → `aria-current`), `defaultOpen` (nur Vorschau).
- Höhe 80 px (Desktop) / 64 px (mobil), Fläche `cream`, Unterkante `line`.
- Burger: `<button aria-expanded aria-controls>`, Tippfläche 48 px, Label „Menü öffnen/schließen“. Menü schließt beim Tippen auf einen Link; Esc zum Schließen in der Umsetzung ergänzen.
- Sektionen brauchen `scroll-margin-top` in Header-Höhe, damit Anker nicht unter dem Header landen. Sanftes Scrollen nur ohne `prefers-reduced-motion`.
- Aktiver Link: 2 px Unterstrich in `sage`.
- Erstes Element ist der Link „Zum Inhalt springen“ (`skipHref`, Standard `#inhalt`), sichtbar erst bei Tastaturfokus – dafür `<main id="inhalt">` setzen.

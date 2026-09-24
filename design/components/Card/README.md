# Card

Allgemeine Karte mit optionalem Bild, Badge, Überzeile, Titel, Text und „Mehr“-Zeile – z. B. die Beispielkarten Café, Blumenladen, Restaurant.

- **Props:** `tone` `"sky"` (Standard) | `"paper"` | `"peach"` | `"lavender"` | `"sage"`, `media` (meist `PhotoPlaceholder`), `badge`, `eyebrow`, `title`, `headingLevel` (Standard `h3`), `href` (ganze Karte klickbar), `more`, `children` (Text oder eigene Inhalte).
- Radius `radius-lg`, Innenabstand 24 px (mobil) / 32 px; `paper` mit `shadow-sm`, auf Hover leicht angehoben (`shadow-md`).
- Text `ink`, Nebentext `ink-muted`. Karten nie mit farbigem Seitenrand.

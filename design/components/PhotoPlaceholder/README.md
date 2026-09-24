# PhotoPlaceholder

Fläche für Jans Fotos: bis die Bilder da sind, ein Pastell-Platzhalter mit Kamera-Icon und Beschriftung; mit `src` wird daraus ein echtes `<img>`.

- **Props:** `label` (beschreibt das Motiv – wird zum Alt-Text), `src`, `alt` (sonst `label`), `tone` `"peach" | "lavender" | "sky" | "sage" | "peach-soft" | "lavender-soft"`, `shape` `"arch"` (Bogen oben – wie die Fenster im Treppenviertel) | `"xl"` | Standard (`radius-lg`), `ratio` (z. B. `"4 / 5"`), `hideLabel`.
- Alt-Texte beschreiben, was zu sehen ist: „Inhaberin bindet einen Strauß mit Pfingstrosen“, nicht „Bild1“.
- Bilder als WebP/AVIF in 2 Größen (`srcset`), `loading="lazy"` außer im Hero.
- Motive: Ladenfronten, Hände bei der Arbeit, Kaffee, Inhaber – natürliches, helles Licht, keine Stockfotos.

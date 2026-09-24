# Hero

Erster Bildschirm: Headline, Subline, zwei Buttons und drei kurze Vertrauenspunkte – in zwei Varianten.

- **Variante A `split` („Bogenfenster“):** Text links (7/12), rechts ein hohes Foto mit Bogen oben – eine leise Anspielung auf die Fenster im Treppenviertel –, davor ein kleines Foto und eine Notiz „Anna bringt Ihren Entwurf persönlich vorbei“. Ruhig, persönlich; Empfehlung für den Start.
- **Variante B `window` („Schaufenster“):** zentrierter Text, darunter drei Fotos in gestaffelter Höhe wie eine Auslage, dahinter ein Band in `sky-soft`. Stärker bildgetrieben – gut, sobald Jans Fotos da sind.
- **Props:** `variant`, `eyebrow`, `title`, `emphasis` (Wort im Titel, das kursiv gesetzt wird – Standard „Schaufenster“), `subtitle`, `cta`, `secondary`, `trust` (Liste), `note` (nur A).
- Typo: H1 `display-hero` 64/72 → mobil `display-hero-mobile` 40/48, Subline `lead` in `ink-muted`.
- Das Hero-Foto lädt ohne `lazy` und mit `fetchpriority="high"`. Nur eine H1 pro Seite.

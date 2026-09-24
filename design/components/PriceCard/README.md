# PriceCard

Preiskarte für ein Paket: Name, Kurzbeschreibung, Preis, Leistungsliste mit Häkchen und Button „Paket anfragen“.

- **Props:** `name`, `desc`, `price` (als Text, deutsches Format „1.290 €“), `unit` (Standard „einmalig“), `features` (Liste), `highlighted` (mittlere Karte), `badge` (Standard „Beliebt“), `ctaLabel`, `ctaHref`.
- Normal: `paper`, Rand `line`, `shadow-sm`, sekundärer Button. Hervorgehoben: `sage-soft`, 2 px Rand `sage`, `shadow-md`, Badge „Beliebt“ in `lavender`, primärer Button, auf Desktop 16 px größer als die Nachbarn.
- Preis `price` (Fraunces 48/56); Häkchen `sage-deep`.
- Der Button verlinkt auf `#kontakt` und sollte das Paket im Formular vorauswählen (z. B. `#kontakt?paket=laden` auswerten).

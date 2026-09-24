# Button

Pillenförmiger Button für Aktionen und Links; **primär** (Salbeigrün) höchstens einmal pro Sichtbereich, für „Kostenlosen Entwurf anfragen“ oder „Anfrage senden“.

- **Props:** `variant` `"primary" | "secondary"`, `size` `"md"` (48 px) | `"lg"` (56 px, Hero und Formular), `href` (rendert `<a>`), `icon` / `iconRight` (Icon-Name), `loading` + `loadingLabel`, `block` (volle Breite), sonst alle Button-/Link-Attribute. `state="hover"|"focus"` nur für Vorschauen.
- **Farben:** primär `primary` mit Text `on-primary` (Anthrazit – nie Weiß). Hover `sage-hover`, gedrückt `sage-pressed`. Sekundär: transparent, 2 px Rahmen in `ink`.
- **Fokus:** `focus-ring` (Cremeweiß-Abstand + Anthrazit), nur bei `:focus-visible`.
- **Texte:** Verb am Ende, wie man spricht: „Pakete ansehen“, „Anfrage senden“. Kein „Jetzt!“, keine Ausrufezeichen.
- **Mobil:** Buttons in Hero und Karten werden volle Breite.
- Nicht: zwei primäre Buttons nebeneinander; Buttons als reine Textlinks im Fließtext (dort `.lu-link`).

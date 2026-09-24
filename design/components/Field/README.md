# Field

Beschriftetes Formularfeld – Text, E-Mail, Telefon, Auswahl (`select`) oder mehrzeilig (`textarea`) – mit Hinweis- und Fehlerzeile.

- **Props:** `label`, `type` (`"text" | "email" | "tel" | "select" | "textarea"`), `required` (zeigt „*“, setzt `aria-required`), `hint`, `error` (Text → roter Rahmen, `aria-invalid`, Meldung mit Icon), `options` + `placeholderOption` (Auswahl), `inputRef`, sonst alle Input-Attribute (`value`, `onChange`, `autoComplete`, …). `state="focus"` nur für Vorschauen.
- Maße: 56 px hoch, `radius-md`, Rahmen 1,5 px `line-strong` (3,4:1), Hintergrund `paper`. Fokus: Rahmen `ink` + `focus-ring`. Fehler: 2 px `error`, Meldung in `error` mit Icon `hinweis` – nie nur über die Farbe.
- Label immer sichtbar über dem Feld (kein Platzhalter als Label). Fehlertexte sagen, was zu tun ist: „Bitte geben Sie Ihre E-Mail-Adresse an.“
- `autocomplete`-Werte setzen (`name`, `organization`, `tel`, `email`).

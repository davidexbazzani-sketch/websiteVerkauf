# Checkbox

Große, gut treffbare Checkbox (24 px Kästchen, ganze Zeile klickbar) – vor allem die Pflicht-Checkbox zur Datenschutzerklärung.

- **Props:** `label` (Text oder Elemente mit Link), `required`, `error`, `checked`/`defaultChecked`, `onChange`, `inputRef`.
- Kästchen: Rahmen `line-strong`, angehakt `sage` mit Häkchen in `ink`; Fehler 2 px `error` plus Meldung mit Icon.
- Natives `<input type="checkbox">` bleibt im DOM (unsichtbar) – Tastatur und Screenreader funktionieren ohne Zusatzcode.

# ContactForm

Anfrageformular mit Name*, Name des Geschäfts*, Telefon, E-Mail*, Wunschpaket, Nachricht und Pflicht-Checkbox Datenschutz – inklusive aller Zustände.

- **Zustände:** normal · Fokus · Fehler bei Pflichtfeldern (Sammelhinweis oben + Meldung am Feld, Fokus springt ins erste fehlerhafte Feld) · Senden läuft (Button mit Spinner „Wird gesendet …“, Felder gesperrt, `aria-busy`) · Erfolg („Danke! Anna meldet sich innerhalb von 24 Stunden.“, `role="status"`) · Fehler beim Senden (Hinweis mit Telefonnummer, `role="alert"`, Eingaben bleiben erhalten).
- **Props:** `onSubmit(values) → Promise` (resolve = Erfolg, reject = Fehler; Standard ist eine Simulation), `values` (Startwerte), `privacyHref`, `successMessage`. Nur für Vorschauen: `status`, `errors`, `focusField`.
- Validierung clientseitig (`validate` im Bundle) – dieselben Regeln serverseitig wiederholen. `noValidate`, damit die eigenen deutschen Meldungen erscheinen.
- Ohne Tracking und ohne Drittanbieter-Captcha: Spam-Schutz über ein verstecktes Honeypot-Feld und serverseitige Prüfung.
- Zwei Felder pro Zeile ab 880 px, mobil eine Spalte.

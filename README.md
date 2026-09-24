# Website für Läden in den Elbvororten

Statische Website (Astro) nach dem Designsystem in `design/`. Kein Tracking, keine Cookies, keine externen Anfragen – Schriften liegen in `public/fonts/`.

## Befehle

```bash
npm install        # einmalig
npm run dev        # Entwicklung: http://localhost:4321
npm run build      # statischer Build nach dist/
npm run preview    # Build lokal ansehen
npm run check      # Typen und Astro-Komponenten prüfen
```

## Name und Kontaktdaten ändern

Alles steht in **`src/config.ts`** – an genau einer Stelle:

| Was | Feld |
| --- | --- |
| Name (Arbeitsname „Studio Elbschein“) | `name` – erscheint in Title, Meta, Open Graph, Wortmarke, Footer, Impressum und Favicon |
| Domain | `site` – für Canonical, Sitemap, robots.txt und Open-Graph-Bilder |
| Telefon, WhatsApp, E-Mail | `phone`, `phoneHref`, `whatsappHref`, `email`, `emailHref` |
| Pakete, Preise, Leistungen | `packages` (das Dropdown „Wunschpaket“ folgt automatisch) |
| Pflege-Abos | `care` |
| Texte von Hero, Schritten, Beispielen, Team | `hero`, `steps`, `examples`, `about` |
| Rechtstexte: Datum und gelber Entwurfshinweis | `legal.updated`, `legal.showNotice` |
| Kontaktformular | `formEndpoint`, `formSuccessPath`, `formSuccess` |

Platzhalter in `[eckigen Klammern]` (Mobilnummer, E-Mail, Umfang Pflege-Abo Plus, Rechtstexte) sind noch offen. Die Rechtstexte in `src/components/ImpressumText.astro` und `DatenschutzText.astro` sind Gerüste und müssen vor dem Livegang geprüft werden.

## Kontaktformular

Das Formular schickt ein POST mit den Feldern `name`, `business`, `phone`, `email`, `package`, `message`, `privacy` und dem Honeypot `website` an `formEndpoint`.

- Mit JavaScript: Versand per `fetch`, Antwort mit Status 2xx = Erfolg, alles andere = „Das hat leider nicht geklappt“.
- Ohne JavaScript: normales POST; der Server leitet danach auf `/danke` weiter.
- `server/anfrage.php` ist eine fertige Referenz für PHP-Hosting (Prüfung, Honeypot, E-Mail-Versand). Bei anderem Hosting dient sie als Vorlage für eine Serverless-Funktion.

**Offen:** Hosting und Zieladresse der Anfragen. Bis dahin zeigt `formEndpoint` auf `/api/anfrage`.

## Struktur

```
src/config.ts            zentrale Konfiguration
src/layouts/Base.astro   <head>, Meta, Open Graph, Favicon, Schrift-Preload
src/components/          alle Komponenten (Markup und Klassen wie im Design-Bundle)
src/scripts/form.ts      Formular-Logik (Vanilla JS)
src/styles/tokens.css    Design Tokens (aus design/tokens.css)
src/styles/components.css  Komponenten-Styles (aus design/components/bundle.css, ohne lu-pv*)
src/styles/site.css      kleine Ergänzungen (Anker-Abstand, vier Preiskarten, No-JS-Fallback)
src/pages/               /, /impressum, /datenschutz, /danke, 404, favicon.svg, og/*.png, robots.txt
public/fonts/            Fraunces und Inter (WOFF2)
server/anfrage.php       Referenz-Endpoint für PHP-Hosting
```

Favicon und Open-Graph-Bilder werden beim Build aus dem Namen erzeugt (`src/lib/glyphs.ts`); es gibt keine Bilddateien zum Pflegen.

## Hero-Variante

`src/pages/index.astro`: `<Hero variant="split" />` ist die Variante „Bogenfenster“, `variant="window"` die Variante „Schaufenster“.

## Echte Fotos einbauen

`PhotoPlaceholder` nimmt `src` und `alt` entgegen und rendert dann ein `<img>` (`loading="lazy"`, im Hero `priority`). Für WebP/AVIF mit `srcset` später auf `astro:assets` umstellen; die Motivbeschreibungen in `src/config.ts` werden die Alt-Texte.

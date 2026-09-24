/**
 * Zentrale Konfiguration der Website.
 *
 * Alles, was sich später ändern kann, steht hier an genau einer Stelle:
 * Name, Kontaktdaten, Domain, Pakete, Preise, Pflege-Abos und der
 * Endpoint des Kontaktformulars. Platzhalter stehen in [eckigen Klammern].
 */

export interface Link { label: string; href: string }
export interface Step { icon: 'besuch' | 'kamera' | 'online'; title: string; text: string; tone: 'peach' | 'lavender' | 'sage' }
export interface Example { title: string; text: string; photo: string; tone: 'peach' | 'lavender' | 'sky'; href?: string }
export interface Package { id: string; name: string; price: string; unit?: string; desc: string; features: string[]; highlighted?: boolean }
export interface CarePlan { name: string; price: string; text: string }
export interface Person { name: string; role: string; quote: string; photo: string; tone: 'peach' | 'lavender' | 'sky' }

export const config = {
  /** Arbeitsname – hier zentral austauschen. Erscheint in Title, Meta, Footer, Impressum und Favicon. */
  name: 'Studio Elbschein',

  /** Domain der Website (ohne Slash am Ende). Platzhalter, bis die Domain feststeht. */
  site: 'https://example.de',

  /** Kontaktdaten. Platzhalter unverändert lassen, bis Nummer und E-Mail feststehen. */
  phone: '[MOBILNUMMER]',
  phoneHref: 'tel:+49000000000',
  whatsappHref: 'https://wa.me/49000000000',
  email: '[hallo@DOMAIN.de]',
  emailHref: 'mailto:hallo@example.de',
  region: 'Wir sind in Blankenese, Rissen und Wedel unterwegs – gern auch persönlich.',
  description: 'Moderne Websites mit eigenen Fotos für inhabergeführte Geschäfte in Blankenese, Rissen und Wedel.',

  /**
   * Kontaktformular. Wohin die Anfragen gehen, hängt vom Hosting ab.
   * `formEndpoint` nimmt ein POST mit den Feldern name, business, phone, email,
   * package, message, privacy und dem Honeypot-Feld `website` entgegen.
   * Mit JavaScript erwartet die Seite eine Antwort mit Status 2xx; ohne JavaScript
   * soll der Server nach dem Versand auf `formSuccessPath` weiterleiten.
   * Eine Referenz für PHP-Hosting liegt in `server/anfrage.php`.
   */
  formEndpoint: '/api/anfrage',
  formSuccessPath: '/danke',
  formSuccess: 'Anna meldet sich innerhalb von 24 Stunden.',
  formPackageUnknown: 'Weiß ich noch nicht',

  nav: [
    { label: 'Leistungen', href: '#so-gehts' },
    { label: 'Pakete', href: '#pakete' },
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Kontakt', href: '#kontakt' },
  ] as Link[],
  cta: { label: 'Kostenlosen Entwurf anfragen', href: '#kontakt' } as Link,

  hero: {
    eyebrow: 'Für Läden in den Elbvororten',
    title: 'Ihr Laden verdient eine Website, die so schön ist wie Ihr Schaufenster.',
    emphasis: 'Schaufenster',
    subtitle: 'Moderne Websites für Geschäfte in Blankenese, Rissen und Wedel – mit eigenen Fotos, persönlich betreut.',
    secondary: { label: 'Pakete ansehen', href: '#pakete' } as Link,
    trust: ['Kostenloser Entwurf', 'Eigene Fotos statt Stockbilder', 'Persönlich vor Ort'],
    note: 'Anna bringt Ihren Entwurf persönlich vorbei – kostenlos.',
  },

  steps: [
    { icon: 'besuch', title: 'Wir kommen vorbei', text: 'Anna besucht Sie im Laden und zeigt Ihnen einen kostenlosen Entwurf – ganz unverbindlich.', tone: 'peach' },
    { icon: 'kamera', title: 'Jan fotografiert Ihren Laden', text: 'Schaufenster, Produkte, Team: echte Bilder aus Ihrem Geschäft statt austauschbarer Stockfotos.', tone: 'lavender' },
    { icon: 'online', title: 'Ihre Website geht online', text: 'Davide baut die Seite, richtet Adresse und E-Mail ein – wir kümmern uns um alles.', tone: 'sage' },
  ] as Step[],

  examples: [
    { title: 'Café', text: 'Frühstückskarte, Öffnungszeiten und Bilder vom Tresen – auf dem Handy sofort gefunden.', photo: 'Milchkaffee auf einem Holztresen', tone: 'peach' },
    { title: 'Blumenladen', text: 'Sträuße der Saison, Bestellung per Telefon und ein Blick in die Werkstatt.', photo: 'Hände beim Binden eines Straußes', tone: 'lavender' },
    { title: 'Restaurant', text: 'Speisekarte, Tischreservierung und Fotos, die Appetit machen.', photo: 'Gedeckter Tisch am Fenster', tone: 'sky' },
  ] as Example[],

  /** Vier Pakete. `highlighted` markiert die Karte „Beliebt“. Preise als Text im deutschen Format. */
  packages: [
    {
      id: 'start', name: 'Start', price: '590 €', desc: 'Alles Wichtige auf einer Seite.',
      features: ['Onepager', 'Öffnungszeiten', 'Karte mit Anfahrt', 'Kontakt', 'Impressum & Datenschutz', 'Auf jedem Handy gut lesbar'],
    },
    {
      id: 'laden', name: 'Laden', price: '1.290 €', desc: 'Der vollständige Auftritt mit eigenen Fotos.', highlighted: true,
      features: ['Bis zu 5 Seiten', 'Fotoshooting (2 Std.)', 'Speisekarte oder Sortiment', 'Google-Unternehmensprofil', 'Kontaktformular'],
    },
    {
      id: 'premium', name: 'Premium', price: '2.290 €', desc: 'Zweisprachig, mit Buchung und fertigen Texten.',
      features: ['Bis zu 10 Seiten', 'Fotoshooting (4 Std.)', 'Deutsch + Englisch', 'Reservierung oder Terminbuchung', 'Instagram-Feed', 'Texte inklusive'],
    },
    {
      id: 'rundum', name: 'Rundum-sorglos', price: '3.990 €', desc: 'Website, Fotos, Videos und Ihr Auftritt bei Instagram und TikTok – wir kümmern uns um alles.',
      features: [
        'Alles aus Premium',
        'Instagram und TikTok eingerichtet',
        '3 Monate Beiträge und Anzeigen in den Elbvororten',
        'Kurzvideos aus Ihrem Laden',
        'QR-Aufsteller für Google-Bewertungen',
        'Gutscheine online verkaufen',
        'Speisekarte oder Flyer als Druckvorlage',
        'Pflege-Abo Plus im ersten Jahr inklusive',
      ],
    },
  ] as Package[],

  care: [
    { name: 'Basis', price: '29 €/Monat', text: 'Hosting, Domain, E-Mail, Updates, 30 Min. Änderungen' },
    { name: 'Plus', price: '49 €/Monat', text: 'Alles aus Basis und mehr – [Umfang festlegen]' },
  ] as CarePlan[],
  priceNote: 'Alle Preise gem. § 19 UStG ohne Umsatzsteuer. Das Anzeigenbudget für Instagram und TikTok kommt beim Paket Rundum-sorglos separat dazu.',

  about: {
    lead: 'Wir sind hier zu Hause und kennen die Läden, in denen wir selbst einkaufen.',
    people: [
      { name: 'Anna', role: 'Kundenkontakt', quote: 'Ich komme gern persönlich vorbei – bei einem Kaffee lässt sich am besten besprechen, was Ihr Laden braucht.', photo: 'Porträt Anna vor einer Ladentür', tone: 'peach' },
      { name: 'Jan', role: 'Fotograf', quote: 'Ich fotografiere Ihren Laden so, wie Ihre Stammkunden ihn kennen – im schönsten Licht des Tages.', photo: 'Porträt Jan mit Kamera an der Elbe', tone: 'lavender' },
      { name: 'Davide', role: 'Webentwicklung & Technik', quote: 'Ich baue Websites, die schnell laden, auf jedem Handy funktionieren und Ihnen keine Arbeit machen.', photo: 'Porträt Davide am Arbeitsplatz', tone: 'sky' },
    ] as Person[],
  },

  /** Rechtstexte: Datum „Stand“ und gelber Entwurfshinweis. Vor dem Livegang ausfüllen, prüfen lassen, Hinweis abschalten. */
  legal: {
    updated: '[Datum]',
    showNotice: true,
  },
};

/** Optionen des Dropdowns „Wunschpaket“: alle Paketnamen plus „Weiß ich noch nicht“. */
export const packageOptions = [...config.packages.map((p) => p.name), config.formPackageUnknown];

/** Initialen aus dem Namen, z. B. „Studio Elbschein“ → „SE“ (für das Favicon). */
export const initials = config.name
  .split(/\s+/)
  .filter(Boolean)
  .map((w) => w[0]!.toUpperCase())
  .slice(0, 2)
  .join('');

export type Config = typeof config;

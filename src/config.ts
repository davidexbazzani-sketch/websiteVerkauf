/**
 * Zentrale Konfiguration der Website.
 *
 * Alles, was sich später ändern kann, steht hier an genau einer Stelle:
 * Name, Kontaktdaten, Domain, Texte, Pakete, Preise, Pflege-Abos und der
 * Endpoint des Kontaktformulars. Platzhalter stehen in [eckigen Klammern].
 */

export interface Link { label: string; href: string }
export interface Step { icon: 'besuch' | 'kamera' | 'online'; title: string; text: string; tone: 'peach' | 'lavender' | 'sage' }
export interface Example { title: string; text: string; photo: string; tone: 'peach' | 'lavender' | 'sky'; href?: string }
export interface Point { eyebrow: string; title: string; text: string; tone: 'peach' | 'lavender' | 'sage' | 'sky' | 'paper' }
export interface Package { id: string; name: string; price: string; unit?: string; desc: string; features: string[]; highlighted?: boolean }
export interface CarePlan { name: string; price?: string; text: string }
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
  region: 'Wir kommen persönlich bei Ihnen vorbei – Sie müssen nichts vorbereiten.',
  description: 'Moderne Websites mit eigenen Fotos für Läden, Cafés, Restaurants und Dienstleister – persönlich betreut, von A bis Z.',
  /** Kurzform für den Seitentitel der Startseite */
  tagline: 'Websites für Läden, Cafés und Restaurants',

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
  formSuccess: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
  formPackageUnknown: 'Weiß ich noch nicht',

  nav: [
    { label: 'Leistungen', href: '#so-gehts' },
    { label: 'Pakete', href: '#pakete' },
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Kontakt', href: '#kontakt' },
  ] as Link[],
  cta: { label: 'Kostenlosen Entwurf anfragen', href: '#kontakt' } as Link,

  hero: {
    eyebrow: 'Für Läden, Cafés, Restaurants und Dienstleister',
    title: 'Ihre Kunden lieben, was Sie tun. Ihre Website sollte das zeigen.',
    emphasis: 'lieben',
    subtitle: 'Moderne Websites mit eigenen Fotos – persönlich betreut, von A bis Z. Bezahlt wird erst, wenn Sie zufrieden sind.',
    secondary: { label: 'Pakete ansehen', href: '#pakete' } as Link,
    trust: ['Kostenloser Entwurf', 'Eigene Fotos statt Stockbilder', 'Bezahlung erst bei Zufriedenheit'],
    note: 'Wir bringen Ihren Entwurf persönlich vorbei – kostenlos.',
  },

  /** Sektion „Warum eine Website“ */
  why: {
    eyebrow: 'Warum eine gute Website',
    title: 'Bevor jemand zu Ihnen kommt, schaut er ins Internet',
    intro: 'Auf dem Handy, unterwegs, kurz vor dem Besuch: Öffnungszeiten, Bilder, Speisekarte, Weg. Was man dort findet, entscheidet oft, ob man kommt – oder woanders hingeht.',
    points: [
      { eyebrow: 'Der erste Eindruck', title: 'Er entsteht auf dem Handy', text: 'Die meisten sehen Ihr Geschäft zuerst auf einem kleinen Bildschirm. Eine Seite, die dort schnell lädt und gut aussieht, ist wie ein gepflegtes Schaufenster.', tone: 'peach' },
      { eyebrow: 'Gefunden werden', title: 'Genau dann, wenn gesucht wird', text: '„Café in der Nähe“, „Blumen bestellen“, „Tisch reservieren“ – wer bei Google mit aktueller Website und Profil auftaucht, bekommt den Besuch.', tone: 'lavender' },
      { eyebrow: 'Vertrauen', title: 'Bevor man Sie kennt', text: 'Echte Fotos, klare Preise, ein persönliches Wort: So merkt man sofort, dass hinter Ihrem Geschäft Menschen stehen – und nicht ein Baukasten.', tone: 'sage' },
    ] as Point[],
    promiseLabel: 'Unser Versprechen',
    promise: [
      { name: 'Alles aus einer Hand', text: 'Website, Fotos, Texte, Adresse, E-Mail, Google-Profil – wir kümmern uns um alles von A bis Z.' },
      { name: 'Bezahlung erst bei Zufriedenheit', text: 'Sie sehen den fertigen Entwurf, bevor Sie sich entscheiden. Bezahlt wird erst, wenn Ihnen alles gefällt.' },
    ] as CarePlan[],
  },

  steps: {
    title: 'So funktioniert’s',
    intro: 'Drei Schritte, ein Ansprechpartner. Sie müssen nichts vorbereiten.',
    items: [
      { icon: 'besuch', title: 'Wir kommen vorbei', text: 'Wir besuchen Sie vor Ort, hören zu und zeigen Ihnen einen kostenlosen Entwurf – ganz unverbindlich.', tone: 'peach' },
      { icon: 'kamera', title: 'Wir fotografieren Ihr Geschäft', text: 'Räume, Produkte, Team: echte Bilder von Ihnen statt austauschbarer Stockfotos.', tone: 'lavender' },
      { icon: 'online', title: 'Ihre Website geht online', text: 'Wir bauen die Seite, richten Adresse und E-Mail ein und kümmern uns um alles. Bezahlt wird erst, wenn Sie zufrieden sind.', tone: 'sage' },
    ] as Step[],
  },

  showcase: {
    title: 'Aus „im Aufbau“ wird einladend',
    sliderTitle: 'Ziehen Sie den Regler',
    sliderText: 'Links eine typische Website von früher, rechts, wie Ihr Geschäft heute online aussehen kann: ruhig, gut lesbar und mit echten Fotos.',
  },

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
        '3 Monate Beiträge und Anzeigen in Ihrer Region',
        'Kurzvideos aus Ihrem Geschäft',
        'QR-Aufsteller für Google-Bewertungen',
        'Gutscheine online verkaufen',
        'Speisekarte oder Flyer als Druckvorlage',
        'Pflege-Abo Plus im ersten Jahr inklusive',
      ],
    },
  ] as Package[],

  pricingIntro: 'Feste Preise, keine versteckten Kosten. Der erste Entwurf ist kostenlos, bezahlt wird erst, wenn Sie zufrieden sind.',
  care: [
    { name: 'Basis', price: '29 €/Monat', text: 'Hosting, Domain, E-Mail, Updates, 30 Min. Änderungen' },
    { name: 'Plus', price: '49 €/Monat', text: 'Alles aus Basis und mehr – [Umfang festlegen]' },
  ] as CarePlan[],
  priceNote: 'Alle Preise gem. § 19 UStG ohne Umsatzsteuer. Das Anzeigenbudget für Instagram und TikTok kommt beim Paket Rundum-sorglos separat dazu.',

  about: {
    title: 'Drei Leute, ein Team',
    lead: 'Wir sind ein Team aus drei Fachleuten – Webdesign und Softwareentwicklung, Fotografie und Marketing. Sie haben einen Ansprechpartner, und wir kümmern uns um alles von A bis Z.',
    people: [
      { name: 'Webdesign & Software', role: 'Technik', quote: 'Ich baue Websites, die schnell laden, auf jedem Handy funktionieren und Ihnen keine Arbeit machen.', photo: 'Porträt am Arbeitsplatz mit Laptop', tone: 'sky' },
      { name: 'Fotografie', role: 'Bilder & Video', quote: 'Ich fotografiere Ihr Geschäft so, wie Ihre Stammkunden es kennen – im schönsten Licht des Tages.', photo: 'Porträt mit Kamera vor einer Ladentür', tone: 'lavender' },
      { name: 'Marketing', role: 'Sichtbarkeit', quote: 'Ich sorge dafür, dass Sie gefunden werden – bei Google, auf Instagram und überall dort, wo Ihre Kunden suchen.', photo: 'Porträt im Gespräch am Tresen', tone: 'peach' },
    ] as Person[],
  },

  contact: {
    title: 'Erzählen Sie uns von Ihrem Geschäft',
    intro: 'Wir melden uns innerhalb von 24 Stunden und vereinbaren einen Termin für Ihren kostenlosen Entwurf.',
    messagePlaceholder: 'Erzählen Sie uns kurz von Ihrem Geschäft – oder wann wir am besten vorbeikommen.',
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

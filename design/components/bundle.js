/* @ds-bundle: {"format":4,"namespace":"LadenUI","components":[{"name":"Button"},{"name":"Badge"},{"name":"Icon"},{"name":"Wordmark"},{"name":"Header"},{"name":"SectionHeading"},{"name":"PhotoPlaceholder"},{"name":"Hero"},{"name":"Card"},{"name":"StepCard"},{"name":"StepsSection"},{"name":"BeforeAfter"},{"name":"ShowcaseSection"},{"name":"PriceCard"},{"name":"CareStrip"},{"name":"PricingSection"},{"name":"PersonCard"},{"name":"AboutSection"},{"name":"Field"},{"name":"Checkbox"},{"name":"ContactForm"},{"name":"ContactInfo"},{"name":"ContactSection"},{"name":"Footer"},{"name":"LegalPage"}]} */
(function () {
  "use strict";
  var React = window.React;
  var h = React.createElement;
  var F = React.Fragment;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(" ");
  }
  function merge(base, props) {
    var o = Object.assign({}, base);
    for (var k in props) if (props[k] !== undefined) o[k] = props[k];
    return o;
  }
  function omit(obj, keys) {
    var o = {};
    for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) o[k] = obj[k];
    return o;
  }

  /* ---------------- Inhalte (Platzhalter in eckigen Klammern) ---------------- */
  var content = {
    name: "Studio Elbschein", /* Arbeitsname – hier zentral austauschen */
    phone: "[MOBILNUMMER]",
    phoneHref: "tel:+49000000000",
    whatsappHref: "https://wa.me/49000000000",
    email: "[hallo@DOMAIN.de]",
    emailHref: "mailto:hallo@example.de",
    region: "Wir sind in Blankenese, Rissen und Wedel unterwegs – gern auch persönlich.",
    description: "Moderne Websites mit eigenen Fotos für inhabergeführte Geschäfte in Blankenese, Rissen und Wedel.",
    nav: [
      { label: "Leistungen", href: "#so-gehts" },
      { label: "Pakete", href: "#pakete" },
      { label: "Über uns", href: "#ueber-uns" },
      { label: "Kontakt", href: "#kontakt" }
    ],
    cta: { label: "Kostenlosen Entwurf anfragen", href: "#kontakt" },
    hero: {
      eyebrow: "Für Läden in den Elbvororten",
      title: "Ihr Laden verdient eine Website, die so schön ist wie Ihr Schaufenster.",
      emphasis: "Schaufenster",
      subtitle: "Moderne Websites für Geschäfte in Blankenese, Rissen und Wedel – mit eigenen Fotos, persönlich betreut.",
      secondary: { label: "Pakete ansehen", href: "#pakete" },
      trust: ["Kostenloser Entwurf", "Eigene Fotos statt Stockbilder", "Persönlich vor Ort"],
      note: "Anna bringt Ihren Entwurf persönlich vorbei – kostenlos."
    },
    steps: [
      { icon: "besuch", title: "Wir kommen vorbei", text: "Anna besucht Sie im Laden und zeigt Ihnen einen kostenlosen Entwurf – ganz unverbindlich.", tone: "peach" },
      { icon: "kamera", title: "Jan fotografiert Ihren Laden", text: "Schaufenster, Produkte, Team: echte Bilder aus Ihrem Geschäft statt austauschbarer Stockfotos.", tone: "lavender" },
      { icon: "online", title: "Ihre Website geht online", text: "Davide baut die Seite, richtet Adresse und E-Mail ein – wir kümmern uns um alles.", tone: "sage" }
    ],
    examples: [
      { title: "Café", text: "Frühstückskarte, Öffnungszeiten und Bilder vom Tresen – auf dem Handy sofort gefunden.", photo: "Milchkaffee auf einem Holztresen", tone: "peach" },
      { title: "Blumenladen", text: "Sträuße der Saison, Bestellung per Telefon und ein Blick in die Werkstatt.", photo: "Hände beim Binden eines Straußes", tone: "lavender" },
      { title: "Restaurant", text: "Speisekarte, Tischreservierung und Fotos, die Appetit machen.", photo: "Gedeckter Tisch am Fenster", tone: "sky" }
    ],
    packages: [
      { id: "start", name: "Start", price: "590 €", desc: "Alles Wichtige auf einer Seite.", features: ["Onepager", "Öffnungszeiten", "Karte mit Anfahrt", "Kontakt", "Impressum & Datenschutz", "Mobiloptimiert"] },
      { id: "laden", name: "Laden", price: "1.290 €", desc: "Der vollständige Auftritt mit eigenen Fotos.", highlighted: true, features: ["Bis zu 5 Seiten", "Fotoshooting (2 Std.)", "Speisekarte oder Sortiment", "Google-Unternehmensprofil", "Kontaktformular"] },
      { id: "premium", name: "Premium", price: "2.290 €", desc: "Zweisprachig, mit Buchung und fertigen Texten.", features: ["Bis zu 10 Seiten", "Fotoshooting (4 Std.)", "Deutsch + Englisch", "Reservierung oder Terminbuchung", "Instagram-Feed", "Texte inklusive"] }
    ],
    care: [
      { name: "Basis", price: "29 €/Monat", text: "Hosting, Domain, E-Mail, Updates, 30 Min. Änderungen" },
      { name: "Plus", price: "49 €/Monat", text: "Alles aus Basis und mehr – [Umfang festlegen]" }
    ],
    priceNote: "Alle Preise gem. § 19 UStG ohne Umsatzsteuer.",
    about: {
      lead: "Wir sind hier zu Hause und kennen die Läden, in denen wir selbst einkaufen.",
      people: [
        { name: "Anna", role: "Kundenkontakt", quote: "Ich komme gern persönlich vorbei – bei einem Kaffee lässt sich am besten besprechen, was Ihr Laden braucht.", photo: "Porträt Anna vor einer Ladentür", tone: "peach" },
        { name: "Jan", role: "Fotograf", quote: "Ich fotografiere Ihren Laden so, wie Ihre Stammkunden ihn kennen – im schönsten Licht des Tages.", photo: "Porträt Jan mit Kamera an der Elbe", tone: "lavender" },
        { name: "Davide", role: "Webentwicklung & Technik", quote: "Ich baue Websites, die schnell laden, auf jedem Handy funktionieren und Ihnen keine Arbeit machen.", photo: "Porträt Davide am Arbeitsplatz", tone: "sky" }
      ]
    },
    form: {
      success: "Anna meldet sich innerhalb von 24 Stunden.",
      packages: ["Start", "Laden", "Premium", "Weiß ich noch nicht"]
    }
  };

  /* ---------------- Icon ---------------- */
  var ICONS = {
    besuch: ["M3.5 9 5 4h14l1.5 5", "M4.5 9v11h15V9", "M9.5 20v-6h5v6", "M3.5 9a2.83 2.83 0 0 0 5.67 0 2.83 2.83 0 0 0 5.66 0 2.83 2.83 0 0 0 5.67 0"],
    kamera: ["M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z", "M12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"],
    online: ["M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z", "M8 20h8", "M12 16v4", "m9 10 2 2 4-4"],
    telefon: ["M5 4h3.5l2 5-2.5 1.5a11 11 0 0 0 5.5 5.5l1.5-2.5 5 2V19a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],
    chat: ["M20.5 12a8.5 8.5 0 0 1-12.3 7.6L3.5 21l1.4-4.6A8.5 8.5 0 1 1 20.5 12z", "M8.5 12h.01M12 12h.01M15.5 12h.01"],
    mail: ["M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z", "m3.5 6.5 8.5 6 8.5-6"],
    check: ["M5 12.5 9.5 17 19 7.5"],
    menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
    close: ["M6 6l12 12", "M18 6 6 18"],
    pfeil: ["M5 12h14", "m13 6 6 6-6 6"],
    zurueck: ["M19 12H5", "m11 6-6 6 6 6"],
    ort: ["M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z", "M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"],
    hinweis: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 7.5V13", "M12 16.5h.01"],
    erfolg: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "m8 12.5 2.8 2.8L16.5 9.5"],
    foto: ["M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z", "M8.5 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z", "m21 15-5-5L5 19"],
    griff: ["m9 7-4 5 4 5", "m15 7 4 5-4 5"],
    runter: ["m6 9 6 6 6-6"],
    herz: ["M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z"]
  };
  function Icon(props) {
    var size = props.size || 24;
    var paths = ICONS[props.name] || ICONS.foto;
    return h("svg", {
      className: cx("lu-icon", props.className), width: size, height: size, viewBox: "0 0 24 24",
      fill: "none", stroke: "currentColor", strokeWidth: props.strokeWidth || 1.75, strokeLinecap: "round", strokeLinejoin: "round",
      "aria-hidden": props.label ? undefined : "true", role: props.label ? "img" : undefined, "aria-label": props.label, focusable: "false"
    }, paths.map(function (d, i) { return h("path", { key: i, d: d }); }));
  }
  Icon.names = Object.keys(ICONS);

  /* ---------------- Button ---------------- */
  function Button(props) {
    var variant = props.variant || "primary";
    var size = props.size || "md";
    var rest = omit(props, ["variant", "size", "href", "icon", "iconRight", "loading", "loadingLabel", "block", "className", "children", "state"]);
    var cls = cx("lu-btn", "lu-btn--" + variant, size === "lg" && "lu-btn--lg", props.block && "lu-btn--block",
      props.state === "hover" && "lu-is-hover", props.state === "focus" && "lu-is-focus", props.className);
    var inner = props.loading
      ? [h("span", { key: "s", className: "lu-spinner", "aria-hidden": "true" }), h("span", { key: "l" }, props.loadingLabel || "Wird gesendet …")]
      : [props.icon ? h(Icon, { key: "i", name: props.icon, size: 20 }) : null, h("span", { key: "c" }, props.children), props.iconRight ? h(Icon, { key: "r", name: props.iconRight, size: 20 }) : null];
    if (props.href && !props.loading) return h("a", Object.assign({ className: cls, href: props.href }, rest), inner);
    return h("button", Object.assign({ type: "button", className: cls }, rest, props.loading ? { "aria-busy": "true", disabled: true } : null), inner);
  }

  /* ---------------- Badge ---------------- */
  function Badge(props) {
    return h("span", { className: cx("lu-badge", props.tone && props.tone !== "lavender" && "lu-badge--" + props.tone, props.className) },
      props.icon ? h(Icon, { name: props.icon, size: 16 }) : null, props.children);
  }

  /* ---------------- Wortmarke ---------------- */
  function Wordmark(props) {
    var name = props.name || content.name;
    return h("a", { className: cx("lu-wordmark", props.className), href: props.href || "#top", "aria-label": name + " – zur Startseite" }, name);
  }

  /* ---------------- Header ---------------- */
  function Header(props) {
    var st = React.useState(!!props.defaultOpen);
    var open = st[0], setOpen = st[1];
    var id = React.useId();
    var links = props.links || content.nav;
    var cta = props.cta || content.cta;
    return h("header", { className: cx("lu-header", open && "lu-header--open", props.className) },
      h("a", { className: "lu-skip", href: props.skipHref || "#inhalt" }, "Zum Inhalt springen"),
      h("div", { className: "lu-container" },
        h("div", { className: "lu-header__bar" },
          h(Wordmark, { name: props.name }),
          h("nav", { className: "lu-header__nav", "aria-label": "Hauptnavigation" },
            h("ul", null, links.map(function (l, i) {
              return h("li", { key: i }, h("a", { href: l.href, "aria-current": props.current === l.href ? "true" : undefined }, l.label));
            }))),
          h(Button, { className: "lu-header__cta", href: cta.href }, cta.label),
          h("button", {
            type: "button", className: "lu-header__burger", "aria-expanded": open ? "true" : "false", "aria-controls": id,
            "aria-label": open ? "Menü schließen" : "Menü öffnen", onClick: function () { setOpen(!open); }
          }, h(Icon, { name: open ? "close" : "menu", size: 28 })))),
      h("div", { className: "lu-header__panel", id: id, hidden: open ? undefined : true },
        h("div", { className: "lu-container" },
          h("nav", { "aria-label": "Hauptnavigation mobil" },
            h("ul", null, links.map(function (l, i) {
              return h("li", { key: i }, h("a", { href: l.href, onClick: function () { setOpen(false); } }, l.label));
            }))),
          h(Button, { href: cta.href, size: "lg", block: true, onClick: function () { setOpen(false); } }, cta.label))));
  }

  /* ---------------- Überschriften-Block ---------------- */
  function SectionHeading(props) {
    var Tag = props.as || "h2";
    return h("div", { className: cx("lu-sh", props.align === "center" && "lu-sh--center", props.className) },
      props.eyebrow ? h("span", { className: "lu-eyebrow" }, props.eyebrow) : null,
      h(Tag, { className: "lu-sh__title", id: props.titleId }, props.title),
      props.intro ? h("p", { className: "lu-sh__intro" }, props.intro) : null);
  }

  /* ---------------- Foto-Platzhalter ---------------- */
  function PhotoPlaceholder(props) {
    var cls = cx("lu-photo", props.tone && "lu-photo--" + props.tone, props.shape === "arch" && "lu-photo--arch", props.shape === "xl" && "lu-photo--xl", props.className);
    var style = Object.assign({}, props.ratio ? { aspectRatio: props.ratio } : null, props.style);
    if (props.src) return h("div", { className: cls, style: style }, h("img", { src: props.src, alt: props.alt || props.label, loading: "lazy", decoding: "async" }));
    return h("div", { className: cls, style: style, role: "img", "aria-label": "Foto-Platzhalter: " + props.label },
      h("div", { className: "lu-photo__ph", "aria-hidden": "true" },
        h(Icon, { name: "kamera", size: 28, className: "lu-photo__icon" }),
        props.hideLabel ? null : h("span", { className: "lu-photo__chip" }, "Foto: " + props.label)));
  }

  /* ---------------- Hero ---------------- */
  function renderTitle(title, emphasis) {
    if (!emphasis || title.indexOf(emphasis) < 0) return title;
    var i = title.indexOf(emphasis);
    return [title.slice(0, i), h("em", { key: "e" }, emphasis), title.slice(i + emphasis.length)];
  }
  function Hero(props) {
    var c = merge(content.hero, props);
    var variant = props.variant || "split";
    var cta = props.cta || content.cta;
    var text = h("div", { className: "lu-hero__text" },
      c.eyebrow ? h("span", { className: "lu-eyebrow" }, c.eyebrow) : null,
      h("h1", { className: "lu-hero__title" }, renderTitle(c.title, c.emphasis)),
      h("p", { className: "lu-hero__sub" }, c.subtitle),
      h("div", { className: "lu-hero__ctas" },
        h(Button, { href: cta.href, size: "lg" }, cta.label),
        h(Button, { href: c.secondary.href, size: "lg", variant: "secondary" }, c.secondary.label)),
      c.trust ? h("ul", { className: "lu-hero__trust" }, c.trust.map(function (t, i) {
        return h("li", { key: i }, h(Icon, { name: "check", size: 20 }), t);
      })) : null);
    var media;
    if (variant === "window") {
      media = h("div", { className: "lu-hero__window" },
        h("div", { className: "lu-hero__panes" },
          h(PhotoPlaceholder, { label: "Ladenfront im Morgenlicht", tone: "lavender", shape: "arch" }),
          h(PhotoPlaceholder, { label: "Hände beim Blumenbinden", tone: "peach" }),
          h(PhotoPlaceholder, { label: "Kaffee am Tresen", tone: "sky" })));
    } else {
      media = h("div", { className: "lu-hero__media" },
        h(PhotoPlaceholder, { label: "Ladenfront im Morgenlicht", tone: "peach", shape: "arch", className: "lu-hero__arch" }),
        h(PhotoPlaceholder, { label: "Kaffee am Tresen", tone: "lavender", className: "lu-hero__small", hideLabel: true }),
        c.note ? h("p", { className: "lu-hero__note" }, h("span", { className: "lu-hero__note-icon", "aria-hidden": "true" }, h(Icon, { name: "besuch", size: 22 })), c.note) : null);
    }
    return h("section", { className: cx("lu-hero", "lu-hero--" + variant, props.className), id: props.id || "top", "aria-label": "Einleitung" },
      h("div", { className: "lu-container" }, h("div", { className: "lu-hero__inner" }, text, media)));
  }

  /* ---------------- Karte ---------------- */
  function Card(props) {
    var Tag = props.href ? "a" : "article";
    var HTag = props.headingLevel || "h3";
    return h(Tag, { className: cx("lu-card", props.tone && "lu-card--" + props.tone, props.className), href: props.href },
      props.badge ? h(Badge, { tone: "paper", className: "lu-card__badge" }, props.badge) : null,
      props.media ? h("div", { className: "lu-card__media" }, props.media) : null,
      h("div", { className: "lu-card__body" },
        props.eyebrow ? h("span", { className: "lu-eyebrow" }, props.eyebrow) : null,
        props.title ? h(HTag, { className: "lu-card__title" }, props.title) : null,
        typeof props.children === "string" ? h("p", { className: "lu-card__text" }, props.children) : props.children,
        props.more ? h("span", { className: "lu-card__more" }, props.more, h(Icon, { name: "pfeil", size: 20 })) : null));
  }

  /* ---------------- Schritt-Karte ---------------- */
  function StepCard(props) {
    return h("article", { className: cx("lu-step", props.tone && "lu-step--" + props.tone, props.className) },
      h("div", { className: "lu-step__top" },
        h("span", { className: "lu-step__icon", "aria-hidden": "true" }, h(Icon, { name: props.icon || "besuch", size: 30 })),
        h("span", { className: "lu-step__num", "aria-hidden": "true" }, props.number)),
      h("h3", { className: "lu-step__title" }, h("span", { className: "lu-sr" }, "Schritt " + props.number + ": "), props.title),
      h("p", { className: "lu-step__text" }, props.text));
  }
  function StepsSection(props) {
    var steps = props.steps || content.steps;
    return h("section", { className: cx("lu-section", props.className), id: props.id || "so-gehts", "aria-labelledby": "so-gehts-titel" },
      h("div", { className: "lu-container lu-section__inner" },
        h(SectionHeading, { eyebrow: "Leistungen", title: props.title || "So funktioniert’s", titleId: "so-gehts-titel", intro: props.intro || "Drei Schritte, drei Menschen aus der Nachbarschaft. Sie müssen nichts vorbereiten." }),
        h("ol", { className: "lu-steps" }, steps.map(function (s, i) {
          return h("li", { key: i }, h(StepCard, { number: i + 1, icon: s.icon, title: s.title, text: s.text, tone: s.tone }));
        }))));
  }

  /* ---------------- Vorher/Nachher ---------------- */
  function BrowserMock(props) {
    if (props.kind === "old") {
      return h("div", { className: "lu-mock lu-mock--old", "aria-hidden": "true" },
        h("div", { className: "lu-mock__chrome" }, h("i"), h("i"), h("i")),
        h("div", { className: "lu-mock__page" },
          h("p", { className: "lu-mock__h" }, "Herzlich Willkommen auf unserer Homepage!!!"),
          h("div", { className: "lu-mock__links" }, "Home | Über uns | Angebote | Gästebuch | Links"),
          h("div", { className: "lu-mock__grid" },
            h("div", { className: "lu-mock__box" }),
            h("div", null,
              h("p", { className: "lu-mock__p" }, "Diese Seite befindet sich im Aufbau. Unsere Öffnungszeiten entnehmen Sie bitte dem Aushang im Schaufenster."),
              h("p", { className: "lu-mock__p" }, "Letzte Aktualisierung: 14.03.2009"),
              h("span", { className: "lu-mock__counter" }, "Besucher: 004127"))),
          h("div", { className: "lu-mock__grid lu-mock__grid--3" }, h("div", { className: "lu-mock__box" }), h("div", { className: "lu-mock__box" }), h("div", { className: "lu-mock__box" })),
          h("p", { className: "lu-mock__p lu-mock__foot" }, "Optimiert für Internet Explorer 6 bei 800×600")));
    }
    return h("div", { className: "lu-mock lu-mock--new", "aria-hidden": "true" },
      h("div", { className: "lu-mock__chrome" }, h("i"), h("i"), h("i")),
      h("div", { className: "lu-mock__nav" }, "Blumen am Hang", h("span")),
      h("div", { className: "lu-mock__page" },
        h("p", { className: "lu-mock__h" }, "Sträuße, die nach Garten duften."),
        h("p", { className: "lu-mock__p" }, "Di–Sa 9–18 Uhr · Bestellung per Telefon"),
        h("span", { className: "lu-mock__btn" }),
        h("div", { className: "lu-mock__imgs" }, h("i"), h("i"), h("i"))));
  }
  function BeforeAfter(props) {
    var st = React.useState(props.initial != null ? props.initial : 50);
    var pos = st[0], setPos = st[1];
    var before = props.before || h(BrowserMock, { kind: "old" });
    var after = props.after || h(BrowserMock, { kind: "new" });
    return h("figure", { className: cx("lu-ba", props.className), style: { "--pos": pos + "%", margin: 0 } },
      h("div", { className: "lu-ba__layer lu-ba__layer--after" }, after),
      h("div", { className: "lu-ba__layer lu-ba__layer--before" }, before),
      h(Badge, { tone: "paper", className: "lu-ba__tag lu-ba__tag--before" }, props.labelBefore || "Vorher"),
      h(Badge, { tone: "sage", className: "lu-ba__tag lu-ba__tag--after" }, props.labelAfter || "Nachher"),
      h("span", { className: "lu-ba__line", "aria-hidden": "true" }),
      h("input", {
        className: "lu-ba__range", type: "range", min: 0, max: 100, step: 1, value: pos,
        "aria-label": props.ariaLabel || "Vergleich verschieben: links vorher, rechts nachher",
        "aria-valuetext": pos + " Prozent Vorher sichtbar",
        onChange: function (e) { setPos(Number(e.target.value)); }
      }),
      h("span", { className: "lu-ba__knob", "aria-hidden": "true" }, h(Icon, { name: "griff", size: 22 })),
      props.caption ? h("figcaption", { className: "lu-sr" }, props.caption) : null);
  }
  function ShowcaseSection(props) {
    var examples = props.examples || content.examples;
    return h("section", { className: cx("lu-section lu-section--sky", props.className), id: props.id || "beispiele", "aria-labelledby": "beispiele-titel" },
      h("div", { className: "lu-container lu-section__inner" },
        h(SectionHeading, { eyebrow: "Vorher / Nachher", title: "Aus „im Aufbau“ wird einladend", titleId: "beispiele-titel" }),
        h("div", { className: "lu-showcase__ba" },
          h(BeforeAfter, { initial: props.initial != null ? props.initial : 50, caption: "Links eine veraltete Website, rechts ein moderner Entwurf." }),
          h("div", { className: "lu-showcase__ba-text" },
            h("h3", { className: "lu-card__title" }, "Ziehen Sie den Regler"),
            h("p", null, "Links eine typische Website von früher, rechts, wie Ihr Laden heute online aussehen kann: ruhig, gut lesbar und mit echten Fotos."))),
        h("div", { className: "lu-showcase__grid" }, examples.map(function (e, i) {
          return h(Card, {
            key: i, tone: "paper", badge: "Beispiel", title: e.title, href: e.href || "#kontakt", more: "Ähnlichen Entwurf anfragen",
            media: h(PhotoPlaceholder, { label: e.photo, tone: e.tone })
          }, e.text);
        }))));
  }

  /* ---------------- Preise ---------------- */
  function PriceCard(props) {
    var titleId = React.useId();
    return h("article", { className: cx("lu-price", props.highlighted && "lu-price--hl", props.className), "aria-labelledby": titleId },
      props.highlighted ? h(Badge, { className: "lu-price__badge", icon: "herz" }, props.badge || "Beliebt") : null,
      h("h3", { className: "lu-price__name", id: titleId }, props.name),
      props.desc ? h("p", { className: "lu-price__desc" }, props.desc) : null,
      h("p", { className: "lu-price__amount" },
        h("span", { className: "lu-price__value" }, props.price),
        h("span", { className: "lu-price__unit" }, props.unit || "einmalig")),
      h("ul", { className: "lu-price__list" }, (props.features || []).map(function (f, i) {
        return h("li", { key: i }, h(Icon, { name: "check", size: 20 }), f);
      })),
      h(Button, { href: props.ctaHref || "#kontakt", variant: props.highlighted ? "primary" : "secondary", block: true, "aria-label": (props.ctaLabel || "Paket anfragen") + ": " + props.name }, props.ctaLabel || "Paket anfragen"));
  }
  function CareStrip(props) {
    var plans = props.plans || content.care;
    return h("div", { className: cx("lu-care", props.className) },
      h("p", { className: "lu-care__label", style: { margin: 0 } }, "Pflege-Abos"),
      h("ul", { className: "lu-care__plans" }, plans.map(function (p, i) {
        return h("li", { key: i, className: "lu-care__plan" }, h("strong", null, p.name + " · " + p.price), h("br"), p.text);
      })));
  }
  function PricingSection(props) {
    var pk = props.packages || content.packages;
    return h("section", { className: cx("lu-section", props.className), id: props.id || "pakete", "aria-labelledby": "pakete-titel" },
      h("div", { className: "lu-container lu-section__inner" },
        h(SectionHeading, { eyebrow: "Pakete", title: "Pakete & Preise", titleId: "pakete-titel", intro: "Feste Preise, keine versteckten Kosten. Der erste Entwurf ist immer kostenlos." }),
        h("ul", { className: "lu-prices" }, pk.map(function (p, i) {
          return h("li", { key: i }, h(PriceCard, Object.assign({}, p, { ctaHref: "#kontakt" })));
        })),
        h(CareStrip, { plans: props.care }),
        h("p", { className: "lu-footnote" }, content.priceNote)));
  }

  /* ---------------- Personen ---------------- */
  function PersonCard(props) {
    return h("figure", { className: cx("lu-person", props.className) },
      h(PhotoPlaceholder, { label: props.photo || ("Porträt " + props.name), tone: props.tone || "peach", className: "lu-person__photo", src: props.src }),
      h("figcaption", null,
        h("span", { className: "lu-eyebrow lu-person__role" }, props.role),
        h("h3", { className: "lu-person__name" }, props.name)),
      h("blockquote", { className: "lu-person__quote", style: { margin: 0 } }, "„" + props.quote + "“"));
  }
  function AboutSection(props) {
    var a = merge(content.about, props);
    return h("section", { className: cx("lu-section lu-section--lavender", props.className), id: props.id || "ueber-uns", "aria-labelledby": "ueber-uns-titel" },
      h("div", { className: "lu-container lu-section__inner" },
        h(SectionHeading, { eyebrow: "Über uns", title: "Drei Leute aus der Nachbarschaft", titleId: "ueber-uns-titel" }),
        h("p", { className: "lu-about__lead" }, a.lead),
        h("ul", { className: "lu-people" }, a.people.map(function (p, i) {
          return h("li", { key: i }, h(PersonCard, p));
        }))));
  }

  /* ---------------- Formularfelder ---------------- */
  function Field(props) {
    var autoId = React.useId();
    var id = props.id || autoId;
    var hintId = id + "-hint", errId = id + "-err";
    var as = props.as || (props.type === "textarea" ? "textarea" : props.type === "select" ? "select" : "input");
    var described = [props.hint ? hintId : null, props.error ? errId : null].filter(Boolean).join(" ") || undefined;
    var ctrlProps = Object.assign(omit(props, ["label", "hint", "error", "as", "state", "options", "className", "id", "inputRef", "placeholderOption"]), {
      id: id, ref: props.inputRef,
      className: cx("lu-input", props.state === "focus" && "lu-is-focus"),
      "aria-invalid": props.error ? "true" : undefined,
      "aria-describedby": described,
      "aria-required": props.required ? "true" : undefined
    });
    if (as === "input" && !ctrlProps.type) ctrlProps.type = "text";
    if (as !== "input") delete ctrlProps.type;
    delete ctrlProps.required; /* Pflicht über aria-required + eigene Prüfung, damit unsere Fehlermeldungen erscheinen */
    var control;
    if (as === "select") {
      control = h("div", { className: "lu-field__control" },
        h("select", ctrlProps,
          props.placeholderOption ? h("option", { value: "" }, props.placeholderOption) : null,
          (props.options || []).map(function (o) { return h("option", { key: o, value: o }, o); })),
        h(Icon, { name: "runter", size: 20, className: "lu-field__chevron" }));
    } else {
      control = h("div", { className: "lu-field__control" }, h(as, ctrlProps));
    }
    return h("div", { className: cx("lu-field", props.className) },
      h("label", { className: "lu-field__label", htmlFor: id }, props.label,
        props.required ? h("span", { className: "lu-field__req" }, " *", h("span", { className: "lu-sr" }, " (Pflichtfeld)")) : null),
      control,
      props.hint ? h("p", { className: "lu-field__hint", id: hintId }, props.hint) : null,
      props.error ? h("p", { className: "lu-field__error", id: errId }, h(Icon, { name: "hinweis", size: 20 }), props.error) : null);
  }
  function Checkbox(props) {
    var autoId = React.useId();
    var id = props.id || autoId;
    var errId = id + "-err";
    var inputProps = Object.assign(omit(props, ["label", "error", "state", "className", "id", "inputRef"]), {
      id: id, type: "checkbox", className: "lu-check__input", ref: props.inputRef,
      "aria-invalid": props.error ? "true" : undefined, "aria-describedby": props.error ? errId : undefined,
      "aria-required": props.required ? "true" : undefined
    });
    delete inputProps.required;
    return h("div", { className: cx("lu-check", props.className) },
      h("label", { className: "lu-check__row", htmlFor: id },
        h("span", { className: "lu-check__wrap" },
          h("input", inputProps),
          h("span", { className: cx("lu-check__box", props.state === "focus" && "lu-is-focus"), "aria-hidden": "true" }, h(Icon, { name: "check", size: 18, strokeWidth: 2.5 }))),
        h("span", null, props.label, props.required ? h("span", { className: "lu-field__req" }, " *") : null)),
      props.error ? h("p", { className: "lu-field__error", id: errId }, h(Icon, { name: "hinweis", size: 20 }), props.error) : null);
  }

  /* ---------------- Kontaktformular ---------------- */
  var MSG = {
    name: "Bitte geben Sie Ihren Namen an.",
    business: "Bitte nennen Sie den Namen Ihres Geschäfts.",
    email: "Bitte geben Sie Ihre E-Mail-Adresse an.",
    emailInvalid: "Bitte prüfen Sie die E-Mail-Adresse – zum Beispiel name@beispiel.de.",
    privacy: "Bitte bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben."
  };
  function validate(v) {
    var e = {};
    if (!v.name || !v.name.trim()) e.name = MSG.name;
    if (!v.business || !v.business.trim()) e.business = MSG.business;
    if (!v.email || !v.email.trim()) e.email = MSG.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = MSG.emailInvalid;
    if (!v.privacy) e.privacy = MSG.privacy;
    return e;
  }
  function defaultSubmit() { return new Promise(function (res) { setTimeout(res, 1200); }); }
  function ContactForm(props) {
    var init = Object.assign({ name: "", business: "", phone: "", email: "", package: "", message: "", privacy: false }, props.values);
    var sv = React.useState(init), vals = sv[0], setVals = sv[1];
    var ss = React.useState("idle"), stInt = ss[0], setSt = ss[1];
    var se = React.useState({}), errInt = se[0], setErr = se[1];
    var status = props.status || stInt;
    var errors = props.errors || errInt;
    var refs = { name: React.useRef(null), business: React.useRef(null), email: React.useRef(null), privacy: React.useRef(null) };
    var busy = status === "submitting";
    var privacyHref = props.privacyHref || "datenschutz.html";

    function set(k) {
      return function (e) {
        var val = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setVals(Object.assign({}, vals, (function () { var o = {}; o[k] = val; return o; })()));
        if (errInt[k]) { var n = Object.assign({}, errInt); delete n[k]; setErr(n); }
      };
    }
    function onSubmit(e) {
      e.preventDefault();
      if (busy) return;
      var errs = validate(vals);
      setErr(errs);
      var first = ["name", "business", "email", "privacy"].filter(function (k) { return errs[k]; })[0];
      if (first) { if (refs[first].current) refs[first].current.focus(); return; }
      setSt("submitting");
      (props.onSubmit || defaultSubmit)(vals).then(function () { setSt("success"); }, function () { setSt("error"); });
    }

    if (status === "success") {
      return h("div", { className: "lu-success", role: "status", "aria-live": "polite" },
        h("span", { className: "lu-success__icon", "aria-hidden": "true" }, h(Icon, { name: "check", size: 32, strokeWidth: 2.25 })),
        h("h3", { className: "lu-success__title" }, "Danke!"),
        h("p", { className: "lu-success__text" }, props.successMessage || content.form.success));
    }
    var errCount = Object.keys(errors).length;
    var ff = props.focusField;
    return h("form", { className: cx("lu-form", busy && "lu-form--busy", props.className), noValidate: true, onSubmit: onSubmit, "aria-busy": busy ? "true" : undefined, "aria-label": "Anfrage für einen kostenlosen Entwurf" },
      errCount ? h("div", { className: "lu-alert lu-alert--error", role: "alert" },
        h(Icon, { name: "hinweis" }),
        h("span", null, h("span", { className: "lu-alert__title" }, errCount === 1 ? "Ein Feld braucht noch Ihre Angabe." : errCount + " Felder brauchen noch Ihre Angabe."), "Bitte prüfen Sie die markierten Felder.")) : null,
      h("div", { className: "lu-form__row lu-form__row--2" },
        h(Field, { label: "Name", name: "name", autoComplete: "name", required: true, value: vals.name, onChange: set("name"), error: errors.name, inputRef: refs.name, readOnly: busy, state: ff === "name" ? "focus" : undefined }),
        h(Field, { label: "Name des Geschäfts", name: "business", autoComplete: "organization", required: true, value: vals.business, onChange: set("business"), error: errors.business, inputRef: refs.business, readOnly: busy, state: ff === "business" ? "focus" : undefined })),
      h("div", { className: "lu-form__row lu-form__row--2" },
        h(Field, { label: "Telefon", name: "phone", type: "tel", autoComplete: "tel", inputMode: "tel", value: vals.phone, onChange: set("phone"), hint: "Freiwillig – für einen kurzen Rückruf.", readOnly: busy, state: ff === "phone" ? "focus" : undefined }),
        h(Field, { label: "E-Mail", name: "email", type: "email", autoComplete: "email", inputMode: "email", required: true, value: vals.email, onChange: set("email"), error: errors.email, inputRef: refs.email, readOnly: busy, state: ff === "email" ? "focus" : undefined })),
      h(Field, { label: "Wunschpaket", name: "package", type: "select", options: content.form.packages, placeholderOption: "Bitte wählen", value: vals.package, onChange: set("package"), disabled: busy, state: ff === "package" ? "focus" : undefined }),
      h(Field, { label: "Nachricht", name: "message", type: "textarea", rows: 5, placeholder: "Erzählen Sie uns kurz von Ihrem Laden – oder wann wir am besten vorbeikommen.", value: vals.message, onChange: set("message"), readOnly: busy, state: ff === "message" ? "focus" : undefined }),
      h(Checkbox, {
        name: "privacy", required: true, checked: !!vals.privacy, onChange: set("privacy"), error: errors.privacy, inputRef: refs.privacy, disabled: busy, state: ff === "privacy" ? "focus" : undefined,
        label: h(F, null, "Ich habe die ", h("a", { className: "lu-link", href: privacyHref }, "Datenschutzerklärung"), " gelesen und bin einverstanden, dass meine Angaben zur Bearbeitung der Anfrage gespeichert werden.")
      }),
      status === "error" ? h("div", { className: "lu-alert lu-alert--error", role: "alert" },
        h(Icon, { name: "hinweis" }),
        h("span", null, h("span", { className: "lu-alert__title" }, "Das hat leider nicht geklappt."), "Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es noch einmal – oder rufen Sie uns an: ",
          h("a", { className: "lu-link", href: content.phoneHref }, content.phone), ".")) : null,
      h("div", null,
        h(Button, { type: "submit", size: "lg", loading: busy, loadingLabel: "Wird gesendet …", className: "lu-form__submit" }, "Anfrage senden"),
        h("p", { className: "lu-form__note", style: { marginTop: 12 } }, "* Pflichtfeld")));
  }

  function ContactInfo(props) {
    var c = merge(content, props);
    return h("aside", { className: cx("lu-contact-info", props.className), "aria-label": "Direkter Kontakt" },
      h("h3", { className: "lu-contact-info__title" }, "Lieber direkt?"),
      h("a", { className: "lu-contact-info__phone", href: c.phoneHref }, h(Icon, { name: "telefon", size: 28 }), c.phone),
      h(Button, { href: c.whatsappHref, variant: "secondary", icon: "chat", block: true, target: "_blank", rel: "noopener" }, "Per WhatsApp schreiben"),
      h("a", { className: "lu-contact-info__mail", href: c.emailHref }, h(Icon, { name: "mail" }), c.email),
      h("p", { className: "lu-contact-info__note" }, h(Icon, { name: "ort" }), c.region));
  }
  function ContactSection(props) {
    return h("section", { className: cx("lu-section lu-section--sky", props.className), id: props.id || "kontakt", "aria-labelledby": "kontakt-titel" },
      h("div", { className: "lu-container lu-section__inner" },
        h(SectionHeading, { eyebrow: "Kontakt", title: "Erzählen Sie uns von Ihrem Laden", titleId: "kontakt-titel", intro: "Wir melden uns innerhalb von 24 Stunden und vereinbaren einen Termin für Ihren kostenlosen Entwurf." }),
        h("div", { className: "lu-contact" },
          h("div", { className: "lu-contact__form" }, h(ContactForm, props.form || {})),
          h(ContactInfo, null))));
  }

  /* ---------------- Footer ---------------- */
  function Footer(props) {
    var c = merge(content, props);
    return h("footer", { className: cx("lu-footer", props.className) },
      h("div", { className: "lu-container" },
        h("div", { className: "lu-footer__inner" },
          h("div", null, h(Wordmark, { name: c.name }), h("p", { className: "lu-footer__desc" }, c.description)),
          h("div", null, h("h2", { className: "lu-footer__h" }, "Kontakt"),
            h("ul", { className: "lu-footer__list" },
              h("li", null, h("a", { href: c.phoneHref }, c.phone)),
              h("li", null, h("a", { href: c.emailHref }, c.email)),
              h("li", null, h("a", { href: c.whatsappHref }, "WhatsApp")))),
          h("div", null, h("h2", { className: "lu-footer__h" }, "Rechtliches"),
            h("ul", { className: "lu-footer__list" },
              h("li", null, h("a", { href: props.impressumHref || "impressum.html" }, "Impressum")),
              h("li", null, h("a", { href: props.datenschutzHref || "datenschutz.html" }, "Datenschutz"))))),
        h("div", { className: "lu-footer__bottom" },
          h("span", null, "© " + (props.year || "2026") + " " + c.name),
          h("span", null, "Ohne Cookies und ohne Tracking."))));
  }

  /* ---------------- Rechtstexte ---------------- */
  function Ph(p) { return h("span", { className: "lu-ph" }, p.children); }
  function ImpressumText() {
    return h(F, null,
      h("h2", null, "Angaben gemäß § 5 DDG"),
      h("address", null, h(Ph, null, "[Name des Unternehmens bzw. der Gesellschaft, Rechtsform]"), h("br"), h(Ph, null, "[Straße Hausnummer]"), h("br"), h(Ph, null, "[PLZ]"), " Hamburg"),
      h("h3", null, "Vertreten durch"),
      h("p", null, h(Ph, null, "[Vor- und Nachnamen aller Inhaber bzw. Gesellschafter]")),
      h("h2", null, "Kontakt"),
      h("p", null, "Telefon: ", h("a", { href: content.phoneHref }, content.phone), h("br"), "E-Mail: ", h("a", { href: content.emailHref }, content.email)),
      h("h2", null, "Umsatzsteuer"),
      h("p", null, "Kleinunternehmer gemäß § 19 UStG – es wird keine Umsatzsteuer berechnet und daher keine Umsatzsteuer-Identifikationsnummer ausgewiesen."),
      h("h2", null, "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV"),
      h("p", null, h(Ph, null, "[Vor- und Nachname, Anschrift wie oben]")),
      h("h2", null, "Verbraucherstreitbeilegung"),
      h("p", null, "Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."));
  }
  function DatenschutzText() {
    return h(F, null,
      h("h2", null, "Das Wichtigste in Kürze"),
      h("ul", null,
        h("li", null, "Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Werkzeuge."),
        h("li", null, "Schriften und alle Dateien werden von unserem eigenen Server geladen – es werden keine Daten an Google oder andere Anbieter übertragen."),
        h("li", null, "Ihre Angaben aus dem Kontaktformular nutzen wir ausschließlich, um Ihre Anfrage zu beantworten.")),
      h("h2", null, "1. Verantwortliche Stelle"),
      h("p", null, h(Ph, null, "[Name, Anschrift]"), h("br"), "E-Mail: ", h("a", { href: content.emailHref }, content.email), h("br"), "Telefon: ", content.phone),
      h("h2", null, "2. Hosting und Server-Protokolle"),
      h("p", null, "Die Website wird bei ", h(Ph, null, "[Name und Sitz des Hosters]"), " betrieben. Beim Aufruf speichert der Server technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite) für ", h(Ph, null, "[Speicherdauer]"), ". Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt im sicheren Betrieb der Website."),
      h("h2", null, "3. Kontaktformular"),
      h("p", null, "Wenn Sie uns über das Formular schreiben, verarbeiten wir Ihren Namen, den Namen Ihres Geschäfts, Ihre E-Mail-Adresse und – falls angegeben – Telefonnummer, Wunschpaket und Nachricht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Wir löschen die Daten, sobald Ihre Anfrage abgeschlossen ist und keine gesetzlichen Aufbewahrungspflichten bestehen."),
      h("h2", null, "4. Kontakt per Telefon, E-Mail und WhatsApp"),
      h("p", null, "Wenn Sie uns per WhatsApp schreiben, verarbeitet auch der Anbieter WhatsApp (Meta Platforms Ireland Ltd.) Ihre Daten; dabei kann eine Übermittlung in die USA stattfinden. Wenn Sie das nicht möchten, erreichen Sie uns gern per Telefon oder E-Mail."),
      h("h2", null, "5. Ihre Rechte"),
      h("p", null, "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem können Sie sich bei einer Datenschutz-Aufsichtsbehörde beschweren, zum Beispiel beim Hamburgischen Beauftragten für Datenschutz und Informationsfreiheit."));
  }
  function LegalPage(props) {
    var kind = props.kind || "impressum";
    var title = props.title || (kind === "datenschutz" ? "Datenschutzerklärung" : "Impressum");
    return h("div", { className: cx("lu-legal", props.className) },
      h("header", { className: "lu-legal__bar" },
        h("div", { className: "lu-container" },
          h(Wordmark, { name: props.name, href: props.homeHref || "index.html" }),
          h("a", { className: "lu-legal__back", href: props.homeHref || "index.html" }, h(Icon, { name: "zurueck", size: 20 }), "Zur Startseite"))),
      h("main", { className: "lu-container" },
        h("article", { className: "lu-prose" },
          h("h1", null, title),
          h("p", { className: "lu-prose__meta" }, "Stand: " + (props.updated || "[Datum]")),
          props.showNotice === false ? null : h("p", { className: "lu-prose__notice" }, h(Icon, { name: "hinweis" }), h("span", null, "Entwurf: Texte in ", h("span", { className: "lu-ph" }, "[Klammern]"), " vor dem Livegang ergänzen und rechtlich prüfen lassen. Diesen Hinweis dann entfernen.")),
          props.children || (kind === "datenschutz" ? h(DatenschutzText) : h(ImpressumText)))),
      h(Footer, { name: props.name }));
  }

  var api = {
    content: content, Icon: Icon, Button: Button, Badge: Badge, Wordmark: Wordmark, Header: Header, SectionHeading: SectionHeading,
    PhotoPlaceholder: PhotoPlaceholder, Hero: Hero, Card: Card, StepCard: StepCard, StepsSection: StepsSection,
    BrowserMock: BrowserMock, BeforeAfter: BeforeAfter, ShowcaseSection: ShowcaseSection, PriceCard: PriceCard, CareStrip: CareStrip,
    PricingSection: PricingSection, PersonCard: PersonCard, AboutSection: AboutSection, Field: Field, Checkbox: Checkbox,
    ContactForm: ContactForm, ContactInfo: ContactInfo, ContactSection: ContactSection, Footer: Footer, LegalPage: LegalPage,
    ImpressumText: ImpressumText, DatenschutzText: DatenschutzText, validate: validate
  };
  window.LadenUI = Object.assign(window.LadenUI || {}, api);
})();

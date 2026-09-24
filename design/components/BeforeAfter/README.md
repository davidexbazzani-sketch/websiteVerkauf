# BeforeAfter

Vergleichs-Slider: links „Vorher“ (veraltete Website), rechts „Nachher“ (neuer Entwurf); der Griff lässt sich ziehen oder per Tastatur (Pfeiltasten) verschieben.

- **Props:** `before`, `after` (beliebige Inhalte – später zwei Screenshots als `<img>` mit Alt-Text), `initial` (Prozent, Standard 50), `labelBefore`, `labelAfter`, `ariaLabel`, `caption`.
- Technik: ein natives `<input type="range">` liegt unsichtbar über dem Bild – dadurch tastatur- und screenreaderbedienbar ohne Bibliothek. Fokus zeigt `focus-ring` am Griff.
- Ohne JavaScript: beide Bilder als zwei Karten nebeneinander ausgeben (Fallback).
- Die mitgelieferten `BrowserMock`-Bilder sind Platzhalter, keine echten Kundenseiten.

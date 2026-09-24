/**
 * Kontaktformular: Prüfung mit deutschen Meldungen, Versand per fetch ohne Seitenwechsel,
 * Zustände „Senden läuft“, „Erfolg“ und „Fehler beim Senden“. Außerdem wählen die
 * Buttons „Paket anfragen“ das Paket im Dropdown vor.
 * Die Regeln entsprechen `validate` im Design-Bundle – serverseitig bitte wiederholen.
 */

const MSG = {
  name: 'Bitte geben Sie Ihren Namen an.',
  business: 'Bitte nennen Sie den Namen Ihres Geschäfts.',
  email: 'Bitte geben Sie Ihre E-Mail-Adresse an.',
  emailInvalid: 'Bitte prüfen Sie die E-Mail-Adresse – zum Beispiel name@beispiel.de.',
  privacy: 'Bitte bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben.',
};

type ErrorKey = 'name' | 'business' | 'email' | 'privacy';
const ORDER: ErrorKey[] = ['name', 'business', 'email', 'privacy'];

interface Values { name: string; business: string; email: string; privacy: boolean }

export function validate(v: Values): Partial<Record<ErrorKey, string>> {
  const e: Partial<Record<ErrorKey, string>> = {};
  if (!v.name.trim()) e.name = MSG.name;
  if (!v.business.trim()) e.business = MSG.business;
  if (!v.email.trim()) e.email = MSG.email;
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = MSG.emailInvalid;
  if (!v.privacy) e.privacy = MSG.privacy;
  return e;
}

type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function setup(form: HTMLFormElement) {
  const root = form.parentElement ?? document;
  const template = (name: string): HTMLElement => {
    const t = root.querySelector<HTMLTemplateElement>(`template[data-tpl="${name}"]`);
    return t!.content.firstElementChild!.cloneNode(true) as HTMLElement;
  };
  const control = (name: string) => form.elements.namedItem(name) as Control;
  const submit = form.querySelector<HTMLButtonElement>('.lu-form__submit')!;
  const submitInner = submit.innerHTML;
  let busy = false;

  // Eigene Meldungen statt Browser-Blasen
  form.noValidate = true;

  /* ---------- Fehler anzeigen und entfernen ---------- */
  const describedBy = (el: Control, id: string, add: boolean) => {
    const list = (el.getAttribute('aria-describedby') ?? '').split(' ').filter(Boolean).filter((x) => x !== id);
    if (add) list.push(id);
    if (list.length) el.setAttribute('aria-describedby', list.join(' '));
    else el.removeAttribute('aria-describedby');
  };

  const clearFieldError = (key: ErrorKey) => {
    const el = control(key);
    const wrap = el.closest<HTMLElement>('[data-field]');
    const err = wrap?.querySelector('[data-js-error]');
    if (!err) return;
    err.remove();
    el.removeAttribute('aria-invalid');
    describedBy(el, `${el.id}-err`, false);
    updateSummary();
  };

  const showFieldError = (key: ErrorKey, message: string) => {
    const el = control(key);
    const wrap = el.closest<HTMLElement>('[data-field]');
    if (!wrap) return;
    wrap.querySelector('[data-js-error]')?.remove();
    const p = template('field-error');
    p.id = `${el.id}-err`;
    p.querySelector('span')!.textContent = message;
    wrap.append(p);
    el.setAttribute('aria-invalid', 'true');
    describedBy(el, p.id, true);
  };

  const updateSummary = () => {
    const count = form.querySelectorAll('[data-js-error]').length;
    let box = form.querySelector<HTMLElement>('[data-summary]');
    if (!count) { box?.remove(); return; }
    if (!box) { box = template('summary'); form.prepend(box); }
    box.querySelector('[data-summary-title]')!.textContent =
      count === 1 ? 'Ein Feld braucht noch Ihre Angabe.' : `${count} Felder brauchen noch Ihre Angabe.`;
  };

  ORDER.forEach((key) => {
    const el = control(key);
    el.addEventListener(el.type === 'checkbox' ? 'change' : 'input', () => clearFieldError(key));
  });

  /* ---------- Zustand „Senden läuft“ ---------- */
  const setBusy = (on: boolean) => {
    busy = on;
    form.classList.toggle('lu-form--busy', on);
    if (on) form.setAttribute('aria-busy', 'true'); else form.removeAttribute('aria-busy');
    Array.from(form.elements).forEach((el) => {
      if (!(el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement || el instanceof HTMLSelectElement)) return;
      if (el instanceof HTMLSelectElement || el.type === 'checkbox') el.disabled = on;
      else el.readOnly = on;
    });
    submit.disabled = on;
    if (on) {
      submit.setAttribute('aria-busy', 'true');
      const t = root.querySelector<HTMLTemplateElement>('template[data-tpl="loading"]')!;
      submit.replaceChildren(t.content.cloneNode(true));
    } else {
      submit.removeAttribute('aria-busy');
      submit.innerHTML = submitInner;
    }
  };

  const showSendError = () => {
    form.querySelector('[data-send-error]')?.remove();
    const box = template('send-error');
    form.querySelector('.lu-form__actions')!.before(box);
  };

  const showSuccess = () => {
    const box = template('success');
    form.replaceWith(box);
    box.focus({ preventScroll: true });
  };

  /* ---------- Absenden ---------- */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (busy) return;

    const values: Values = {
      name: (control('name') as HTMLInputElement).value,
      business: (control('business') as HTMLInputElement).value,
      email: (control('email') as HTMLInputElement).value,
      privacy: (control('privacy') as HTMLInputElement).checked,
    };
    const errors = validate(values);
    ORDER.forEach((key) => (errors[key] ? showFieldError(key, errors[key]!) : clearFieldError(key)));
    updateSummary();
    form.querySelector('[data-send-error]')?.remove();

    const first = ORDER.find((k) => errors[k]);
    if (first) { control(first).focus(); return; }

    setBusy(true);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      showSuccess();
    } catch {
      setBusy(false);
      showSendError();
    }
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-contact-form]').forEach(setup);

/* ---------- „Paket anfragen“ wählt das Paket vor ---------- */
document.querySelectorAll<HTMLAnchorElement>('a[data-paket]').forEach((a) => {
  a.addEventListener('click', () => {
    const select = document.querySelector<HTMLSelectElement>('form[data-contact-form] select[name="package"]');
    if (select && a.dataset.paket) select.value = a.dataset.paket;
  });
});

import type * as React from 'react';

type Tone = 'peach' | 'lavender' | 'sky' | 'sage';
interface Link { label: string; href: string }

export type IconName = 'besuch' | 'kamera' | 'online' | 'telefon' | 'chat' | 'mail' | 'check' | 'menu' | 'close' | 'pfeil' | 'zurueck' | 'ort' | 'hinweis' | 'erfolg' | 'foto' | 'griff' | 'runter' | 'herz';
export interface IconProps { name: IconName; size?: number; strokeWidth?: number; label?: string; className?: string }
export declare function Icon(props: IconProps): React.ReactElement;

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'lg';
  href?: string;
  icon?: IconName; iconRight?: IconName;
  loading?: boolean; loadingLabel?: string;
  block?: boolean;
  /** nur für Vorschauen */ state?: 'hover' | 'focus';
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface BadgeProps { tone?: Tone | 'paper'; icon?: IconName; className?: string; children?: React.ReactNode }
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface WordmarkProps { name?: string; href?: string; className?: string }
export declare function Wordmark(props: WordmarkProps): React.ReactElement;

export interface HeaderProps { name?: string; links?: Link[]; cta?: Link; current?: string; skipHref?: string; /** nur Vorschau */ defaultOpen?: boolean; className?: string }
export declare function Header(props: HeaderProps): React.ReactElement;

export interface SectionHeadingProps { eyebrow?: string; title: React.ReactNode; intro?: React.ReactNode; align?: 'left' | 'center'; as?: 'h1' | 'h2' | 'h3'; titleId?: string; className?: string }
export declare function SectionHeading(props: SectionHeadingProps): React.ReactElement;

export interface PhotoPlaceholderProps { label: string; src?: string; alt?: string; tone?: Tone | 'peach-soft' | 'lavender-soft'; shape?: 'arch' | 'xl'; ratio?: string; hideLabel?: boolean; className?: string; style?: React.CSSProperties }
export declare function PhotoPlaceholder(props: PhotoPlaceholderProps): React.ReactElement;

export interface HeroProps {
  /** split = „Bogenfenster“, window = „Schaufenster“ */ variant?: 'split' | 'window';
  eyebrow?: string; title?: string; /** Wort im Titel, das kursiv gesetzt wird */ emphasis?: string; subtitle?: string;
  cta?: Link; secondary?: Link; trust?: string[]; /** nur Variante split */ note?: string; id?: string; className?: string;
}
export declare function Hero(props: HeroProps): React.ReactElement;

export interface CardProps { tone?: Tone | 'paper'; media?: React.ReactNode; badge?: string; eyebrow?: string; title?: string; headingLevel?: 'h2' | 'h3' | 'h4'; href?: string; more?: string; className?: string; children?: React.ReactNode }
export declare function Card(props: CardProps): React.ReactElement;

export interface Step { icon: IconName; title: string; text: string; tone?: 'peach' | 'lavender' | 'sage' }
export interface StepCardProps extends Step { number: number; className?: string }
export declare function StepCard(props: StepCardProps): React.ReactElement;
export interface StepsSectionProps { steps?: Step[]; title?: string; intro?: string; id?: string; className?: string }
export declare function StepsSection(props: StepsSectionProps): React.ReactElement;

export interface BeforeAfterProps { before?: React.ReactNode; after?: React.ReactNode; /** Prozent 0–100 */ initial?: number; labelBefore?: string; labelAfter?: string; ariaLabel?: string; caption?: string; className?: string }
export declare function BeforeAfter(props: BeforeAfterProps): React.ReactElement;
export interface Example { title: string; text: string; photo: string; tone?: Tone; href?: string }
export interface ShowcaseSectionProps { examples?: Example[]; initial?: number; id?: string; className?: string }
export declare function ShowcaseSection(props: ShowcaseSectionProps): React.ReactElement;

export interface Package { id?: string; name: string; price: string; desc?: string; unit?: string; features: string[]; highlighted?: boolean }
export interface PriceCardProps extends Package { badge?: string; ctaLabel?: string; ctaHref?: string; className?: string }
export declare function PriceCard(props: PriceCardProps): React.ReactElement;
export interface CarePlan { name: string; price: string; text: string }
export interface CareStripProps { plans?: CarePlan[]; className?: string }
export declare function CareStrip(props: CareStripProps): React.ReactElement;
export interface PricingSectionProps { packages?: Package[]; care?: CarePlan[]; id?: string; className?: string }
export declare function PricingSection(props: PricingSectionProps): React.ReactElement;

export interface Person { name: string; role: string; quote: string; photo?: string; src?: string; tone?: Tone }
export declare function PersonCard(props: Person & { className?: string }): React.ReactElement;
export interface AboutSectionProps { lead?: string; people?: Person[]; id?: string; className?: string }
export declare function AboutSection(props: AboutSectionProps): React.ReactElement;

export interface FieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string; type?: 'text' | 'email' | 'tel' | 'select' | 'textarea'; hint?: string; error?: string;
  options?: string[]; placeholderOption?: string; rows?: number; inputRef?: React.Ref<any>;
  /** nur für Vorschauen */ state?: 'focus';
}
export declare function Field(props: FieldProps): React.ReactElement;
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> { label: React.ReactNode; error?: string; inputRef?: React.Ref<HTMLInputElement>; state?: 'focus' }
export declare function Checkbox(props: CheckboxProps): React.ReactElement;

export interface ContactValues { name: string; business: string; phone: string; email: string; package: string; message: string; privacy: boolean }
export interface ContactFormProps {
  /** resolve = Erfolg, reject = Fehler beim Senden */ onSubmit?: (values: ContactValues) => Promise<unknown>;
  values?: Partial<ContactValues>; privacyHref?: string; successMessage?: string; className?: string;
  /** nur für Vorschauen */ status?: 'idle' | 'submitting' | 'success' | 'error';
  /** nur für Vorschauen */ errors?: Partial<Record<'name' | 'business' | 'email' | 'privacy', string>>;
  /** nur für Vorschauen */ focusField?: keyof ContactValues;
}
export declare function ContactForm(props: ContactFormProps): React.ReactElement;
export declare function validate(values: Partial<ContactValues>): Partial<Record<'name' | 'business' | 'email' | 'privacy', string>>;
export interface ContactInfoProps { phone?: string; phoneHref?: string; whatsappHref?: string; email?: string; emailHref?: string; region?: string; className?: string }
export declare function ContactInfo(props: ContactInfoProps): React.ReactElement;
export interface ContactSectionProps { form?: ContactFormProps; id?: string; className?: string }
export declare function ContactSection(props: ContactSectionProps): React.ReactElement;

export interface FooterProps { name?: string; description?: string; phone?: string; phoneHref?: string; email?: string; emailHref?: string; whatsappHref?: string; impressumHref?: string; datenschutzHref?: string; year?: string; className?: string }
export declare function Footer(props: FooterProps): React.ReactElement;

export interface LegalPageProps { kind?: 'impressum' | 'datenschutz'; title?: string; updated?: string; name?: string; homeHref?: string; showNotice?: boolean; className?: string; children?: React.ReactNode }
export declare function LegalPage(props: LegalPageProps): React.ReactElement;

/** Alle Texte der Website (Platzhalter in [Klammern]) */
export declare const content: Record<string, any>;

declare global {
  interface Window {
    LadenUI: {
      Icon: typeof Icon; Button: typeof Button; Badge: typeof Badge; Wordmark: typeof Wordmark; Header: typeof Header;
      SectionHeading: typeof SectionHeading; PhotoPlaceholder: typeof PhotoPlaceholder; Hero: typeof Hero; Card: typeof Card;
      StepCard: typeof StepCard; StepsSection: typeof StepsSection; BeforeAfter: typeof BeforeAfter; ShowcaseSection: typeof ShowcaseSection;
      PriceCard: typeof PriceCard; CareStrip: typeof CareStrip; PricingSection: typeof PricingSection; PersonCard: typeof PersonCard;
      AboutSection: typeof AboutSection; Field: typeof Field; Checkbox: typeof Checkbox; ContactForm: typeof ContactForm;
      ContactInfo: typeof ContactInfo; ContactSection: typeof ContactSection; Footer: typeof Footer; LegalPage: typeof LegalPage;
      content: typeof content; validate: typeof validate;
    };
  }
}

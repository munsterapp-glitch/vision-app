import { X } from 'lucide-react';
import type { Language } from '../types';

interface LegalModalProps {
  type: 'impressum' | 'privacy' | null;
  lang: Language;
  onClose: () => void;
}

const LEGAL_COPY: Record<
  Language,
  {
    impressumTitle: string;
    privacyTitle: string;
    providerTitle: string;
    providerDesc: string;
    country: string;
    contactTitle: string;
    sandboxTitle: string;
    sandboxDesc: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
  }
> = {
  de: {
    impressumTitle: 'Impressum',
    privacyTitle: 'Datenschutzerklärung (DSGVO)',
    providerTitle: 'Angaben gemäß § 5 DDG',
    providerDesc: 'IT-Systemarchitektur & KI-Automatisierung',
    country: 'Deutschland',
    contactTitle: 'Kontakt',
    sandboxTitle: 'Haftung für Inhalte & Demo-Daten',
    sandboxDesc:
      'Die dargestellten Workflow-Läufe (AI Chatbot, n8n IMAP, Telegram Bot, ROI-Rechner) dienen als interaktive Funktionssimulation. Übermittelte Projektanfragen und Feedback werden ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet.',
    p1Title: '1. Verantwortlicher & Hosting in Deutschland',
    p1Desc:
      'Verantwortlich für die Datenverarbeitung ist Vision IT Systems (kontakt@vision-it-systems.de). Unsere gesamten Demo- und Backend-Dienste (Docker-Container, PocketBase, n8n-Instanzen) werden ausschließlich auf deutschen Servern der Hetzner Online GmbH (Standorte Nürnberg / Falkenstein) betrieben.',
    p2Title: '2. Erhebung von Lead- & Feedback-Daten',
    p2Desc:
      'Wenn Sie das Formular zur kostenlosen Erstanalyse oder das Demo-Feedback absenden, werden Ihre eingegebenen Daten (Name, geschäftliche E-Mail, Unternehmen, ausgewählte Bausteine, Bewertung) TLS-verschlüsselt in unserer PocketBase-Instanz gespeichert (Art. 6 Abs. 1 lit. b und f DSGVO).',
    p3Title: '3. Ihre Rechte nach DSGVO',
    p3Desc:
      'Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer gespeicherten Daten. Schreiben Sie hierzu formlos an kontakt@vision-it-systems.de.',
  },
  en: {
    impressumTitle: 'Imprint (Impressum)',
    privacyTitle: 'Privacy Policy (GDPR)',
    providerTitle: 'Provider Information (§ 5 DDG)',
    providerDesc: 'IT Systems Architecture & AI Automation',
    country: 'Germany',
    contactTitle: 'Contact',
    sandboxTitle: 'Liability for Sandbox Content',
    sandboxDesc:
      'The displayed workflow simulations (AI Chatbot, n8n IMAP, Telegram Bot, ROI Calculator) serve as interactive functional demonstrations. Submitted project inquiries and feedback are processed exclusively to respond to your request.',
    p1Title: '1. Controller & German Hosting',
    p1Desc:
      'Data controller is Vision IT Systems (kontakt@vision-it-systems.de). All sandbox and backend services (Docker containers, PocketBase, n8n workers) are operated exclusively on German servers hosted by Hetzner Online GmbH (Nuremberg / Falkenstein).',
    p2Title: '2. Collection of Lead & Feedback Data',
    p2Desc:
      'When you submit the free initial analysis form or demo feedback, your entered details (name, business email, company, selected modules, rating) are transmitted over TLS and stored in our PocketBase instance (Art. 6(1)(b) and (f) GDPR).',
    p3Title: '3. Your GDPR Rights',
    p3Desc:
      'You have the right to access, rectify, erase, or restrict processing of your stored personal data at any time. Contact kontakt@vision-it-systems.de.',
  },
  hr: {
    impressumTitle: 'Impresum',
    privacyTitle: 'Zaštita podataka (GDPR)',
    providerTitle: 'Podaci o pružatelju (§ 5 DDG)',
    providerDesc: 'IT arhitektura sustava i AI automatizacija',
    country: 'Njemačka',
    contactTitle: 'Kontakt',
    sandboxTitle: 'Odgovornost za demo sadržaj',
    sandboxDesc:
      'Prikazane simulacije (AI Chatbot, n8n IMAP, Telegram Bot, ROI kalkulator) služe kao interaktivna demonstracija. Poslani upiti i ocjene obrađuju se isključivo radi odgovora na Vaš zahtjev.',
    p1Title: '1. Voditelj obrade i hosting u Njemačkoj',
    p1Desc:
      'Voditelj obrade je Vision IT Systems (kontakt@vision-it-systems.de). Svi demo i backend servisi (Docker, PocketBase, n8n) rade isključivo na njemačkim poslužiteljima Hetzner Online GmbH (Nürnberg / Falkenstein).',
    p2Title: '2. Prikupljanje podataka o upitu i povratnim informacijama',
    p2Desc:
      'Prilikom slanja obrasca za besplatnu analizu ili ocjene modula, uneseni podaci prenose se TLS enkripcijom i spremaju u PocketBase (čl. 6. st. 1. t. b i f GDPR-a).',
    p3Title: '3. Vaša prava prema GDPR-u',
    p3Desc:
      'U svakom trenutku imate pravo na uvid, ispravak, brisanje ili ograničenje obrade Vaših podataka putem e-maila kontakt@vision-it-systems.de.',
  },
  ru: {
    impressumTitle: 'Выходные данные (Impressum)',
    privacyTitle: 'Политика конфиденциальности (GDPR)',
    providerTitle: 'Сведения о поставщике (§ 5 DDG)',
    providerDesc: 'ИТ-архитектура и ИИ-автоматизация',
    country: 'Германия',
    contactTitle: 'Контакты',
    sandboxTitle: 'Ответственность за демо-данные',
    sandboxDesc:
      'Показанные симуляции (AI Chatbot, n8n IMAP, Telegram Bot, калькулятор ROI) являются интерактивной демонстрацией. Отправленные заявки и отзывы обрабатываются исключительно для ответа на ваш запрос.',
    p1Title: '1. Оператор и хостинг в Германии',
    p1Desc:
      'Оператор данных — Vision IT Systems (kontakt@vision-it-systems.de). Все демо- и бэкенд-сервисы (Docker, PocketBase, n8n) работают исключительно на серверах Hetzner Online GmbH в Германии (Нюрнберг / Фалькенштайн).',
    p2Title: '2. Сбор данных заявок и отзывов',
    p2Desc:
      'При отправке формы анализа или оценки модуля ваши данные передаются по TLS и сохраняются в PocketBase согласно ст. 6(1)(b) и (f) GDPR.',
    p3Title: '3. Ваши права по GDPR',
    p3Desc:
      'Вы вправе в любое время запросить доступ, исправление или удаление ваших данных, написав на kontakt@vision-it-systems.de.',
  },
  tr: {
    impressumTitle: 'Künye (Impressum)',
    privacyTitle: 'Gizlilik Politikası (GDPR)',
    providerTitle: 'Sağlayıcı Bilgileri (§ 5 DDG)',
    providerDesc: 'BT Sistem Mimarisi & Yapay Zeka Otomasyonu',
    country: 'Almanya',
    contactTitle: 'İletişim',
    sandboxTitle: 'Demo İçeriği Hakkında',
    sandboxDesc:
      'Gösterilen iş akışı simülasyonları (AI Chatbot, n8n IMAP, Telegram Bot, ROI Hesaplayıcı) interaktif önizleme amaçlıdır. Gönderilen talepler yalnızca projenizi yanıtlamak için işlenir.',
    p1Title: '1. Veri Sorumlusu ve Almanya Barındırma',
    p1Desc:
      'Veri sorumlusu Vision IT Systems’tir (kontakt@vision-it-systems.de). Tüm Docker, PocketBase ve n8n hizmetleri yalnızca Almanya’daki Hetzner Online GmbH sunucularında (Nürnberg / Falkenstein) çalıştırılır.',
    p2Title: '2. Talep ve Geri Bildirim Verilerinin Toplanması',
    p2Desc:
      'Ücretsiz analiz formunu veya demo puanını gönderdiğinizde bilgileriniz TLS şifrelemesiyle PocketBase sunucumuza kaydedilir (GDPR Madde 6(1)(b) ve (f)).',
    p3Title: '3. GDPR Kapsamındaki Haklarınız',
    p3Desc:
      'Kayıtlı verilerinize erişme, düzeltme veya silme taleplerinizi istediğiniz zaman kontakt@vision-it-systems.de adresine iletebilirsiniz.',
  },
  pl: {
    impressumTitle: 'Nota prawna (Impressum)',
    privacyTitle: 'Polityka prywatności (RODO)',
    providerTitle: 'Informacje o usługodawcy (§ 5 DDG)',
    providerDesc: 'Architektura systemów IT i automatyzacja AI',
    country: 'Niemcy',
    contactTitle: 'Kontakt',
    sandboxTitle: 'Informacja o wersji demo',
    sandboxDesc:
      'Prezentowane symulacje (AI Chatbot, n8n IMAP, Telegram Bot, Kalkulator ROI) mają charakter interaktywnej prezentacji. Przesłane zapytania i opinie przetwarzamy wyłącznie w celu odpowiedzi.',
    p1Title: '1. Administrator i hosting w Niemczech',
    p1Desc:
      'Administratorem danych jest Vision IT Systems (kontakt@vision-it-systems.de). Wszystkie usługi (Docker, PocketBase, n8n) działają wyłącznie na niemieckich serwerach Hetzner Online GmbH (Norymberga / Falkenstein).',
    p2Title: '2. Zbieranie danych kontaktowych i opinii',
    p2Desc:
      'Po wysłaniu formularza bezpłatnej analizy lub oceny modułu dane są przesyłane szyfrowanym połączeniem TLS do PocketBase (art. 6 ust. 1 lit. b i f RODO).',
    p3Title: '3. Twoje prawa RODO',
    p3Desc:
      'Masz prawo w każdej chwili zażądać dostępu, poprawienia lub usunięcia swoich danych pod adresem kontakt@vision-it-systems.de.',
  },
  sq: {
    impressumTitle: 'Impressum',
    privacyTitle: 'Politika e Privatësisë (GDPR)',
    providerTitle: 'Informacione sipas § 5 DDG',
    providerDesc: 'Arkitekturë sistemesh IT & Automatizim AI',
    country: 'Gjermani',
    contactTitle: 'Kontakti',
    sandboxTitle: 'Përgjegjësia për përmbajtjen demo',
    sandboxDesc:
      'Simulimet e shfaqura (AI Chatbot, n8n IMAP, Telegram Bot, Llogaritësi ROI) shërbejnë si demonstrim interaktiv. Kërkesat dhe vlerësimet e dërguara përpunohen vetëm për t’iu përgjigjur kërkesës suaj.',
    p1Title: '1. Përgjegjësi & Hostimi në Gjermani',
    p1Desc:
      'Përgjegjës për përpunimin e të dhënave është Vision IT Systems (kontakt@vision-it-systems.de). Të gjitha shërbimet tona demo dhe backend (Docker, PocketBase, n8n) operojnë ekskluzivisht në serverët gjermanë të Hetzner Online GmbH (Nürnberg / Falkenstein).',
    p2Title: '2. Mbledhja e të dhënave të kërkesave & feedback-ut',
    p2Desc:
      'Kur dërgoni formularin për analizë falas ose vlerësimin demo, të dhënat tuaja transmetohen të enkriptuara me TLS dhe ruhen në PocketBase (Neni 6(1)(b) dhe (f) GDPR).',
    p3Title: '3. Të drejtat tuaja sipas GDPR',
    p3Desc:
      'Ju keni të drejtë të kërkoni qasje, korrigjim ose fshirje të të dhënave tuaja në çdo kohë përmes kontakt@vision-it-systems.de.',
  },
};

export function LegalModal({ type, lang, onClose }: LegalModalProps) {
  if (!type) return null;

  const copy = LEGAL_COPY[lang];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/[0.1] bg-[#0f1623] p-6 sm:p-8 text-slate-300 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
          <h2 className="font-display text-xl font-bold text-white">
            {type === 'impressum' ? copy.impressumTitle : copy.privacyTitle}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {type === 'impressum' ? (
          <div className="mt-5 space-y-4 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-white">{copy.providerTitle}</h3>
              <p className="mt-1">
                Vision IT Systems
                <br />
                {copy.providerDesc}
                <br />
                {copy.country}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">{copy.contactTitle}</h3>
              <p className="mt-1">
                E-Mail:{' '}
                <a
                  href="mailto:kontakt@vision-it-systems.de"
                  className="text-cyan-400 hover:underline"
                >
                  kontakt@vision-it-systems.de
                </a>
                <br />
                Web: https://demo.vision-it-systems.de
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">{copy.sandboxTitle}</h3>
              <p className="mt-1 text-slate-400">{copy.sandboxDesc}</p>
            </div>
          </div>
        ) : (
          <div className="mt-5 space-y-4 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-white">{copy.p1Title}</h3>
              <p className="mt-1 text-slate-400">{copy.p1Desc}</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">{copy.p2Title}</h3>
              <p className="mt-1 text-slate-400">{copy.p2Desc}</p>
            </div>
            <div>
              <h3 className="font-semibold text-white">{copy.p3Title}</h3>
              <p className="mt-1 text-slate-400">{copy.p3Desc}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

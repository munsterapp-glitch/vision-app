import { X } from 'lucide-react';
import type { Language } from '../types';

interface LegalModalProps {
  type: 'impressum' | 'privacy' | null;
  lang: Language;
  onClose: () => void;
}

export function LegalModal({ type, lang, onClose }: LegalModalProps) {
  if (!type) return null;

  const isDE = lang === 'de';

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
            {type === 'impressum'
              ? isDE
                ? 'Impressum'
                : 'Imprint (Impressum)'
              : isDE
              ? 'Datenschutzerklärung (DSGVO)'
              : 'Privacy Policy (GDPR)'}
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
              <h3 className="font-semibold text-white">
                {isDE ? 'Angaben gemäß § 5 DDG' : 'Provider Information (§ 5 DDG)'}
              </h3>
              <p className="mt-1">
                Vision IT Systems
                <br />
                {isDE ? 'IT-Systemarchitektur & KI-Automatisierung' : 'IT Systems Architecture & AI Automation'}
                <br />
                {isDE ? 'Deutschland' : 'Germany'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                {isDE ? 'Kontakt' : 'Contact'}
              </h3>
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
              <h3 className="font-semibold text-white">
                {isDE ? 'Haftung für Inhalte & Demo-Daten' : 'Liability for Sandbox Content'}
              </h3>
              <p className="mt-1 text-slate-400">
                {isDE
                  ? 'Die dargestellten Workflow-Läufe (AI Chatbot, n8n IMAP, Telegram Bot, ROI-Rechner) dienen als interaktive Funktionssimulation. Übermittelte Projektanfragen und Feedback werden ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet.'
                  : 'The displayed workflow simulations (AI Chatbot, n8n IMAP, Telegram Bot, ROI Calculator) serve as interactive functional demonstrations. Submitted project inquiries and feedback are processed exclusively to respond to your request.'}
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-5 space-y-4 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-white">
                {isDE ? '1. Verantwortlicher & Hosting in Deutschland' : '1. Controller & German Hosting'}
              </h3>
              <p className="mt-1 text-slate-400">
                {isDE
                  ? 'Verantwortlich für die Datenverarbeitung ist Vision IT Systems (kontakt@vision-it-systems.de). Unsere gesamten Demo- und Backend-Dienste (Docker-Container, PocketBase, n8n-Instanzen) werden ausschließlich auf deutschen Servern der Hetzner Online GmbH (Standorte Nürnberg / Falkenstein) betrieben.'
                  : 'Data controller is Vision IT Systems (kontakt@vision-it-systems.de). All sandbox and backend services (Docker containers, PocketBase, n8n workers) are operated exclusively on German servers hosted by Hetzner Online GmbH (Nuremberg / Falkenstein).'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                {isDE ? '2. Erhebung von Lead- & Feedback-Daten' : '2. Collection of Lead & Feedback Data'}
              </h3>
              <p className="mt-1 text-slate-400">
                {isDE
                  ? 'Wenn Sie das Formular zur kostenlosen Erstanalyse oder das Demo-Feedback absenden, werden Ihre eingegebenen Daten (Name, geschäftliche E-Mail, Unternehmen, ausgewählte Bausteine, Bewertung) TLS-verschlüsselt in unserer PocketBase-Instanz gespeichert (Art. 6 Abs. 1 lit. b und f DSGVO).'
                  : 'When you submit the free initial analysis form or demo feedback, your entered details (name, business email, company, selected modules, rating) are transmitted over TLS and stored in our PocketBase instance (Art. 6(1)(b) and (f) GDPR).'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white">
                {isDE ? '3. Ihre Rechte nach DSGVO' : '3. Your GDPR Rights'}
              </h3>
              <p className="mt-1 text-slate-400">
                {isDE
                  ? 'Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer gespeicherten Daten. Schreiben Sie hierzu formlos an kontakt@vision-it-systems.de.'
                  : 'You have the right to access, rectify, erase, or restrict processing of your stored personal data at any time. Contact kontakt@vision-it-systems.de.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

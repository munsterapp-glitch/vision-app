import { X } from 'lucide-react';
import type { Translations } from '../i18n/translations';
import type { Language, LeadPrefill } from '../types';
import { LeadForm } from './LeadForm';

interface LeadModalProps {
  open: boolean;
  lang: Language;
  t: Translations['lead'];
  prefill?: LeadPrefill | null;
  onClose: () => void;
  onNotify: (type: 'success' | 'error' | 'info', title: string, description: string) => void;
}

export function LeadModal({
  open,
  lang,
  t,
  prefill,
  onClose,
  onNotify,
}: LeadModalProps) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/[0.1] bg-[#0f1623] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
          <div>
            <h2 className="font-display text-xl font-bold text-white">
              {t.modalTitle}
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">
              {t.modalSubtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5">
          <LeadForm
            lang={lang}
            t={t}
            prefill={prefill}
            onNotify={onNotify}
            onSuccess={onClose}
          />
        </div>
      </div>
    </div>
  );
}

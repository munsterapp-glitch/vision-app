import { AlertTriangle, Check, CheckCircle2, Mail, Send } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Translations } from '../i18n/translations';
import { submitDemoLead } from '../lib/pocketbase';
import type { Language, LeadPrefill, ServiceOptionId } from '../types';

const SERVICE_IDS: ServiceOptionId[] = [
  'n8n_automation',
  'telegram_bot',
  'web_android_app',
  'ai_chatbot',
  'docker_hosting',
];

interface LeadFormProps {
  lang: Language;
  t: Translations['lead'];
  prefill?: LeadPrefill | null;
  onNotify: (type: 'success' | 'error' | 'info', title: string, description: string) => void;
  onSuccess?: () => void;
}

export function LeadForm({
  lang,
  t,
  prefill,
  onNotify,
  onSuccess,
}: LeadFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [services, setServices] = useState<ServiceOptionId[]>(['n8n_automation']);
  const [notes, setNotes] = useState('');

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submittedState, setSubmittedState] = useState<'idle' | 'saved' | 'unreachable'>('idle');

  useEffect(() => {
    if (prefill?.services && prefill.services.length > 0) {
      setServices(prefill.services);
    }
    if (prefill?.notes) {
      setNotes(prefill.notes);
    }
  }, [prefill]);

  const toggleService = (id: ServiceOptionId) => {
    setServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!name.trim() || !email.trim() || !company.trim()) {
      setErrorMsg(t.validationError);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg(t.emailError);
      return;
    }

    if (services.length === 0) {
      setErrorMsg(t.servicesError);
      return;
    }

    setSubmitting(true);
    const result = await submitDemoLead({
      name,
      email,
      company,
      services,
      notes,
      language: lang,
      sourceModule: prefill?.sourceModule || 'section',
    });
    setSubmitting(false);

    if (result.ok) {
      setSubmittedState('saved');
      onNotify('success', t.successTitle, t.successDesc);
      if (onSuccess) {
        window.setTimeout(onSuccess, 1600);
      }
    } else if (result.errorType === 'unreachable') {
      setSubmittedState('unreachable');
      onNotify('error', t.unreachableTitle, t.unreachableDesc);
    } else {
      const msg = result.errorMessage || t.unreachableDesc;
      setErrorMsg(msg);
      onNotify('error', t.unreachableTitle, msg);
    }
  };

  const buildMailtoHref = () => {
    const subject = encodeURIComponent(
      `[Vision IT Systems] Erstanalyse: ${company || name}`
    );
    const selectedLabels = services.map((s) => t.serviceOptions[s]).join(', ');
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\nUnternehmen: ${company}\nModule: ${selectedLabels}\n\nProjektnotiz:\n${notes}`
    );
    return `mailto:kontakt@vision-it-systems.de?subject=${subject}&body=${body}`;
  };

  if (submittedState === 'saved') {
    return (
      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
        <h4 className="mt-3 font-display text-lg font-semibold text-white">
          {t.successTitle}
        </h4>
        <p className="mt-1.5 text-sm text-slate-300">{t.successDesc}</p>
        <button
          type="button"
          onClick={() => {
            setSubmittedState('idle');
            setName('');
            setEmail('');
            setCompany('');
            setNotes('');
          }}
          className="mt-5 rounded-lg border border-white/[0.12] px-4 py-2 text-xs font-medium text-slate-200 hover:bg-white/5 cursor-pointer"
        >
          OK
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {submittedState === 'unreachable' && (
        <div className="rounded-xl border border-amber-500/35 bg-amber-500/10 p-4 text-xs text-amber-100">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <div className="space-y-2">
              <div className="font-semibold">{t.unreachableTitle}</div>
              <p className="text-amber-200/90 leading-relaxed">{t.unreachableDesc}</p>
              <a
                href={buildMailtoHref()}
                className="inline-flex items-center gap-1.5 rounded-md bg-amber-400 px-3 py-1.5 font-semibold text-slate-950 hover:bg-amber-300"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{t.mailtoFallback}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {errorMsg && (
        <div
          role="alert"
          className="rounded-lg border border-rose-500/35 bg-rose-500/10 px-3.5 py-2.5 text-xs font-medium text-rose-200"
        >
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-300">
            {t.nameLabel}
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.namePlaceholder}
            className="w-full rounded-lg border border-white/[0.12] bg-[#090d16] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-300">
            {t.emailLabel}
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.emailPlaceholder}
            className="w-full rounded-lg border border-white/[0.12] bg-[#090d16] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-slate-300">
          {t.companyLabel}
        </label>
        <input
          type="text"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder={t.companyPlaceholder}
          className="w-full rounded-lg border border-white/[0.12] bg-[#090d16] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
        />
      </div>

      <div>
        <span className="mb-2 block text-xs font-medium text-slate-300">
          {t.servicesLabel}
        </span>
        <div className="flex flex-wrap gap-2">
          {SERVICE_IDS.map((serviceId) => {
            const selected = services.includes(serviceId);
            return (
              <button
                key={serviceId}
                type="button"
                onClick={() => toggleService(serviceId)}
                className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                  selected
                    ? 'border-cyan-400/70 bg-cyan-500/15 text-cyan-200'
                    : 'border-white/[0.1] bg-[#090d16] text-slate-300 hover:border-white/25'
                }`}
              >
                {selected && <Check className="h-3.5 w-3.5 text-cyan-300" />}
                <span>{t.serviceOptions[serviceId]}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-slate-300">
          {t.notesLabel}
        </label>
        <textarea
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder={t.notesPlaceholder}
          className="w-full resize-none rounded-lg border border-white/[0.12] bg-[#090d16] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 disabled:opacity-60 cursor-pointer"
      >
        <Send className="h-4 w-4" />
        <span>{submitting ? t.submittingBtn : t.submitBtn}</span>
      </button>

      <p className="text-[11px] text-slate-400 leading-relaxed">{t.privacyNote}</p>
    </form>
  );
}

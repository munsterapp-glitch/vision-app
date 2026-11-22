import { Check, Lock, Server } from 'lucide-react';
import type { Translations } from '../i18n/translations';
import type { Language, LeadPrefill } from '../types';
import { LeadForm } from './LeadForm';

interface LeadCaptureSectionProps {
  lang: Language;
  t: Translations['lead'];
  prefill?: LeadPrefill | null;
  onNotify: (type: 'success' | 'error' | 'info', title: string, description: string) => void;
}

export function LeadCaptureSection({
  lang,
  t,
  prefill,
  onNotify,
}: LeadCaptureSectionProps) {
  const isDE = lang === 'de';

  const deliverables = isDE
    ? [
        'Prozess-Audit & konkrete Einsparpotenziale (Stunden / €)',
        'Architekturvorschlag für n8n, KI-Agenten oder FlutterFlow',
        'Verbindliche Budget- & Zeitplanung inkl. Hetzner Docker-Hosting',
      ]
    : [
        'Workflow audit & concrete time/cost savings projection',
        'Architecture blueprint for n8n, AI agents, or FlutterFlow',
        'Fixed-scope timeline & budget estimate incl. Hetzner Docker hosting',
      ];

  return (
    <section id="analysis" className="border-t border-white/[0.06] py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2
                className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
                style={{ textWrap: 'balance' }}
              >
                {t.sectionTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {t.sectionSubtitle}
              </p>
            </div>

            <ul className="space-y-3 border-t border-white/[0.08] pt-5 text-sm text-slate-300">
              {deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-2 border-t border-white/[0.08] pt-5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Server className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>
                  {isDE
                    ? 'PocketBase Backend: pb.demo.vision-it-systems.de'
                    : 'PocketBase Backend: pb.demo.vision-it-systems.de'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>
                  {isDE
                    ? 'Keine Weitergabe an Dritte · Serverstandort Deutschland'
                    : 'Zero third-party data sharing · Hosted in Germany'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.09] bg-[#0f1623] p-6 sm:p-8">
            <LeadForm lang={lang} t={t} prefill={prefill} onNotify={onNotify} />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Mail, Server } from 'lucide-react';
import type { Translations } from '../i18n/translations';

interface FooterProps {
  t: Translations['footer'];
  onOpenLegal: (type: 'impressum' | 'privacy') => void;
}

export function Footer({ t, onOpenLegal }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.08] bg-[#070a12] py-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md space-y-3">
            <div className="flex h-12 w-[160px] items-center justify-start overflow-hidden">
              <img
                src="/assets/aistudio/Screenshot_2026-11-14_110548-removebg-preview_c1c26b27.png"
                alt="Vision IT Systems"
                referrerPolicy="no-referrer"
                className="h-24 w-auto max-w-none -ml-4 object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">{t.tagline}</p>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-300">
              <Server className="h-4 w-4 shrink-0" />
              <span>{t.gdprBadge}</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12 text-sm">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-wide text-slate-400">
                {t.contactLabel}
              </div>
              <a
                href="mailto:kontakt@vision-it-systems.de"
                className="inline-flex items-center gap-2 text-slate-200 hover:text-cyan-300 transition-colors"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>kontakt@vision-it-systems.de</span>
              </a>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-wide text-slate-400">
                Legal
              </div>
              <div className="flex flex-col items-start gap-2">
                <button
                  type="button"
                  onClick={() => onOpenLegal('impressum')}
                  className="text-slate-300 hover:text-white hover:underline cursor-pointer"
                >
                  {t.impressum}
                </button>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="text-slate-300 hover:text-white hover:underline cursor-pointer"
                >
                  {t.privacy}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Vision IT Systems. {t.rights}</span>
          <span className="font-mono text-slate-500">demo.vision-it-systems.de</span>
        </div>
      </div>
    </footer>
  );
}

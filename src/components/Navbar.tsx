import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import type { Translations } from '../i18n/translations';
import type { DemoModuleId, Language } from '../types';

interface NavbarProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  t: Translations['nav'];
  onJumpToModule: (moduleId: DemoModuleId) => void;
  onOpenLeadModal: () => void;
}

export function Navbar({
  lang,
  onChangeLang,
  t,
  onJumpToModule,
  onOpenLeadModal,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (action: () => void) => {
    setMobileOpen(false);
    action();
  };

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-white/[0.08] bg-[#090d16]/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-4 px-4 sm:gap-8 sm:px-6">
        {/* Zone 1: Brand Logo */}
        <a
          href="#top"
          aria-label="Vision IT Systems"
          className="flex h-12 w-[148px] items-center justify-start overflow-hidden shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
        >
          <img
            src="/assets/aistudio/Screenshot_2026-11-14_110548-removebg-preview_c1c26b27.png"
            alt="Vision IT Systems"
            referrerPolicy="no-referrer"
            className="h-24 w-auto max-w-none -ml-4 object-contain"
          />
        </a>

        {/* Zone 2: 4 single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300"
        >
          <a
            href="#playground"
            onClick={() => onJumpToModule('chatbot')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-cyan-400/70"
          >
            {t.playground}
          </a>
          <a
            href="#playground"
            onClick={() => onJumpToModule('n8n')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-cyan-400/70"
          >
            {t.n8n}
          </a>
          <a
            href="#playground"
            onClick={() => onJumpToModule('apps_roi')}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-cyan-400/70"
          >
            {t.roi}
          </a>
          <a
            href="#analysis"
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-cyan-400/70"
          >
            {t.analysis}
          </a>
        </nav>

        {/* Zone 3: Language Switcher + Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            role="group"
            aria-label="Language switcher"
            className="flex items-center rounded-lg border border-white/[0.1] bg-[#0f1623] p-0.5"
          >
            <button
              type="button"
              onClick={() => onChangeLang('de')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'de'
                  ? 'bg-cyan-500/20 text-cyan-300'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              DE
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                lang === 'en'
                  ? 'bg-cyan-500/20 text-cyan-300'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenLeadModal}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 whitespace-nowrap shrink-0 cursor-pointer"
          >
            {t.cta}
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex md:hidden items-center justify-center rounded-lg border border-white/[0.1] bg-[#0f1623] p-2 text-slate-200 hover:text-white cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0b111d] px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-200">
            <a
              href="#playground"
              onClick={() => handleNavClick(() => onJumpToModule('chatbot'))}
              className="py-2 hover:text-cyan-300"
            >
              {t.playground}
            </a>
            <a
              href="#playground"
              onClick={() => handleNavClick(() => onJumpToModule('n8n'))}
              className="py-2 hover:text-cyan-300"
            >
              {t.n8n}
            </a>
            <a
              href="#playground"
              onClick={() => handleNavClick(() => onJumpToModule('apps_roi'))}
              className="py-2 hover:text-cyan-300"
            >
              {t.roi}
            </a>
            <a
              href="#analysis"
              onClick={() => setMobileOpen(false)}
              className="py-2 hover:text-cyan-300"
            >
              {t.analysis}
            </a>
          </div>
          <button
            type="button"
            onClick={() => handleNavClick(onOpenLeadModal)}
            className="w-full rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400 cursor-pointer"
          >
            {t.cta}
          </button>
        </div>
      )}
    </header>
  );
}

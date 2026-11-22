import { Check, ChevronDown, Globe, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { LANGUAGE_OPTIONS, type Translations } from '../i18n/translations';
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
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement | null>(null);

  const activeLangOption =
    LANGUAGE_OPTIONS.find((item) => item.code === lang) || LANGUAGE_OPTIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

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

        {/* Zone 3: Language Switcher Dropdown + Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <div ref={langMenuRef} className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={langMenuOpen}
              aria-label="Select language"
              onClick={() => setLangMenuOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.12] bg-[#0f1623] px-3 py-1.5 text-xs font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5 text-cyan-400" />
              <span>{activeLangOption.short}</span>
              <ChevronDown
                className={`h-3.5 w-3.5 text-slate-400 transition-transform ${
                  langMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {langMenuOpen && (
              <div
                role="listbox"
                aria-label="Languages"
                className="absolute right-0 mt-2 w-44 rounded-xl border border-white/[0.1] bg-[#0f1623] p-1.5 shadow-2xl z-50"
              >
                {LANGUAGE_OPTIONS.map((option) => {
                  const isActive = option.code === lang;
                  return (
                    <button
                      key={option.code}
                      type="button"
                      role="option"
                      aria-selected={isActive}
                      onClick={() => {
                        onChangeLang(option.code);
                        setLangMenuOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-cyan-500/15 text-cyan-300 font-semibold'
                          : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-slate-400 w-5 text-left">
                          {option.short}
                        </span>
                        <span>{option.nativeName}</span>
                      </span>
                      {isActive && <Check className="h-3.5 w-3.5 text-cyan-300 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            )}
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

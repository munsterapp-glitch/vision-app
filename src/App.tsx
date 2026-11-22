import { Bot, Cpu, MessageCircle, Workflow } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { AiChatbotDemo } from './components/demos/AiChatbotDemo';
import { AppsRoiDemo } from './components/demos/AppsRoiDemo';
import { N8nEmailDemo } from './components/demos/N8nEmailDemo';
import { TelegramBotDemo } from './components/demos/TelegramBotDemo';
import { FeedbackBar } from './components/FeedbackBar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { LeadModal } from './components/LeadModal';
import { LegalModal } from './components/LegalModal';
import { Navbar } from './components/Navbar';
import { ToastContainer } from './components/ToastContainer';
import { translations } from './i18n/translations';
import type { DemoModuleId, Language, LeadPrefill, ToastItem } from './types';

const MODULE_ORDER: DemoModuleId[] = ['chatbot', 'n8n', 'telegram', 'apps_roi'];

export default function App() {
  const [lang, setLang] = useState<Language>('de');
  const [activeModule, setActiveModule] = useState<DemoModuleId>('chatbot');
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadPrefill, setLeadPrefill] = useState<LeadPrefill | null>(null);
  const [legalModal, setLegalModal] = useState<'impressum' | 'privacy' | null>(null);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const notify = useCallback(
    (type: ToastItem['type'], title: string, description: string) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setToasts((prev) => [...prev, { id, type, title, description }]);
      window.setTimeout(() => {
        setToasts((prev) => prev.filter((item) => item.id !== id));
      }, 6500);
    },
    []
  );

  const openLeadModalWithPrefill = useCallback((prefill?: LeadPrefill) => {
    if (prefill) {
      setLeadPrefill(prefill);
    }
    setLeadModalOpen(true);
  }, []);

  const handleJumpToModule = (moduleId: DemoModuleId) => {
    setActiveModule(moduleId);
    const el = document.getElementById('playground');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const tabIcons: Record<DemoModuleId, typeof Bot> = {
    chatbot: Bot,
    n8n: Workflow,
    telegram: MessageCircle,
    apps_roi: Cpu,
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col">
      <Navbar
        lang={lang}
        onChangeLang={setLang}
        t={t.nav}
        onJumpToModule={handleJumpToModule}
        onOpenLeadModal={() => openLeadModalWithPrefill({ sourceModule: 'navbar' })}
      />

      <main className="flex-1">
        <Hero
          t={t.hero}
          onOpenLeadModal={() => openLeadModalWithPrefill({ sourceModule: 'hero' })}
        />

        {/* Interactive Live Automation & AI Sandbox */}
        <section id="playground" className="py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
            <div className="max-w-3xl">
              <h2
                className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl"
                style={{ textWrap: 'balance' }}
              >
                {t.playground.sectionTitle}
              </h2>
              <p className="mt-2.5 text-base leading-relaxed text-slate-300">
                {t.playground.sectionSubtitle}
              </p>
            </div>

            {/* 4-Scenario Module Switcher Tabs */}
            <div
              role="tablist"
              aria-label={t.playground.sectionTitle}
              className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {MODULE_ORDER.map((moduleId) => {
                const Icon = tabIcons[moduleId];
                const meta = t.playground.tabs[moduleId];
                const isActive = activeModule === moduleId;

                return (
                  <button
                    key={moduleId}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setActiveModule(moduleId)}
                    className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all cursor-pointer ${
                      isActive
                        ? 'border-cyan-400/60 bg-[#131d2f] shadow-[0_0_24px_rgba(6,182,212,0.12)]'
                        : 'border-white/[0.08] bg-[#0f1623]/70 hover:border-white/20 hover:bg-[#0f1623]'
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                        isActive
                          ? 'border-cyan-400/40 bg-cyan-500/15 text-cyan-300'
                          : 'border-white/[0.08] bg-[#090d16] text-slate-400'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div
                        className={`font-display text-sm font-semibold truncate ${
                          isActive ? 'text-white' : 'text-slate-200'
                        }`}
                      >
                        {meta.label}
                      </div>
                      <div className="mt-0.5 text-xs text-slate-400 truncate">
                        {meta.shortDesc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Sandbox Workspace */}
            <div className="mt-6 rounded-2xl border border-white/[0.09] bg-[#0f1623] p-5 sm:p-7">
              {activeModule === 'chatbot' && (
                <AiChatbotDemo
                  lang={lang}
                  t={t.chatbot}
                  onApplyToLeadModal={openLeadModalWithPrefill}
                />
              )}

              {activeModule === 'n8n' && (
                <N8nEmailDemo lang={lang} t={t.n8n} />
              )}

              {activeModule === 'telegram' && (
                <TelegramBotDemo
                  lang={lang}
                  t={t.telegram}
                  onApplyToLeadModal={openLeadModalWithPrefill}
                />
              )}

              {activeModule === 'apps_roi' && (
                <AppsRoiDemo
                  lang={lang}
                  t={t.appsRoi}
                  onApplyToLeadModal={openLeadModalWithPrefill}
                />
              )}

              <FeedbackBar
                activeModule={activeModule}
                lang={lang}
                t={t.feedback}
                toastCopy={t.toasts}
                onNotify={notify}
              />
            </div>
          </div>
        </section>

        <LeadCaptureSection
          lang={lang}
          t={t.lead}
          prefill={leadPrefill}
          onNotify={notify}
        />
      </main>

      <Footer t={t.footer} onOpenLegal={setLegalModal} />

      <LeadModal
        open={leadModalOpen}
        lang={lang}
        t={t.lead}
        prefill={leadPrefill}
        onClose={() => setLeadModalOpen(false)}
        onNotify={notify}
      />

      <LegalModal
        type={legalModal}
        lang={lang}
        onClose={() => setLegalModal(null)}
      />

      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

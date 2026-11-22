import {
  Bot,
  Calendar,
  Check,
  Database,
  MessageSquare,
  Mic,
  RotateCcw,
  Send,
  Square,
  User,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { Translations } from '../../i18n/translations';
import type { Language, LeadPrefill, ServiceOptionId } from '../../types';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  showSlots?: boolean;
}

interface CrmContext {
  intent: string;
  focusArea: string;
  recommendedStack: string;
  qualification: string;
  services: ServiceOptionId[];
}

interface AiChatbotDemoProps {
  lang: Language;
  t: Translations['chatbot'];
  onApplyToLeadModal: (prefill: LeadPrefill) => void;
}

function buildBotReply(
  input: string,
  lang: Language
): { reply: string; crm: CrmContext; showSlots: boolean } {
  const q = input.toLowerCase();
  const isDE = lang === 'de';

  if (q.includes('n8n') || q.includes('imap') || q.includes('email') || q.includes('e-mail') || q.includes('rechnung')) {
    return {
      reply: isDE
        ? 'Mit n8n verbinden wir Ihre Postfächer (IMAP/SMTP), ERP, Google Sheets und CRM-Systeme DSGVO-konform auf Ihrem eigenen Docker-Server. Eingehende Anfragen oder Rechnungen werden in ~1,4 Sekunden per KI klassifiziert, extrahiert und automatisch verbucht. Möchten Sie dazu ein kurzes Architekturbild im Erstgespräch besprechen?'
        : 'Using n8n on dedicated German Docker servers, we connect your IMAP mailboxes, ERP, Google Sheets, and CRM systems. Incoming inquiries or invoices are classified by AI in ~1.4 seconds and routed automatically. Would you like to review an architecture blueprint on a quick call?',
      crm: {
        intent: isDE ? 'Prozess- & E-Mail-Automatisierung' : 'Workflow & Email Automation',
        focusArea: isDE ? 'IMAP-Eingang, Rechnungen & CRM-Sync' : 'IMAP Inbox, Invoices & CRM Sync',
        recommendedStack: 'n8n + Docker (Hetzner DE) + LLM Classifier',
        qualification: isDE ? 'Qualifiziert · Hohes Einsparpotenzial' : 'Qualified · High ROI Potential',
        services: ['n8n_automation', 'docker_hosting'],
      },
      showSlots: false,
    };
  }

  if (q.includes('telegram') || q.includes('bot') || q.includes('kost') || q.includes('pric')) {
    return {
      reply: isDE
        ? 'Ein produktiver Telegram Business Bot (z.B. für Bestellstatus, Sofort-Angebote oder Sprachnotiz-zu-Aufgabe) startet je nach ERP-Anbindung bei 1.490 € einmalig inklusive Docker-Setup auf Hetzner. Laufende Serverkosten liegen meist unter 25 €/Monat. Sollen wir Ihren konkreten Anwendungsfall kalkulieren?'
        : 'A production Telegram Business Bot (e.g., order lookups, instant quotes, or voice-to-task) starts at €1,490 one-time including Hetzner Docker setup, depending on ERP integrations. Hosting costs typically stay under €25/month. Shall we scope your exact use case?',
      crm: {
        intent: isDE ? 'Budget- & Lösungsanfrage Telegram Bot' : 'Telegram Bot Pricing & Scope',
        focusArea: isDE ? 'Mobile Team- & Kundenautomatisierung' : 'Mobile Team & Client Automation',
        recommendedStack: 'Telegram Bot API + n8n Webhook + Whisper',
        qualification: isDE ? 'Kaufbereit · Budget-Evaluierung' : 'High Intent · Budget Evaluation',
        services: ['telegram_bot', 'n8n_automation'],
      },
      showSlots: true,
    };
  }

  if (
    q.includes('termin') ||
    q.includes('call') ||
    q.includes('appointment') ||
    q.includes('book') ||
    q.includes('gespräch')
  ) {
    return {
      reply: isDE
        ? 'Sehr gerne! Unsere Senior-Architekten analysieren Ihren Prozess in einem kompakten 15-Minuten-Videocall kostenlos und unverbindlich. Wählen Sie direkt unten einen passenden Terminslot aus:'
        : 'Gladly! Our senior engineers review your workflow in a focused 15-minute video discovery call at no charge. Select an available slot right below:',
      crm: {
        intent: isDE ? 'Direkte Terminbuchung (Erstanalyse)' : 'Direct Appointment Booking',
        focusArea: isDE ? 'Erstgespräch & Systemarchitektur' : 'Discovery Call & Architecture',
        recommendedStack: 'AI Chatbot + Calendar Sync + PocketBase',
        qualification: isDE ? 'Hot Lead · Terminwunsch' : 'Hot Lead · Booking Requested',
        services: ['ai_chatbot', 'n8n_automation'],
      },
      showSlots: true,
    };
  }

  if (q.includes('dsgvo') || q.includes('gdpr') || q.includes('hetzner') || q.includes('docker') || q.includes('host')) {
    return {
      reply: isDE
        ? 'Alle Systeme laufen auf Wunsch zu 100 % isoliert in Docker-Containern auf deutschen Hetzner-Servern (Nürnberg / Falkenstein) mit Auftragsverarbeitungsvertrag (AVV). Kundendaten verlassen die EU nicht — auch KI-Klassifizierungen können über EU-Endpunkte oder lokale Modelle laufen.'
        : 'All systems can run 100% isolated in Docker containers on German Hetzner servers (Nuremberg / Falkenstein) with a signed GDPR DPA (AVV). Customer data never leaves the EU — AI classification can use EU-hosted endpoints or self-hosted models.',
      crm: {
        intent: isDE ? 'Datenschutz & Infrastruktur-Prüfung' : 'GDPR & Infrastructure Verification',
        focusArea: isDE ? 'DSGVO-Hosting in Deutschland' : 'German GDPR Hosting',
        recommendedStack: 'Docker Compose + Traefik + Hetzner DE',
        qualification: isDE ? 'Qualifiziert · Compliance-Fokus' : 'Qualified · Compliance Focus',
        services: ['docker_hosting'],
      },
      showSlots: false,
    };
  }

  return {
    reply: isDE
      ? 'Verstanden! Genau solche wiederkehrenden Abläufe automatisieren wir mit einer Kombination aus KI-Agenten, n8n-Workflows und maßgeschneiderten Web/Android-Interfaces. Wählen Sie gerne direkt einen kostenlosen Terminslot, um Ihren Prozess durchzugehen.'
      : 'Understood! Those exact repetitive workflows are what we automate using AI agents, n8n pipelines, and tailored web/Android interfaces. Feel free to pick a free consultation slot below to map out your setup.',
    crm: {
      intent: isDE ? 'Individuelle KI- & IT-Beratung' : 'Custom AI & IT Consultation',
      focusArea: isDE ? 'End-to-End Digitalisierung' : 'End-to-End Automation',
      recommendedStack: 'AI Agent + n8n + Custom Web/App',
      qualification: isDE ? 'Qualifiziert · Erstkontakt' : 'Qualified · Initial Discovery',
      services: ['ai_chatbot', 'n8n_automation'],
    },
    showSlots: true,
  };
}

export function AiChatbotDemo({
  lang,
  t,
  onApplyToLeadModal,
}: AiChatbotDemoProps) {
  const [mode, setMode] = useState<'text' | 'voice'>('text');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'welcome', role: 'assistant', text: t.welcomeMsg },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [crmContext, setCrmContext] = useState<CrmContext | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Voice agent simulation state
  const [voiceActive, setVoiceActive] = useState(false);
  const [voiceStep, setVoiceStep] = useState(0);

  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const streamIntervalRef = useRef<number | null>(null);
  const voiceTimerRef = useRef<number | null>(null);

  // Reset welcome message when language changes cleanly if no user messages yet
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [{ id: 'welcome', role: 'assistant', text: t.welcomeMsg }];
      }
      return prev;
    });
  }, [t.welcomeMsg]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, selectedSlot]);

  useEffect(() => {
    return () => {
      if (streamIntervalRef.current) window.clearInterval(streamIntervalRef.current);
      if (voiceTimerRef.current) window.clearInterval(voiceTimerRef.current);
    };
  }, []);

  const voiceTranscript =
    lang === 'de'
      ? [
          { time: '00:01', speaker: 'Vision Voice AI', text: 'Vision IT Systems, digitaler Assistent am Apparat. Wobei darf ich helfen?' },
          { time: '00:05', speaker: 'Anrufer (B2B)', text: 'Hallo, wir bekommen täglich über 80 Angebotsmails und kommen mit dem Abtippen ins ERP nicht hinterher.' },
          { time: '00:11', speaker: 'Vision Voice AI', text: 'Das lösen wir mit einer n8n-IMAP-Pipeline inklusive KI-Extraktion. Sollen wir morgen um 10:00 Uhr eine Live-Analyse dazu machen?' },
          { time: '00:17', speaker: 'Anrufer (B2B)', text: 'Ja, morgen 10:00 Uhr passt hervorragend.' },
          { time: '00:20', speaker: 'Vision Voice AI', text: 'Perfekt, der Slot ist vorgemerkt und die Kalendereinladung geht Ihnen gleich per E-Mail zu.' },
        ]
      : [
          { time: '00:01', speaker: 'Vision Voice AI', text: 'Vision IT Systems digital assistant speaking. How can I help your team today?' },
          { time: '00:05', speaker: 'Caller (B2B)', text: 'Hi, we receive over 80 RFQ emails every day and our staff spends hours copying them into our ERP.' },
          { time: '00:11', speaker: 'Vision Voice AI', text: 'We solve that with an n8n IMAP pipeline and AI extraction. Would tomorrow at 10:00 CET work for a brief architecture review?' },
          { time: '00:17', speaker: 'Caller (B2B)', text: 'Yes, tomorrow at 10:00 works great.' },
          { time: '00:20', speaker: 'Vision Voice AI', text: 'Booked! I have reserved the slot and queued your calendar confirmation.' },
        ];

  const handleReset = () => {
    if (streamIntervalRef.current) window.clearInterval(streamIntervalRef.current);
    setIsStreaming(false);
    setSelectedSlot(null);
    setCrmContext(null);
    setMessages([{ id: 'welcome', role: 'assistant', text: t.welcomeMsg }]);
  };

  const sendPrompt = (promptText: string) => {
    const trimmed = promptText.trim();
    if (!trimmed || isStreaming) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
    };

    const { reply, crm, showSlots } = buildBotReply(trimmed, lang);
    const botId = `bot-${Date.now() + 1}`;

    setMessages((prev) => [...prev, userMsg, { id: botId, role: 'assistant', text: '' }]);
    setInputValue('');
    setIsStreaming(true);
    setCrmContext(crm);

    const words = reply.split(' ');
    let idx = 0;

    if (streamIntervalRef.current) window.clearInterval(streamIntervalRef.current);
    streamIntervalRef.current = window.setInterval(() => {
      idx += 2;
      const partial = words.slice(0, idx).join(' ');
      const done = idx >= words.length;

      setMessages((prev) =>
        prev.map((m) =>
          m.id === botId
            ? { ...m, text: partial, showSlots: done ? showSlots : false }
            : m
        )
      );

      if (done && streamIntervalRef.current) {
        window.clearInterval(streamIntervalRef.current);
        streamIntervalRef.current = null;
        setIsStreaming(false);
      }
    }, 35);
  };

  const toggleVoiceSimulation = () => {
    if (voiceActive) {
      if (voiceTimerRef.current) window.clearInterval(voiceTimerRef.current);
      setVoiceActive(false);
      return;
    }

    setVoiceStep(1);
    setVoiceActive(true);
    setCrmContext({
      intent: lang === 'de' ? 'Eingehender Voice-Lead (Vapi)' : 'Inbound Voice Lead (Vapi)',
      focusArea: lang === 'de' ? '80+ Angebotsmails / Tag → ERP' : '80+ RFQ emails / day → ERP',
      recommendedStack: 'Vapi / LiveKit + n8n IMAP + Hetzner DE',
      qualification: lang === 'de' ? 'Qualifiziert · Call aktiv' : 'Qualified · Call Active',
      services: ['ai_chatbot', 'n8n_automation'],
    });

    if (voiceTimerRef.current) window.clearInterval(voiceTimerRef.current);
    let step = 1;
    voiceTimerRef.current = window.setInterval(() => {
      step += 1;
      if (step > voiceTranscript.length) {
        if (voiceTimerRef.current) window.clearInterval(voiceTimerRef.current);
        setVoiceActive(false);
        return;
      }
      setVoiceStep(step);
    }, 1700);
  };

  return (
    <div className="space-y-6">
      {/* Sub-mode Toggle: Text Chatbox vs Voice Agent */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
        <div className="inline-flex items-center rounded-lg border border-white/[0.1] bg-[#090d16] p-1">
          <button
            type="button"
            onClick={() => setMode('text')}
            className={`inline-flex items-center gap-2 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              mode === 'text'
                ? 'bg-cyan-500/20 text-cyan-300'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>{t.modeText}</span>
          </button>
          <button
            type="button"
            onClick={() => setMode('voice')}
            className={`inline-flex items-center gap-2 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              mode === 'voice'
                ? 'bg-violet-500/25 text-violet-200'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Mic className="h-3.5 w-3.5" />
            <span>{t.modeVoice}</span>
          </button>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.1] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-white/25 hover:text-white transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>{t.reset}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Interactive Area (Chatbox or Voice Agent) */}
        <div className="lg:col-span-7 flex flex-col rounded-xl border border-white/[0.08] bg-[#090d16] overflow-hidden">
          {mode === 'text' ? (
            <>
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0d1422] px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
                    <Bot className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.agentName}</div>
                    <div className="text-xs text-slate-400">{t.agentRole}</div>
                  </div>
                </div>
                {isStreaming && (
                  <span className="text-xs font-mono text-cyan-300">streaming...</span>
                )}
              </div>

              {/* Message Feed */}
              <div className="flex-1 space-y-4 overflow-y-auto p-4 h-[330px]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-cyan-500/15 text-cyan-300">
                        <Bot className="h-4 w-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-cyan-500 text-slate-950 font-medium'
                          : 'border border-white/[0.08] bg-[#121a2a] text-slate-200'
                      }`}
                    >
                      <p>{msg.text || '...'}</p>

                      {msg.showSlots && (
                        <div className="mt-3 border-t border-white/[0.08] pt-3">
                          <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-cyan-300">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{t.bookSlotTitle}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {t.slots.map((slot) => {
                              const active = selectedSlot === slot;
                              return (
                                <button
                                  key={slot}
                                  type="button"
                                  onClick={() => setSelectedSlot(slot)}
                                  className={`rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                                    active
                                      ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200'
                                      : 'border-white/[0.12] bg-[#090d16] text-slate-300 hover:border-cyan-400/50'
                                  }`}
                                >
                                  {active && <Check className="mr-1 inline h-3 w-3" />}
                                  {slot}
                                </button>
                              );
                            })}
                          </div>
                          {selectedSlot && (
                            <button
                              type="button"
                              onClick={() =>
                                onApplyToLeadModal({
                                  services: crmContext?.services || ['ai_chatbot'],
                                  notes: `${lang === 'de' ? 'Gewünschter Terminslot' : 'Preferred slot'}: ${selectedSlot}`,
                                  sourceModule: 'chatbot',
                                })
                              }
                              className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-cyan-500 px-3 py-1.5 text-xs font-semibold text-slate-950 hover:bg-cyan-400 cursor-pointer"
                            >
                              <span>{t.transferToForm}</span>
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {msg.role === 'user' && (
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-800 text-slate-300">
                        <User className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Quick Prompts */}
              <div className="border-t border-white/[0.06] bg-[#0b111d] px-4 py-2.5">
                <div className="mb-1.5 text-[11px] font-medium text-slate-400">
                  {t.quickPromptsLabel}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {t.quickPrompts.map((prompt) => (
                    <button
                      key={prompt}
                      type="button"
                      disabled={isStreaming}
                      onClick={() => sendPrompt(prompt)}
                      className="rounded-md border border-white/[0.1] bg-[#121a2a] px-2.5 py-1 text-xs text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-cyan-200 disabled:opacity-50 cursor-pointer"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendPrompt(inputValue);
                }}
                className="flex items-center gap-2 border-t border-white/[0.08] bg-[#0d1422] p-3"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t.inputPlaceholder}
                  className="flex-1 rounded-lg border border-white/[0.1] bg-[#090d16] px-3.5 py-2 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isStreaming || !inputValue.trim()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 disabled:opacity-40 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{t.send}</span>
                </button>
              </form>
            </>
          ) : (
            /* Voice Agent Simulation Mode */
            <div className="flex h-[480px] flex-col justify-between p-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {t.voiceTitle}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{t.voiceSubtitle}</p>

                {/* Waveform / Call Control Bar */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#0f1623] p-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={toggleVoiceSimulation}
                      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        voiceActive
                          ? 'bg-rose-500/20 text-rose-200 border border-rose-500/40 hover:bg-rose-500/30'
                          : 'bg-violet-500 text-white hover:bg-violet-400'
                      }`}
                    >
                      {voiceActive ? (
                        <>
                          <Square className="h-3.5 w-3.5" />
                          <span>{t.voiceStop}</span>
                        </>
                      ) : (
                        <>
                          <Mic className="h-3.5 w-3.5" />
                          <span>{t.voiceStart}</span>
                        </>
                      )}
                    </button>
                    {voiceActive && (
                      <span className="text-xs font-medium text-violet-300">
                        {t.voiceRunning}
                      </span>
                    )}
                  </div>

                  {/* Audio Bars */}
                  <div className="flex items-center gap-1 h-7" aria-hidden="true">
                    {[14, 24, 18, 28, 16, 26, 12, 22, 16, 20].map((height, i) => (
                      <span
                        key={i}
                        className={`w-1 rounded-full transition-all duration-200 ${
                          voiceActive ? 'bg-violet-400' : 'bg-slate-700'
                        }`}
                        style={{
                          height: voiceActive ? `${Math.max(8, ((height + voiceStep * 7) % 26) + 4)}px` : '6px',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Transcript Feed */}
              <div className="my-4 flex-1 space-y-3 overflow-y-auto rounded-xl border border-white/[0.06] bg-[#0b111d] p-4">
                {voiceStep === 0 ? (
                  <div className="flex h-full items-center justify-center text-center text-sm text-slate-500">
                    {lang === 'de'
                      ? 'Klicken Sie auf „Testanruf abspielen“, um das Live-Transkript zu starten.'
                      : 'Click "Play Sample Call" to stream the live voice transcript.'}
                  </div>
                ) : (
                  voiceTranscript.slice(0, voiceStep).map((line, index) => (
                    <div key={index} className="flex gap-3 text-sm">
                      <span className="font-mono text-xs text-slate-500 tabular-nums pt-0.5">
                        {line.time}
                      </span>
                      <div>
                        <span
                          className={`text-xs font-semibold ${
                            line.speaker.includes('Vision')
                              ? 'text-violet-300'
                              : 'text-cyan-300'
                          }`}
                        >
                          {line.speaker}:
                        </span>
                        <p className="mt-0.5 text-slate-200 leading-relaxed">{line.text}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {voiceStep >= voiceTranscript.length && (
                <div className="flex items-center justify-between gap-3 rounded-lg border border-cyan-500/25 bg-cyan-500/10 px-4 py-2.5 text-xs text-cyan-200">
                  <span>
                    {lang === 'de'
                      ? 'Anruf abgeschlossen · Terminslot automatisch im CRM vorgemerkt.'
                      : 'Call completed · Discovery slot automatically reserved in CRM.'}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      onApplyToLeadModal({
                        services: ['ai_chatbot', 'n8n_automation'],
                        notes:
                          lang === 'de'
                            ? 'Interesse an Voice Agent (Vapi/LiveKit) + n8n IMAP Pipeline.'
                            : 'Interested in Voice Agent (Vapi/LiveKit) + n8n IMAP Pipeline.',
                        sourceModule: 'chatbot',
                      })
                    }
                    className="rounded bg-cyan-500 px-2.5 py-1 font-semibold text-slate-950 hover:bg-cyan-400 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {t.transferToForm}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Live CRM Lead Qualification Inspector */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#090d16] p-5">
          <div>
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
              <Database className="h-4 w-4 text-cyan-400" />
              <h4 className="font-display text-sm font-semibold text-white">
                {t.crmPanelTitle}
              </h4>
            </div>

            {!crmContext ? (
              <div className="py-12 text-center text-sm leading-relaxed text-slate-500">
                {t.crmEmpty}
              </div>
            ) : (
              <dl className="mt-4 space-y-4 text-sm">
                <div className="border-b border-white/[0.06] pb-3">
                  <dt className="text-xs text-slate-400">{t.crmFields.intent}</dt>
                  <dd className="mt-1 font-medium text-white">{crmContext.intent}</dd>
                </div>
                <div className="border-b border-white/[0.06] pb-3">
                  <dt className="text-xs text-slate-400">{t.crmFields.companySize}</dt>
                  <dd className="mt-1 font-medium text-slate-200">{crmContext.focusArea}</dd>
                </div>
                <div className="border-b border-white/[0.06] pb-3">
                  <dt className="text-xs text-slate-400">{t.crmFields.recommendedStack}</dt>
                  <dd className="mt-1 font-mono text-xs text-cyan-300">
                    {crmContext.recommendedStack}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-400">{t.crmFields.qualification}</dt>
                  <dd className="mt-1 font-medium text-emerald-400">
                    {crmContext.qualification}
                  </dd>
                </div>
              </dl>
            )}
          </div>

          <div className="mt-6 border-t border-white/[0.08] pt-4">
            <div className="text-xs text-slate-400 leading-relaxed">
              {lang === 'de'
                ? 'Alle erkannten Leads werden automatisch via Webhook in PocketBase, HubSpot, Pipedrive oder Google Sheets synchronisiert.'
                : 'All qualified leads synchronize automatically via webhook to PocketBase, HubSpot, Pipedrive, or Google Sheets.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

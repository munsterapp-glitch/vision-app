import {
  ArrowLeft,
  Bot,
  CheckCheck,
  FileText,
  Mic,
  Package,
  RotateCcw,
  Terminal,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { Translations } from '../../i18n/translations';
import type { Language, LeadPrefill } from '../../types';

interface InlineButton {
  id: string;
  label: string;
  callbackData: string;
}

interface TgMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  isVoice?: boolean;
  inlineButtons?: InlineButton[];
}

interface WebhookLog {
  event: string;
  callback_data: string;
  user_id: number;
  latency_ms: number;
  handler: string;
}

interface TelegramBotDemoProps {
  lang: Language;
  t: Translations['telegram'];
  onApplyToLeadModal: (prefill: LeadPrefill) => void;
}

function nowTime() {
  return new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' });
}

export function TelegramBotDemo({
  lang,
  t,
  onApplyToLeadModal,
}: TelegramBotDemoProps) {
  const isDE = lang === 'de';

  const getMainButtons = (): InlineButton[] => [
    { id: 'btn-order', label: t.buttons.orderStatus, callbackData: 'cmd:order_status' },
    { id: 'btn-quote', label: t.buttons.instantQuote, callbackData: 'cmd:instant_quote' },
    { id: 'btn-voice', label: t.buttons.voiceTask, callbackData: 'cmd:voice_to_task' },
  ];

  const [messages, setMessages] = useState<TgMessage[]>([
    {
      id: 'init-1',
      sender: 'bot',
      text: t.welcomeText,
      time: nowTime(),
      inlineButtons: getMainButtons(),
    },
  ]);

  const [lastLog, setLastLog] = useState<WebhookLog | null>(null);
  const feedRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMessages([
      {
        id: `init-${lang}`,
        sender: 'bot',
        text: t.welcomeText,
        time: nowTime(),
        inlineButtons: [
          { id: 'btn-order', label: t.buttons.orderStatus, callbackData: 'cmd:order_status' },
          { id: 'btn-quote', label: t.buttons.instantQuote, callbackData: 'cmd:instant_quote' },
          { id: 'btn-voice', label: t.buttons.voiceTask, callbackData: 'cmd:voice_to_task' },
        ],
      },
    ]);
    setLastLog(null);
  }, [lang, t.welcomeText, t.buttons]);

  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [messages]);

  const handleReset = () => {
    setMessages([
      {
        id: `reset-${Date.now()}`,
        sender: 'bot',
        text: t.welcomeText,
        time: nowTime(),
        inlineButtons: getMainButtons(),
      },
    ]);
    setLastLog(null);
  };

  const handleButtonTap = (btn: InlineButton) => {
    const time = nowTime();
    const userBubble: TgMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: btn.label,
      time,
      isVoice: btn.callbackData === 'cmd:voice_to_task',
    };

    let botReply: TgMessage;
    let handler = 'n8n_telegram_router';
    let latency = 184;

    switch (btn.callbackData) {
      case 'cmd:order_status':
        handler = 'erp_order_lookup';
        latency = 210;
        botReply = {
          id: `b-${Date.now() + 1}`,
          sender: 'bot',
          time,
          text: isDE
            ? 'Wählen Sie eine aktive Auftragsnummer aus Ihrem ERP:'
            : 'Select an active order ID from your ERP:',
          inlineButtons: [
            { id: 'ord-1', label: '#VIS-4821 · Server Migration', callbackData: 'order:VIS-4821' },
            { id: 'ord-2', label: '#VIS-4904 · n8n CRM Sync', callbackData: 'order:VIS-4904' },
            { id: 'back', label: t.buttons.backMenu, callbackData: 'cmd:menu' },
          ],
        };
        break;

      case 'order:VIS-4821':
        handler = 'hetzner_status_check';
        latency = 146;
        botReply = {
          id: `b-${Date.now() + 1}`,
          sender: 'bot',
          time,
          text: isDE
            ? 'Auftrag #VIS-4821 (Server-Cluster Migration)\nStatus: In Auslieferung (85 %)\nStandort: Hetzner Nürnberg (DE)\nNächster Meilenstein: DNS-Cutover heute 17:00 Uhr.'
            : 'Order #VIS-4821 (Server Cluster Migration)\nStatus: Deploying (85%)\nRegion: Hetzner Nuremberg (DE)\nNext milestone: DNS cutover today at 17:00 CET.',
          inlineButtons: [{ id: 'back', label: t.buttons.backMenu, callbackData: 'cmd:menu' }],
        };
        break;

      case 'order:VIS-4904':
        handler = 'erp_order_lookup';
        latency = 162;
        botReply = {
          id: `b-${Date.now() + 1}`,
          sender: 'bot',
          time,
          text: isDE
            ? 'Auftrag #VIS-4904 (n8n CRM-Pipeline)\nStatus: Produktiv & Aktiv\nLetzter Sync: vor 4 Minuten (42 Datensätze fehlerfrei übertragen).'
            : 'Order #VIS-4904 (n8n CRM Pipeline)\nStatus: Live & Healthy\nLast sync: 4 minutes ago (42 records synced with 0 errors).',
          inlineButtons: [{ id: 'back', label: t.buttons.backMenu, callbackData: 'cmd:menu' }],
        };
        break;

      case 'cmd:instant_quote':
        handler = 'quote_generator_engine';
        latency = 195;
        botReply = {
          id: `b-${Date.now() + 1}`,
          sender: 'bot',
          time,
          text: isDE
            ? 'Welches Automatisierungspaket soll kalkuliert werden?'
            : 'Which automation package would you like to estimate?',
          inlineButtons: [
            { id: 'q-starter', label: isDE ? 'Starter Bot & n8n (ab 1.490 €)' : 'Starter Bot & n8n (from €1,490)', callbackData: 'quote:starter' },
            { id: 'q-suite', label: isDE ? 'Full AI & CRM Suite (ab 3.900 €)' : 'Full AI & CRM Suite (from €3,900)', callbackData: 'quote:suite' },
            { id: 'back', label: t.buttons.backMenu, callbackData: 'cmd:menu' },
          ],
        };
        break;

      case 'quote:starter':
      case 'quote:suite': {
        const isSuite = btn.callbackData === 'quote:suite';
        handler = 'pdf_quote_builder';
        latency = 340;
        botReply = {
          id: `b-${Date.now() + 1}`,
          sender: 'bot',
          time,
          text: isDE
            ? `Sofort-Kalkulation erstellt:\nPaket: ${isSuite ? 'Full AI & CRM Suite' : 'Starter Bot & n8n'}\nRichtpreis: ${isSuite ? '3.900 €' : '1.490 €'} netto\nLieferzeit: ${isSuite ? '3–4 Wochen' : '7–10 Werktage'}\nInklusive: Docker-Setup auf Hetzner (DE) & AVV.`
            : `Instant Quote Generated:\nPackage: ${isSuite ? 'Full AI & CRM Suite' : 'Starter Bot & n8n'}\nEstimate: ${isSuite ? '€3,900' : '€1,490'} net\nDelivery: ${isSuite ? '3–4 weeks' : '7–10 business days'}\nIncludes: Hetzner Germany Docker setup & GDPR DPA.`,
          inlineButtons: [
            {
              id: 'apply-lead',
              label: isDE ? 'Unverbindlich anfragen' : 'Request formal quote',
              callbackData: isSuite ? 'lead:suite' : 'lead:starter',
            },
            { id: 'back', label: t.buttons.backMenu, callbackData: 'cmd:menu' },
          ],
        };
        break;
      }

      case 'lead:starter':
      case 'lead:suite':
        onApplyToLeadModal({
          services: ['telegram_bot', 'n8n_automation', 'docker_hosting'],
          notes:
            btn.callbackData === 'lead:suite'
              ? 'Telegram Bot Quote: Full AI & CRM Suite (ab 3.900 €)'
              : 'Telegram Bot Quote: Starter Bot & n8n (ab 1.490 €)',
          sourceModule: 'telegram',
        });
        return;

      case 'cmd:voice_to_task':
        handler = 'whisper_asr_jira_sync';
        latency = 420;
        botReply = {
          id: `b-${Date.now() + 1}`,
          sender: 'bot',
          time,
          text: isDE
            ? 'Sprachnotiz (0:06) transkribiert:\n"Bitte für Kunde Nordmetall bis Freitag 12 Uhr das IMAP-Postfach auf dem Hetzner-Node aktivieren."\n\nAngelegte Aufgabe:\n· Projekt: Nordmetall Onboarding\n· Priorität: Hoch\n· Fällig: Freitag, 12:00 Uhr'
            : 'Voice note (0:06) transcribed:\n"Please activate the IMAP mailbox on the Hetzner node for Nordmetall by Friday noon."\n\nCreated Task:\n· Project: Nordmetall Onboarding\n· Priority: High\n· Due: Friday, 12:00 CET',
          inlineButtons: [{ id: 'back', label: t.buttons.backMenu, callbackData: 'cmd:menu' }],
        };
        break;

      case 'cmd:menu':
      default:
        handler = 'menu_renderer';
        latency = 92;
        botReply = {
          id: `b-${Date.now() + 1}`,
          sender: 'bot',
          time,
          text: t.welcomeText,
          inlineButtons: getMainButtons(),
        };
        break;
    }

    setMessages((prev) => [...prev, userBubble, botReply]);
    setLastLog({
      event: btn.callbackData === 'cmd:voice_to_task' ? 'message.voice' : 'callback_query',
      callback_data: btn.callbackData,
      user_id: 84920174,
      latency_ms: latency,
      handler,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/[0.08] pb-4">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">{t.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{t.subtitle}</p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.1] px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-white/25 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>{t.resetBtn}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Smartphone Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-[360px] rounded-[2rem] border-[3px] border-slate-700/80 bg-[#0b101b] p-2.5 shadow-2xl">
            <div className="flex h-[510px] flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0e1621]">
              {/* Telegram Top Header */}
              <div className="flex items-center gap-3 border-b border-white/[0.08] bg-[#17212b] px-4 py-3">
                <ArrowLeft className="h-4 w-4 text-slate-400" />
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-white">
                    {t.botHandle}
                  </div>
                  <div className="text-[11px] text-cyan-300">{t.botStatus}</div>
                </div>
              </div>

              {/* Telegram Chat Feed */}
              <div
                ref={feedRef}
                className="flex-1 space-y-3 overflow-y-auto p-3.5"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`max-w-[90%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-line ${
                        msg.sender === 'user'
                          ? 'bg-[#2b5278] text-white'
                          : 'bg-[#182533] text-slate-100 border border-white/[0.06]'
                      }`}
                    >
                      {msg.isVoice && (
                        <div className="mb-1.5 flex items-center gap-2 rounded-md bg-black/25 px-2.5 py-1.5 text-[11px] text-cyan-200">
                          <Mic className="h-3.5 w-3.5" />
                          <span>Voice Memo · 0:06</span>
                        </div>
                      )}
                      <div>{msg.text}</div>
                      <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400 tabular-nums">
                        <span>{msg.time}</span>
                        {msg.sender === 'user' && (
                          <CheckCheck className="h-3 w-3 text-cyan-300" />
                        )}
                      </div>
                    </div>

                    {/* Inline Telegram Keyboard Buttons */}
                    {msg.inlineButtons && msg.inlineButtons.length > 0 && (
                      <div className="mt-1.5 flex w-[90%] flex-col gap-1.5">
                        {msg.inlineButtons.map((btn) => (
                          <button
                            key={btn.id}
                            type="button"
                            onClick={() => handleButtonTap(btn)}
                            className="flex items-center justify-center gap-1.5 rounded-lg border border-cyan-400/25 bg-[#1d2d3e] px-3 py-2 text-xs font-medium text-cyan-200 transition-colors hover:bg-cyan-500/20 hover:text-white cursor-pointer"
                          >
                            {btn.callbackData.includes('order') && (
                              <Package className="h-3.5 w-3.5 shrink-0" />
                            )}
                            {btn.callbackData.includes('quote') && (
                              <FileText className="h-3.5 w-3.5 shrink-0" />
                            )}
                            {btn.callbackData.includes('voice') && (
                              <Mic className="h-3.5 w-3.5 shrink-0" />
                            )}
                            <span>{btn.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Telegram Bottom Bar */}
              <div className="border-t border-white/[0.08] bg-[#17212b] px-4 py-2.5 text-xs text-slate-400 flex items-center justify-between">
                <span>/menu · Inline Bot Active</span>
                <span className="font-mono text-[11px] text-cyan-300">Webhook TLS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Webhook Inspector & Architecture Breakdown */}
        <div className="lg:col-span-6 space-y-5">
          <div className="rounded-xl border border-white/[0.08] bg-[#090d16] p-5">
            <div className="flex items-center gap-2 border-b border-white/[0.08] pb-3">
              <Terminal className="h-4 w-4 text-cyan-400" />
              <h4 className="font-display text-sm font-semibold text-white">
                {t.inspectorTitle}
              </h4>
            </div>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              {t.inspectorSubtitle}
            </p>

            <div className="mt-4 rounded-lg border border-white/[0.06] bg-[#0d1422] p-4">
              {lastLog ? (
                <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-cyan-200">
                  {JSON.stringify(lastLog, null, 2)}
                </pre>
              ) : (
                <div className="py-6 text-center text-xs text-slate-500">
                  {t.inspectorEmpty}
                </div>
              )}
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-[#090d16] p-5">
            <h4 className="font-display text-sm font-semibold text-white">
              {t.architectureTitle}
            </h4>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-300">
              {t.architectureSteps.map((step) => (
                <li key={step} className="border-b border-white/[0.05] pb-2 last:border-b-0 last:pb-0">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

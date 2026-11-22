import {
  ArrowRight,
  Bot,
  Check,
  Copy,
  Mail,
  Play,
  RotateCcw,
  Send,
  Table,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import type { Translations } from '../../i18n/translations';
import type { Language } from '../../types';

type PresetKey = 'quote' | 'support' | 'invoice';

interface EmailPreset {
  key: PresetKey;
  label: Record<Language, string>;
  sender: string;
  subject: Record<Language, string>;
  body: Record<Language, string>;
}

const EMAIL_PRESETS: EmailPreset[] = [
  {
    key: 'quote',
    label: { de: 'Angebotsanfrage', en: 'Quote Request' },
    sender: 'einkauf@nordmetall-gmbh.de',
    subject: {
      de: 'Anfrage: Automatisierung Bestelleingang & Kundenportal',
      en: 'RFQ: Order Intake Automation & Client Portal',
    },
    body: {
      de: 'Guten Tag,\nwir erhalten täglich ca. 65 PDF-Bestellungen per E-Mail und suchen eine DSGVO-konforme Lösung auf deutschen Servern, um diese automatisch in unser ERP und Google Sheets zu übertragen. Budgetrahmen ca. 4.500 €. Bitte um Rückmeldung bis Freitag.\nViele Grüße, Markus Weber (Nordmetall GmbH)',
      en: 'Hello,\nwe receive around 65 PDF purchase orders daily via email and are looking for a GDPR-compliant solution hosted in Germany to parse them into our ERP and Google Sheets automatically. Budget around €4,500. Please reply by Friday.\nBest regards, Markus Weber (Nordmetall GmbH)',
    },
  },
  {
    key: 'support',
    label: { de: 'Support-Ticket', en: 'Support Ticket' },
    sender: 'it-ops@rheinlogistik.de',
    subject: {
      de: 'Dringend: Fahrer-App Sync nach Passwort-Reset unterbrochen',
      en: 'Urgent: Driver App sync interrupted after password reset',
    },
    body: {
      de: 'Hallo Support-Team,\nseit heute Morgen 07:30 Uhr synchronisiert unsere Android-Scanner-App am Standort Köln keine Lieferscheine mehr. Fehlermeldung: HTTP 401 Token Expired. Können Sie die Webhook-Bridge prüfen?\nDanke, Julia Becker (RheinLogistik AG)',
      en: 'Hi Support Team,\nsince 07:30 AM our Android scanner app at the Cologne hub stopped syncing delivery slips. Error message: HTTP 401 Token Expired. Could you inspect the webhook bridge?\nThanks, Julia Becker (RheinLogistik AG)',
    },
  },
  {
    key: 'invoice',
    label: { de: 'Rechnung', en: 'Invoice' },
    sender: 'buchhaltung@cloudwerk-berlin.de',
    subject: {
      de: 'Eingangsrechnung RE-2026-0842 · CloudWerk Berlin',
      en: 'Incoming Invoice INV-2026-0842 · CloudWerk Berlin',
    },
    body: {
      de: 'Sehr geehrte Damen und Herren,\nanbei erhalten Sie unsere Monatsrechnung RE-2026-0842 über 1.280,00 EUR netto (1.523,20 EUR brutto), zahlbar bis zum 30.11.2026 auf unsere bekannte IBAN. Kostenstelle: IT-Infrastruktur.\nMit freundlichen Grüßen, Buchhaltung CloudWerk GmbH',
      en: 'Dear Finance Team,\nplease find attached our monthly invoice INV-2026-0842 for €1,280.00 net (€1,523.20 gross), due by 2026-11-30 to our IBAN on file. Cost center: IT Infrastructure.\nBest regards, CloudWerk GmbH Accounting',
    },
  },
];

interface N8nEmailDemoProps {
  lang: Language;
  t: Translations['n8n'];
}

function classifyEmail(sender: string, subject: string, body: string, lang: Language) {
  const combined = `${subject} ${body}`.toLowerCase();
  const domainPart = sender.split('@')[1]?.split('.')[0] || 'client';
  const companyGuess = domainPart.charAt(0).toUpperCase() + domainPart.slice(1) + ' GmbH';

  let category = 'General Inquiry';
  let priority: 'High' | 'Medium' | 'Normal' = 'Normal';
  let crmTarget = 'CRM_Inbox_Triage';
  let nextAction = 'Create task & notify account owner';
  let autoReply = '';

  if (combined.includes('rechnung') || combined.includes('invoice') || combined.includes('eur') || combined.includes('iban')) {
    category = lang === 'de' ? 'Eingangsrechnung (Buchhaltung)' : 'Incoming Invoice (Finance)';
    priority = 'Normal';
    crmTarget = 'DATEV_Beleg_Queue / Sheet_Finance_2026';
    nextAction = lang === 'de' ? 'PDF-Anhang prüfen & Freigabe-Workflow starten' : 'Validate attachment & trigger approval';
    autoReply =
      lang === 'de'
        ? `Hallo,\n\nvielen Dank für die Übermittlung Ihrer Rechnung (${subject}). Unser System hat den Beleg automatisch der Kostenstelle zugeordnet und an die Buchhaltung zur Freigabe weitergeleitet.\n\nBeste Grüße\nVision IT Systems · Automatisierter Rechnungseingang`
        : `Hello,\n\nthank you for submitting your invoice (${subject}). Our automated workflow has assigned the cost center and queued it for finance approval.\n\nBest regards\nVision IT Systems · Automated AP Desk`;
  } else if (
    combined.includes('dringend') ||
    combined.includes('fehler') ||
    combined.includes('401') ||
    combined.includes('support') ||
    combined.includes('urgent') ||
    combined.includes('error')
  ) {
    category = lang === 'de' ? 'Technisches Support-Ticket' : 'Technical Support Ticket';
    priority = 'High';
    crmTarget = 'Jira_Ops_P1 / Telegram_OnCall_Alert';
    nextAction = lang === 'de' ? 'Ticket #INC-904 anlegen + DevOps via Telegram warnen' : 'Open Ticket #INC-904 + alert DevOps via Telegram';
    autoReply =
      lang === 'de'
        ? `Hallo,\n\nwir haben Ihre Störungsmeldung (${subject}) mit Priorität HOCH erfasst. Ticket #INC-904 wurde soeben erstellt und unser Bereitschaftsteam direkt benachrichtigt.\n\nBeste Grüße\nVision IT Systems · 24/7 Support Desk`
        : `Hello,\n\nwe logged your support incident (${subject}) with HIGH priority. Ticket #INC-904 has been opened and our on-call engineering team was notified immediately.\n\nBest regards\nVision IT Systems · 24/7 Support Desk`;
  } else {
    category = lang === 'de' ? 'Qualifizierte Angebotsanfrage (B2B Lead)' : 'Qualified B2B Quote Request';
    priority = 'High';
    crmTarget = 'PocketBase_Leads / Sales_Pipeline_2026';
    nextAction = lang === 'de' ? 'Lead im CRM anlegen & Erstanalyse-Link senden' : 'Upsert CRM lead & send discovery link';
    autoReply =
      lang === 'de'
        ? `Guten Tag,\n\nvielen Dank für Ihre Projektanfrage (${subject}). Wir haben Ihre Anforderungen bereits strukturiert erfasst und melden uns heute noch mit einer konkreten Architektur-Einschätzung bei ${companyGuess}.\n\nBeste Grüße\nVision IT Systems · Automation Engineering`
        : `Hello,\n\nthank you for your project inquiry (${subject}). Our system has logged your requirements and a senior architect will follow up with ${companyGuess} today.\n\nBest regards\nVision IT Systems · Automation Engineering`;
  }

  return {
    json: {
      workflow: 'imap_ai_triage_v2',
      classified_category: category,
      priority,
      sender_email: sender,
      detected_company: companyGuess,
      crm_destination: crmTarget,
      recommended_action: nextAction,
      gdpr_region: 'eu-central-hetzner-de',
    },
    autoReply,
  };
}

export function N8nEmailDemo({ lang, t }: N8nEmailDemoProps) {
  const [selectedPreset, setSelectedPreset] = useState<PresetKey>('quote');
  const [sender, setSender] = useState(EMAIL_PRESETS[0].sender);
  const [subject, setSubject] = useState(EMAIL_PRESETS[0].subject[lang]);
  const [body, setBody] = useState(EMAIL_PRESETS[0].body[lang]);

  const [activeStep, setActiveStep] = useState<number>(-1); // -1 idle, 0..3 running, 4 finished
  const [elapsedSec, setElapsedSec] = useState<string>('0.00');
  const [copied, setCopied] = useState(false);

  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id));
    timersRef.current = [];
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  // Update preset fields when language toggles if user hasn't run custom text
  useEffect(() => {
    const preset = EMAIL_PRESETS.find((p) => p.key === selectedPreset);
    if (preset) {
      setSender(preset.sender);
      setSubject(preset.subject[lang]);
      setBody(preset.body[lang]);
      setActiveStep(-1);
      setElapsedSec('0.00');
    }
  }, [lang, selectedPreset]);

  const handleSelectPreset = (key: PresetKey) => {
    clearTimers();
    setSelectedPreset(key);
    const preset = EMAIL_PRESETS.find((p) => p.key === key)!;
    setSender(preset.sender);
    setSubject(preset.subject[lang]);
    setBody(preset.body[lang]);
    setActiveStep(-1);
    setElapsedSec('0.00');
  };

  const handleRunWorkflow = () => {
    clearTimers();
    setCopied(false);
    setActiveStep(0);
    setElapsedSec('0.28');

    timersRef.current.push(
      window.setTimeout(() => {
        setActiveStep(1);
        setElapsedSec('0.74');
      }, 380)
    );
    timersRef.current.push(
      window.setTimeout(() => {
        setActiveStep(2);
        setElapsedSec('1.12');
      }, 820)
    );
    timersRef.current.push(
      window.setTimeout(() => {
        setActiveStep(3);
        setElapsedSec('1.36');
      }, 1180)
    );
    timersRef.current.push(
      window.setTimeout(() => {
        setActiveStep(4);
        setElapsedSec('1.42');
      }, 1480)
    );
  };

  const handleReset = () => {
    clearTimers();
    setActiveStep(-1);
    setElapsedSec('0.00');
  };

  const result = classifyEmail(sender, subject, body, lang);
  const jsonString = JSON.stringify(result.json, null, 2);

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(jsonString);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard fallback ignored cleanly
    }
  };

  const isRunning = activeStep >= 0 && activeStep < 4;
  const isFinished = activeStep === 4;

  const nodeIcons = [Mail, Bot, Table, Send];

  return (
    <div className="space-y-6">
      <div className="border-b border-white/[0.08] pb-4">
        <h3 className="font-display text-lg font-semibold text-white">{t.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left Pane: Incoming Email Composer */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#090d16] p-5">
          <div className="space-y-4">
            <div>
              <div className="mb-2 text-xs font-medium text-slate-400">
                {t.presetsLabel}
              </div>
              <div className="flex flex-wrap gap-2">
                {EMAIL_PRESETS.map((preset) => (
                  <button
                    key={preset.key}
                    type="button"
                    onClick={() => handleSelectPreset(preset.key)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedPreset === preset.key
                        ? 'border-cyan-400/60 bg-cyan-500/15 text-cyan-200'
                        : 'border-white/[0.1] bg-[#0f1623] text-slate-300 hover:border-white/25'
                    }`}
                  >
                    {preset.label[lang]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                {t.senderLabel}
              </label>
              <input
                type="email"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                className="w-full rounded-lg border border-white/[0.1] bg-[#0f1623] px-3 py-2 font-mono text-xs text-slate-200 focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                {t.subjectLabel}
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded-lg border border-white/[0.1] bg-[#0f1623] px-3 py-2 text-sm text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                {t.bodyLabel}
              </label>
              <textarea
                rows={6}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full resize-none rounded-lg border border-white/[0.1] bg-[#0f1623] px-3 py-2 text-sm leading-relaxed text-slate-200 focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-5 flex items-center gap-3 pt-2">
            <button
              type="button"
              disabled={isRunning}
              onClick={handleRunWorkflow}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400 disabled:opacity-60 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Play className="h-3.5 w-3.5" />
              <span>{isRunning ? t.runningButton : t.runButton}</span>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.1] px-3.5 py-2.5 text-xs font-medium text-slate-300 hover:border-white/25 hover:text-white whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>{t.resetButton}</span>
            </button>
          </div>
        </div>

        {/* Right Pane: Visual Node Workflow + JSON & Auto-Reply Output */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Visual Node Pipeline */}
          <div className="rounded-xl border border-white/[0.08] bg-[#090d16] p-5">
            <div className="mb-4 flex items-center justify-between gap-2">
              <span className="text-xs font-semibold text-slate-300">
                n8n Pipeline Execution
              </span>
              <span className="font-mono text-xs text-cyan-300 tabular-nums">
                {t.executionTime}: {elapsedSec} s
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 sm:gap-2">
              {t.nodes.map((node, index) => {
                const Icon = nodeIcons[index];
                const isDone = activeStep > index;
                const isCurrent = activeStep === index;

                return (
                  <div key={node.id} className="relative flex items-center gap-2">
                    <div
                      className={`flex-1 rounded-xl border p-3.5 transition-all duration-200 ${
                        isCurrent
                          ? 'border-cyan-400 bg-cyan-500/15 shadow-[0_0_20px_rgba(6,182,212,0.18)]'
                          : isDone
                          ? 'border-emerald-500/45 bg-emerald-500/10'
                          : 'border-white/[0.08] bg-[#0f1623]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Icon
                          className={`h-4 w-4 ${
                            isCurrent
                              ? 'text-cyan-300'
                              : isDone
                              ? 'text-emerald-400'
                              : 'text-slate-400'
                          }`}
                        />
                        {isDone && <Check className="h-3.5 w-3.5 text-emerald-400" />}
                      </div>
                      <div className="mt-2.5 text-xs font-semibold text-white">
                        {node.title}
                      </div>
                      <div className="mt-0.5 text-[11px] text-slate-400">
                        {node.subtitle}
                      </div>
                    </div>

                    {index < t.nodes.length - 1 && (
                      <ArrowRight
                        className={`hidden sm:block h-4 w-4 shrink-0 transition-colors ${
                          activeStep > index ? 'text-cyan-400' : 'text-slate-700'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Extracted JSON + Auto-Reply Preview */}
          <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2">
            {/* JSON Output */}
            <div className="flex flex-col rounded-xl border border-white/[0.08] bg-[#090d16] p-4">
              <div className="mb-3 flex items-center justify-between gap-2 border-b border-white/[0.06] pb-2.5">
                <span className="text-xs font-semibold text-white">
                  {t.jsonOutputTitle}
                </span>
                {isFinished && (
                  <button
                    type="button"
                    onClick={handleCopyJson}
                    className="inline-flex items-center gap-1 text-xs text-cyan-300 hover:text-cyan-200 cursor-pointer"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? t.copied : t.copyJson}</span>
                  </button>
                )}
              </div>

              {isFinished ? (
                <pre className="flex-1 overflow-x-auto text-[11px] leading-relaxed text-cyan-200 font-mono">
                  {jsonString}
                </pre>
              ) : (
                <div className="flex flex-1 items-center justify-center py-8 text-center text-xs text-slate-500">
                  {t.idleHint}
                </div>
              )}
            </div>

            {/* Generated Auto-Reply */}
            <div className="flex flex-col rounded-xl border border-white/[0.08] bg-[#090d16] p-4">
              <div className="mb-3 border-b border-white/[0.06] pb-2.5 text-xs font-semibold text-white">
                {t.autoReplyTitle}
              </div>

              {isFinished ? (
                <div className="flex-1 whitespace-pre-line text-xs leading-relaxed text-slate-300">
                  {result.autoReply}
                </div>
              ) : (
                <div className="flex flex-1 items-center justify-center py-8 text-center text-xs text-slate-500">
                  {t.idleHint}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

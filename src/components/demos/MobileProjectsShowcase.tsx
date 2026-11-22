import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  CheckCheck,
  ClipboardCheck,
  ExternalLink,
  Gauge,
  Hammer,
  HardHat,
  MessageCircle,
  Mic,
  Plus,
  RefreshCw,
  Send,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { useState } from 'react';
import type { Translations } from '../../i18n/translations';
import type { Language, LeadPrefill, ServiceOptionId } from '../../types';

export type MobileProjectId =
  | 'hausmeister'
  | 'nataly_beauty'
  | 'baumeister'
  | 'vision_tg';

interface MobileProjectsShowcaseProps {
  lang: Language;
  t: Translations['mobileShowcase'];
  onApplyToLeadModal: (prefill: LeadPrefill) => void;
}

const PROJECT_SERVICES: Record<MobileProjectId, ServiceOptionId[]> = {
  hausmeister: ['web_android_app', 'docker_hosting'],
  nataly_beauty: ['web_android_app', 'ai_chatbot'],
  baumeister: ['web_android_app', 'n8n_automation', 'docker_hosting'],
  vision_tg: ['telegram_bot', 'ai_chatbot', 'n8n_automation'],
};

export function MobileProjectsShowcase({
  lang,
  t,
  onApplyToLeadModal,
}: MobileProjectsShowcaseProps) {
  const isDE = lang === 'de';
  const [selectedProject, setSelectedProject] =
    useState<MobileProjectId>('hausmeister');

  // 1. HausmeisterPro App state
  const [hmTab, setHmTab] = useState<'tasks' | 'meters' | 'defects'>('tasks');
  const [hmProperty, setHmProperty] = useState<'Wohnpark Mitte' | 'Gewerbepark Süd'>(
    'Wohnpark Mitte'
  );
  const [hmTasks, setHmTasks] = useState([
    { id: 't1', titleDE: 'Heizungsdruck Keller B prüfen', titleEN: 'Check boiler pressure Basement B', unit: 'Haus 2', done: true },
    { id: 't2', titleDE: 'LED-Strahler Treppenhaus EG', titleEN: 'Replace hallway LED ground floor', unit: 'Haus 1', done: false },
    { id: 't3', titleDE: 'Rauchwarnmelder Wartung OG 3', titleEN: 'Smoke detector check 3rd floor', unit: 'Haus 2', done: false },
  ]);
  const [meterType, setMeterType] = useState<'Strom' | 'Wasser' | 'Gas'>('Strom');
  const [meterValue, setMeterValue] = useState('48219');
  const [meterLogs, setMeterLogs] = useState([
    { type: 'Strom', value: '48190 kWh', time: 'Heute 08:15' },
  ]);
  const [defectCategory, setDefectCategory] = useState('Sanitär');
  const [defectNote, setDefectNote] = useState('');
  const [defectList, setDefectList] = useState([
    { id: 'd1', category: 'Schloss', note: 'Hoftor Zylinder klemmt', status: 'Offen' },
  ]);

  // 1b. HausmeisterPro live embed mode & refresh key
  const [hmMode, setHmMode] = useState<'live' | 'interactive'>('live');
  const [hmIframeKey, setHmIframeKey] = useState(0);

  // 2. NatalyBeauty App iframe refresh key
  const [iframeKey, setIframeKey] = useState(0);

  // 3. Baumeister Pro App state
  const [bmMode, setBmMode] = useState<'live' | 'interactive'>('live');
  const [bmIframeKey, setBmIframeKey] = useState(0);
  const [bmTab, setBmTab] = useState<'diary' | 'trades' | 'inspect'>('diary');
  const [bmCrewCount, setBmCrewCount] = useState(9);
  const [bmNoteInput, setBmNoteInput] = useState('');
  const [bmLogs, setBmLogs] = useState([
    {
      id: 'l1',
      time: '09:30',
      crew: 6,
      textDE: 'Rohbau OG 2: Deckenbewehrung abgenommen',
      textEN: '2nd floor shell: slab rebar approved',
    },
    {
      id: 'l2',
      time: '11:15',
      crew: 3,
      textDE: 'TGA: Steigleitungen Schacht West verlegt',
      textEN: 'MEP: West shaft risers installed',
    },
  ]);
  const [bmTrades, setBmTrades] = useState([
    { id: 'tr1', nameDE: 'Erdarbeiten & Fundament', nameEN: 'Earthworks & Foundation', pct: 100 },
    { id: 'tr2', nameDE: 'Rohbau & Mauerwerk', nameEN: 'Structural Shell', pct: 80 },
    { id: 'tr3', nameDE: 'Fenster & Fassade', nameEN: 'Windows & Facade', pct: 45 },
    { id: 'tr4', nameDE: 'Heizung / Lüftung / Elektro', nameEN: 'HVAC & Electrical', pct: 30 },
  ]);
  const [bmChecks, setBmChecks] = useState([
    { id: 'c1', labelDE: 'Brandschutztüren T30 EG', labelEN: 'Fire doors T30 ground floor', ok: true },
    { id: 'c2', labelDE: 'Estrich Restfeuchte < 2,0 %', labelEN: 'Screed moisture < 2.0%', ok: false },
    { id: 'c3', labelDE: 'Absturzsicherung Balkon OG 2', labelEN: 'Balcony safety rail 2nd floor', ok: true },
  ]);

  // 4. Vision Ki Telegram Bot state
  const [tgInput, setTgInput] = useState('');
  const [tgMessages, setTgMessages] = useState<
    Array<{ id: string; sender: 'bot' | 'user'; text: string; time: string }>
  >([
    {
      id: 'tg-0',
      sender: 'bot',
      time: '10:02',
      text: isDE
        ? 'Hallo! Ich bin der Vision KI Telegram Bot. Tippen Sie auf eine Schnellaktion oder schreiben Sie mir direkt.'
        : 'Hello! I am the Vision AI Telegram Bot. Tap a quick action below or send me a message.',
    },
  ]);

  const activeProjectMeta = t.projects.find((p) => p.id === selectedProject)!;

  const projectIcons: Record<MobileProjectId, typeof Wrench> = {
    hausmeister: Wrench,
    nataly_beauty: Sparkles,
    baumeister: HardHat,
    vision_tg: Bot,
  };

  const handleTgAction = (label: string, replyDE: string, replyEN: string) => {
    const time = new Date().toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setTgMessages((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, sender: 'user', text: label, time },
      {
        id: `b-${Date.now() + 1}`,
        sender: 'bot',
        text: isDE ? replyDE : replyEN,
        time,
      },
    ]);
  };

  const handleTgSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = tgInput.trim();
    if (!text) return;
    setTgInput('');
    handleTgAction(
      text,
      `KI-Analyse abgeschlossen:\n"${text}" wurde klassifiziert und als Workflow-Vorgang #VIS-209 im CRM vorgemerkt.`,
      `AI analysis completed:\n"${text}" was classified and logged as workflow item #VIS-209 in CRM.`
    );
  };

  const completedTasks = hmTasks.filter((item) => item.done).length;

  return (
    <div className="mt-10 border-t border-white/[0.08] pt-10">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium text-cyan-300">{t.kicker}</p>
          <h3 className="mt-1 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
            {t.title}
          </h3>
          <p className="mt-1.5 max-w-2xl text-sm text-slate-300">{t.subtitle}</p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Left Column: 4 Project Selector + Active Project Spec */}
        <div className="lg:col-span-6 space-y-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {t.projects.map((project, index) => {
              const Icon = projectIcons[project.id];
              const isActive = selectedProject === project.id;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProject(project.id)}
                  className={`flex items-start gap-3.5 rounded-xl border p-4 text-left transition-all cursor-pointer ${
                    isActive
                      ? 'border-cyan-400/60 bg-[#131d2f] shadow-[0_0_24px_rgba(6,182,212,0.12)]'
                      : 'border-white/[0.08] bg-[#0f1623] hover:border-white/20'
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
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-display text-sm font-semibold text-white">
                        0{index + 1}. {project.name}
                      </span>
                      <span className="font-mono text-[11px] text-cyan-300 shrink-0">
                        {project.tag}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {project.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Project Architecture & CTA */}
          <div className="rounded-xl border border-white/[0.08] bg-[#0f1623] p-5">
            <div className="text-xs font-mono text-cyan-300">
              {activeProjectMeta.stack}
            </div>
            <h4 className="mt-1.5 font-display text-base font-semibold text-white">
              {activeProjectMeta.name}
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
              {activeProjectMeta.fullDesc}
            </p>

            <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4 text-xs text-slate-300">
              {activeProjectMeta.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  onApplyToLeadModal({
                    services: PROJECT_SERVICES[selectedProject],
                    notes: `${isDE ? 'Interesse an Projekt-Referenz' : 'Interested in reference app'}: ${activeProjectMeta.name}`,
                    sourceModule: 'apps_roi',
                  })
                }
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400 cursor-pointer"
              >
                <span>{t.requestSimilarCta}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <a
                href={
                  selectedProject === 'hausmeister'
                    ? 'https://hausmeister.pro.vision-it-systems.de/'
                    : selectedProject === 'nataly_beauty'
                    ? 'https://lucent-kashata-59eb70.netlify.app/'
                    : selectedProject === 'baumeister'
                    ? 'https://bauapp.vision-it-systems.de'
                    : 'https://t.me/VisionITsystems_bot'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.12] px-3.5 py-2 text-xs font-medium text-slate-200 hover:border-cyan-400/50 hover:text-white"
              >
                <span>
                  {selectedProject === 'vision_tg'
                    ? isDE
                      ? 'In Telegram öffnen'
                      : 'Open in Telegram'
                    : t.openExternal}
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Mobile Display Bezel */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full max-w-[372px] rounded-[2.4rem] border-[4px] border-slate-700/90 bg-[#05080f] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.65)]">
            {/* Mobile Inner Screen */}
            <div className="flex h-[610px] flex-col overflow-hidden rounded-[1.85rem] border border-white/[0.08] bg-[#0b111d]">
              {/* Mobile Top Status Bar + Dynamic Notch */}
              <div className="flex items-center justify-between bg-[#090d16] px-5 pt-2.5 pb-2 text-[11px] font-medium text-slate-300 select-none">
                <span className="font-mono tabular-nums">09:41</span>
                <div className="h-4 w-20 rounded-full bg-black border border-white/[0.06]" />
                <span className="font-mono text-[10px] text-cyan-300">5G · 98%</span>
              </div>

              {/* 1. HAUSMEISTERPRO APP */}
              {selectedProject === 'hausmeister' && (
                <div className="flex flex-1 flex-col overflow-hidden bg-[#0e1524]">
                  {/* Mobile Browser / Mode Bar */}
                  <div className="flex items-center justify-between gap-1.5 border-b border-white/[0.08] bg-[#131d31] px-2.5 py-2">
                    <div className="flex-1 truncate rounded-md border border-white/[0.08] bg-[#090d16] px-2 py-1 font-mono text-[10px] text-cyan-300">
                      hausmeister.pro.vision-it-systems.de
                    </div>
                    <div className="flex items-center rounded-md border border-white/[0.08] bg-[#090d16] p-0.5 text-[10px]">
                      <button
                        type="button"
                        onClick={() => setHmMode('live')}
                        className={`rounded px-1.5 py-0.5 font-medium cursor-pointer ${
                          hmMode === 'live' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400'
                        }`}
                      >
                        Live
                      </button>
                      <button
                        type="button"
                        onClick={() => setHmMode('interactive')}
                        className={`rounded px-1.5 py-0.5 font-medium cursor-pointer ${
                          hmMode === 'interactive'
                            ? 'bg-cyan-500/20 text-cyan-300'
                            : 'text-slate-400'
                        }`}
                      >
                        Demo
                      </button>
                    </div>
                    {hmMode === 'live' && (
                      <button
                        type="button"
                        onClick={() => setHmIframeKey((k) => k + 1)}
                        aria-label="Reload HausmeisterPro App"
                        className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer"
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                      </button>
                    )}
                    <a
                      href="https://hausmeister.pro.vision-it-systems.de/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open HausmeisterPro App in new tab"
                      className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {hmMode === 'live' ? (
                    <div className="relative flex-1 bg-white">
                      <iframe
                        key={hmIframeKey}
                        src="https://hausmeister.pro.vision-it-systems.de/"
                        title="HausmeisterPro App Live Mobile Preview"
                        className="h-full w-full border-0"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
                    </div>
                  ) : (
                    <>
                  {/* App Top Bar */}
                  <div className="border-b border-white/[0.08] bg-[#131d31] px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wrench className="h-4 w-4 text-cyan-400" />
                        <span className="font-display text-sm font-bold text-white">
                          HausmeisterPro
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-cyan-300 tabular-nums">
                        {completedTasks}/{hmTasks.length}
                      </span>
                    </div>
                    <select
                      aria-label="Property selector"
                      value={hmProperty}
                      onChange={(e) =>
                        setHmProperty(e.target.value as 'Wohnpark Mitte' | 'Gewerbepark Süd')
                      }
                      className="mt-2 w-full rounded-lg border border-white/[0.1] bg-[#090d16] px-2.5 py-1.5 text-xs text-slate-200 focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="Wohnpark Mitte">Objekt: Wohnpark Mitte (24 WE)</option>
                      <option value="Gewerbepark Süd">Objekt: Gewerbepark Süd (12 Einheiten)</option>
                    </select>
                  </div>

                  {/* App Body */}
                  <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                    {hmTab === 'tasks' && (
                      <>
                        <div className="text-[11px] font-medium text-slate-400">
                          {isDE ? 'Heutige Rundgang-Aufgaben' : 'Today’s Facility Tasks'} · {hmProperty}
                        </div>
                        {hmTasks.map((task) => (
                          <button
                            key={task.id}
                            type="button"
                            onClick={() =>
                              setHmTasks((prev) =>
                                prev.map((it) =>
                                  it.id === task.id ? { ...it, done: !it.done } : it
                                )
                              )
                            }
                            className={`flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-colors cursor-pointer ${
                              task.done
                                ? 'border-emerald-500/30 bg-emerald-500/10'
                                : 'border-white/[0.08] bg-[#141e33] hover:border-cyan-400/40'
                            }`}
                          >
                            <div
                              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                                task.done
                                  ? 'border-emerald-400 bg-emerald-400 text-slate-950'
                                  : 'border-slate-500'
                              }`}
                            >
                              {task.done && <Check className="h-3 w-3" />}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div
                                className={`text-xs font-medium ${
                                  task.done ? 'line-through text-slate-400' : 'text-white'
                                }`}
                              >
                                {isDE ? task.titleDE : task.titleEN}
                              </div>
                              <div className="mt-0.5 text-[11px] text-slate-400">
                                {task.unit}
                              </div>
                            </div>
                          </button>
                        ))}
                      </>
                    )}

                    {hmTab === 'meters' && (
                      <div className="space-y-3">
                        <div className="text-[11px] font-medium text-slate-400">
                          {isDE ? 'Zählerstand erfassen' : 'Log Meter Reading'}
                        </div>
                        <div className="rounded-xl border border-white/[0.08] bg-[#141e33] p-3 space-y-2.5">
                          <div className="flex gap-1.5">
                            {(['Strom', 'Wasser', 'Gas'] as const).map((type) => (
                              <button
                                key={type}
                                type="button"
                                onClick={() => setMeterType(type)}
                                className={`flex-1 rounded-md py-1.5 text-xs font-medium cursor-pointer ${
                                  meterType === type
                                    ? 'bg-cyan-500 text-slate-950'
                                    : 'bg-[#090d16] text-slate-300'
                                }`}
                              >
                                {type}
                              </button>
                            ))}
                          </div>
                          <input
                            type="number"
                            value={meterValue}
                            onChange={(e) => setMeterValue(e.target.value)}
                            className="w-full rounded-lg border border-white/[0.1] bg-[#090d16] px-3 py-2 font-mono text-sm text-white focus:border-cyan-400 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              if (!meterValue.trim()) return;
                              const unit =
                                meterType === 'Strom' ? 'kWh' : 'm³';
                              setMeterLogs((prev) => [
                                {
                                  type: meterType,
                                  value: `${meterValue} ${unit}`,
                                  time: new Date().toLocaleTimeString('de-DE', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  }),
                                },
                                ...prev,
                              ]);
                            }}
                            className="w-full rounded-lg bg-cyan-500 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 cursor-pointer"
                          >
                            {isDE ? 'Zählerstand speichern' : 'Save Reading'}
                          </button>
                        </div>

                        <div className="space-y-2">
                          {meterLogs.map((log, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-[#090d16] px-3 py-2 text-xs"
                            >
                              <span className="text-slate-300">{log.type}</span>
                              <span className="font-mono text-cyan-300">{log.value}</span>
                              <span className="text-[10px] text-slate-500">{log.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {hmTab === 'defects' && (
                      <div className="space-y-3">
                        <div className="text-[11px] font-medium text-slate-400">
                          {isDE ? 'Mängelmeldung erfassen' : 'Report Property Defect'}
                        </div>
                        <div className="rounded-xl border border-white/[0.08] bg-[#141e33] p-3 space-y-2.5">
                          <select
                            value={defectCategory}
                            onChange={(e) => setDefectCategory(e.target.value)}
                            className="w-full rounded-lg border border-white/[0.1] bg-[#090d16] px-2.5 py-2 text-xs text-white focus:outline-none"
                          >
                            <option value="Sanitär">Sanitär / Heizung</option>
                            <option value="Elektrik">Elektrik / Licht</option>
                            <option value="Schloss">Türen / Schließanlage</option>
                          </select>
                          <input
                            type="text"
                            value={defectNote}
                            onChange={(e) => setDefectNote(e.target.value)}
                            placeholder={isDE ? 'Kurzbeschreibung...' : 'Short description...'}
                            className="w-full rounded-lg border border-white/[0.1] bg-[#090d16] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              if (!defectNote.trim()) return;
                              setDefectList((prev) => [
                                {
                                  id: `d-${Date.now()}`,
                                  category: defectCategory,
                                  note: defectNote.trim(),
                                  status: isDE ? 'Neu' : 'New',
                                },
                                ...prev,
                              ]);
                              setDefectNote('');
                            }}
                            className="w-full rounded-lg bg-cyan-500 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 cursor-pointer"
                          >
                            {isDE ? 'Ticket an Verwaltung senden' : 'Submit Ticket'}
                          </button>
                        </div>

                        <div className="space-y-2">
                          {defectList.map((d) => (
                            <div
                              key={d.id}
                              className="rounded-lg border border-white/[0.06] bg-[#090d16] px-3 py-2 text-xs"
                            >
                              <div className="flex justify-between">
                                <span className="font-semibold text-cyan-300">{d.category}</span>
                                <span className="text-[11px] text-amber-300">{d.status}</span>
                              </div>
                              <div className="mt-0.5 text-slate-300">{d.note}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Bottom Navigation */}
                  <div className="grid grid-cols-3 border-t border-white/[0.08] bg-[#131d31] py-2 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setHmTab('tasks')}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${
                        hmTab === 'tasks' ? 'text-cyan-300' : 'text-slate-400'
                      }`}
                    >
                      <ClipboardCheck className="h-4 w-4" />
                      <span>{isDE ? 'Aufträge' : 'Tasks'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setHmTab('meters')}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${
                        hmTab === 'meters' ? 'text-cyan-300' : 'text-slate-400'
                      }`}
                    >
                      <Gauge className="h-4 w-4" />
                      <span>{isDE ? 'Zähler' : 'Meters'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setHmTab('defects')}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${
                        hmTab === 'defects' ? 'text-cyan-300' : 'text-slate-400'
                      }`}
                    >
                      <Building2 className="h-4 w-4" />
                      <span>{isDE ? 'Mängel' : 'Defects'}</span>
                    </button>
                  </div>
                    </>
                  )}
                </div>
              )}

              {/* 2. NATALYBEAUTY APP (REAL LIVE IFRAME EMBED) */}
              {selectedProject === 'nataly_beauty' && (
                <div className="flex flex-1 flex-col overflow-hidden bg-[#0e1524]">
                  {/* Mobile Browser Address Bar */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/[0.08] bg-[#131d31] px-3 py-2">
                    <div className="flex-1 truncate rounded-md border border-white/[0.08] bg-[#090d16] px-2.5 py-1 font-mono text-[10px] text-cyan-300">
                      lucent-kashata-59eb70.netlify.app
                    </div>
                    <button
                      type="button"
                      onClick={() => setIframeKey((k) => k + 1)}
                      aria-label="Reload NatalyBeauty App"
                      className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                    </button>
                    <a
                      href="https://lucent-kashata-59eb70.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open NatalyBeauty App in new tab"
                      className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Embedded Live App Viewport */}
                  <div className="relative flex-1 bg-white">
                    <iframe
                      key={iframeKey}
                      src="https://lucent-kashata-59eb70.netlify.app/"
                      title="NatalyBeauty App Live Mobile Preview"
                      className="h-full w-full border-0"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    />
                  </div>
                </div>
              )}

              {/* 3. BAUMEISTER PRO APP */}
              {selectedProject === 'baumeister' && (
                <div className="flex flex-1 flex-col overflow-hidden bg-[#0e1524]">
                  {/* Mobile Browser / Mode Bar */}
                  <div className="flex items-center justify-between gap-1.5 border-b border-white/[0.08] bg-[#131d31] px-2.5 py-2">
                    <div className="flex-1 truncate rounded-md border border-white/[0.08] bg-[#090d16] px-2 py-1 font-mono text-[10px] text-amber-300">
                      bauapp.vision-it-systems.de
                    </div>
                    <div className="flex items-center rounded-md border border-white/[0.08] bg-[#090d16] p-0.5 text-[10px]">
                      <button
                        type="button"
                        onClick={() => setBmMode('live')}
                        className={`rounded px-1.5 py-0.5 font-medium cursor-pointer ${
                          bmMode === 'live' ? 'bg-amber-400/20 text-amber-300' : 'text-slate-400'
                        }`}
                      >
                        Live
                      </button>
                      <button
                        type="button"
                        onClick={() => setBmMode('interactive')}
                        className={`rounded px-1.5 py-0.5 font-medium cursor-pointer ${
                          bmMode === 'interactive'
                            ? 'bg-amber-400/20 text-amber-300'
                            : 'text-slate-400'
                        }`}
                      >
                        Demo
                      </button>
                    </div>
                    {bmMode === 'live' && (
                      <button
                        type="button"
                        onClick={() => setBmIframeKey((k) => k + 1)}
                        aria-label="Reload Baumeister Pro App"
                        className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white cursor-pointer"
                      >
                        <RefreshCw className="h-3.5 w-3.5" />
                      </button>
                    )}
                    <a
                      href="https://bauapp.vision-it-systems.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Baumeister Pro App in new tab"
                      className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {bmMode === 'live' ? (
                    <div className="relative flex-1 bg-white">
                      <iframe
                        key={bmIframeKey}
                        src="https://bauapp.vision-it-systems.de"
                        title="Baumeister Pro App Live Mobile Preview"
                        className="h-full w-full border-0"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
                    </div>
                  ) : (
                    <>
                  {/* Header */}
                  <div className="border-b border-white/[0.08] bg-[#131d31] px-4 py-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <HardHat className="h-4 w-4 text-amber-400" />
                        <span className="font-display text-sm font-bold text-white">
                          Baumeister Pro
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-slate-300">8°C · Trocken</span>
                    </div>
                    <div className="mt-1 text-[11px] text-slate-400">
                      {isDE ? 'Baustelle: Quartier Nord · KW 47' : 'Site: North Quarter · W47'}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex-1 overflow-y-auto p-3.5 space-y-3">
                    {bmTab === 'diary' && (
                      <>
                        <div className="rounded-xl border border-white/[0.08] bg-[#141e33] p-3 space-y-2">
                          <div className="flex items-center justify-between text-xs text-slate-300">
                            <span>{isDE ? 'Fachkräfte vor Ort:' : 'Crew on site:'}</span>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => setBmCrewCount((c) => Math.max(1, c - 1))}
                                className="h-6 w-6 rounded bg-[#090d16] text-white cursor-pointer"
                              >
                                -
                              </button>
                              <span className="font-mono text-cyan-300 tabular-nums">
                                {bmCrewCount}
                              </span>
                              <button
                                type="button"
                                onClick={() => setBmCrewCount((c) => c + 1)}
                                className="h-6 w-6 rounded bg-[#090d16] text-white cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={bmNoteInput}
                              onChange={(e) => setBmNoteInput(e.target.value)}
                              placeholder={
                                isDE ? 'Bautagebuch-Eintrag...' : 'Daily site note...'
                              }
                              className="flex-1 rounded-lg border border-white/[0.1] bg-[#090d16] px-2.5 py-1.5 text-xs text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                if (!bmNoteInput.trim()) return;
                                setBmLogs((prev) => [
                                  {
                                    id: `l-${Date.now()}`,
                                    time: new Date().toLocaleTimeString('de-DE', {
                                      hour: '2-digit',
                                      minute: '2-digit',
                                    }),
                                    crew: bmCrewCount,
                                    textDE: bmNoteInput.trim(),
                                    textEN: bmNoteInput.trim(),
                                  },
                                  ...prev,
                                ]);
                                setBmNoteInput('');
                              }}
                              className="rounded-lg bg-amber-400 px-2.5 py-1.5 text-xs font-semibold text-slate-950 hover:bg-amber-300 cursor-pointer"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {bmLogs.map((log) => (
                            <div
                              key={log.id}
                              className="rounded-xl border border-white/[0.06] bg-[#141e33] p-3 text-xs"
                            >
                              <div className="flex justify-between text-[11px] text-slate-400">
                                <span className="font-mono">{log.time}</span>
                                <span className="text-amber-300">
                                  {log.crew} {isDE ? 'Personen' : 'workers'}
                                </span>
                              </div>
                              <p className="mt-1 text-slate-200">
                                {isDE ? log.textDE : log.textEN}
                              </p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {bmTab === 'trades' && (
                      <div className="space-y-3">
                        <div className="text-[11px] font-medium text-slate-400">
                          {isDE ? 'Baufortschritt nach Gewerk' : 'Progress by Trade'}
                        </div>
                        {bmTrades.map((trade) => (
                          <div
                            key={trade.id}
                            className="rounded-xl border border-white/[0.08] bg-[#141e33] p-3 space-y-2"
                          >
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-medium text-white">
                                {isDE ? trade.nameDE : trade.nameEN}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-amber-300 tabular-nums">
                                  {trade.pct}%
                                </span>
                                {trade.pct < 100 && (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setBmTrades((prev) =>
                                        prev.map((tr) =>
                                          tr.id === trade.id
                                            ? { ...tr, pct: Math.min(100, tr.pct + 5) }
                                            : tr
                                        )
                                      )
                                    }
                                    className="rounded bg-[#090d16] px-1.5 py-0.5 text-[10px] text-cyan-300 hover:bg-cyan-500/20 cursor-pointer"
                                  >
                                    +5%
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="h-2 w-full rounded-full bg-[#090d16] overflow-hidden">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-cyan-400 transition-all"
                                style={{ width: `${trade.pct}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {bmTab === 'inspect' && (
                      <div className="space-y-2.5">
                        <div className="text-[11px] font-medium text-slate-400">
                          {isDE ? 'Abnahme-Checkliste' : 'Site Inspection Checklist'}
                        </div>
                        {bmChecks.map((check) => (
                          <button
                            key={check.id}
                            type="button"
                            onClick={() =>
                              setBmChecks((prev) =>
                                prev.map((item) =>
                                  item.id === check.id ? { ...item, ok: !item.ok } : item
                                )
                              )
                            }
                            className="flex w-full items-center justify-between rounded-xl border border-white/[0.08] bg-[#141e33] p-3 text-left text-xs cursor-pointer"
                          >
                            <span className="text-slate-200">
                              {isDE ? check.labelDE : check.labelEN}
                            </span>
                            <span
                              className={`font-semibold ${
                                check.ok ? 'text-emerald-400' : 'text-amber-300'
                              }`}
                            >
                              {check.ok
                                ? isDE
                                  ? 'Freigegeben'
                                  : 'Passed'
                                : isDE
                                ? 'Prüfen'
                                : 'Pending'}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Mobile Bottom Nav */}
                  <div className="grid grid-cols-3 border-t border-white/[0.08] bg-[#131d31] py-2 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setBmTab('diary')}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${
                        bmTab === 'diary' ? 'text-amber-300' : 'text-slate-400'
                      }`}
                    >
                      <ClipboardCheck className="h-4 w-4" />
                      <span>{isDE ? 'Bautagebuch' : 'Site Diary'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setBmTab('trades')}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${
                        bmTab === 'trades' ? 'text-amber-300' : 'text-slate-400'
                      }`}
                    >
                      <Hammer className="h-4 w-4" />
                      <span>{isDE ? 'Gewerke' : 'Trades'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setBmTab('inspect')}
                      className={`flex flex-col items-center gap-1 cursor-pointer ${
                        bmTab === 'inspect' ? 'text-amber-300' : 'text-slate-400'
                      }`}
                    >
                      <Check className="h-4 w-4" />
                      <span>{isDE ? 'Abnahme' : 'Inspect'}</span>
                    </button>
                  </div>
                    </>
                  )}
                </div>
              )}

              {/* 4. VISION KI TELEGRAM BOT */}
              {selectedProject === 'vision_tg' && (
                <div className="flex flex-1 flex-col overflow-hidden bg-[#0e1621]">
                  {/* Telegram Header */}
                  <div className="flex items-center gap-3 border-b border-white/[0.08] bg-[#17212b] px-4 py-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-xs font-semibold text-white">
                        Vision Ki Telegram Bot
                      </div>
                      <div className="text-[10px] text-cyan-300">
                        @VisionITsystems_bot · Webhook active
                      </div>
                    </div>
                    <a
                      href="https://t.me/VisionITsystems_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open @VisionITsystems_bot in Telegram"
                      className="rounded p-1 text-slate-300 hover:bg-white/10 hover:text-white"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>

                  {/* Chat Feed */}
                  <div className="flex-1 space-y-2.5 overflow-y-auto p-3">
                    {tgMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${
                          msg.sender === 'user' ? 'items-end' : 'items-start'
                        }`}
                      >
                        <div
                          className={`max-w-[88%] rounded-xl px-3 py-2 text-xs leading-relaxed whitespace-pre-line ${
                            msg.sender === 'user'
                              ? 'bg-[#2b5278] text-white'
                              : 'border border-white/[0.06] bg-[#182533] text-slate-100'
                          }`}
                        >
                          <div>{msg.text}</div>
                          <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-400 tabular-nums">
                            <span>{msg.time}</span>
                            {msg.sender === 'user' && (
                              <CheckCheck className="h-3 w-3 text-cyan-300" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Inline Quick Action Keyboard */}
                    <div className="grid grid-cols-1 gap-1.5 pt-1">
                      <button
                        type="button"
                        onClick={() =>
                          handleTgAction(
                            isDE ? 'KI-Angebot generieren' : 'Generate AI Quote',
                            'Sofort-Kalkulation #ANG-741 erstellt:\n· Paket: n8n + Telegram Bot\n· Lieferzeit: 10 Werktage\n· Hosting: Hetzner DE (DSGVO)',
                            'Instant Quote #ANG-741 created:\n· Package: n8n + Telegram Bot\n· Delivery: 10 business days\n· Hosting: Hetzner DE (GDPR)'
                          )
                        }
                        className="rounded-lg border border-cyan-400/25 bg-[#1d2d3e] px-3 py-1.5 text-xs font-medium text-cyan-200 hover:bg-cyan-500/20 cursor-pointer"
                      >
                        {isDE ? 'KI-Angebot generieren' : 'Generate AI Quote'}
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          handleTgAction(
                            isDE ? 'Sprachnotiz → Aufgabe' : 'Voice Note → Task',
                            'Whisper Transkription (0:05):\n"Rechnung 842 für Nordmetall freigeben."\n→ Aufgabe in PocketBase & Jira angelegt.',
                            'Whisper Transcript (0:05):\n"Approve invoice 842 for Nordmetall."\n→ Task created in PocketBase & Jira.'
                          )
                        }
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-cyan-400/25 bg-[#1d2d3e] px-3 py-1.5 text-xs font-medium text-cyan-200 hover:bg-cyan-500/20 cursor-pointer"
                      >
                        <Mic className="h-3.5 w-3.5" />
                        <span>{isDE ? 'Sprachnotiz → Aufgabe' : 'Voice Note → Task'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Mobile Telegram Message Input */}
                  <form
                    onSubmit={handleTgSend}
                    className="flex items-center gap-2 border-t border-white/[0.08] bg-[#17212b] px-3 py-2"
                  >
                    <MessageCircle className="h-4 w-4 text-slate-400 shrink-0" />
                    <input
                      type="text"
                      value={tgInput}
                      onChange={(e) => setTgInput(e.target.value)}
                      placeholder={isDE ? 'Nachricht an Bot...' : 'Message bot...'}
                      className="flex-1 bg-transparent text-xs text-white placeholder:text-slate-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      aria-label="Send Telegram message"
                      className="rounded-md bg-cyan-500 p-1.5 text-slate-950 hover:bg-cyan-400 cursor-pointer"
                    >
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </form>
                </div>
              )}

              {/* Bottom Home Indicator */}
              <div className="flex justify-center bg-[#090d16] py-2">
                <div className="h-1 w-28 rounded-full bg-slate-600/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

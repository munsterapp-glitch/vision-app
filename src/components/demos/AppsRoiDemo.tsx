import { ArrowRight, Check, Calculator, ExternalLink, Layers, Server, Smartphone } from 'lucide-react';
import { useState } from 'react';
import type { Translations } from '../../i18n/translations';
import type { Language, LeadPrefill } from '../../types';

interface AppsRoiDemoProps {
  lang: Language;
  t: Translations['appsRoi'];
  onApplyToLeadModal: (prefill: LeadPrefill) => void;
}

export function AppsRoiDemo({
  lang,
  t,
  onApplyToLeadModal,
}: AppsRoiDemoProps) {
  const [employees, setEmployees] = useState(8);
  const [hoursPerWeek, setHoursPerWeek] = useState(6);
  const [hourlyRate, setHourlyRate] = useState(65);
  const [automationRate, setAutomationRate] = useState(70);

  const totalAnnualHours = Math.round(employees * hoursPerWeek * 48);
  const hoursSavedPerYear = Math.round(totalAnnualHours * (automationRate / 100));
  const remainingHours = Math.max(0, totalAnnualHours - hoursSavedPerYear);
  const moneySavedPerYear = hoursSavedPerYear * hourlyRate;

  // Estimated payback against a typical B2B automation package (scales between €4,500 and €12,000)
  const estimatedSetupCost = Math.min(12000, Math.max(4500, 3500 + employees * 250));
  const monthlySavings = Math.max(1, moneySavedPerYear / 12);
  const paybackMonths = Math.max(0.8, estimatedSetupCost / monthlySavings);

  const formattedMoney = new Intl.NumberFormat(lang === 'de' ? 'de-DE' : 'en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(moneySavedPerYear);

  const formattedHours = new Intl.NumberFormat(lang === 'de' ? 'de-DE' : 'en-US').format(
    hoursSavedPerYear
  );

  const cardIcons = [Layers, Smartphone, Server];

  return (
    <div className="space-y-10">
      {/* Part A: Custom Web, FlutterFlow Apps & Docker Hosting */}
      <div>
        <div className="border-b border-white/[0.08] pb-4">
          <h3 className="font-display text-lg font-semibold text-white">
            {t.showcaseTitle}
          </h3>
          <p className="mt-1 text-sm text-slate-400">{t.showcaseSubtitle}</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.cards.map((card, index) => {
            const Icon = cardIcons[index];
            return (
              <div
                key={card.index}
                className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#090d16] p-6"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-cyan-300">{card.index}.</span>
                    <Icon className="h-4 w-4 text-slate-400" />
                  </div>
                  <h4 className="mt-3 font-display text-base font-semibold text-white">
                    {card.title}
                  </h4>
                  <div className="mt-1 font-mono text-xs text-cyan-300/90">
                    {card.stack}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {card.description}
                  </p>
                </div>

                <ul className="mt-5 space-y-2 border-t border-white/[0.06] pt-4 text-xs text-slate-300">
                  {card.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 shrink-0 text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Live Deployed Client App Reference: Natali Beauty App */}
        <div className="mt-5 flex flex-col justify-between gap-4 rounded-xl border border-white/[0.09] bg-[#090d16] p-5 sm:flex-row sm:items-center sm:p-6">
          <div className="space-y-1">
            <div className="text-xs font-medium text-cyan-300">
              {t.liveReference.kicker}
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h4 className="font-display text-base font-semibold text-white">
                {t.liveReference.title}
              </h4>
              <span className="font-mono text-xs text-slate-400">
                lucent-kashata-59eb70.netlify.app
              </span>
            </div>
            <p className="max-w-2xl text-sm text-slate-400">
              {t.liveReference.description}
            </p>
          </div>

          <a
            href={t.liveReference.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-400/40 bg-cyan-500/15 px-4 py-2.5 text-xs font-semibold text-cyan-200 transition-colors hover:bg-cyan-500/25 hover:text-white whitespace-nowrap shrink-0"
          >
            <span>{t.liveReference.cta}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Part B: Interactive ROI & Time-Savings Calculator */}
      <div className="rounded-xl border border-white/[0.09] bg-[#090d16] p-6 sm:p-8">
        <div className="flex items-start gap-3 border-b border-white/[0.08] pb-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-500/25 bg-cyan-500/15 text-cyan-300">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              {t.roiTitle}
            </h3>
            <p className="mt-1 text-sm text-slate-400">{t.roiSubtitle}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sliders Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="roi-employees" className="font-medium text-slate-200">
                  {t.employeesLabel}
                </label>
                <span className="font-mono text-sm font-semibold text-cyan-300 tabular-nums">
                  {employees}
                </span>
              </div>
              <input
                id="roi-employees"
                type="range"
                min={1}
                max={60}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="vision-slider mt-2.5 w-full"
              />
            </div>

            <div>
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="roi-hours" className="font-medium text-slate-200">
                  {t.hoursLabel}
                </label>
                <span className="font-mono text-sm font-semibold text-cyan-300 tabular-nums">
                  {hoursPerWeek} {t.hoursUnit}
                </span>
              </div>
              <input
                id="roi-hours"
                type="range"
                min={1}
                max={25}
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="vision-slider mt-2.5 w-full"
              />
            </div>

            <div>
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="roi-rate" className="font-medium text-slate-200">
                  {t.hourlyRateLabel}
                </label>
                <span className="font-mono text-sm font-semibold text-cyan-300 tabular-nums">
                  {hourlyRate} €
                </span>
              </div>
              <input
                id="roi-rate"
                type="range"
                min={35}
                max={130}
                step={5}
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="vision-slider mt-2.5 w-full"
              />
            </div>

            <div>
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="roi-auto" className="font-medium text-slate-200">
                  {t.automationRateLabel}
                </label>
                <span className="font-mono text-sm font-semibold text-violet-300 tabular-nums">
                  {automationRate} %
                </span>
              </div>
              <input
                id="roi-auto"
                type="range"
                min={35}
                max={85}
                step={5}
                value={automationRate}
                onChange={(e) => setAutomationRate(Number(e.target.value))}
                className="vision-slider mt-2.5 w-full"
              />
            </div>
          </div>

          {/* Calculated Output Column */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0f1623] p-6">
            <div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="border-b border-white/[0.08] pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
                  <div className="text-xs text-slate-400">{t.hoursSavedLabel}</div>
                  <div className="mt-1 font-display text-2xl font-bold text-white tabular-nums">
                    {formattedHours} {t.hoursUnit}
                  </div>
                </div>
                <div className="border-b border-white/[0.08] pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
                  <div className="text-xs text-slate-400">{t.moneySavedLabel}</div>
                  <div className="mt-1 font-display text-2xl font-bold text-cyan-300 tabular-nums">
                    {formattedMoney}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">{t.paybackLabel}</div>
                  <div className="mt-1 font-display text-2xl font-bold text-violet-300 tabular-nums">
                    {paybackMonths.toFixed(1)} {t.monthsUnit}
                  </div>
                </div>
              </div>

              {/* Comparative Before/After Workload Bar */}
              <div className="mt-7 space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>{t.beforeLabel}</span>
                    <span className="font-mono tabular-nums">
                      {totalAnnualHours} {t.hoursUnit}
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-full rounded-full bg-slate-500" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>{t.afterLabel}</span>
                    <span className="font-mono text-cyan-300 tabular-nums">
                      {remainingHours} {t.hoursUnit}
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-200"
                      style={{ width: `${Math.max(8, 100 - automationRate)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                onApplyToLeadModal({
                  services: ['n8n_automation', 'web_android_app', 'docker_hosting'],
                  notes:
                    lang === 'de'
                      ? `ROI-Rechner Ergebnis: ${employees} Mitarbeitende, ${hoursPerWeek} Std./Woche, geschätzte Ersparnis ${formattedMoney}/Jahr (${formattedHours} Std./Jahr).`
                      : `ROI Calculator Estimate: ${employees} employees, ${hoursPerWeek} hrs/week, estimated savings ${formattedMoney}/year (${formattedHours} hrs/year).`,
                  sourceModule: 'apps_roi',
                })
              }
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-semibold text-slate-950 transition-colors hover:bg-cyan-400 cursor-pointer"
            >
              <span>{t.applyToAnalysis}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowDownRight, ArrowRight, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import type { Translations } from '../i18n/translations';

interface HeroProps {
  t: Translations['hero'];
  onOpenLeadModal: () => void;
}

export function Hero({ t, onOpenLeadModal }: HeroProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden border-b border-white/[0.06] pt-12 pb-14 lg:pt-16 lg:pb-20">
      {/* Subtle architectural background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[420px] bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(6,182,212,0.14),rgba(139,92,246,0.06)_55%,transparent)]"
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Copy Column */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <p className="text-xs font-medium tracking-wide text-cyan-300/90 mb-4">
              {t.kicker}
            </p>

            <h1
              className="font-display font-bold tracking-tight text-white leading-[1.08]"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                textWrap: 'balance',
              }}
            >
              {t.headline}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {t.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenLeadModal}
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t.primaryCta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="#playground"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-[#0f1623] px-5 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white whitespace-nowrap shrink-0"
              >
                <span>{t.secondaryCta}</span>
                <ArrowDownRight className="h-4 w-4 text-cyan-400" />
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-400" />
              <span>{t.locationProof}</span>
            </div>
          </div>

          {/* Right Brand & Architecture Visual Frame */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] bg-[#141821] p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(139,92,246,0.14),transparent_60%),radial-gradient(circle_at_25%_75%,rgba(6,182,212,0.12),transparent_60%)]"
              />

              <div className="relative z-10 flex flex-1 items-center justify-center py-6">
                {!imgFailed ? (
                  <img
                    src="/assets/aistudio/Screenshot_2026-11-14_110548-removebg-preview_c1c26b27.png"
                    alt="Vision IT Systems Logo"
                    referrerPolicy="no-referrer"
                    onError={() => setImgFailed(true)}
                    className="w-full max-w-[380px] object-contain drop-shadow-[0_12px_28px_rgba(6,182,212,0.18)]"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#0b0f18] px-8 py-12 text-center">
                    <span className="font-display text-2xl font-bold tracking-wider text-white">
                      VISION IT SYSTEMS
                    </span>
                    <span className="mt-2 text-xs text-slate-400">
                      AI Automation &amp; Systems Engineering
                    </span>
                  </div>
                )}
              </div>

              <div className="relative z-10 border-t border-white/[0.08] pt-4 flex items-center justify-between text-xs text-slate-400">
                <span>n8n · Vapi · LiveKit · Telegram · FlutterFlow</span>
                <span className="font-mono text-cyan-300">DE / Hetzner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-Column Quantitative Proof Strip */}
        <div className="mt-10 grid grid-cols-1 divide-y divide-white/[0.08] rounded-xl border border-white/[0.08] bg-[#0f1623]/75 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {t.metrics.map((metric) => (
            <div key={metric.label} className="px-6 py-5">
              <div className="font-display text-2xl font-bold text-white tabular-nums sm:text-3xl">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-200">{metric.label}</div>
              <div className="mt-0.5 text-xs text-slate-400">{metric.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

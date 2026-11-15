import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, Sparkles, MousePointer, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({ x: 30, y: -20 });

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 overflow-hidden">
      {/* Background architectural grid line accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-6xl mx-auto h-full grid grid-cols-4 sm:grid-cols-6 border-x border-dashed border-line/60">
          <div className="border-r border-dashed border-line/40 h-full"></div>
          <div className="border-r border-dashed border-line/40 h-full"></div>
          <div className="border-r border-dashed border-line/40 h-full hidden sm:block"></div>
          <div className="border-r border-dashed border-line/40 h-full hidden sm:block"></div>
          <div className="border-r border-dashed border-line/40 h-full"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
          {/* Availability pill with green pulse */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper border border-line text-xs font-mono text-ink shadow-subtle">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{portfolioData.personal.statusBadge}</span>
          </div>

          {/* Award / Recognition Tag */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-lime/25 border border-brand-lime/40 text-xs font-medium text-ink">
            <Sparkles className="w-3.5 h-3.5 text-ink-secondary" />
            <span>{portfolioData.personal.firmAward}</span>
          </div>
        </div>

        {/* Hero Main Heading with NovaPersona Split Tone & Affinitty Floating Cursor */}
        <div className="relative mb-6 sm:mb-8">
          {/* Affinitty Collaborative Floating Cursor Sticker */}
          <div className="hidden sm:flex absolute -top-8 right-12 lg:right-28 z-20 items-center gap-2 pointer-events-none select-none animate-float-slow">
            <div className="relative">
              <MousePointer className="w-5 h-5 text-ink fill-ink transform -rotate-12 drop-shadow-sm" />
              <div className="absolute left-4 top-2 bg-brand-lime border border-ink text-ink font-mono text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-card whitespace-nowrap flex items-center gap-1.5">
                <span>PM Charan</span>
                <span className="text-[10px] text-ink/75">0→1 Ship Fast</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.08] text-ink max-w-4xl">
            <span className="text-ink-muted font-normal block sm:inline">Hey, I am </span>
            <span className="text-ink">{portfolioData.personal.name}</span>
            <span className="block mt-2 sm:mt-3 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink">
              Building at the intersection of{' '}
              <span className="relative inline-block px-2 py-0.5 my-1 rounded-lg bg-brand-lime/30 border border-brand-lime/60 text-ink">
                AI systems
              </span>
              , consumer apps & marketplaces.
            </span>
          </h1>
        </div>

        {/* Supporting Narrative / Bio */}
        <p className="text-lg sm:text-xl text-ink-secondary max-w-3xl leading-relaxed mb-8 sm:mb-10 font-normal">
          {portfolioData.personal.bio}
        </p>

        {/* CTA Button Row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <a
            href="#case-studies"
            className="btn-tactile inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink text-paper font-semibold text-sm sm:text-base hover:bg-black shadow-card transition-all"
          >
            <span>Explore Case Studies</span>
            <ArrowDown className="w-4 h-4 text-brand-lime" />
          </a>

          <a
            href="#contact"
            className="btn-tactile inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-paper border border-line text-ink font-semibold text-sm sm:text-base hover:bg-canvas shadow-subtle transition-all"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4 text-ink-secondary" />
          </a>

          <a
            href="#about"
            className="text-xs sm:text-sm font-mono text-ink-muted hover:text-ink transition-colors ml-2 flex items-center gap-1"
          >
            <span>Read Product Philosophy</span>
            <span>→</span>
          </a>
        </div>

        {/* Affinitty-style Blueprint Stat Banner with Corner Crosshairs */}
        <div className="crosshair-box crosshair-tl crosshair-tr crosshair-bl crosshair-br bg-paper border border-line rounded-2xl p-6 sm:p-8 shadow-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-line/70">
            {portfolioData.personal.stats.map((stat, idx) => (
              <div key={idx} className={`${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''} flex flex-col`}>
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono tracking-tight text-ink">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-ink tracking-tight mb-0.5">
                  {stat.label}
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-ink-muted">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


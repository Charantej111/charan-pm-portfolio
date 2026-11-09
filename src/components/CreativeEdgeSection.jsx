import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sliders, CheckCircle2, TrendingUp, Cpu } from 'lucide-react';

export default function CreativeEdgeSection() {
  const skills = portfolioData.creativeEdge;

  return (
    <section id="edge" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-line bg-paper">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                04 / Execution Edge &amp; Competencies
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              My Execution Edge
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary mt-2 max-w-2xl font-normal">
              A balanced synthesis of strategic product vision, systems architecture, rapid AI prototyping, and quantitative data telemetry.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted bg-canvas px-3 py-1.5 rounded-lg border border-line">
            <Sliders className="w-3.5 h-3.5 text-ink" />
            <span>Telemetry &amp; Competency Ratings</span>
          </div>
        </div>

        {/* Competency Skill Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skills.map((item, idx) => (
            <div
              key={idx}
              className="crosshair-box crosshair-tl crosshair-tr crosshair-bl crosshair-br bg-canvas/70 border border-line rounded-2xl p-6 hover:border-ink/40 transition-all"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-ink-muted uppercase">
                  {item.category}
                </span>
                <span className="text-sm font-mono font-bold text-ink">
                  {item.percentage}% Proficiency
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-ink mb-4 tracking-tight">
                {item.skill}
              </h3>

              {/* Progress Track */}
              <div className="w-full h-3 rounded-full bg-line/80 overflow-hidden relative">
                <div
                  className="h-full rounded-full bg-ink transition-all duration-1000 ease-out"
                  style={{ width: `${item.percentage}%` }}
                ></div>
                <div
                  className="absolute top-0 bottom-0 bg-brand-lime rounded-full"
                  style={{ left: `${Math.max(0, item.percentage - 8)}%`, width: '12px' }}
                ></div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                <span>0-to-1 Mastery</span>
                <span>Production Tested</span>
              </div>
            </div>
          ))}
        </div>

        {/* Execution Philosophy Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-ink text-paper border border-line-dark flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-brand-lime text-xs font-semibold">
              <Cpu className="w-4 h-4" />
              <span>THE 80/20 PM PLAYBOOK</span>
            </div>
            <p className="text-sm sm:text-base text-gray-200 font-normal">
              "Build small, ship weekly, measure ruthlessly, and talk to real users before writing 50-page specs."
            </p>
          </div>
          <a
            href="#case-studies"
            className="btn-tactile px-5 py-2.5 rounded-full bg-brand-lime text-ink font-semibold text-xs font-mono hover:bg-brand-limeHover shrink-0"
          >
            Review Shipped Case Studies →
          </a>
        </div>
      </div>
    </section>
  );
}


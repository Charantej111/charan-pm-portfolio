import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

export default function ExperienceTimeline() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-line bg-canvas">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                05 / Career &amp; Milestones
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              Experience &amp; Track Record
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary mt-2 max-w-2xl font-normal">
              Chronology of high-ownership product roles across fast-moving startups and venture builders.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted bg-paper px-3 py-1.5 rounded-lg border border-line">
            <Briefcase className="w-3.5 h-3.5 text-ink" />
            <span>4+ Years of Continuous Delivery</span>
          </div>
        </div>

        {/* Timeline Table */}
        <div className="crosshair-box crosshair-tl crosshair-tr crosshair-bl crosshair-br bg-paper border border-line rounded-3xl p-6 sm:p-10 shadow-card">
          <div className="divide-y divide-line">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="py-6 sm:py-8 first:pt-0 last:pb-0 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start group"
              >
                {/* Time & Location */}
                <div className="md:col-span-3 flex flex-col">
                  <span className="font-mono text-xs sm:text-sm font-semibold text-ink group-hover:text-emerald-700 transition-colors">
                    {exp.period}
                  </span>
                  <span className="text-[11px] font-mono text-ink-muted mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-ink-muted" />
                    {exp.location}
                  </span>
                </div>

                {/* Role & Company */}
                <div className="md:col-span-4 flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-ink tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-xs sm:text-sm font-mono font-medium text-ink-secondary mt-0.5">
                    {exp.company}
                  </span>
                </div>

                {/* Impact Description */}
                <div className="md:col-span-5">
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


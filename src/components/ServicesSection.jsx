import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Check, ChevronDown, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const services = portfolioData.services;
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-line bg-canvas">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                03 / Capabilities & Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              Core Product Ownership
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary mt-2 max-w-2xl font-normal">
              How I help early-stage venture founders and high-velocity teams move from vague hypotheses to compounding product moats.
            </p>
          </div>

          <div className="text-xs font-mono text-ink-muted bg-paper px-3 py-1.5 rounded-lg border border-line">
            <span>Specialization: 0-to-1 PM &amp; Systems Architecture</span>
          </div>
        </div>

        {/* Services List / Accordion (NovaPersona + Affinitty hybrid) */}
        <div className="space-y-4">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className={`crosshair-box crosshair-tl crosshair-tr crosshair-bl crosshair-br rounded-2xl border transition-all duration-300 ${
                  isExpanded
                    ? 'bg-paper border-ink shadow-card'
                    : 'bg-paper/70 hover:bg-paper border-line hover:border-ink/50'
                }`}
              >
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-lg sm:text-2xl font-bold text-ink-muted w-10">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-ink-secondary mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-auto">
                    <span className="text-xs font-mono text-ink-muted hidden md:inline">
                      {service.deliverables.length} Deliverables
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full border border-line flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? 'bg-ink text-paper rotate-180' : 'bg-canvas text-ink hover:bg-brand-lime/30'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-line/60 grid grid-cols-1 md:grid-cols-12 gap-6 items-start animate-in fade-in duration-200">
                    <div className="md:col-span-7">
                      <h4 className="text-xs font-mono text-ink-muted uppercase tracking-wider mb-2">
                        Approach &amp; Execution
                      </h4>
                      <p className="text-sm sm:text-base text-ink leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>

                    <div className="md:col-span-5 bg-canvas rounded-xl p-4 border border-line">
                      <h4 className="text-xs font-mono text-ink-muted uppercase tracking-wider mb-3">
                        Tangible Artifacts Delivered
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs font-mono text-ink">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


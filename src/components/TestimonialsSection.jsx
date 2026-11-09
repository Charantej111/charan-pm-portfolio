import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = portfolioData.testimonials;

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 border-b border-line bg-paper">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                06 / Founder Endorsements
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              What Founders &amp; Leads Say
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary mt-2 max-w-2xl font-normal">
              Direct feedback from technical co-founders, engineering leads, and operations directors I've partnered with.
            </p>
          </div>

          <div className="flex items-center gap-1 text-amber-500 bg-canvas px-3 py-1.5 rounded-lg border border-line text-xs font-mono">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1 text-ink font-semibold">100% Peer Endorsed</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="crosshair-box crosshair-tl crosshair-tr crosshair-bl crosshair-br bg-canvas/70 border border-line rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-ink hover:shadow-card transition-all group"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-paper border border-line flex items-center justify-center text-ink-muted mb-6 group-hover:text-ink transition-colors">
                  <Quote className="w-4 h-4" />
                </div>
                <p className="text-sm sm:text-base text-ink leading-relaxed font-normal mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-line/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ink text-paper font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-ink leading-tight">
                    {item.author}
                  </h4>
                  <p className="text-[11px] font-mono text-ink-muted mt-0.5">
                    {item.role} · <span className="text-ink-secondary">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


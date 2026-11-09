import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function BrandMarquee() {
  const brands = portfolioData.trustedBrands;
  // Double list for seamless looping marquee
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <section className="py-8 sm:py-10 border-y border-line bg-paper/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 mb-4 sm:mb-5 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
          Ecosystem & Product Collaborations
        </span>
        <span className="text-xs font-mono text-ink-secondary">
          Trusted across venture-backed AI & high-growth marketplaces
        </span>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-6 py-2">
          {marqueeItems.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-paper border border-line text-xs sm:text-sm font-medium text-ink hover:border-ink transition-all shadow-subtle shrink-0 group cursor-default"
            >
              <div className="w-2 h-2 rounded-full bg-ink/20 group-hover:bg-brand-lime transition-colors"></div>
              <span className="font-semibold tracking-tight">{brand.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-canvas text-ink-muted border border-line/60">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


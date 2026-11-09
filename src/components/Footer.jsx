import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Clock } from 'lucide-react';

export default function Footer() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-line bg-paper text-ink">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-ink-muted">
        {/* Left Identity */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-ink text-paper flex items-center justify-center font-bold text-[10px]">
            CT
          </div>
          <div>
            <span className="font-semibold text-ink">{portfolioData.personal.name}</span>
            <span className="mx-2">·</span>
            <span>Early-Stage Product Manager (AI &amp; Marketplaces)</span>
          </div>
        </div>

        {/* Middle Local Time */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-canvas border border-line text-ink-secondary">
          <Clock className="w-3.5 h-3.5 text-ink-muted" />
          <span>BLR {timeString || '12:00:00 AM'} IST (UTC+5:30)</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        </div>

        {/* Right Back to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span>&copy; {new Date().getFullYear()} Charan Tej</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-canvas hover:bg-ink hover:text-paper border border-line text-ink transition-all"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}


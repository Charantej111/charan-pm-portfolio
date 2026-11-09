import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Capabilities', href: '#services' },
    { label: 'Execution Edge', href: '#edge' },
    { label: 'Experience', href: '#experience' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? 'bg-paper/90 backdrop-blur-md border-line shadow-card'
              : 'bg-paper/70 backdrop-blur-sm border-line/80 shadow-subtle'
          }`}
        >
          {/* Brand Logo / Identity */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center font-bold text-xs tracking-tight transition-transform group-hover:scale-105">
              CT
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm sm:text-base text-ink tracking-tight flex items-center gap-1.5">
                {portfolioData.personal.name}
                <span className="inline-block w-2 h-2 rounded-full bg-brand-lime animate-pulse-glow" title="Available for work"></span>
              </span>
              <span className="text-[11px] font-mono text-ink-muted -mt-0.5 hidden xs:inline">
                Early-Stage PM
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-ink-secondary hover:text-ink px-3 py-1.5 rounded-full hover:bg-canvas transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-canvas border border-line text-[11px] font-mono text-ink-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Available Q1 2026</span>
            </div>

            <a
              href="#contact"
              className="btn-tactile inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink text-paper text-xs sm:text-sm font-medium hover:bg-black transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-lime" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-canvas text-ink transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-paper/95 backdrop-blur-xl border border-line shadow-card flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-ink-secondary hover:text-ink px-3 py-2 rounded-lg hover:bg-canvas transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-line flex items-center justify-between text-xs font-mono text-ink-muted">
              <span>Status: Available</span>
              <span className="text-emerald-600 font-semibold">Open for PM Roles</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}


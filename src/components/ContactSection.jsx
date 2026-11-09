import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, Sparkles, Send, Calendar } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = portfolioData.personal.email;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-8 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <div className="crosshair-box crosshair-tl crosshair-tr crosshair-bl crosshair-br bg-ink text-paper rounded-3xl p-8 sm:p-14 md:p-16 border border-line-dark shadow-2xl relative overflow-hidden">
          {/* Subtle architectural background grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C9EE7D_1px,transparent_1px)] [background-size:24px_24px]"></div>

          <div className="relative z-10 max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-brand-lime mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
              <span>Available for Founding PM Roles &amp; Q1 2026 Launches</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              Let's build something{' '}
              <span className="text-brand-lime underline decoration-brand-lime/40 underline-offset-8">
                remarkable
              </span>{' '}
              together.
            </h2>

            <p className="text-base sm:text-xl text-gray-300 leading-relaxed font-normal mb-8 sm:mb-10 max-w-2xl">
              Whether you are an early-stage founder searching for your first product hire, or a scaling tech company needing high-velocity 0-to-1 execution on AI and marketplace products, my inbox is open.
            </p>

            {/* Email Pill with Copy Action */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <a
                href={`mailto:${email}`}
                className="btn-tactile inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-brand-lime text-ink font-bold text-sm sm:text-base hover:bg-brand-limeHover shadow-lg transition-all"
              >
                <Mail className="w-4 h-4 text-ink" />
                <span>Send Email Directly</span>
                <ArrowUpRight className="w-4 h-4 text-ink" />
              </a>

              <button
                onClick={handleCopy}
                className="btn-tactile inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono text-xs sm:text-sm transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-brand-lime" />
                    <span className="text-brand-lime">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gray-300" />
                    <span>Copy: {email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Connect Strip */}
            <div className="pt-8 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono text-gray-400">
              <span className="text-gray-300 font-semibold">Connect on:</span>
              {portfolioData.personal.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-lime transition-colors flex items-center gap-1"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-500" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


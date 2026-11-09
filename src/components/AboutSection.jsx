import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, Compass, Cpu, Target, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: <Compass className="w-5 h-5 text-ink" />,
      title: "Discovery Over Assumptions",
      desc: "I don't rely on guesswork or PRD theater. I interview 30+ real users in a sprint, shadow operations teams on the ground, and map the root problem before writing a single line of spec."
    },
    {
      icon: <Cpu className="w-5 h-5 text-ink" />,
      title: "Technical & Systems Empathy",
      desc: "Having built and scripted products myself, I speak the language of engineers. I understand database latency, API payloads, prompt evaluation pipelines, and architectural tradeoffs."
    },
    {
      icon: <Target className="w-5 h-5 text-ink" />,
      title: "Aggressive Prioritization",
      desc: "The hardest part of 0-to-1 PM is saying 'no' to 90% of ideas. I ruthlessly sequence features that solve the core bottleneck and de-risk the riskiest assumptions first."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-ink" />,
      title: "Unit Economics & Growth Loops",
      desc: "Software isn't just an art project—it's an economic machine. Every feature is tied to user retention, gross margin, organic referral velocity, or customer acquisition efficiency."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-line bg-canvas">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
            01 / Product Philosophy & About
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight mb-6">
              A high-agency PM who works{' '}
              <span className="text-ink-muted font-normal">
                from raw customer ambiguity to scalable, profitable code.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed mb-6 font-normal">
              Most product management advice is written for mature enterprise monopolies with thousands of employees. 
              In early-stage startups and high-velocity teams, success comes from <strong>speed, empathy, taste, and technical clarity</strong>.
            </p>
            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-normal">
              I act as a force multiplier for founders, engineering teams, and designers—taking full ownership of the user problem and ensuring what we ship solves real pain points and moves company metrics.
            </p>
          </div>

          {/* Quick Contact & Info Card with Blueprint Crosshairs */}
          <div className="lg:col-span-5 crosshair-box crosshair-tl crosshair-tr crosshair-bl crosshair-br bg-paper border border-line rounded-2xl p-6 sm:p-8 shadow-card">
            <div className="text-xs font-mono text-ink-muted uppercase tracking-wider mb-4 pb-2 border-b border-line">
              Direct Contact & Base
            </div>

            <div className="space-y-4 mb-6">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center justify-between p-3.5 rounded-xl bg-canvas hover:bg-brand-lime/20 border border-line hover:border-brand-lime transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-paper border border-line flex items-center justify-center text-ink group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-ink-muted">Email Directly</div>
                    <div className="text-sm font-semibold text-ink">{portfolioData.personal.email}</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-ink-muted group-hover:text-ink">→</span>
              </a>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-canvas border border-line">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-paper border border-line flex items-center justify-center text-ink">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-ink-muted">Location</div>
                    <div className="text-sm font-semibold text-ink">{portfolioData.personal.location}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-ink text-paper text-xs space-y-2">
              <div className="flex items-center gap-2 font-mono text-brand-lime font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Founding PM Superpower</span>
              </div>
              <p className="text-gray-300 leading-relaxed font-normal">
                "Zero hand-waving: will inspect database schemas, write SQL queries, prototype prompt guardrails, and jump on calls with angry churn risks on day one."
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid with Affinitty Crosshairs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="crosshair-box crosshair-tl crosshair-tr crosshair-bl crosshair-br bg-paper border border-line rounded-2xl p-6 hover:shadow-card hover:border-ink transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-canvas border border-line flex items-center justify-center mb-4 group-hover:bg-brand-lime/20 group-hover:border-brand-lime transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-ink mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/50 text-[11px] font-mono text-ink-muted">
                Pillar 0{index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


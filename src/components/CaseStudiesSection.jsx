import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  ArrowUpRight,
  Layers,
  Cpu,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Terminal,
  Workflow,
  Users,
  TrendingUp,
  Sliders,
  Sparkles
} from 'lucide-react';

export default function CaseStudiesSection() {
  const caseStudies = portfolioData.caseStudies;
  // Track active tab ('problem' | 'process' | 'solution' | 'result') for each case study
  const [activeTabs, setActiveTabs] = useState({});

  const handleTabChange = (studyId, tabKey) => {
    setActiveTabs(prev => ({ ...prev, [studyId]: tabKey }));
  };

  return (
    <section id="case-studies" className="py-20 sm:py-28 px-4 sm:px-8 border-b border-line bg-paper">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-lime"></span>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              A few products I've built, launched, and operated.
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary mt-2 max-w-2xl font-normal">
              Different products, different users, same goal: solve a real problem and make the product work in the real world.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-ink-muted bg-canvas px-3 py-1.5 rounded-lg border border-line">
            <span>Role:</span>
            <span className="font-semibold text-ink">Product + UX + execution</span>
          </div>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-16 sm:space-y-24">
          {caseStudies.map((study, idx) => {
            const currentTab = activeTabs[study.id] || 'problem';

            return (
              <article
                key={study.id}
                className="crosshair-box crosshair-tl crosshair-tr crosshair-bl crosshair-br bg-canvas/60 border border-line rounded-3xl p-6 sm:p-10 shadow-card hover:border-ink/40 transition-all"
              >
                {/* Top Meta Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-line mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-ink text-paper font-semibold">
                      {study.projectNumber}
                    </span>
                    <span className="text-xs font-mono text-ink-muted border-l border-line pl-3">
                      {study.category}
                    </span>
                    <span className="text-xs font-mono text-ink-secondary hidden sm:inline">
                      ({study.year})
                    </span>
                  </div>

                  {/* Impact Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {study.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-paper border border-line text-ink-secondary"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Main Content Grid: Left Storytelling & Tabs, Right Interactive Mockup */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  {/* Left Column: Title, Summary, Key Metrics, and 4-Stage Tabs */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-baseline justify-between gap-4 mb-2">
                        <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink">
                          {study.title}
                        </h3>
                        <span className="text-xs sm:text-sm font-mono text-ink-secondary tracking-tight">
                          {study.subtitle}
                        </span>
                      </div>

                      <p className="text-base text-ink-secondary leading-relaxed mb-6 font-normal">
                        {study.summary}
                      </p>

                      {/* Key Metrics Strip (Affinitty Style) */}
                      <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-paper border border-line mb-6">
                        {study.keyMetrics.map((metric, mIdx) => (
                          <div key={mIdx} className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-ink">
                              {metric.value}
                            </span>
                            <span className="text-[11px] font-semibold text-ink-secondary mt-0.5">
                              {metric.label}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-600 font-medium">
                              {metric.change}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* 4-Stage Interactive Tabs (NovaPersona Style) */}
                      <div className="mb-4">
                        <div className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-xl bg-paper border border-line w-full sm:w-max">
                          {['problem', 'process', 'solution', 'result'].map((tabKey) => {
                            const isActive = currentTab === tabKey;
                            return (
                              <button
                                key={tabKey}
                                onClick={() => handleTabChange(study.id, tabKey)}
                                className={`flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 rounded-lg text-xs font-mono capitalize transition-all ${isActive
                                  ? 'bg-ink text-paper font-semibold shadow-sm'
                                  : 'text-ink-secondary hover:text-ink hover:bg-canvas'
                                  }`}
                              >
                                {tabKey === 'result' ? '★ Result' : tabKey}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Dynamic Tab Content Box */}
                      <div className="p-5 sm:p-6 rounded-2xl bg-paper border border-line min-h-[140px] flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-ink-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-lime"></span>
                            <span>Phase: {currentTab.toUpperCase()}</span>
                          </div>
                          <p className="text-sm sm:text-base text-ink leading-relaxed font-normal">
                            {study.breakdown[currentTab]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Preview Mockup Window */}
                  <div className="lg:col-span-5">
                    <div className="bg-card-dark rounded-2xl p-5 border border-line-dark shadow-xl text-paper">
                      {/* Window Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-line-dark/80 mb-4 text-xs font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                          <span className="ml-2 text-gray-400 font-normal">{study.id}-runtime.env</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-brand-lime/20 text-brand-lime text-[10px]">
                          {study.previewMockup.badge}
                        </span>
                      </div>

                      {/* Mockup Body Specialized by Project */}
                      {study.id === 'signalflow' && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-2">
                            <div className="flex items-center justify-between text-gray-400 text-[11px]">
                              <span>AGENT_EXECUTION_STREAM</span>
                              <span className="text-emerald-400">ACTIVE</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-lime animate-pulse"></span>
                              <span>1. Ingest webhook &amp; evaluate dispute</span>
                            </div>
                            <div className="text-gray-400 pl-3.5 text-[11px]">
                              Querying postgres_db: <span className="text-blue-400">SELECT * FROM orders WHERE id=9821</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>2. Deterministic policy guard passed</span>
                            </div>
                            <div className="flex items-center gap-2 text-white">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>3. Draft generated: $42 refund proposed</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-brand-lime/10 border border-brand-lime/30 flex items-center justify-between">
                            <span className="text-brand-lime font-sans font-semibold text-xs">
                              Human Verification Checkpoint
                            </span>
                            <div className="flex items-center gap-1.5">
                              <button className="px-2.5 py-1 rounded bg-brand-lime text-ink font-sans font-bold text-[11px] hover:bg-brand-limeHover">
                                Approve (⏎)
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      {study.id === 'wayfinder' && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-2">
                            <div className="flex items-center justify-between text-gray-400 text-[11px]">
                              <span>DISPATCH_RADAR</span>
                              <span className="text-emerald-400">ZONE: NORTH METRO</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                              <div className="p-2 rounded bg-white/5">
                                <div className="text-gray-400">Batch Density</div>
                                <div className="text-white font-bold">4.8 orders/km²</div>
                              </div>
                              <div className="p-2 rounded bg-white/5">
                                <div className="text-gray-400">Driver Matching</div>
                                <div className="text-emerald-400 font-bold">98.2% on SLA</div>
                              </div>
                            </div>
                            <div className="text-[11px] text-gray-400 border-t border-white/10 pt-2">
                              Dynamic Batching Strategy: <span className="text-brand-lime">Rolling 3-min window</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-between text-blue-300 font-sans text-xs">
                            <span>Auto-rebalancing 32 riders to East Sector</span>
                            <span className="font-mono text-[11px] text-white">ETA: 4m</span>
                          </div>
                        </div>
                      )}

                      {false && study.id === 'delizoo' && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-2">
                            <div className="flex items-center justify-between text-gray-400 text-[11px]">
                              <span>SHARED_TABLE_SESSION</span>
                              <span className="text-brand-lime">#TBL-884</span>
                            </div>
                            <div className="space-y-1.5 text-[11px]">
                              <div className="flex justify-between items-center text-gray-300">
                                <span>Karthik (Host)</span>
                                <span className="text-white font-mono">2 items · $28.00</span>
                              </div>
                              <div className="flex justify-between items-center text-gray-300">
                                <span>Priya</span>
                                <span className="text-white font-mono">1 item · $14.50</span>
                              </div>
                              <div className="flex justify-between items-center text-gray-300">
                                <span>Rohit</span>
                                <span className="text-white font-mono">2 items · $22.00</span>
                              </div>
                            </div>
                            <div className="border-t border-white/10 pt-2 flex justify-between font-bold text-white text-xs">
                              <span>Total Basket</span>
                              <span className="text-brand-lime">$64.50 (3 Splits Ready)</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-emerald-300 font-sans text-xs">
                            <span>WebSocket state synchronized across all 3 devices</span>
                            <span className="font-mono text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded text-emerald-300">0ms lag</span>
                          </div>
                        </div>
                      )}

                      <div className="space-y-3 font-mono text-xs">
                        <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-3">
                          <div className="flex items-center justify-between text-gray-400 text-[11px]">
                            <span>PRODUCT_RUNTIME</span>
                            <span className="text-emerald-400">IN PROGRESS</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[11px]">
                            <div className="p-2 rounded bg-white/5"><div className="text-gray-400">Product</div><div className="text-white font-bold">{study.title}</div></div>
                            <div className="p-2 rounded bg-white/5"><div className="text-gray-400">Focus</div><div className="text-emerald-400 font-bold">{study.projectNumber}</div></div>
                          </div>
                          <div className="border-t border-white/10 pt-2 text-gray-400">Current state: <span className="text-brand-lime">{study.previewMockup.badge}</span></div>
                        </div>
                        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-emerald-300 font-sans text-xs">
                          <span>{study.subtitle}</span><span className="font-mono text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded text-emerald-300">CASE STUDY</span>
                        </div>
                      </div>

                      {/* Mockup Footer Stats */}
                      <div className="mt-4 pt-3 border-t border-line-dark/60 flex items-center justify-between text-[11px] font-mono text-gray-400">
                        <span>Confidence: {study.previewMockup.confidence}</span>
                        <span className="text-gray-300">{study.previewMockup.stepCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}


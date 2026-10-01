import React, { useState } from 'react';
import { RoutePath } from '../types';
import { PROJECTS } from '../data/siteContent';
import { ProjectShowcase } from '../components/ProjectShowcase';

interface WorkPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [hudActive, setHudActive] = useState(true);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          HERO SECTION (Matching Stitch UI Image 4)
         ========================================================================= */}
      <section className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-12 lg:pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold">
                OUR WORK
              </span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[4.5rem] font-bold uppercase text-white tracking-tight leading-none mb-6">
              WORK IN<br />
              <span className="text-[#ff6b00]">PROGRESS.</span>
            </h1>
            <p className="font-['DM_Sans'] text-base sm:text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
              We're building the portfolio one real project at a time. Honest transparency over staged mockups—anchored in deliberate code and measured craft.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
            <div className="bg-[#101c2e] border border-white/[0.08] p-6 rounded-xl flex flex-col gap-2 max-w-xs w-full shadow-xl">
              <div className="flex items-center justify-between text-[#94a3b8]">
                <span className="font-['JetBrains_Mono'] text-[0.625rem] tracking-widest uppercase">
                  ACTIVE PIPELINE
                </span>
                <span className="font-['JetBrains_Mono'] text-[0.625rem] text-[#fabd00] font-bold">
                  01 · CYBERNAUT
                </span>
              </div>
              <div className="h-1 w-full bg-[#1f2a3d] rounded-full overflow-hidden mt-1">
                <div className="h-full bg-gradient-to-r from-[#ff6b00] to-[#fabd00] w-3/5 rounded-full" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[0.6875rem] text-[#d7e3fc]/80 mt-1">
                PRODUCTION PHASE: STAGE 04 / DESIGN → DEV
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECT 01: CYBERNAUT SYSTEM BOARD
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-20">
        <div className="bg-[#101c2e] border border-white/[0.08] rounded-xl p-6 sm:p-10 lg:p-12 shadow-2xl mb-12">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 pb-8 border-b border-white/[0.08]">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#fabd00] bg-[#fabd00]/10 px-3 py-1 rounded-full border border-[#fabd00]/30 font-semibold">
                  CLIENT PROJECT · IN PROGRESS · Q1 2026
                </span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-3">
                CYBERNAUT
              </h2>
              <p className="font-['DM_Sans'] text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                Next-generation autonomous system console and developer compute intelligence. Architected from atomic design tokens to reactive front-end runtime.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4 font-['JetBrains_Mono'] text-xs">
              <div className="bg-[#071325] p-3 rounded border border-white/[0.06]">
                <span className="text-[#94a3b8] uppercase tracking-wider block text-[0.625rem] mb-1">
                  SCOPE
                </span>
                <span className="text-white font-medium">Brand Experience &amp; UI Architecture</span>
              </div>
              <div className="bg-[#071325] p-3 rounded border border-white/[0.06]">
                <span className="text-[#94a3b8] uppercase tracking-wider block text-[0.625rem] mb-1">
                  PLATFORM
                </span>
                <span className="text-white font-medium">Responsive Web &amp; Telemetry HUD</span>
              </div>
              <div className="bg-[#071325] p-3 rounded border border-white/[0.06]">
                <span className="text-[#94a3b8] uppercase tracking-wider block text-[0.625rem] mb-1">
                  STATE
                </span>
                <span className="text-[#fabd00] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fabd00] animate-ping" />
                  Active Sprint 06
                </span>
              </div>
              <div className="bg-[#071325] p-3 rounded border border-white/[0.06]">
                <span className="text-[#94a3b8] uppercase tracking-wider block text-[0.625rem] mb-1">
                  DELIVERABLES
                </span>
                <span className="text-white font-medium">Design Tokens, Component Library, SPA</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <a
                href="https://www.cybernaut.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-bold bg-[#ff6b00] text-[#081426] px-5 py-3 rounded hover:bg-[#ff8a00] hover:text-black transition-all"
              >
                <span>OPEN CYBERNAUT PORTAL</span>
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
              <button
                onClick={() => onNavigate('/work/cybernaut')}
                className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#d7e3fc] hover:text-white border border-white/[0.14] hover:border-white px-4 py-3 rounded transition-all"
              >
                <span>VIEW CASE STUDY BLUEPRINT</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
            <div className="font-['JetBrains_Mono'] text-xs text-[#94a3b8]">
              SYSTEM REF: CN-2026-V1
            </div>
          </div>

          {/* Interactive Visual Exploration Board (Directly matching Stitch UI Image 4) */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-['JetBrains_Mono'] text-xs text-[#ff6b00] font-bold">[ LIVE SYSTEM ARTIFACTS ]</span>
                <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white">
                  INTERACTIVE VISUAL EXPLORATION BOARD
                </h3>
              </div>
            </div>

            {/* Board Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Card 01: Overview & Challenge */}
              <div className="lg:col-span-7 bg-[#071325] border border-white/[0.08] p-6 sm:p-8 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['JetBrains_Mono'] text-[0.625rem] text-[#fabd00] uppercase tracking-wider">
                      01 / OVERVIEW &amp; CHALLENGE
                    </span>
                    <span className="material-symbols-outlined text-sm text-[#94a3b8]">radar</span>
                  </div>
                  <h4 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold uppercase text-white mb-4 leading-snug">
                    DESIGNING HIGH-THROUGHPUT TELEMETRY WITH RAZOR CLARITY.
                  </h4>
                  <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed mb-6">
                    The primary hurdle was consolidating massive asynchronous telemetry data streams into an ultra-low cognitive load layout. Conventional SaaS clutter was stripped in favor of sharp spatial hierarchy, modular grid cells, and dedicated high-contrast alert thresholds.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-['JetBrains_Mono'] text-xs">
                  <span className="text-[#94a3b8]">PROJECT STATUS</span>
                  <span className="text-[#ff6b00] font-bold">ACTIVE SPRINT</span>
                </div>
              </div>

              {/* Card 01b: 3D Architectural Concept Visual */}
              <div className="lg:col-span-5 bg-[#071325] border border-white/[0.08] p-6 rounded-xl flex flex-col justify-between">
                <div className="relative rounded-lg overflow-hidden border border-white/[0.06] mb-4">
                  <img
                    src="/projects/cybernaut.jpg"
                    alt="Architectural Concept 3D"
                    className="w-full h-44 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-[#071325]/90 backdrop-blur-md px-2.5 py-1 rounded text-[0.625rem] font-['JetBrains_Mono'] text-[#d7e3fc]">
                    ARCHITECTURAL CONCEPT 3D
                  </div>
                </div>
                <div>
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] text-[#94a3b8] uppercase tracking-wider block mb-1">
                    VISUAL IDENTITY BASE
                  </span>
                  <p className="font-['DM_Sans'] text-xs text-[#94a3b8]">
                    Isometric modularity representing synchronized client-server primitives.
                  </p>
                </div>
              </div>

              {/* Card 02: Design & Typography */}
              <div className="lg:col-span-6 bg-[#071325] border border-white/[0.08] p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] text-[#fabd00] uppercase tracking-wider">
                    02 / DESIGN &amp; TYPOGRAPHY
                  </span>
                  <span className="material-symbols-outlined text-sm text-[#94a3b8]">format_shapes</span>
                </div>
                <p className="font-['DM_Sans'] text-xs text-[#94a3b8] mb-4">
                  Pairing structured editorial geometric sans-serifs with high-density monospaced data tags. Crafted for readability in mission-critical environments.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                    <span className="font-['Space_Grotesk'] text-lg font-bold text-white uppercase">
                      DISPLAY PRIMARY
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#94a3b8]">SPACE GROTESK 700</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                    <span className="font-['DM_Sans'] text-sm text-[#d7e3fc]">
                      Editorial Body Sans
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#94a3b8]">DM SANS 400</span>
                  </div>
                  <div className="flex items-center justify-between pb-2">
                    <span className="font-['JetBrains_Mono'] text-xs text-[#ff6b00]">
                      SYS_VAR_HEX_8080 // OK
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-[#94a3b8]">JETBRAINS MONO 500</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-['JetBrains_Mono'] text-[0.625rem] text-[#94a3b8]">
                  <span>MODULAR SCALE: 1.25 MAJOR THIRD</span>
                  <span className="text-emerald-400 font-semibold">WCAG 2.1 AAA PASS</span>
                </div>
              </div>

              {/* Card 03: Interface Components & Interactive HUD */}
              <div className="lg:col-span-6 bg-[#071325] border border-white/[0.08] p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['JetBrains_Mono'] text-[0.625rem] text-[#fabd00] uppercase tracking-wider">
                      03 / INTERFACE COMPONENTS
                    </span>
                    <span className="material-symbols-outlined text-sm text-[#94a3b8]">grid_view</span>
                  </div>

                  {/* Interactive HUD Node */}
                  <div className="bg-[#101c2e] border border-white/[0.06] p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
                        <span className="font-['JetBrains_Mono'] text-xs text-white font-bold">
                          NODE_CLUSTER_09
                        </span>
                      </div>
                      <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[0.625rem]">
                        <button
                          onClick={() => setHudActive(!hudActive)}
                          className="text-[#94a3b8] hover:text-white uppercase"
                        >
                          REFRESH HUD
                        </button>
                        <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
                          LIVE
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[0.625rem] text-[#94a3b8] mb-1">
                      <span>STREAM THROUGHPUT</span>
                      <span className="text-white font-bold">OPTIMIZED</span>
                    </div>

                    {/* Live SVG Wave Curve */}
                    <div className="h-14 w-full bg-[#071325] rounded p-1 mb-3 relative overflow-hidden flex items-center">
                      <svg className="w-full h-full" viewBox="0 0 300 40" fill="none">
                        <path
                          d={
                            hudActive
                              ? 'M0 28 Q 40 8, 80 24 T 160 12 T 240 28 T 300 15'
                              : 'M0 20 Q 50 35, 100 15 T 200 25 T 300 10'
                          }
                          stroke="#ff6b00"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </div>

                    <div className="grid grid-cols-3 gap-2 font-['JetBrains_Mono'] text-[0.625rem] text-center">
                      <div className="bg-[#071325] py-1 rounded text-[#94a3b8]">READY</div>
                      <div className="bg-[#071325] py-1 rounded text-[#d7e3fc]">SYNCING</div>
                      <button className="bg-[#ff6b00] text-[#081426] py-1 rounded font-bold hover:bg-[#ff8a00]">
                        EXECUTE ↵
                      </button>
                    </div>
                  </div>
                </div>

                <p className="font-['DM_Sans'] text-xs text-[#94a3b8]">
                  Real-time telemetry HUD element constructed with CSS Flexbox &amp; SVG.
                </p>
              </div>

              {/* Card 04: Color Tokens & Contrast */}
              <div className="lg:col-span-6 bg-[#071325] border border-white/[0.08] p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] text-[#fabd00] uppercase tracking-wider">
                    04 / COLOR TOKENS &amp; CONTRAST
                  </span>
                  <span className="material-symbols-outlined text-sm text-[#94a3b8]">palette</span>
                </div>
                <p className="font-['DM_Sans'] text-xs text-[#94a3b8] mb-4">
                  Engineered around deep cosmic navy backplanes with hot solar orange primaries and high-contrast alert indicators.
                </p>
                <div className="grid grid-cols-2 gap-2 mb-4 font-['JetBrains_Mono'] text-xs">
                  <div className="bg-[#071325] border border-white/[0.1] p-3 rounded">
                    <span className="text-[#94a3b8] text-[0.625rem] block">CANVAS GROUND</span>
                    <span className="text-white font-bold">#071325 (Navy Deep)</span>
                  </div>
                  <div className="bg-[#ff6b00] text-[#081426] p-3 rounded font-bold">
                    <span className="text-[#081426]/80 text-[0.625rem] block">SOLAR FLARE</span>
                    <span>#FF6B00 (Primary)</span>
                  </div>
                  <div className="bg-[#fabd00] text-[#081426] p-3 rounded font-bold">
                    <span className="text-[#081426]/80 text-[0.625rem] block">GOLDEN AMBER</span>
                    <span>#FABD00 (Secondary)</span>
                  </div>
                  <div className="bg-[#2e394d] text-white p-3 rounded">
                    <span className="text-[#94a3b8] text-[0.625rem] block">SURFACE HIGH</span>
                    <span className="font-bold">#2E394D (Structural)</span>
                  </div>
                </div>
                <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[0.625rem] text-[#94a3b8]">
                  <span>Luminance Ratio: 13.8:1</span>
                  <span>100% TOKENS ADAPTIVE</span>
                </div>
              </div>

              {/* Card 05: Engineering & Architecture */}
              <div className="lg:col-span-6 bg-[#071325] border border-white/[0.08] p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['JetBrains_Mono'] text-[0.625rem] text-[#fabd00] uppercase tracking-wider">
                      05 / ENGINEERING &amp; ARCHITECTURE
                    </span>
                    <span className="material-symbols-outlined text-sm text-[#94a3b8]">terminal</span>
                  </div>
                  <p className="font-['DM_Sans'] text-xs text-[#94a3b8] mb-4">
                    Zero bloat. Fast DOM hydration, strictly typed props, performance budgets enforced via Git hooks, and zero render blocking assets.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 font-['JetBrains_Mono'] text-[0.625rem] text-center">
                    <div className="bg-[#101c2e] p-2.5 rounded border border-white/[0.06]">
                      <span className="text-[#ff6b00] block font-bold mb-0.5">HTML</span>
                      <span className="text-white">SEMANTIC 5</span>
                      <span className="text-[#94a3b8] block mt-0.5">Valid DOM</span>
                    </div>
                    <div className="bg-[#101c2e] p-2.5 rounded border border-white/[0.06]">
                      <span className="text-[#fabd00] block font-bold mb-0.5">CSS</span>
                      <span className="text-white">TAILWIND JIT</span>
                      <span className="text-[#94a3b8] block mt-0.5">Zero CSS Cruft</span>
                    </div>
                    <div className="bg-[#101c2e] p-2.5 rounded border border-white/[0.06]">
                      <span className="material-symbols-outlined text-sm text-emerald-400 block mb-0.5">speed</span>
                      <span className="text-white">PERFORMANCE</span>
                      <span className="text-[#94a3b8] block mt-0.5">Optimized</span>
                    </div>
                    <div className="bg-[#101c2e] p-2.5 rounded border border-white/[0.06]">
                      <span className="material-symbols-outlined text-sm text-[#fabd00] block mb-0.5">search</span>
                      <span className="text-white">JSON-LD</span>
                      <span className="text-[#94a3b8] block mt-0.5">Deep Semantic</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[0.6875rem] text-[#94a3b8] pt-2 border-t border-white/[0.06]">
                  <span>BUILD REPO: PRIVATE CLIENT ACCESS</span>
                  <span className="text-emerald-400">CI/CD PASSING</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Future Case Study Blueprint Section (from Stitch UI Image 4) */}
        <div className="mb-16">
          <div className="mb-8">
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold block mb-2">
              [ TRANSPARENCY PROTOCOL ]
            </span>
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase text-white tracking-tight mb-3">
              FUTURE CASE STUDY BLUEPRINT
            </h3>
            <p className="font-['DM_Sans'] text-base text-[#94a3b8] max-w-2xl">
              We don't publish manufactured testimonials or superficial dribbble shots. Every full case study CreateOn ships strictly follows this 7-phase empirical blueprint.
            </p>
          </div>

          {/* 7-phase timeline cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { num: '01', phase: 'OVERVIEW', title: 'CONTEXT', desc: 'Market positioning, stakeholder alignment, and product vision framing.' },
              { num: '02', phase: 'CHALLENGE', title: 'FRICTION', desc: 'Bottlenecks, legacy bloat, conversion friction, and technical barriers.' },
              { num: '03', phase: 'DISCOVERY', title: 'TELEMETRY', desc: 'User audit, behavioral heatmaps, information architecture stress tests.' },
              { num: '04', phase: 'DESIGN', title: 'ART DIRECTION', desc: 'Design tokens, interactive prototypes, typography systems, tactile polish.', active: true },
              { num: '05', phase: 'DEV', title: 'ENGINEERING', desc: 'Production code, reactive state, API integrations, and edge deployment.' },
              { num: '06', phase: 'LAUNCH', title: 'DEPLOYMENT', desc: 'Rigorous QA, cross-browser validation, SEO audit, production release.' },
              { num: '07', phase: 'RESULT', title: 'OUTCOMES', desc: 'Actual business impact and verified metrics published post-launch.' },
            ].map((phaseItem) => (
              <div
                key={phaseItem.num}
                className={`p-4 rounded-xl border flex flex-col justify-between h-56 transition-all ${
                  phaseItem.active
                    ? 'bg-[#1f2a3d] border-[#ff6b00]'
                    : 'bg-[#101c2e] border-white/[0.06]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2 font-['JetBrains_Mono'] text-[0.625rem]">
                    <span className={phaseItem.active ? 'text-[#ff6b00] font-bold' : 'text-[#fabd00]'}>
                      {phaseItem.num} — {phaseItem.phase}
                    </span>
                  </div>
                  <h4 className="font-['Space_Grotesk'] text-base font-bold uppercase text-white mb-2">
                    {phaseItem.title}
                  </h4>
                  <p className="font-['DM_Sans'] text-xs text-[#94a3b8] leading-relaxed">
                    {phaseItem.desc}
                  </p>
                </div>
                <div className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-wider">
                  {phaseItem.active ? (
                    <span className="text-[#ff6b00] font-bold">[ CURRENT STAGE ]</span>
                  ) : (
                    <span className="text-[#94a3b8]">PHASE {phaseItem.num}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 rounded-lg bg-[#071325] border border-white/[0.08] flex items-center gap-3">
            <span className="material-symbols-outlined text-[#fabd00] text-xl">verified</span>
            <p className="font-['DM_Sans'] text-xs text-[#94a3b8]">
              We practice ethical disclosure: No fabricated case studies, no simulated logos. If it's on this page, it's live on our active production terminals.
            </p>
          </div>
        </div>

        {/* Showcase of Project 02 (Pakoda Boyz) & Project 03 (Cafe Me) */}
        <div className="space-y-12">
          <div className="border-t border-white/[0.08] pt-12">
            <div className="mb-6">
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold block mb-1">
                PROJECT 02
              </span>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                PAKODA BOYZ BIRIYANI
              </h3>
            </div>
            <ProjectShowcase project={PROJECTS[1]} onNavigate={onNavigate} index={1} />
          </div>

          <div className="border-t border-white/[0.08] pt-12">
            <div className="mb-6">
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
                PROJECT 03 · LIVE ON WEB
              </span>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
                CAFE ME — CHENNAI SANCTUARY
              </h3>
            </div>
            <ProjectShowcase project={PROJECTS[2]} onNavigate={onNavigate} index={2} />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pb-20">
        <div className="bg-[#101c2e] border border-white/[0.08] rounded-xl p-8 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-2xl">
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold block mb-3">
              HAVE A PROJECT YOU WANT TO BUILD?
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight leading-tight mb-4">
              LET’S CREATE YOUR NEXT DIGITAL MILESTONE.
            </h2>
            <p className="font-['DM_Sans'] text-base text-[#94a3b8]">
              Whether launching a greenfield digital product or re-architecting critical web infrastructure, our engineering studio is prepared to build alongside you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider bg-[#ff6b00] text-[#081426] font-bold px-8 py-4 rounded hover:bg-[#ff8a00] hover:text-black transition-all text-center whitespace-nowrap"
            >
              START A PROJECT WITH US →
            </button>
            <button
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider text-white border border-white/[0.14] hover:border-white px-6 py-4 rounded transition-all text-center whitespace-nowrap"
            >
              EXPLORE SERVICES
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { RoutePath } from '../types';
import { SERVICES } from '../data/siteContent';
import { ServiceRow } from '../components/ServiceRow';

interface ServicesPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          HERO ARCHITECTURAL HEADER (Matching Stitch UI Image 8)
         ========================================================================= */}
      <section className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-12 lg:pt-20 pb-16">
        {/* Ambient atmospheric lighting */}
        <div className="pointer-events-none absolute -top-40 right-1/4 w-[580px] h-[580px] bg-[#ff6b00]/10 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute top-[900px] -left-32 w-[460px] h-[460px] bg-[#fabd00]/5 rounded-full blur-[160px]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.2em] text-[#ff6b00] font-semibold">
                OUR CAPABILITIES
              </span>
              <span className="text-white/20 font-['JetBrains_Mono'] text-xs">/</span>
              <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#94a3b8] tracking-widest">
                DISCIPLINE MATRIX
              </span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[4.75rem] font-bold uppercase text-white tracking-tight leading-none mb-6">
              WHAT WE <span className="text-[#ff6b00]">DO.</span>
            </h1>

            <p className="font-['DM_Sans'] text-base sm:text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
              Digital experiences designed around your business, your users and your goals. We unite high-rigor engineering with tactile design systems.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
            <div className="bg-[#101c2e] border border-white/[0.08] p-6 rounded-xl flex flex-col gap-2 max-w-xs w-full shadow-xl">
              <div className="flex items-center justify-between text-[#94a3b8]">
                <span className="font-['JetBrains_Mono'] text-[0.6875rem] tracking-widest uppercase">
                  DELIVERY CAPACITY
                </span>
                <span className="font-['JetBrains_Mono'] text-[0.6875rem] text-[#fabd00] font-bold">
                  08 CORE TRACKS
                </span>
              </div>
              <div className="h-1 w-full bg-[#1f2a3d] rounded-full overflow-hidden mt-1">
                <div className="h-full bg-gradient-to-r from-[#ff6b00] to-[#fabd00] w-4/5 rounded-full" />
              </div>
              <span className="font-['JetBrains_Mono'] text-[0.6875rem] text-[#d7e3fc]/80 mt-1">
                Production Grade • Modular • Chennai Lab
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VISUAL ANCHOR: ARCHITECTURAL RENDER FEATURE
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-20 lg:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-[#030e20] border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl">
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[420px] overflow-hidden">
            <img
              src="/brand/architectural-concept.png"
              alt="Structural Rigor & Code System"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030e20] via-[#030e20]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-[#101c2e]/90 backdrop-blur-md px-4 py-2 rounded-lg border border-white/[0.1]">
              <span className="material-symbols-outlined text-[#ff6b00] text-lg">token</span>
              <span className="font-['JetBrains_Mono'] text-xs text-[#d7e3fc] tracking-wider uppercase font-semibold">
                STRUCTURAL RIGOR &amp; CODE SYSTEM
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between bg-[#101c2e]">
            <div>
              <div className="font-['JetBrains_Mono'] text-xs text-[#fabd00] uppercase tracking-widest mb-3 font-semibold">
                SYSTEM PHILOSOPHY
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl lg:text-2xl font-bold text-white uppercase mb-4 leading-snug">
                ARCHITECTURE-DRIVEN CRAFT FOR AMBITIOUS INTERFACES.
              </h3>
              <p className="font-['DM_Sans'] text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                We do not treat engineering as an afterthought to design, nor aesthetic form as decoration over code. Every interface is calculated, tokenized, and constructed for absolute technical stability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/[0.06]">
              <div className="bg-[#071325] border border-white/[0.06] p-4 rounded-lg">
                <div className="font-['Space_Grotesk'] text-2xl font-bold text-[#ff6b00]">
                  100<span className="text-sm font-['JetBrains_Mono']">%</span>
                </div>
                <div className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase text-[#94a3b8] mt-1">
                  Semantic Rigor
                </div>
              </div>
              <div className="bg-[#071325] border border-white/[0.06] p-4 rounded-lg">
                <div className="font-['Space_Grotesk'] text-2xl font-bold text-[#fabd00]">
                  &lt;0.8<span className="text-sm font-['JetBrains_Mono']">s</span>
                </div>
                <div className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase text-[#94a3b8] mt-1">
                  Core Web Vitals
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE SERVICES DIRECTORY (01 to 08)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-24 lg:mb-32">
        {/* Section Marker Bar */}
        <div className="flex items-center justify-between py-4 bg-[#101c2e]/60 border border-white/[0.06] px-6 rounded-lg mb-4">
          <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#94a3b8]">
            SERVICES DIRECTORY // 2026 SPECS
          </span>
          <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold">
            CLICK ANY SERVICE TO EXPAND DETAILS ↓
          </span>
        </div>

        <div className="flex flex-col gap-2">
          {SERVICES.map((service) => (
            <ServiceRow key={service.id} service={service} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          ENGINEERING LIFECYCLE / PIPELINE MONITOR (Matching Stitch UI Image 8)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-24 lg:mb-32">
        <div className="bg-[#101c2e] border border-white/[0.08] rounded-xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col">
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold mb-2">
                PRECISION WORKFLOW
              </span>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white mb-4">
                HOW WE DELIVER CODE WITHOUT FRICTION.
              </h3>
              <p className="font-['DM_Sans'] text-sm sm:text-base text-[#94a3b8] leading-relaxed mb-6">
                Our engineering pipeline is stripped of bureaucratic ceremony. We operate in rapid sprint cycles with automated linters, unified design tokens, and live continuous staging.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-[#071325] border border-white/[0.06] p-3 rounded-lg">
                  <span className="material-symbols-outlined text-[#ff6b00] text-xl">terminal</span>
                  <span className="font-['JetBrains_Mono'] text-xs text-white">Modular Repository Hierarchy</span>
                </div>
                <div className="flex items-center gap-3 bg-[#071325] border border-white/[0.06] p-3 rounded-lg">
                  <span className="material-symbols-outlined text-[#fabd00] text-xl">design_services</span>
                  <span className="font-['JetBrains_Mono'] text-xs text-white">Design Tokens Linked to Git Assets</span>
                </div>
                <div className="flex items-center gap-3 bg-[#071325] border border-white/[0.06] p-3 rounded-lg">
                  <span className="material-symbols-outlined text-[#fabd00] text-xl">speed</span>
                  <span className="font-['JetBrains_Mono'] text-xs text-white">Automated Performance Regression Gates</span>
                </div>
              </div>
            </div>

            {/* Pipeline Visual Flow Chart */}
            <div className="lg:col-span-7 bg-[#030e20] border border-white/[0.08] p-6 lg:p-8 rounded-xl flex flex-col justify-center">
              <div className="flex items-center justify-between mb-4">
                <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#94a3b8] tracking-wider">
                  PIPELINE MONITOR [LIVE DISPATCH]
                </span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#ff6b00] font-semibold">100% HEALTHY</span>
              </div>

              <svg className="w-full h-auto text-white" viewBox="0 0 600 240" fill="none">
                <pattern id="services-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor" fillOpacity="0.08" />
                </pattern>
                <rect width="600" height="240" fill="url(#services-grid)" />

                {/* Connecting Lines */}
                <path d="M 80 120 L 220 120" stroke="#FF6B00" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M 260 120 L 400 120" stroke="#FABD00" strokeWidth="2" />
                <path d="M 440 120 L 520 120" stroke="#FFB693" strokeWidth="2" strokeDasharray="2 2" />

                {/* Step 01 */}
                <circle cx="60" cy="120" r="28" fill="#142032" stroke="#FF6B00" strokeWidth="2" />
                <text x="60" y="117" textAnchor="middle" fill="#FFB693" fontFamily="Space Grotesk" fontSize="12" fontWeight="bold">
                  AUDIT
                </text>
                <text x="60" y="132" textAnchor="middle" fill="#E2BFB0" fontFamily="JetBrains Mono" fontSize="9">
                  DISCOVER
                </text>

                {/* Step 02 */}
                <rect x="200" y="92" width="60" height="56" rx="6" fill="#142032" stroke="#FABD00" strokeWidth="2" />
                <text x="230" y="118" textAnchor="middle" fill="#FFDF9E" fontFamily="Space Grotesk" fontSize="11" fontWeight="bold">
                  TOKENS
                </text>
                <text x="230" y="133" textAnchor="middle" fill="#E2BFB0" fontFamily="JetBrains Mono" fontSize="9">
                  SCHEMA
                </text>

                {/* Step 03 */}
                <rect x="380" y="86" width="68" height="68" rx="8" fill="#1F2A3D" stroke="#FF6B00" strokeWidth="2" />
                <text x="414" y="116" textAnchor="middle" fill="#FFFFFF" fontFamily="Space Grotesk" fontSize="11" fontWeight="bold">
                  BUILD
                </text>
                <text x="414" y="132" textAnchor="middle" fill="#FFB693" fontFamily="JetBrains Mono" fontSize="9">
                  FRONTEND
                </text>

                {/* Step 04 */}
                <polygon points="530,96 565,120 530,144" fill="#FABD00" />
                <text x="540" y="165" textAnchor="middle" fill="#FFDF9E" fontFamily="JetBrains Mono" fontSize="9">
                  DEPLOY
                </text>

                {/* Metric Badges */}
                <rect x="50" y="184" width="130" height="24" rx="4" fill="#071325" />
                <text x="115" y="200" textAnchor="middle" fill="#D7E3FC" fontFamily="JetBrains Mono" fontSize="8">
                  FIGMA ➔ CODE SYSTEM
                </text>

                <rect x="230" y="184" width="140" height="24" rx="4" fill="#071325" />
                <text x="300" y="200" textAnchor="middle" fill="#D7E3FC" fontFamily="JetBrains Mono" fontSize="8">
                  RESPONSIVE STACK TEST
                </text>

                <rect x="420" y="184" width="130" height="24" rx="4" fill="#071325" />
                <text x="485" y="200" textAnchor="middle" fill="#FABD00" fontFamily="JetBrains Mono" fontSize="8">
                  EDGE CDN LAUNCH
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR APPROACH (3 Core Tenets)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-24 lg:mb-32">
        <div className="bg-[#101c2e] border border-white/[0.08] rounded-xl p-8 lg:p-16 shadow-2xl">
          <div className="max-w-3xl mb-12">
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold block mb-3">
              OUR APPROACH
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight leading-tight mb-4">
              THE RIGHT SOLUTION STARTS WITH THE RIGHT QUESTIONS.
            </h2>
            <p className="font-['DM_Sans'] text-base sm:text-lg text-[#94a3b8] leading-relaxed">
              Every project has different needs. We focus on understanding what you're building before deciding how to build it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tenet 01 */}
            <div className="bg-[#071325] border border-white/[0.06] p-8 rounded-xl flex flex-col justify-between hover:border-[#ff6b00]/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#1f2a3d] flex items-center justify-center text-[#ff6b00] mb-6">
                  <span className="material-symbols-outlined text-2xl">psychology_alt</span>
                </div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#ff6b00] uppercase tracking-widest block mb-2 font-bold">
                  TENET 01
                </span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">
                  Discovery Before Code
                </h3>
                <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
                  We dissect user behaviors, platform constraints, and commercial goals prior to writing a single line of production markup.
                </p>
              </div>
              <div className="pt-8 border-t border-white/[0.06] mt-6">
                <span className="font-['JetBrains_Mono'] text-[0.6875rem] text-[#94a3b8] uppercase tracking-wider block">
                  PHASE 01 • STRATEGIC SCOPING
                </span>
              </div>
            </div>

            {/* Tenet 02 */}
            <div className="bg-[#071325] border border-white/[0.06] p-8 rounded-xl flex flex-col justify-between hover:border-[#fabd00]/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#1f2a3d] flex items-center justify-center text-[#fabd00] mb-6">
                  <span className="material-symbols-outlined text-2xl">architecture</span>
                </div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#fabd00] uppercase tracking-widest block mb-2 font-bold">
                  TENET 02
                </span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">
                  Purposeful Design Decisions
                </h3>
                <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
                  No decorative fluff or arbitrary trends. Every spatial interval, typographic grade, and color token has an architectural function.
                </p>
              </div>
              <div className="pt-8 border-t border-white/[0.06] mt-6">
                <span className="font-['JetBrains_Mono'] text-[0.6875rem] text-[#94a3b8] uppercase tracking-wider block">
                  PHASE 02 • SYSTEM MODELING
                </span>
              </div>
            </div>

            {/* Tenet 03 */}
            <div className="bg-[#071325] border border-white/[0.06] p-8 rounded-xl flex flex-col justify-between hover:border-[#d7e3fc]/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#1f2a3d] flex items-center justify-center text-[#d7e3fc] mb-6">
                  <span className="material-symbols-outlined text-2xl">all_inclusive</span>
                </div>
                <span className="font-['JetBrains_Mono'] text-xs text-[#d7e3fc] uppercase tracking-widest block mb-2 font-bold">
                  TENET 03
                </span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">
                  Built for Longevity
                </h3>
                <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
                  We engineer scalable patterns that your internal team can manage, extend, and deploy with confidence over the next decade.
                </p>
              </div>
              <div className="pt-8 border-t border-white/[0.06] mt-6">
                <span className="font-['JetBrains_Mono'] text-[0.6875rem] text-[#94a3b8] uppercase tracking-wider block">
                  PHASE 03 • EVERGREEN LIFECYCLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA (Matching Stitch UI Image 8)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pb-24 lg:pb-32">
        <div className="bg-[#101c2e] border border-white/[0.08] rounded-xl p-8 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 bg-[#ff6b00]/15 rounded-full blur-[100px]" />
          <div className="max-w-2xl relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#fabd00]" />
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold">
                HAVE A PROJECT IN MIND?
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight leading-tight">
              LET’S TALK ABOUT YOUR REQUIREMENTS.
            </h2>
            <p className="font-['DM_Sans'] text-base text-[#94a3b8] mt-4 max-w-xl">
              From greenfield digital applications to modular redesigns, tell us what you're crafting and we'll outline the architectural roadmap.
            </p>
          </div>
          <div className="relative z-10">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider bg-[#ff6b00] text-[#081426] font-bold px-8 py-4 rounded hover:bg-[#ff8a00] hover:text-black transition-all duration-200 shadow-lg shadow-[#ff6b00]/20 active:scale-[0.98] text-center whitespace-nowrap"
            >
              LET’S TALK →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

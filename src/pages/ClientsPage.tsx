import React from 'react';
import { RoutePath } from '../types';
import { PROCESS_STEPS } from '../data/siteContent';

interface ClientsPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          HERO & STUDIO PRINCIPLE (Matching Stitch UI Image 6)
         ========================================================================= */}
      <section className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-12 lg:pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Title */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold">
                COLLABORATION
              </span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[4.75rem] font-bold uppercase text-white tracking-tight leading-none mb-6">
              PEOPLE WE<br />
              <span className="text-[#ff6b00]">BUILD WITH.</span>
            </h1>
            <p className="font-['DM_Sans'] text-base sm:text-lg text-[#94a3b8] max-w-xl leading-relaxed">
              We work closely with ambitious businesses, teams and creators to turn ideas into useful digital experiences.
            </p>
          </div>

          {/* Right Studio Principle Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#101c2e] border border-white/[0.08] p-6 lg:p-8 rounded-xl shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-[#fabd00] uppercase tracking-wider mb-3">
                  <span>STUDIO PRINCIPLE</span>
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">
                  RADICAL TRANSPARENCY
                </h3>
                <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed mb-6">
                  No fabricated Fortune 500 logo ticker walls. No stock portraits disguised as customer testimonials. We showcase real partnerships, active sprint velocity, and tangible architectural code.
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] font-['JetBrains_Mono'] text-[0.6875rem] text-emerald-400 font-semibold tracking-wider uppercase">
                VERIFIED DEPLOYMENTS 100% UNFILTERED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          REAL CLIENT PARTNERSHIP CARDS (Matching Stitch UI Image 6)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-24 space-y-12">
        {/* Client 01: Cybernaut EdTech */}
        <article className="bg-[#101c2e] border border-white/[0.08] rounded-xl p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#94a3b8] tracking-widest font-bold">
                CLIENT 01 · EDTECH
              </span>
            </div>
            <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#fabd00] bg-[#fabd00]/10 px-3 py-1 rounded-full border border-[#fabd00]/30 font-semibold">
              IN PROGRESS
            </span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-2">
            CYBERNAUT EDTECH
          </h2>
          <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#ff6b00] tracking-wider block mb-8">
            CLIENT PROJECT · IN PROGRESS (DESIGN → DEV)
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual Container */}
            <div className="lg:col-span-5 bg-[#071325] border border-white/[0.06] rounded-xl p-4">
              <div className="rounded overflow-hidden mb-3">
                <img
                  src="/projects/cybernaut.jpg"
                  alt="Cybernaut EdTech"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[0.625rem] text-[#94a3b8] px-1 py-1">
                <span>CLIENT PROJECT</span>
                <span className="text-[#fabd00]">IN PROGRESS</span>
              </div>
              <div className="pt-2 mt-2 border-t border-white/[0.06] font-['JetBrains_Mono'] text-[0.625rem] text-[#d7e3fc]/70 flex items-center justify-between">
                <span>SPRINT CADENCE: PHASE 2 TELEMETRY</span>
                <span>NEXT.JS · WEBGL</span>
              </div>
            </div>

            {/* Scope & Component Rigor Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#071325] border border-white/[0.06] p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-wider text-[#fabd00] block mb-2 font-bold">
                    SCOPE &amp; ARCHITECTURE
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">
                    BRAND EXPERIENCE &amp; UI ARCHITECTURE
                  </h3>
                  <p className="font-['DM_Sans'] text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    Next-generation learning console and interactive developer tooling. Low-latency visual rendering and responsive learning dashboards.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] mt-4 font-['JetBrains_Mono'] text-[0.6875rem] text-[#ff6b00] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  <span>INTERACTIVE TELEMETRY HUD</span>
                </div>
              </div>

              <div className="bg-[#071325] border border-white/[0.06] p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-wider text-[#fabd00] block mb-2 font-bold">
                    STATUS UPDATE
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">
                    COMPONENT RIGOR
                  </h3>
                  <p className="font-['DM_Sans'] text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    High-fidelity design tokens mapped directly into production components. Rigorous telemetry stress tests under heavy payloads.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] mt-4 font-['JetBrains_Mono'] text-[0.6875rem] text-[#fabd00] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">sync</span>
                  <span>DESIGN → DEVELOPMENT SYNC</span>
                </div>
              </div>

              <div className="sm:col-span-2 pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.cybernaut.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-bold bg-[#ff6b00] text-[#081426] px-5 py-3 rounded hover:bg-[#ff8a00] hover:text-black transition-all"
                >
                  <span>EXPLORE CYBERNAUT PORTAL</span>
                  <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
                <button
                  onClick={() => onNavigate('/work/cybernaut')}
                  className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#d7e3fc] hover:text-white border border-white/[0.14] hover:border-white px-4 py-3 rounded transition-all"
                >
                  <span>VIEW ARCHITECTURAL SPEC</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Client 02: Pakoda Boyz Biriyani */}
        <article className="bg-[#101c2e] border border-white/[0.08] rounded-xl p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#94a3b8] tracking-widest font-bold">
                CLIENT 02 · CULINARY
              </span>
            </div>
            <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#fabd00] bg-[#fabd00]/10 px-3 py-1 rounded-full border border-[#fabd00]/30 font-semibold">
              IN PROGRESS
            </span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-2">
            PAKODA BOYZ BIRIYANI
          </h2>
          <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#fabd00] tracking-wider block mb-8">
            CHENNAI, TAMIL NADU
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual Container */}
            <div className="lg:col-span-5 bg-[#071325] border border-white/[0.06] rounded-xl p-4">
              <div className="rounded overflow-hidden mb-3">
                <img
                  src="/projects/pakoda-boyz.jpg"
                  alt="Pakoda Boyz Biriyani"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[0.625rem] text-[#94a3b8] px-1 py-1">
                <span>BRAND &amp; MENU ARCHITECTURE</span>
                <span className="text-[#fabd00]">IN SPRINT</span>
              </div>
              <div className="pt-3 mt-2 border-t border-white/[0.06] font-['DM_Sans'] text-xs text-[#94a3b8] space-y-1">
                <div className="flex items-start gap-1.5">
                  <span className="material-symbols-outlined text-xs text-[#ff6b00] mt-0.5">location_on</span>
                  <span>183 Periyar Pathai, Chennai, Tamil Nadu – 600094</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-[#fabd00]">call</span>
                  <span>090030 96662</span>
                </div>
              </div>
            </div>

            {/* Content Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#071325] border border-white/[0.06] p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-wider text-[#fabd00] block mb-2 font-bold">
                    ENGAGEMENT SCOPE
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">
                    BRAND IDENTITY &amp; DIGITAL EXPERIENCE
                  </h3>
                  <p className="font-['DM_Sans'] text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    Collaborative menu categorization, digital menu architecture, and authentic Chennai flavor photography art direction designed for fast-paced modern dining.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] mt-4 font-['JetBrains_Mono'] text-[0.6875rem] text-[#ff6b00] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">restaurant</span>
                  <span>TACTILE EXPERIENCE &amp; MENUS</span>
                </div>
              </div>

              <div className="bg-[#071325] border border-white/[0.06] p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-wider text-[#fabd00] block mb-2 font-bold">
                    COLLABORATION DELIVERABLE
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">
                    MOBILE ORDERING FLOWS
                  </h3>
                  <p className="font-['DM_Sans'] text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    Streamlining local takeaway ordering and customer engagement through purposeful, friction-free mobile interfaces honoring Chennai's rich biryani tradition.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] mt-4 font-['JetBrains_Mono'] text-[0.6875rem] text-[#fabd00] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">phone_iphone</span>
                  <span>DIRECT CUSTOMER EXPERIENCE</span>
                </div>
              </div>

              <div className="sm:col-span-2 pt-2">
                <span className="font-['JetBrains_Mono'] text-xs text-[#94a3b8] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#fabd00]" />
                  CLIENT PROJECT · IN PROGRESS (Website currently undergoing active sprint development)
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Client 03: Cafe Me */}
        <article className="bg-[#101c2e] border border-white/[0.08] rounded-xl p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#94a3b8] tracking-widest font-bold">
                CLIENT 03 · HOSPITALITY
              </span>
            </div>
            <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 font-semibold">
              LIVE DEPLOYMENT
            </span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-2">
            CAFE ME
          </h2>
          <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#fabd00] tracking-wider block mb-8">
            K.K. NAGAR, CHENNAI
          </span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual Container */}
            <div className="lg:col-span-5 bg-[#071325] border border-white/[0.06] rounded-xl p-4">
              <div className="rounded overflow-hidden mb-3">
                <img
                  src="/projects/cafeme.jpg"
                  alt="Cafe Me Website Screenshot"
                  className="w-full h-56 object-cover"
                />
              </div>
              <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[0.625rem] text-[#94a3b8] px-1 py-1">
                <span>STATUS: LIVE IN PRODUCTION</span>
                <span className="text-emerald-400">VERCEL DEPLOYED</span>
              </div>
              <div className="pt-3 mt-2 border-t border-white/[0.06] font-['DM_Sans'] text-xs text-[#94a3b8] space-y-1">
                <div className="flex items-start gap-1.5">
                  <span className="material-symbols-outlined text-xs text-[#ff6b00] mt-0.5">location_on</span>
                  <span>Old No. 260, New No. 54, Alagirisamy Salai, Opp. PSBB School (Gate 1), Sector 8, K.K. Nagar, Chennai – 600078</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs text-[#fabd00]">call</span>
                  <span>9042888988</span>
                </div>
              </div>
            </div>

            {/* Content Columns */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#071325] border border-white/[0.06] p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-wider text-[#fabd00] block mb-2 font-bold">
                    DELIVERY HIGHLIGHTS
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">
                    WEBSITE DESIGN &amp; DEVELOPMENT
                  </h3>
                  <p className="font-['DM_Sans'] text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    A welcoming neighborhood café showcase highlighting pure vegetarian artisan specials, curated comfort platters, responsive layout architecture, and high-conversion tactile imagery.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] mt-4 font-['JetBrains_Mono'] text-[0.6875rem] text-[#ff6b00] flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">coffee</span>
                  <span>PURE VEGETARIAN SANCTUARY</span>
                </div>
              </div>

              <div className="bg-[#071325] border border-white/[0.06] p-6 rounded-xl flex flex-col justify-between">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-wider text-[#fabd00] block mb-2 font-bold">
                    FEATURE MATRIX
                  </span>
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">
                    INTERACTIVE MENU &amp; CONCIERGE
                  </h3>
                  <p className="font-['DM_Sans'] text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    Integrated WhatsApp table booking concierge, live café operating telemetry, interactive Google Maps directions, and pure vegetarian badge assurances.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] mt-4 font-['JetBrains_Mono'] text-[0.6875rem] text-emerald-400 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">chat</span>
                  <span>WHATSAPP CONCIERGE ENABLED</span>
                </div>
              </div>

              {/* Live Link action */}
              <div className="sm:col-span-2 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#071325] border border-white/[0.06] p-4 rounded-xl">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#94a3b8] block">
                    LIVE APPLICATION
                  </span>
                  <span className="font-['JetBrains_Mono'] text-xs text-white">
                    create-on-software-cafe-me.vercel.app
                  </span>
                </div>
                <a
                  href="https://create-on-software-cafe-me.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-bold bg-[#ff6b00] text-[#081426] px-6 py-3 rounded hover:bg-[#ff8a00] hover:text-black transition-all"
                >
                  <span>VIEW LIVE SITE</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* =========================================================================
          OUR COLLABORATIVE PROCESS (Section 02 from Stitch UI Image 6)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold block mb-2">
              [ 02 · SYSTEMIC EXECUTION ]
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight">
              OUR COLLABORATIVE PROCESS
            </h2>
          </div>
          <p className="font-['DM_Sans'] text-sm sm:text-base text-[#94a3b8] max-w-md">
            A lean architectural rhythm crafted to eliminate friction and ensure every line of code serves the company thesis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#101c2e] border border-white/[0.08] rounded-xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="font-['Space_Grotesk'] text-2xl font-bold text-[#ff6b00] block mb-4">
                  {step.number}
                </span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06] font-['JetBrains_Mono'] text-[0.6875rem] text-[#fabd00] uppercase">
                DELIVERABLE: {step.deliverable}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CLIENT EXPERIENCE PROMISE (Section 03 from Stitch UI Image 6)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-20">
        <div className="mb-8">
          <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold block mb-2">
            [ 03 · THE CREATEON PACT ]
          </span>
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase text-white tracking-tight">
            CLIENT EXPERIENCE PROMISE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#101c2e] border border-white/[0.08] p-8 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#071325] border border-white/[0.08] flex items-center justify-center text-[#ff6b00] mb-6">
                <span className="material-symbols-outlined text-xl">badge</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">
                DIRECT FOUNDER ACCESS
              </h3>
              <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
                You talk directly with senior architects and principals who write the software. No intermediaries, junior handlers, or lost context.
              </p>
            </div>
          </div>

          <div className="bg-[#101c2e] border border-white/[0.08] p-8 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#071325] border border-white/[0.08] flex items-center justify-center text-[#fabd00] mb-6">
                <span className="material-symbols-outlined text-xl">chat_bubble</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">
                NO UNNECESSARY JARGON
              </h3>
              <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
                Transparent, pragmatic rationale behind every engineering decision. We speak in outcomes, user metrics, and business viability.
              </p>
            </div>
          </div>

          <div className="bg-[#101c2e] border border-white/[0.08] p-8 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#071325] border border-white/[0.08] flex items-center justify-center text-[#d7e3fc] mb-6">
                <span className="material-symbols-outlined text-xl">event_upcoming</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">
                WEEKLY MILESTONES
              </h3>
              <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
                Predictable, measurable delivery increments every 7 days. You inspect live software weekly, not theoretical slide decks at the end.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Bandwidth reservation notice */}
        <div className="p-4 rounded-xl bg-[#071325] border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-['JetBrains_Mono'] text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#fabd00] animate-pulse" />
            <span className="text-[#94a3b8] uppercase">2026 CLIENT CAPACITY ALLOCATION</span>
            <span className="text-white font-bold">Only 2 concurrent studio slots available for Q2 engineering sprints</span>
          </div>
          <span className="text-[#fabd00] uppercase tracking-wider flex items-center gap-1 font-semibold">
            <span className="material-symbols-outlined text-sm">lock_open</span>
            RESERVATION WINDOW OPEN
          </span>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA (Matching Stitch UI Image 6)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pb-24">
        <div className="bg-[#101c2e] border border-white/[0.08] rounded-2xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl flex flex-col items-center">
          <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold block mb-3">
            START THE DIALOGUE
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-4 max-w-2xl">
            READY TO COLLABORATE WITH CREATEON?
          </h2>
          <p className="font-['DM_Sans'] text-base text-[#94a3b8] max-w-xl mb-8 leading-relaxed">
            We are currently accepting a limited number of new client projects for 2026. Let's discuss your product roadmap and engineering ambitions.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider bg-[#ff6b00] text-[#081426] font-bold px-8 py-4 rounded hover:bg-[#ff8a00] hover:text-black transition-all mb-6"
          >
            START A CONVERSATION →
          </button>
          <div className="font-['JetBrains_Mono'] text-xs text-[#94a3b8] uppercase tracking-wider">
            AVERAGE RESPONSE: &lt; 24 HOURS · NDA INCLUDED BY DEFAULT
          </div>
        </div>
      </section>
    </div>
  );
};

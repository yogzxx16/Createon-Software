import React from 'react';
import { RoutePath } from '../types';
import { PROJECTS, SERVICES, PROCESS_STEPS, PRINCIPLES } from '../data/siteContent';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          HERO SECTION (Faithfully matching Stitch UI Image 2)
         ========================================================================= */}
      <section className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-12 lg:pt-20 pb-16 lg:pb-24">
        {/* Atmospheric Backdrops */}
        <div className="pointer-events-none absolute -top-40 right-1/4 w-[580px] h-[580px] bg-[#ff6b00]/10 rounded-full blur-[140px]" />
        <div className="pointer-events-none absolute top-[500px] -left-32 w-[460px] h-[460px] bg-[#fabd00]/5 rounded-full blur-[160px]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top metadata badge */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold">
                DIGITAL STUDIO
              </span>
              <span className="text-white/20 font-['JetBrains_Mono'] text-xs">·</span>
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#94a3b8]">
                CHENNAI, INDIA
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[4.75rem] font-bold uppercase text-white tracking-tight leading-[1.04] mb-6">
              WE TURN IDEAS<br />
              <span className="text-[#ff6b00]">INTO DIGITAL</span><br />
              EXPERIENCES.
            </h1>

            {/* Supporting Copy */}
            <p className="font-['DM_Sans'] text-base sm:text-xl text-[#94a3b8] max-w-xl leading-relaxed mb-8">
              CreateOn designs and builds websites, digital products and software experiences for ambitious ideas and businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider bg-[#ff6b00] text-[#081426] font-bold px-8 py-4 rounded hover:bg-[#ff8a00] hover:text-black transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#ff6b00]/20 text-center"
              >
                START A PROJECT →
              </button>
              <button
                onClick={() => onNavigate('/work')}
                className="inline-flex items-center justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider bg-transparent text-white border border-white/[0.16] hover:border-white hover:bg-white/[0.04] font-medium px-8 py-4 rounded transition-all duration-200 text-center"
              >
                SEE OUR WORK →
              </button>
            </div>

            {/* Metric Credentials */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
              <div>
                <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  100<span className="text-[#ff6b00] text-lg">%</span>
                </div>
                <div className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#94a3b8] mt-1">
                  PRODUCTION RIGOR
                </div>
              </div>
              <div>
                <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  0.8<span className="text-[#fabd00] text-lg">s</span>
                </div>
                <div className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#94a3b8] mt-1">
                  AVG RESPONSE LCP
                </div>
              </div>
              <div>
                <div className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  EST. '24
                </div>
                <div className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#94a3b8] mt-1">
                  CHENNAI STUDIO
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Anchor (Interactive HUD preview from Stitch UI) */}
          <div className="lg:col-span-5">
            <div className="bg-[#101c2e] border border-white/[0.1] rounded-xl overflow-hidden shadow-2xl relative">
              {/* Window Bar */}
              <div className="bg-[#071325] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex items-center gap-1.5 bg-[#101c2e] px-3 py-1 rounded text-[0.6875rem] font-['JetBrains_Mono'] text-[#94a3b8]">
                  <span className="material-symbols-outlined text-xs text-[#ff6b00]">lock</span>
                  <span>createonsoftware.com/preview</span>
                </div>
                <span className="material-symbols-outlined text-sm text-[#94a3b8]">tune</span>
              </div>

              {/* HUD Screen Body */}
              <div className="p-6 bg-[#071325]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded bg-[#ff6b00] flex items-center justify-center text-[0.6875rem] font-bold text-[#081426]">
                      C
                    </span>
                    <span className="font-['JetBrains_Mono'] text-xs text-white font-medium">
                      KRYPTON // V2
                    </span>
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 px-2 py-0.5 rounded border border-[#ff6b00]/30 font-semibold">
                    DESIGN SYSTEM ACTIVE
                  </span>
                </div>

                {/* Internal Screen Mockup */}
                <div className="relative rounded-lg overflow-hidden border border-white/[0.08] bg-[#101c2e] mb-5">
                  <img
                    src="/brand/architectural-concept.png"
                    alt="CreateOn Software Architecture Preview"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071325] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <span className="font-['JetBrains_Mono'] text-[0.625rem] text-[#fabd00] uppercase tracking-wider block">
                        ● CASE EXPLORATION 04
                      </span>
                      <span className="font-['Space_Grotesk'] text-sm font-bold text-white uppercase">
                        Autonomous Kinetic Framework
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Diagnostic Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#101c2e] p-3 rounded border border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#94a3b8]">
                        LCP BENCHMARK
                      </span>
                      <span className="material-symbols-outlined text-[#ff6b00] text-xs">bolt</span>
                    </div>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="font-['Space_Grotesk'] text-lg font-bold text-white">384ms</span>
                      <span className="font-['JetBrains_Mono'] text-[0.625rem] text-emerald-400 font-semibold">+42%</span>
                    </div>
                  </div>
                  <div className="bg-[#101c2e] p-3 rounded border border-white/[0.06]">
                    <div className="flex items-center justify-between">
                      <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#94a3b8]">
                        DESIGN TOKENS
                      </span>
                      <span className="material-symbols-outlined text-[#fabd00] text-xs">token</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#fabd00]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#d7e3fc]" />
                      <span className="font-['JetBrains_Mono'] text-[0.625rem] text-[#94a3b8] ml-1">
                        SWISS GRID SPEC
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer status */}
                <div className="flex items-center justify-between font-['JetBrains_Mono'] text-[0.625rem] text-[#94a3b8] pt-2 border-t border-white/[0.06]">
                  <span>CANVAS: READY</span>
                  <span className="text-[#fabd00]">LIVE SYNC • 60 FPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SELECTED WORK / CURRENTLY BUILDING (Faithfully matching Stitch UI)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-16 lg:py-24 border-t border-white/[0.08]">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold">
                SELECTED WORK · IN PROGRESS
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight">
              CURRENTLY BUILDING.
            </h2>
          </div>
          <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#94a3b8]">
            [ ARCHIVE STAGE — 02 ]
          </span>
        </div>

        {/* Feature 01: Cybernaut EdTech */}
        <div className="bg-[#101c2e] border border-white/[0.08] hover:border-white/[0.16] rounded-xl p-6 sm:p-10 lg:p-12 mb-10 transition-all shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#fabd00] bg-[#fabd00]/10 px-3 py-1 rounded-full border border-[#fabd00]/30 font-semibold">
                    ● CLIENT PROJECT · IN PROGRESS
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#d7e3fc]/80 bg-[#071325] px-2.5 py-1 rounded border border-white/[0.08]">
                    DESIGN → DEVELOPMENT
                  </span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-4">
                  CYBERNAUT
                </h3>

                <p className="font-['DM_Sans'] text-base text-[#94a3b8] leading-relaxed mb-6">
                  An active client project currently being designed and developed by CreateOn Software. Engineered as a high-throughput computational platform with intuitive visual navigation and next-generation interactive data density.
                </p>

                {/* Metadata Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-t border-b border-white/[0.08] mb-6 font-['JetBrains_Mono'] text-xs">
                  <div>
                    <span className="text-[#94a3b8] uppercase tracking-wider block text-[0.625rem] mb-1">
                      SCOPE
                    </span>
                    <span className="text-[#d7e3fc]">Design System, Full-Stack App</span>
                  </div>
                  <div>
                    <span className="text-[#94a3b8] uppercase tracking-wider block text-[0.625rem] mb-1">
                      STACK
                    </span>
                    <span className="text-[#d7e3fc]">Next.js 14, WebGL, Tailwind</span>
                  </div>
                  <div>
                    <span className="text-[#94a3b8] uppercase tracking-wider block text-[0.625rem] mb-1">
                      TIMELINE
                    </span>
                    <span className="text-[#fabd00]">Q2 — Q3 2025</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/work/cybernaut')}
                  className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-bold bg-[#ff6b00] text-[#081426] px-5 py-3 rounded hover:bg-[#ff8a00] hover:text-black transition-all"
                >
                  <span>EXPLORE PROJECT PREVIEW</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <a
                  href="https://www.cybernaut.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#d7e3fc] hover:text-white border border-white/[0.14] hover:border-white px-4 py-3 rounded transition-all"
                >
                  <span>LIVE PORTAL</span>
                  <span className="material-symbols-outlined text-sm">arrow_outward</span>
                </a>
              </div>
            </div>

            {/* Right Visual (Interactive state and telemetry palette) */}
            <div className="lg:col-span-6 bg-[#071325] border border-white/[0.08] rounded-xl p-6 relative overflow-hidden">
              <div className="relative rounded-lg overflow-hidden mb-4 border border-white/[0.06]">
                <img
                  src="/projects/cybernaut.jpg"
                  alt="Cybernaut EdTech Project Preview"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-[#071325]/90 backdrop-blur-md px-2.5 py-1 rounded text-[0.625rem] font-['JetBrains_Mono'] text-[#fabd00] uppercase tracking-wider">
                  INTERACTIVE STATE
                </div>
              </div>

              <div className="font-['JetBrains_Mono'] text-[0.6875rem] text-[#94a3b8] mb-4">
                FIGMA_PROTOTYPE_SPEC_v0.9.bin
              </div>

              {/* Chromatic Palette & Type Tokens */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#94a3b8] tracking-wider block mb-2">
                    CHROMATIC PALETTE
                  </span>
                  <div className="flex gap-1.5 mb-1.5">
                    <span className="w-8 h-8 rounded bg-[#ff6b00]" title="#FF6B00" />
                    <span className="w-8 h-8 rounded bg-[#ffdf9e]" title="#FFDF9E" />
                    <span className="w-8 h-8 rounded bg-[#101c2e]" title="#101C2E" />
                    <span className="w-8 h-8 rounded bg-[#2a3549]" title="#2A3549" />
                  </div>
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] text-[#94a3b8]">
                    WCAG AAA COMPLIANT
                  </span>
                </div>
                <div>
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#94a3b8] tracking-wider block mb-1">
                    TYPE SYSTEM
                  </span>
                  <span className="font-['Space_Grotesk'] text-sm font-bold text-white block">
                    AA BB CC 0123
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[0.625rem] text-[#94a3b8]">
                    JetBrains Mono · Code layer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Selected Work Cards: Pakoda Boyz & Cafe Me */}
        <div className="space-y-8">
          <ProjectShowcase project={PROJECTS[1]} onNavigate={onNavigate} index={1} />
          <ProjectShowcase project={PROJECTS[2]} onNavigate={onNavigate} index={2} />
        </div>
      </section>

      {/* =========================================================================
          WHAT WE BUILD (Stitch UI: 01 to 08 Services)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-16 lg:py-24 border-t border-white/[0.08]">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold">
              OUR CAPABILITIES
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-4">
            BUILT AROUND YOUR NEXT IDEA.
          </h2>
          <p className="font-['DM_Sans'] text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            From the first concept to the final deployment, we create digital experiences designed for real-world needs.
          </p>
        </div>

        {/* 8 Services list */}
        <div className="flex flex-col gap-2 mb-10">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              onClick={() => onNavigate('/services')}
              className="group bg-[#101c2e] hover:bg-[#142032] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 rounded-xl p-6 lg:p-7 relative overflow-hidden shadow-sm cursor-pointer"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
                <div className="md:col-span-1">
                  <span className="font-['JetBrains_Mono'] text-sm text-[#ff6b00] font-bold">
                    {service.number}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white group-hover:text-[#ffb693] transition-colors flex items-center gap-2">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-6">
                  <p className="font-['DM_Sans'] text-sm text-[#94a3b8]">
                    {service.description}
                  </p>
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <span className="material-symbols-outlined text-[#94a3b8] group-hover:text-[#ff6b00] group-hover:translate-x-1 transition-all text-xl">
                    north_east
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-start">
          <button
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] hover:text-[#ff8a00] font-bold py-2"
          >
            <span>EXPLORE ALL SERVICES</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          HOW WE WORK (01 to 04 Process Bento)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-16 lg:py-24 border-t border-white/[0.08]">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#fabd00]" />
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold">
              OUR PROCESS
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight">
            FROM FIRST THOUGHT TO FINAL LAUNCH.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#101c2e] border border-white/[0.08] hover:border-white/[0.16] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#ff6b00]">
                    {step.number}
                  </span>
                  <span className="material-symbols-outlined text-[#94a3b8] text-xl">
                    {step.number === '01' ? 'visibility' : step.number === '02' ? 'shape_line' : step.number === '03' ? 'code' : 'rocket_launch'}
                  </span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>
              <div className="pt-4 border-t border-white/[0.06]">
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-wider text-[#fabd00] block mb-1">
                  DELIVERABLE
                </span>
                <span className="font-['JetBrains_Mono'] text-xs text-[#d7e3fc]">
                  {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          WHY CREATEON (Stitch UI: Small Studio. Thoughtful Work.)
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-16 lg:py-24 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00]" />
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold">
                WHY CREATEON
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight leading-tight mb-4">
              SMALL STUDIO.<br />
              THOUGHTFUL WORK.
            </h2>
            <p className="font-['DM_Sans'] text-base sm:text-lg text-[#94a3b8] leading-relaxed mb-8">
              We believe great digital experiences come from understanding the problem, making deliberate design decisions and building with care.
            </p>

            {/* Studio Discipline Visual Box */}
            <div className="bg-[#101c2e] border border-white/[0.08] rounded-xl overflow-hidden shadow-lg p-5">
              <div className="flex items-center justify-between mb-3 font-['JetBrains_Mono'] text-[0.625rem] text-[#fabd00] uppercase tracking-wider">
                <span>STUDIO DISCIPLINE</span>
                <span className="text-white/40">EST. CHENNAI</span>
              </div>
              <div className="rounded overflow-hidden mb-3 border border-white/[0.06]">
                <img
                  src="/brand/architectural-concept.png"
                  alt="CreateOn Software Studio Discipline"
                  className="w-full h-36 object-cover"
                />
              </div>
              <p className="font-['DM_Sans'] text-xs italic text-[#d7e3fc]/80">
                "Eliminate the unnecessary so that the necessary may speak."
              </p>
            </div>
          </div>

          {/* Right Column: 3 Principles */}
          <div className="lg:col-span-7 space-y-6">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="bg-[#101c2e] border border-white/[0.08] hover:border-white/[0.16] rounded-xl p-6 sm:p-8 transition-all"
              >
                <div className="flex items-center gap-2 text-xs font-['JetBrains_Mono'] text-[#ff6b00] font-bold uppercase tracking-widest mb-2">
                  <span>[ {principle.number} ]</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">
                  {principle.title}
                </h3>
                <p className="font-['DM_Sans'] text-base text-[#94a3b8] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA
         ========================================================================= */}
      <FinalCTA onNavigate={onNavigate} />
    </div>
  );
};

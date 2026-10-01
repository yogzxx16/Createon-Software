import React from 'react';
import { RoutePath } from '../types';

interface CybernautCaseStudyPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const CybernautCaseStudyPage: React.FC<CybernautCaseStudyPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Breadcrumb Header */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-12 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#94a3b8] mb-4">
          <button onClick={() => onNavigate('/')} className="hover:text-white uppercase">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('/work')} className="hover:text-white uppercase">Work</button>
          <span>/</span>
          <span className="text-[#ff6b00] uppercase font-bold">Cybernaut Case Study</span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#fabd00] animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold">
                CLIENT PROJECT · IN PROGRESS
              </span>
            </div>
            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl font-bold uppercase text-white tracking-tight">
              CYBERNAUT EDTECH
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.cybernaut.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-bold bg-[#ff6b00] text-[#081426] px-5 py-3 rounded hover:bg-[#ff8a00] hover:text-black transition-all"
            >
              <span>VISIT LIVE EDTECH PORTAL</span>
              <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Spec & Visual Board */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#101c2e] border border-white/[0.08] p-8 rounded-xl shadow-xl">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#fabd00] tracking-wider block font-semibold">
              PROJECT PARAMETERS // CN-2026-V1
            </span>
            <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white">
              Designing High-Throughput Telemetry with Razor Clarity
            </h2>
            <p className="font-['DM_Sans'] text-base text-[#94a3b8] leading-relaxed">
              Cybernaut EdTech operates as a multi-tier learning infrastructure serving higher education institutions and aspiring technologists. CreateOn Software is engineering the brand architecture, responsive design system, and core front-end execution with ultra-low cognitive load.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.08] font-['JetBrains_Mono'] text-xs">
              <div>
                <span className="text-[#94a3b8] uppercase block text-[0.625rem] mb-1">FRONTEND RUNTIME</span>
                <span className="text-white font-medium">Next.js 14, WebGL, Tailwind</span>
              </div>
              <div>
                <span className="text-[#94a3b8] uppercase block text-[0.625rem] mb-1">PERFORMANCE TARGET</span>
                <span className="text-emerald-400 font-medium">Sub-50ms TTFB / 100 PSI</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 rounded-lg overflow-hidden border border-white/[0.08]">
            <img
              src="/projects/cybernaut.jpg"
              alt="Cybernaut Campus Transformation"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* 7-Phase Case Study Blueprint */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-['JetBrains_Mono'] text-xs text-[#ff6b00] font-bold">[ TRANSPARENCY PROTOCOL ]</span>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white">
              7-PHASE EMPIRICAL BLUEPRINT
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#101c2e] border border-white/[0.06] p-6 rounded-xl">
              <span className="font-['JetBrains_Mono'] text-xs text-[#fabd00] block mb-2 font-bold">PHASE 01 // OVERVIEW</span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-2">CONTEXT</h4>
              <p className="font-['DM_Sans'] text-xs text-[#94a3b8] leading-relaxed">
                Framing market position, stakeholder requirements across academic directors, faculty, and student builders.
              </p>
            </div>
            <div className="bg-[#101c2e] border border-white/[0.06] p-6 rounded-xl">
              <span className="font-['JetBrains_Mono'] text-xs text-[#fabd00] block mb-2 font-bold">PHASE 02 // CHALLENGE</span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-2">FRICTION</h4>
              <p className="font-['DM_Sans'] text-xs text-[#94a3b8] leading-relaxed">
                Consolidating complex curriculum tracks, LMS touchpoints, and multi-portal telemetry into a unified architecture.
              </p>
            </div>
            <div className="bg-[#101c2e] border border-white/[0.06] p-6 rounded-xl">
              <span className="font-['JetBrains_Mono'] text-xs text-[#fabd00] block mb-2 font-bold">PHASE 03 // DISCOVERY</span>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-2">TELEMETRY</h4>
              <p className="font-['DM_Sans'] text-xs text-[#94a3b8] leading-relaxed">
                Information architecture stress testing, behavioral user audits, and device density analysis across tier-2 and tier-3 networks.
              </p>
            </div>
            <div className="bg-[#1f2a3d] border border-[#ff6b00] p-6 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="font-['JetBrains_Mono'] text-xs text-[#ff6b00] font-bold">PHASE 04 // CURRENT</span>
                <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
              </div>
              <h4 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-2">ART DIRECTION</h4>
              <p className="font-['DM_Sans'] text-xs text-[#d7e3fc] leading-relaxed">
                Atomic design tokens, high-density HUD components, responsive grid layouts, and tactile typography.
              </p>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
          <button
            onClick={() => onNavigate('/work')}
            className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#d7e3fc] hover:text-[#ff6b00] font-bold"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>BACK TO ALL WORK</span>
          </button>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider bg-[#ff6b00] text-[#081426] font-bold px-6 py-3 rounded hover:bg-[#ff8a00]"
          >
            <span>START A SIMILAR PROJECT →</span>
          </button>
        </div>
      </section>
    </div>
  );
};

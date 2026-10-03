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
          HERO SECTION
         ========================================================================= */}
      <section className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-12 lg:pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end relative z-10">
          <div className="lg:col-span-7 flex flex-col">
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

          <div className="lg:col-span-5 flex flex-col justify-end lg:items-end w-full mt-12 lg:mt-0">
            {/* The shared right-side composition wrapper */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[290px] mt-10 lg:mt-[120px] mx-auto lg:mx-0">
              
              {/* TOP ROW (Mobile) / Absolutely Positioned Elements (Desktop) */}
              <div className="flex flex-row justify-between items-center lg:block w-full mb-6 lg:mb-0">
                {/* Supporting Text Bridge */}
                <div className="flex flex-col border-l border-[#ff6b00]/50 pl-4 w-[160px] lg:w-[150px] lg:absolute lg:left-0 lg:bottom-[100%] lg:mb-4 lg:z-10">
                  <h3 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-white font-bold mb-1.5 leading-relaxed">
                    IDEAS IN. DIGITAL<br/>PRODUCTS OUT.
                  </h3>
                  <p className="font-['DM_Sans'] text-[0.6875rem] text-[#94a3b8] leading-relaxed">
                    Websites, applications and business systems built for real-world use.
                  </p>
                </div>

                {/* ZORO MASCOT - Precisely positioned on desktop, static flow on mobile */}
                <img 
                  src="/images/zorowithlap.png" 
                  alt="CreateOn Mascot"
                  className="w-[135px] sm:w-[145px] lg:w-[185px] h-auto block relative top-[26px] right-4 lg:top-auto lg:absolute lg:right-0 lg:bottom-[100%] lg:-mb-5 z-[5] pointer-events-none drop-shadow-[0_10px_20px_rgba(255,107,0,0.15)]"
                  style={{ transform: 'none', transition: 'none', animation: 'none' }}
                />
              </div>

              {/* Active Pipeline Card */}
              <div className="bg-[#101c2e] border border-white/[0.08] p-6 rounded-xl flex flex-col gap-2 w-full shadow-xl relative z-10">
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
        </div>
      </section>

      {/* =========================================================================
          PROJECT SHOWCASE LOOP
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-20">
        <div className="flex flex-col">
          {PROJECTS.map((project, index) => (
            <ProjectShowcase
              key={project.id}
              project={project}
              index={index}
            />
          ))}
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

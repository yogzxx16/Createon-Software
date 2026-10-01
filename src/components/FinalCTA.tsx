import React from 'react';
import { RoutePath } from '../types';

interface FinalCTAProps {
  onNavigate: (path: RoutePath) => void;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({
  onNavigate,
  title = "LET’S BUILD IT.",
  subtitle = "Have an idea, a business or a product that deserves a better digital experience? We are currently booking select projects for the upcoming cycle.",
  eyebrow = "HAVE SOMETHING IN MIND?",
}) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
      <div className="relative rounded-2xl bg-gradient-to-b from-[#101c2e] to-[#071325] border border-white/[0.08] p-8 sm:p-12 lg:p-20 text-center overflow-hidden shadow-2xl">
        {/* Ambient atmospheric glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[340px] bg-[#ff6b00]/10 rounded-full blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 w-[380px] h-[280px] bg-[#fabd00]/5 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.1] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#fabd00] animate-pulse" />
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-medium">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-none">
            {title}
          </h2>

          <p className="font-['DM_Sans'] text-base sm:text-lg text-[#94a3b8] max-w-xl mb-10 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider bg-[#ff6b00] text-[#081426] font-bold px-8 py-4 rounded hover:bg-[#ff8a00] hover:text-black transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#ff6b00]/20 text-center"
            >
              START A PROJECT →
            </button>
            <a
              href="mailto:createonsoftware@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider bg-transparent text-white border border-white/[0.14] hover:border-white hover:bg-white/[0.04] font-medium px-8 py-4 rounded transition-all duration-200 text-center"
            >
              JUST SAY HELLO
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/[0.06] w-full flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-['JetBrains_Mono'] text-[#94a3b8] uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              DIRECT RESPONSE IN &lt; 24 HOURS
            </span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>CHENNAI // UTC +5:30</span>
          </div>
        </div>
      </div>
    </section>
  );
};

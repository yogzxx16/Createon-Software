import React, { useState } from 'react';
import { ServiceItem, RoutePath } from '../types';

interface ServiceRowProps {
  service: ServiceItem;
  onNavigate?: (path: RoutePath) => void;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({ service, onNavigate }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      onClick={() => setExpanded(!expanded)}
      className="group bg-[#101c2e] hover:bg-[#142032] border border-white/[0.06] hover:border-white/[0.14] transition-all duration-300 rounded-xl p-6 lg:p-8 relative overflow-hidden shadow-sm cursor-pointer"
    >
      {/* Active orange vertical stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Number */}
        <div className="lg:col-span-1 flex items-baseline">
          <span className="font-['JetBrains_Mono'] text-base text-[#ff6b00] tracking-wider font-bold">
            {service.number}
          </span>
        </div>

        {/* Title & Subline */}
        <div className="lg:col-span-4">
          <h2 className="font-['Space_Grotesk'] text-xl lg:text-2xl font-bold uppercase text-white tracking-tight group-hover:text-[#ffb693] transition-colors flex items-center gap-2">
            {service.title}
            <span className="material-symbols-outlined text-[#ff6b00] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-xl">
              arrow_forward
            </span>
          </h2>
          <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#94a3b8] mt-1 block">
            {service.tagline}
          </span>
        </div>

        {/* Description */}
        <div className="lg:col-span-4">
          <p className="font-['DM_Sans'] text-sm sm:text-base text-[#d7e3fc]/80 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Tags / Deliverables */}
        <div className="lg:col-span-3 flex flex-col gap-2 lg:items-end">
          <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-widest text-[#fabd00] font-semibold">
            {service.deliverablesLabel}
          </span>
          <div className="flex flex-wrap lg:justify-end gap-1.5">
            {service.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="bg-[#1f2a3d] text-[#d7e3fc] text-[0.6875rem] font-['JetBrains_Mono'] px-2.5 py-1 rounded border border-white/[0.06]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded details view */}
      {expanded && onNavigate && (
        <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-between animate-in fade-in duration-200">
          <span className="font-['JetBrains_Mono'] text-xs text-[#94a3b8]">
            Looking for {service.title.toLowerCase()} for your product?
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate('/contact');
            }}
            className="inline-flex items-center gap-1 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#ff6b00] hover:text-[#ff8a00] font-bold"
          >
            DISCUSS THIS SERVICE →
          </button>
        </div>
      )}
    </article>
  );
};

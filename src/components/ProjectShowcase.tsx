import React from 'react';
import { ProjectItem, RoutePath } from '../types';

interface ProjectShowcaseProps {
  project: ProjectItem;
  onNavigate?: (path: RoutePath) => void;
  index: number;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  project,
  onNavigate,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <article className="group bg-[#101c2e] border border-white/[0.08] hover:border-white/[0.16] rounded-xl overflow-hidden transition-all duration-300 shadow-xl">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Project Visual Container */}
        <div className={`lg:col-span-6 relative overflow-hidden bg-[#071325] min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] flex items-center justify-center p-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover rounded-lg border border-white/[0.08] transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071325]/80 via-transparent to-transparent pointer-events-none" />
          
          {/* Overlay Status Pill */}
          <div className="absolute top-8 left-8 flex flex-wrap items-center gap-2">
            <span className={`font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider font-semibold px-3 py-1 rounded-full border ${
              project.status.includes('LIVE')
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                : 'bg-[#fabd00]/10 text-[#fabd00] border-[#fabd00]/30'
            }`}>
              {project.status}
            </span>
            {project.stage && (
              <span className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-wider text-[#d7e3fc]/80 bg-[#071325]/80 px-2.5 py-1 rounded border border-white/[0.1]">
                {project.stage}
              </span>
            )}
          </div>
        </div>

        {/* Project Editorial Content */}
        <div className={`lg:col-span-6 p-6 sm:p-10 lg:p-12 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div>
            {/* Header / Number */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="font-['JetBrains_Mono'] text-sm uppercase text-[#ff6b00] tracking-widest font-bold">
                [ {project.number} ]
              </span>
              <span className="font-['JetBrains_Mono'] text-xs uppercase text-[#94a3b8] tracking-widest">
                {project.category}
              </span>
            </div>

            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase text-white tracking-tight mb-2 group-hover:text-[#ff6b00] transition-colors">
              {project.title}
            </h3>

            {project.subtitle && (
              <p className="font-['JetBrains_Mono'] text-xs uppercase text-[#fabd00] tracking-wider mb-4">
                {project.subtitle}
              </p>
            )}

            <p className="font-['DM_Sans'] text-base text-[#94a3b8] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Specific Business Coordinates if available (Pakoda Boyz / Cafe Me) */}
            {(project.address || project.phone || project.location) && (
              <div className="bg-[#071325] border border-white/[0.06] rounded-lg p-4 mb-6 space-y-2">
                {project.location && (
                  <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#d7e3fc]">
                    <span className="material-symbols-outlined text-[#ff6b00] text-sm">place</span>
                    <span className="font-semibold">{project.location}</span>
                    {project.business && <span className="text-[#94a3b8]">· {project.business}</span>}
                  </div>
                )}
                {project.address && (
                  <p className="font-['DM_Sans'] text-xs text-[#94a3b8] pl-6 leading-relaxed">
                    {project.address}
                  </p>
                )}
                {project.phone && (
                  <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-xs text-[#94a3b8] pl-6">
                    <span className="material-symbols-outlined text-xs">call</span>
                    <span>{project.phone}</span>
                  </div>
                )}
              </div>
            )}

            {/* Scope / Stack Specs */}
            <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/[0.06] mb-6 font-['JetBrains_Mono'] text-xs">
              {project.scope && (
                <div>
                  <span className="text-[#94a3b8] uppercase tracking-wider block text-[0.6875rem] mb-1">
                    SCOPE
                  </span>
                  <span className="text-[#d7e3fc]">{project.scope}</span>
                </div>
              )}
              {project.stack && (
                <div>
                  <span className="text-[#94a3b8] uppercase tracking-wider block text-[0.6875rem] mb-1">
                    STACK
                  </span>
                  <span className="text-[#d7e3fc]">{project.stack}</span>
                </div>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-bold bg-[#ff6b00] text-[#081426] px-5 py-3 rounded hover:bg-[#ff8a00] hover:text-black transition-all active:scale-[0.98]"
              >
                <span>VIEW LIVE SITE</span>
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">arrow_outward</span>
              </a>
            )}

            {project.id === 'cybernaut' && (
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.cybernaut.co.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-bold bg-[#ff6b00] text-[#081426] px-5 py-3 rounded hover:bg-[#ff8a00] hover:text-black transition-all active:scale-[0.98]"
                >
                  <span>VIEW LIVE PORTAL</span>
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">arrow_outward</span>
                </a>
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('/work/cybernaut')}
                    className="group inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#d7e3fc] hover:text-white border border-white/[0.14] hover:border-white px-4 py-3 rounded transition-all active:scale-[0.98]"
                  >
                    <span>CASE STUDY BLUEPRINT</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1.5">arrow_forward</span>
                  </button>
                )}
              </div>
            )}

            {project.deliverables && project.deliverables.length > 0 && !project.liveUrl && project.id !== 'cybernaut' && (
              <div className="flex flex-wrap gap-1.5">
                {project.deliverables.map((del, dIdx) => (
                  <span
                    key={dIdx}
                    className="font-['JetBrains_Mono'] text-[0.6875rem] text-[#94a3b8] bg-[#071325] px-2.5 py-1 rounded border border-white/[0.06]"
                  >
                    {del}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

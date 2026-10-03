import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ProjectItem, RoutePath } from '../types';

interface ProjectShowcaseProps {
  project: ProjectItem;
  onNavigate?: (path: RoutePath) => void;
  index: number;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  project,
  index,
}) => {
  const isEven = index % 2 === 0;
  const prefersReducedMotion = useReducedMotion();

  // Subtle project-specific visual accents
  let accentText = 'text-[#ff6b00]';
  let accentBorder = 'border-[#ff6b00]/30';
  let accentBgHover = 'hover:bg-[#ff6b00] hover:text-[#081426]';
  let accentBg = 'bg-[#ff6b00] text-[#081426]';
  let accentLine = 'bg-[#ff6b00]';

  if (project.id === 'cybernaut') {
    // light / blue / cyan technology feel
    accentText = 'text-cyan-400';
    accentBorder = 'border-cyan-400/30';
    accentBgHover = 'hover:bg-cyan-400 hover:text-[#081426]';
    accentBg = 'bg-cyan-400 text-[#081426]';
    accentLine = 'bg-cyan-400';
  } else if (project.id === 'pakoda-boyz') {
    // warm food / hospitality feel
    accentText = 'text-amber-500';
    accentBorder = 'border-amber-500/30';
    accentBgHover = 'hover:bg-amber-500 hover:text-[#081426]';
    accentBg = 'bg-amber-500 text-[#081426]';
    accentLine = 'bg-amber-500';
  } else if (project.id === 'cafeme') {
    // warm cafe / lifestyle feel
    accentText = 'text-orange-400';
    accentBorder = 'border-orange-400/30';
    accentBgHover = 'hover:bg-orange-400 hover:text-[#081426]';
    accentBg = 'bg-orange-400 text-[#081426]';
    accentLine = 'bg-orange-400';
  } else if (project.id === 'microfin') {
    // clean / fintech / professional
    accentText = 'text-blue-400';
    accentBorder = 'border-blue-400/30';
    accentBgHover = 'hover:bg-blue-400 hover:text-[#081426]';
    accentBg = 'bg-blue-400 text-[#081426]';
    accentLine = 'bg-blue-400';
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const tagsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const isActive = project.status?.toLowerCase().includes('development') || project.status?.toLowerCase().includes('ongoing');

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="w-full flex flex-col mb-32 last:mb-0 group/article"
    >
      {/* Header Area */}
      <div className="mb-10 lg:mb-12">
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-3 relative w-fit">
          <div className="relative flex items-center">
            <span className={`font-['JetBrains_Mono'] text-sm uppercase tracking-widest font-bold ${accentText}`}>
              {project.number}
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className={`absolute -bottom-1 left-0 right-0 h-[2px] origin-left ${accentLine} opacity-50`}
            />
          </div>
          <span className={`font-['JetBrains_Mono'] text-sm uppercase tracking-widest font-bold ${accentText}`}>
            — {project.category}
          </span>
          <span className={`flex items-center gap-2 font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-wider px-2 py-0.5 rounded-full border ${accentBorder} text-white/70 ml-2`}>
            {isActive && (
              <span className={`w-1.5 h-1.5 rounded-full ${accentLine} animate-pulse`} style={{ animationDuration: '3s' }} />
            )}
            {!isActive && (
              <span className={`w-1.5 h-1.5 rounded-full bg-green-500/70`} />
            )}
            {project.status}
          </span>
        </motion.div>
        
        <motion.h2 variants={itemVariants} className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight mb-5">
          {project.title}
        </motion.h2>
        
        <motion.p variants={itemVariants} className="font-['DM_Sans'] text-lg sm:text-xl text-[#94a3b8] max-w-4xl leading-relaxed">
          {project.description}
        </motion.p>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Large Project Image */}
        <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="group/image relative rounded-2xl overflow-hidden bg-[#101c2e] border border-white/[0.08] shadow-2xl transition-transform duration-300 hover:-translate-y-0.5">
            <motion.img
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src={project.image}
              alt={project.title}
              className="w-full h-auto block object-contain transition-transform duration-[400ms] ease-out group-hover/image:scale-[1.02]"
              loading="lazy"
            />
            {/* Image Overlay Accent */}
            <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-[400ms] pointer-events-none" />
            <div className={`absolute bottom-0 left-0 right-0 h-1 ${accentLine} opacity-0 group-hover/image:opacity-100 transition-opacity duration-[400ms] pointer-events-none`} />
          </div>
        </div>

        {/* Project Information */}
        <div className={`lg:col-span-5 flex flex-col gap-10 py-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          
          {/* Challenge / Solution / Delivered */}
          <div className="flex flex-col gap-8">
            <motion.div variants={itemVariants}>
              <h4 className={`font-['JetBrains_Mono'] text-xs uppercase tracking-widest font-semibold mb-2 ${accentText}`}>
                CHALLENGE
              </h4>
              <p className="font-['DM_Sans'] text-base text-[#d7e3fc] leading-relaxed">
                {project.challenge || 'Understanding the core business problem and target audience needs.'}
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className={`font-['JetBrains_Mono'] text-xs uppercase tracking-widest font-semibold mb-2 ${accentText}`}>
                SOLUTION
              </h4>
              <p className="font-['DM_Sans'] text-base text-[#d7e3fc] leading-relaxed">
                {project.solution || 'Architected a robust digital experience focused on conversion and usability.'}
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h4 className={`font-['JetBrains_Mono'] text-xs uppercase tracking-widest font-semibold mb-2 ${accentText}`}>
                WHAT WE'RE BUILDING / DELIVERED
              </h4>
              <p className="font-['DM_Sans'] text-base text-[#d7e3fc] leading-relaxed">
                {project.delivered || 'A production-ready platform built on modern web infrastructure.'}
              </p>
            </motion.div>
          </div>

          {/* Tech / Services Tags */}
          <motion.div variants={itemVariants} className="border-t border-white/[0.08] pt-8">
            <h4 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8] mb-4">
              KEY FEATURES
            </h4>
            <motion.div 
              variants={tagsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {project.tags?.map((tag, idx) => (
                <motion.span
                  key={idx}
                  variants={tagVariants}
                  className="font-['JetBrains_Mono'] text-xs text-[#94a3b8] bg-[#101c2e] px-3 py-1.5 rounded-md border border-white/[0.08]"
                >
                  {tag}
                </motion.span>
              ))}
              {project.deliverables?.map((del, idx) => (
                <motion.span
                  key={`del-${idx}`}
                  variants={tagVariants}
                  className="font-['JetBrains_Mono'] text-xs text-[#94a3b8] bg-[#101c2e] px-3 py-1.5 rounded-md border border-white/[0.08]"
                >
                  {del}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          {project.liveUrl && (
            <motion.div variants={itemVariants} className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn inline-flex items-center gap-3 font-['JetBrains_Mono'] text-sm uppercase tracking-wider font-bold px-6 py-4 rounded-lg transition-all duration-300 active:scale-[0.98] ${accentBg} hover:-translate-y-px hover:shadow-lg hover:shadow-white/5`}
              >
                <span>VIEW PROJECT</span>
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:translate-x-1">arrow_outward</span>
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

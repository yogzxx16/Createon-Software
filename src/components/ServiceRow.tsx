import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServiceItem, RoutePath } from '../types';

interface ServiceRowProps {
  service: ServiceItem;
  onNavigate?: (path: RoutePath) => void;
}

export const ServiceRow: React.FC<ServiceRowProps> = ({ service, onNavigate }) => {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const tagsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.article
      variants={itemVariants}
      onClick={() => onNavigate?.('/contact')}
      className="group bg-[#101c2e] hover:bg-[#13223a] border border-white/[0.04] hover:border-[#ff6b00]/30 transition-all duration-300 rounded-xl p-6 lg:p-8 relative shadow-sm hover:shadow-xl hover:-translate-y-[2px] cursor-pointer overflow-hidden"
    >
      {/* Left accent line on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff6b00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left: Number, Title, Category */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-['JetBrains_Mono'] text-sm text-[#94a3b8] group-hover:text-white transition-colors font-bold">
              {service.number}
            </span>
            <div className="h-[2px] w-0 group-hover:w-4 bg-[#ff6b00] transition-all duration-300 origin-left" />
          </div>
          <h3 className="font-['Space_Grotesk'] text-xl lg:text-2xl font-bold uppercase text-white tracking-tight mb-1 group-hover:text-[#ffb693] transition-colors">
            {service.title}
          </h3>
          <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#64748b] group-hover:text-cyan-400/80 transition-colors">
            {service.category}
          </span>
        </div>

        {/* Center: Description */}
        <div className="lg:col-span-5 flex items-center h-full">
          <p className="font-['DM_Sans'] text-base text-[#d7e3fc]/90 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Right: Tags */}
        <div className="lg:col-span-3 flex flex-col gap-3 justify-center h-full">
          <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8]">
            Typical capabilities
          </span>
          <motion.div 
            variants={tagsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {service.tags.map((tag, tIdx) => (
              <motion.span
                variants={tagVariants}
                key={tIdx}
                className="bg-[#0b1320] text-[#94a3b8] group-hover:text-[#d7e3fc] transition-colors text-[0.6875rem] font-['JetBrains_Mono'] px-3 py-1.5 rounded border border-white/[0.04] group-hover:border-cyan-400/20"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RoutePath } from '../types';
import { SERVICES } from '../data/siteContent';
import { ServiceRow } from '../components/ServiceRow';

interface ServicesPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const prefersReducedMotion = useReducedMotion();

  // Group services
  const digitalExperiences = SERVICES.filter(s => s.category === 'DIGITAL EXPERIENCES');
  const businessGrowth = SERVICES.filter(s => s.category === 'BUSINESS & GROWTH');
  const mobile = SERVICES.filter(s => s.category === 'MOBILE');

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

  const cardContainerVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-12 lg:pt-20 pb-16"
      >
        <div className="pointer-events-none absolute -top-40 right-1/4 w-[580px] h-[580px] bg-[#ff6b00]/10 rounded-full blur-[140px]" />
        
        <div className="flex flex-col max-w-4xl">
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.2em] text-[#ff6b00] font-semibold">
              OUR CAPABILITIES
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[4.75rem] font-bold uppercase text-white tracking-tight leading-none mb-6">
            WHAT WE <span className="text-[#ff6b00]">DO.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="font-['DM_Sans'] text-xl sm:text-2xl text-white font-medium mb-4 leading-relaxed">
            Websites, applications and digital systems built around your business goals.
          </motion.p>
          <motion.p variants={itemVariants} className="font-['DM_Sans'] text-base sm:text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
            From your first idea to a live product, we design, build and support the digital experience behind it.
          </motion.p>
        </div>
      </motion.section>

      {/* =========================================================================
          HERO VISUAL
         ========================================================================= */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-20 lg:mb-24"
      >
        <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl border border-white/[0.08] bg-[#030e20]">
          <motion.img
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            src="/brand/premium-workspace.png"
            alt="CreateOn Software Workspace"
            className="w-full h-auto block object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030e20] via-transparent to-transparent opacity-80" />
          <motion.div variants={itemVariants} className="absolute bottom-6 left-6 flex items-center gap-2 bg-[#101c2e]/90 backdrop-blur-md px-4 py-2 rounded-lg border border-white/[0.1]">
            <span className="material-symbols-outlined text-[#ff6b00] text-lg">code_blocks</span>
            <span className="font-['JetBrains_Mono'] text-xs text-[#d7e3fc] tracking-wider uppercase font-semibold">
              DESIGN + DEVELOPMENT + DIGITAL PRODUCTS
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* =========================================================================
          GROUPED SERVICES
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-24 lg:mb-32">
        <div className="flex flex-col gap-16">
          
          {/* Group: Digital Experiences */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={containerVariants}>
            <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4">
              <h2 className="font-['Space_Grotesk'] text-2xl lg:text-3xl font-bold uppercase text-white tracking-tight">
                DIGITAL EXPERIENCES
              </h2>
              <div className="h-[1px] flex-grow bg-white/[0.08]" />
            </motion.div>
            <div className="flex flex-col gap-2">
              {digitalExperiences.map((service) => (
                <ServiceRow key={service.id} service={service} onNavigate={onNavigate} />
              ))}
            </div>
          </motion.div>

          {/* Group: Business & Growth */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={containerVariants}>
            <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4">
              <h2 className="font-['Space_Grotesk'] text-2xl lg:text-3xl font-bold uppercase text-white tracking-tight">
                BUSINESS &amp; GROWTH
              </h2>
              <div className="h-[1px] flex-grow bg-white/[0.08]" />
            </motion.div>
            <div className="flex flex-col gap-2">
              {businessGrowth.map((service) => (
                <ServiceRow key={service.id} service={service} onNavigate={onNavigate} />
              ))}
            </div>
          </motion.div>

          {/* Group: Mobile */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={containerVariants}>
            <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4">
              <h2 className="font-['Space_Grotesk'] text-2xl lg:text-3xl font-bold uppercase text-white tracking-tight">
                MOBILE
              </h2>
              <div className="h-[1px] flex-grow bg-white/[0.08]" />
            </motion.div>
            <div className="flex flex-col gap-2">
              {mobile.map((service) => (
                <ServiceRow key={service.id} service={service} onNavigate={onNavigate} />
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* =========================================================================
          WHAT WE CAN BUILD
         ========================================================================= */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={cardContainerVariants}
        className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-24 lg:mb-32"
      >
        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight">
            WHAT WE CAN BUILD
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <motion.div variants={itemVariants} className="group bg-[#101c2e] border border-white/[0.06] p-8 rounded-xl hover:border-white/[0.15] transition-all duration-300 flex flex-col hover:-translate-y-[3px]">
            <span className="material-symbols-outlined text-[#ff6b00] text-3xl mb-6 transition-transform duration-300 group-hover:-translate-y-1">language</span>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">WEBSITES</h3>
            <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed mb-8 flex-grow">
              Corporate websites, business sites and landing pages.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="font-['JetBrains_Mono'] text-[0.625rem] px-2 py-1 bg-[#0b1320] border border-white/[0.04] text-[#94a3b8] rounded group-hover:text-[#d7e3fc] transition-colors">React</span>
              <span className="font-['JetBrains_Mono'] text-[0.625rem] px-2 py-1 bg-[#0b1320] border border-white/[0.04] text-[#94a3b8] rounded group-hover:text-[#d7e3fc] transition-colors">SEO</span>
              <span className="font-['JetBrains_Mono'] text-[0.625rem] px-2 py-1 bg-[#0b1320] border border-white/[0.04] text-[#94a3b8] rounded group-hover:text-[#d7e3fc] transition-colors">CMS</span>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={itemVariants} className="group bg-[#101c2e] border border-white/[0.06] p-8 rounded-xl hover:border-white/[0.15] transition-all duration-300 flex flex-col hover:-translate-y-[3px]">
            <span className="material-symbols-outlined text-cyan-400 text-3xl mb-6 transition-transform duration-300 group-hover:-translate-y-1">web_traffic</span>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">WEB APPLICATIONS</h3>
            <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed mb-8 flex-grow">
              Interactive platforms and custom web applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="font-['JetBrains_Mono'] text-[0.625rem] px-2 py-1 bg-[#0b1320] border border-white/[0.04] text-[#94a3b8] rounded group-hover:text-[#d7e3fc] transition-colors">TypeScript</span>
              <span className="font-['JetBrains_Mono'] text-[0.625rem] px-2 py-1 bg-[#0b1320] border border-white/[0.04] text-[#94a3b8] rounded group-hover:text-[#d7e3fc] transition-colors">Node.js</span>
              <span className="font-['JetBrains_Mono'] text-[0.625rem] px-2 py-1 bg-[#0b1320] border border-white/[0.04] text-[#94a3b8] rounded group-hover:text-[#d7e3fc] transition-colors">REST APIs</span>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={itemVariants} className="group bg-[#101c2e] border border-white/[0.06] p-8 rounded-xl hover:border-white/[0.15] transition-all duration-300 flex flex-col hover:-translate-y-[3px]">
            <span className="material-symbols-outlined text-[#fabd00] text-3xl mb-6 transition-transform duration-300 group-hover:-translate-y-1">query_stats</span>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">BUSINESS SYSTEMS</h3>
            <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed mb-8 flex-grow">
              Dashboards, ERP tools and internal management systems.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="font-['JetBrains_Mono'] text-[0.625rem] px-2 py-1 bg-[#0b1320] border border-white/[0.04] text-[#94a3b8] rounded group-hover:text-[#d7e3fc] transition-colors">MongoDB</span>
              <span className="font-['JetBrains_Mono'] text-[0.625rem] px-2 py-1 bg-[#0b1320] border border-white/[0.04] text-[#94a3b8] rounded group-hover:text-[#d7e3fc] transition-colors">Real-time Systems</span>
              <span className="font-['JetBrains_Mono'] text-[0.625rem] px-2 py-1 bg-[#0b1320] border border-white/[0.04] text-[#94a3b8] rounded group-hover:text-[#d7e3fc] transition-colors">Cloud Deployment</span>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={itemVariants} className="group bg-[#101c2e] border border-white/[0.06] p-8 rounded-xl hover:border-white/[0.15] transition-all duration-300 flex flex-col hover:-translate-y-[3px]">
            <span className="material-symbols-outlined text-purple-400 text-3xl mb-6 transition-transform duration-300 group-hover:-translate-y-1">smartphone</span>
            <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">MOBILE APPS</h3>
            <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed mb-8 flex-grow">
              Android and mobile-first applications for customers and teams.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="font-['JetBrains_Mono'] text-[0.625rem] px-2 py-1 bg-[#0b1320] border border-white/[0.04] text-[#94a3b8] rounded group-hover:text-[#d7e3fc] transition-colors">React Native</span>
              <span className="font-['JetBrains_Mono'] text-[0.625rem] px-2 py-1 bg-[#0b1320] border border-white/[0.04] text-[#94a3b8] rounded group-hover:text-[#d7e3fc] transition-colors">Android</span>
              <span className="font-['JetBrains_Mono'] text-[0.625rem] px-2 py-1 bg-[#0b1320] border border-white/[0.04] text-[#94a3b8] rounded group-hover:text-[#d7e3fc] transition-colors">Cross-platform</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* =========================================================================
          HOW WE WORK
         ========================================================================= */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-24 lg:mb-32"
      >
        <div className="bg-[#101c2e] border border-white/[0.08] rounded-xl p-8 lg:p-16 shadow-xl">
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight mb-4">
              HOW WE WORK
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
            {/* Connecting line for desktop */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="hidden lg:block absolute top-6 left-12 right-12 h-[2px] bg-white/[0.05] origin-left"
            />

            {/* Step 1 */}
            <motion.div variants={itemVariants} className="relative z-10 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#0b1320] border-2 border-[#ff6b00] flex items-center justify-center font-['JetBrains_Mono'] text-[#ff6b00] font-bold mb-6">
                01
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">DISCOVER</h3>
              <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed mb-6">
                We understand your business, audience and goals before we start.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#64748b]">Research</span>
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#64748b]">•</span>
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#64748b]">Strategy</span>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div variants={itemVariants} className="relative z-10 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#0b1320] border-2 border-cyan-400 flex items-center justify-center font-['JetBrains_Mono'] text-cyan-400 font-bold mb-6">
                02
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">DESIGN</h3>
              <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed mb-6">
                We turn the idea into a clear digital experience and visual direction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#64748b]">UX/UI</span>
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#64748b]">•</span>
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#64748b]">Prototyping</span>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div variants={itemVariants} className="relative z-10 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#0b1320] border-2 border-[#fabd00] flex items-center justify-center font-['JetBrains_Mono'] text-[#fabd00] font-bold mb-6">
                03
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">BUILD</h3>
              <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed mb-6">
                We develop the product, connect the systems and test the experience.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#64748b]">Development</span>
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#64748b]">•</span>
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#64748b]">Testing</span>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div variants={itemVariants} className="relative z-10 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#0b1320] border-2 border-white/[0.2] flex items-center justify-center font-['JetBrains_Mono'] text-white font-bold mb-6">
                04
              </div>
              <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">LAUNCH</h3>
              <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed mb-6">
                We deploy, refine and support the product after release.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#64748b]">Deployment</span>
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#64748b]">•</span>
                <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase text-[#64748b]">Support</span>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* =========================================================================
          THE RIGHT SOLUTION
         ========================================================================= */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={cardContainerVariants}
        className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-24 lg:mb-32"
      >
        <motion.div variants={itemVariants} className="max-w-3xl mb-12">
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight leading-tight mb-4">
            THE RIGHT SOLUTION STARTS WITH THE RIGHT QUESTIONS.
          </h2>
          <p className="font-['DM_Sans'] text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            Every business has different needs. We first understand the problem, then choose the technology that fits it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={itemVariants} className="bg-[#101c2e] border border-white/[0.06] p-8 rounded-xl flex flex-col hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-[2px]">
            <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">DISCOVER BEFORE WE BUILD</h3>
            <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
              We understand the business problem before choosing the solution.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-[#101c2e] border border-white/[0.06] p-8 rounded-xl flex flex-col hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-[2px]">
            <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">PURPOSEFUL DESIGN</h3>
            <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
              Every screen and interaction has a reason.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="bg-[#101c2e] border border-white/[0.06] p-8 rounded-xl flex flex-col hover:border-white/[0.15] transition-all duration-300 hover:-translate-y-[2px]">
            <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">BUILT TO GROW</h3>
            <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
              We build with future updates, users and business growth in mind.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* =========================================================================
          NOT SURE WHAT YOU NEED?
         ========================================================================= */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-24 lg:mb-32"
      >
        <motion.div variants={itemVariants} className="bg-[#0b1320] border border-[#ff6b00]/20 rounded-xl p-8 lg:p-12 text-center flex flex-col items-center">
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase text-white mb-4">
            NOT SURE WHICH SERVICE YOU NEED?
          </h2>
          <p className="font-['DM_Sans'] text-base text-[#94a3b8] max-w-xl mx-auto mb-8">
            Tell us what you're trying to build. We'll help you figure out the right digital solution.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="group/btn inline-flex items-center gap-2 justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider bg-transparent border-2 border-[#ff6b00] text-[#ff6b00] font-bold px-8 py-3 rounded hover:bg-[#ff6b00] hover:text-[#081426] transition-all duration-300 hover:-translate-y-px hover:shadow-lg hover:shadow-[#ff6b00]/20"
          >
            <span>LET’S TALK</span>
            <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:translate-x-1">arrow_outward</span>
          </button>
        </motion.div>
      </motion.section>

      {/* =========================================================================
          FINAL CTA
         ========================================================================= */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pb-24 lg:pb-32"
      >
        <motion.div variants={itemVariants} className="bg-[#101c2e] border border-white/[0.08] rounded-xl p-8 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl relative z-10">
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight leading-tight">
              LET’S TALK ABOUT YOUR REQUIREMENTS.
            </h2>
            <p className="font-['DM_Sans'] text-base text-[#94a3b8] mt-4 max-w-xl">
              Tell us what you're building, what you're trying to improve, or where you're stuck.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="group/btn inline-flex items-center gap-2 justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider bg-[#ff6b00] text-[#081426] font-bold px-8 py-4 rounded hover:bg-[#ff8a00] hover:text-black transition-all duration-300 shadow-lg shadow-[#ff6b00]/20 active:scale-[0.98] text-center whitespace-nowrap hover:-translate-y-px"
            >
              <span>LET’S TALK</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:translate-x-1">arrow_outward</span>
            </button>
            <button
              onClick={() => onNavigate('/work')}
              className="group/btn inline-flex items-center gap-2 justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider bg-transparent border border-white/[0.2] text-white font-bold px-8 py-4 rounded hover:bg-white/[0.05] transition-all duration-300 active:scale-[0.98] text-center whitespace-nowrap hover:-translate-y-px"
            >
              <span>VIEW OUR WORK</span>
              <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:translate-x-1">arrow_outward</span>
            </button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

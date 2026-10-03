import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RoutePath } from '../types';
import { PROCESS_STEPS } from '../data/siteContent';

interface ClientsPageProps {
  onNavigate: (path: RoutePath) => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({ onNavigate }) => {
  const prefersReducedMotion = useReducedMotion();

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

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          HERO
         ========================================================================= */}
      <section className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-12 lg:pt-20 pb-16">
        <div className="flex flex-col">
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
            We work with businesses, teams and products that are building something useful for their customers.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CLIENT PROFILE CARDS
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-24 space-y-16 lg:space-y-24">
        
        {/* Client 01: Cybernaut EdTech */}
        <motion.article 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start group/article"
        >
          <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-cyan-400 font-bold block mb-2">
                01 / EDTECH
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight">
                CYBERNAUT EDTECH
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8] font-bold mb-3">
                ABOUT
              </h4>
              <p className="font-['DM_Sans'] text-base text-[#d7e3fc] leading-relaxed">
                Cybernaut is an EdTech organization focused on digital learning, campus transformation, enterprise product engineering and building a professional community around technology.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8] font-bold mb-3">
                FOCUS
              </h4>
              <motion.div 
                variants={tagsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {['Digital Learning', 'EdTech', 'Campus Programs', 'Enterprise Technology', 'Technology Community'].map(tag => (
                  <motion.span variants={tagVariants} key={tag} className="font-['JetBrains_Mono'] text-xs text-cyan-400 bg-cyan-400/10 px-3 py-1.5 rounded-md border border-cyan-400/20">
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <a
                href="https://www.cybernaut.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-bold text-white hover:text-cyan-400 transition-colors"
              >
                <span>VISIT WEBSITE</span>
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:translate-x-1">arrow_outward</span>
              </a>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 relative group/image rounded-2xl overflow-hidden bg-[#101c2e] border border-white/[0.08] shadow-2xl transition-transform duration-300 hover:-translate-y-0.5 order-1 lg:order-2">
            <motion.img
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src="/clients/cybernaut.png"
              alt="Cybernaut EdTech"
              className="w-full h-auto block object-contain transition-transform duration-[400ms] ease-out group-hover/image:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-[400ms] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-400 opacity-0 group-hover/image:opacity-100 transition-opacity duration-[400ms] pointer-events-none" />
          </div>
        </motion.article>

        {/* Client 02: Pakoda Boyz */}
        <motion.article 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start group/article"
        >
          <div className="lg:col-span-7 relative group/image rounded-2xl overflow-hidden bg-[#101c2e] border border-white/[0.08] shadow-2xl transition-transform duration-300 hover:-translate-y-0.5">
            <motion.img
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src="/clients2images/pkb.jpeg"
              alt="Pakoda Boyz Biriyani"
              className="w-full h-auto block object-contain transition-transform duration-[400ms] ease-out group-hover/image:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-[400ms] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500 opacity-0 group-hover/image:opacity-100 transition-opacity duration-[400ms] pointer-events-none" />
          </div>
          
          <div className="lg:col-span-5 flex flex-col">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-amber-500 font-bold block mb-2">
                02 / HOSPITALITY & FOOD
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight">
                PAKODA BOYZ BIRIYANI
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8] font-bold mb-3">
                ABOUT
              </h4>
              <p className="font-['DM_Sans'] text-base text-[#d7e3fc] leading-relaxed">
                Pakoda Boyz Biryani is a Chennai-based food and hospitality brand focused on biryani and a modern customer ordering experience.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8] font-bold mb-3">
                FOCUS
              </h4>
              <motion.div 
                variants={tagsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {['Biryani', 'Food & Hospitality', 'Takeaway', 'Delivery', 'Customer Experience'].map(tag => (
                  <motion.span variants={tagVariants} key={tag} className="font-['JetBrains_Mono'] text-xs text-amber-500 bg-amber-500/10 px-3 py-1.5 rounded-md border border-amber-500/20">
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <h4 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8] font-bold mb-2">
                LOCATION
              </h4>
              <div className="flex items-start gap-1.5 font-['DM_Sans'] text-sm text-[#d7e3fc]/80">
                <span className="material-symbols-outlined text-sm text-amber-500 mt-0.5">location_on</span>
                <span>Chennai, Tamil Nadu</span>
              </div>
            </motion.div>
          </div>
        </motion.article>

        {/* Client 03: Cafe Me */}
        <motion.article 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start group/article"
        >
          <div className="lg:col-span-5 flex flex-col order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-orange-400 font-bold block mb-2">
                03 / HOSPITALITY & CAFE
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight">
                CAFE ME
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8] font-bold mb-3">
                ABOUT
              </h4>
              <p className="font-['DM_Sans'] text-base text-[#d7e3fc] leading-relaxed">
                Cafe Me is a neighborhood vegetarian cafe in Chennai focused on artisan specials, curated comfort food and a welcoming cafe experience.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8] font-bold mb-3">
                FOCUS
              </h4>
              <motion.div 
                variants={tagsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {['Vegetarian Cafe', 'Artisan Specials', 'Comfort Food', 'Cafe Experience', 'Chennai'].map(tag => (
                  <motion.span variants={tagVariants} key={tag} className="font-['JetBrains_Mono'] text-xs text-orange-400 bg-orange-400/10 px-3 py-1.5 rounded-md border border-orange-400/20">
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-8">
              <div>
                <h4 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8] font-bold mb-2">
                  LOCATION
                </h4>
                <div className="flex items-start gap-1.5 font-['DM_Sans'] text-sm text-[#d7e3fc]/80">
                  <span className="material-symbols-outlined text-sm text-orange-400 mt-0.5">location_on</span>
                  <span>K.K. Nagar, Chennai</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8] font-bold mb-2 invisible">
                  LINK
                </h4>
                <a
                  href="https://create-on-software-cafe-me.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-bold text-white hover:text-orange-400 transition-colors"
                >
                  <span>VISIT WEBSITE</span>
                  <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:translate-x-1">arrow_outward</span>
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 relative group/image rounded-2xl overflow-hidden bg-[#101c2e] border border-white/[0.08] shadow-2xl transition-transform duration-300 hover:-translate-y-0.5 order-1 lg:order-2">
            <motion.img
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src="/projects/cafeme.jpg"
              alt="Cafe Me"
              className="w-full h-auto block object-contain transition-transform duration-[400ms] ease-out group-hover/image:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-[400ms] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-400 opacity-0 group-hover/image:opacity-100 transition-opacity duration-[400ms] pointer-events-none" />
          </div>
        </motion.article>

        {/* Client 04: MicroFin */}
        <motion.article 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start group/article"
        >
          <div className="lg:col-span-7 relative group/image rounded-2xl overflow-hidden bg-[#101c2e] border border-white/[0.08] shadow-2xl transition-transform duration-300 hover:-translate-y-0.5">
            <motion.img
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              src="/clients/MICROFIN.png"
              alt="MicroFin Product"
              className="w-full h-auto block object-contain transition-transform duration-[400ms] ease-out group-hover/image:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/10 transition-colors duration-[400ms] pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-400 opacity-0 group-hover/image:opacity-100 transition-opacity duration-[400ms] pointer-events-none" />
          </div>
          
          <div className="lg:col-span-5 flex flex-col">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-blue-400 font-bold block mb-2">
                04 / FINTECH & MICROFINANCE
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase text-white tracking-tight">
                MICROFIN
              </h2>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8] font-bold mb-3">
                ABOUT
              </h4>
              <p className="font-['DM_Sans'] text-base text-[#d7e3fc] leading-relaxed">
                MicroFin is a mobile-first microfinance management product designed to help finance managers organize customers, sectors, loans, collections, payments and financial records in one connected system.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-8">
              <h4 className="font-['JetBrains_Mono'] text-[0.625rem] uppercase tracking-widest text-[#94a3b8] font-bold mb-3">
                FOCUS
              </h4>
              <motion.div 
                variants={tagsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {['Microfinance', 'Financial Management', 'Loans', 'Collections', 'Customer Records'].map(tag => (
                  <motion.span variants={tagVariants} key={tag} className="font-['JetBrains_Mono'] text-xs text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded-md border border-blue-400/20">
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <a
                href="https://micro-fi-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-wider font-bold text-white hover:text-blue-400 transition-colors"
              >
                <span>VIEW PRODUCT</span>
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/btn:translate-x-1">arrow_outward</span>
              </a>
            </motion.div>
          </div>
        </motion.article>

      </section>

      {/* =========================================================================
          OUR COLLABORATIVE PROCESS
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/[0.08]">
          <div>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-bold uppercase text-white tracking-tight">
              OUR COLLABORATIVE PROCESS
            </h2>
          </div>
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
                <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CLIENT EXPERIENCE PROMISE
         ========================================================================= */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-20">
        <div className="mb-8">
          <h2 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase text-white tracking-tight">
            CLIENT EXPERIENCE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#101c2e] border border-white/[0.08] p-8 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#071325] border border-white/[0.08] flex items-center justify-center text-[#ff6b00] mb-6">
                <span className="material-symbols-outlined text-xl">badge</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">
                DIRECT FOUNDER ACCESS
              </h3>
              <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
                Talk directly with the people building your product. Clear context and direct feedback.
              </p>
            </div>
          </div>

          <div className="bg-[#101c2e] border border-white/[0.08] p-8 rounded-xl flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#071325] border border-white/[0.08] flex items-center justify-center text-[#fabd00] mb-6">
                <span className="material-symbols-outlined text-xl">chat_bubble</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">
                CLEAR COMMUNICATION
              </h3>
              <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
                We speak your language. Decisions are explained clearly in business terms.
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
                Consistent progress updates every week, so you always know where the project stands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA
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
            Let's discuss your product roadmap and business ambitions.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider bg-[#ff6b00] text-[#081426] font-bold px-8 py-4 rounded hover:bg-[#ff8a00] hover:text-black transition-all mb-6"
          >
            START A CONVERSATION →
          </button>
        </div>
      </section>
    </div>
  );
};

import React, { useState, useRef } from 'react';
import { RoutePath } from '../types';
import { SERVICES, PROCESS_STEPS } from '../data/siteContent';
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'motion/react';

interface HomePageProps {
  onNavigate: (path: RoutePath) => void;
}

const ProcessVisual: React.FC<{ progress: any }> = ({ progress }) => {
  const [viewState, setViewState] = useState<'FLOW' | 'DESKTOP' | 'MOBILE'>('FLOW');
  const isFlow = viewState === 'FLOW';

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tx = useSpring(mx, { stiffness: 80, damping: 25 });
  const ty = useSpring(my, { stiffness: 80, damping: 25 });

  const handleMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 15);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 15);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // Flow Transformations
  const laptopY = useTransform(progress, [0, 0.15], [100, 0]);
  const laptopOp = useTransform(progress, [0, 0.1], [0, 1]);
  const laptopScale = useTransform(progress, [0.65, 0.75], [1, 0.85]);
  const laptopXStr = useTransform(progress, [0.65, 0.75], ['0%', '-15%']);

  const phoneXStr = useTransform(progress, [0.65, 0.75], ['80%', '30%']);
  const phoneOp = useTransform(progress, [0.65, 0.75], [0, 1]);
  const phoneY = useTransform(progress, [0.65, 0.75], [80, 10]);
  const phoneScale = useTransform(progress, [0.65, 0.75], [0.8, 1]);

  // Screen UI building
  const navOp = useTransform(progress, [0.15, 0.25], [0, 1]);
  const navY = useTransform(progress, [0.15, 0.25], [-10, 0]);

  const heroT1 = useTransform(progress, [0.25, 0.3], [0, 1]);
  const heroT2 = useTransform(progress, [0.3, 0.35], [0, 1]);
  const heroT3 = useTransform(progress, [0.35, 0.4], [0, 1]);

  const cardsOp = useTransform(progress, [0.45, 0.55], [0, 1]);
  const cardsY = useTransform(progress, [0.45, 0.55], [20, 0]);

  // Final polish delivery
  const finalOp = useTransform(progress, [0.85, 0.95], [0, 1]);

  return (
    <div 
      className="relative w-full h-[450px] sm:h-[550px] lg:h-[70vh] max-h-[750px] mt-8 lg:mt-12 bg-[#050b14] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl group/container"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="absolute top-4 left-6 z-50 flex flex-col gap-2 pointer-events-none">
        <div className="font-['JetBrains_Mono'] text-[9px] text-[#94a3b8] tracking-widest uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse" />
          INTERACTION PREVIEW
        </div>
      </div>

      <motion.div 
        style={{ x: tx, y: ty }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        {/* LAPTOP */}
        <motion.div
          style={isFlow ? { y: laptopY, opacity: laptopOp, scale: laptopScale, x: laptopXStr } : {}}
          animate={!isFlow ? { 
            y: 0, 
            opacity: viewState === 'MOBILE' ? 0.2 : 1, 
            scale: viewState === 'MOBILE' ? 0.7 : 1, 
            x: viewState === 'MOBILE' ? '-30%' : '0%' 
          } : {}}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-[90%] sm:w-[85%] max-w-[600px] z-10"
        >
          {/* Laptop Body */}
          <div className="w-full aspect-[16/10] bg-[#0c121e] rounded-t-xl sm:rounded-t-2xl border-[3px] border-[#2a3441] border-b-0 shadow-2xl flex flex-col overflow-hidden relative group/desktop">
             {/* Browser bar */}
             <div className="h-5 sm:h-6 bg-[#1a2332] flex items-center px-3 gap-1.5 shrink-0 border-b border-white/[0.05]">
               <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
               <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
               <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
               <div className="ml-4 flex-1 h-3 sm:h-4 bg-white/5 rounded mx-2 max-w-[200px]" />
             </div>
             
             {/* Screen */}
             <div className="flex-1 bg-[#030914] relative overflow-hidden flex flex-col">
               {/* Nav */}
               <motion.div 
                 style={isFlow ? { opacity: navOp, y: navY } : {}} 
                 animate={!isFlow ? { opacity: 1, y: 0 } : {}}
                 className="h-10 sm:h-12 border-b border-white/[0.05] flex items-center justify-between px-4 sm:px-6 shrink-0 bg-[#081220]"
               >
                 <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#ff6b00]" />
                    <div className="w-16 h-2 bg-white/80 rounded hidden sm:block" />
                 </div>
                 <div className="flex gap-4">
                    <div className="w-8 h-1.5 bg-white/40 rounded hover:bg-[#ff6b00] transition-colors cursor-pointer" />
                    <div className="w-8 h-1.5 bg-white/40 rounded hover:bg-[#ff6b00] transition-colors cursor-pointer" />
                    <div className="w-12 h-1.5 bg-[#ff6b00] rounded hover:opacity-80 transition-opacity cursor-pointer" />
                 </div>
               </motion.div>

               <div className="flex-1 p-4 sm:p-6 flex flex-col gap-5 overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff6b00]/10 rounded-full blur-[40px] pointer-events-none" />

                 {/* Hero Text */}
                 <div className="flex flex-col gap-2.5 max-w-[80%] relative z-10">
                   <motion.div style={isFlow ? { opacity: heroT1 } : {}} animate={!isFlow ? { opacity: 1 } : {}} className="w-20 h-2 bg-[#ff6b00] rounded" />
                   <motion.div style={isFlow ? { opacity: heroT2 } : {}} animate={!isFlow ? { opacity: 1 } : {}} className="w-full h-4 sm:h-6 bg-white rounded" />
                   <motion.div style={isFlow ? { opacity: heroT3 } : {}} animate={!isFlow ? { opacity: 1 } : {}} className="w-3/4 h-4 sm:h-6 bg-white rounded" />
                   <motion.div style={isFlow ? { opacity: heroT3 } : {}} animate={!isFlow ? { opacity: 1 } : {}} className="w-1/2 h-1.5 sm:h-2 bg-[#94a3b8] rounded mt-1" />
                   <motion.div style={isFlow ? { opacity: heroT3 } : {}} animate={!isFlow ? { opacity: 1 } : {}} className="w-24 h-6 bg-[#ff6b00] rounded mt-2 hover:scale-105 transition-transform cursor-pointer shadow-[0_0_15px_rgba(255,107,0,0.3)]" />
                 </div>

                 {/* Content Cards */}
                 <motion.div style={isFlow ? { opacity: cardsOp, y: cardsY } : {}} animate={!isFlow ? { opacity: 1, y: 0 } : {}} className="flex-1 flex gap-3 relative z-10">
                   <div className="flex-1 bg-[#0a1220] border border-white/[0.08] rounded-lg p-2.5 flex flex-col gap-2 hover:border-[#ff6b00]/50 transition-colors group/card cursor-pointer">
                     <div className="w-full flex-1 bg-[#121c2d] rounded flex items-center justify-center group-hover/card:bg-[#152238] transition-colors">
                       <span className="material-symbols-outlined text-white/10 text-xs">design_services</span>
                     </div>
                     <div className="w-1/2 h-1.5 bg-white/80 rounded mt-0.5" />
                     <div className="w-3/4 h-1 bg-[#94a3b8] rounded" />
                   </div>
                   <div className="flex-1 bg-[#0a1220] border border-white/[0.08] rounded-lg p-2.5 flex flex-col gap-2 hover:border-[#ff6b00]/50 transition-colors group/card cursor-pointer">
                     <div className="w-full flex-1 bg-[#121c2d] rounded flex items-center justify-center group-hover/card:bg-[#152238] transition-colors">
                       <span className="material-symbols-outlined text-white/10 text-xs">code</span>
                     </div>
                     <div className="w-1/2 h-1.5 bg-white/80 rounded mt-0.5" />
                     <div className="w-3/4 h-1 bg-[#94a3b8] rounded" />
                   </div>
                   <div className="flex-1 bg-[#0a1220] border border-white/[0.08] rounded-lg p-2.5 flex flex-col gap-2 hover:border-[#ff6b00]/50 transition-colors group/card cursor-pointer hidden sm:flex">
                     <div className="w-full flex-1 bg-[#121c2d] rounded flex items-center justify-center group-hover/card:bg-[#152238] transition-colors">
                       <span className="material-symbols-outlined text-white/10 text-xs">rocket_launch</span>
                     </div>
                     <div className="w-1/2 h-1.5 bg-white/80 rounded mt-0.5" />
                     <div className="w-3/4 h-1 bg-[#94a3b8] rounded" />
                   </div>
                 </motion.div>
                 
                 {/* Final Delivery Polish Overlay */}
                 <motion.div style={isFlow ? { opacity: finalOp } : {}} animate={!isFlow ? { opacity: 1 } : {}} className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(255,107,0,0.05)]" />
               </div>
               
               {/* Desktop Overlay Status */}
               <div className="absolute top-2 right-2 bg-black/50 backdrop-blur text-[8px] font-['JetBrains_Mono'] text-white/50 px-2 py-1 rounded border border-white/10 opacity-0 group-hover/desktop:opacity-100 transition-opacity">
                 DESKTOP VIEW
               </div>
             </div>
          </div>
          {/* Laptop Base */}
          <div className="w-[105%] h-3 sm:h-4 bg-[#1a2332] rounded-b-xl sm:rounded-b-2xl shadow-[0_20px_40px_rgba(0,0,0,0.8)] border-t border-white/[0.1]">
             <div className="w-1/4 h-1 bg-black/40 mx-auto rounded-b-md" />
          </div>
        </motion.div>

        {/* SMARTPHONE */}
        <motion.div
          style={isFlow ? { opacity: phoneOp, scale: phoneScale, x: phoneXStr, y: phoneY } : {}}
          animate={!isFlow ? {
            opacity: viewState === 'MOBILE' ? 1 : 0,
            scale: viewState === 'MOBILE' ? 1.2 : 0.9,
            x: viewState === 'MOBILE' ? '0%' : '50%',
            y: viewState === 'MOBILE' ? 0 : 50
          } : {}}
          transition={{ type: "spring", stiffness: 70, damping: 20 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] sm:w-[150px] aspect-[9/19] bg-[#0c121e] rounded-[16px] sm:rounded-[24px] border-[4px] sm:border-[6px] border-[#2a3441] shadow-2xl flex flex-col ring-1 ring-white/10 z-30 group/mobile overflow-hidden"
        >
          {/* Notch */}
          <div className="absolute top-0 inset-x-0 h-3 sm:h-4 flex justify-center z-40 pointer-events-none">
            <div className="w-1/2 h-full bg-[#2a3441] rounded-b-lg sm:rounded-b-xl" />
          </div>
          
          {/* Screen */}
          <div className="flex-1 bg-[#030914] relative overflow-hidden flex flex-col cursor-default">
            
            {/* Nav */}
            <div className="flex items-center justify-between shrink-0 bg-[#081220] px-2.5 py-2 sm:pt-4 border-b border-white/[0.05]">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff6b00]" />
              <div className="flex flex-col gap-[3px] items-end cursor-pointer group/hamburger p-1">
                <div className="w-3 sm:w-4 h-[2px] bg-white/80 rounded group-hover/hamburger:bg-[#ff6b00] transition-colors" />
                <div className="w-2 sm:w-3 h-[2px] bg-white/80 rounded group-hover/hamburger:bg-[#ff6b00] transition-colors" />
              </div>
            </div>

            <div className="flex-1 relative overflow-hidden flex flex-col p-2.5 sm:p-3 gap-3">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff6b00]/10 rounded-full blur-[20px] pointer-events-none" />

              {/* Mobile Hero */}
              <div className="flex flex-col gap-1.5 sm:gap-2 relative z-10">
                <div className="w-10 sm:w-12 h-1 sm:h-1.5 bg-[#ff6b00] rounded" />
                <div className="w-full h-3 sm:h-4 bg-white rounded" />
                <div className="w-4/5 h-3 sm:h-4 bg-white rounded" />
                <div className="w-full h-1 sm:h-1.5 bg-[#94a3b8] rounded mt-0.5 sm:mt-1" />
                <div className="w-3/4 h-1 sm:h-1.5 bg-[#94a3b8] rounded" />
                <div className="w-14 sm:w-16 h-4 sm:h-5 bg-[#ff6b00] rounded mt-1 sm:mt-1.5 hover:scale-105 transition-transform shadow-[0_0_10px_rgba(255,107,0,0.3)] cursor-pointer" />
              </div>

              {/* Mobile Cards Stacked */}
              <div className="flex flex-col gap-2 sm:gap-2.5 flex-1 relative z-10">
                <div className="flex-1 bg-[#0a1220] border border-white/[0.08] rounded flex items-center p-2 gap-2 hover:border-[#ff6b00]/50 transition-colors cursor-pointer group/card">
                  <div className="w-8 sm:w-10 h-full bg-[#121c2d] rounded flex items-center justify-center group-hover/card:bg-[#152238]">
                    <span className="material-symbols-outlined text-white/10 text-[10px] sm:text-xs">design_services</span>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <div className="w-3/4 h-1 sm:h-1.5 bg-white/80 rounded" />
                    <div className="w-full h-0.5 sm:h-1 bg-[#94a3b8] rounded" />
                  </div>
                </div>
                <div className="flex-1 bg-[#0a1220] border border-white/[0.08] rounded flex items-center p-2 gap-2 hover:border-[#ff6b00]/50 transition-colors cursor-pointer group/card">
                  <div className="w-8 sm:w-10 h-full bg-[#121c2d] rounded flex items-center justify-center group-hover/card:bg-[#152238]">
                    <span className="material-symbols-outlined text-white/10 text-[10px] sm:text-xs">code</span>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <div className="w-3/4 h-1 sm:h-1.5 bg-white/80 rounded" />
                    <div className="w-full h-0.5 sm:h-1 bg-[#94a3b8] rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Overlay Status */}
            <div className="absolute top-10 sm:top-12 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur text-[6px] sm:text-[7px] font-['JetBrains_Mono'] text-white/80 px-2 py-0.5 rounded border border-white/10 opacity-0 group-hover/mobile:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
              RESPONSIVE VIEW
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* View Switcher */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center bg-[#081220]/80 backdrop-blur-md border border-white/[0.1] p-1 rounded-full shadow-2xl">
         <button onClick={() => setViewState('DESKTOP')} className={`px-4 py-1.5 rounded-full font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest transition-colors ${viewState === 'DESKTOP' ? 'bg-[#ff6b00] text-[#050b14] font-bold' : 'text-white/50 hover:text-white'}`}>DESKTOP</button>
         <button onClick={() => setViewState('FLOW')} className={`px-4 py-1.5 rounded-full font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest transition-colors ${viewState === 'FLOW' ? 'bg-white/10 text-white font-bold' : 'text-white/50 hover:text-white'}`}>FLOW</button>
         <button onClick={() => setViewState('MOBILE')} className={`px-4 py-1.5 rounded-full font-['JetBrains_Mono'] text-[9px] uppercase tracking-widest transition-colors ${viewState === 'MOBILE' ? 'bg-[#ff6b00] text-[#050b14] font-bold' : 'text-white/50 hover:text-white'}`}>MOBILE</button>
      </div>
    </div>
  );
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { scrollYProgress, scrollY } = useScroll();
  
  // Parallax elements
  const heroVisualY = useTransform(scrollY, [0, 1000], [0, 50]);
  const heroTextY = useTransform(scrollY, [0, 1000], [0, -30]);

  // Typography Section Scroll
  const typoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: typoScroll } = useScroll({ target: typoRef, offset: ["start end", "end start"] });
  const designX = useTransform(typoScroll, [0, 1], [-100, 50]);
  const developX = useTransform(typoScroll, [0, 1], [100, -50]);
  const deliverX = useTransform(typoScroll, [0, 1], [-50, 100]);

  // Sticky Process Section State
  const [activeProcessIdx, setActiveProcessIdx] = useState(0);
  
  const processSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: processProgress } = useScroll({
    target: processSectionRef,
    offset: ["start start", "end end"]
  });

  const mobileVisualRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: mobileProgress } = useScroll({
    target: mobileVisualRef,
    offset: ["start 80%", "end 20%"]
  });

  // Hero Pointer Interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), { stiffness: 150, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), { stiffness: 150, damping: 30 });
  const translateX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 150, damping: 30 });
  const translateY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-4, 4]), { stiffness: 150, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 1024) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Button Magnetic Hover
  const ButtonMagnetic: React.FC<{ children: React.ReactNode; onClick: () => void; className?: string; primary?: boolean }> = ({ children, onClick, className, primary }) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const tx = useSpring(mx, { stiffness: 150, damping: 15 });
    const ty = useSpring(my, { stiffness: 150, damping: 15 });

    const handleMove = (e: React.MouseEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!btnRef.current) return;
      const rect = btnRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
      mx.set(x);
      my.set(y);
    };

    const handleLeave = () => {
      mx.set(0);
      my.set(0);
    };

    const baseStyle = primary 
      ? "bg-[#ff6b00] text-[#081426] hover:bg-[#ff8a00] hover:text-black border-transparent shadow-lg shadow-[#ff6b00]/10" 
      : "bg-transparent text-white border border-white/[0.16] hover:border-white hover:bg-white/[0.04]";

    return (
      <motion.button
        ref={btnRef}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: tx, y: ty }}
        className={`group relative overflow-hidden inline-flex items-center justify-center font-['JetBrains_Mono'] text-sm uppercase tracking-wider font-bold px-8 py-4 rounded transition-colors duration-300 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6b00] ${baseStyle} ${className || ''}`}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  };

  return (
    <div className="flex flex-col w-full overflow-x-clip bg-[#030e20]">
      
      {/* 1. HERO */}
      <section className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-20 pb-20 lg:pb-32 flex items-center min-h-[90vh]">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#ff6b00]/5 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full relative z-10">
          
          <motion.div 
            className="lg:col-span-6 flex flex-col justify-center"
            style={{ y: heroTextY }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold">
                DIGITAL DESIGN + DEVELOPMENT
              </span>
            </div>

            <h1 className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-[5.5rem] font-bold uppercase text-white tracking-tight leading-[1.05] mb-6">
              WE TURN IDEAS<br />
              <span className="text-[#ff6b00]">INTO DIGITAL</span><br />
              EXPERIENCES.
            </h1>

            <p className="font-['DM_Sans'] text-lg sm:text-xl text-[#94a3b8] max-w-lg leading-relaxed mb-10">
              CreateOn designs and builds websites, digital products and software experiences for businesses, teams and ambitious ideas.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <ButtonMagnetic primary onClick={() => onNavigate('/contact')}>
                START A PROJECT <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1.5">arrow_forward</span>
              </ButtonMagnetic>
              <ButtonMagnetic onClick={() => onNavigate('/services')}>
                EXPLORE WHAT WE BUILD <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1.5">arrow_forward</span>
              </ButtonMagnetic>
            </div>
            
            <div className="font-['JetBrains_Mono'] text-[0.6875rem] uppercase tracking-widest text-[#94a3b8]">
              DESIGN. DEVELOPMENT. DIGITAL GROWTH.
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-6 h-[500px] lg:h-[600px] relative w-full lg:perspective-[1200px]"
            style={{ y: heroVisualY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div 
              className="w-full h-full bg-[#101c2e] border border-white/[0.1] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col cursor-crosshair"
              style={{ rotateX, rotateY, x: translateX, y: translateY }}
            >
              <div className="bg-[#071325] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between z-20">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="font-['JetBrains_Mono'] text-[0.625rem] text-[#94a3b8] uppercase tracking-wider flex items-center gap-2">
                  <span className="material-symbols-outlined text-[10px] text-[#ff6b00]">draw</span>
                  DIGITAL EXPERIENCE IN MOTION
                </div>
              </div>

              <div className="flex-1 p-6 relative overflow-hidden bg-gradient-to-br from-[#101c2e] to-[#071325]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                <div className="relative h-full flex flex-col gap-4">
                  <div className="w-full h-10 border border-white/[0.06] bg-white/[0.02] rounded-lg flex items-center justify-between px-4 group/nav transition-all duration-300 hover:bg-white/[0.04]">
                    <div className="w-24 h-3 bg-white/10 rounded" />
                    <div className="flex gap-3">
                      <div className="w-10 h-2 bg-white/10 rounded" />
                      <div className="w-10 h-2 bg-white/10 rounded" />
                      <div className="w-12 h-2 bg-[#ff6b00]/40 rounded" />
                    </div>
                    <div className="absolute -top-3 right-4 opacity-0 group-hover/nav:opacity-100 transition-opacity">
                      <span className="font-['JetBrains_Mono'] text-[10px] text-[#ff6b00] bg-[#101c2e] px-2 py-0.5 border border-[#ff6b00]/20 rounded">NAVIGATION SCHEMA</span>
                    </div>
                  </div>

                  <div className="flex-1 flex gap-4">
                    <div className="flex-1 border border-white/[0.06] bg-white/[0.02] rounded-lg p-4 flex flex-col gap-3 group/design hover:border-[#fabd00]/30 transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/design:opacity-100 transition-opacity z-10 bg-[#101c2e]/60 backdrop-blur-[2px]">
                        <span className="font-['JetBrains_Mono'] text-xs text-[#fabd00] font-bold uppercase tracking-widest border border-[#fabd00]/30 px-3 py-1 rounded bg-[#101c2e]">DESIGN</span>
                      </div>
                      <div className="w-3/4 h-5 bg-white/10 rounded" />
                      <div className="w-1/2 h-3 bg-white/10 rounded" />
                      <div className="w-full h-24 bg-white/5 rounded mt-auto border border-white/[0.04]" />
                    </div>
                    
                    <div className="flex-[1.5] border border-white/[0.06] bg-white/[0.02] rounded-lg p-4 flex flex-col gap-2 group/dev hover:border-emerald-400/30 transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/dev:opacity-100 transition-opacity z-10 bg-[#101c2e]/60 backdrop-blur-[2px]">
                        <span className="font-['JetBrains_Mono'] text-xs text-emerald-400 font-bold uppercase tracking-widest border border-emerald-400/30 px-3 py-1 rounded bg-[#101c2e]">DEVELOPMENT</span>
                      </div>
                      <div className="font-['JetBrains_Mono'] text-[10px] text-[#94a3b8] opacity-50">&lt;Component&gt;</div>
                      <div className="w-11/12 h-2 bg-emerald-400/20 rounded ml-2" />
                      <div className="w-9/12 h-2 bg-emerald-400/20 rounded ml-2" />
                      <div className="w-10/12 h-2 bg-emerald-400/20 rounded ml-2" />
                      <div className="w-7/12 h-2 bg-emerald-400/20 rounded ml-2" />
                      <div className="font-['JetBrains_Mono'] text-[10px] text-[#94a3b8] opacity-50">&lt;/Component&gt;</div>
                    </div>
                  </div>

                  <div className="h-24 border border-white/[0.06] bg-white/[0.02] rounded-lg p-3 flex gap-3 group/resp hover:border-[#d7e3fc]/30 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/resp:opacity-100 transition-opacity z-10 bg-[#101c2e]/60 backdrop-blur-[2px]">
                        <span className="font-['JetBrains_Mono'] text-xs text-[#d7e3fc] font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded bg-[#101c2e]">RESPONSIVE & SEO-READY</span>
                    </div>
                    <div className="w-16 h-full bg-white/5 rounded border border-white/[0.04] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[10px] text-white/20">smartphone</span>
                    </div>
                    <div className="flex-1 h-full bg-white/5 rounded border border-white/[0.04] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[10px] text-white/20">desktop_windows</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between pointer-events-none">
                  <div className="font-['JetBrains_Mono'] text-[10px] text-[#94a3b8] tracking-widest flex items-center gap-2">
                    IDEA <span className="text-[#ff6b00]">→</span> DESIGN <span className="text-[#ff6b00]">→</span> DEVELOP <span className="text-[#ff6b00]">→</span> LAUNCH
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT CREATEON */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08]">
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold">
              ABOUT CREATEON
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-7xl font-bold uppercase text-white tracking-tight leading-[1.05] mb-8">
            WE BUILD THE<br />
            DIGITAL LAYER<br />
            <span className="text-white/40">BEHIND GOOD IDEAS.</span>
          </h2>
          <div className="space-y-6 max-w-3xl mb-12">
            <p className="font-['DM_Sans'] text-xl sm:text-2xl text-[#94a3b8] leading-relaxed">
              CreateOn Software is a growing digital studio focused on creating thoughtful, practical and high-quality digital experiences. We work across design and development to help businesses turn ideas into websites, digital products and custom web experiences.
            </p>
            <p className="font-['DM_Sans'] text-lg sm:text-xl text-[#94a3b8] leading-relaxed">
              We care about how a product looks, how it works and how it performs in the real world — not just how it appears in a presentation.
            </p>
          </div>
          <div className="grid grid-cols-2 max-w-md gap-4 border-t border-white/[0.08] pt-6 font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-[#d7e3fc]">
            <div>
              <div className="text-white font-semibold">EST. '26</div>
              <div className="text-[#94a3b8]">CHENNAI STUDIO</div>
            </div>
            <div>
              <div className="text-white font-semibold">DESIGN + DEVELOPMENT</div>
              <div className="text-[#94a3b8]">DIGITAL EXPERIENCES</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE HELP YOU DO */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold block mb-4">
              WHAT WE HELP YOU DO
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight mb-6">
              YOUR DIGITAL<br />PRESENCE<br />SHOULD WORK<br />HARDER.
            </h2>
            <p className="font-['DM_Sans'] text-lg text-[#94a3b8] leading-relaxed">
              Whether you are launching a business, improving an existing website or building a digital product, we focus on creating experiences that are clear, useful and built around your goals.
            </p>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                num: "01",
                title: "BUILD A STRONG ONLINE PRESENCE",
                desc: "Create a professional website that gives your business a clear and credible digital home."
              },
              {
                num: "02",
                title: "TURN VISITORS INTO CUSTOMERS",
                desc: "Design experiences with clear navigation, strong calls to action and a better path from discovery to enquiry."
              },
              {
                num: "03",
                title: "BRING PRODUCTS ONLINE",
                desc: "Create e-commerce experiences and digital interfaces that make products and services easier to discover and use."
              },
              {
                num: "04",
                title: "BUILD SOMETHING CUSTOM",
                desc: "Develop web applications, internal systems and digital products around specific business requirements."
              }
            ].map((useCase) => (
              <div key={useCase.num} className="border-t border-white/[0.08] pt-6">
                <span className="font-['JetBrains_Mono'] text-sm text-[#ff6b00] font-bold block mb-4">
                  {useCase.num}
                </span>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="font-['DM_Sans'] text-base text-[#94a3b8] leading-relaxed">
                  {useCase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT WE BUILD (Interactive Editorial List) */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08]">
        <div className="flex items-center gap-2 mb-12">
          <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold">
            WHAT WE BUILD
          </span>
        </div>
        
        <div className="flex flex-col border-t border-white/[0.08]">
          {[
            { title: "WEB DESIGN", desc: "Interfaces designed around your brand, audience and goals." },
            { title: "WEB DEVELOPMENT", desc: "Responsive, maintainable websites engineered for real-world use." },
            { title: "E-COMMERCE", desc: "Digital storefronts designed around usability, product discovery and conversion." },
            { title: "CMS DEVELOPMENT", desc: "Flexible content experiences that make ongoing updates easier." },
            { title: "RESPONSIVE EXPERIENCES", desc: "Interfaces designed to work naturally across desktop, tablet and mobile." },
            { title: "SEO-READY DEVELOPMENT", desc: "Clean technical foundations that support discoverability, accessibility and performance." },
            { title: "DIGITAL PRODUCTS", desc: "Custom web applications and interactive digital experiences." },
            { title: "MAINTENANCE & SUPPORT", desc: "Post-launch improvements, fixes, updates and ongoing support." }
          ].map((service, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/[0.08] py-6 sm:py-8 cursor-pointer hover:px-4 transition-all duration-300 overflow-hidden"
              onClick={() => onNavigate('/services')}
            >
              <div className="flex items-baseline gap-4 sm:gap-8">
                <span className="font-['JetBrains_Mono'] text-sm text-[#94a3b8] group-hover:text-[#fabd00] transition-colors">
                  0{idx + 1}
                </span>
                <h3 className="font-['Space_Grotesk'] text-2xl sm:text-4xl font-bold uppercase text-white group-hover:text-[#d7e3fc] group-hover:translate-x-2 transition-transform duration-300">
                  {service.title}
                </h3>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0 pl-12 md:pl-0">
                <span className="font-['DM_Sans'] text-sm text-[#94a3b8] max-w-sm h-0 opacity-0 overflow-hidden md:h-auto md:opacity-0 md:-translate-x-4 group-hover:h-auto group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  {service.desc}
                </span>
                <span className="hidden md:flex w-10 h-10 rounded-full border border-white/[0.1] items-center justify-center group-hover:bg-[#fabd00] group-hover:border-[#fabd00] transition-colors">
                  <span className="material-symbols-outlined text-white/50 group-hover:text-[#081426] transition-colors">arrow_forward</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BEYOND THE SCREEN */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08] bg-[#071325]/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold block mb-4">
              BEYOND THE SCREEN
            </span>
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight mb-6">
              GOOD DESIGN<br />HAS TO WORK.
            </h2>
            <p className="font-['DM_Sans'] text-lg text-[#94a3b8] max-w-md leading-relaxed">
              We design with the real world in mind — different screen sizes, changing content, real users, business requirements and the practical realities of development.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 lg:pt-10">
            {[
              {
                title: "RESPONSIVE BY DEFAULT",
                desc: "Designed to adapt across phones, tablets and desktops."
              },
              {
                title: "CLEAR BY DESIGN",
                desc: "Simple navigation and intentional information hierarchy."
              },
              {
                title: "READY FOR REAL USE",
                desc: "Interfaces are designed with implementation and maintainability in mind."
              },
              {
                title: "BUILT TO EVOLVE",
                desc: "Websites and products should be able to grow with the business."
              }
            ].map((point, idx) => (
              <div key={idx} className="group flex flex-col gap-3">
                <div className="w-8 h-[2px] bg-white/20 group-hover:bg-[#ff6b00] group-hover:w-12 transition-all duration-300" />
                <h4 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mt-2">
                  {point.title}
                </h4>
                <p className="font-['DM_Sans'] text-sm text-[#94a3b8] leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FROM IDEA TO LAUNCH (Sticky Process) */}
      <section ref={processSectionRef} className="relative w-full border-t border-white/[0.08]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row relative">
            
            {/* Desktop Sticky Left Column */}
            <div className="hidden lg:block lg:w-[45%] relative z-10 pr-12">
              <div className="sticky top-32 w-full pt-10 pb-20">
                <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold mb-6 block">
                  FROM IDEA TO LAUNCH
                </span>
                <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight mb-4">
                  A DESIGNED<br />
                  <span className="text-[#fabd00]">PROGRESSION.</span>
                </h2>
                <ProcessVisual progress={processProgress} />
              </div>
            </div>

            {/* Mobile Inline Left Column */}
            <div ref={mobileVisualRef} className="lg:hidden w-full flex flex-col justify-start z-10 pt-20 pb-10">
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold mb-6 block">
                FROM IDEA TO LAUNCH
              </span>
              <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-4">
                A DESIGNED<br />
                <span className="text-[#fabd00]">PROGRESSION.</span>
              </h2>
              <ProcessVisual progress={mobileProgress} />
            </div>

            {/* Right Scrolling Column */}
            <div className="lg:w-[55%] flex flex-col relative z-0 pb-32">
              {[
                { step: "UNDERSTAND", desc: "We learn about the business, audience, goals and the problem that needs solving." },
                { step: "SHAPE", desc: "We turn those inputs into structure, content hierarchy, user flows and a clear visual direction." },
                { step: "BUILD", desc: "We translate the design into a responsive digital experience and refine it through iteration." },
                { step: "DELIVER", desc: "We test, polish, launch and help keep the experience working after release." }
              ].map((step, idx) => (
                <motion.div 
                  key={idx} 
                  onViewportEnter={() => setActiveProcessIdx(idx)}
                  viewport={{ margin: "-40% 0px -40% 0px" }}
                  className="min-h-[85vh] py-20 flex flex-col justify-center"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className={`font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold transition-colors ${activeProcessIdx === idx ? 'text-[#ff6b00]' : 'text-white/20'}`}>
                      0{idx + 1}
                    </span>
                    <div className={`h-[2px] transition-all duration-700 ease-out ${activeProcessIdx === idx ? 'w-24 bg-[#ff6b00]' : 'w-8 bg-white/20'}`} />
                  </div>
                  <h3 className={`font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold uppercase transition-colors duration-500 ${activeProcessIdx === idx ? 'text-white' : 'text-white/40'}`}>
                    {step.step}
                  </h3>
                  <p className={`font-['DM_Sans'] text-lg text-[#94a3b8] max-w-md transition-all duration-500 mt-4 ${activeProcessIdx === idx ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-40'}`}>
                    {step.desc}
                  </p>
                  <div className={`mt-6 inline-flex items-center gap-2 border border-white/10 px-4 py-2 rounded font-['JetBrains_Mono'] text-xs uppercase tracking-wider text-white/50 transition-all duration-500 ${activeProcessIdx === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 hidden'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse" />
                    STAGE {idx + 1} ACTIVE
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. DIGITAL EXPERIENCE DEMONSTRATION */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight mb-6">
              BUILT FOR THE SCREEN.<br />
              <span className="text-[#94a3b8]">DESIGNED FOR PEOPLE.</span>
            </h2>
            <p className="font-['DM_Sans'] text-lg text-[#94a3b8] max-w-md leading-relaxed mb-8">
              We think about how a digital experience moves from a desktop screen to a phone in someone's hand. Layout, hierarchy, interaction and responsiveness all have to work together.
            </p>
            <div className="flex gap-3 mb-10">
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-white border border-white/20 px-4 py-2 rounded">DESKTOP</span>
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-white border border-white/20 px-4 py-2 rounded">TABLET</span>
              <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-white border border-white/20 px-4 py-2 rounded">MOBILE</span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white">
              ONE EXPERIENCE.<br />DIFFERENT SCREENS.
            </h3>
          </div>

          <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[500px]">
            <div className="absolute right-0 bottom-0 top-0 left-10 sm:left-20 z-10 w-[80%] h-full bg-[#101c2e] border border-white/[0.2] rounded-l-xl lg:rounded-xl overflow-hidden shadow-2xl flex flex-col transition-transform hover:-translate-y-2 duration-500">
              <div className="h-6 sm:h-8 bg-[#071325] border-b border-white/[0.1] flex items-center px-4 gap-1.5 shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex-1 bg-[#1f2a3d] p-6 sm:p-8 flex flex-col gap-6">
                <div className="w-1/3 h-4 sm:h-6 bg-white/10 rounded" />
                <div className="w-full h-32 sm:h-48 bg-white/5 rounded" />
                <div className="grid grid-cols-3 gap-6 flex-1">
                  <div className="bg-white/5 rounded" />
                  <div className="bg-white/5 rounded" />
                  <div className="bg-white/5 rounded" />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-[-10%] sm:bottom-0 left-0 z-20 w-[30%] sm:w-[25%] h-[60%] sm:h-[70%] bg-[#101c2e] border-[4px] border-[#071325] rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-2xl flex flex-col ring-1 ring-white/[0.2] transition-transform hover:-translate-y-4 duration-500">
              <div className="h-4 sm:h-6 bg-[#071325] w-full shrink-0 flex justify-center">
                <div className="w-1/3 h-full bg-black rounded-b-xl" />
              </div>
              <div className="flex-1 bg-[#1f2a3d] p-4 flex flex-col gap-4">
                 <div className="w-1/2 h-2 sm:h-3 bg-white/10 rounded" />
                 <div className="w-full h-24 sm:h-32 bg-white/5 rounded" />
                 <div className="w-full h-8 bg-white/5 rounded" />
                 <div className="w-full flex-1 bg-white/5 rounded" />
              </div>
            </div>
            <div className="absolute -bottom-12 right-0">
              <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-widest text-[#94a3b8] opacity-50">
                CREATEON DIGITAL EXPERIENCE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DESIGN + DEVELOPMENT */}
      <section className="w-full border-t border-white/[0.08] bg-[#ff6b00]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 text-[#081426]">
          <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest font-bold block mb-4">
            HOW WE THINK
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-tight mb-8">
            DESIGN SHOULD<br />SURVIVE DEVELOPMENT.
          </h2>
          <p className="font-['DM_Sans'] text-xl lg:text-2xl font-medium max-w-3xl leading-relaxed mb-16 opacity-90">
            A beautiful interface means very little if it becomes difficult to use, impossible to maintain or breaks when it reaches a real device.
          </p>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold uppercase border-t border-[#081426]/20 pt-10">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>DESIGN</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="hidden lg:block text-[#081426]/30">→</motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>SYSTEM</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="hidden lg:block text-[#081426]/30">→</motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>DEVELOPMENT</motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="hidden lg:block text-[#081426]/30">→</motion.div>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>EXPERIENCE</motion.div>
          </div>
          
          <p className="font-['DM_Sans'] text-lg font-medium max-w-2xl leading-relaxed mt-16 opacity-80 border-l-[3px] border-[#081426] pl-6">
            We bring design decisions and implementation thinking together early, so what looks good also has a clear path to becoming a working product.
          </p>
        </div>
      </section>

      {/* 9. WHO WE BUILD FOR */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold block mb-4">
              WHO WE BUILD FOR
            </span>
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-bold uppercase text-white tracking-tight mb-6">
              DIFFERENT IDEAS.<br />ONE DIGITAL PARTNER.
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-12 border-l border-white/[0.08] pl-6 lg:pl-12">
            {[
              {
                title: "LOCAL BUSINESSES",
                desc: "Restaurants, cafés, clinics, salons, stores and growing businesses that need a stronger online presence."
              },
              {
                title: "STARTUPS & NEW IDEAS",
                desc: "Early-stage teams turning a concept into a polished digital experience."
              },
              {
                title: "PROFESSIONALS & CREATORS",
                desc: "Personal brands, portfolios and service businesses that need a credible digital home."
              },
              {
                title: "TEAMS & ORGANIZATIONS",
                desc: "Groups that need custom websites, internal tools or digital systems."
              }
            ].map((audience, idx) => (
              <div key={idx}>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold uppercase text-white mb-3">
                  {audience.title}
                </h3>
                <p className="font-['DM_Sans'] text-lg text-[#94a3b8] leading-relaxed">
                  {audience.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. WHAT YOU CAN EXPECT */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08] bg-[#101c2e]/40">
        <div className="mb-16">
          <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold block mb-4">
            WORKING WITH CREATEON
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight">
            NO MYSTERY.<br />JUST A CLEAR PROCESS.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { title: "CLEAR COMMUNICATION", desc: "Know what is being designed, built and refined at every stage." },
            { title: "DESIGN WITH PURPOSE", desc: "Visual decisions are made around your audience and goals." },
            { title: "RESPONSIVE FROM THE START", desc: "Mobile and desktop are considered throughout the build." },
            { title: "SUPPORT AFTER LAUNCH", desc: "The relationship does not automatically end when the website goes live." }
          ].map((point, idx) => (
            <div key={idx} className="border-t border-white/[0.08] pt-6">
              <h3 className="font-['Space_Grotesk'] text-lg font-bold uppercase text-white mb-3">
                {point.title}
              </h3>
              <p className="font-['DM_Sans'] text-base text-[#94a3b8] leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. INTERACTIVE TYPOGRAPHY */}
      <section ref={typoRef} className="w-full overflow-hidden py-32 border-t border-b border-white/[0.08] bg-[#ff6b00] flex flex-col justify-center">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 mb-8 w-full">
          <span className="font-['JetBrains_Mono'] text-sm uppercase tracking-widest font-bold text-[#081426]/70 block text-center">
            FROM IDEA TO INTERFACE TO LAUNCH.
          </span>
        </div>
        <div className="flex flex-col gap-2 font-['Space_Grotesk'] text-[6rem] sm:text-[10rem] lg:text-[14rem] font-bold uppercase leading-[0.8] text-[#081426] whitespace-nowrap opacity-90">
          <motion.div style={{ x: designX }} className="text-left">DESIGN.</motion.div>
          <motion.div style={{ x: developX }} className="text-center">DEVELOP.</motion.div>
          <motion.div style={{ x: deliverX }} className="text-right">DELIVER.</motion.div>
        </div>
      </section>

      {/* 12. TECHNICAL CRAFT SECTION */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32">
        <div className="max-w-4xl">
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-7xl font-bold uppercase text-white tracking-tight mb-8">
            DESIGN THAT<br />SURVIVES<br />
            <span className="text-[#fabd00]">DEVELOPMENT.</span>
          </h2>
          <p className="font-['DM_Sans'] text-xl text-[#94a3b8] leading-relaxed mb-12 max-w-3xl">
            We think about responsiveness, usability, performance, accessibility, maintainability and the practical requirements of turning a design into a working product.
          </p>
          <div className="flex flex-wrap gap-4 font-['JetBrains_Mono'] text-sm uppercase tracking-widest text-white">
            <span className="border border-white/20 px-4 py-2 rounded">RESPONSIVE</span>
            <span className="border border-white/20 px-4 py-2 rounded">ACCESSIBLE</span>
            <span className="border border-white/20 px-4 py-2 rounded">PERFORMANT</span>
            <span className="border border-white/20 px-4 py-2 rounded">MAINTAINABLE</span>
          </div>
        </div>
      </section>

      {/* 13. SMALL STUDIO PHILOSOPHY */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-32 border-t border-white/[0.08]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#ff6b00] font-semibold block mb-8">
            OUR APPROACH
          </span>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white tracking-tight leading-[1.2] mb-8">
            MAKE IT CLEAR.<br />
            MAKE IT USEFUL.<br />
            MAKE IT LAST.
          </h2>
          <p className="font-['DM_Sans'] text-lg lg:text-xl text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            We are interested in digital work that looks considered, feels intuitive and continues to make sense after the launch screen disappears.
          </p>
        </div>
      </section>

      {/* 14. FINAL CTA */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pb-24 lg:pb-32 text-center">
        <div className="bg-[#101c2e] border border-white/[0.08] rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col items-center">
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight mb-4">
            HAVE SOMETHING IN MIND?<br />
            <span className="text-[#ff6b00]">LET'S BUILD IT.</span>
          </h2>
          <p className="font-['DM_Sans'] text-lg text-[#94a3b8] max-w-xl mx-auto leading-relaxed mb-4">
            Have an idea, a business or a product that deserves a better digital experience?
          </p>
          <p className="font-['DM_Sans'] text-lg text-[#94a3b8] max-w-xl mx-auto leading-relaxed mb-10">
            Tell us what you're building, where you are now and what you want to improve. We'll take it from there.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
            <ButtonMagnetic primary onClick={() => onNavigate('/contact')} className="w-full sm:w-auto">
              START A PROJECT →
            </ButtonMagnetic>
            <ButtonMagnetic onClick={() => onNavigate('/contact')} className="w-full sm:w-auto">
              JUST SAY HELLO
            </ButtonMagnetic>
          </div>
        </div>
      </section>
    </div>
  );
};

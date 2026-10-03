import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, MotionValue, AnimatePresence } from 'motion/react';

interface HeroInteractiveVisualProps {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  translateX: MotionValue<number>;
  translateY: MotionValue<number>;
}

export const HeroInteractiveVisual: React.FC<HeroInteractiveVisualProps> = ({
  rotateX,
  rotateY,
  translateX,
  translateY
}) => {
  const [activeElement, setActiveElement] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect touch capability
    const touchMediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
    setIsTouchDevice(touchMediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches);
    touchMediaQuery.addEventListener('change', handler);
    return () => touchMediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    // Auto highlight first element on load if touch device
    if (isTouchDevice && !hasInteracted) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasInteracted) {
            setTimeout(() => {
              if (!hasInteracted) setActiveElement('nav');
            }, 500);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      if (visualRef.current) observer.observe(visualRef.current);
      return () => observer.disconnect();
    }
  }, [isTouchDevice, hasInteracted]);

  const handleTap = (element: string, e: React.MouseEvent | React.TouchEvent) => {
    if (!isTouchDevice) return;
    e.stopPropagation();
    setHasInteracted(true);
    setActiveElement(prev => prev === element ? null : element);
  };

  const handleBackgroundTap = () => {
    if (isTouchDevice) setActiveElement(null);
  };

  // Helper classes for hover/active states
  const getGroupClass = (id: string) => {
    if (isTouchDevice) {
      return activeElement === id ? 'border-[#ff6b00]/50 bg-white/[0.04] scale-[1.02]' : '';
    }
    return `hover:border-${id === 'design' ? '[#fabd00]' : id === 'dev' ? 'emerald-400' : id === 'resp' ? '[#d7e3fc]' : 'white'}/30 hover:bg-white/[0.04]`;
  };

  const getOverlayClass = (id: string) => {
    if (isTouchDevice) {
      return activeElement === id ? 'opacity-100' : 'opacity-0';
    }
    // We rely on standard Tailwind group-hover for desktop
    return 'opacity-0 group-hover:opacity-100';
  };

  return (
    <motion.div
      ref={visualRef}
      className="w-full h-full bg-[#101c2e] border border-white/[0.1] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col cursor-crosshair"
      style={{ rotateX, rotateY, x: translateX, y: translateY }}
      onClick={handleBackgroundTap}
    >
      <div className="bg-[#071325] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <div className="font-['JetBrains_Mono'] text-[10px] text-[#94a3b8] uppercase tracking-wider flex items-center gap-2">
          <span className="material-symbols-outlined text-[10px] text-[#ff6b00]">draw</span>
          DIGITAL EXPERIENCE IN MOTION
        </div>
      </div>

      <div className="flex-1 p-6 relative overflow-hidden bg-gradient-to-br from-[#101c2e] to-[#071325]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <AnimatePresence>
          {isTouchDevice && !hasInteracted && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.05, 1, 1.05, 1] }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                opacity: { duration: 0.5, ease: "easeOut" },
                scale: { duration: 3, ease: "easeInOut", times: [0, 0.2, 0.5, 0.7, 1] },
                y: { duration: 0.5, ease: "easeOut" }
              }}
              className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00] px-4 py-1.5 rounded-full font-['JetBrains_Mono'] text-[10px] font-bold tracking-widest flex items-center gap-2 shadow-lg backdrop-blur-sm"
            >
              TAP TO EXPLORE
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative h-full flex flex-col gap-4 z-10">
          {/* NAVIGATION */}
          <div 
            className={`w-full h-10 border border-white/[0.06] bg-white/[0.02] rounded-lg flex items-center justify-between px-4 group transition-all duration-300 relative ${!isTouchDevice ? 'cursor-default' : 'cursor-pointer p-4'} ${getGroupClass('nav')}`}
            onClick={(e) => handleTap('nav', e)}
          >
            <div className="w-24 h-3 bg-white/10 rounded" />
            <div className="flex gap-3">
              <div className="w-10 h-2 bg-white/10 rounded" />
              <div className="w-10 h-2 bg-white/10 rounded" />
              <div className="w-12 h-2 bg-[#ff6b00]/40 rounded" />
            </div>
            
            {/* Desktop Hover / Mobile Tap Detail */}
            <div className={`absolute -top-3 right-4 transition-all duration-300 z-20 ${getOverlayClass('nav')}`}>
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#ff6b00] bg-[#101c2e] px-2 py-0.5 border border-[#ff6b00]/20 rounded whitespace-nowrap shadow-lg">
                NAVIGATION SCHEMA
              </span>
            </div>
            
            {/* Mobile Detail Panel */}
            <div className={`absolute left-0 right-0 top-12 bg-[#0a1220] border border-[#ff6b00]/30 rounded-lg p-3 shadow-xl transition-all duration-300 z-30 ${isTouchDevice && activeElement === 'nav' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
              <div className="font-['JetBrains_Mono'] text-[10px] text-[#ff6b00] font-bold mb-1">NAVIGATION</div>
              <div className="text-[11px] text-[#94a3b8] leading-tight font-['DM_Sans']">Clear structure and intuitive paths help users move through the experience.</div>
            </div>
          </div>

          <div className="flex-1 flex gap-4">
            {/* DESIGN */}
            <div 
              className={`flex-1 border border-white/[0.06] bg-white/[0.02] rounded-lg p-4 flex flex-col gap-3 group transition-all duration-300 relative overflow-visible ${!isTouchDevice ? 'cursor-default' : 'cursor-pointer'} ${getGroupClass('design')}`}
              onClick={(e) => handleTap('design', e)}
            >
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-10 bg-[#101c2e]/60 backdrop-blur-[2px] rounded-lg ${getOverlayClass('design')}`}>
                <span className="font-['JetBrains_Mono'] text-xs text-[#fabd00] font-bold uppercase tracking-widest border border-[#fabd00]/30 px-3 py-1 rounded bg-[#101c2e] shadow-lg">DESIGN</span>
              </div>
              <div className="w-3/4 h-5 bg-white/10 rounded" />
              <div className="w-1/2 h-3 bg-white/10 rounded" />
              <div className="w-full h-24 bg-white/5 rounded mt-auto border border-white/[0.04]" />
              
              {/* Mobile Detail Panel */}
              <div className={`absolute left-0 right-0 -bottom-16 bg-[#0a1220] border border-[#fabd00]/30 rounded-lg p-3 shadow-xl transition-all duration-300 z-30 ${isTouchDevice && activeElement === 'design' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                <div className="font-['JetBrains_Mono'] text-[10px] text-[#fabd00] font-bold mb-1">DESIGN</div>
                <div className="text-[11px] text-[#94a3b8] leading-tight font-['DM_Sans']">Interfaces designed around your brand, audience and goals.</div>
              </div>
            </div>
            
            {/* DEVELOPMENT */}
            <div 
              className={`flex-[1.5] border border-white/[0.06] bg-white/[0.02] rounded-lg p-4 flex flex-col gap-2 group transition-all duration-300 relative overflow-visible ${!isTouchDevice ? 'cursor-default' : 'cursor-pointer'} ${getGroupClass('dev')}`}
              onClick={(e) => handleTap('dev', e)}
            >
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-10 bg-[#101c2e]/60 backdrop-blur-[2px] rounded-lg ${getOverlayClass('dev')}`}>
                <span className="font-['JetBrains_Mono'] text-xs text-emerald-400 font-bold uppercase tracking-widest border border-emerald-400/30 px-3 py-1 rounded bg-[#101c2e] shadow-lg">DEVELOPMENT</span>
              </div>
              <div className="font-['JetBrains_Mono'] text-[10px] text-[#94a3b8] opacity-50">&lt;Component&gt;</div>
              <div className="w-11/12 h-2 bg-emerald-400/20 rounded ml-2" />
              <div className="w-9/12 h-2 bg-emerald-400/20 rounded ml-2" />
              <div className="w-10/12 h-2 bg-emerald-400/20 rounded ml-2" />
              <div className="w-7/12 h-2 bg-emerald-400/20 rounded ml-2" />
              <div className="font-['JetBrains_Mono'] text-[10px] text-[#94a3b8] opacity-50">&lt;/Component&gt;</div>
              
              {/* Mobile Detail Panel */}
              <div className={`absolute left-0 right-0 -bottom-16 bg-[#0a1220] border border-emerald-400/30 rounded-lg p-3 shadow-xl transition-all duration-300 z-30 ${isTouchDevice && activeElement === 'dev' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                <div className="font-['JetBrains_Mono'] text-[10px] text-emerald-400 font-bold mb-1">DEVELOPMENT</div>
                <div className="text-[11px] text-[#94a3b8] leading-tight font-['DM_Sans']">Responsive, maintainable websites engineered for real-world use.</div>
              </div>
            </div>
          </div>

          {/* RESPONSIVE */}
          <div 
            className={`h-24 border border-white/[0.06] bg-white/[0.02] rounded-lg p-3 flex gap-3 group transition-all duration-300 relative overflow-visible ${!isTouchDevice ? 'cursor-default' : 'cursor-pointer'} ${getGroupClass('resp')}`}
            onClick={(e) => handleTap('resp', e)}
          >
            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-10 bg-[#101c2e]/60 backdrop-blur-[2px] rounded-lg ${getOverlayClass('resp')}`}>
                <span className="font-['JetBrains_Mono'] text-xs text-[#d7e3fc] font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded bg-[#101c2e] shadow-lg text-center leading-tight">RESPONSIVE & SEO-READY</span>
            </div>
            <div className="w-16 h-full bg-white/5 rounded border border-white/[0.04] flex items-center justify-center">
              <span className="material-symbols-outlined text-[10px] text-white/20">smartphone</span>
            </div>
            <div className="flex-1 h-full bg-white/5 rounded border border-white/[0.04] flex items-center justify-center">
              <span className="material-symbols-outlined text-[10px] text-white/20">desktop_windows</span>
            </div>
            
            {/* Mobile Detail Panel */}
            <div className={`absolute left-0 right-0 bottom-full mb-2 bg-[#0a1220] border border-[#d7e3fc]/30 rounded-lg p-3 shadow-xl transition-all duration-300 z-30 ${isTouchDevice && activeElement === 'resp' ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
              <div className="font-['JetBrains_Mono'] text-[10px] text-[#d7e3fc] font-bold mb-1">RESPONSIVE</div>
              <div className="text-[11px] text-[#94a3b8] leading-tight font-['DM_Sans']">The interface adapts across desktop, tablet and mobile.</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between pointer-events-none z-0">
          <div className="font-['JetBrains_Mono'] text-[10px] text-[#94a3b8] tracking-widest flex items-center gap-2">
            IDEA <span className="text-[#ff6b00]">→</span> DESIGN <span className="text-[#ff6b00]">→</span> DEVELOP <span className="text-[#ff6b00]">→</span> LAUNCH
          </div>
        </div>
      </div>
    </motion.div>
  );
};

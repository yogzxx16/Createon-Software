import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'motion/react';

// ─────────────────────────────────────────────────────────────────────────────
// ProcessShowcase
//
// Architecture: STRICT STICKY SCROLL SCENE
//
//   <section id="process">  height = 200vh
//     └── <div .sticky>     height = 100vh  (always fills the screen)
//          ├── LEFT: Responsive demo  (user-click controlled only)
//          └── RIGHT: Text rail      (driven by useScroll)
//
// Progress (0→1) uses Framer Motion `useScroll` with offset `['start start', 'end end']`.
// This perfectly maps progress to the exact period the sticky container is held.
//
// No wheel events. No useSpring lag. No negative margins.
// DELIVER hits the center EXACTLY when the sticky scene is released.
// ─────────────────────────────────────────────────────────────────────────────

const SITE_BG = '#071325';

const STAGES = [
  {
    num: '01',
    title: 'UNDERSTAND',
    desc: 'We learn about the business, audience, goals and the problem that needs solving.',
  },
  {
    num: '02',
    title: 'SHAPE',
    desc: 'We turn those inputs into structure, content hierarchy, user flows and a clear visual direction.',
  },
  {
    num: '03',
    title: 'BUILD',
    desc: 'We translate the design into a responsive digital experience and refine it through iteration.',
  },
  {
    num: '04',
    title: 'DELIVER',
    desc: 'We test, polish, launch and help keep the experience working after release.',
  },
];

const STAGE_H = 200;

export const ProcessShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const [selectedDevice, setSelectedDevice] = useState<'system' | 'tablet' | 'mobile'>('system');
  const [activeIdx, setActiveIdx] = useState(0);

  // ── Drive progress directly from section's actual document position ────────
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // "start start" = when top of section hits top of viewport (sticky begins)
    // "end end" = when bottom of section hits bottom of viewport (sticky ends)
    offset: ['start start', 'end end'],
  });

  // ── Active stage index ────────────────────────────────────────────────────
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    setActiveIdx(Math.min(3, Math.floor(p * 4)));
  });

  // ── Rail Y translation ────────────────────────────────────────────────────
  const railY = useTransform(scrollYProgress, [0, 1], ['0px', `${-(3 * STAGE_H)}px`]);

  const deviceConfig = {
    system: { width: '85%', aspect: '16/10' },
    tablet: { width: '55%', aspect: '3/4' },
    mobile: { width: '34%', aspect: '9/19' },
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{
        position: 'relative',
        width: '100%',
        height: '160vh',          // 100vh sticky + 60vh scroll track
        backgroundColor: SITE_BG,
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* ── Sticky Scene ── 100vh, fills screen while 150vh track scrolls ── */}
      <div className="sticky top-0 w-full h-[100vh] overflow-hidden flex flex-col lg:block">

        {/* ── Title ───────────────────────────────────────────────────────── */}
        <div className="relative lg:absolute lg:top-[clamp(24px,5vh,52px)] lg:left-[clamp(20px,5vw,80px)] z-10 pt-8 px-5 lg:p-0 shrink-0">
          <span className="block font-['JetBrains_Mono'] text-[11px] tracking-[0.15em] uppercase text-[#fabd00] font-semibold mb-[7px]">
            FROM IDEA TO LAUNCH
          </span>
          <h2 className="font-['Space_Grotesk'] text-[clamp(26px,3.6vw,54px)] font-bold uppercase text-white tracking-[-0.02em] leading-[1.05] m-0">
            A DESIGNED<br />
            <span className="text-[#fabd00]">PROGRESSION.</span>
          </h2>
        </div>

        {/* ── Left: Responsive Demo ───────────────────────────────────────── */}
        <div className="relative lg:absolute lg:left-[clamp(20px,5vw,80px)] lg:top-[50vh] lg:-translate-y-1/2 w-full lg:w-[clamp(280px,42vw,580px)] h-[40vh] lg:h-[clamp(280px,52vh,580px)] flex flex-col z-5 px-5 lg:px-0 mt-6 lg:mt-0 shrink-0">
          {/* Outer stable box */}
          <div className="flex-1 flex flex-col bg-[#0a101d] border border-white/[0.09] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.4)]">
            {/* Demo area */}
            <div className="flex-1 min-h-0 flex items-center justify-center p-[clamp(14px,2.5vh,32px)] lg:px-[clamp(14px,2vw,32px)]">
              <motion.div
                layout
                style={{
                  width: deviceConfig[selectedDevice].width,
                  aspectRatio: deviceConfig[selectedDevice].aspect,
                  maxHeight: '100%',
                }}
                className="bg-[#0c121e] border-2 border-[#2a3441] rounded-[10px] overflow-hidden flex flex-col shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
                transition={{ type: 'spring', stiffness: 110, damping: 18 }}
              >
                {/* Browser chrome */}
                <div className="shrink-0 h-[20px] bg-[#1a2332] border-b border-white/5 flex items-center px-2 gap-[5px]">
                  <div className="w-[7px] h-[7px] rounded-full bg-[#ff5f56]" />
                  <div className="w-[7px] h-[7px] rounded-full bg-[#ffbd2e]" />
                  <div className="w-[7px] h-[7px] rounded-full bg-[#27c93f]" />
                </div>
                {/* UI skeleton */}
                <div className="flex-1 min-h-0 overflow-hidden bg-[#071325] p-[10px] flex flex-col gap-2">
                  <div className="flex justify-between items-center pb-[7px] border-b border-white/5 shrink-0">
                    <div className="h-[7px] w-[28%] bg-white/80 rounded-[3px]" />
                    <div className="h-[6px] w-[10%] bg-[#ff6b00] rounded-[3px]" />
                  </div>
                  <div className="shrink-0 bg-white/[0.03] border border-white/[0.08] rounded-md p-2 flex flex-col gap-1.5">
                    <div className="h-[8px] w-[70%] bg-white/85 rounded-[3px]" />
                    <div className="h-[8px] w-[50%] bg-white/85 rounded-[3px]" />
                    <div className="h-[13px] w-[48px] bg-[#ff6b00] rounded-[4px] mt-1 shadow-[0_0_10px_rgba(255,107,0,0.3)]" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 flex-1 min-h-0">
                    {[0, 1].map((i) => (
                      <div key={i} className="flex-[1_1_60px] min-h-[24px] bg-[#0c121e] border border-white/[0.08] rounded-[5px] p-1.5 flex flex-col gap-1">
                        <div className="flex-1 bg-white/[0.07] rounded-[3px]" />
                        <div className="h-[4px] w-[50%] bg-white/30 rounded-[2px]" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Device controls — always fully inside the box */}
            <div className="shrink-0 h-[50px] flex items-center justify-center border-t border-white/[0.06]">
              <div className="flex gap-1 p-[5px] bg-[#040a16]/95 border border-white/[0.09] rounded-full">
                {(['mobile', 'tablet', 'system'] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setSelectedDevice(d)}
                    className="px-[13px] py-[5px] rounded-full font-['JetBrains_Mono'] text-[9px] tracking-[0.1em] uppercase font-bold cursor-pointer transition-all duration-200 outline-none"
                    style={{
                      border: selectedDevice === d ? '1px solid rgba(255,107,0,0.45)' : '1px solid transparent',
                      backgroundColor: selectedDevice === d ? 'rgba(255,107,0,0.14)' : 'transparent',
                      color: selectedDevice === d ? '#ff6b00' : 'rgba(255,255,255,0.32)',
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Text Viewport + Rail ─────────────────────────────────── */}
        <div className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-[clamp(300px,46vw,640px)] flex-1 lg:h-full overflow-hidden z-5 px-5 lg:px-0 lg:pr-[clamp(20px,5vw,80px)]">
          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-[8vh] lg:h-[25vh] bg-gradient-to-b from-[#071325] to-transparent z-20 pointer-events-none" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-[8vh] lg:h-[25vh] bg-gradient-to-t from-[#071325] to-transparent z-20 pointer-events-none" />

          {/* Rail
              top: 50% = vertically centers within THIS viewport (works for both mobile stack and desktop split)
          */}
          <motion.div
            className="absolute left-0 lg:left-0 right-0 lg:right-[clamp(20px,5vw,80px)] z-10"
            style={{
              top: '50%',
              marginTop: `-${STAGE_H / 2}px`,
              y: railY,
            }}
          >
            {STAGES.map((stage, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-center pl-[clamp(18px,2.5vw,40px)] border-l-2 transition-all duration-500 ease-in-out"
                  style={{
                    height: `${STAGE_H}px`,
                    borderColor: isActive ? '#ff6b00' : 'rgba(255,255,255,0.07)',
                    opacity: isActive ? 1 : 0.18,
                  }}
                >
                  {/* Number + accent dash */}
                  <div className="flex items-center gap-[14px] mb-[10px]">
                    <span
                      className="font-['Space_Grotesk'] text-[clamp(24px,2.8vw,42px)] font-bold leading-none transition-colors duration-500"
                      style={{ color: isActive ? '#ff6b00' : 'rgba(255,255,255,0.12)' }}
                    >
                      {stage.num}
                    </span>
                    <div
                      className="h-[1px] transition-all duration-500 ease-in-out"
                      style={{
                        width: isActive ? '48px' : '18px',
                        backgroundColor: isActive ? '#ff6b00' : 'rgba(255,255,255,0.1)',
                      }}
                    />
                  </div>

                  {/* Heading */}
                  <h3
                    className="font-['Space_Grotesk'] text-[clamp(18px,2vw,32px)] font-bold uppercase tracking-[-0.01em] m-0 mb-[9px] transition-colors duration-500"
                    style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.22)' }}
                  >
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="font-['DM_Sans'] text-[clamp(12px,1vw,15px)] text-[#94a3b8] max-w-[360px] leading-[1.65] m-0 transition-opacity duration-500"
                    style={{ opacity: isActive ? 1 : 0 }}
                  >
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

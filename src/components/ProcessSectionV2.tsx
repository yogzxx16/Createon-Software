import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react';

/**
 * ProcessSectionV2 — Complete rebuild from scratch.
 *
 * Architecture:
 *   <section id="process">           total height = 300vh
 *     <div sticky top:0 h:100vh>     sticky scene — visually pinned
 *       LEFT:  ResponsiveDemo        device state controlled by click ONLY
 *       RIGHT: ProcessTextViewport   overflow:hidden, clips ProcessTextRail
 *                ProcessTextRail     physically translates vertically
 *                  01 UNDERSTAND
 *                  02 SHAPE
 *                  03 BUILD
 *                  04 DELIVER
 * useScroll offset: ['start start', 'end end']
 *   progress 0 = top of section at top of viewport (sticky begins)
 *   progress 1 = bottom of section at bottom of viewport (sticky releases)
 *   = 120vh of real scroll track on desktop (220vh total minus 100vh sticky)
 *   = 50vh of real scroll track on mobile (150vh total minus 100vh sticky)
 *
 * Rail translation: [0, 1] -> [0px, -(3 * STAGE_H)px]
 *   UNDERSTAND is centered at progress=0
 *   DELIVER    is centered at progress=1
 *
 * NO wheel events. NO deltaY. NO springs with lag.
 * NO wheelProgress. NO negative-margin hacks.
 * selectedDevice and activeIdx are NEVER coupled.
 */

const SITE_BG = '#071325';

// Each stage slot height in px.
// Rail translates 3 * STAGE_H total (stage 0 centered at start, stage 3 at end).
const STAGE_H = 200;

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

const DEVICE_CONFIG: Record<'system' | 'tablet' | 'mobile', { width: string; aspect: string }> = {
  system: { width: '88%',  aspect: '16/10' },
  tablet: { width: '56%',  aspect: '3/4'   },
  mobile: { width: '33%',  aspect: '9/19'  },
};

export const ProcessSectionV2: React.FC = () => {
  const trackRef = useRef<HTMLElement>(null);

  // Device state — NEVER coupled to scroll progress
  const [selectedDevice, setSelectedDevice] = useState<'system' | 'tablet' | 'mobile'>('system');

  // Active stage index — NEVER coupled to device state
  const [activeIdx, setActiveIdx] = useState(0);

  // useScroll with offset ['start start', 'end end']:
  //   progress 0 = section top at viewport top (sticky scene begins)
  //   progress 1 = section bottom at viewport bottom (sticky scene releases)
  //   Total scroll track = 220vh - 100vh = 120vh (desktop)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });

  // Update active stage from scroll progress only
  // [0.00, 0.25) -> 0 (UNDERSTAND)
  // [0.25, 0.50) -> 1 (SHAPE)
  // [0.50, 0.75) -> 2 (BUILD)
  // [0.75, 1.00] -> 3 (DELIVER)
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    setActiveIdx(Math.min(3, Math.floor(p * 4)));
  });

  // Physical rail translation — directly driven by scroll, no spring lag
  const railY = useTransform(scrollYProgress, [0, 1], ['0px', `${-(3 * STAGE_H)}px`]);

  return (
    <section
      ref={trackRef}
      id="process"
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: SITE_BG,
        borderTop: '1px solid rgba(255,255,255,0.07)',
      }}
      className="h-[150vh] md:h-[220vh]"
    >
      {/* Sticky scene: stays visually pinned while the scroll track advances */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Section title — top-left, never moves */}
        <div
          style={{
            position: 'absolute',
            top: 'clamp(20px,4vh,48px)',
            left: 'clamp(20px,5vw,80px)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <span
            style={{
              display: 'block',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#fabd00',
              fontWeight: 600,
              marginBottom: '7px',
            }}
          >
            FROM IDEA TO LAUNCH
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(26px,3.6vw,54px)',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            A DESIGNED<br />
            <span style={{ color: '#fabd00' }}>PROGRESSION.</span>
          </h2>
        </div>

        {/* Content row: LEFT (demo) + RIGHT (stages) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* LEFT: Responsive Demo box */}
          {/* The outer box is stable and never moves. Controls are INSIDE it. */}
          <div
            style={{
              flexShrink: 0,
              marginLeft: 'clamp(20px,5vw,80px)',
              width: 'clamp(240px,40vw,560px)',
              height: 'clamp(280px,52vh,560px)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#0a101d',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 0 60px rgba(0,0,0,0.4)',
              }}
            >
              {/* Preview area: one responsive device frame */}
              <div
                style={{
                  flex: 1,
                  minHeight: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'clamp(12px,2vh,28px)',
                }}
              >
                <motion.div
                  layout
                  style={{
                    width: DEVICE_CONFIG[selectedDevice].width,
                    aspectRatio: DEVICE_CONFIG[selectedDevice].aspect,
                    maxHeight: '100%',
                    backgroundColor: '#0c121e',
                    border: '2px solid #2a3441',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
                  }}
                  transition={{ type: 'spring', stiffness: 110, damping: 18 }}
                >
                  {/* Browser chrome */}
                  <div
                    style={{
                      flexShrink: 0,
                      height: '20px',
                      backgroundColor: '#1a2332',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 8px',
                      gap: '5px',
                    }}
                  >
                    <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
                    <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
                    <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#27c93f' }} />
                  </div>

                  {/* UI skeleton — same layout reflowed by aspect ratio */}
                  <div
                    style={{
                      flex: 1,
                      minHeight: 0,
                      overflow: 'hidden',
                      backgroundColor: SITE_BG,
                      padding: '10px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '7px',
                        borderBottom: '1px solid rgba(255,255,255,0.05)',
                        flexShrink: 0,
                      }}
                    >
                      <div style={{ height: 7, width: '28%', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: 3 }} />
                      <div style={{ height: 6, width: '10%', backgroundColor: '#ff6b00', borderRadius: 3 }} />
                    </div>
                    <div
                      style={{
                        flexShrink: 0,
                        backgroundColor: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: 6,
                        padding: '8px 10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 6,
                      }}
                    >
                      <div style={{ height: 8, width: '70%', backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: 3 }} />
                      <div style={{ height: 8, width: '50%', backgroundColor: 'rgba(255,255,255,0.85)', borderRadius: 3 }} />
                      <div
                        style={{
                          height: 13,
                          width: 48,
                          backgroundColor: '#ff6b00',
                          borderRadius: 4,
                          marginTop: 4,
                          boxShadow: '0 0 10px rgba(255,107,0,0.3)',
                        }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, flex: 1, minHeight: 0 }}>
                      {[0, 1].map((i) => (
                        <div
                          key={i}
                          style={{
                            flex: '1 1 60px',
                            minHeight: 24,
                            backgroundColor: '#0c121e',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: 5,
                            padding: '6px 7px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                          }}
                        >
                          <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: 3 }} />
                          <div style={{ height: 4, width: '50%', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 2 }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Device controls — always inside the outer box, never clipped */}
              <div
                style={{
                  flexShrink: 0,
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    gap: '4px',
                    padding: '5px 7px',
                    backgroundColor: 'rgba(4,10,22,0.95)',
                    border: '1px solid rgba(255,255,255,0.09)',
                    borderRadius: '999px',
                  }}
                >
                  {(['mobile', 'tablet', 'system'] as const).map((d) => (
                    <button
                      key={d}
                      id={`process-device-${d}`}
                      aria-pressed={selectedDevice === d}
                      onClick={() => setSelectedDevice(d)}
                      style={{
                        padding: '5px 13px',
                        borderRadius: '999px',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '9px',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        border: selectedDevice === d ? '1px solid rgba(255,107,0,0.45)' : '1px solid transparent',
                        backgroundColor: selectedDevice === d ? 'rgba(255,107,0,0.14)' : 'transparent',
                        color: selectedDevice === d ? '#ff6b00' : 'rgba(255,255,255,0.32)',
                        outline: 'none',
                      }}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Invisible clipping viewport + physically translating rail */}
          {/*
            This div is a pure clipping container.
            It has: overflow:hidden
            It has: NO border, NO background, NO card, NO outline
            It NEVER moves. It NEVER resizes.
            Its ONLY purpose: clip the moving rail.
          */}
          <div
            style={{
              flex: 1,
              alignSelf: 'stretch',
              position: 'relative',
              overflow: 'hidden',
              marginLeft: 'clamp(24px,3vw,60px)',
              marginRight: 'clamp(20px,5vw,80px)',
            }}
          >
            {/* Cosmetic top fade */}
            <div
              style={{
                position: 'absolute',
                inset: '0 0 auto 0',
                height: '28%',
                background: `linear-gradient(to bottom, ${SITE_BG} 0%, transparent 100%)`,
                zIndex: 20,
                pointerEvents: 'none',
              }}
            />
            {/* Cosmetic bottom fade */}
            <div
              style={{
                position: 'absolute',
                inset: 'auto 0 0 0',
                height: '28%',
                background: `linear-gradient(to top, ${SITE_BG} 0%, transparent 100%)`,
                zIndex: 20,
                pointerEvents: 'none',
              }}
            />

            {/*
              ProcessTextRail — physically translates vertically.
              All four stages exist simultaneously in one rail.
              The rail MOVES — it does not swap, mount/unmount, or use opacity-only transitions.

              top: 50% + marginTop: -(STAGE_H/2)
                -> stage 0 is vertically centered when rail Y = 0 (progress=0)
              y: railY (0 -> -(3*STAGE_H))
                -> stage 3 is vertically centered when rail Y = -(3*STAGE_H) (progress=1)
            */}
            <motion.div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50%',
                marginTop: `${-(STAGE_H / 2)}px`,
                y: railY,
                zIndex: 10,
              }}
            >
              {STAGES.map((stage, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={stage.num}
                    style={{
                      height: `${STAGE_H}px`,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      paddingLeft: 'clamp(18px,2.5vw,40px)',
                      borderLeft: `2px solid ${isActive ? '#ff6b00' : 'rgba(255,255,255,0.07)'}`,
                      opacity: isActive ? 1 : 0.18,
                      transition: 'opacity 0.45s ease, border-color 0.45s ease',
                    }}
                  >
                    {/* Number + accent dash */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '10px' }}>
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: 'clamp(24px,2.8vw,42px)',
                          fontWeight: 700,
                          lineHeight: 1,
                          color: isActive ? '#ff6b00' : 'rgba(255,255,255,0.12)',
                          transition: 'color 0.45s ease',
                        }}
                      >
                        {stage.num}
                      </span>
                      <div
                        style={{
                          height: '1px',
                          width: isActive ? '48px' : '18px',
                          backgroundColor: isActive ? '#ff6b00' : 'rgba(255,255,255,0.1)',
                          transition: 'width 0.5s ease, background-color 0.45s ease',
                        }}
                      />
                    </div>

                    {/* Stage heading */}
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 'clamp(18px,2.2vw,36px)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.01em',
                        color: isActive ? '#ffffff' : 'rgba(255,255,255,0.22)',
                        margin: '0 0 9px 0',
                        transition: 'color 0.45s ease',
                      }}
                    >
                      {stage.title}
                    </h3>

                    {/* Stage description */}
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 'clamp(12px,1.1vw,16px)',
                        color: '#94a3b8',
                        maxWidth: '400px',
                        lineHeight: 1.65,
                        margin: 0,
                        opacity: isActive ? 1 : 0,
                        transition: 'opacity 0.4s ease',
                      }}
                    >
                      {stage.desc}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

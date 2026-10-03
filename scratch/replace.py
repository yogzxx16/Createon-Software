import sys

with open('src/pages/HomePage.tsx', 'r') as f:
    text = f.read()

s = text.split('const ProcessVisual: React.FC<{ progress: any }> = ({ progress }) => {')
s2 = s[1].split('export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {')

new_process_visual = """const ProcessVisual: React.FC<{ progress: any }> = ({ progress }) => {
  // Understand Stage
  const understandOp = useTransform(progress, [0, 0.2, 0.25], [1, 1, 0]);
  const understandScale = useTransform(progress, [0, 0.25], [1, 0.95]);

  // Shape Stage
  const shapeOp = useTransform(progress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
  const shapeScale = useTransform(progress, [0.2, 0.25, 0.5], [0.95, 1, 0.95]);

  // Build Stage
  const buildOp = useTransform(progress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  const buildScale = useTransform(progress, [0.45, 0.5, 0.75], [0.95, 1, 0.95]);
  const buildSweep = useTransform(progress, [0.5, 0.6, 0.7], [0, 1, 0]);

  // Deliver Stage
  const deliverOp = useTransform(progress, [0.7, 0.75, 1], [0, 1, 1]);
  const deliverScale = useTransform(progress, [0.7, 0.75, 1], [0.95, 1, 1]);

  return (
    <div className="w-full h-full bg-[#050b14] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col pointer-events-none min-h-[300px]">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px]" />
       
       <div className="absolute top-4 left-6 z-50 flex flex-col gap-2">
         <div className="font-['JetBrains_Mono'] text-[9px] text-[#94a3b8] tracking-widest uppercase flex items-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-pulse" />
           DIGITAL EXPERIENCE IN MOTION
         </div>
       </div>

       <div className="flex-1 relative w-full h-full mt-10">
         {/* STAGE 1: UNDERSTAND */}
         <motion.div style={{ opacity: understandOp, scale: understandScale }} className="absolute inset-0 flex items-center justify-center p-6">
            <div className="flex flex-wrap gap-4 justify-center max-w-[80%]">
               <div className="px-6 py-3 bg-white/[0.02] border border-white/[0.1] rounded-full text-[#94a3b8] font-['JetBrains_Mono'] text-sm tracking-widest shadow-lg">AUDIENCE</div>
               <div className="px-6 py-3 bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00] rounded-full font-['JetBrains_Mono'] text-sm tracking-widest shadow-[0_0_15px_rgba(255,107,0,0.1)]">PROBLEM</div>
               <div className="px-6 py-3 bg-white/[0.02] border border-white/[0.1] rounded-full text-[#94a3b8] font-['JetBrains_Mono'] text-sm tracking-widest shadow-lg">GOALS</div>
               <div className="px-6 py-3 bg-white/[0.02] border border-white/[0.1] rounded-full text-[#94a3b8] font-['JetBrains_Mono'] text-sm tracking-widest shadow-lg">BUSINESS</div>
            </div>
         </motion.div>

         {/* STAGE 2: SHAPE (Wireframe) */}
         <motion.div style={{ opacity: shapeOp, scale: shapeScale }} className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-[85%] aspect-[16/10] bg-transparent border-[2px] border-dashed border-white/20 rounded-xl p-4 flex flex-col gap-4 max-w-[500px]">
               <div className="w-full h-10 border-[2px] border-dashed border-white/20 rounded flex items-center px-4 justify-between">
                  <div className="text-white/30 font-['JetBrains_Mono'] text-[10px]">NAVIGATION</div>
                  <div className="w-8 h-3 border-[2px] border-dashed border-white/20 rounded" />
               </div>
               <div className="flex-1 border-[2px] border-dashed border-white/20 rounded flex items-center justify-center relative overflow-hidden">
                  <div className="text-white/30 font-['JetBrains_Mono'] text-[10px]">HERO</div>
                  <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-white/[0.02]" />
               </div>
               <div className="flex gap-4 h-20 sm:h-24">
                  <div className="flex-1 border-[2px] border-dashed border-white/20 rounded flex items-center justify-center">
                     <div className="text-white/30 font-['JetBrains_Mono'] text-[10px]">CONTENT</div>
                  </div>
                  <div className="flex-1 border-[2px] border-dashed border-[#ff6b00]/40 rounded flex items-center justify-center bg-[#ff6b00]/5">
                     <div className="text-[#ff6b00]/60 font-['JetBrains_Mono'] text-[10px]">CTA</div>
                  </div>
               </div>
            </div>
         </motion.div>

         {/* STAGE 3: BUILD (Realistic interface inside simple frame) */}
         <motion.div style={{ opacity: buildOp, scale: buildScale }} className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-[85%] aspect-[16/10] bg-[#0c121e] border border-white/10 rounded-xl flex flex-col shadow-2xl overflow-hidden relative max-w-[500px]">
               <div className="h-6 sm:h-8 bg-[#1a2332] border-b border-white/[0.05] flex items-center px-3 gap-1.5 shrink-0">
                 <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                 <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                 <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
               </div>
               <div className="flex-1 bg-[#030914] p-4 sm:p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/5">
                     <div className="w-20 h-3 sm:h-4 bg-white/80 rounded" />
                     <div className="w-8 h-3 sm:h-4 bg-[#ff6b00] rounded" />
                  </div>
                  <div className="w-3/4 h-4 sm:h-6 bg-white/90 rounded mt-2 sm:mt-4" />
                  <div className="w-1/2 h-4 sm:h-6 bg-white/90 rounded" />
                  <div className="w-full h-1.5 sm:h-2 bg-white/20 rounded mt-2 sm:mt-4" />
                  <div className="w-5/6 h-1.5 sm:h-2 bg-white/20 rounded" />
                  <div className="w-24 sm:w-32 h-6 sm:h-8 bg-[#ff6b00] rounded mt-2 sm:mt-4" />
               </div>
               <motion.div 
                 className="absolute inset-0 bg-[#ff6b00]/10 pointer-events-none"
                 style={{ opacity: buildSweep }}
               />
            </div>
         </motion.div>

         {/* STAGE 4: DELIVER (Laptop + Phone) */}
         <motion.div style={{ opacity: deliverOp, scale: deliverScale }} className="absolute inset-0 flex items-center justify-center p-4 lg:p-6">
            <div className="relative w-[90%] sm:w-[85%] aspect-[16/10] max-w-[600px]">
               {/* LAPTOP */}
               <div className="absolute right-0 top-0 w-[85%] h-full bg-[#0c121e] rounded-t-xl sm:rounded-t-2xl border-[3px] sm:border-[4px] border-[#2a3441] border-b-0 shadow-2xl flex flex-col overflow-hidden">
                   <div className="h-4 sm:h-6 bg-[#1a2332] flex items-center px-2 sm:px-3 gap-1.5 shrink-0 border-b border-white/[0.05]">
                     <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff5f56]" />
                     <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ffbd2e]" />
                     <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#27c93f]" />
                     <div className="ml-2 flex-1 h-2 sm:h-3 bg-white/5 rounded mx-2 max-w-[150px]" />
                   </div>
                   <div className="flex-1 bg-[#030914] p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                         <div className="w-12 sm:w-16 h-1.5 sm:h-2 bg-white/80 rounded" />
                         <div className="w-6 sm:w-8 h-1.5 sm:h-2 bg-[#ff6b00] rounded" />
                      </div>
                      <div className="w-1/2 h-3 sm:h-4 bg-white/90 rounded mt-1 sm:mt-2" />
                      <div className="w-1/3 h-3 sm:h-4 bg-white/90 rounded" />
                      <div className="w-12 sm:w-16 h-4 sm:h-5 bg-[#ff6b00] rounded mt-1 sm:mt-2" />
                   </div>
               </div>
               
               {/* PHONE */}
               <div className="absolute left-0 bottom-[-10%] w-[30%] sm:w-[28%] aspect-[9/19] bg-[#0c121e] rounded-[16px] sm:rounded-[24px] border-[3px] sm:border-[4px] border-[#2a3441] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10 z-10">
                  <div className="absolute top-0 inset-x-0 h-2.5 sm:h-3 flex justify-center z-40 pointer-events-none">
                    <div className="w-1/2 h-full bg-[#2a3441] rounded-b-lg" />
                  </div>
                  <div className="flex-1 bg-[#030914] pt-3 sm:pt-4 px-2 flex flex-col gap-1.5 sm:gap-2">
                     <div className="flex justify-between items-center border-b border-white/5 pb-1 sm:pb-2">
                       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff6b00]" />
                       <div className="w-2 h-0.5 sm:w-3 sm:h-0.5 bg-white/80 rounded" />
                     </div>
                     <div className="w-full h-1.5 sm:h-2 bg-white/90 rounded mt-1 sm:mt-2" />
                     <div className="w-3/4 h-1.5 sm:h-2 bg-white/90 rounded" />
                     <div className="w-full flex-1 bg-white/5 rounded mt-1 sm:mt-2 mb-1 sm:mb-2 border border-white/5" />
                  </div>
               </div>
            </div>
            
            <div className="absolute top-4 right-6 bg-[#27c93f]/20 text-[#27c93f] border border-[#27c93f]/30 px-3 py-1 rounded-full font-['JetBrains_Mono'] text-[9px] font-bold z-50">
               READY TO LAUNCH
            </div>
         </motion.div>
       </div>
    </div>
  );
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {"""
text = s[0] + new_process_visual + s2[1]

# Now for Section 6
s = text.split('{/* 6. FROM IDEA TO LAUNCH (Sticky Process) */}')
s2 = s[1].split('{/* 7. DIGITAL EXPERIENCE DEMONSTRATION */}')

new_section_6 = """{/* 6. FROM IDEA TO LAUNCH (Sticky Process) */}
      <section className="relative w-full border-t border-white/[0.08] pt-20 pb-20 lg:pt-32 lg:pb-32 bg-[#030914]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
          
          <div className="mb-12 lg:mb-16">
            <span className="font-['JetBrains_Mono'] text-xs uppercase tracking-widest text-[#fabd00] font-semibold mb-4 block">
              FROM IDEA TO LAUNCH
            </span>
            <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-tight">
              A DESIGNED<br />
              <span className="text-[#fabd00]">PROGRESSION.</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row relative gap-8 lg:gap-16" ref={processSectionRef}>
            
            {/* Left Visual - Sticky on Desktop */}
            <div className="lg:w-[50%] relative">
              <div className="lg:sticky lg:top-[110px] w-full aspect-square sm:aspect-video lg:aspect-auto lg:h-[calc(100vh-150px)] lg:max-h-[700px] lg:min-h-[560px]">
                <ProcessVisual progress={processProgress} />
              </div>
            </div>

            {/* Right Scrolling Content */}
            <div className="lg:w-[50%] flex flex-col relative z-0 mt-8 lg:mt-0">
               {/* Progress Line */}
               <div className="absolute left-[17px] lg:left-0 top-10 bottom-10 w-[2px] bg-white/[0.05] hidden lg:block">
                 <motion.div 
                   className="w-full bg-[#ff6b00]" 
                   style={{ height: useTransform(processProgress, [0, 1], ['0%', '100%']) }} 
                 />
               </div>

               {[
                 { step: "UNDERSTAND", desc: "We learn about the business, audience, goals and the problem that needs solving." },
                 { step: "SHAPE", desc: "We turn those inputs into structure, content hierarchy, user flows and a clear visual direction." },
                 { step: "BUILD", desc: "We translate the design into a responsive digital experience and refine it through iteration." },
                 { step: "DELIVER", desc: "We test, polish, launch and help keep the experience working after release." }
               ].map((step, idx) => (
                 <div 
                   key={idx} 
                   className="py-10 lg:py-0 lg:h-[280px] xl:h-[320px] flex flex-col justify-center relative pl-8 lg:pl-16 border-l-[2px] border-white/5 lg:border-none"
                 >
                   <motion.div
                     initial={false}
                     animate={{ opacity: activeProcessIdx === idx ? 1 : 0.3 }}
                     transition={{ duration: 0.4 }}
                   >
                     {/* Active dot indicator on the line */}
                     <div className={`hidden lg:block absolute left-[-5px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-colors duration-500 ${activeProcessIdx >= idx ? 'bg-[#ff6b00]' : 'bg-[#1a2332] border-[2px] border-white/20'}`} />
                     
                     <div className={`lg:hidden absolute left-[-5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-500 ${activeProcessIdx >= idx ? 'bg-[#ff6b00]' : 'bg-white/20'}`} />

                     <div className="flex items-center gap-4 mb-3">
                       <span className={`font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold transition-colors ${activeProcessIdx === idx ? 'text-[#ff6b00]' : 'text-white/20'}`}>
                         0{idx + 1}
                       </span>
                     </div>
                     <h3 className={`font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold uppercase transition-colors duration-300 ${activeProcessIdx === idx ? 'text-white' : 'text-white/40'}`}>
                       {step.step}
                     </h3>
                     <p className={`font-['DM_Sans'] text-base sm:text-lg text-[#94a3b8] max-w-sm transition-all duration-300 mt-2`}>
                       {step.desc}
                     </p>
                   </motion.div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. DIGITAL EXPERIENCE DEMONSTRATION */}"""
text = s[0] + new_section_6 + s2[1]

# Now adding the activeProcessIdx useEffect logic
effect_target = """  const { scrollYProgress: processProgress } = useScroll({
    target: processSectionRef,
    offset: ["start start", "end end"]
  });"""
effect_replacement = """  const { scrollYProgress: processProgress } = useScroll({
    target: processSectionRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const unsubscribe = processProgress.on("change", (latest) => {
      if (latest < 0.25) setActiveProcessIdx(0);
      else if (latest < 0.50) setActiveProcessIdx(1);
      else if (latest < 0.75) setActiveProcessIdx(2);
      else setActiveProcessIdx(3);
    });
    return () => unsubscribe();
  }, [processProgress]);"""

text = text.replace(effect_target, effect_replacement)

with open('src/pages/HomePage.tsx', 'w') as f:
    f.write(text)

print("done")

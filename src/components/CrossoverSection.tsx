import React, { useState } from 'react';
import { ClapperboardIcon, RetroStar, Starburst, ConcentricCircles } from './RetroGraphics';

export const CrossoverSection: React.FC = () => {
  const [activeParallel, setActiveParallel] = useState<number>(0);

  const parallels = [
    {
      title: 'The Blueprint',
      acting: 'The Script: Deconstructing motivations, beats, and subtext.',
      coding: 'The Algorithm: Deconstructing user needs, inputs, and edge cases.',
      sharedPrinciple: 'Both begin by reading deeply between the lines.',
    },
    {
      title: 'The Rehearsal',
      acting: 'Stage Rehearsal: Trying lines in different cadences until truth lands.',
      coding: 'Debugging & Refactoring: Testing edge cases until the logic is watertight.',
      sharedPrinciple: 'Neither is finished on the first run; both require patience and repetition.',
    },
    {
      title: 'The Delivery',
      acting: 'Live Performance: Responding truthfully to the audience and scene partners in real-time.',
      coding: 'Program Execution: Delivering deterministic, seamless behavior to the user.',
      sharedPrinciple: 'The ultimate test is effortless execution in the real world.',
    },
  ];

  return (
    <section id="crossover" className="py-24 bg-[#FFF0C7] border-b-4 border-[#171719] relative overflow-hidden">
      {/* Decorative concentric rings */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 pointer-events-none opacity-20 hidden lg:block">
        <ConcentricCircles size={300} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-code text-xs font-bold bg-[#FF300F] text-[#FFF0C7] px-3.5 py-1.5 border-2 border-[#171719] shadow-retro-sm uppercase tracking-widest">
            04 / THE PLOT TWIST
          </span>
          <RetroStar size={18} color="#007F86" />
          <span className="font-mono-code text-xs font-bold text-[#007F86] uppercase tracking-wider hidden sm:inline">
            CROSSOVER MANIFESTO
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#171719] leading-tight tracking-tight uppercase">
            DIFFERENT STAGES.{' '}
            <span className="text-[#007F86] text-shadow-vermilion">
              SAME CURIOSITY.
            </span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-[#171719] font-medium mt-4 leading-relaxed bg-[#FFF8E8] p-4 border-2 border-[#171719] shadow-retro-sm inline-block">
            Acting involves interpreting a script, understanding a character, and responding to a situation. Programming involves understanding a problem, designing a sequence of instructions, and refining the result through testing. Both reward patience, experimentation, and attention to detail.
          </p>
        </div>

        {/* Split-Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Side: Film Frame "SCENE ONE: THE PERFORMER" */}
          <div className="lg:col-span-5 bg-[#FFB879] border-4 border-[#171719] p-6 sm:p-7 shadow-retro-xl transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#171719]">
              <div className="flex items-center gap-2">
                <ClapperboardIcon width={28} height={24} />
                <span className="font-display text-xs tracking-wider text-[#171719] uppercase">
                  SCENE ONE: THE PERFORMER
                </span>
              </div>
              <span className="font-mono-code text-[11px] font-bold text-[#FF300F] bg-[#FFF8E8] px-2 py-0.5 border border-[#171719]">
                CREATIVE CRAFT
              </span>
            </div>

            <div className="bg-[#FFF8E8] border-2 border-[#171719] p-4 mb-4">
              <span className="font-mono-code text-[11px] font-bold text-[#007F86] uppercase block mb-1">
                // SCRIPT DIRECTIVE
              </span>
              <p className="font-script text-xl text-[#171719] leading-snug">
                &ldquo;You don&apos;t just read the dialogue—you listen for what the character cannot bear to say.&rdquo;
              </p>
            </div>

            <ul className="space-y-3 font-body text-sm text-[#171719] font-medium">
              <li className="flex items-start gap-2 bg-[#FFF0C7] p-2.5 border border-[#171719]">
                <span className="text-[#FF300F] font-bold font-display">&bull;</span>
                <span><strong>Interpreting the Script:</strong> Finding nuance, pace, and dramatic motivation.</span>
              </li>
              <li className="flex items-start gap-2 bg-[#FFF0C7] p-2.5 border border-[#171719]">
                <span className="text-[#FF300F] font-bold font-display">&bull;</span>
                <span><strong>Empathy Under Pressure:</strong> Seeing the world through someone else&apos;s worldview.</span>
              </li>
              <li className="flex items-start gap-2 bg-[#FFF0C7] p-2.5 border border-[#171719]">
                <span className="text-[#FF300F] font-bold font-display">&bull;</span>
                <span><strong>Continuous Revision:</strong> Every take polishes the raw instinct into honesty.</span>
              </li>
            </ul>

            <div className="mt-5 pt-3 border-t-2 border-[#171719] flex items-center justify-between text-xs font-mono-code font-bold text-[#171719]">
              <span>MEDIUM: THEATRE &amp; CAMERA</span>
              <span className="text-[#FF300F]">EMOTIONAL RIGOR</span>
            </div>
          </div>

          {/* Center Connector: Dramatic Starburst & Arrow */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center my-2 lg:my-0">
            <div className="relative">
              <Starburst points={16} outerRadius={65} innerRadius={45} fill="#FF741F" stroke="#171719" strokeWidth={3}>
                <span className="font-display text-xs text-[#FFF8E8] text-center leading-tight">
                  THE<br />BRIDGE
                </span>
              </Starburst>
            </div>
            <div className="mt-3 font-mono-code text-xs font-bold text-[#007F86] bg-[#FFF8E8] px-2 py-1 border border-[#171719]">
              RIGOR &bull; PATIENCE
            </div>
          </div>

          {/* Right Side: Retro Terminal "SCENE TWO: THE PROGRAMMER" */}
          <div className="lg:col-span-5 bg-[#171719] border-4 border-[#171719] p-6 sm:p-7 shadow-retro-xl transform rotate-1 hover:rotate-0 transition-transform text-[#FFF8E8]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-stone-700">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#70B9AF]" />
                <span className="font-display text-xs tracking-wider text-[#FFB879] uppercase">
                  SCENE TWO: THE PROGRAMMER
                </span>
              </div>
              <span className="font-mono-code text-[11px] font-bold text-[#70B9AF] bg-[#2a2a2f] px-2 py-0.5 border border-stone-600">
                SYSTEMIC LOGIC
              </span>
            </div>

            <div className="bg-[#222226] border-2 border-stone-700 p-4 mb-4 font-mono-code text-xs text-[#FFF0C7]">
              <span className="text-[#FF741F] font-bold block mb-1">
                // ALGORITHMIC PARALLEL
              </span>
              <p className="text-stone-300">
                &ldquo;You don&apos;t just type instructions—you structure how data flows and handle every potential failure state.&rdquo;
              </p>
            </div>

            <ul className="space-y-3 font-body text-sm text-stone-200 font-medium">
              <li className="flex items-start gap-2 bg-[#2a2a2f] p-2.5 border border-stone-700">
                <span className="text-[#70B9AF] font-bold font-mono-code">&gt;</span>
                <span><strong>Interpreting the Problem:</strong> Deconstructing ambiguity into deterministic logic.</span>
              </li>
              <li className="flex items-start gap-2 bg-[#2a2a2f] p-2.5 border border-stone-700">
                <span className="text-[#70B9AF] font-bold font-mono-code">&gt;</span>
                <span><strong>Disciplined Sequencing:</strong> Ensuring steps execute with predictability in C, Python, or Java.</span>
              </li>
              <li className="flex items-start gap-2 bg-[#2a2a2f] p-2.5 border border-stone-700">
                <span className="text-[#70B9AF] font-bold font-mono-code">&gt;</span>
                <span><strong>Iterative Debugging:</strong> Isolating anomalies until the entire solution holds firm.</span>
              </li>
            </ul>

            <div className="mt-5 pt-3 border-t-2 border-stone-700 flex items-center justify-between text-xs font-mono-code font-bold text-[#FFB879]">
              <span>MEDIUM: CODE COMPILERS</span>
              <span className="text-[#70B9AF]">LOGICAL RIGOR</span>
            </div>
          </div>

        </div>

        {/* Interactive Comparison Carousel / Principle Cards */}
        <div className="bg-[#FFF8E8] border-3 border-[#171719] p-6 sm:p-8 shadow-retro-md">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-3 border-b-2 border-dashed border-[#171719]">
            <span className="font-display text-lg text-[#171719] uppercase tracking-wide">
              PARALLEL DIALOGUE: SIDE-BY-SIDE PRINCIPLES
            </span>
            <div className="flex items-center gap-2">
              {parallels.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveParallel(i)}
                  className={`w-7 h-7 font-mono-code text-xs font-bold border-2 border-[#171719] cursor-pointer transition-all ${
                    activeParallel === i
                      ? 'bg-[#FF300F] text-[#FFF0C7] shadow-retro-sm'
                      : 'bg-[#FFF0C7] text-[#171719] hover:bg-[#FFB879]'
                  }`}
                  aria-label={`View Parallel ${i + 1}`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <div className="bg-[#FFB879] p-4 border-2 border-[#171719]">
              <span className="font-mono-code text-[11px] font-bold text-[#FF300F] uppercase block mb-1">
                ON THE STAGE
              </span>
              <p className="font-body text-sm font-semibold text-[#171719]">
                {parallels[activeParallel].acting}
              </p>
            </div>

            <div className="bg-[#70B9AF] p-4 border-2 border-[#171719]">
              <span className="font-mono-code text-[11px] font-bold text-[#007F86] uppercase block mb-1">
                IN THE COMPILER
              </span>
              <p className="font-body text-sm font-semibold text-[#171719]">
                {parallels[activeParallel].coding}
              </p>
            </div>

            <div className="bg-[#FF300F] text-[#FFF0C7] p-4 border-2 border-[#171719] shadow-retro-sm">
              <span className="font-mono-code text-[11px] font-bold text-[#FFF0C7] uppercase block mb-1">
                THE COMMON THREAD
              </span>
              <p className="font-display text-sm leading-snug">
                {parallels[activeParallel].sharedPrinciple}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

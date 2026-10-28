import React from 'react';
import { RetroStar, ConcentricCircles } from './RetroGraphics';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FFF8E8] border-b-4 border-[#171719] relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute -top-10 -right-10 pointer-events-none opacity-20 hidden md:block">
        <ConcentricCircles size={240} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono-code text-xs font-bold bg-[#FF741F] text-[#FFF8E8] px-3 py-1 border-2 border-[#171719] shadow-retro-sm uppercase tracking-widest">
            01 / BEHIND THE SCENES
          </span>
          <RetroStar size={18} color="#007F86" />
          <span className="font-mono-code text-xs font-bold text-[#007F86] uppercase tracking-wider hidden sm:inline">
            ORIGIN &amp; MOTIVATION
          </span>
        </div>

        {/* Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Narrative Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-display text-3xl sm:text-5xl text-[#171719] leading-tight tracking-tight">
              Every character has a story.{' '}
              <span className="text-[#FF300F] underline decoration-4 decoration-[#FF741F] underline-offset-4">
                Here&apos;s mine.
              </span>
            </h2>

            <div className="relative pl-6 border-l-4 border-[#FF300F] my-2">
              <p className="font-script text-2xl text-[#007F86]">
                &ldquo;Where creative storytelling meets the discipline of logic.&rdquo;
              </p>
            </div>

            <div className="space-y-4 font-body text-base sm:text-lg text-[#171719] leading-relaxed">
              <p className="bg-[#FFF0C7] p-5 border-2 border-[#171719] shadow-retro-sm">
                I&apos;m Vaishnavi Revadkar. I enjoy acting, expressing ideas, and exploring different perspectives through performance. Alongside that creative side, I enjoy programming and learning how code can turn an idea into something real.
              </p>
              <p className="bg-[#FFF0C7] p-5 border-2 border-[#171719] shadow-retro-sm">
                Acting gives me a space to explore expression and storytelling. Programming challenges me to think logically, experiment, and solve problems. I&apos;m interested in growing in both directions while discovering where creativity and technology can meet.
              </p>
            </div>

            {/* Editorial Highlights Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-[#FFB879] border-2 border-[#171719] p-4 shadow-retro-sm">
                <span className="font-mono-code text-[11px] font-bold text-[#171719] uppercase block mb-1">
                  DISCIPLINE 01
                </span>
                <span className="font-display text-lg text-[#171719] block">
                  THE ACTOR
                </span>
                <p className="text-xs text-[#171719] font-medium mt-1">
                  Expression, bodily presence, emotion, and character exploration.
                </p>
              </div>

              <div className="bg-[#70B9AF] border-2 border-[#171719] p-4 shadow-retro-sm">
                <span className="font-mono-code text-[11px] font-bold text-[#171719] uppercase block mb-1">
                  DISCIPLINE 02
                </span>
                <span className="font-display text-lg text-[#171719] block">
                  THE CODER
                </span>
                <p className="text-xs text-[#171719] font-medium mt-1">
                  Systematic problem-solving in C, Python, and Java.
                </p>
              </div>

              <div className="bg-[#FFF0C7] border-2 border-[#171719] p-4 shadow-retro-sm">
                <span className="font-mono-code text-[11px] font-bold text-[#FF300F] uppercase block mb-1">
                  THE SYNTHESIS
                </span>
                <span className="font-display text-lg text-[#171719] block">
                  THE CURIOUS MIND
                </span>
                <p className="text-xs text-[#171719] font-medium mt-1">
                  Patience, rehearsal, and finding clarity in complex challenges.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Poster-Style Visual Panel */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative">
              
              {/* Outer Vintage Poster Framing */}
              <div className="bg-[#FF300F] border-4 border-[#171719] p-5 shadow-retro-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                
                {/* Vintage Header Strip */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-[#FFF0C7] text-[#FFF0C7] font-mono-code text-xs font-bold">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFF0C7] animate-ping" />
                    <span>PROFILE EDITORIAL</span>
                  </div>
                  <span>ISSUE NO. 1</span>
                </div>

                {/* Inset Canvas */}
                <div className="bg-[#FFF0C7] border-3 border-[#171719] p-6 text-center relative overflow-hidden">
                  <div className="halftone-dots-orange absolute inset-0 opacity-15 pointer-events-none" />
                  
                  {/* Decorative Retro Stamp */}
                  <div className="w-20 h-20 mx-auto rounded-full bg-[#007F86] border-3 border-[#171719] shadow-retro-sm flex items-center justify-center mb-4">
                    <span className="font-display text-[#FFF8E8] text-2xl">VR</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl text-[#171719] leading-tight uppercase">
                    ONE PERSON.
                    <span className="block text-[#FF300F] text-shadow-ink-sm mt-1">
                      MANY PERSPECTIVES.
                    </span>
                  </h3>

                  <div className="my-4 w-16 h-1 bg-[#171719] mx-auto" />

                  <p className="font-script text-xl text-[#007F86] mb-4">
                    &ldquo;Curiosity is the director of every scene.&rdquo;
                  </p>

                  <div className="p-3 bg-[#FFF8E8] border-2 border-[#171719] text-left text-xs font-mono-code text-[#171719] space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-[#FF300F] font-bold">PASSION:</span>
                      <span>Storytelling &amp; Theatre</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#007F86] font-bold">CORE TOOLS:</span>
                      <span>C &bull; Python &bull; Java</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#FF741F] font-bold">METHOD:</span>
                      <span>Observe, Rehearse, Solve</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t-2 border-dashed border-[#171719] flex items-center justify-between text-[11px] font-mono-code font-bold text-[#171719]">
                    <span>VAISHNAVI REVADKAR</span>
                    <span className="text-[#FF300F]">★ 2026 EDITION ★</span>
                  </div>
                </div>

                {/* Bottom Tape/Ticket Bar */}
                <div className="mt-4 pt-2 border-t-2 border-[#FFF0C7] flex justify-between items-center text-[#FFF0C7] font-mono-code text-[11px]">
                  <span>CINEMA &amp; CODE ARCHIVE</span>
                  <span className="bg-[#171719] text-[#FFB879] px-2 py-0.5 border border-[#FFF0C7]">ADMIT ONE</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

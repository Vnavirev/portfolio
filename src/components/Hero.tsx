import React, { useState } from 'react';
import {
  Starburst,
  ClapperboardIcon,
  VintageCameraIcon,
  RetroStar,
  ConcentricCircles,
  FilmStripSeparator,
} from './RetroGraphics';

export const Hero: React.FC = () => {
  // Support custom portrait upload or toggle without fabricating fake photos
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhoto(url);
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 vintage-paper-bg border-b-4 border-[#171719]">
      {/* Background Decorative Graphic Elements */}
      <div className="absolute top-6 left-8 -z-0 opacity-25 pointer-events-none hidden md:block">
        <ConcentricCircles size={260} />
      </div>
      <div className="absolute bottom-12 right-6 -z-0 opacity-20 pointer-events-none hidden lg:block">
        <ConcentricCircles size={320} />
      </div>

      {/* Retro Floating Star Accents */}
      <div className="absolute top-16 right-1/4 pointer-events-none hidden md:block animate-bounce [animation-duration:4s]">
        <RetroStar size={36} color="#FF741F" />
      </div>
      <div className="absolute bottom-24 left-1/3 pointer-events-none hidden md:block">
        <RetroStar size={28} color="#007F86" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tagline Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-[#171719]">
          <div className="flex items-center gap-3">
            <span className="bg-[#FF300F] text-[#FFF0C7] font-display text-xs px-2.5 py-1 border-2 border-[#171719] shadow-retro-sm uppercase tracking-wider">
              NOW SHOWING
            </span>
            <span className="font-mono-code text-xs sm:text-sm font-bold text-[#171719] tracking-wider uppercase">
              ACT I &bull; SCENE 01 &bull; WORLD PREMIERE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-script text-xl sm:text-2xl text-[#007F86] -rotate-3">
              &ldquo;Born for the spotlight. Built to solve problems.&rdquo;
            </span>
          </div>
        </div>

        {/* Main Two-Zone Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT ZONE: Layered Editorial Collage (Magazine Clippings & Film Stills) */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col gap-6 relative">
            <div className="relative p-2">
              
              {/* Collage Card 1: Acting Still / Character Study Card */}
              <div className="relative z-20 bg-[#FFF8E8] border-3 border-[#171719] p-5 shadow-retro-md transform -rotate-2 hover:rotate-0 transition-transform duration-200">
                {/* Vintage Tape Accent */}
                <div className="absolute -top-3 left-1/3 w-16 h-6 bg-[#FFB879]/80 border border-[#171719] opacity-90 rotate-2 pointer-events-none" />
                
                <div className="flex items-center justify-between mb-3 pb-2 border-b-2 border-dashed border-[#171719]">
                  <div className="flex items-center gap-2">
                    <ClapperboardIcon width={32} height={26} />
                    <span className="font-display text-xs text-[#FF300F] tracking-wider">
                      TAKE 01 &bull; ON STAGE
                    </span>
                  </div>
                  <span className="font-mono-code text-[11px] font-bold text-[#007F86]">
                    ACTING ESSENCE
                  </span>
                </div>

                <div className="relative h-44 bg-[#FFF0C7] border-2 border-[#171719] overflow-hidden p-3 flex flex-col justify-between">
                  <div className="halftone-dots-teal absolute inset-0 opacity-20 pointer-events-none" />
                  <div className="relative z-10">
                    <span className="inline-block bg-[#007F86] text-[#FFF0C7] font-display text-[10px] px-2 py-0.5 border border-[#171719] mb-1">
                      METHOD &amp; PRESENCE
                    </span>
                    <p className="font-display text-base text-[#171719] leading-snug mt-1">
                      &ldquo;Every character is an untold truth waiting to be heard.&rdquo;
                    </p>
                  </div>
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono-code font-bold text-[#171719] border-t border-[#171719] pt-2">
                    <span>EMOTION &bull; VOICE &bull; SUBTEXT</span>
                    <span className="text-[#FF300F]">35MM</span>
                  </div>
                </div>

                <p className="font-body text-xs text-[#171719] mt-3 leading-relaxed">
                  Stepping into someone else&apos;s shoes to understand how they speak, think, and endure. Performance isn&apos;t just acting—it&apos;s acute empathy.
                </p>
              </div>

              {/* Collage Card 2: Programming Punchcard (Layered Behind & Overlapping) */}
              <div className="relative z-10 -mt-8 ml-6 sm:ml-12 bg-[#FF741F] border-3 border-[#171719] p-5 shadow-retro-lg transform rotate-3 hover:rotate-1 transition-transform duration-200 text-[#FFF8E8]">
                {/* Corner Stamp */}
                <div className="absolute -top-3 right-4 bg-[#FF300F] text-[#FFF0C7] border-2 border-[#171719] font-display text-[10px] px-2 py-0.5 shadow-retro-sm">
                  VERIFIED LOGIC
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-sm tracking-wide text-[#171719]">
                      SYSTEMS &bull; SYNTAX
                    </span>
                  </div>
                  <span className="font-mono-code text-[11px] font-bold text-[#FFF0C7] bg-[#171719] px-2 py-0.5">
                    C / PYTHON / JAVA
                  </span>
                </div>

                {/* Vintage Terminal / Punchcard Box */}
                <div className="bg-[#171719] text-[#70B9AF] font-mono-code text-xs p-3 border-2 border-[#171719] shadow-inner">
                  <div className="text-stone-400 text-[10px] pb-1 border-b border-stone-700 flex justify-between">
                    <span>/* REHEARSAL_LOOP.C */</span>
                    <span className="text-[#FFB879]">PASS</span>
                  </div>
                  <pre className="text-[11px] leading-tight font-mono-code mt-2 overflow-x-auto text-[#FFF0C7]">
                    <span className="text-[#FF741F]">while</span> (curiosity &gt; 0) &#123;{'\n'}
                    {'  '}explore_scene(perspective);{'\n'}
                    {'  '}compile_solution(&amp;logic);{'\n'}
                    &#125;
                  </pre>
                </div>

                <div className="flex items-center justify-between mt-3 text-xs font-bold text-[#171719]">
                  <span className="bg-[#FFF8E8] text-[#171719] px-2 py-0.5 border border-[#171719]">
                    PROBLEM-SOLVING
                  </span>
                  <span className="text-[#FFF8E8] font-mono-code">0 COMPILATION ERRORS</span>
                </div>
              </div>

              {/* Collage Card 3: Editorial Quote Note Badge */}
              <div className="relative z-30 -mt-6 mr-8 sm:mr-16 bg-[#FFF0C7] border-2 border-[#171719] p-3 shadow-retro-sm transform -rotate-1 flex items-center gap-3">
                <VintageCameraIcon width={40} height={32} />
                <div className="text-xs">
                  <span className="font-display text-[#FF300F] block">DUAL DISCIPLINE</span>
                  <span className="font-body text-[#171719] font-medium">
                    From stage presence to systematic problem-solving.
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT ZONE: Starburst Headline, Dramatic Typography & Portrait Anchor */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left relative">
            
            {/* Top Eyebrow Banner */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono-code text-xs sm:text-sm font-black uppercase tracking-widest text-[#FF300F] bg-[#FFF8E8] px-3 py-1 border-2 border-[#171719] shadow-retro-sm">
                INTRODUCING THE MAIN CHARACTER
              </span>
              <RetroStar size={18} color="#FF741F" />
            </div>

            {/* Huge Retro Cinema Starburst Framing Vaishnavi's Identity */}
            <div className="relative w-full my-2">
              {/* Massive Vermilion Starburst Background Accent */}
              <div className="absolute -top-12 -left-8 sm:-left-12 -z-0 pointer-events-none opacity-90 scale-90 sm:scale-100">
                <Starburst points={20} outerRadius={150} innerRadius={120} fill="#FF300F" stroke="#171719" strokeWidth={5} />
              </div>

              {/* Foreground Typography */}
              <div className="relative z-10 pt-4 sm:pt-6">
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-7xl text-[#171719] leading-[0.92] tracking-tighter uppercase drop-shadow-[4px_4px_0px_#FFF0C7]">
                  <span className="block text-[#FFF8E8] text-shadow-vermilion">VAISHNAVI</span>
                  <span className="block text-[#171719] text-shadow-teal mt-1">REVADKAR</span>
                </h1>

                {/* Cinematic Subtitle */}
                <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="font-display text-base sm:text-xl text-[#007F86] bg-[#FFF8E8] px-3 py-1 border-2 border-[#171719] shadow-retro-sm">
                    THE ARTIST. THE CODER. THE CURIOUS MIND.
                  </span>
                  <span className="font-display text-xs sm:text-sm text-[#FFF0C7] bg-[#FF741F] px-2.5 py-1 border-2 border-[#171719] shadow-retro-sm">
                    PLOT TWIST: I CODE, TOO.
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative Paragraph */}
            <p className="mt-5 font-body text-base sm:text-lg text-[#171719] font-medium max-w-xl leading-relaxed bg-[#FFF8E8]/90 p-4 border-2 border-[#171719] shadow-retro-sm">
              Part storyteller, part problem-solver. I explore the world through acting, creativity, and code — one scene and one line at a time.
            </p>

            {/* Portrait Frame Anchor: Cinema Frame & Headshot Canvas */}
            <div className="mt-6 w-full max-w-md bg-[#FFF8E8] border-3 border-[#171719] p-3 shadow-retro-md">
              <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-[#171719] text-xs font-mono-code font-bold">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF300F]" />
                  <span>FRAME 01 // PORTRAIT ANCHOR</span>
                </div>
                <label className="text-[11px] text-[#007F86] hover:text-[#FF300F] cursor-pointer underline font-bold">
                  {customPhoto ? 'Change Photo' : '+ Slot Headshot'}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Portrait Content Area */}
              <div className="relative h-48 sm:h-56 bg-[#FFB879] border-2 border-[#171719] overflow-hidden flex items-center justify-center">
                {customPhoto ? (
                  <img
                    src={customPhoto}
                    alt="Vaishnavi Revadkar portrait"
                    className="w-full h-full object-cover filter contrast-110 saturate-110"
                  />
                ) : (
                  <div className="relative w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-[#FFB879] via-[#FFF0C7] to-[#70B9AF]">
                    <div className="halftone-dots absolute inset-0 opacity-15 pointer-events-none" />
                    
                    {/* Artistic Duotone Retro Actor Silhouette Composition */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-[#171719] border-3 border-[#FFF0C7] shadow-retro-sm flex items-center justify-center overflow-hidden mb-2">
                      <svg viewBox="0 0 100 100" className="w-20 h-20 fill-[#FF300F]" aria-hidden="true">
                        <circle cx="50" cy="35" r="20" fill="#FFF0C7" stroke="#171719" strokeWidth="3" />
                        <path d="M20,85 C20,60 35,55 50,55 C65,55 80,60 80,85 Z" fill="#FF741F" stroke="#171719" strokeWidth="3" />
                        {/* Film star glint */}
                        <polygon points="68,20 71,28 79,31 71,34 68,42 65,34 57,31 65,28" fill="#FFF0C7" />
                      </svg>
                    </div>

                    <span className="font-display text-sm text-[#171719] tracking-wider uppercase">
                      VAISHNAVI REVADKAR
                    </span>
                    <span className="font-script text-base text-[#007F86]">
                      The Face Behind The Script &amp; The Code
                    </span>
                    <span className="text-[10px] font-mono-code text-[#171719] mt-1 bg-[#FFF8E8] px-2 py-0.5 border border-[#171719]">
                      [Ready for authentic headshot &bull; click &ldquo;+ Slot Headshot&rdquo; above]
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons Matching Strict Creative Directive */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
              {/* Primary Button */}
              <a
                href="#acting"
                className="px-6 sm:px-8 py-3.5 bg-[#FF300F] text-[#FFF0C7] font-display text-base tracking-wide border-3 border-[#171719] shadow-retro-md btn-tactile hover:bg-[#FF741F] flex items-center gap-2 focus-visible:outline-3 focus-visible:outline-[#171719]"
              >
                <span>EXPLORE MY ACTING</span>
                <span className="text-xl leading-none">&rarr;</span>
              </a>

              {/* Secondary Button */}
              <a
                href="#code"
                className="px-6 sm:px-8 py-3.5 bg-[#007F86] text-[#FFF8E8] font-display text-base tracking-wide border-3 border-[#171719] shadow-retro-md btn-tactile hover:bg-[#70B9AF] hover:text-[#171719] flex items-center gap-2 focus-visible:outline-3 focus-visible:outline-[#171719]"
              >
                <span>MEET THE CODER</span>
                <span className="text-xl leading-none">&darr;</span>
              </a>
            </div>

            {/* Micro Tags Below CTAs */}
            <div className="mt-4 flex items-center gap-3 text-xs font-mono-code font-bold text-[#171719]">
              <span className="text-[#FF300F]">★</span>
              <span>STAGE PERFORMANCE</span>
              <span className="text-[#007F86]">&bull;</span>
              <span>C PROGRAMMING</span>
              <span className="text-[#007F86]">&bull;</span>
              <span>PYTHON</span>
              <span className="text-[#007F86]">&bull;</span>
              <span>JAVA</span>
              <span className="text-[#FF300F]">★</span>
            </div>

          </div>

        </div>
      </div>

      {/* Marquee Film Strip Separator */}
      <div className="mt-14">
        <FilmStripSeparator />
      </div>
    </section>
  );
};

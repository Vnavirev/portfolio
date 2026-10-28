import React, { useState } from 'react';
import { ClapperboardIcon, RetroStar, Starburst, ConcentricCircles } from './RetroGraphics';

interface PerformanceStudy {
  id: string;
  act: string;
  title: string;
  theme: string;
  description: string;
  rehearsalFocus: string;
  stageDirection: string;
  color: string;
  tag: string;
}

const studies: PerformanceStudy[] = [
  {
    id: 'study-1',
    act: 'STUDY 01',
    title: 'Character Immersion & Perspective',
    theme: 'Empathy & Psychology',
    description:
      'Exploring the inner life of a character before speaking the first word. Understanding their unspoken desires, doubts, and emotional landscape.',
    rehearsalFocus: 'Internal monologue, stillness, emotional truth, and active listening.',
    stageDirection: '[Pause. Shift weight. Let the thought register in the eyes before speaking.]',
    color: '#FF300F',
    tag: 'CHARACTER',
  },
  {
    id: 'study-2',
    act: 'STUDY 02',
    title: 'Voice, Cadence & Subtext',
    theme: 'Vocal Presence',
    description:
      'How tone, pauses, and inflection change the meaning of every line. Playing with rhythm to turn ordinary sentences into memorable scenes.',
    rehearsalFocus: 'Breath support, vocal resonance, tempo shifts, and delivering subtext beneath dialogue.',
    stageDirection: '[Speak in a hushed, deliberate cadence. Cut the rhythm abruptly on the key revelation.]',
    color: '#007F86',
    tag: 'VOCAL',
  },
  {
    id: 'study-3',
    act: 'STUDY 03',
    title: 'Physical Theatre & Spatial Energy',
    theme: 'Movement & Body Language',
    description:
      'Telling stories without uttering a sound. Communicating status, vulnerability, and tension purely through posture and deliberate movement.',
    rehearsalFocus: 'Grounded stance, kinetic intention, gesture discipline, and eye contact control.',
    stageDirection: '[Move cross-stage with measured steps. Turn sharply to confront the downstage audience.]',
    color: '#FF741F',
    tag: 'PHYSICAL',
  },
  {
    id: 'study-4',
    act: 'STUDY 04',
    title: 'Improvisation & Spontaneous Flow',
    theme: 'Adaptability & Instinct',
    description:
      'Embracing the unexpected in real time. Staying present in the moment and reacting truthfully to whatever an acting partner or scene throws your way.',
    rehearsalFocus: 'Deep presence, &ldquo;yes, and&rdquo; agility, overcoming hesitation, and unscripted instinct.',
    stageDirection: '[Absorb the unexpected cue. Hold the gaze. Improvise with unflinching conviction.]',
    color: '#70B9AF',
    tag: 'IMPROV',
  },
];

export const ActingSection: React.FC = () => {
  const [activeStudy, setActiveStudy] = useState<PerformanceStudy>(studies[0]);

  return (
    <section id="acting" className="py-24 bg-[#FFF0C7] border-b-4 border-[#171719] relative overflow-hidden">
      {/* Decorative background watermarks */}
      <div className="absolute top-10 right-4 pointer-events-none opacity-25 hidden lg:block">
        <ConcentricCircles size={280} />
      </div>
      <div className="absolute bottom-6 left-6 pointer-events-none opacity-20 hidden md:block">
        <ConcentricCircles size={220} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b-3 border-[#171719]">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-bold bg-[#FF300F] text-[#FFF0C7] px-3.5 py-1.5 border-2 border-[#171719] shadow-retro-sm uppercase tracking-widest">
              02 / TAKE THE STAGE
            </span>
            <ClapperboardIcon width={36} height={30} />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-display text-sm tracking-widest text-[#007F86] uppercase">
              CINEMATIC &bull; EXPRESSIVE &bull; INTENTIONAL
            </span>
            <RetroStar size={16} color="#FF741F" />
          </div>
        </div>

        {/* Section Headline Banner with Retro Graphic Burst */}
        <div className="relative mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#171719] leading-tight tracking-tight uppercase">
                NOT JUST PLAYING A PART.{' '}
                <span className="block text-[#FF300F] text-shadow-teal">
                  BRINGING STORIES TO LIFE.
                </span>
              </h2>
              <p className="font-body text-lg sm:text-xl text-[#171719] font-medium mt-4 leading-relaxed max-w-xl">
                For me, acting is about expression, presence, emotion, and seeing the world through different perspectives.
              </p>
            </div>

            {/* Giant "ACTION!" Retro Stamp */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative">
                <div className="transform -rotate-6 bg-[#007F86] text-[#FFF8E8] border-4 border-[#171719] p-4 shadow-retro-lg flex items-center gap-3">
                  <span className="font-display text-4xl sm:text-5xl tracking-wider">ACTION!</span>
                  <div className="border-l-2 border-[#FFF8E8] pl-3 text-left">
                    <span className="font-mono-code text-[10px] font-bold block uppercase text-[#FFB879]">
                      SCENE CALL
                    </span>
                    <span className="font-display text-xs text-[#FFF8E8] block">
                      ALL PASSION
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Editorial Panels as specified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Panel 1: THE PERFORMER */}
          <div className="bg-[#FFF8E8] border-3 border-[#171719] p-6 shadow-retro-md flex flex-col justify-between transform hover:-translate-y-1 transition-transform">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-dashed border-[#171719]">
                <span className="font-mono-code text-xs font-bold text-[#FF300F]">PILLAR 01</span>
                <RetroStar size={16} color="#FF300F" />
              </div>
              <h3 className="font-display text-2xl text-[#171719] tracking-tight uppercase mb-3">
                THE PERFORMER
              </h3>
              <p className="font-body text-sm text-[#171719] leading-relaxed">
                Acting as a serious creative pursuit—discovering authenticity under imaginary circumstances. It is the discipline of showing up wholly present, stripped of pretension, ready to hold the spotlight with conviction.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t-2 border-[#171719] flex items-center justify-between text-xs font-mono-code font-bold text-[#007F86]">
              <span>PRESENCE &amp; COURAGE</span>
              <span>35MM</span>
            </div>
          </div>

          {/* Panel 2: THE EXPRESSION */}
          <div className="bg-[#FFB879] border-3 border-[#171719] p-6 shadow-retro-md flex flex-col justify-between transform hover:-translate-y-1 transition-transform">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-dashed border-[#171719]">
                <span className="font-mono-code text-xs font-bold text-[#171719]">PILLAR 02</span>
                <RetroStar size={16} color="#007F86" />
              </div>
              <h3 className="font-display text-2xl text-[#171719] tracking-tight uppercase mb-3">
                THE EXPRESSION
              </h3>
              <p className="font-body text-sm text-[#171719] leading-relaxed">
                Every movement, glance, and inflection holds weight. Exploring the subtle micro-expressions and dynamic emotional arcs that transform words printed on a page into human connection.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t-2 border-[#171719] flex items-center justify-between text-xs font-mono-code font-bold text-[#171719]">
              <span>MOTION &bull; VOICE &bull; ARC</span>
              <span>SUBTEXT</span>
            </div>
          </div>

          {/* Panel 3: THE NEXT SCENE */}
          <div className="bg-[#70B9AF] border-3 border-[#171719] p-6 shadow-retro-md flex flex-col justify-between transform hover:-translate-y-1 transition-transform">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-dashed border-[#171719]">
                <span className="font-mono-code text-xs font-bold text-[#171719]">PILLAR 03</span>
                <RetroStar size={16} color="#FF300F" />
              </div>
              <h3 className="font-display text-2xl text-[#171719] tracking-tight uppercase mb-3">
                THE NEXT SCENE
              </h3>
              <p className="font-body text-sm text-[#171719] leading-relaxed">
                An ongoing journey of craft and growth. Continuing to learn, audition, absorb diverse directorial perspectives, and step into daring new roles that challenge physical and emotional range.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t-2 border-[#171719] flex items-center justify-between text-xs font-mono-code font-bold text-[#171719]">
              <span>CONTINUOUS GROWTH</span>
              <span>ROLL CAMERA</span>
            </div>
          </div>
        </div>

        {/* Interactive "Director's Rehearsal Monitor" & Curated Performance Studies */}
        <div className="bg-[#171719] border-4 border-[#171719] p-6 sm:p-8 shadow-retro-xl text-[#FFF8E8]">
          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b-2 border-stone-700 gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF300F] animate-pulse" />
              <span className="font-display text-lg sm:text-xl text-[#FFB879] tracking-wider uppercase">
                DIRECTOR&apos;S REHEARSAL MONITOR &bull; ACTING LAB
              </span>
            </div>
            <div className="text-xs font-mono-code text-stone-300">
              SELECT STUDY TO VIEW SCRIPT NOTES &bull; 4 MODULES
            </div>
          </div>

          {/* Study Switcher Buttons (Functional Tabs, cleanly styled) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {studies.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveStudy(s)}
                className={`p-3 text-left border-2 transition-all font-mono-code cursor-pointer btn-tactile ${
                  activeStudy.id === s.id
                    ? 'bg-[#FF300F] text-[#FFF0C7] border-[#FFF0C7] shadow-retro-sm translate-x-1 translate-y-1'
                    : 'bg-[#222226] text-stone-300 border-stone-600 hover:border-[#FFB879]'
                }`}
              >
                <div className="flex justify-between items-center text-[10px] font-bold tracking-widest mb-1">
                  <span>{s.act}</span>
                  <span className="uppercase text-[9px] px-1 bg-black/40 rounded-xs">{s.tag}</span>
                </div>
                <div className="font-display text-xs sm:text-sm line-clamp-1">{s.title}</div>
              </button>
            ))}
          </div>

          {/* Active Study Detail Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#222226] border-2 border-stone-700 p-6 sm:p-8">
            
            {/* Left: Rehearsal Still / Film Frame Placeholder */}
            <div className="lg:col-span-5 relative">
              <div className="bg-[#FFF0C7] border-3 border-[#171719] p-4 text-[#171719] shadow-retro-sm">
                <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-[#171719] font-mono-code text-xs font-bold">
                  <span>FRAME // 35MM REEL</span>
                  <span className="text-[#FF300F]">{activeStudy.act}</span>
                </div>

                <div className="relative h-56 bg-[#171719] border-2 border-[#171719] overflow-hidden flex flex-col items-center justify-center text-center p-4">
                  <div className="halftone-dots-orange absolute inset-0 opacity-20 pointer-events-none" />
                  
                  {/* Cinematic Slate Overlay */}
                  <div className="relative z-10 w-full">
                    <span className="font-display text-xl text-[#FFB879] tracking-wider block mb-1">
                      {activeStudy.title}
                    </span>
                    <span className="font-script text-base text-[#70B9AF] block mb-3">
                      Theme: {activeStudy.theme}
                    </span>
                    <div className="w-16 h-0.5 bg-[#FF300F] mx-auto mb-3" />
                    <span className="text-[10px] font-mono-code text-stone-300 bg-black/70 px-2.5 py-1 border border-stone-600 inline-block">
                      [Curated performance slot &bull; ready for video / still link]
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-mono-code font-bold">
                  <span>DIRECTOR: VAISHNAVI</span>
                  <span className="text-[#007F86]">TAKE 01</span>
                </div>
              </div>
            </div>

            {/* Right: Director's Breakdown & Stage Directions */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div>
                <span className="font-mono-code text-xs text-[#FF741F] font-bold uppercase tracking-wider block mb-1">
                  CHARACTER CRAFT &bull; {activeStudy.theme}
                </span>
                <h4 className="font-display text-2xl sm:text-3xl text-[#FFF8E8] leading-tight">
                  {activeStudy.title}
                </h4>
                <p className="font-body text-base text-stone-300 mt-3 leading-relaxed">
                  {activeStudy.description}
                </p>
              </div>

              {/* Focus Point */}
              <div className="bg-[#171719] border-2 border-stone-700 p-4">
                <span className="font-mono-code text-[11px] font-bold text-[#FFB879] uppercase block mb-1">
                  REHEARSAL FOCUS:
                </span>
                <p className="font-body text-sm text-[#FFF0C7]">
                  {activeStudy.rehearsalFocus}
                </p>
              </div>

              {/* Stage Direction Script Excerpt */}
              <div className="bg-[#2a2a2f] border-l-4 border-[#FF300F] p-4 text-xs font-mono-code text-[#70B9AF]">
                <span className="text-[#FF741F] font-bold block mb-1">// STAGE DIRECTION NOTES</span>
                <p className="italic text-stone-300">{activeStudy.stageDirection}</p>
              </div>
            </div>

          </div>

          {/* Bottom Note */}
          <div className="mt-6 pt-4 border-t border-stone-700 flex flex-wrap items-center justify-between gap-3 text-xs font-mono-code text-stone-400">
            <span>READY TO COLLABORATE ON THEATRE, INDIE SCRIPTS, AND ON-CAMERA WORK</span>
            <a href="#contact" className="text-[#FFB879] hover:underline font-bold">
              DISCUSS A PRODUCTION &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

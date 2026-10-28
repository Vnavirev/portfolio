import React from 'react';
import { RetroStar, ClapperboardIcon } from './RetroGraphics';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171719] text-[#FFF0C7] border-t-4 border-[#171719] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Roll Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-2 border-stone-800">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 bg-[#FF300F] border-2 border-[#FFF0C7] flex items-center justify-center">
              <span className="font-display text-white text-lg">VR</span>
            </div>
            <div>
              <span className="font-display text-xl tracking-wider text-[#FFF8E8] block">
                VAISHNAVI REVADKAR
              </span>
              <span className="font-mono-code text-xs text-[#70B9AF] tracking-widest uppercase">
                THE RETRO CINEMA PORTFOLIO &bull; ACTOR &amp; CODER
              </span>
            </div>
          </div>

          {/* End Credits Badge */}
          <div className="flex items-center gap-2 bg-[#222226] border-2 border-stone-700 px-4 py-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF741F] animate-pulse" />
            <span className="font-display text-xs tracking-widest text-[#FFB879] uppercase">
              END CREDITS &bull; ROLL REEL
            </span>
          </div>
        </div>

        {/* Middle Navigation & Editorial Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-b border-stone-800 items-start">
          
          {/* Column 1: Philosophy */}
          <div>
            <span className="font-mono-code text-xs font-bold text-[#FF300F] uppercase tracking-wider block mb-2">
              CREATIVE LOGLINE
            </span>
            <p className="font-script text-xl text-[#FFB879] leading-snug">
              &ldquo;Made of stories, curiosity, and code.&rdquo;
            </p>
            <p className="font-body text-xs text-stone-400 mt-2 leading-relaxed">
              Exploring human expression on stage, and computational clarity in C, Python, and Java.
            </p>
          </div>

          {/* Column 2: Jump To Scenes (Working Nav) */}
          <div>
            <span className="font-mono-code text-xs font-bold text-[#007F86] uppercase tracking-wider block mb-2">
              SCENE NAVIGATION
            </span>
            <ul className="space-y-1.5 font-mono-code text-xs">
              <li>
                <a href="#about" className="hover:text-[#FF741F] transition-colors flex items-center gap-2">
                  <span className="text-[#FF300F]">&rarr;</span> 01 / Behind the Scenes (About)
                </a>
              </li>
              <li>
                <a href="#acting" className="hover:text-[#FF741F] transition-colors flex items-center gap-2">
                  <span className="text-[#FF300F]">&rarr;</span> 02 / Take the Stage (Acting)
                </a>
              </li>
              <li>
                <a href="#code" className="hover:text-[#FF741F] transition-colors flex items-center gap-2">
                  <span className="text-[#FF300F]">&rarr;</span> 03 / The Other Side (Code)
                </a>
              </li>
              <li>
                <a href="#crossover" className="hover:text-[#FF741F] transition-colors flex items-center gap-2">
                  <span className="text-[#FF300F]">&rarr;</span> 04 / The Plot Twist (Crossover)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF741F] transition-colors flex items-center gap-2">
                  <span className="text-[#FF300F]">&rarr;</span> 05 / Your Cue (Contact)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: The Production Details */}
          <div>
            <span className="font-mono-code text-xs font-bold text-[#FF741F] uppercase tracking-wider block mb-2">
              PRODUCTION DETAILS
            </span>
            <div className="bg-[#222226] border border-stone-700 p-3 text-xs font-mono-code space-y-1 text-stone-300">
              <div className="flex justify-between">
                <span>FORMAT:</span>
                <span className="text-[#FFF0C7]">35mm Widescreen</span>
              </div>
              <div className="flex justify-between">
                <span>LANGUAGES:</span>
                <span className="text-[#FFB879]">C &bull; Python &bull; Java</span>
              </div>
              <div className="flex justify-between">
                <span>SOUNDTRACK:</span>
                <span className="text-[#70B9AF]">Keyboards &amp; Monologues</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-stone-400">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} Vaishnavi Revadkar.</span>
            <span>&bull;</span>
            <span className="text-[#FF741F]">Original Retro Cinema Direction</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#70B9AF]">★</span>
            <a
              href="#"
              className="text-stone-300 hover:text-[#FFF0C7] underline decoration-[#FF300F] underline-offset-2"
            >
              Back to Top &uarr;
            </a>
            <span className="text-[#70B9AF]">★</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

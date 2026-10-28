import React, { useState } from 'react';
import { RetroStar, ClapperboardIcon } from './RetroGraphics';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '01 / About', href: '#about', title: 'Behind the Scenes' },
    { label: '02 / Acting', href: '#acting', title: 'Take the Stage' },
    { label: '03 / Code', href: '#code', title: 'The Other Side' },
    { label: '04 / Crossover', href: '#crossover', title: 'Plot Twist' },
    { label: '05 / Contact', href: '#contact', title: 'Your Cue' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFF0C7] border-b-4 border-[#171719] transition-all">
      {/* Top Editorial Ticker Bar */}
      <div className="bg-[#171719] text-[#FFF0C7] py-1 px-4 text-xs font-mono-code flex justify-between items-center border-b border-[#171719]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#FF300F] animate-pulse"></span>
          <span className="font-bold tracking-wider uppercase text-[11px] text-[#FFB879]">
            DIRECTOR&apos;S EDITION &bull; VOL. 2026
          </span>
          <span className="hidden sm:inline text-[#70B9AF]">&bull;</span>
          <span className="hidden sm:inline text-stone-300">ACTOR &bull; PROGRAMMER (C &bull; PYTHON &bull; JAVA)</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span className="text-[#FF741F] font-bold">READY FOR ACTION</span>
          <span className="text-[#70B9AF]">★</span>
          <a
            href="#contact"
            className="text-[#FFF0C7] underline decoration-[#FF300F] decoration-2 underline-offset-2 hover:text-[#FFB879]"
          >
            CALL SHEET
          </a>
        </div>
      </div>

      {/* Main Masthead Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Left: Brand Monogram & Name */}
        <a href="#" className="flex items-center gap-3.5 group focus-visible:outline-2 focus-visible:outline-[#FF300F] focus-visible:outline-offset-4">
          {/* Monogram Badge */}
          <div className="relative w-12 h-12 bg-[#FF300F] border-3 border-[#171719] shadow-retro-sm flex items-center justify-center transform group-hover:-rotate-3 transition-transform">
            <span className="font-display text-white text-xl tracking-tighter">VR</span>
            <div className="absolute -top-1 -right-1">
              <RetroStar size={12} color="#FFF0C7" />
            </div>
          </div>

          {/* Masthead Typography */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-xl sm:text-2xl text-[#171719] tracking-tight group-hover:text-[#FF300F] transition-colors">
                VAISHNAVI REVADKAR
              </span>
              <RetroStar size={14} color="#007F86" className="hidden sm:inline-block" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono-code font-bold tracking-wider text-[#007F86]">
              <span>THE ARTIST</span>
              <span className="text-[#FF741F]">&bull;</span>
              <span>THE CODER</span>
              <span className="text-[#FF741F]">&bull;</span>
              <span className="text-[#171719]">STAGE &amp; LOGIC</span>
            </div>
          </div>
        </a>

        {/* Right: Desktop Navigation Links (No pill tags, clean typography with retro hover lines) */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 text-sm font-bold text-[#171719] tracking-wide transition-colors hover:text-[#FF300F] focus-visible:outline-2 focus-visible:outline-[#FF300F]"
            >
              <span className="font-mono-code text-[11px] text-[#007F86] mr-1 block group-hover:text-[#FF741F]">
                {link.label.split('/')[0]}
              </span>
              <span className="font-display tracking-normal text-base">{link.label.split('/')[1].trim()}</span>
              {/* Retro underline effect */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF300F] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}

          {/* Prominent Action Button */}
          <a
            href="#contact"
            className="ml-2 px-5 py-2.5 bg-[#FF300F] text-[#FFF0C7] font-display text-sm tracking-wide border-2 border-[#171719] shadow-retro-sm btn-tactile hover:bg-[#FF741F] focus-visible:outline-2 focus-visible:outline-[#171719]"
          >
            LET&apos;S TALK
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="#contact"
            className="px-3 py-1.5 bg-[#FF300F] text-[#FFF0C7] font-display text-xs border-2 border-[#171719] shadow-retro-sm btn-tactile"
          >
            CONNECT
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-[#171719] bg-[#FFF8E8] shadow-retro-sm btn-tactile focus-visible:outline-2 focus-visible:outline-[#FF300F]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-[#171719] transition-transform ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#171719] transition-opacity ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-[#171719] transition-transform ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFF8E8] border-t-2 border-[#171719] px-6 py-6 shadow-retro-lg transition-all animate-in slide-in-from-top-2">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b-2 border-dashed border-[#FF741F]">
            <ClapperboardIcon width={28} height={24} />
            <span className="font-display text-xs text-[#007F86] tracking-widest uppercase">
              TABLE OF CONTENTS &bull; ACT I - V
            </span>
          </div>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 border-2 border-[#171719] bg-[#FFF0C7] shadow-retro-sm active:translate-x-1 active:translate-y-1"
              >
                <div className="flex flex-col">
                  <span className="font-mono-code text-xs text-[#FF300F] font-bold">{link.label}</span>
                  <span className="font-display text-lg text-[#171719]">{link.title}</span>
                </div>
                <span className="font-display text-[#007F86] text-xl">&rarr;</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center p-3 bg-[#FF300F] text-[#FFF0C7] font-display text-base border-2 border-[#171719] shadow-retro-md"
            >
              SEND INVITATION &bull; YOUR CUE
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

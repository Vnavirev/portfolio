/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ActingSection } from './components/ActingSection';
import { ProgrammingSection } from './components/ProgrammingSection';
import { CrossoverSection } from './components/CrossoverSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF0C7] text-[#171719] flex flex-col font-body selection:bg-[#FF300F] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ActingSection />
        <ProgrammingSection />
        <CrossoverSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

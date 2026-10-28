import React, { useState } from 'react';
import { RetroStar, ConcentricCircles } from './RetroGraphics';

interface LanguageDetail {
  id: string;
  name: string;
  category: string;
  badge: string;
  headline: string;
  description: string;
  focusAreas: string[];
  sampleCode: string;
  borderColor: string;
  cardBg: string;
}

const languages: LanguageDetail[] = [
  {
    id: 'c',
    name: 'C PROGRAMMING',
    category: 'The Foundational Architecture',
    badge: 'SYSTEMS & STRUCTURE',
    headline: 'Foundational programming and structured problem-solving.',
    description:
      'Working in C provides a deep appreciation for the anatomy of a machine. It demands mental discipline: understanding how memory is laid out, tracking pointers with precision, and crafting procedural solutions where every single byte counts.',
    focusAreas: [
      'Structured procedural logic',
      'Memory management & pointers',
      'Algorithmic problem breakdown',
      'Control flow and system fundamentals',
    ],
    sampleCode: `/* Foundational Logic in C */
#include <stdio.h>

void solve_problem(int complexity) {
    printf("Deconstructing logic step-by-step...\\n");
    for (int step = 1; step <= complexity; step++) {
        printf("Refining instruction %d\\n", step);
    }
    printf("Problem resolved with structural clarity.\\n");
}

int main(void) {
    solve_problem(3);
    return 0;
}`,
    borderColor: '#FF300F',
    cardBg: '#FFF8E8',
  },
  {
    id: 'python',
    name: 'PYTHON',
    category: 'Curiosity & Prototyping',
    badge: 'EXPERIMENTATION',
    headline: 'A language for experimentation, programming practice, and exploring computational ideas.',
    description:
      'Python is the workshop where ideas can be tested immediately. Its clean readability lets curiosity lead the way, making it ideal for prototyping scripts, exploring logic puzzles, and automating repetitive tasks.',
    focusAreas: [
      'Expressive, readable syntax',
      'Rapid hypothesis testing',
      'Algorithmic exploration',
      'Scripting & automation exercises',
    ],
    sampleCode: `# Computational Exploration in Python
def explore_idea(idea_name: str, iterations: int = 3):
    print(f"Testing concept: {idea_name}")
    insights = [f"Discovery #{i}" for i in range(1, iterations + 1)]
    return {
        "concept": idea_name,
        "results": insights,
        "ready_for_stage": True
    }

print(explore_idea("Creative Algorithm"))`,
    borderColor: '#007F86',
    cardBg: '#FFF0C7',
  },
  {
    id: 'java',
    name: 'JAVA',
    category: 'Object-Oriented Design',
    badge: 'OOP FOUNDATIONS',
    headline: 'Learning object-oriented programming concepts and building a stronger programming foundation.',
    description:
      'Java reinforces architectural discipline through object-oriented design. It models reality into distinct objects, encapsulating behaviors, establishing class hierarchies, and building robust, maintainable logic structures.',
    focusAreas: [
      'Object-oriented principles (OOP)',
      'Class modeling & encapsulation',
      'Type safety & structured design',
      'Building maintainable systems',
    ],
    sampleCode: `// Object-Oriented Blueprint in Java
public class PerformerCoder {
    private final String name;
    private boolean activeCuriosity;

    public PerformerCoder(String name) {
        this.name = name;
        this.activeCuriosity = true;
    }

    public void rehearseAndExecute() {
        if (activeCuriosity) {
            System.out.println(name + " executes with rigor.");
        }
    }
}`,
    borderColor: '#FF741F',
    cardBg: '#FFF8E8',
  },
];

export const ProgrammingSection: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageDetail>(languages[0]);

  return (
    <section id="code" className="py-24 bg-[#FFF8E8] border-b-4 border-[#171719] relative overflow-hidden">
      {/* Decorative concentric rings */}
      <div className="absolute top-12 left-4 pointer-events-none opacity-20 hidden md:block">
        <ConcentricCircles size={260} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b-3 border-[#171719]">
          <div className="flex items-center gap-3">
            <span className="font-mono-code text-xs font-bold bg-[#007F86] text-[#FFF8E8] px-3.5 py-1.5 border-2 border-[#171719] shadow-retro-sm uppercase tracking-widest">
              03 / THE OTHER SIDE OF THE SCRIPT
            </span>
            <RetroStar size={16} color="#FF300F" />
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono-code text-xs font-black bg-[#FFB879] text-[#171719] px-2.5 py-1 border border-[#171719] uppercase tracking-wider">
              EVERY BUG HAS A PLOT.
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#171719] leading-tight tracking-tight uppercase">
            PLOT TWIST:{' '}
            <span className="text-[#FF300F] text-shadow-teal">
              I CODE, TOO.
            </span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-[#171719] font-medium mt-4 leading-relaxed bg-[#FFF0C7] p-4 border-2 border-[#171719] shadow-retro-sm inline-block">
            Beyond the spotlight, I enjoy exploring programming, learning how systems work, and solving problems one line at a time.
          </p>
        </div>

        {/* Asymmetrical Composition: One Larger Featured Panel (C) + Two Supporting Panels (Python & Java) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Main Large Featured Panel (C Programming) */}
          <div className="lg:col-span-7 bg-[#FFF0C7] border-4 border-[#171719] p-6 sm:p-8 shadow-retro-xl flex flex-col justify-between relative overflow-hidden">
            {/* Top Tape Accent */}
            <div className="absolute top-0 right-10 bg-[#FF300F] text-[#FFF0C7] font-display text-xs px-4 py-1 border-x-2 border-b-2 border-[#171719] tracking-wider uppercase">
              FOUNDATIONAL LOGIC
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#007F86] mb-2">
                <span>LANGUAGE NO. 01</span>
                <span>&bull;</span>
                <span>SYSTEMS ARCHITECTURE</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl text-[#171719] mb-3 tracking-tight">
                C PROGRAMMING
              </h3>

              <div className="p-3 bg-[#FFB879] border-2 border-[#171719] font-display text-sm text-[#171719] mb-4">
                Foundational programming and structured problem-solving.
              </div>

              <p className="font-body text-base text-[#171719] leading-relaxed mb-6">
                Working in C provides a deep appreciation for the anatomy of a machine. It demands mental discipline: understanding how memory is laid out, tracking pointers with precision, and crafting procedural solutions where every single byte counts.
              </p>

              {/* Focus points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {languages[0].focusAreas.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-[#FFF8E8] p-2.5 border-2 border-[#171719]">
                    <span className="text-[#FF300F] font-bold">&bull;</span>
                    <span className="font-mono-code text-xs text-[#171719] font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Retro Code Preview Box */}
            <div className="bg-[#171719] border-3 border-[#171719] p-4 text-[#FFF0C7] font-mono-code text-xs">
              <div className="flex justify-between items-center pb-2 mb-2 border-b border-stone-700 text-stone-400 text-[11px]">
                <span>terminal://gcc -Wall main.c -o solution</span>
                <span className="text-[#70B9AF]">COMPILED OK</span>
              </div>
              <pre className="text-[12px] leading-relaxed overflow-x-auto text-[#FFB879]">
                {languages[0].sampleCode}
              </pre>
            </div>
          </div>

          {/* Two Supporting Panels: Python & Java */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Supporting Panel 1: Python */}
            <div className="bg-[#FFF8E8] border-3 border-[#171719] p-6 shadow-retro-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-dashed border-[#171719]">
                  <span className="font-mono-code text-xs font-bold text-[#007F86]">
                    LANGUAGE NO. 02
                  </span>
                  <span className="bg-[#007F86] text-[#FFF8E8] text-[10px] font-mono-code font-bold px-2 py-0.5 border border-[#171719]">
                    EXPERIMENTATION
                  </span>
                </div>

                <h3 className="font-display text-2xl text-[#171719] tracking-tight mb-2">
                  PYTHON
                </h3>

                <p className="font-body text-sm text-[#171719] font-semibold mb-3">
                  A language for experimentation, programming practice, and exploring computational ideas.
                </p>

                <p className="font-body text-xs text-[#171719] leading-relaxed mb-4">
                  Its clean readability lets curiosity lead the way, making it ideal for testing logic puzzles, experimenting with algorithms, and transforming conceptual sketches into functional code quickly.
                </p>

                {/* Key focus tags */}
                <div className="space-y-1.5 font-mono-code text-xs">
                  <div className="bg-[#FFF0C7] p-2 border border-[#171719] flex items-center justify-between">
                    <span>Clean syntax &amp; rapid trials</span>
                    <span className="text-[#007F86] font-bold">&check;</span>
                  </div>
                  <div className="bg-[#FFF0C7] p-2 border border-[#171719] flex items-center justify-between">
                    <span>Computational curiosity</span>
                    <span className="text-[#007F86] font-bold">&check;</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t-2 border-[#171719] flex items-center justify-between text-xs font-mono-code font-bold text-[#007F86]">
                <span>PYTHON 3.x</span>
                <span>INTERACTIVE REPL</span>
              </div>
            </div>

            {/* Supporting Panel 2: Java */}
            <div className="bg-[#FFB879] border-3 border-[#171719] p-6 shadow-retro-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-dashed border-[#171719]">
                  <span className="font-mono-code text-xs font-bold text-[#171719]">
                    LANGUAGE NO. 03
                  </span>
                  <span className="bg-[#171719] text-[#FFF8E8] text-[10px] font-mono-code font-bold px-2 py-0.5 border border-[#171719]">
                    OOP CONCEPTS
                  </span>
                </div>

                <h3 className="font-display text-2xl text-[#171719] tracking-tight mb-2">
                  JAVA
                </h3>

                <p className="font-body text-sm text-[#171719] font-semibold mb-3">
                  Learning object-oriented programming concepts and building a stronger programming foundation.
                </p>

                <p className="font-body text-xs text-[#171719] leading-relaxed mb-4">
                  Encapsulation, class modeling, and structured software thinking. Java teaches the value of design patterns and rigorous architecture when scaling beyond simple scripts.
                </p>

                <div className="space-y-1.5 font-mono-code text-xs">
                  <div className="bg-[#FFF8E8] p-2 border border-[#171719] flex items-center justify-between">
                    <span>Object-oriented modeling</span>
                    <span className="text-[#FF300F] font-bold">&check;</span>
                  </div>
                  <div className="bg-[#FFF8E8] p-2 border border-[#171719] flex items-center justify-between">
                    <span>Class hierarchy &amp; types</span>
                    <span className="text-[#FF300F] font-bold">&check;</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t-2 border-[#171719] flex items-center justify-between text-xs font-mono-code font-bold text-[#171719]">
                <span>JAVA VIRTUAL MACHINE</span>
                <span>WRITE ONCE, RUN ANYWHERE</span>
              </div>
            </div>

          </div>

        </div>

        {/* Playful Annotation Stamp */}
        <div className="flex items-center justify-center">
          <div className="bg-[#171719] text-[#FFF0C7] border-3 border-[#171719] px-6 py-3 shadow-retro-md transform -rotate-1 flex items-center gap-3">
            <span className="text-[#FF300F] font-display text-xl">★</span>
            <span className="font-display text-base tracking-wider uppercase text-[#FFB879]">
              &ldquo;EVERY BUG HAS A PLOT. EVERY LOGIC TRACE HAS A RESOLUTION.&rdquo;
            </span>
            <span className="text-[#FF300F] font-display text-xl">★</span>
          </div>
        </div>

      </div>
    </section>
  );
};

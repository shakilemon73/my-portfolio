import { useScrollProgress } from '@/hooks/use-scroll-progress';
import { useActiveSection } from '@/hooks/use-active-section';
import { useState } from 'react';

export function ScrollProgress() {
  const progress = useScrollProgress();
  const activeSection = useActiveSection();
  const [isExpanded, setIsExpanded] = useState(false);

  const sections = [
    { id: 'home', label: 'Home', short: 'H' },
    { id: 'work', label: 'Work', short: 'W' },
    { id: 'process', label: 'Process', short: 'P' },
    { id: 'credentials', label: 'Credentials', short: 'C' },
    { id: 'about', label: 'About', short: 'A' },
    { id: 'skills', label: 'Skills', short: 'S' },
    { id: 'testimonials', label: 'Reviews', short: 'R' },
    { id: 'contact', label: 'Contact', short: 'T' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentSectionIndex = sections.findIndex(s => s.id === activeSection);

  return (
    <>
      {/* Minimal Progress Line - Apple Style */}
      <div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-transparent z-50 pointer-events-none"
        style={{ 
          background: `linear-gradient(90deg, rgb(0, 255, 255) ${progress}%, transparent ${progress}%)`,
          opacity: progress > 1 ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* Desktop: Ultra-Minimal Navigation - Apple/Linear Style */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center gap-2 py-3">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative min-w-[48px] min-h-[48px] flex items-center justify-center"
              title={`Navigate to ${section.label}`}
              data-testid={`nav-${section.id}`}
              aria-label={`Navigate to ${section.label} section`}
            >
              {/* Touch target area (invisible but ensures 48px minimum) */}
              <div className="absolute inset-0 rounded-full" />
              
              {/* Visual dot */}
              <div className={`relative z-10 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'w-3 h-3 bg-electric-cyan shadow-lg shadow-electric-cyan/40 ring-2 ring-electric-cyan/20 ring-offset-2 ring-offset-transparent'
                  : 'w-2 h-2 bg-slate-500/50 group-hover:w-2.5 group-hover:h-2.5 group-hover:bg-electric-cyan/70'
              }`} />

              {/* Progress indicator for active section */}
              {activeSection === section.id && (
                <div className="absolute inset-0 rounded-full">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      fill="none"
                      stroke="rgb(0, 255, 255)"
                      strokeWidth="1"
                      strokeDasharray="125.66"
                      strokeDashoffset={125.66 - (progress / 100) * 125.66}
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-out opacity-40"
                    />
                  </svg>
                </div>
              )}

              {/* Hover tooltip */}
              <div className={`absolute right-14 top-1/2 -translate-y-1/2 px-3 py-2 bg-black/95 text-white text-sm font-medium rounded-lg backdrop-blur-sm border border-slate-700/40 whitespace-nowrap pointer-events-none transition-all duration-200 ${
                activeSection === section.id || isExpanded
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 translate-x-2 scale-95'
              }`}>
                {section.label}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black/95 rotate-45 border-l border-b border-slate-700/40" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: Clean Bottom Indicator - Stripe Style */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden">
        <div className="bg-black/80 backdrop-blur-md rounded-full px-4 py-2 border border-slate-700/30 shadow-2xl">
          <div className="flex items-center gap-3">
            {/* Section indicator */}
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-electric-cyan rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                {sections.find(s => s.id === activeSection)?.label}
              </span>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-1 ml-2">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index <= currentSectionIndex
                      ? 'bg-electric-cyan'
                      : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>

            {/* Percentage */}
            <span className="text-electric-cyan/80 text-xs font-mono ml-1">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

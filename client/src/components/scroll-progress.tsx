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

      {/* Desktop: Minimal Dot Navigation - Linear/Figma Style */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div 
          className="group"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          {/* Progress Ring */}
          <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full">
            <svg className="w-6 h-6 -rotate-90 opacity-60" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="rgb(71, 85, 105)"
                strokeWidth="1"
                opacity="0.2"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="rgb(0, 255, 255)"
                strokeWidth="1.5"
                strokeDasharray="62.83"
                strokeDashoffset={62.83 - (progress / 100) * 62.83}
                strokeLinecap="round"
                className="transition-all duration-500 ease-out"
              />
            </svg>
          </div>

          {/* Section Dots */}
          <div className="flex flex-col items-center gap-3 py-2">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group/dot relative transition-all duration-300 ${
                  activeSection === section.id
                    ? 'w-4 h-4'
                    : 'w-2 h-2 hover:w-3 hover:h-3'
                }`}
                title={`Go to ${section.label}`}
                data-testid={`nav-${section.id}`}
                aria-label={`Navigate to ${section.label} section`}
              >
                {/* Dot */}
                <div className={`rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'w-full h-full bg-electric-cyan shadow-lg shadow-electric-cyan/30'
                    : 'w-full h-full bg-slate-500/60 hover:bg-electric-cyan/70'
                }`} />

                {/* Label on hover */}
                <div className={`absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black/90 text-white text-sm font-medium rounded-lg backdrop-blur-sm border border-slate-700/50 whitespace-nowrap pointer-events-none transition-all duration-200 ${
                  isExpanded 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-2'
                }`}>
                  {section.label}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black/90 rotate-45 border-l border-b border-slate-700/50" />
                </div>

                {/* Active indicator line */}
                {activeSection === section.id && (
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-electric-cyan rounded-full" />
                )}
              </button>
            ))}
          </div>
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

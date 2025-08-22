import { useScrollProgress } from '@/hooks/use-scroll-progress';
import { useActiveSection } from '@/hooks/use-active-section';

export function ScrollProgress() {
  const progress = useScrollProgress();
  const activeSection = useActiveSection();

  const sections = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'work', label: 'Work', icon: 'fas fa-briefcase' },
    { id: 'process', label: 'Process', icon: 'fas fa-cogs' },
    { id: 'credentials', label: 'Credentials', icon: 'fas fa-award' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'skills', label: 'Skills', icon: 'fas fa-tools' },
    { id: 'testimonials', label: 'Reviews', icon: 'fas fa-quote-left' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Progress Bar at Top */}
      <div className="fixed top-0 left-0 w-full h-1 bg-deep-black/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-electric-cyan to-neon-pink transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Floating Section Tracker */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="glass-morphism rounded-2xl p-3 border border-glass-border/30">
          <div className="flex flex-col gap-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 min-w-[200px] min-h-[48px] text-left ${
                  activeSection === section.id
                    ? 'bg-electric-cyan text-deep-black font-semibold'
                    : 'text-cool-gray hover:text-white hover:bg-white/5'
                }`}
                title={`Go to ${section.label} section`}
                data-testid={`tracker-${section.id}`}
              >
                <i className={`${section.icon} text-sm ${
                  activeSection === section.id ? 'text-deep-black' : 'text-electric-cyan'
                }`} />
                <span className="text-sm font-medium">{section.label}</span>
                
                {/* Active Indicator */}
                {activeSection === section.id && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-neon-pink rounded-full" />
                )}
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-electric-cyan/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  activeSection === section.id ? 'opacity-0' : ''
                }`} />
              </button>
            ))}
          </div>
          
          {/* Progress Indicator */}
          <div className="mt-4 pt-3 border-t border-glass-border/20">
            <div className="flex items-center gap-2 text-xs text-cool-gray">
              <i className="fas fa-chart-line text-electric-cyan" />
              <span>Progress</span>
              <span className="font-mono text-electric-cyan ml-auto">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full h-1 bg-glass-border rounded-full mt-2">
              <div 
                className="h-full bg-gradient-to-r from-electric-cyan to-neon-pink rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Section Indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 lg:hidden">
        <div className="glass-morphism rounded-full px-6 py-3 border border-glass-border/30">
          <div className="flex items-center gap-2 text-sm">
            <i className={`${sections.find(s => s.id === activeSection)?.icon} text-electric-cyan`} />
            <span className="text-white font-medium">
              {sections.find(s => s.id === activeSection)?.label}
            </span>
            <div className="w-12 h-1 bg-glass-border rounded-full ml-3">
              <div 
                className="h-full bg-electric-cyan rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

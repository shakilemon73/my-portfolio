import { Button } from '@/components/ui/button';
import { PORTFOLIO_DATA } from '@/lib/constants';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="border-r border-cool-gray"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in">
          <div className="mb-6">
            <span className="font-mono text-electric-cyan text-sm tracking-wider">
              {PORTFOLIO_DATA.title.toUpperCase()}
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-tight text-white">
            <span className="block">SHAKIL</span>
            <span className="block text-gradient">AHMED</span>
            <span className="block">EMON</span>
          </h1>
          <p className="text-xl sm:text-2xl text-cool-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            {PORTFOLIO_DATA.tagline}.{' '}
            <span className="text-electric-cyan">{PORTFOLIO_DATA.experience}</span> of transforming complex problems into elegant solutions.
          </p>
          {/* UX Enhancement: Clear Call-to-Action Hierarchy (Don Norman + Luke Wroblewski) */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection('work')}
              className="px-8 py-4 bg-electric-cyan text-deep-black font-semibold rounded-full hover-glow transition-all duration-300 min-h-[44px] min-w-[44px] focus:ring-4 focus:ring-electric-cyan/30 active:scale-95"
              data-hover
              aria-label="View portfolio work section"
              data-testid="button-view-work"
            >
              <i className="fas fa-external-link-alt mr-2" aria-hidden="true"></i>
              <span>View My Work</span>
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 glass-morphism rounded-full font-semibold hover-glow transition-all duration-300 border-glass-border min-h-[44px] min-w-[44px] focus:ring-4 focus:ring-white/30 active:scale-95"
              data-hover
              aria-label="Navigate to contact section"
              data-testid="button-contact"
            >
              <i className="fas fa-envelope mr-2" aria-hidden="true"></i>
              <span>Let's Connect</span>
            </Button>
          </div>
          <div className="animate-float">
            <i className="fas fa-chevron-down text-2xl text-electric-cyan animate-bounce"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

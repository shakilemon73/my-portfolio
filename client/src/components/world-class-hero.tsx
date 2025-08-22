import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function WorldClassHero() {
  const [isVisible, setIsVisible] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-deep-black via-charcoal to-deep-black pt-32">
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0">
        {/* Minimal Grid - Performance Optimized */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 h-full">
            {Array.from({ length: 32 }).map((_, index) => (
              <div 
                key={index} 
                className="border border-electric-cyan/50"
              ></div>
            ))}
          </div>
        </div>
        
        {/* Single Floating Element */}
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-electric-cyan/10 to-white/5 rounded-lg"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Availability Badge - Single, Clear Status */}
          <div className={`mb-8 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Badge variant="outline" className="glass-morphism border-neon-green text-neon-green px-6 py-3 text-base font-medium min-h-[48px] hover:scale-105 transition-all duration-300">
              <i className="fas fa-circle mr-3 text-sm animate-pulse" aria-hidden="true"></i>
              Available for New Projects
            </Badge>
          </div>

          {/* Clear, Static Title */}
          <div className={`mb-8 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="font-mono text-electric-cyan text-lg tracking-wider uppercase mb-4">
              Senior UX/UI Product Designer
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block text-white">SHAKIL</span>
              <span className="block bg-gradient-to-r from-electric-cyan to-white bg-clip-text text-transparent">AHMED</span>
              <span className="block text-white">EMON</span>
            </h1>
          </div>

          {/* Focused Value Proposition */}
          <div className={`mb-12 max-w-4xl mx-auto transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="text-xl sm:text-2xl text-white leading-relaxed mb-6">
              I design <span className="text-electric-cyan font-semibold">user-centered digital experiences</span> that 
              increase conversions by <span className="text-white font-bold">245%</span> on average
            </p>
            <p className="text-lg text-cool-gray">
              <span className="text-white font-semibold">6+ years</span> designing for Fortune 500 companies • 
              <span className="text-electric-cyan font-semibold"> 2.5M+ users</span> impacted • 
              <span className="text-white font-semibold">$12M+</span> revenue generated
            </p>
          </div>

          {/* Single Primary CTA */}
          <div className={`mb-16 transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <Button
              onClick={() => scrollToSection('work')}
              size="lg"
              className="bg-white text-deep-black font-bold px-12 py-6 rounded-full hover:bg-electric-cyan hover:scale-105 transition-all duration-300 shadow-2xl min-w-[280px] min-h-[64px] text-xl group focus:ring-4 focus:ring-electric-cyan/20"
              data-testid="button-view-portfolio"
              aria-label="View my portfolio and case studies"
            >
              <i className="fas fa-arrow-right mr-3 group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
              <span>View My Work</span>
            </Button>
            
            {/* Secondary Action - Subtle */}
            <div className="mt-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-cool-gray hover:text-white transition-colors text-lg underline decoration-electric-cyan underline-offset-4 min-h-[48px] px-4 py-2"
                data-testid="link-contact"
                aria-label="Contact me for a project discussion"
              >
                Let's discuss your project →
              </button>
            </div>
          </div>

          {/* Professional Info */}
          <div className={`mb-8 transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-sm text-cool-gray">
              <div className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-electric-cyan" aria-hidden="true"></i>
                <span>Global Remote</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-cool-gray rounded-full"></div>
              <div className="flex items-center gap-2">
                <i className="fas fa-clock text-neon-green" aria-hidden="true"></i>
                <span>Available US/EU Hours</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-cool-gray rounded-full"></div>
              <div className="flex items-center gap-2">
                <i className="fas fa-reply text-electric-cyan" aria-hidden="true"></i>
                <span>2hr Response Time</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`text-center transform transition-all duration-700 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button 
              onClick={() => scrollToSection('work')}
              className="animate-bounce hover:animate-none focus:animate-none min-h-[48px] min-w-[48px] p-2 rounded-full hover:bg-white/5 transition-colors"
              aria-label="Scroll to work section"
            >
              <i className="fas fa-chevron-down text-2xl text-electric-cyan/70 hover:text-electric-cyan transition-colors" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import shakilLogo from '@assets/generated_images/Dribbble-style_creative_tool_brand_cee52e2d.png';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('#mobileMenu') && !target.closest('#mobileMenuBtn')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-morphism">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* UX Enhancement: Clear Brand Identity (Jonathan Ive - Purpose) */}
            <div className="min-h-[48px] flex items-center" role="banner">
              <img 
                src={shakilLogo} 
                alt="Shakil Ahmed Emon - Senior UX/UI Designer" 
                className="h-12 w-auto hover:scale-105 transition-transform duration-300 cursor-pointer min-h-[48px] min-w-[48px]"
                onClick={() => scrollToSection('home')}
                data-testid="brand-logo"
              />
            </div>
            
            {/* UX Enhancement: Navigation with Clear Affordances (Don Norman - Discoverability) */}
            <div className="hidden md:flex space-x-2" role="navigation" aria-label="Main navigation">
              <button 
                onClick={() => scrollToSection('home')}
                className="min-h-[48px] min-w-[48px] px-4 py-3 text-white hover:text-electric-cyan transition-all duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10 focus:bg-electric-cyan/20 focus:text-electric-cyan" 
                data-hover
                aria-label="Navigate to home section"
              >
                <span className="scannable-text">Home</span>
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                className="min-h-[48px] min-w-[48px] px-4 py-3 text-white hover:text-electric-cyan transition-all duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10 focus:bg-electric-cyan/20 focus:text-electric-cyan" 
                data-hover
                aria-label="Navigate to work portfolio section"
              >
                <span className="scannable-text">Work</span>
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="min-h-[48px] min-w-[48px] px-4 py-3 text-white hover:text-electric-cyan transition-all duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10 focus:bg-electric-cyan/20 focus:text-electric-cyan" 
                data-hover
                aria-label="Navigate to design process section"
              >
                <span className="scannable-text">Process</span>
              </button>
              <button 
                onClick={() => scrollToSection('credentials')}
                className="min-h-[48px] min-w-[48px] px-4 py-3 text-white hover:text-electric-cyan transition-all duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10 focus:bg-electric-cyan/20 focus:text-electric-cyan" 
                data-hover
                aria-label="Navigate to credentials section"
              >
                <span className="scannable-text">Credentials</span>
              </button>
              <button 
                onClick={() => scrollToSection('resume')}
                className="min-h-[48px] min-w-[48px] px-4 py-3 text-white hover:text-electric-cyan transition-all duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10 focus:bg-electric-cyan/20 focus:text-electric-cyan" 
                data-hover
                aria-label="Navigate to resume section"
              >
                <span className="scannable-text">Resume</span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="min-h-[48px] min-w-[48px] px-4 py-3 text-white hover:text-electric-cyan transition-all duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10 focus:bg-electric-cyan/20 focus:text-electric-cyan" 
                data-hover
                aria-label="Navigate to about section"
              >
                <span className="scannable-text">About</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="min-h-[48px] min-w-[48px] px-4 py-3 text-white hover:text-electric-cyan transition-all duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10 focus:bg-electric-cyan/20 focus:text-electric-cyan" 
                data-hover
                aria-label="Navigate to contact section"
              >
                <span className="scannable-text">Contact</span>
              </button>
            </div>
            {/* UX Enhancement: Mobile Menu with Clear Signifiers */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-electric-cyan p-2 min-h-[48px] min-w-[48px]"
                id="mobileMenuBtn"
                data-hover
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobileMenu"
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl transition-transform duration-300`}></i>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* UX Enhancement: Mobile Menu with Clear Hierarchy & Visual Affordances */}
      <div 
        id="mobileMenu" 
        className={`fixed top-16 right-0 w-64 h-full glass-morphism transform transition-all duration-300 z-40 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="navigation"
        aria-label="Mobile navigation menu"
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col space-y-2 p-6">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-lg text-white hover:text-electric-cyan hover:bg-electric-cyan/10 rounded-lg transition-all duration-300 text-left min-h-[48px] min-w-[48px] py-3 px-4 flex items-center focus:bg-electric-cyan/20 focus:text-electric-cyan" 
            data-hover
            role="menuitem"
            aria-label="Navigate to home section"
          >
            <i className="fas fa-home mr-3 text-electric-cyan w-4"></i>
            <span>Home</span>
          </button>
          <button 
            onClick={() => scrollToSection('work')}
            className="text-lg text-white hover:text-electric-cyan hover:bg-electric-cyan/10 rounded-lg transition-all duration-300 text-left min-h-[48px] min-w-[48px] py-3 px-4 flex items-center focus:bg-electric-cyan/20 focus:text-electric-cyan" 
            data-hover
            role="menuitem"
            aria-label="Navigate to work portfolio section"
          >
            <i className="fas fa-briefcase mr-3 text-electric-cyan w-4"></i>
            <span>Work</span>
          </button>
          <button 
            onClick={() => scrollToSection('process')}
            className="text-lg text-white hover:text-electric-cyan hover:bg-electric-cyan/10 rounded-lg transition-all duration-300 text-left min-h-[48px] min-w-[48px] py-3 px-4 flex items-center focus:bg-electric-cyan/20 focus:text-electric-cyan" 
            data-hover
            role="menuitem"
            aria-label="Navigate to design process section"
          >
            <i className="fas fa-cogs mr-3 text-electric-cyan w-4"></i>
            <span>Process</span>
          </button>
          <button 
            onClick={() => scrollToSection('credentials')}
            className="text-lg text-white hover:text-electric-cyan hover:bg-electric-cyan/10 rounded-lg transition-all duration-300 text-left min-h-[48px] min-w-[48px] py-3 px-4 flex items-center focus:bg-electric-cyan/20 focus:text-electric-cyan" 
            data-hover
            role="menuitem"
            aria-label="Navigate to credentials section"
          >
            <i className="fas fa-award mr-3 text-electric-cyan w-4"></i>
            <span>Credentials</span>
          </button>
          <button 
            onClick={() => scrollToSection('resume')}
            className="text-lg text-white hover:text-electric-cyan hover:bg-electric-cyan/10 rounded-lg transition-all duration-300 text-left min-h-[48px] min-w-[48px] py-3 px-4 flex items-center focus:bg-electric-cyan/20 focus:text-electric-cyan" 
            data-hover
            role="menuitem"
            aria-label="Navigate to resume section"
          >
            <i className="fas fa-file-alt mr-3 text-electric-cyan w-4"></i>
            <span>Resume</span>
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-lg text-white hover:text-electric-cyan hover:bg-electric-cyan/10 rounded-lg transition-all duration-300 text-left min-h-[48px] min-w-[48px] py-3 px-4 flex items-center focus:bg-electric-cyan/20 focus:text-electric-cyan" 
            data-hover
            role="menuitem"
            aria-label="Navigate to about section"
          >
            <i className="fas fa-user mr-3 text-electric-cyan w-4"></i>
            <span>About</span>
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-lg text-white hover:text-electric-cyan hover:bg-electric-cyan/10 rounded-lg transition-all duration-300 text-left min-h-[48px] min-w-[48px] py-3 px-4 flex items-center focus:bg-electric-cyan/20 focus:text-electric-cyan" 
            data-hover
            role="menuitem"
            aria-label="Navigate to contact section"
          >
            <i className="fas fa-envelope mr-3 text-electric-cyan w-4"></i>
            <span>Contact</span>
          </button>
        </div>
      </div>
    </>
  );
}

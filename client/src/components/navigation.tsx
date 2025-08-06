import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
            <div className="text-xl font-bold text-electric-cyan min-h-[44px] flex items-center">Shakil.design</div>
            <div className="hidden md:flex space-x-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="min-h-[44px] min-w-[44px] px-4 py-3 hover:text-electric-cyan transition-colors duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10" 
                data-hover
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                className="min-h-[44px] min-w-[44px] px-4 py-3 hover:text-electric-cyan transition-colors duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10" 
                data-hover
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="min-h-[44px] min-w-[44px] px-4 py-3 hover:text-electric-cyan transition-colors duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10" 
                data-hover
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('credentials')}
                className="min-h-[44px] min-w-[44px] px-4 py-3 hover:text-electric-cyan transition-colors duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10" 
                data-hover
              >
                Credentials
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="min-h-[44px] min-w-[44px] px-4 py-3 hover:text-electric-cyan transition-colors duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10" 
                data-hover
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="min-h-[44px] min-w-[44px] px-4 py-3 hover:text-electric-cyan transition-colors duration-300 flex items-center justify-center rounded-lg hover:bg-electric-cyan/10" 
                data-hover
              >
                Contact
              </button>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-electric-cyan p-2"
                id="mobileMenuBtn"
                data-hover
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className="fas fa-bars text-xl"></i>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        id="mobileMenu" 
        className={`fixed top-16 right-0 w-64 h-full glass-morphism transform transition-transform duration-300 z-40 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 p-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-lg hover:text-electric-cyan transition-colors text-left min-h-[44px] min-w-[44px] py-2 flex items-center" 
            data-hover
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('work')}
            className="text-lg hover:text-electric-cyan transition-colors text-left min-h-[44px] min-w-[44px] py-2 flex items-center" 
            data-hover
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('process')}
            className="text-lg hover:text-electric-cyan transition-colors text-left min-h-[44px] min-w-[44px] py-2 flex items-center" 
            data-hover
          >
            Process
          </button>
          <button 
            onClick={() => scrollToSection('credentials')}
            className="text-lg hover:text-electric-cyan transition-colors text-left min-h-[44px] min-w-[44px] py-2 flex items-center" 
            data-hover
          >
            Credentials
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-lg hover:text-electric-cyan transition-colors text-left min-h-[44px] min-w-[44px] py-2 flex items-center" 
            data-hover
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-lg hover:text-electric-cyan transition-colors text-left min-h-[44px] min-w-[44px] py-2 flex items-center" 
            data-hover
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
}

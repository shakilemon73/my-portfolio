import { useEffect, useState, useCallback } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(() => {
    const sections = ['home', 'work', 'process', 'credentials', 'about', 'skills', 'testimonials', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight * 0.3; // 30% viewport offset for better UX

    let currentSection = 'home';
    
    // Use Intersection Observer approach for better performance
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        currentSection = sections[i];
        break;
      }
    }

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false;
    
    const throttledScrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    handleScroll(); // Set initial active section
    
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);

  return activeSection;
}
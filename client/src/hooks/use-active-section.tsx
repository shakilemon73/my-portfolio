import { useEffect, useState } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'work', 'process', 'credentials', 'about', 'skills', 'testimonials', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
}
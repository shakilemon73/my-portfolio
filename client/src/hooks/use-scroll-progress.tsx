import { useEffect, useState, useCallback } from 'react';

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    
    const trackLength = documentHeight - windowHeight;
    const progress = Math.min((scrollTop / trackLength) * 100, 100);
    
    setScrollProgress(Math.max(0, progress));
  }, []);

  useEffect(() => {
    // Performance optimized scroll handler with RAF throttling
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
    handleScroll(); // Set initial progress
    
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [handleScroll]);

  return scrollProgress;
}

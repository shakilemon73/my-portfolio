import { useEffect } from 'react';

/**
 * UX Enhancement System
 * Automatically applies world-class UX principles from leading experts
 * Based on design philosophies from Don Norman, Steve Krug, Luke Wroblewski, and others
 */

interface UXValidationResult {
  touchTargets: boolean;
  contrast: boolean;
  scannability: boolean;
  feedback: boolean;
  accessibility: boolean;
}

export function UXEnhancementSystem() {
  useEffect(() => {
    const applyUXEnhancements = () => {
      // Don Norman - Discoverability & Feedback
      applyDiscoverabilityPrinciples();
      
      // Steve Krug - Don't Make Me Think
      applyScannabilityPrinciples();
      
      // Luke Wroblewski - Mobile First & Touch Targets
      applyMobileFirstPrinciples();
      
      // Aarron Walter - Emotional Design
      applyEmotionalDesignPrinciples();
      
      // Jonathan Ive - Simplicity & Craftsmanship
      applyCraftsmanshipPrinciples();
      
      // Farai Madzima - Inclusive Design
      applyAccessibilityPrinciples();
      
      // Real-time validation
      validateUXCompliance();
    };

    // Apply enhancements on DOM changes
    const observer = new MutationObserver(applyUXEnhancements);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true, 
      attributes: true 
    });

    // Initial application
    applyUXEnhancements();

    return () => observer.disconnect();
  }, []);

  const applyDiscoverabilityPrinciples = () => {
    // Don Norman - Clear affordances and feedback
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select, [data-hover]');
    
    interactiveElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      
      // Visual affordances
      if (!htmlElement.style.cursor) {
        htmlElement.style.cursor = 'pointer';
      }
      
      // Immediate feedback
      if (!htmlElement.dataset.feedbackApplied) {
        htmlElement.addEventListener('mouseenter', () => {
          htmlElement.style.transform = 'translateY(-2px)';
          htmlElement.style.transition = 'all 0.2s ease';
        });
        
        htmlElement.addEventListener('mouseleave', () => {
          htmlElement.style.transform = 'translateY(0)';
        });
        
        htmlElement.addEventListener('mousedown', () => {
          htmlElement.style.transform = 'translateY(1px)';
        });
        
        htmlElement.addEventListener('mouseup', () => {
          htmlElement.style.transform = 'translateY(-2px)';
        });
        
        htmlElement.dataset.feedbackApplied = 'true';
      }
    });
  };

  const applyScannabilityPrinciples = () => {
    // Steve Krug - Optimize for scanning
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
    
    textElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      const text = htmlElement.textContent || '';
      
      // Check word count for optimal scanning
      const wordCount = text.trim().split(/\s+/).length;
      
      // For non-heading text, optimize for scanning
      if (!htmlElement.matches('h1, h2, h3, h4, h5, h6') && wordCount > 15) {
        if (!htmlElement.dataset.scanOptimized) {
          htmlElement.style.lineHeight = '1.6';
          htmlElement.style.marginBottom = '1rem';
          htmlElement.dataset.scanOptimized = 'true';
        }
      }
      
      // Visual hierarchy enhancement
      if (htmlElement.matches('h1, h2, h3')) {
        htmlElement.style.fontWeight = 'bold';
        htmlElement.style.marginBottom = '1.5rem';
      }
    });
    
    // Navigation clarity
    const navElements = document.querySelectorAll('nav a, nav button');
    navElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      if (!htmlElement.dataset.navEnhanced) {
        htmlElement.style.padding = '0.75rem 1rem';
        htmlElement.style.borderRadius = '0.5rem';
        htmlElement.dataset.navEnhanced = 'true';
      }
    });
  };

  const applyMobileFirstPrinciples = () => {
    // Luke Wroblewski - Touch targets and mobile optimization
    const touchTargets = document.querySelectorAll('button, a, input, [role="button"], [data-hover]');
    
    touchTargets.forEach(element => {
      const htmlElement = element as HTMLElement;
      
      // Skip if already enhanced
      if (htmlElement.dataset.touchOptimized) return;
      
      // Get computed styles instead of getBoundingClientRect for better accuracy
      const computedStyle = window.getComputedStyle(htmlElement);
      const currentHeight = parseInt(computedStyle.height) || htmlElement.offsetHeight;
      const currentWidth = parseInt(computedStyle.width) || htmlElement.offsetWidth;
      
      // Ensure minimum 44px touch targets
      if (currentHeight < 44) {
        htmlElement.style.minHeight = '44px';
        htmlElement.style.paddingTop = Math.max(8, parseInt(computedStyle.paddingTop) || 8) + 'px';
        htmlElement.style.paddingBottom = Math.max(8, parseInt(computedStyle.paddingBottom) || 8) + 'px';
      }
      
      if (currentWidth < 44) {
        htmlElement.style.minWidth = '44px';
        htmlElement.style.paddingLeft = Math.max(12, parseInt(computedStyle.paddingLeft) || 12) + 'px';
        htmlElement.style.paddingRight = Math.max(12, parseInt(computedStyle.paddingRight) || 12) + 'px';
      }
      
      // Ensure proper display and alignment
      if (!htmlElement.style.display || htmlElement.style.display === 'inline') {
        htmlElement.style.display = 'inline-flex';
        htmlElement.style.alignItems = 'center';
        htmlElement.style.justifyContent = 'center';
      }
      
      htmlElement.dataset.touchOptimized = 'true';
    });
    
    // Form optimization
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        const htmlInput = input as HTMLElement;
        htmlInput.style.fontSize = '16px'; // Prevent zoom on iOS
        htmlInput.style.padding = '12px 16px';
      });
    });
  };

  const applyEmotionalDesignPrinciples = () => {
    // Aarron Walter - Delight and personality
    const cards = document.querySelectorAll('[class*="glass-morphism"], [class*="card"]');
    
    cards.forEach(card => {
      const htmlCard = card as HTMLElement;
      if (!htmlCard.dataset.emotionalEnhanced) {
        // Subtle hover animations for delight
        htmlCard.addEventListener('mouseenter', () => {
          htmlCard.style.transform = 'translateY(-4px) scale(1.02)';
          htmlCard.style.boxShadow = '0 20px 40px rgba(0, 255, 255, 0.1)';
          htmlCard.style.transition = 'all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)';
        });
        
        htmlCard.addEventListener('mouseleave', () => {
          htmlCard.style.transform = 'translateY(0) scale(1)';
          htmlCard.style.boxShadow = 'none';
        });
        
        htmlCard.dataset.emotionalEnhanced = 'true';
      }
    });
    
    // Loading state enhancements
    const buttons = document.querySelectorAll('button[type="submit"]');
    buttons.forEach(button => {
      const htmlButton = button as HTMLButtonElement;
      htmlButton.addEventListener('click', () => {
        if (!htmlButton.disabled) {
          // Add subtle animation feedback
          htmlButton.style.animation = 'pulse 0.5s ease-in-out';
          setTimeout(() => {
            htmlButton.style.animation = '';
          }, 500);
        }
      });
    });
  };

  const applyCraftsmanshipPrinciples = () => {
    // Jonathan Ive - Attention to detail
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.style.imageRendering = 'crisp-edges';
      img.style.imageRendering = '-webkit-optimize-contrast';
    });
    
    // Perfect spacing and alignment
    const containers = document.querySelectorAll('[class*="container"], [class*="max-w"]');
    containers.forEach(container => {
      const htmlContainer = container as HTMLElement;
      htmlContainer.style.paddingLeft = 'max(1rem, env(safe-area-inset-left))';
      htmlContainer.style.paddingRight = 'max(1rem, env(safe-area-inset-right))';
    });
  };

  const applyAccessibilityPrinciples = () => {
    // Farai Madzima - Inclusive design
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, select');
    
    interactiveElements.forEach(element => {
      const htmlElement = element as HTMLElement;
      
      // Keyboard navigation
      if (!htmlElement.tabIndex && htmlElement.tabIndex !== 0) {
        htmlElement.tabIndex = 0;
      }
      
      // Focus indicators
      if (!htmlElement.dataset.focusEnhanced) {
        htmlElement.addEventListener('focus', () => {
          htmlElement.style.outline = '2px solid hsl(192, 100%, 50%)';
          htmlElement.style.outlineOffset = '2px';
        });
        
        htmlElement.addEventListener('blur', () => {
          htmlElement.style.outline = 'none';
        });
        
        htmlElement.dataset.focusEnhanced = 'true';
      }
      
      // Screen reader improvements
      if (!htmlElement.getAttribute('aria-label') && !htmlElement.getAttribute('aria-labelledby')) {
        const text = htmlElement.textContent?.trim();
        if (text && text.length > 0) {
          htmlElement.setAttribute('aria-label', text);
        }
      }
    });
    
    // Form accessibility
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
      const htmlLabel = label as HTMLElement;
      const input = htmlLabel.querySelector('input, textarea, select') || 
                    document.querySelector(`#${htmlLabel.getAttribute('for')}`);
      
      if (input && !input.getAttribute('aria-labelledby')) {
        const labelId = `label-${Math.random().toString(36).substr(2, 9)}`;
        htmlLabel.id = labelId;
        input.setAttribute('aria-labelledby', labelId);
      }
    });
  };

  const validateUXCompliance = (): UXValidationResult => {
    const results: UXValidationResult = {
      touchTargets: true,
      contrast: true,
      scannability: true,
      feedback: true,
      accessibility: true
    };
    
    // Validate touch targets - Check all interactive elements (skip hidden ones)
    const touchTargets = document.querySelectorAll('button, a, [role="button"], [data-hover], [onclick], .cursor-pointer');
    const failingElements: string[] = [];
    
    touchTargets.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const style = window.getComputedStyle(element);
      
      // Skip hidden or display:none elements
      if (style.display === 'none' || rect.width === 0 || rect.height === 0) {
        return;
      }
      
      if (rect.height < 44 || rect.width < 44) {
        results.touchTargets = false;
        const elementDesc = element.tagName + (element.className ? '.' + element.className.split(' ')[0] : '') + (element.textContent ? ': ' + element.textContent.substring(0, 20) : '');
        failingElements.push(`${elementDesc} (${Math.round(rect.width)}x${Math.round(rect.height)}px)`);
      }
    });
    
    // Enhanced debugging - only show real failures
    if (failingElements.length > 0) {
      console.log('Touch Target Failures:', failingElements.slice(0, 5));
    }
    
    // Validate feedback mechanisms
    const interactiveElements = document.querySelectorAll('[data-hover]');
    if (interactiveElements.length === 0) {
      results.feedback = false;
    }
    
    // Validate accessibility
    const missingLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
    if (missingLabels.length > 0) {
      results.accessibility = false;
    }
    
    // Log validation results for debugging
    console.log('UX Compliance Validation:', results);
    
    return results;
  };

  return null; // This component only applies enhancements, no UI
}

// CSS Animations for emotional design
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  /* Enhanced focus styles */
  *:focus-visible {
    outline: 2px solid hsl(192, 100%, 50%) !important;
    outline-offset: 2px !important;
    border-radius: 4px;
  }
  
  /* Smooth transitions for all interactive elements */
  button, a, input, textarea, select, [data-hover] {
    transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1) !important;
  }
  
  /* Typography optimization */
  p, div:not([class*="icon"]) {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

if (!document.querySelector('#ux-enhancement-styles')) {
  style.id = 'ux-enhancement-styles';
  document.head.appendChild(style);
}
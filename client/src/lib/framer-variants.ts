// Advanced Framer Motion Variants - FAANG Level Animations

export const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 20,
    scale: 0.98
  },
  in: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  out: { 
    opacity: 0, 
    y: -20,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerFast = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const slideUp = {
  initial: { 
    opacity: 0, 
    y: 40 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const slideLeft = {
  initial: { 
    opacity: 0, 
    x: 40 
  },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const scaleIn = {
  initial: { 
    opacity: 0, 
    scale: 0.9 
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const heroText = {
  initial: { 
    opacity: 0, 
    y: 50,
    rotateX: 15
  },
  animate: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const cardHover = {
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98
  }
};

export const buttonHover = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

export const glowEffect = {
  initial: {
    boxShadow: "0 0 0px rgba(56, 189, 248, 0)"
  },
  animate: {
    boxShadow: [
      "0 0 0px rgba(56, 189, 248, 0)",
      "0 0 20px rgba(56, 189, 248, 0.3)",
      "0 0 0px rgba(56, 189, 248, 0)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const floatingElement = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const parallaxElement = {
  animate: (offset: number) => ({
    y: offset,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  })
};

export const revealText = {
  initial: {
    opacity: 0,
    y: 100,
    clipPath: "inset(100% 0 0 0)"
  },
  animate: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0 0 0)",
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const overlayVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
};

export const progressBar = {
  initial: {
    width: "0%"
  },
  animate: (progress: number) => ({
    width: `${progress}%`,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  })
};

export const typewriter = {
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const typewriterChar = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.1
    }
  }
};

// Intersection Observer Animation Variants
export const scrollTrigger = {
  initial: {
    opacity: 0,
    y: 50
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  viewport: {
    once: true,
    amount: 0.3
  }
};

export const scrollStagger = {
  whileInView: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  viewport: {
    once: true,
    amount: 0.2
  }
};
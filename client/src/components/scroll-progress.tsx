import { useScrollProgress } from '@/hooks/use-scroll-progress';
import { useActiveSection } from '@/hooks/use-active-section';
import { useState, useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: [number, number, number];
  trail: Array<{ x: number; y: number; alpha: number }>;
}

interface NeuralNode {
  x: number;
  y: number;
  connections: number[];
  activation: number;
  pulsePhase: number;
}

export function ScrollProgress() {
  const progress = useScrollProgress();
  const activeSection = useActiveSection();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const milestoneCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isHovering, setIsHovering] = useState(false);
  const particlesRef = useRef<Particle[]>([]);
  const neuralNodesRef = useRef<NeuralNode[]>([]);
  const milestonePositionsRef = useRef<{ x: number; y: number }[]>([]);
  const timeRef = useRef(0);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const sections = [
    { id: 'home', label: 'Home', short: 'H', glyph: '⬢', color: [0, 255, 255] },
    { id: 'work', label: 'Work', short: 'W', glyph: '⬟', color: [255, 0, 128] },
    { id: 'process', label: 'Process', short: 'P', glyph: '⬢', color: [0, 255, 128] },
    { id: 'credentials', label: 'Credentials', short: 'C', glyph: '⬡', color: [255, 128, 0] },
    { id: 'about', label: 'About', short: 'A', glyph: '⬠', color: [128, 0, 255] },
    { id: 'skills', label: 'Skills', short: 'S', glyph: '⬢', color: [255, 255, 0] },
    { id: 'testimonials', label: 'Reviews', short: 'R', glyph: '⬟', color: [0, 128, 255] },
    { id: 'contact', label: 'Contact', short: 'T', glyph: '⬡', color: [255, 64, 192] },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Keyboard navigation for milestones
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.target instanceof HTMLElement && e.target.closest('[data-testid^="nav-"]')) {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          const prevIndex = Math.max(0, focusedIndex - 1);
          setFocusedIndex(prevIndex);
          scrollToSection(sections[prevIndex].id);
          break;
        case 'ArrowDown':
          e.preventDefault();
          const nextIndex = Math.min(sections.length - 1, focusedIndex + 1);
          setFocusedIndex(nextIndex);
          scrollToSection(sections[nextIndex].id);
          break;
        case 'Home':
          e.preventDefault();
          setFocusedIndex(0);
          scrollToSection(sections[0].id);
          break;
        case 'End':
          e.preventDefault();
          setFocusedIndex(sections.length - 1);
          scrollToSection(sections[sections.length - 1].id);
          break;
      }
    }
  }, [focusedIndex, sections]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const currentSectionIndex = sections.findIndex(s => s.id === activeSection);

  // Check for reduced motion preference
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  );

  // Initialize neural network
  useEffect(() => {
    const nodes: NeuralNode[] = [];
    const nodeCount = 24;
    
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 60 + Math.random() * 40;
      nodes.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        connections: [],
        activation: 0,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Create connections
    nodes.forEach((node, i) => {
      const connectionCount = Math.floor(Math.random() * 3) + 2;
      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * nodes.length);
        if (targetIndex !== i && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex);
        }
      }
    });

    neuralNodesRef.current = nodes;
  }, []);

  // Initialize particles with milestone targeting
  const initParticles = useCallback(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        life: Math.random() * 100,
        maxLife: 150 + Math.random() * 100,
        color: [
          0 + Math.random() * 100,
          200 + Math.random() * 55,
          200 + Math.random() * 55
        ],
        trail: []
      });
    }
    particlesRef.current = newParticles;
  }, []);

  useEffect(() => {
    initParticles();
  }, [initParticles]);

  // Update milestone positions
  const updateMilestonePositions = useCallback(() => {
    const positions: { x: number; y: number }[] = [];
    sections.forEach((_, index) => {
      // Calculate milestone button positions relative to viewport
      const buttonHeight = 48;
      const gap = 12; // gap-3 = 12px
      const totalHeight = sections.length * buttonHeight + (sections.length - 1) * gap;
      const startY = (window.innerHeight - totalHeight) / 2;
      const y = startY + index * (buttonHeight + gap) + buttonHeight / 2;
      const x = window.innerWidth - 48; // right-6 = 24px, button width 48px
      positions.push({ x, y });
    });
    milestonePositionsRef.current = positions;
  }, [sections]);

  useEffect(() => {
    updateMilestonePositions();
    window.addEventListener('resize', updateMilestonePositions);
    return () => window.removeEventListener('resize', updateMilestonePositions);
  }, [updateMilestonePositions]);

  // Canvas animation engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      timeRef.current += 0.016;
      const time = timeRef.current;
      
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      
      const centerX = canvas.width / dpr / 2;
      const centerY = canvas.height / dpr / 2;

      // Draw neural network
      ctx.save();
      ctx.translate(centerX, centerY);
      
      // Skip animation if reduced motion is preferred
      if (prefersReducedMotion.current) {
        ctx.restore();
        return;
      }

      // Update neural activation based on progress
      neuralNodesRef.current.forEach((node, i) => {
        const wavePosition = (progress / 100) * neuralNodesRef.current.length;
        const distance = Math.abs(i - wavePosition);
        node.activation = Math.max(0, 1 - distance / 3) * (0.5 + Math.sin(time * 2 + node.pulsePhase) * 0.5);
      });

      // Draw connections
      neuralNodesRef.current.forEach((node, i) => {
        node.connections.forEach(targetIndex => {
          const target = neuralNodesRef.current[targetIndex];
          if (!target) return;
          
          const activation = (node.activation + target.activation) / 2;
          const alpha = activation * 0.8;
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = `rgba(0, 255, 255, ${alpha})`;
          ctx.lineWidth = 1 + activation * 2;
          ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';
          ctx.shadowBlur = activation * 10;
          ctx.stroke();
          ctx.shadowBlur = 0;
        });
      });

      // Draw nodes
      neuralNodesRef.current.forEach(node => {
        const size = 2 + node.activation * 6;
        const alpha = 0.3 + node.activation * 0.7;
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 255, ${alpha})`;
        ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
        ctx.shadowBlur = node.activation * 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.restore();

      // Update and draw particles (no React state updates in RAF)
      const targetMilestone = milestonePositionsRef.current[currentSectionIndex];
      
      particlesRef.current.forEach(particle => {
        // Particle steering toward milestone
        if (targetMilestone && !prefersReducedMotion.current) {
          const dx = targetMilestone.x - particle.x;
          const dy = targetMilestone.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance > 10) {
            const force = 0.02;
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }
        }

        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life += 1;

        // Add to trail
        particle.trail.push({ x: particle.x, y: particle.y, alpha: 1 });
        if (particle.trail.length > 8) {
          particle.trail.shift();
        }

        // Update trail alpha
        particle.trail.forEach((point, i) => {
          point.alpha = i / particle.trail.length;
        });

        // Respawn if dead or out of bounds
        if (particle.life > particle.maxLife || particle.x < 0 || particle.x > canvas.width / dpr || particle.y < 0 || particle.y > canvas.height / dpr) {
          particle.x = Math.random() * canvas.width / dpr;
          particle.y = Math.random() * canvas.height / dpr;
          particle.life = 0;
          particle.vx = (Math.random() - 0.5) * 2;
          particle.vy = (Math.random() - 0.5) * 2;
        }

        // Draw particle trail
        particle.trail.forEach((point, i) => {
          if (i > 0) {
            const prevPoint = particle.trail[i - 1];
            ctx.beginPath();
            ctx.moveTo(prevPoint.x, prevPoint.y);
            ctx.lineTo(point.x, point.y);
            ctx.strokeStyle = `rgba(${particle.color[0]}, ${particle.color[1]}, ${particle.color[2]}, ${point.alpha * 0.6})`;
            ctx.lineWidth = 2;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [progress, currentSectionIndex]);

  return (
    <>
      {/* HoloNeuro Progress Rail */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/* Holographic Prism Rail */}
        <div 
          className="relative h-2 bg-transparent overflow-hidden"
          style={{
            background: `
              linear-gradient(90deg, 
                transparent 0%,
                rgba(0, 255, 255, 0.1) ${progress * 0.3}%,
                rgba(255, 0, 128, 0.2) ${progress * 0.6}%,
                rgba(0, 255, 128, 0.3) ${progress}%,
                transparent ${progress + 2}%
              )
            `,
            boxShadow: `inset 0 0 20px rgba(0, 255, 255, ${progress / 200})`
          }}
        >
          {/* Prismatic Diffraction Layer */}
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              background: `
                conic-gradient(from 0deg at ${progress}% 50%,
                  transparent 0deg,
                  rgba(255, 0, 128, 0.4) 60deg,
                  rgba(0, 255, 255, 0.6) 120deg,
                  rgba(0, 255, 128, 0.4) 180deg,
                  rgba(255, 128, 0, 0.5) 240deg,
                  rgba(128, 0, 255, 0.4) 300deg,
                  transparent 360deg
                )
              `,
              maskImage: `linear-gradient(90deg, transparent 0%, black ${Math.max(0, progress - 5)}%, black ${progress}%, transparent ${progress + 5}%)`,
              filter: 'blur(0.5px)',
            }}
          />
          
          {/* Neural Canvas Overlay */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full mix-blend-screen"
            style={{ 
              opacity: progress > 1 ? Math.min(0.8, progress / 50) : 0,
              filter: 'hue-rotate(180deg)'
            }}
          />
          
          {/* Energy Wavefront */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white to-transparent"
            style={{
              left: `${progress}%`,
              transform: 'translateX(-50%)',
              boxShadow: `0 0 20px rgba(255, 255, 255, ${progress / 100})`,
              opacity: progress > 1 ? 1 : 0,
            }}
          />
        </div>
      </div>

      {/* Desktop: HoloNeuro Milestone System */}
      <div 
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative">
          {/* Neural Network Background */}
          <div className="absolute inset-0 -inset-6">
            <canvas
              ref={milestoneCanvasRef}
              width="200"
              height="400"
              className="w-full h-full opacity-20 mix-blend-screen"
              style={{
                filter: `hue-rotate(${progress * 3.6}deg)`,
              }}
            />
          </div>
          
          {/* Milestone Glyphs */}
          <div className="flex flex-col items-center gap-3 py-6 relative z-10">
            {sections.map((section, index) => {
              const sectionProgress = Math.max(0, Math.min(1, (progress - index * 12.5) / 12.5));
              const isActive = activeSection === section.id;
              const [r, g, b] = section.color;
              
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="group relative min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full transition-all duration-500"
                  title={`Navigate to ${section.label}`}
                  data-testid={`nav-${section.id}`}
                  aria-label={`Navigate to ${section.label} section`}
                  aria-current={isActive ? 'page' : undefined}
                  style={{
                    background: isActive 
                      ? `radial-gradient(circle at center, rgba(${r}, ${g}, ${b}, 0.3) 0%, rgba(${r}, ${g}, ${b}, 0.1) 60%, transparent 100%)`
                      : 'transparent',
                    boxShadow: isActive 
                      ? `0 0 30px rgba(${r}, ${g}, ${b}, 0.6), inset 0 0 15px rgba(${r}, ${g}, ${b}, 0.3)`
                      : 'none',
                  }}
                >
                  {/* Touch target area */}
                  <div className="absolute inset-0 rounded-full" />
                  
                  {/* Holographic Glyph */}
                  <div 
                    className="relative z-10 text-2xl font-bold transition-all duration-300 select-none"
                    style={{
                      color: isActive ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, 0.6)`,
                      textShadow: isActive 
                        ? `0 0 20px rgba(${r}, ${g}, ${b}, 0.8), 0 0 40px rgba(${r}, ${g}, ${b}, 0.4)`
                        : `0 0 10px rgba(${r}, ${g}, ${b}, 0.4)`,
                      transform: `scale(${isActive ? 1.2 : 1}) rotate(${sectionProgress * 360}deg)`,
                      filter: `hue-rotate(${progress * 2}deg) brightness(${1 + sectionProgress * 0.5})`,
                    }}
                  >
                    {section.glyph}
                  </div>

                  {/* Quantum Ring */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-full">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
                        <circle
                          cx="24"
                          cy="24"
                          r="22"
                          fill="none"
                          stroke={`rgb(${r}, ${g}, ${b})`}
                          strokeWidth="2"
                          strokeDasharray="138.23"
                          strokeDashoffset={138.23 - (sectionProgress * 138.23)}
                          strokeLinecap="round"
                          className="transition-all duration-1000 ease-out"
                          style={{
                            filter: `drop-shadow(0 0 8px rgba(${r}, ${g}, ${b}, 0.8))`,
                          }}
                        />
                      </svg>
                    </div>
                  )}

                  {/* Holographic Tooltip */}
                  <div 
                    className={`absolute right-14 top-1/2 -translate-y-1/2 px-4 py-2 backdrop-blur-xl border rounded-lg whitespace-nowrap pointer-events-none transition-all duration-300 ${
                      isActive || isHovering
                        ? 'opacity-100 translate-x-0 scale-100' 
                        : 'opacity-0 translate-x-4 scale-95'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, 
                        rgba(0, 0, 0, 0.8) 0%, 
                        rgba(${r}, ${g}, ${b}, 0.1) 50%, 
                        rgba(0, 0, 0, 0.8) 100%
                      )`,
                      borderColor: `rgba(${r}, ${g}, ${b}, 0.5)`,
                      color: `rgb(${r}, ${g}, ${b})`,
                      boxShadow: `0 0 20px rgba(${r}, ${g}, ${b}, 0.3)`,
                    }}
                  >
                    <span className="text-sm font-bold">{section.label}</span>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 rotate-45 border-l border-b"
                         style={{ 
                           background: `rgba(${r}, ${g}, ${b}, 0.1)`,
                           borderColor: `rgba(${r}, ${g}, ${b}, 0.5)`
                         }} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile: Holographic Progress Pill */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden">
        <div 
          className="backdrop-blur-xl rounded-full px-6 py-3 border shadow-2xl"
          style={{
            background: `linear-gradient(135deg, 
              rgba(0, 0, 0, 0.8) 0%, 
              rgba(0, 255, 255, 0.1) 50%, 
              rgba(0, 0, 0, 0.8) 100%
            )`,
            borderColor: 'rgba(0, 255, 255, 0.3)',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.2)',
          }}
        >
          <div className="flex items-center gap-4">
            {/* Current Section Glyph */}
            <div className="flex items-center gap-2">
              <div 
                className="text-lg font-bold"
                style={{
                  color: 'rgb(0, 255, 255)',
                  textShadow: '0 0 15px rgba(0, 255, 255, 0.8)',
                }}
              >
                {sections.find(s => s.id === activeSection)?.glyph || '⬢'}
              </div>
              <span className="text-white/90 text-sm font-medium">
                {sections.find(s => s.id === activeSection)?.label}
              </span>
            </div>

            {/* Progress Orbs */}
            <div className="flex items-center gap-1">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className="w-2 h-2 rounded-full transition-all duration-500"
                  style={{
                    background: index <= currentSectionIndex
                      ? `radial-gradient(circle, rgb(${section.color[0]}, ${section.color[1]}, ${section.color[2]}) 0%, transparent 70%)`
                      : 'rgba(100, 100, 100, 0.3)',
                    boxShadow: index <= currentSectionIndex
                      ? `0 0 8px rgba(${section.color[0]}, ${section.color[1]}, ${section.color[2]}, 0.8)`
                      : 'none',
                  }}
                />
              ))}
            </div>

            {/* Quantum Percentage */}
            <span 
              className="text-xs font-mono font-bold"
              style={{
                color: 'rgb(0, 255, 255)',
                textShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
              }}
            >
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

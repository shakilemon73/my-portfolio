import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, MessageCircle, ArrowRight, MapPin, Clock, Zap, Brain, Cpu, Layers, Users } from 'lucide-react';
import { profileImage, profileAlt } from '@/lib/profile';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  opacity: number;
  hue: number;
  life: number;
  maxLife: number;
}

interface MousePosition {
  x: number;
  y: number;
}

export function RevolutionaryHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [time, setTime] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<number>();
  const mouseRef = useRef(mousePos);
  const hoveredRef = useRef(isHovered);
  const timeRef = useRef(0);

  // Neural network nodes for background
  const neuralNodes = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      connections: Math.floor(Math.random() * 3) + 1,
      pulse: Math.random() * 2 * Math.PI,
    }));
  }, []);

  // Initialize particles
  useEffect(() => {
    const initParticles = Array.from({ length: 200 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 1000,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      vz: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      hue: Math.random() * 60 + 170, // Blue to cyan range
      life: Math.random() * 100,
      maxLife: 100,
    }));
    setParticles(initParticles);
  }, []);

  // Mouse tracking and refs sync
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    mouseRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    hoveredRef.current = isHovered;
  }, [isHovered]);

  // Animation loop - mount only
  useEffect(() => {
    let raf: number;
    const animate = () => {
      const t = (timeRef.current += 0.016); // ~60 FPS
      setTime(t);
      
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.hypot(dx, dy) || 1; // guard zero
          
          // Attraction to mouse
          const force = Math.max(0, 1 - distance / 200);
          const attraction = hoveredRef.current ? 0.02 : 0.005;
          
          const newVx = particle.vx + (dx / distance) * force * attraction;
          const newVy = particle.vy + (dy / distance) * force * attraction;
          const newVz = particle.vz + Math.sin(t + particle.z * 0.001) * 0.1;
          
          let newX = particle.x + newVx;
          let newY = particle.y + newVy;
          let newZ = particle.z + newVz;
          
          // Wrap around screen
          if (newX < 0) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = 0;
          if (newY < 0) newY = window.innerHeight;
          if (newY > window.innerHeight) newY = 0;
          if (newZ < 0) newZ = 1000;
          if (newZ > 1000) newZ = 0;
          
          const newLife = particle.life + 1;
          const newOpacity = newLife > particle.maxLife ? 
            Math.max(0, particle.opacity - 0.02) :
            Math.min(1, particle.opacity + 0.01);
          
          return {
            ...particle,
            x: newX,
            y: newY,
            z: newZ,
            vx: newVx * 0.98, // Friction
            vy: newVy * 0.98,
            vz: newVz * 0.98,
            life: newLife > particle.maxLife ? 0 : newLife,
            opacity: newOpacity,
            hue: particle.hue + Math.sin(t) * 0.5,
          };
        })
      );
      
      raf = requestAnimationFrame(animate);
    };
    
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Canvas drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Clear canvas
    ctx.fillStyle = 'rgba(9, 9, 11, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw neural network connections
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    neuralNodes.forEach((node, i) => {
      neuralNodes.slice(i + 1).forEach(otherNode => {
        const distance = Math.sqrt(
          Math.pow((node.x - otherNode.x) * canvas.width / 100, 2) +
          Math.pow((node.y - otherNode.y) * canvas.height / 100, 2)
        );
        
        if (distance < 150) {
          const opacity = 1 - distance / 150;
          ctx.globalAlpha = opacity * 0.3;
          ctx.beginPath();
          ctx.moveTo(node.x * canvas.width / 100, node.y * canvas.height / 100);
          ctx.lineTo(otherNode.x * canvas.width / 100, otherNode.y * canvas.height / 100);
          ctx.stroke();
        }
      });
    });
    
    // Draw particles
    particles.forEach(particle => {
      const screenX = particle.x;
      const screenY = particle.y;
      const depth = 1 - particle.z / 1000;
      const size = particle.size * depth;
      
      // Particle glow
      const gradient = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, size * 3);
      gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${particle.opacity * depth})`);
      gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 50%, ${particle.opacity * depth * 0.5})`);
      gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 30%, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(screenX, screenY, size * 3, 0, Math.PI * 2);
      ctx.fill();
      
      // Core particle
      ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, ${particle.opacity * depth})`;
      ctx.beginPath();
      ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
      ctx.fill();
    });
    
    ctx.globalAlpha = 1;
  }, [particles, neuralNodes, time]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="hero-grid-section relative min-h-screen pt-24 md:pt-28 scroll-mt-24 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Particle Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Professional Grid Background - Same as FaangLevelHero */}
      <div className="absolute inset-0 hero-grid-background">
        <div className="absolute inset-0 hero-main-grid"></div>
        <div className="absolute inset-0 hero-grid-overlay"></div>
        <div className="absolute inset-0 hero-gradient-accent"></div>
      </div>

      {/* Dynamic Neural Network Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ zIndex: 1 }}>
        {neuralNodes.map((node, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-electric-cyan rounded-full"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${node.pulse}s`,
              transform: `scale(${1 + Math.sin(time * 2 + node.pulse) * 0.3})`,
            }}
          />
        ))}
      </div>

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, rgba(0,210,255,0.2) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(0,210,255,0.1) 50%, transparent 100%)
          `,
          transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`,
          zIndex: 2,
        }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Enhanced Typography */}
          <div className="space-y-8">
            {/* Designer Badge */}
            <div className="mb-6">
              <Badge 
                variant="outline" 
                className="glass-morphism border-electric-cyan text-electric-cyan font-medium px-4 py-2"
              >
                Senior UX/UI Product Designer
              </Badge>
            </div>

            {/* Value Proposition Headline - Clear and Readable */}
            <div className="bg-deep-black/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-glass-border">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white drop-shadow-lg">
                Design leader for data-heavy SaaS.
                <span className="text-electric-cyan"> I turn complexity into measurable outcomes.</span>
              </h1>
              
              <p className="text-xl text-cool-gray mb-4 max-w-2xl">
                25M+ users, 150+ projects, 99% CSAT across Fortune 500 and YC-backed startups
              </p>

              <p className="text-sm text-cool-gray/70 mb-8">
                Shakil Ahmed Emon • Available for New Projects
              </p>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 text-cool-gray">
                  <MapPin className="w-4 h-4 text-electric-cyan" />
                  <span>Available Globally (Remote)</span>
                </div>
                <div className="flex items-center space-x-2 text-cool-gray">
                  <Clock className="w-4 h-4 text-electric-cyan" />
                  <span>Open to Opportunities</span>
                </div>
              </div>
            </div>

            {/* Call to Action Buttons - Same as FaangLevelHero */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                onClick={() => scrollToSection('work')}
                className="bg-electric-cyan hover:bg-electric-cyan/90 text-slate-900 font-semibold px-8 py-4 h-14 min-w-[200px] rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-electric-cyan/25 group"
                data-testid="button-view-case-studies"
              >
                <Eye className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                View Case Studies
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-slate-900 font-semibold px-8 py-4 h-14 min-w-[180px] rounded-xl transition-all duration-300 group"
                data-testid="button-contact"
              >
                <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Content - Professional Showcase */}
          <div className="relative">
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full h-96 lg:h-[520px]">
                <div className="w-full h-96 lg:h-[520px] bg-gradient-to-br from-charcoal via-deep-black to-charcoal rounded-3xl shadow-2xl relative overflow-hidden border border-glass-border">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10 z-0">
                    <div className="grid grid-cols-8 h-full">
                      {Array.from({ length: 64 }).map((_, index) => (
                        <div
                          key={index}
                          className="border border-electric-cyan opacity-20"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Professional Headshot */}
                  <img
                    src={profileImage}
                    alt={profileAlt}
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10"
                    loading="eager"
                    decoding="async"
                    width={1200}
                    height={900}
                    data-testid="img-headshot-hero"
                  />
                </div>

                {/* Floating Info Panels - Same as FaangLevelHero */}
                {[
                  { icon: Layers, text: '150+ Projects', delay: 0 },
                  { icon: Users, text: '25M+ Users', delay: 1 },
                  { icon: Zap, text: '99% Success', delay: 2 },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="absolute z-20 bg-black/80 border-2 border-electric-cyan/60 backdrop-blur-xl rounded-xl transform transition-all duration-500 hover:scale-110 cursor-pointer flex items-center justify-center shadow-lg shadow-electric-cyan/20 hover:shadow-electric-cyan/40 hover:bg-black/90 hover:border-electric-cyan"
                    style={{
                      top: `${20 + i * 25}%`,
                      right: i % 2 === 0 ? '-10%' : 'auto',
                      left: i % 2 === 1 ? '-10%' : 'auto',
                      minHeight: '52px',
                      minWidth: '150px',
                      padding: '14px 18px',
                      transform: `
                        translate(${Math.sin(time + item.delay) * 5}px, ${Math.cos(time + item.delay) * 5}px)
                        scale(${0.95 + Math.sin(time * 2 + item.delay) * 0.05})
                      `,
                    }}
                    data-testid={`stats-card-${item.text.toLowerCase().replace(/[\s+%]/g, '-')}`}
                    role="button"
                    tabIndex={0}
                    aria-label={`${item.text} achievement stat`}
                  >
                    <div className="flex items-center space-x-3 text-white">
                      <item.icon className="w-5 h-5 flex-shrink-0 text-electric-cyan" />
                      <span className="text-sm font-bold whitespace-nowrap text-white">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
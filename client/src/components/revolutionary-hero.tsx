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
      className="revolutionary-hero min-h-screen flex items-center justify-center relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Particle Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
      
      {/* Dynamic Neural Network Background */}
      <div className="absolute inset-0 opacity-20" style={{ zIndex: 2 }}>
        {neuralNodes.map((node, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              animationDelay: `${node.pulse}s`,
              transform: `scale(${1 + Math.sin(time * 2 + node.pulse) * 0.5})`,
            }}
          />
        ))}
      </div>

      {/* Holographic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            linear-gradient(90deg, transparent 0%, cyan 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(0,255,255,0.1) 50%, transparent 100%)
          `,
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
          zIndex: 3,
        }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Enhanced Typography */}
          <div className="space-y-8">
            {/* Morphing Badge */}
            <div className="mb-6 transform hover:scale-110 transition-all duration-500">
              <Badge 
                variant="outline" 
                className="glass-morphism border-cyan-400 text-cyan-400 font-medium px-6 py-3 text-lg backdrop-blur-xl bg-cyan-400/10 hover:bg-cyan-400/20 transition-all duration-300"
                style={{
                  transform: `perspective(1000px) rotateX(${Math.sin(time) * 5}deg) rotateY(${Math.cos(time) * 5}deg)`,
                }}
              >
                <Brain className="w-5 h-5 mr-2 animate-pulse" />
                Neural UX Architect
              </Badge>
            </div>

            {/* Morphing Typography */}
            <div className="space-y-4">
              <h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-clip"
                style={{
                  backgroundImage: `linear-gradient(
                    ${45 + Math.sin(time) * 45}deg,
                    #00ffff ${Math.sin(time) * 20 + 30}%,
                    #ffffff ${Math.cos(time) * 20 + 50}%,
                    #ff00ff ${Math.sin(time + Math.PI) * 20 + 70}%
                  )`,
                  transform: `scale(${1 + Math.sin(time * 2) * 0.02})`,
                }}
              >
                I architect
                <br />
                <span 
                  className="relative inline-block"
                  style={{
                    transform: `skew(${Math.sin(time) * 2}deg, ${Math.cos(time) * 1}deg)`,
                  }}
                >
                  digital
                  <div 
                    className="absolute inset-0 blur-lg opacity-50 text-clip"
                    style={{
                      backgroundImage: 'linear-gradient(45deg, cyan, magenta)',
                    }}
                  >
                    digital
                  </div>
                </span>
                <br />
                consciousness.
              </h1>
              
              <p 
                className="text-xl text-cyan-200 max-w-2xl leading-relaxed"
                style={{
                  opacity: 0.9 + Math.sin(time * 3) * 0.1,
                }}
              >
                Transforming data complexity into neural pathways. 
                <span className="text-cyan-400 font-semibold">
                  25M+ synapses fired, 150+ neural networks designed.
                </span>
              </p>

              <div className="flex items-center space-x-4 text-sm text-cyan-300">
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 animate-pulse text-cyan-400" />
                  <span>Real-time Processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 animate-pulse text-cyan-400" />
                  <span>AI-Enhanced Design</span>
                </div>
              </div>
            </div>

            {/* Interactive CTAs */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                onClick={() => scrollToSection('work')}
                className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-900 font-bold px-8 py-6 h-auto min-w-[220px] rounded-2xl transition-all duration-500 transform hover:scale-105"
                style={{
                  boxShadow: `0 0 ${20 + Math.sin(time * 4) * 10}px rgba(0, 255, 255, 0.5)`,
                }}
                data-testid="button-neural-portfolio"
              >
                <div className="relative z-10 flex items-center">
                  <Brain className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform animate-pulse" />
                  Neural Portfolio
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                </div>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"
                  style={{
                    transform: `translateX(${-100 + Math.sin(time * 2) * 10}%)`,
                  }}
                />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="group border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 font-semibold px-8 py-6 h-auto min-w-[200px] rounded-2xl transition-all duration-500 backdrop-blur-xl bg-cyan-400/5"
                data-testid="button-connect"
              >
                <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Connect
              </Button>
            </div>
          </div>

          {/* Right Content - Holographic Profile */}
          <div className="relative">
            {/* Holographic Container */}
            <div 
              className="relative w-full h-96 lg:h-[600px]"
              style={{
                transform: `perspective(1000px) rotateY(${Math.sin(time * 0.5) * 5}deg) rotateX(${Math.cos(time * 0.5) * 3}deg)`,
              }}
            >
              {/* Holographic Frame */}
              <div 
                className="absolute inset-0 rounded-3xl border-2 border-cyan-400/50 bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-400/10 backdrop-blur-xl overflow-hidden"
                style={{
                  boxShadow: `
                    0 0 50px rgba(0, 255, 255, 0.3),
                    inset 0 0 50px rgba(0, 255, 255, 0.1)
                  `,
                }}
              >
                {/* Scanning Lines */}
                <div 
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-4"
                  style={{
                    transform: `translateY(${Math.sin(time * 3) * 100 + 50}%)`,
                  }}
                />
                
                {/* Profile Image with Glitch Effect */}
                <div className="relative w-full h-full">
                  <img
                    src={profileImage}
                    alt={profileAlt}
                    className="w-full h-full object-cover rounded-3xl"
                    style={{
                      filter: `
                        hue-rotate(${Math.sin(time) * 10}deg)
                        saturate(${1.2 + Math.sin(time * 2) * 0.2})
                        brightness(${1.1 + Math.sin(time * 1.5) * 0.1})
                      `,
                    }}
                    fetchPriority="high"
                    data-testid="img-holographic-profile"
                  />
                  
                  {/* Glitch Overlay */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent rounded-3xl mix-blend-screen"
                    style={{
                      opacity: 0.1 + Math.sin(time * 10) * 0.05,
                      transform: `translateX(${Math.sin(time * 5) * 2}px)`,
                    }}
                  />
                </div>

                {/* Floating Data Streams */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 bg-cyan-400/60 rounded-full"
                    style={{
                      height: `${Math.random() * 60 + 20}px`,
                      left: `${(i + 1) * 12}%`,
                      bottom: '10%',
                      transform: `translateY(${Math.sin(time * 2 + i) * 20}px)`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>

              {/* Floating Info Panels */}
              {[
                { icon: Layers, text: '150+ Projects', delay: 0 },
                { icon: Users, text: '25M+ Users', delay: 1 },
                { icon: Zap, text: '99% Success', delay: 2 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="absolute glass-morphism border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-xl rounded-xl p-3 transform transition-all duration-500 hover:scale-110"
                  style={{
                    top: `${20 + i * 25}%`,
                    right: i % 2 === 0 ? '-10%' : 'auto',
                    left: i % 2 === 1 ? '-10%' : 'auto',
                    transform: `
                      translate(${Math.sin(time + item.delay) * 10}px, ${Math.cos(time + item.delay) * 10}px)
                      scale(${0.9 + Math.sin(time * 2 + item.delay) * 0.1})
                    `,
                  }}
                >
                  <div className="flex items-center space-x-2 text-cyan-400">
                    <item.icon className="w-4 h-4 animate-pulse" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" style={{ zIndex: 5 }} />
    </section>
  );
}
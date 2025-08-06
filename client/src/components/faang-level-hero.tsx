import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function FaangLevelHero() {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    { value: "40%", label: "Task Completion Improvement", color: "text-electric-cyan" },
    { value: "65%", label: "Support Ticket Reduction", color: "text-neon-pink" },
    { value: "300%", label: "Faster User Onboarding", color: "text-neon-green" },
    { value: "50K+", label: "Users Impacted", color: "text-electric-cyan" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full animate-pulse">
          {Array.from({ length: 144 }).map((_, index) => (
            <div 
              key={index} 
              className="border border-electric-cyan"
              style={{ 
                animationDelay: `${index * 0.05}s`,
                animationDuration: '3s' 
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Tech Company Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="glass-morphism border-electric-cyan text-electric-cyan">
                <i className="fab fa-google mr-2"></i>
                FAANG Ready
              </Badge>
              <Badge variant="outline" className="glass-morphism border-neon-pink text-neon-pink">
                <i className="fas fa-star mr-2"></i>
                Top 100 Portfolio
              </Badge>
              <Badge variant="outline" className="glass-morphism border-neon-green text-neon-green">
                <i className="fas fa-trophy mr-2"></i>
                Award Winning
              </Badge>
            </div>

            <div className="mb-6">
              <span className="font-mono text-electric-cyan text-sm tracking-wider">
                SENIOR UX/UI PRODUCT DESIGNER
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block">SHAKIL</span>
              <span className="block text-gradient">AHMED</span>
              <span className="block">EMON</span>
            </h1>

            <div className="mb-8">
              <p className="text-xl sm:text-2xl text-cool-gray mb-4 leading-relaxed">
                <span className="text-white font-semibold">6+ years</span> creating 
                <span className="text-electric-cyan"> data-driven experiences</span> for 
                <span className="text-neon-pink"> 50K+ users</span> at scale
              </p>
              <p className="text-lg text-cool-gray">
                Specializing in <span className="text-neon-green">enterprise SaaS</span>, 
                <span className="text-electric-cyan"> fintech</span>, and 
                <span className="text-neon-pink"> healthcare</span> product design
              </p>
            </div>

            {/* Dynamic Metrics Display */}
            <div className="glass-morphism rounded-2xl p-6 mb-8 hover-glow transition-all duration-500">
              <div className="text-center">
                <div className={`text-4xl font-black mb-2 ${metrics[currentMetric].color}`}>
                  {metrics[currentMetric].value}
                </div>
                <div className="text-sm text-cool-gray">
                  {metrics[currentMetric].label}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-start mb-8">
              <Button
                onClick={() => scrollToSection('work')}
                className="px-8 py-4 bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-semibold rounded-full hover-glow transition-all duration-300 min-w-[200px]"
                data-hover
              >
                <i className="fas fa-rocket mr-2"></i>
                View Case Studies
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 glass-morphism rounded-full font-semibold hover-glow transition-all duration-300 border-glass-border min-w-[200px]"
                data-hover
              >
                <i className="fab fa-linkedin mr-2"></i>
                Let's Connect
              </Button>
            </div>

            {/* Professional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-cool-gray">
                <i className="fas fa-map-marker-alt text-electric-cyan"></i>
                <span>Available Globally (Remote)</span>
              </div>
              <div className="flex items-center space-x-2 text-cool-gray">
                <i className="fas fa-clock text-neon-green"></i>
                <span>Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Showcase */}
          <div className="space-y-6">
            {/* Main Professional Image Placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-charcoal via-deep-black to-charcoal rounded-3xl shadow-2xl flex items-center justify-center border border-glass-border relative overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 h-full">
                    {Array.from({ length: 64 }).map((_, index) => (
                      <div 
                        key={index} 
                        className="border border-electric-cyan animate-pulse"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center z-10">
                  <div className="w-24 h-24 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-full flex items-center justify-center text-deep-black text-3xl font-bold mb-4 mx-auto animate-glow">
                    SE
                  </div>
                  <p className="text-cool-gray text-sm">Professional Portfolio Showcase</p>
                </div>

                {/* Floating Design Elements */}
                <div className="absolute top-4 right-4 glass-morphism rounded-lg p-3 animate-float">
                  <i className="fab fa-figma text-electric-cyan text-xl"></i>
                </div>
                <div className="absolute bottom-4 left-4 glass-morphism rounded-lg p-3 animate-float" style={{ animationDelay: '1s' }}>
                  <i className="fas fa-chart-line text-neon-pink text-xl"></i>
                </div>
                <div className="absolute top-1/2 left-4 glass-morphism rounded-lg p-3 animate-float" style={{ animationDelay: '2s' }}>
                  <i className="fas fa-users text-neon-green text-xl"></i>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-morphism rounded-xl p-4 text-center hover-glow transition-all duration-300">
                <div className="text-2xl font-bold text-electric-cyan">150+</div>
                <div className="text-xs text-cool-gray">Projects Delivered</div>
              </div>
              <div className="glass-morphism rounded-xl p-4 text-center hover-glow transition-all duration-300">
                <div className="text-2xl font-bold text-neon-pink">99%</div>
                <div className="text-xs text-cool-gray">Client Satisfaction</div>
              </div>
              <div className="glass-morphism rounded-xl p-4 text-center hover-glow transition-all duration-300">
                <div className="text-2xl font-bold text-neon-green">25M+</div>
                <div className="text-xs text-cool-gray">User Interactions</div>
              </div>
              <div className="glass-morphism rounded-xl p-4 text-center hover-glow transition-all duration-300">
                <div className="text-2xl font-bold text-electric-cyan">92%</div>
                <div className="text-xs text-cool-gray">Success Rate</div>
              </div>
            </div>

            {/* Tech Stack Preview */}
            <div className="glass-morphism rounded-xl p-4">
              <h4 className="text-sm font-semibold text-electric-cyan mb-3">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Product Strategy', 'User Research', 'Interaction Design', 'Design Systems', 'Prototyping', 'Data Analysis'].map((skill, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-charcoal rounded-full text-xs text-cool-gray border border-glass-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12 animate-bounce">
          <i className="fas fa-chevron-down text-2xl text-electric-cyan"></i>
        </div>
      </div>
    </section>
  );
}
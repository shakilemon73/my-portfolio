import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { profileImage, profileAlt } from '@/lib/profile';

export function FaangLevelHero() {
  const [currentMetric, setCurrentMetric] = useState(0);
  
  const metrics = [
    { value: "1.2M+", label: "Users Impacted Globally", color: "text-electric-cyan" },
    { value: "$3.8M+", label: "Revenue Generated", color: "text-neon-pink" },
    { value: "245%", label: "User Engagement Increase", color: "text-neon-green" },
    { value: "92%", label: "Project Success Rate", color: "text-electric-cyan" },
    { value: "45%", label: "Efficiency Improvement", color: "text-neon-pink" },
    { value: "89%", label: "User Satisfaction Score", color: "text-neon-green" }
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
    <section id="home" className="hero-grid-section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional Grid Background - Similar to emonfinance.art */}
      <div className="absolute inset-0 hero-grid-background">
        {/* Main Grid Pattern */}
        <div className="absolute inset-0 hero-main-grid"></div>
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 hero-grid-overlay"></div>
        
        {/* Gradient Accent */}
        <div className="absolute inset-0 hero-gradient-accent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Designer Badge */}
            <div className="mb-6">
              <Badge variant="outline" className="glass-morphism border-electric-cyan text-electric-cyan font-medium px-4 py-2">
                Senior UX/UI Product Designer
              </Badge>
            </div>

            {/* Value Proposition Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
              I transform complex business challenges into 
              <span className="text-gradient"> intuitive digital experiences</span> that drive measurable results
            </h1>

            {/* Supporting Subhead */}
            <p className="text-xl text-cool-gray mb-4 max-w-2xl">
              6+ years crafting user-centered solutions for Fortune 500 companies and innovative startups worldwide
            </p>

            {/* Designer Credit */}
            <p className="text-sm text-cool-gray/70 mb-8">
              Shakil Ahmed Emon • Available for New Projects
            </p>

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
                size="lg"
                className="bg-white text-black font-bold rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 min-w-[200px] shadow-xl border-4 border-electric-cyan"
                data-hover
              >
                <i className="fas fa-rocket mr-2 text-black"></i>
                View Case Studies
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="glass-morphism rounded-full font-semibold hover-glow transition-all duration-300 border-glass-border min-w-[200px]"
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
            {/* Main Professional Image */}
            <div className="relative">
              <div className="w-full h-96 lg:h-[520px] bg-gradient-to-br from-charcoal via-deep-black to-charcoal rounded-3xl shadow-2xl relative overflow-hidden border border-glass-border">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10 z-0">
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
                
                {/* Professional Headshot */}
                <img 
                  src={profileImage} 
                  alt={profileAlt} 
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10" 
                  loading="eager" 
                  decoding="async" 
                  fetchPriority="high"
                  width={1200} 
                  height={900} 
                  data-testid="img-headshot-hero"
                />

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
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function WorldClassHero() {
  const [currentMetric, setCurrentMetric] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const rotatingMetrics = [
    { value: "2.5M+", label: "Users Impacted", color: "text-electric-cyan", icon: "fas fa-users" },
    { value: "$12M+", label: "Revenue Generated", color: "text-neon-green", icon: "fas fa-chart-line" },
    { value: "98%", label: "Project Success Rate", color: "text-neon-pink", icon: "fas fa-trophy" },
    { value: "245%", label: "Engagement Increase", color: "text-electric-cyan", icon: "fas fa-rocket" },
    { value: "45+", label: "Enterprise Clients", color: "text-neon-green", icon: "fas fa-building" },
    { value: "6+", label: "Years Experience", color: "text-neon-pink", icon: "fas fa-star" }
  ];

  const rotatingTitles = [
    "Senior UX/UI Product Designer",
    "Digital Experience Strategist", 
    "Design Systems Architect",
    "User-Centered Innovation Lead"
  ];

  const companyLogos = [
    { name: "Google", icon: "fab fa-google", color: "text-blue-500" },
    { name: "Meta", icon: "fab fa-meta", color: "text-blue-600" },
    { name: "Microsoft", icon: "fab fa-microsoft", color: "text-green-500" },
    { name: "Amazon", icon: "fab fa-amazon", color: "text-yellow-500" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    setIsVisible(true);
    const metricTimer = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % rotatingMetrics.length);
    }, 2500);
    
    const titleTimer = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % rotatingTitles.length);
    }, 4000);
    
    return () => {
      clearInterval(metricTimer);
      clearInterval(titleTimer);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-deep-black via-charcoal to-deep-black">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-16 h-full">
            {Array.from({ length: 256 }).map((_, index) => (
              <div 
                key={index} 
                className="border border-electric-cyan animate-pulse"
                style={{ 
                  animationDelay: `${index * 0.02}s`,
                  animationDuration: '4s' 
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-electric-cyan/20 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-neon-pink/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-electric-cyan/10 to-neon-green/10 rounded-lg animate-float"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Status Indicators & Credentials */}
          <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="outline" className="glass-morphism border-neon-green text-neon-green px-4 py-2 text-sm font-medium min-h-[44px] hover:scale-105 transition-all duration-300">
                <i className="fas fa-circle mr-2 text-xs animate-pulse"></i>
                Available for New Projects
              </Badge>
              <Badge variant="outline" className="glass-morphism border-electric-cyan text-electric-cyan px-4 py-2 text-sm font-medium min-h-[44px] hover:scale-105 transition-all duration-300">
                <i className="fas fa-trophy mr-2"></i>
                Top 1% Designer Worldwide
              </Badge>
              <Badge variant="outline" className="glass-morphism border-neon-pink text-neon-pink px-4 py-2 text-sm font-medium min-h-[44px] hover:scale-105 transition-all duration-300">
                <i className="fas fa-medal mr-2"></i>
                FAANG-Level Experience
              </Badge>
            </div>
            
            {/* Company Logos */}
            <div className="flex justify-center items-center gap-6 mb-6 opacity-60">
              <span className="text-xs text-cool-gray uppercase tracking-wider">Trusted by Industry Leaders</span>
              <div className="flex gap-4">
                {companyLogos.map((company, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center min-h-[44px] min-w-[44px] p-2 glass-morphism rounded-lg hover:scale-110 transition-all duration-300 cursor-pointer"
                    title={company.name}
                    data-testid={`logo-${company.name.toLowerCase()}`}
                  >
                    <i className={`${company.icon} text-xl ${company.color} opacity-70 hover:opacity-100 transition-opacity`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Title */}
          <div className={`mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="relative h-8 overflow-hidden">
              <span className="font-mono text-electric-cyan text-sm tracking-wider uppercase absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500">
                {rotatingTitles[currentTitle]}
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className={`mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight">
              <span className="block text-white hover:text-electric-cyan transition-colors duration-500">SHAKIL</span>
              <span className="block bg-gradient-to-r from-electric-cyan via-neon-pink to-neon-green bg-clip-text text-transparent animate-gradient-x">AHMED</span>
              <span className="block text-white hover:text-neon-pink transition-colors duration-500">EMON</span>
            </h1>
          </div>

          {/* Value Proposition */}
          <div className={`mb-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed mb-4">
              I transform <span className="text-electric-cyan font-semibold">complex business challenges</span> into 
              <span className="text-neon-pink font-semibold"> intuitive digital experiences</span> that drive 
              <span className="text-neon-green font-semibold"> measurable results</span>
            </p>
            <p className="text-lg text-cool-gray">
              <span className="text-white font-semibold">6+ years</span> crafting user-centered solutions for 
              <span className="text-electric-cyan">Fortune 500 companies</span> and 
              <span className="text-neon-pink">innovative startups</span> worldwide
            </p>
          </div>

          {/* Dynamic Metrics Showcase */}
          <div className={`mb-12 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="glass-morphism rounded-3xl p-8 mb-8 hover-glow transition-all duration-500 group max-w-md mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <i className={`${rotatingMetrics[currentMetric].icon} text-2xl ${rotatingMetrics[currentMetric].color} mr-3`}></i>
                  <div className={`text-5xl font-black ${rotatingMetrics[currentMetric].color} transition-all duration-500`}>
                    {rotatingMetrics[currentMetric].value}
                  </div>
                </div>
                <div className="text-sm text-cool-gray uppercase tracking-wider">
                  {rotatingMetrics[currentMetric].label}
                </div>
                <div className="w-full bg-glass-border h-1 rounded-full mt-4 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-electric-cyan to-neon-pink transition-all duration-2500 ease-linear"
                    style={{ width: `${((currentMetric + 1) / rotatingMetrics.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`mb-12 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => scrollToSection('work')}
                size="lg"
                className="bg-white text-black font-bold px-10 py-4 rounded-full hover:bg-electric-cyan hover:text-deep-black hover:scale-110 transition-all duration-300 shadow-2xl border-4 border-electric-cyan min-w-[220px] min-h-[60px] text-lg group"
                data-hover
                data-testid="button-view-portfolio"
                aria-label="View my portfolio and case studies"
              >
                <i className="fas fa-rocket mr-3 text-black group-hover:animate-bounce"></i>
                <span>View Portfolio</span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="glass-morphism border-2 border-glass-border text-white font-semibold px-10 py-4 rounded-full hover:border-neon-pink hover:text-neon-pink hover:scale-105 transition-all duration-300 min-w-[220px] min-h-[60px] text-lg group"
                data-hover
                data-testid="button-start-project"
                aria-label="Contact me to start a project"
              >
                <i className="fas fa-handshake mr-3 group-hover:animate-pulse"></i>
                <span>Start a Project</span>
              </Button>
            </div>
            
            {/* Secondary CTAs */}
            <div className="flex justify-center items-center gap-8 mt-8 text-sm">
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-cool-gray hover:text-electric-cyan transition-colors flex items-center gap-2 min-h-[44px] group"
                data-testid="link-testimonials"
              >
                <i className="fas fa-quote-left group-hover:scale-110 transition-transform"></i>
                <span>Client Reviews</span>
              </button>
              <span className="text-glass-border">•</span>
              <button 
                onClick={() => scrollToSection('credentials')}
                className="text-cool-gray hover:text-neon-pink transition-colors flex items-center gap-2 min-h-[44px] group"
                data-testid="link-credentials"
              >
                <i className="fas fa-award group-hover:scale-110 transition-transform"></i>
                <span>Credentials</span>
              </button>
              <span className="text-glass-border">•</span>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-cool-gray hover:text-neon-green transition-colors flex items-center gap-2 min-h-[44px] group"
                data-testid="link-process"
              >
                <i className="fas fa-cog group-hover:rotate-180 transition-transform duration-500"></i>
                <span>My Process</span>
              </button>
            </div>
          </div>

          {/* Professional Status */}
          <div className={`mb-8 transform transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-cool-gray">
                <i className="fas fa-map-marker-alt text-electric-cyan"></i>
                <span>Global Remote • US/EU Timezone</span>
              </div>
              <div className="flex items-center gap-2 text-cool-gray">
                <i className="fas fa-clock text-neon-green animate-pulse"></i>
                <span>Responding within 2 hours</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`text-center transform transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="animate-bounce">
              <i className="fas fa-chevron-down text-2xl text-electric-cyan opacity-70 hover:opacity-100 transition-opacity"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FAANG_PORTFOLIO_DATA } from '@/lib/faang-portfolio-data';
import { ArrowRight, Download, Eye, Calendar, Mail, ExternalLink, Users, TrendingUp, Trophy, Star, Building } from 'lucide-react';
import shakilPhoto from '@assets/6179293517931726739_1757713860325.jpg';

export function WorldClassHero() {
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const { name, title, tagline, impact_metrics } = FAANG_PORTFOLIO_DATA;

  // World-class metrics with proper icons
  const rotatingMetrics = [
    { value: impact_metrics.users_impacted, label: "Users Impacted", color: "text-electric-cyan", icon: Users },
    { value: impact_metrics.revenue_generated, label: "Revenue Generated", color: "text-neon-green", icon: TrendingUp },
    { value: impact_metrics.success_rate, label: "Project Success Rate", color: "text-neon-pink", icon: Trophy },
    { value: impact_metrics.projects_shipped, label: "Projects Shipped", color: "text-electric-cyan", icon: Star },
    { value: impact_metrics.teams_led, label: "Teams Led", color: "text-neon-green", icon: Building }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleStartProject = () => {
    // Primary CTA - Start a project
    const email = FAANG_PORTFOLIO_DATA.email;
    const subject = "New Project Inquiry";
    const body = "Hi Shakil, I'm interested in starting a project with you. Let's discuss the details.";
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  // Optimize animations with motion preference respect
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    // Initialize visibility
    setIsVisible(true);
    
    // Only start animations if motion is not reduced
    if (!mediaQuery.matches) {
      const metricInterval = setInterval(() => {
        setCurrentMetricIndex((prev) => (prev + 1) % rotatingMetrics.length);
      }, 4000); // Slower, less aggressive
      
      return () => {
        clearInterval(metricInterval);
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
      role="banner"
      aria-label="Shakil Ahmed - UI/UX Designer Portfolio Hero"
    >
      {/* Lightweight Background - Replaces heavy 256-node grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-black via-charcoal to-deep-black">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/50 via-transparent to-deep-black/20"></div>
        
        {/* Lightweight geometric elements - Only if motion is not reduced */}
        {!prefersReducedMotion && (
          <>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-electric-cyan/10 rounded-full animate-spin-slow opacity-30"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-neon-pink/10 rotate-45 animate-pulse opacity-20"></div>
            <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-br from-electric-cyan/5 to-neon-green/5 rounded-lg animate-float opacity-40"></div>
          </>
        )}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
        {/* Professional Status Indicators */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge 
              variant="outline" 
              className="glass-morphism border-neon-green text-neon-green px-6 py-3 text-sm font-medium min-h-[48px] min-w-[48px] hover:scale-105 transition-all duration-300"
              data-testid="badge-available"
            >
              <div className="w-3 h-3 bg-neon-green rounded-full mr-3 animate-pulse"></div>
              Available for New Projects
            </Badge>
            <Badge 
              variant="outline" 
              className="glass-morphism border-electric-cyan text-electric-cyan px-6 py-3 text-sm font-medium min-h-[48px] min-w-[48px] hover:scale-105 transition-all duration-300"
              data-testid="badge-experience"
            >
              <Trophy className="w-4 h-4 mr-3" />
              7+ Years Experience
            </Badge>
            <Badge 
              variant="outline" 
              className="glass-morphism border-neon-pink text-neon-pink px-6 py-3 text-sm font-medium min-h-[48px] min-w-[48px] hover:scale-105 transition-all duration-300"
              data-testid="badge-faang"
            >
              <Star className="w-4 h-4 mr-3" />
              FAANG-Ready Portfolio
            </Badge>
          </div>
        </div>

        {/* Professional Headshot */}
        <div className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-electric-cyan/30 shadow-2xl">
              <img 
                src={shakilPhoto} 
                alt={`${name} - Professional headshot`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="eager"
                data-testid="img-headshot"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-full flex items-center justify-center shadow-lg">
              <Star className="w-6 h-6 text-deep-black" />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <div className={`mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 text-white" data-testid="text-name">
            {name}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-electric-cyan mb-4" data-testid="text-title">
            {title}
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed" data-testid="text-tagline">
            {tagline}
          </p>
        </div>

        {/* Dynamic Impact Metrics */}
        <div className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="bg-charcoal/50 backdrop-blur-lg rounded-2xl p-6 border border-glass-border max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4">
              {rotatingMetrics[currentMetricIndex] && (
                <>
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-charcoal to-deep-black border border-glass-border`}>
                    {(() => {
                      const IconComponent = rotatingMetrics[currentMetricIndex].icon;
                      return <IconComponent className={`w-6 h-6 ${rotatingMetrics[currentMetricIndex].color}`} />;
                    })()}
                  </div>
                  <div className="text-center">
                    <div className={`text-3xl font-black ${rotatingMetrics[currentMetricIndex].color} transition-all duration-500`}>
                      {rotatingMetrics[currentMetricIndex].value}
                    </div>
                    <div className="text-sm text-cool-gray font-medium">
                      {rotatingMetrics[currentMetricIndex].label}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* World-Class CTA Hierarchy */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Primary CTA */}
            <Button
              onClick={handleStartProject}
              size="lg"
              className="bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 min-h-[56px] min-w-[200px] shadow-xl"
              data-testid="button-start-project"
              aria-label="Start a new project with Shakil Ahmed"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Start a Project
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            
            {/* Secondary CTA */}
            <Button
              onClick={() => scrollToSection('work')}
              variant="outline"
              size="lg"
              className="glass-morphism border-glass-border text-white font-semibold px-8 py-4 rounded-full hover:border-electric-cyan hover:text-electric-cyan transition-all duration-300 min-h-[56px] min-w-[180px]"
              data-testid="button-view-work"
              aria-label="View portfolio work and case studies"
            >
              <Eye className="w-5 h-5 mr-3" />
              View Work
            </Button>
            
            {/* Tertiary CTA */}
            <Button
              onClick={() => scrollToSection('resume')}
              variant="ghost"
              size="lg"
              className="text-cool-gray hover:text-white font-medium px-6 py-4 rounded-full transition-all duration-300 min-h-[56px]"
              data-testid="button-download-resume"
              aria-label="Download professional resume"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>

        {/* Professional Contact Strip */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-cool-gray">
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2 text-electric-cyan" />
              <span data-testid="text-email">{FAANG_PORTFOLIO_DATA.email}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-cool-gray rounded-full"></div>
            <div className="flex items-center">
              <ExternalLink className="w-4 h-4 mr-2 text-neon-green" />
              <span data-testid="text-availability">Available for Remote Work</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-cool-gray rounded-full"></div>
            <div className="flex items-center">
              <Building className="w-4 h-4 mr-2 text-neon-pink" />
              <span data-testid="text-location">Bangladesh (GMT+6)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
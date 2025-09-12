import { useParams, useLocation } from 'wouter';
import { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ArrowLeft, Clock, Users, Target, TrendingUp, ExternalLink, ChevronRight, Star, Award, 
  Lightbulb, Zap, CheckCircle, Eye, Heart, MessageSquare, Download, Play, Pause, 
  BarChart3, PieChart, Activity, Layers, Brush, Code, TestTube, Rocket, Search, 
  Smartphone, Monitor, Tablet, ArrowDown, ArrowUp, Sparkles, Brain, Shield, 
  Accessibility, MousePointer, Headphones, FileText, GitBranch, ThumbsUp,
  Calendar, DollarSign, TrendingDown, AlertCircle, Info, ChevronLeft, Share
} from 'lucide-react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { faangCaseStudies } from '@/data/faang-case-studies';
import { CaseStudy } from '../../../shared/case-study-schema';
import '../scroll-animations.css';

// Metric Counter Component with Animation
const MetricCounter = ({ metric, index }: { metric: any, index: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const endValue = parseFloat(metric.value.replace(/[^0-9.]/g, ''));
    const duration = 2000;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(0 + endValue * easeOut);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [isVisible, metric.value]);
  
  const formatValue = (value: number) => {
    const originalValue = metric.value;
    if (originalValue.includes('$')) return `$${value.toFixed(1)}M`;
    if (originalValue.includes('%')) return `${Math.round(value)}%`;
    if (originalValue.includes('K')) return `${value.toFixed(1)}K`;
    return Math.round(value).toString();
  };
  
  return (
    <div ref={elementRef} className="text-center" data-animate={`metric-${index}`}>
      <div className="text-3xl font-black text-electric-cyan mb-2 counter-animate">
        {formatValue(count)}
      </div>
      <div className="text-sm text-cool-gray mb-2">{metric.metric}</div>
      <div className="text-xs text-neon-green font-medium">{metric.change}</div>
    </div>
  );
};

export default function CaseStudyPage() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedElements, setAnimatedElements] = useState(new Set<string>());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const slug = params.slug;
    if (slug) {
      const study = faangCaseStudies.find(cs => cs.slug === slug);
      if (study) {
        setCaseStudy(study);
        document.title = `${study.title} - Case Study | Shakil Ahmed Emon`;
        document.querySelector('meta[name="description"]')?.setAttribute(
          'content', 
          `${study.overview} View the complete UX/UI design process, research methodology, and measurable impact.`
        );
      } else {
        setLocation('/');
      }
    }
  }, [params.slug, setLocation]);

  // Counter animation hook
  const useCountAnimation = (endValue: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      if (!isVisible) return;
      
      const startTime = Date.now();
      const startValue = 0;
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut);
        
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    }, [isVisible, endValue, duration]);
    
    return [count, setIsVisible] as const;
  };

  // Scroll tracking and progress
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'challenge', 'research', 'design', 'solution', 'results', 'learnings'];
      const scrollPosition = window.scrollY + 200;
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((window.scrollY / totalHeight) * 100, 100);
      setScrollProgress(progress);
      
      // Update active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-animate');
            if (elementId) {
              setAnimatedElements(prev => new Set(prev).add(elementId));
              entry.target.classList.add('animate-in');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observe all animatable elements
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [caseStudy]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-deep-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-electric-cyan mx-auto mb-8"></div>
          <p className="text-cool-gray text-xl">Loading case study...</p>
        </div>
      </div>
    );
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-deep-black text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-charcoal/50">
        <div 
          className="h-full bg-gradient-to-r from-electric-cyan via-neon-pink to-neon-green transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Fixed Navigation */}
      <header className="fixed top-1 left-0 right-0 z-50 bg-deep-black/90 backdrop-blur-xl border-b border-glass-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Button 
              variant="ghost" 
              size="lg" 
              onClick={() => setLocation('/')}
              className="text-white hover:text-electric-cyan hover:bg-electric-cyan/10 min-h-[48px] min-w-[48px] px-6"
              data-testid="button-back-home"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Portfolio
            </Button>
            
            {/* Progress Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {['overview', 'challenge', 'research', 'design', 'solution', 'results', 'learnings'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 text-sm font-medium rounded-full min-h-[48px] transition-all duration-300 capitalize ${
                    activeSection === section 
                      ? 'bg-electric-cyan text-black' 
                      : 'text-cool-gray hover:text-white hover:bg-white/10'
                  }`}
                  data-testid={`nav-${section}`}
                >
                  {section}
                </button>
              ))}
            </nav>

            <Button 
              variant="outline" 
              size="sm"
              className="border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-black min-h-[48px] min-w-[48px]"
              data-testid="button-share"
            >
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section - Results-First Approach */}
      <section id="overview" className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black via-charcoal to-deep-black">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/5 to-neon-pink/5 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumb & Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-cool-gray text-sm">
              <Award className="h-5 w-5 text-electric-cyan" />
              <span>Case Study</span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">{caseStudy.category.charAt(0).toUpperCase() + caseStudy.category.slice(1)}</span>
            </div>
            <div className="flex items-center gap-6 text-cool-gray text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{caseStudy.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{caseStudy.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{caseStudy.role}</span>
              </div>
            </div>
          </div>

          {/* Title & Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {caseStudy.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-electric-cyan text-electric-cyan bg-electric-cyan/10 px-4 py-2 text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="block text-white mb-2">{caseStudy.title.split(' ').slice(0, -2).join(' ')}</span>
                <span className="block bg-gradient-to-r from-electric-cyan via-neon-pink to-neon-green bg-clip-text text-transparent">
                  {caseStudy.title.split(' ').slice(-2).join(' ')}
                </span>
              </h1>

              <p className="text-xl text-cool-gray leading-relaxed mb-8">
                {caseStudy.overview}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="text-sm text-cool-gray">
                  <span className="block font-medium text-white">{caseStudy.company}</span>
                  <span>{caseStudy.role}</span>
                </div>
                <Separator orientation="vertical" className="h-10 bg-glass-border" />
                <div className="text-sm text-cool-gray">
                  <span className="block font-medium text-white">Team Size</span>
                  <span>{caseStudy.team.length} members</span>
                </div>
              </div>
            </div>

            {/* Impact Metrics - Results First */}
            <div className="bg-gradient-to-br from-electric-cyan/10 to-neon-pink/10 rounded-3xl p-8 border border-electric-cyan/20" data-animate="slide-right">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-electric-cyan/20 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-electric-cyan" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">Key Metrics</h2>
                  <p className="text-cool-gray">Measurable results delivered</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {caseStudy.executiveSummary.impact.map((metric, index) => (
                  <MetricCounter key={index} metric={metric} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="bg-gradient-to-r from-charcoal to-deep-black rounded-2xl p-8 border border-glass-border mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Brain className="h-6 w-6 text-electric-cyan" />
              Executive Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-neon-pink" />
                  The Challenge
                </h4>
                <p className="text-cool-gray leading-relaxed">{caseStudy.executiveSummary.businessContext}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-electric-cyan" />
                  User Problem
                </h4>
                <p className="text-cool-gray leading-relaxed">{caseStudy.executiveSummary.userProblem}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-neon-green" />
                  Solution Impact
                </h4>
                <p className="text-cool-gray leading-relaxed">{caseStudy.executiveSummary.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Deep Dive */}
      <section id="challenge" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal to-deep-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full mb-6">
              <AlertCircle className="text-electric-cyan text-lg mr-2" />
              <span className="text-electric-cyan font-mono text-sm uppercase tracking-wider">Challenge</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Understanding the <span className="text-gradient">Problem Space</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-4xl mx-auto leading-relaxed">
              A systematic analysis of business constraints, user pain points, and success criteria
            </p>
          </div>

          <Tabs defaultValue="problem" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-charcoal border border-glass-border">
              <TabsTrigger 
                value="problem" 
                className="data-[state=active]:bg-electric-cyan data-[state=active]:text-black min-h-[48px]"
                data-testid="tab-problem"
              >
                Core Problem
              </TabsTrigger>
              <TabsTrigger 
                value="context" 
                className="data-[state=active]:bg-electric-cyan data-[state=active]:text-black min-h-[48px]"
                data-testid="tab-context"
              >
                Business Context
              </TabsTrigger>
              <TabsTrigger 
                value="constraints" 
                className="data-[state=active]:bg-electric-cyan data-[state=active]:text-black min-h-[48px]"
                data-testid="tab-constraints"
              >
                Constraints
              </TabsTrigger>
              <TabsTrigger 
                value="success" 
                className="data-[state=active]:bg-electric-cyan data-[state=active]:text-black min-h-[48px]"
                data-testid="tab-success"
              >
                Success Metrics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="problem" className="mt-0">
              <Card className="glass-morphism border-glass-border bg-gradient-to-br from-red-500/10 to-orange-500/10">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-red-500/20 rounded-xl">
                      <Target className="h-8 w-8 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">The Core Problem</h3>
                      <p className="text-cool-gray leading-relaxed text-lg mb-6">
                        {caseStudy.challenge.problem}
                      </p>
                      <div className="p-6 bg-black/30 rounded-xl border-l-4 border-red-400">
                        <p className="text-red-400 font-semibold mb-2">Business Impact</p>
                        <p className="text-cool-gray leading-relaxed">{caseStudy.executiveSummary.businessContext}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="context" className="mt-0">
              <Card className="glass-morphism border-glass-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-electric-cyan/20 rounded-xl">
                      <BarChart3 className="h-8 w-8 text-electric-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">Business Context</h3>
                      <p className="text-cool-gray leading-relaxed text-lg mb-6">
                        {caseStudy.challenge.context}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {caseStudy.challenge.objectives.map((objective: string, index: number) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-black/30 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-electric-cyan flex-shrink-0 mt-0.5" />
                            <span className="text-cool-gray">{objective}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="constraints" className="mt-0">
              <Card className="glass-morphism border-glass-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-neon-pink/20 rounded-xl">
                      <Shield className="h-8 w-8 text-neon-pink" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">Design Constraints</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {caseStudy.challenge.constraints.map((constraint: string, index: number) => (
                          <div key={index} className="p-4 bg-black/30 rounded-lg border-l-4 border-neon-pink">
                            <p className="text-cool-gray leading-relaxed">{constraint}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="success" className="mt-0">
              <Card className="glass-morphism border-glass-border">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-neon-green/20 rounded-xl">
                      <Activity className="h-8 w-8 text-neon-green" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">Success Metrics</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {caseStudy.challenge.successMetrics.map((metric: string, index: number) => (
                          <div key={index} className="flex items-center gap-3 p-4 bg-black/30 rounded-lg">
                            <div className="w-3 h-3 bg-neon-green rounded-full"></div>
                            <span className="text-cool-gray">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Research & Discovery */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black to-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full mb-6">
              <Search className="text-electric-cyan text-lg mr-2" />
              <span className="text-electric-cyan font-mono text-sm uppercase tracking-wider">Research</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Discovery & <span className="text-gradient">User Insights</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-4xl mx-auto leading-relaxed">
              Deep user research and competitive analysis to understand pain points and opportunities
            </p>
          </div>

          {/* Research Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="glass-morphism border-electric-cyan/30 bg-gradient-to-br from-electric-cyan/10 to-transparent" data-animate="card-1">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Users className="h-6 w-6 text-electric-cyan" />
                  Research Scale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-black text-electric-cyan mb-2">{caseStudy.process.research.participants}</div>
                  <div className="text-cool-gray">Participants</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-morphism border-neon-pink/30 bg-gradient-to-br from-neon-pink/10 to-transparent" data-animate="card-2">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <TestTube className="h-6 w-6 text-neon-pink" />
                  Methods Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-black text-neon-pink mb-2">{caseStudy.process.research.methods.length}</div>
                  <div className="text-cool-gray">Research Methods</div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-morphism border-neon-green/30 bg-gradient-to-br from-neon-green/10 to-transparent" data-animate="card-3">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-neon-green" />
                  Key Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-black text-neon-green mb-2">{caseStudy.process.research.keyInsights.length}</div>
                  <div className="text-cool-gray">Major Insights</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research Deep Dive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Methods & Process */}
            <div>
              <Card className="glass-morphism border-glass-border h-full">
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center gap-3">
                    <Brush className="h-6 w-6 text-electric-cyan" />
                    Research Methods & Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {caseStudy.process.research.methods.map((method: string, index: number) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-electric-cyan/20 hover:border-electric-cyan/50 transition-colors">
                      <div className="w-8 h-8 bg-electric-cyan/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-electric-cyan font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-cool-gray">{method}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Key Insights */}
            <div>
              <Card className="glass-morphism border-glass-border h-full">
                <CardHeader>
                  <CardTitle className="text-white text-xl flex items-center gap-3">
                    <Brain className="h-6 w-6 text-neon-pink" />
                    Critical User Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {caseStudy.process.research.keyInsights.map((insight: string, index: number) => (
                    <div key={index} className="p-4 bg-gradient-to-r from-neon-pink/20 to-transparent rounded-lg border-l-4 border-neon-pink">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-neon-pink mt-1 flex-shrink-0" />
                        <p className="text-cool-gray leading-relaxed">"{insight}"</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* User Journey Maps & Research Artifacts */}
          <div className="mb-16" data-animate="fade">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Eye className="h-8 w-8 text-electric-cyan" />
              User Journey Maps & Research Artifacts
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* User Journey Map */}
              <Card className="glass-morphism border-glass-border" data-animate="slide-left">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Users className="h-6 w-6 text-electric-cyan" />
                    Current State Journey Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-lg p-6 border border-electric-cyan/20 mb-4">
                    <div className="grid grid-cols-5 gap-4 text-center mb-6">
                      {['Awareness', 'Research', 'Decision', 'Action', 'Support'].map((stage, index) => (
                        <div key={index} className="space-y-3">
                          <div className="w-12 h-12 bg-electric-cyan/20 rounded-full flex items-center justify-center mx-auto">
                            <span className="text-electric-cyan font-bold text-sm">{index + 1}</span>
                          </div>
                          <div className="text-white font-medium text-sm">{stage}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Emotional Journey Line */}
                    <div className="relative h-24 bg-black/30 rounded-lg p-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-cool-gray text-sm">📈 Emotional journey visualization</div>
                      </div>
                      <div className="absolute bottom-2 left-4 text-xs text-neon-green">High</div>
                      <div className="absolute top-2 left-4 text-xs text-red-400">Frustration</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cool-gray text-sm">5 detailed journey scenarios mapped</span>
                    <Button variant="ghost" size="sm" className="text-electric-cyan hover:bg-electric-cyan/20 min-h-[48px]" data-testid="button-view-journey">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Full Map
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* User Personas */}
              <Card className="glass-morphism border-glass-border" data-animate="slide-right">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Users className="h-6 w-6 text-neon-pink" />
                    Primary User Personas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {['Sarah - Senior Trader', 'Michael - Risk Manager', 'Lisa - Portfolio Analyst'].map((persona, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-neon-pink/20">
                      <div className="w-12 h-12 bg-gradient-to-br from-neon-pink to-electric-cyan rounded-full flex items-center justify-center text-white font-bold">
                        {persona.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">{persona.split(' - ')[0]}</div>
                        <div className="text-cool-gray text-xs">{persona.split(' - ')[1]}</div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-neon-pink hover:bg-neon-pink/20 min-h-[48px]" data-testid={`button-persona-${index}`}>
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-glass-border">
                    <span className="text-cool-gray text-sm">Based on interviews with 45 participants</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pain Points & Opportunities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            <Card className="glass-morphism border-glass-border">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-red-400" />
                  User Pain Points
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {caseStudy.process.research.painPoints.map((pain: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <ArrowDown className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-cool-gray">{pain}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glass-morphism border-glass-border">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-neon-green" />
                  Opportunities Identified
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {caseStudy.process.research.opportunities.map((opportunity: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-neon-green/10 rounded-lg border border-neon-green/20">
                    <ArrowUp className="h-5 w-5 text-neon-green mt-0.5 flex-shrink-0" />
                    <p className="text-cool-gray">{opportunity}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section id="design" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal to-deep-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full mb-6">
              <Brush className="text-electric-cyan text-lg mr-2" />
              <span className="text-electric-cyan font-mono text-sm uppercase tracking-wider">Design Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              From Concept to <span className="text-gradient">Solution</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-4xl mx-auto leading-relaxed">
              A systematic design approach that transforms insights into user-centered solutions
            </p>
          </div>

          {/* Design Process Timeline */}
          <div className="relative mb-16">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-cyan via-neon-pink to-neon-green opacity-30 hidden lg:block"></div>
            
            <div className="space-y-12">
              {/* Ideation Phase */}
              <div className="relative flex items-start gap-8">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl">
                    <Lightbulb className="h-8 w-8" />
                  </div>
                  <div className="text-electric-cyan font-mono text-sm mt-2 uppercase tracking-wider">Phase 01</div>
                </div>
                
                <Card className="glass-morphism border-glass-border flex-1">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Ideation & Wireframing</h3>
                    <p className="text-cool-gray leading-relaxed mb-6">
                      Collaborative workshops, user flow mapping, and low-fidelity wireframes to explore solution possibilities
                    </p>
                    
                    {/* Wireframes & User Flows */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-4">
                        <h4 className="text-white font-medium flex items-center gap-2">
                          <FileText className="h-5 w-5 text-electric-cyan" />
                          Low-Fidelity Wireframes
                        </h4>
                        <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-lg p-4 border border-electric-cyan/20">
                          <div className="grid grid-cols-2 gap-2 mb-3">
                            {[1, 2, 3, 4].map((wireframe) => (
                              <div key={wireframe} className="bg-black/40 rounded border border-electric-cyan/30 h-16 flex items-center justify-center">
                                <div className="text-electric-cyan text-xs">Wireframe {wireframe}</div>
                              </div>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm" className="text-electric-cyan hover:bg-electric-cyan/20 w-full min-h-[48px]" data-testid="button-view-wireframes">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View All Wireframes
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-white font-medium flex items-center gap-2">
                          <GitBranch className="h-5 w-5 text-neon-pink" />
                          User Flow Diagrams
                        </h4>
                        <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-lg p-4 border border-neon-pink/20">
                          <div className="space-y-3">
                            {['Primary Trading Flow', 'Account Setup Flow', 'Risk Management Flow'].map((flow, index) => (
                              <div key={index} className="flex items-center gap-3 p-2 bg-black/30 rounded">
                                <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                                <span className="text-cool-gray text-sm">{flow}</span>
                              </div>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm" className="text-neon-pink hover:bg-neon-pink/20 w-full mt-3 min-h-[48px]" data-testid="button-view-flows">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View User Flows
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="p-3 bg-electric-cyan/20 rounded-lg mb-3 inline-block">
                          <Users className="h-6 w-6 text-electric-cyan" />
                        </div>
                        <div className="text-white font-medium mb-2">Design Workshops</div>
                        <div className="text-sm text-cool-gray">{caseStudy.process.ideation.workshops.length} sessions conducted</div>
                      </div>
                      <div className="text-center">
                        <div className="p-3 bg-neon-pink/20 rounded-lg mb-3 inline-block">
                          <FileText className="h-6 w-6 text-neon-pink" />
                        </div>
                        <div className="text-white font-medium mb-2">Concept Validation</div>
                        <div className="text-sm text-cool-gray">12 wireframe variations tested</div>
                      </div>
                      <div className="text-center">
                        <div className="p-3 bg-neon-green/20 rounded-lg mb-3 inline-block">
                          <GitBranch className="h-6 w-6 text-neon-green" />
                        </div>
                        <div className="text-white font-medium mb-2">User Flow Maps</div>
                        <div className="text-sm text-cool-gray">8 core user journeys mapped</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Design & Testing Phase */}
              <div className="relative flex items-start gap-8">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-green rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl">
                    <Code className="h-8 w-8" />
                  </div>
                  <div className="text-neon-pink font-mono text-sm mt-2 uppercase tracking-wider">Phase 02</div>
                </div>
                
                <Card className="glass-morphism border-glass-border flex-1">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">High-Fidelity Design & Testing</h3>
                    <p className="text-cool-gray leading-relaxed mb-6">
                      High-fidelity mockups, interactive prototypes, and comprehensive usability testing
                    </p>
                    
                    {/* High-Fidelity Mockups */}
                    <div className="mb-8">
                      <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                        <Brush className="h-5 w-5 text-neon-pink" />
                        High-Fidelity Mockups & Prototypes
                      </h4>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {/* Desktop Mockup */}
                        <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-lg p-4 border border-neon-pink/20">
                          <div className="bg-black/40 rounded border-2 border-neon-pink/30 h-32 mb-3 flex flex-col">
                            <div className="flex items-center gap-1 p-2 border-b border-neon-pink/20">
                              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                              <Monitor className="h-8 w-8 text-neon-pink opacity-60" />
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-white font-medium text-sm">Desktop Interface</div>
                            <div className="text-cool-gray text-xs">Trading Dashboard</div>
                          </div>
                        </div>
                        
                        {/* Mobile Mockup */}
                        <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-lg p-4 border border-electric-cyan/20">
                          <div className="bg-black/40 rounded-2xl border-2 border-electric-cyan/30 h-32 w-16 mx-auto mb-3 flex items-center justify-center">
                            <Smartphone className="h-6 w-6 text-electric-cyan opacity-60" />
                          </div>
                          <div className="text-center">
                            <div className="text-white font-medium text-sm">Mobile App</div>
                            <div className="text-cool-gray text-xs">iOS & Android</div>
                          </div>
                        </div>
                        
                        {/* Tablet Mockup */}
                        <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-lg p-4 border border-neon-green/20">
                          <div className="bg-black/40 rounded border-2 border-neon-green/30 h-32 mb-3 flex items-center justify-center">
                            <Tablet className="h-8 w-8 text-neon-green opacity-60" />
                          </div>
                          <div className="text-center">
                            <div className="text-white font-medium text-sm">Tablet Version</div>
                            <div className="text-cool-gray text-xs">Responsive Design</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center mt-4">
                        <Button variant="ghost" size="sm" className="text-neon-pink hover:bg-neon-pink/20 min-h-[48px]" data-testid="button-view-mockups">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View All Mockups & Prototypes
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                          <TestTube className="h-5 w-5 text-neon-pink" />
                          Testing Methods
                        </h4>
                        <div className="space-y-3">
                          {caseStudy.process.design.testing.map((method: string, index: number) => (
                            <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-neon-pink/10 transition-colors">
                              <CheckCircle className="h-5 w-5 text-neon-green flex-shrink-0" />
                              <span className="text-cool-gray text-sm">{method}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                          <ThumbsUp className="h-5 w-5 text-neon-green" />
                          Key Findings
                        </h4>
                        <div className="space-y-3">
                          {caseStudy.process.design.usabilityFindings.map((finding: string, index: number) => (
                            <div key={index} className="p-3 bg-neon-green/10 rounded-lg border-l-4 border-neon-green">
                              <p className="text-cool-gray text-sm leading-relaxed">"{finding}"</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Details */}
      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black to-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full mb-6">
              <Rocket className="text-electric-cyan text-lg mr-2" />
              <span className="text-electric-cyan font-mono text-sm uppercase tracking-wider">Solution</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              The <span className="text-gradient">Final Solution</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-4xl mx-auto leading-relaxed">
              {caseStudy.solution.description}
            </p>
          </div>

          {/* Final UI Showcase */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Layers className="h-8 w-8 text-electric-cyan" />
              Final UI Design & User Flows
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Desktop UI */}
              <Card className="glass-morphism border-glass-border">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Monitor className="h-6 w-6 text-electric-cyan" />
                    Desktop Interface
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-lg p-4 border border-electric-cyan/20 mb-4">
                    <div className="bg-black/40 rounded border border-electric-cyan/30 h-40 flex flex-col">
                      <div className="flex items-center gap-1 p-2 border-b border-electric-cyan/20">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 p-3 space-y-2">
                        <div className="bg-electric-cyan/20 rounded h-3 w-3/4"></div>
                        <div className="grid grid-cols-3 gap-2 h-16">
                          <div className="bg-neon-pink/20 rounded"></div>
                          <div className="bg-neon-green/20 rounded"></div>
                          <div className="bg-electric-cyan/20 rounded"></div>
                        </div>
                        <div className="bg-cool-gray/20 rounded h-2 w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-electric-cyan hover:bg-electric-cyan/20 w-full min-h-[48px]" data-testid="button-view-desktop">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Desktop Screens
                  </Button>
                </CardContent>
              </Card>
              
              {/* Mobile UI */}
              <Card className="glass-morphism border-glass-border">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Smartphone className="h-6 w-6 text-neon-pink" />
                    Mobile Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-lg p-4 border border-neon-pink/20 mb-4">
                    <div className="bg-black/40 rounded-xl border border-neon-pink/30 h-40 w-24 mx-auto flex flex-col">
                      <div className="p-2 border-b border-neon-pink/20">
                        <div className="bg-neon-pink/30 rounded-full h-1 w-8 mx-auto"></div>
                      </div>
                      <div className="flex-1 p-2 space-y-2">
                        <div className="bg-neon-pink/20 rounded h-2 w-full"></div>
                        <div className="grid grid-cols-2 gap-1 h-12">
                          <div className="bg-electric-cyan/20 rounded"></div>
                          <div className="bg-neon-green/20 rounded"></div>
                        </div>
                        <div className="space-y-1">
                          <div className="bg-cool-gray/20 rounded h-1 w-full"></div>
                          <div className="bg-cool-gray/20 rounded h-1 w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-neon-pink hover:bg-neon-pink/20 w-full min-h-[48px]" data-testid="button-view-mobile">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Mobile Screens
                  </Button>
                </CardContent>
              </Card>
              
              {/* Information Architecture */}
              <Card className="glass-morphism border-glass-border">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <GitBranch className="h-6 w-6 text-neon-green" />
                    Information Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-lg p-4 border border-neon-green/20 mb-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-neon-green rounded-full"></div>
                        <div className="bg-neon-green/20 rounded h-2 w-20"></div>
                      </div>
                      <div className="ml-5 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-electric-cyan rounded-full"></div>
                          <div className="bg-electric-cyan/20 rounded h-1 w-16"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                          <div className="bg-neon-pink/20 rounded h-1 w-12"></div>
                        </div>
                        <div className="ml-4 space-y-1">
                          <div className="bg-cool-gray/20 rounded h-1 w-8"></div>
                          <div className="bg-cool-gray/20 rounded h-1 w-10"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-neon-green hover:bg-neon-green/20 w-full min-h-[48px]" data-testid="button-view-architecture">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Site Map
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-16 mb-16">
            {caseStudy.solution.keyFeatures.map((feature, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-black text-electric-cyan">0{index + 1}</span>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-cool-gray leading-relaxed text-lg mb-6">
                    {feature.description}
                  </p>
                  <div className="p-6 bg-gradient-to-r from-electric-cyan/10 to-transparent rounded-xl border border-electric-cyan/20">
                    <div className="flex items-center gap-3 mb-2">
                      <DollarSign className="h-5 w-5 text-neon-green" />
                      <span className="text-white font-medium">Business Value</span>
                    </div>
                    <p className="text-cool-gray">{feature.businessValue}</p>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-2xl p-8 border border-glass-border">
                    <div className="bg-gradient-to-br from-electric-cyan/20 to-neon-pink/20 rounded-lg h-64 flex items-center justify-center relative overflow-hidden">
                      <div className="text-center z-10">
                        <Monitor className="h-16 w-16 text-electric-cyan mx-auto mb-4" />
                        <div className="text-white font-medium">Interactive Prototype</div>
                        <div className="text-cool-gray text-sm">Live demo available</div>
                      </div>
                      {/* Mock UI Elements */}
                      <div className="absolute inset-4 border border-electric-cyan/30 rounded-lg">
                        <div className="grid grid-cols-3 gap-2 p-3 h-full">
                          <div className="bg-electric-cyan/10 rounded"></div>
                          <div className="bg-neon-pink/10 rounded"></div>
                          <div className="bg-neon-green/10 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Design System & Component Library */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Layers className="h-8 w-8 text-electric-cyan" />
              Design System & Component Library
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Component Library */}
              <Card className="glass-morphism border-glass-border">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Code className="h-6 w-6 text-electric-cyan" />
                    UI Component Library
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Components Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {['Buttons', 'Cards', 'Forms', 'Charts', 'Modals', 'Tables'].map((component, index) => (
                        <div key={index} className="bg-gradient-to-br from-charcoal to-deep-black rounded-lg p-3 border border-electric-cyan/20">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-electric-cyan rounded-full"></div>
                            <div className="text-white font-medium text-sm">{component}</div>
                          </div>
                          <div className="bg-electric-cyan/10 rounded h-6 flex items-center justify-center">
                            <div className="text-electric-cyan text-xs opacity-60">Component</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-glass-border">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-cool-gray">45+ reusable components</span>
                        <Button variant="ghost" size="sm" className="text-electric-cyan hover:bg-electric-cyan/20 min-h-[48px]" data-testid="button-view-components">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Storybook
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Design Tokens */}
              <Card className="glass-morphism border-glass-border">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <Brush className="h-6 w-6 text-neon-pink" />
                    Design Tokens & Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Color Palette */}
                    <div>
                      <h5 className="text-white font-medium mb-3 text-sm">Color System</h5>
                      <div className="flex gap-2">
                        {[
                          { name: 'Primary', color: 'bg-electric-cyan' },
                          { name: 'Secondary', color: 'bg-neon-pink' },
                          { name: 'Success', color: 'bg-neon-green' },
                          { name: 'Warning', color: 'bg-yellow-400' },
                        ].map((color, index) => (
                          <div key={index} className="text-center">
                            <div className={`w-8 h-8 ${color.color} rounded-full mb-1`}></div>
                            <div className="text-xs text-cool-gray">{color.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Typography */}
                    <div>
                      <h5 className="text-white font-medium mb-3 text-sm">Typography Scale</h5>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="text-xl font-bold text-white">Aa</div>
                          <div className="text-cool-gray text-sm">Display / 32px</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-lg font-semibold text-white">Aa</div>
                          <div className="text-cool-gray text-sm">Heading / 24px</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-base text-white">Aa</div>
                          <div className="text-cool-gray text-sm">Body / 16px</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-glass-border">
                      <Button variant="ghost" size="sm" className="text-neon-pink hover:bg-neon-pink/20 w-full min-h-[48px]" data-testid="button-view-tokens">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Design Tokens
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Technical Implementation */}
            <Card className="glass-morphism border-glass-border">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-3">
                  <Code className="h-6 w-6 text-neon-green" />
                  Technical Implementation & Principles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-white font-medium mb-4">Design Principles</h4>
                    <div className="space-y-3">
                      {caseStudy.solution.designSystem?.principles?.map((principle: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-black/30 rounded-lg">
                          <CheckCircle className="h-5 w-5 text-electric-cyan flex-shrink-0 mt-0.5" />
                          <span className="text-cool-gray text-sm">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-4">Technical Constraints</h4>
                    <div className="space-y-3">
                      {caseStudy.solution.technicalImplementation?.constraints?.map((constraint: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-black/30 rounded-lg">
                          <Info className="h-5 w-5 text-neon-pink flex-shrink-0 mt-0.5" />
                          <span className="text-cool-gray text-sm">{constraint}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section id="results" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal to-deep-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full mb-6">
              <TrendingUp className="text-electric-cyan text-lg mr-2" />
              <span className="text-electric-cyan font-mono text-sm uppercase tracking-wider">Results</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Measurable <span className="text-gradient">Business Impact</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-4xl mx-auto leading-relaxed">
              Quantifiable results that demonstrate the value of user-centered design
            </p>
          </div>

          {/* Business Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {caseStudy.results.businessMetrics.map((metric, index) => (
              <Card key={index} className="glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-500 hover-glow bg-gradient-to-br from-electric-cyan/5 to-transparent">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-electric-cyan/20 rounded-xl inline-block mb-4">
                    <DollarSign className="h-8 w-8 text-electric-cyan" />
                  </div>
                  <div className="text-3xl font-black text-electric-cyan mb-2">{metric.value}</div>
                  <div className="text-white font-medium mb-2">{metric.label}</div>
                  <div className="text-neon-green text-sm font-medium mb-2">{metric.change}</div>
                  <div className="text-cool-gray text-xs">{metric.significance}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* User Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {caseStudy.results.userMetrics.map((metric, index) => (
              <Card key={index} className="glass-morphism border-glass-border hover:border-neon-pink transition-all duration-500 hover-glow bg-gradient-to-br from-neon-pink/5 to-transparent">
                <CardContent className="p-8 text-center">
                  <div className="p-4 bg-neon-pink/20 rounded-xl inline-block mb-4">
                    <Users className="h-8 w-8 text-neon-pink" />
                  </div>
                  <div className="text-3xl font-black text-neon-pink mb-2">{metric.value}</div>
                  <div className="text-white font-medium mb-2">{metric.label}</div>
                  <div className="text-neon-green text-sm font-medium mb-2">{metric.change}</div>
                  <div className="text-cool-gray text-xs">{metric.methodology}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials */}
          <Card className="glass-morphism border-glass-border bg-gradient-to-r from-electric-cyan/10 to-neon-pink/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-electric-cyan" />
                Client Testimonials
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {caseStudy.results.testimonials?.map((testimonial, index) => (
                <div key={index} className="flex items-start gap-6 p-6 bg-black/30 rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-cool-gray leading-relaxed text-lg italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="text-white font-medium">{testimonial.author}</div>
                        <div className="text-cool-gray text-sm">{testimonial.role} at {testimonial.company}</div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-electric-cyan hover:text-white hover:bg-electric-cyan/20 min-h-[48px]"
                        data-testid={`button-linkedin-${index}`}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Learnings & Reflections */}
      <section id="learnings" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black to-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full mb-6">
              <Brain className="text-electric-cyan text-lg mr-2" />
              <span className="text-electric-cyan font-mono text-sm uppercase tracking-wider">Learnings</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Key <span className="text-gradient">Learnings & Reflections</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-4xl mx-auto leading-relaxed">
              Insights gained and improvements for future projects
            </p>
          </div>

          <Tabs defaultValue="challenges" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-charcoal border border-glass-border">
              <TabsTrigger 
                value="challenges" 
                className="data-[state=active]:bg-electric-cyan data-[state=active]:text-black min-h-[48px]"
                data-testid="tab-challenges"
              >
                Challenges
              </TabsTrigger>
              <TabsTrigger 
                value="solutions" 
                className="data-[state=active]:bg-electric-cyan data-[state=active]:text-black min-h-[48px]"
                data-testid="tab-solutions"
              >
                Solutions
              </TabsTrigger>
              <TabsTrigger 
                value="improvements" 
                className="data-[state=active]:bg-electric-cyan data-[state=active]:text-black min-h-[48px]"
                data-testid="tab-improvements"
              >
                Improvements
              </TabsTrigger>
              <TabsTrigger 
                value="growth" 
                className="data-[state=active]:bg-electric-cyan data-[state=active]:text-black min-h-[48px]"
                data-testid="tab-growth"
              >
                Personal Growth
              </TabsTrigger>
            </TabsList>

            <TabsContent value="challenges">
              <Card className="glass-morphism border-glass-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <AlertCircle className="h-6 w-6 text-red-400" />
                    Key Challenges Faced
                  </h3>
                  <div className="space-y-4">
                    {caseStudy.learnings.challenges.map((challenge: string, index: number) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                        <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-red-400 text-sm font-bold">{index + 1}</span>
                        </div>
                        <p className="text-cool-gray leading-relaxed">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="solutions">
              <Card className="glass-morphism border-glass-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-neon-green" />
                    How We Solved Them
                  </h3>
                  <div className="space-y-4">
                    {caseStudy.learnings.solutions.map((solution: string, index: number) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-neon-green/10 rounded-lg border border-neon-green/20">
                        <CheckCircle className="h-5 w-5 text-neon-green flex-shrink-0 mt-0.5" />
                        <p className="text-cool-gray leading-relaxed">{solution}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="improvements">
              <Card className="glass-morphism border-glass-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <TrendingUp className="h-6 w-6 text-electric-cyan" />
                    Areas for Improvement
                  </h3>
                  <div className="space-y-4">
                    {caseStudy.learnings.improvements.map((improvement: string, index: number) => (
                      <div key={index} className="flex items-start gap-4 p-4 bg-electric-cyan/10 rounded-lg border border-electric-cyan/20">
                        <ArrowUp className="h-5 w-5 text-electric-cyan flex-shrink-0 mt-0.5" />
                        <p className="text-cool-gray leading-relaxed">{improvement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="growth">
              <Card className="glass-morphism border-glass-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Heart className="h-6 w-6 text-neon-pink" />
                    Personal Growth & Reflection
                  </h3>
                  <div className="p-6 bg-gradient-to-r from-neon-pink/10 to-electric-cyan/10 rounded-xl border border-neon-pink/20">
                    <p className="text-cool-gray leading-relaxed text-lg italic">
                      "{caseStudy.learnings.personalGrowth}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Next Steps */}
          <Card className="glass-morphism border-glass-border mt-16">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center gap-3">
                <Rocket className="h-6 w-6 text-electric-cyan" />
                Next Steps & Future Improvements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.learnings.nextSteps.map((step: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-electric-cyan/10 rounded-lg border border-electric-cyan/20">
                    <Rocket className="h-5 w-5 text-electric-cyan flex-shrink-0 mt-0.5" />
                    <p className="text-cool-gray">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-deep-black to-charcoal border-t border-glass-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Explore More Case Studies</h3>
              <p className="text-cool-gray">Discover how design thinking drives business results</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {caseStudy.previousProject && (
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => setLocation(`/case-study/${caseStudy.previousProject}`)}
                  className="border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-black min-h-[48px]"
                  data-testid="button-previous-project"
                >
                  <ChevronLeft className="h-5 w-5 mr-2" />
                  Previous Project
                </Button>
              )}
              
              {caseStudy.nextProject && (
                <Button 
                  variant="default" 
                  size="lg" 
                  onClick={() => setLocation(`/case-study/${caseStudy.nextProject}`)}
                  className="bg-electric-cyan text-black hover:bg-electric-cyan/90 min-h-[48px]"
                  data-testid="button-next-project"
                >
                  Next Project
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
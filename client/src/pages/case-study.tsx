import { useParams, useLocation } from 'wouter';
import { useState, useEffect } from 'react';
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

export default function CaseStudyPage() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [activeSection, setActiveSection] = useState('overview');

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'challenge', 'research', 'design', 'solution', 'results', 'learnings'];
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-deep-black/90 backdrop-blur-xl border-b border-glass-border">
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
            <div className="bg-gradient-to-br from-electric-cyan/10 to-neon-pink/10 rounded-3xl p-8 border border-electric-cyan/20">
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
                  <div key={index} className="text-center">
                    <div className="text-3xl font-black text-electric-cyan mb-2">{metric.value}</div>
                    <div className="text-sm text-cool-gray mb-2">{metric.metric}</div>
                    <div className="text-xs text-neon-green font-medium">{metric.change}</div>
                  </div>
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
            <Card className="glass-morphism border-electric-cyan/30 bg-gradient-to-br from-electric-cyan/10 to-transparent">
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

            <Card className="glass-morphism border-neon-pink/30 bg-gradient-to-br from-neon-pink/10 to-transparent">
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

            <Card className="glass-morphism border-neon-green/30 bg-gradient-to-br from-neon-green/10 to-transparent">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                    <h3 className="text-2xl font-bold text-white mb-4">Ideation & Concept Development</h3>
                    <p className="text-cool-gray leading-relaxed mb-6">
                      Collaborative workshops and concept validation to explore solution possibilities
                    </p>
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
                        <div className="text-sm text-cool-gray">Multiple iterations tested</div>
                      </div>
                      <div className="text-center">
                        <div className="p-3 bg-neon-green/20 rounded-lg mb-3 inline-block">
                          <GitBranch className="h-6 w-6 text-neon-green" />
                        </div>
                        <div className="text-white font-medium mb-2">Rapid Prototyping</div>
                        <div className="text-sm text-cool-gray">Interactive concepts developed</div>
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
                    <h3 className="text-2xl font-bold text-white mb-4">Design & Usability Testing</h3>
                    <p className="text-cool-gray leading-relaxed mb-6">
                      High-fidelity prototypes with continuous user testing and iteration
                    </p>
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
                    <div className="bg-gradient-to-br from-electric-cyan/20 to-neon-pink/20 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Monitor className="h-16 w-16 text-electric-cyan mx-auto mb-4" />
                        <div className="text-white font-medium">Interactive Prototype</div>
                        <div className="text-cool-gray text-sm">Live demo available</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Design System */}
          <Card className="glass-morphism border-glass-border">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center gap-3">
                <Layers className="h-6 w-6 text-electric-cyan" />
                Design System & Technical Implementation
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
                        className="text-electric-cyan hover:text-white hover:bg-electric-cyan/20 min-h-[44px]"
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
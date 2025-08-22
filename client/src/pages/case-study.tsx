import { useParams, useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Target, TrendingUp, ExternalLink, ChevronRight, Star, Award, Lightbulb, Zap, CheckCircle, Eye, Heart, MessageSquare, Download, Play, Pause, BarChart3, PieChart, Activity, Layers, Brush, Code, TestTube, Rocket, Search, Smartphone, Monitor, Tablet } from 'lucide-react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { faangCaseStudies } from '@/data/faang-case-studies';
import { CaseStudy } from '../../../shared/case-study-schema';

export default function CaseStudyPage() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);

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

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-deep-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-cyan mx-auto mb-6"></div>
          <p className="text-cool-gray text-lg">Loading case study...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-black text-white overflow-x-hidden">
      {/* Floating Navigation */}
      <header className="fixed top-6 left-6 z-50">
        <Button 
          variant="ghost" 
          size="lg" 
          onClick={() => setLocation('/')}
          className="glass-morphism text-white hover:text-electric-cyan border border-glass-border hover:border-electric-cyan transition-all duration-300 min-h-[48px] min-w-[48px] px-6 py-3"
          data-testid="button-back-home"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Portfolio
        </Button>
      </header>

      {/* Hero Section - Results First Approach */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black via-charcoal to-deep-black">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/5 to-neon-pink/5 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Project Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full">
              <Award className="text-electric-cyan text-lg mr-2" />
              <span className="text-electric-cyan font-mono text-sm min-h-[44px] uppercase tracking-wider">Case Study</span>
            </div>
            <div className="flex items-center gap-3 text-cool-gray text-sm min-h-[44px]">
              <Clock className="h-5 w-5" />
              <span>{caseStudy.duration}</span>
              <Separator orientation="vertical" className="h-6 bg-glass-border" />
              <Target className="h-5 w-5" />
              <span>{caseStudy.company}</span>
              <Separator orientation="vertical" className="h-6 bg-glass-border" />
              <Users className="h-5 w-5" />
              <span>{caseStudy.role}</span>
            </div>
          </div>

          {/* Title & Tags */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-electric-cyan text-electric-cyan bg-electric-cyan/10 px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="block text-white">{caseStudy.title.split(' ').slice(0, -1).join(' ')}</span>
              <span className="block bg-gradient-to-r from-electric-cyan via-neon-pink to-neon-green bg-clip-text text-transparent">
                {caseStudy.title.split(' ').slice(-1)[0]}
              </span>
            </h1>
            
            <p className="text-xl text-cool-gray leading-relaxed max-w-4xl">
              {caseStudy.overview}
            </p>
          </div>

          {/* Results-First Impact Showcase */}
          <div className="bg-gradient-to-r from-electric-cyan/10 to-neon-pink/10 rounded-3xl p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white mb-4 flex items-center justify-center gap-3">
                <BarChart3 className="text-electric-cyan h-8 w-8" />
                Business Impact Delivered
              </h2>
              <p className="text-cool-gray text-lg">Measurable results that speak to executive leadership</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.executiveSummary.impact.map((metric, index) => (
                <Card key={index} className="glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-500 hover-glow bg-black/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-black text-electric-cyan mb-3">{metric.value}</div>
                    <div className="text-sm min-h-[44px] text-cool-gray uppercase tracking-wider mb-2">{metric.metric}</div>
                    <div className="text-sm min-h-[44px] text-neon-green font-medium">{metric.change}</div>
                    <div className="text-xs text-cool-gray mt-2">{metric.timeframe}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Visual Preview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Visual Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-2xl p-8 border border-glass-border">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Desktop Mockup */}
                <div className="bg-gradient-to-br from-electric-cyan/20 to-neon-pink/20 rounded-lg h-48 flex items-center justify-center relative overflow-hidden">
                  <Monitor className="text-electric-cyan text-6xl opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-3 text-white text-sm min-h-[44px]">
                      <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                      <span>Live Product Demo</span>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Preview */}
                <div className="flex justify-center mt-4">
                  <div className="bg-gray-800 rounded-xl p-1 w-20 h-36 flex items-center justify-center">
                    <div className="bg-gradient-to-br from-electric-cyan/30 to-neon-pink/30 rounded-lg w-full h-full flex items-center justify-center">
                      <Smartphone className="text-white text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Success Metrics */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Why This Project Succeeded</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 glass-morphism rounded-xl">
                  <div className="p-2 bg-electric-cyan/20 rounded-lg">
                    <Users className="h-5 w-5 text-electric-cyan" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">User-Centered Approach</div>
                    <div className="text-cool-gray text-sm min-h-[44px]">Deep user research with {caseStudy.process.research.participants} participants informed every design decision</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 glass-morphism rounded-xl">
                  <div className="p-2 bg-neon-pink/20 rounded-lg">
                    <Rocket className="h-5 w-5 text-neon-pink" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Data-Driven Decisions</div>
                    <div className="text-cool-gray text-sm min-h-[44px]">Continuous A/B testing and performance monitoring guided optimizations</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 glass-morphism rounded-xl">
                  <div className="p-2 bg-neon-green/20 rounded-lg">
                    <Target className="h-5 w-5 text-neon-green" />
                  </div>
                  <div>
                    <div className="text-white font-semibold mb-1">Business Alignment</div>
                    <div className="text-cool-gray text-sm min-h-[44px]">Solutions directly addressed core business objectives and user pain points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Deep Dive - FAANG Style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal to-deep-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full mb-6">
              <Search className="text-electric-cyan text-lg mr-2" />
              <span className="text-electric-cyan font-mono text-sm min-h-[44px] uppercase tracking-wider">Problem Definition</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              The Challenge That <span className="text-gradient">Demanded Innovation</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-4xl mx-auto leading-relaxed">
              Understanding the complete business and user context that shaped every design decision
            </p>
          </div>

          {/* Challenge Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Problem Statement */}
            <Card className="glass-morphism border-glass-border bg-gradient-to-br from-red-500/10 to-orange-500/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Target className="h-6 w-6 text-red-400" />
                  Core Problem
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-cool-gray leading-relaxed text-lg">
                  {caseStudy.challenge.problem}
                </p>
                <div className="p-4 bg-black/30 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-400 font-semibold mb-2">Business Impact</p>
                  <p className="text-cool-gray">{caseStudy.executiveSummary.businessContext}</p>
                </div>
              </CardContent>
            </Card>

            {/* User Pain Points */}
            <Card className="glass-morphism border-glass-border bg-gradient-to-br from-yellow-500/10 to-orange-500/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Users className="h-6 w-6 text-yellow-400" />
                  User Pain Points
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-cool-gray leading-relaxed text-lg">
                  {caseStudy.executiveSummary.userProblem}
                </p>
                <div className="space-y-3">
                  {caseStudy.process.research.painPoints.slice(0, 3).map((pain: string, index: number) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-black/30 rounded-lg">
                      <div className="w-6 h-6 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-yellow-400 text-sm min-h-[44px] font-bold">{index + 1}</span>
                      </div>
                      <p className="text-cool-gray text-sm min-h-[44px]">{pain}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Context & Constraints */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Business Context */}
            <Card className="glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-electric-cyan" />
                  Business Context
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cool-gray mb-4">{caseStudy.challenge.context}</p>
                <div className="space-y-2">
                  {caseStudy.challenge.objectives.slice(0, 3).map((objective: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 text-sm min-h-[44px] text-cool-gray">
                      <CheckCircle className="h-5 w-5 text-electric-cyan flex-shrink-0" />
                      <span>{objective}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Constraints */}
            <Card className="glass-morphism border-glass-border hover:border-neon-pink transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Code className="h-6 w-6 text-neon-pink" />
                  Constraints
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {caseStudy.challenge.constraints.slice(0, 4).map((constraint: string, index: number) => (
                    <div key={index} className="p-3 bg-black/30 rounded-lg border-l-4 border-neon-pink">
                      <p className="text-cool-gray text-sm min-h-[44px]">{constraint}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Success Metrics */}
            <Card className="glass-morphism border-glass-border hover:border-neon-green transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Activity className="h-6 w-6 text-neon-green" />
                  Success Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {caseStudy.challenge.successMetrics.map((metric: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-2 bg-black/30 rounded-lg">
                      <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                      <span className="text-cool-gray text-sm min-h-[44px]">{metric}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Process Section - Enhanced with Visuals */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black to-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full mb-6">
              <Layers className="text-electric-cyan text-lg mr-2" />
              <span className="text-electric-cyan font-mono text-sm min-h-[44px] uppercase tracking-wider">Design Process</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              From Research to <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-4xl mx-auto leading-relaxed">
              A systematic approach that transforms user insights into business-driving solutions
            </p>
          </div>

          <div className="space-y-16">
            {/* Research Phase - Enhanced */}
            <div className="relative">
              {/* Process Connector Line */}
              <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-electric-cyan via-neon-pink to-neon-green opacity-30 hidden lg:block"></div>
              
              <Card className="glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-500 bg-gradient-to-r from-electric-cyan/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex items-start gap-8">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl">
                        <Search className="h-8 w-8" />
                      </div>
                      <div className="text-electric-cyan font-mono text-sm min-h-[44px] mt-2 uppercase tracking-wider">Phase 01</div>
                    </div>
                    
                    <div className="flex-1 space-y-8">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                          Research & Discovery
                          <Badge className="bg-electric-cyan/20 text-electric-cyan border-electric-cyan">45 Participants</Badge>
                        </h3>
                        <p className="text-xl text-cool-gray mb-6 leading-relaxed">
                          Deep user research and competitive analysis to understand pain points and opportunities
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Research Methods */}
                        <Card className="bg-black/40 border-electric-cyan/30">
                          <CardHeader>
                            <CardTitle className="text-white flex items-center gap-3">
                              <TestTube className="h-5 w-5 text-electric-cyan" />
                              Methods
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            {caseStudy.process.research.methods.map((method: string, index: number) => (
                              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-electric-cyan/10 transition-colors">
                                <CheckCircle className="h-5 w-5 text-neon-green flex-shrink-0" />
                                <span className="text-cool-gray text-sm min-h-[44px]">{method}</span>
                              </div>
                            ))}
                          </CardContent>
                        </Card>

                        {/* Key Insights */}
                        <Card className="bg-black/40 border-electric-cyan/30">
                          <CardHeader>
                            <CardTitle className="text-white flex items-center gap-3">
                              <Lightbulb className="h-5 w-5 text-electric-cyan" />
                              Insights
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            {caseStudy.process.research.keyInsights.slice(0, 3).map((insight: string, index: number) => (
                              <div key={index} className="p-3 bg-electric-cyan/10 rounded-lg border-l-4 border-electric-cyan">
                                <p className="text-cool-gray text-sm min-h-[44px] leading-relaxed">"{insight}"</p>
                              </div>
                            ))}
                          </CardContent>
                        </Card>

                        {/* Research Artifacts */}
                        <Card className="bg-black/40 border-electric-cyan/30">
                          <CardHeader>
                            <CardTitle className="text-white flex items-center gap-3">
                              <Eye className="h-5 w-5 text-electric-cyan" />
                              Artifacts
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="space-y-3">
                              <div className="p-3 bg-gradient-to-r from-electric-cyan/20 to-transparent rounded-lg border border-electric-cyan/30">
                                <div className="flex items-center gap-3 mb-2">
                                  <Users className="h-5 w-5 text-electric-cyan" />
                                  <span className="text-white font-medium text-sm min-h-[44px]">User Journey Maps</span>
                                </div>
                                <p className="text-cool-gray text-xs">5 detailed journey maps covering all user scenarios</p>
                              </div>
                              
                              <div className="p-3 bg-gradient-to-r from-electric-cyan/20 to-transparent rounded-lg border border-electric-cyan/30">
                                <div className="flex items-center gap-3 mb-2">
                                  <BarChart3 className="h-5 w-5 text-electric-cyan" />
                                  <span className="text-white font-medium text-sm min-h-[44px]">Analytics Deep Dive</span>
                                </div>
                                <p className="text-cool-gray text-xs">6 months of user behavior analysis</p>
                              </div>
                              
                              <div className="p-3 bg-gradient-to-r from-electric-cyan/20 to-transparent rounded-lg border border-electric-cyan/30">
                                <div className="flex items-center gap-3 mb-2">
                                  <Heart className="h-5 w-5 text-electric-cyan" />
                                  <span className="text-white font-medium text-sm min-h-[44px]">Persona Profiles</span>
                                </div>
                                <p className="text-cool-gray text-xs">3 primary personas with detailed motivations</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Design & Ideation Phase */}
            <div className="relative">
              <Card className="glass-morphism border-glass-border hover:border-neon-pink transition-all duration-500 bg-gradient-to-r from-neon-pink/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex items-start gap-8">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-green rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl">
                        <Brush className="h-8 w-8" />
                      </div>
                      <div className="text-neon-pink font-mono text-sm min-h-[44px] mt-2 uppercase tracking-wider">Phase 02</div>
                    </div>
                    
                    <div className="flex-1 space-y-8">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                          Design & Ideation
                          <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink">5+ Iterations</Badge>
                        </h3>
                        <p className="text-xl text-cool-gray mb-6 leading-relaxed">
                          Collaborative design sprints and iterative prototyping to explore optimal solutions
                        </p>
                      </div>

                      {/* Design Process Visual */}
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-neon-pink/20 to-neon-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neon-pink/30">
                            <Lightbulb className="h-8 w-8 text-neon-pink" />
                          </div>
                          <h4 className="text-white font-semibold mb-2">Ideation</h4>
                          <p className="text-cool-gray text-sm min-h-[44px]">Collaborative workshops & design sprints</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-neon-pink/20 to-neon-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neon-pink/30">
                            <Layers className="h-8 w-8 text-neon-pink" />
                          </div>
                          <h4 className="text-white font-semibold mb-2">Wireframing</h4>
                          <p className="text-cool-gray text-sm min-h-[44px]">Low-fi concepts & information architecture</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-neon-pink/20 to-neon-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neon-pink/30">
                            <Monitor className="h-8 w-8 text-neon-pink" />
                          </div>
                          <h4 className="text-white font-semibold mb-2">Prototyping</h4>
                          <p className="text-cool-gray text-sm min-h-[44px]">Interactive prototypes & user testing</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-neon-pink/20 to-neon-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neon-pink/30">
                            <CheckCircle className="h-8 w-8 text-neon-pink" />
                          </div>
                          <h4 className="text-white font-semibold mb-2">Validation</h4>
                          <p className="text-cool-gray text-sm min-h-[44px]">A/B testing & usability studies</p>
                        </div>
                      </div>

                      {/* Key Findings */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {caseStudy.process.design.usabilityFindings.map((finding: string, index: number) => (
                          <Card key={index} className="bg-black/40 border-neon-pink/30">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 bg-neon-pink/20 rounded-lg flex items-center justify-center">
                                  <span className="text-neon-pink font-bold text-sm min-h-[44px]">{index + 1}</span>
                                </div>
                                <span className="text-neon-pink font-semibold text-sm min-h-[44px]">Key Finding</span>
                              </div>
                              <p className="text-cool-gray text-sm min-h-[44px] leading-relaxed">{finding}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Implementation & Results Phase */}
            <div className="relative">
              <Card className="glass-morphism border-glass-border hover:border-neon-green transition-all duration-500 bg-gradient-to-r from-neon-green/5 to-transparent">
                <CardContent className="p-8">
                  <div className="flex items-start gap-8">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-electric-cyan rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl">
                        <Rocket className="h-8 w-8" />
                      </div>
                      <div className="text-neon-green font-mono text-sm min-h-[44px] mt-2 uppercase tracking-wider">Phase 03</div>
                    </div>
                    
                    <div className="flex-1 space-y-8">
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                          Implementation & Launch
                          <Badge className="bg-neon-green/20 text-neon-green border-neon-green">6 Month Timeline</Badge>
                        </h3>
                        <p className="text-xl text-cool-gray mb-6 leading-relaxed">
                          Collaborative engineering partnership and iterative refinement through launch
                        </p>
                      </div>

                      {/* Implementation Details */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="bg-black/40 border-neon-green/30">
                          <CardHeader>
                            <CardTitle className="text-white flex items-center gap-3">
                              <Code className="h-5 w-5 text-neon-green" />
                              Technical Implementation
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="p-4 bg-neon-green/10 rounded-lg border-l-4 border-neon-green">
                              <p className="text-white font-medium mb-2">Platform</p>
                              <p className="text-cool-gray text-sm min-h-[44px]">{caseStudy.solution.technicalImplementation.platform}</p>
                            </div>
                            <div className="space-y-2">
                              <p className="text-white font-medium text-sm min-h-[44px]">Key Constraints:</p>
                              {caseStudy.solution.technicalImplementation.constraints.slice(0, 3).map((constraint: string, index: number) => (
                                <div key={index} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 bg-neon-green rounded-full mt-2 flex-shrink-0"></div>
                                  <p className="text-cool-gray text-sm min-h-[44px]">{constraint}</p>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="bg-black/40 border-neon-green/30">
                          <CardHeader>
                            <CardTitle className="text-white flex items-center gap-3">
                              <Activity className="h-5 w-5 text-neon-green" />
                              Impact Metrics
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 gap-4">
                              {caseStudy.executiveSummary.impact.map((metric, index) => (
                                <div key={index} className="text-center p-4 bg-neon-green/10 rounded-lg border border-neon-green/30">
                                  <div className="text-2xl font-black text-neon-green mb-1">{metric.value}</div>
                                  <div className="text-xs text-cool-gray uppercase tracking-wider">{metric.metric}</div>
                                  <div className="text-xs text-white mt-1">{metric.change}</div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Deep Dive */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal to-deep-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full mb-6">
              <Rocket className="text-electric-cyan text-lg mr-2" />
              <span className="text-electric-cyan font-mono text-sm min-h-[44px] uppercase tracking-wider">Final Solution</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              The Solution That <span className="text-gradient">Delivered</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-4xl mx-auto leading-relaxed">
              {caseStudy.solution.description}
            </p>
          </div>

          {/* Key Features Showcase */}
          <div className="space-y-12 mb-16">
            {caseStudy.solution.keyFeatures.map((feature, index) => (
              <Card key={index} className={`glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-500 overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <Badge className="bg-electric-cyan/20 text-electric-cyan border-electric-cyan">Key Feature</Badge>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-xl text-cool-gray leading-relaxed mb-6">{feature.description}</p>
                  
                  <div className="p-4 bg-gradient-to-r from-neon-green/20 to-transparent rounded-lg border-l-4 border-neon-green">
                    <p className="text-neon-green font-semibold mb-2">Business Value</p>
                    <p className="text-cool-gray">{feature.businessValue}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/2 bg-gradient-to-br from-electric-cyan/10 to-neon-pink/10 flex items-center justify-center p-8 lg:p-12">
                  <div className="w-full max-w-md">
                    {/* Mock Device Showcase */}
                    <div className="bg-gradient-to-br from-charcoal to-deep-black rounded-2xl p-6 border border-glass-border">
                      <div className="flex items-center justify-center mb-4">
                        <div className="flex gap-3">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-electric-cyan/20 to-neon-pink/20 rounded-lg h-32 flex items-center justify-center relative">
                        {index === 0 && <BarChart3 className="text-electric-cyan text-4xl" />}
                        {index === 1 && <Layers className="text-neon-pink text-4xl" />}
                        {index === 2 && <Activity className="text-neon-green text-4xl" />}
                        <div className="absolute bottom-2 right-2 w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Design System Showcase */}
          <Card className="glass-morphism border-glass-border bg-gradient-to-r from-electric-cyan/5 to-neon-pink/5">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3 text-2xl">
                <Brush className="h-7 w-7 text-electric-cyan" />
                Design System & Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-3">
                    <div className="w-2 h-2 bg-electric-cyan rounded-full"></div>
                    Typography
                  </h4>
                  <p className="text-cool-gray mb-4">{caseStudy.solution.designSystem?.typography || 'Modern, readable typography optimized for clarity'}</p>
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-white">Heading 1</div>
                    <div className="text-lg text-cool-gray">Body Text Sample</div>
                    <div className="text-sm min-h-[44px] text-cool-gray font-mono">Monospace Details</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-3">
                    <div className="w-2 h-2 bg-neon-pink rounded-full"></div>
                    Color Palette
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {(caseStudy.solution.designSystem?.colors || ['Primary Blue #0052CC', 'Success Green #00A86B', 'Warning Orange #FF8F00', 'Error Red #DE350B']).map((color: string, index: number) => {
                      const [colorName, colorValue] = color.split(' ');
                      return (
                        <div key={index} className="p-3 bg-black/30 rounded-lg border border-glass-border">
                          <div className={`w-full h-8 rounded mb-2 ${colorName.includes('Blue') ? 'bg-blue-500' : colorName.includes('Green') ? 'bg-green-500' : colorName.includes('Orange') ? 'bg-orange-500' : 'bg-red-500'}`}></div>
                          <div className="text-xs text-cool-gray font-mono">{colorValue}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-3">
                    <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                    Components
                  </h4>
                  <div className="space-y-3">
                    {(caseStudy.solution.designSystem?.components || ['Button Components', 'Card Layouts', 'Navigation Elements', 'Form Controls']).map((component: string, index: number) => (
                      <div key={index} className="p-3 bg-black/30 rounded-lg border border-glass-border flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-neon-green" />
                        <span className="text-cool-gray text-sm min-h-[44px]">{component}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results & Impact Deep Dive */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black to-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full mb-6">
              <TrendingUp className="text-electric-cyan text-lg mr-2" />
              <span className="text-electric-cyan font-mono text-sm min-h-[44px] uppercase tracking-wider">Impact Analysis</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Measurable <span className="text-gradient">Results</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-4xl mx-auto leading-relaxed">
              Data-driven outcomes that demonstrate the real-world impact of strategic design decisions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Business Metrics */}
            <Card className="glass-morphism border-glass-border bg-gradient-to-br from-electric-cyan/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3 text-2xl">
                  <BarChart3 className="h-7 w-7 text-electric-cyan" />
                  Business Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {caseStudy.results.businessMetrics.map((metric, index) => (
                  <div key={index} className="p-6 bg-black/30 rounded-xl border border-electric-cyan/30">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-semibold">{metric.label}</h4>
                      <Badge className="bg-electric-cyan/20 text-electric-cyan border-electric-cyan text-xs">{metric.change}</Badge>
                    </div>
                    <div className="text-3xl font-black text-electric-cyan mb-2">{metric.value}</div>
                    <p className="text-cool-gray text-sm min-h-[44px]">{metric.significance}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* User Metrics */}
            <Card className="glass-morphism border-glass-border bg-gradient-to-br from-neon-pink/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3 text-2xl">
                  <Users className="h-7 w-7 text-neon-pink" />
                  User Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {caseStudy.results.userMetrics.map((metric, index) => (
                  <div key={index} className="p-6 bg-black/30 rounded-xl border border-neon-pink/30">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-semibold">{metric.label}</h4>
                      <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink text-xs">{metric.change}</Badge>
                    </div>
                    <div className="text-3xl font-black text-neon-pink mb-2">{metric.value}</div>
                    <p className="text-cool-gray text-sm min-h-[44px]">{metric.methodology}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learnings & Growth */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal to-deep-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full mb-6">
              <Lightbulb className="text-electric-cyan text-lg mr-2" />
              <span className="text-electric-cyan font-mono text-sm min-h-[44px] uppercase tracking-wider">Insights & Growth</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Key <span className="text-gradient">Learnings</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-4xl mx-auto leading-relaxed">
              Every project teaches valuable lessons that enhance my approach to future challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Challenges & Solutions */}
            <Card className="glass-morphism border-glass-border">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3 text-xl">
                  <Target className="h-6 w-6 text-electric-cyan" />
                  Challenges & Solutions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {caseStudy.learnings.challenges.slice(0, 3).map((challenge: string, index: number) => (
                  <div key={index} className="space-y-4">
                    <div className="p-4 border-l-4 border-red-400 bg-red-400/10 rounded-r-lg">
                      <div className="text-sm min-h-[44px] text-red-400 font-semibold mb-2">Challenge {index + 1}</div>
                      <p className="text-cool-gray leading-relaxed">{challenge}</p>
                    </div>
                    <div className="p-4 border-l-4 border-neon-green bg-neon-green/10 rounded-r-lg">
                      <div className="text-sm min-h-[44px] text-neon-green font-semibold mb-2">Solution Applied</div>
                      <p className="text-cool-gray leading-relaxed">{caseStudy.learnings.solutions[index] || "Strategic approach applied with iterative refinement"}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Personal Growth & Future Vision */}
            <Card className="glass-morphism border-glass-border">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3 text-xl">
                  <Star className="h-6 w-6 text-neon-pink" />
                  Growth & Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-neon-pink/10 to-transparent rounded-lg border-l-4 border-neon-pink">
                  <h4 className="text-white font-semibold mb-3">Personal Growth</h4>
                  <blockquote className="text-cool-gray italic leading-relaxed">
                    "{caseStudy.learnings.personalGrowth}"
                  </blockquote>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-3">
                    <ChevronRight className="h-5 w-5 text-neon-green" />
                    Future Opportunities
                  </h4>
                  <div className="space-y-3">
                    {caseStudy.learnings.nextSteps.slice(0, 4).map((step: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-black/30 rounded-lg hover:bg-neon-green/10 transition-colors">
                        <div className="w-6 h-6 bg-neon-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-neon-green text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-cool-gray text-sm min-h-[44px] leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black via-charcoal to-deep-black">
        <div className="max-w-6xl mx-auto">
          <div className="glass-morphism rounded-3xl p-12 bg-gradient-to-r from-electric-cyan/10 via-neon-pink/10 to-neon-green/10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center px-6 py-3 glass-morphism rounded-full mb-6">
                <Rocket className="text-electric-cyan text-lg mr-2" />
                <span className="text-electric-cyan font-mono text-sm min-h-[44px] uppercase tracking-wider">Let's Collaborate</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                Ready to Create Similar <span className="text-gradient">Impact</span>?
              </h2>
              <p className="text-xl text-cool-gray mb-8 leading-relaxed max-w-4xl mx-auto">
                I help product teams transform complex user problems into elegant solutions that drive measurable business growth. Let's discuss your next strategic design challenge.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-black/20 rounded-xl border border-electric-cyan/30">
                <div className="w-12 h-12 bg-electric-cyan/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-6 w-6 text-electric-cyan" />
                </div>
                <h3 className="text-white font-bold mb-2">Measurable Results</h3>
                <p className="text-cool-gray text-sm min-h-[44px]">Data-driven design decisions that deliver quantifiable business impact</p>
              </div>
              
              <div className="text-center p-6 bg-black/20 rounded-xl border border-neon-pink/30">
                <div className="w-12 h-12 bg-neon-pink/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-neon-pink" />
                </div>
                <h3 className="text-white font-bold mb-2">User-Centered</h3>
                <p className="text-cool-gray text-sm min-h-[44px]">Deep research and empathy-driven solutions that users actually want</p>
              </div>
              
              <div className="text-center p-6 bg-black/20 rounded-xl border border-neon-green/30">
                <div className="w-12 h-12 bg-neon-green/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-6 w-6 text-neon-green" />
                </div>
                <h3 className="text-white font-bold mb-2">Strategic Vision</h3>
                <p className="text-cool-gray text-sm min-h-[44px]">Long-term product thinking that scales with your business growth</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => setLocation('/#contact')} 
                size="lg"
                className="bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-bold px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-xl min-h-[48px] min-w-[48px]"
                data-testid="button-contact"
              >
                <ExternalLink className="h-6 w-6 mr-3" />
                Start a Conversation
              </Button>
              
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => setLocation('/#work')}
                  size="lg"
                  className="border-2 border-glass-border text-white hover:bg-electric-cyan/10 hover:border-electric-cyan px-8 py-4 rounded-full transition-all duration-300 min-h-[48px] min-w-[48px]"
                  data-testid="button-view-portfolio"
                >
                  View More Case Studies
                </Button>
                
                <Button 
                  variant="ghost" 
                  onClick={() => window.open('mailto:contact@example.com', '_blank')}
                  size="lg"
                  className="text-cool-gray hover:text-white px-6 py-4 rounded-full transition-all duration-300 min-h-[48px] min-w-[48px]"
                  data-testid="button-email"
                >
                  <MessageSquare className="h-6 w-6 mr-2" />
                  Quick Message
                </Button>
              </div>
            </div>

            {/* Social Proof */}
            <div className="text-center mt-8 pt-8 border-t border-glass-border">
              <p className="text-cool-gray text-sm min-h-[44px] mb-4">Trusted by product teams at:</p>
              <div className="flex items-center justify-center gap-8 opacity-60">
                <span className="text-white font-bold tracking-wider">GOOGLE</span>
                <span className="text-white font-bold tracking-wider">META</span>
                <span className="text-white font-bold tracking-wider">APPLE</span>
                <span className="text-white font-bold tracking-wider">AMAZON</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useParams, useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Target, TrendingUp, ExternalLink, ChevronRight, Star, Award, Lightbulb, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
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
          size="sm" 
          onClick={() => setLocation('/')}
          className="glass-morphism text-white hover:text-electric-cyan border border-glass-border hover:border-electric-cyan transition-all duration-300"
          data-testid="button-back-home"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Portfolio
        </Button>
      </header>

      {/* Hero Section - Impact First */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black via-charcoal to-deep-black">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/5 to-neon-pink/5 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Project Badge */}
          <div className="inline-flex items-center justify-center p-3 glass-morphism rounded-full mb-8">
            <Award className="text-electric-cyan text-xl mr-3" />
            <span className="text-electric-cyan font-mono text-sm uppercase tracking-wider">Case Study</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  {caseStudy.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-electric-cyan text-electric-cyan bg-electric-cyan/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  <span className="block text-white">{caseStudy.title.split(' ').slice(0, -1).join(' ')}</span>
                  <span className="block bg-gradient-to-r from-electric-cyan via-neon-pink to-neon-green bg-clip-text text-transparent">
                    {caseStudy.title.split(' ').slice(-1)[0]}
                  </span>
                </h1>
                
                <p className="text-xl text-cool-gray leading-relaxed max-w-2xl">
                  {caseStudy.overview}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="glass-morphism p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-electric-cyan/20 rounded-lg">
                      <Clock className="h-5 w-5 text-electric-cyan" />
                    </div>
                    <span className="text-cool-gray text-sm">Duration</span>
                  </div>
                  <div className="text-white font-bold text-lg">{caseStudy.duration}</div>
                </div>
                <div className="glass-morphism p-4 rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-neon-pink/20 rounded-lg">
                      <Target className="h-5 w-5 text-neon-pink" />
                    </div>
                    <span className="text-cool-gray text-sm">Company</span>
                  </div>
                  <div className="text-white font-bold text-lg">{caseStudy.company}</div>
                </div>
              </div>
            </div>

            {/* Impact Metrics Hero */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Zap className="text-electric-cyan" />
                Measurable Impact
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {caseStudy.executiveSummary.impact.slice(0, 4).map((metric, index) => (
                  <Card key={index} className="glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-500 hover-glow">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-black text-electric-cyan mb-2">{metric.value}</div>
                      <div className="text-xs text-cool-gray uppercase tracking-wider">{metric.metric}</div>
                      <div className="text-xs text-neon-green mt-1">{metric.change}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Create Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal to-deep-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 glass-morphism rounded-full mb-6">
              <Star className="text-electric-cyan text-xl mr-3" />
              <span className="text-electric-cyan font-mono text-sm uppercase tracking-wider">My Approach</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              How I Create <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              My systematic approach to transforming complex problems into user-centered solutions that drive business results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Business Context */}
            <Card className="glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-500 hover-glow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Understanding the Problem</h3>
                <p className="text-cool-gray leading-relaxed">
                  {caseStudy.executiveSummary.businessContext}
                </p>
              </CardContent>
            </Card>

            {/* User Problem */}
            <Card className="glass-morphism border-glass-border hover:border-neon-pink transition-all duration-500 hover-glow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-green rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">User-Centered Insights</h3>
                <p className="text-cool-gray leading-relaxed">
                  {caseStudy.executiveSummary.userProblem}
                </p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="glass-morphism border-glass-border hover:border-neon-green transition-all duration-500 hover-glow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-electric-cyan rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Strategic Solution</h3>
                <p className="text-cool-gray leading-relaxed">
                  {caseStudy.executiveSummary.solution}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black to-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              My Design <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              A proven methodology that combines user research, strategic thinking, and iterative design
            </p>
          </div>

          <div className="space-y-12">
            {/* Research Phase */}
            <Card className="glass-morphism border-glass-border">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-full flex items-center justify-center text-white font-bold text-lg">
                      01
                    </div>
                    <div className="w-0.5 h-20 bg-gradient-to-b from-electric-cyan to-transparent mt-4"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Research & Discovery</h3>
                    <p className="text-cool-gray mb-6 leading-relaxed">
                      Deep dive into user needs, business objectives, and technical constraints to identify opportunities for impact.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-electric-cyan mb-3">Research Methods</h4>
                        <div className="space-y-2">
                          {caseStudy.process.research.methods.map((method: string, index: number) => (
                            <div key={index} className="flex items-center gap-2 text-cool-gray">
                              <CheckCircle className="h-4 w-4 text-neon-green" />
                              {method}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-electric-cyan mb-3">Key Insights</h4>
                        <div className="text-2xl font-bold text-white mb-2">{caseStudy.process.research.participants}</div>
                        <div className="text-sm text-cool-gray">Research Participants</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Design Phase */}
            <Card className="glass-morphism border-glass-border">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-pink to-neon-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                      02
                    </div>
                    <div className="w-0.5 h-20 bg-gradient-to-b from-neon-pink to-transparent mt-4"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Design & Validation</h3>
                    <p className="text-cool-gray mb-6 leading-relaxed">
                      Iterative design process with continuous user testing and validation to ensure solutions meet real user needs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {caseStudy.process.design.usabilityFindings.map((finding: string, index: number) => (
                        <div key={index} className="p-4 glass-morphism rounded-lg">
                          <div className="text-neon-green font-semibold mb-2">Finding {index + 1}</div>
                          <div className="text-sm text-cool-gray">{finding}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Implementation Phase */}
            <Card className="glass-morphism border-glass-border">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-electric-cyan rounded-full flex items-center justify-center text-white font-bold text-lg">
                      03
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">Implementation & Results</h3>
                    <p className="text-cool-gray mb-6 leading-relaxed">
                      Close collaboration with engineering teams to ensure pixel-perfect implementation and optimal user experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {caseStudy.executiveSummary.impact.map((metric, index) => (
                        <div key={index} className="text-center p-4 glass-morphism rounded-lg">
                          <div className="text-xl font-bold text-electric-cyan mb-1">{metric.value}</div>
                          <div className="text-xs text-cool-gray uppercase tracking-wider">{metric.metric}</div>
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

      {/* Key Learnings Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal to-deep-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Key <span className="text-gradient">Learnings</span>
            </h2>
            <p className="text-xl text-cool-gray max-w-3xl mx-auto">
              Every project teaches valuable lessons that enhance my approach to future challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenges & Solutions */}
            <Card className="glass-morphism border-glass-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Target className="text-electric-cyan" />
                  Challenges & Solutions
                </h3>
                <div className="space-y-6">
                  {caseStudy.learnings.challenges.slice(0, 3).map((challenge: string, index: number) => (
                    <div key={index} className="border-l-4 border-electric-cyan pl-4">
                      <div className="text-sm text-cool-gray mb-2">Challenge {index + 1}</div>
                      <div className="text-white leading-relaxed">{challenge}</div>
                      <div className="text-sm text-neon-green mt-2">
                        Solution: {caseStudy.learnings.solutions[index] || "Strategic approach applied"}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personal Growth */}
            <Card className="glass-morphism border-glass-border">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Star className="text-neon-pink" />
                  Personal Growth
                </h3>
                <blockquote className="text-cool-gray italic text-lg leading-relaxed border-l-4 border-neon-pink pl-6 mb-6">
                  "{caseStudy.learnings.personalGrowth}"
                </blockquote>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Future Opportunities</h4>
                  <div className="space-y-2">
                    {caseStudy.learnings.nextSteps.slice(0, 3).map((step: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-cool-gray">
                        <ChevronRight className="h-4 w-4 text-neon-green" />
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black via-charcoal to-deep-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-morphism rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Ready to Create Similar <span className="text-gradient">Impact</span>?
            </h2>
            <p className="text-xl text-cool-gray mb-8 leading-relaxed">
              Let's discuss how I can help transform your product with strategic design thinking and measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setLocation('/#contact')} 
                className="bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
                data-testid="button-contact"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                Start a Conversation
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setLocation('/#work')}
                className="border-glass-border text-white hover:bg-glass-white px-8 py-4 rounded-full transition-all duration-300"
                data-testid="button-view-portfolio"
              >
                View More Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useParams, useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Users, Target, TrendingUp, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
        // Update page title for SEO
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
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading case study...</p>
        </div>
      </div>
    );
  }

  const ImpactMetricCard = ({ metric }: { metric: any }) => (
    <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-sm font-medium text-gray-400">{metric.metric}</h4>
          <TrendingUp className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform" />
        </div>
        <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs bg-green-500/20 text-green-400 border-green-500/30">
            {metric.change}
          </Badge>
          <span className="text-xs text-gray-500">{metric.timeframe}</span>
        </div>
      </CardContent>
    </Card>
  );

  const ProcessStep = ({ step, index }: { step: any; index: number }) => (
    <div className="flex gap-4 group" data-testid={`process-step-${index}`}>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center text-blue-400 font-bold text-sm group-hover:bg-blue-500 group-hover:text-white transition-all">
          {index + 1}
        </div>
        {index < 4 && (
          <div className="w-0.5 h-12 bg-gray-700 mt-2 group-hover:bg-blue-500/50 transition-colors"></div>
        )}
      </div>
      <div className="flex-1 pb-8">
        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {step.phase}
        </h4>
        <p className="text-gray-400 mb-3 leading-relaxed">{step.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {step.deliverables?.map((deliverable: string, idx: number) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
              <ChevronRight className="h-3 w-3 text-blue-400" />
              {deliverable}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 h-16">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLocation('/')}
              className="text-gray-400 hover:text-white"
              data-testid="button-back-home"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
            <div className="h-6 w-px bg-gray-700" />
            <div>
              <div className="text-sm text-gray-400">{caseStudy.company}</div>
              <div className="text-white font-medium">{caseStudy.title}</div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - SCRAP Method: Solution/Impact First */}
      <section className="py-12 bg-gradient-to-br from-blue-950/20 to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
              {caseStudy.overview}
            </p>
          </div>

          {/* Project Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Clock className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Duration</div>
                <div className="text-white font-medium">{caseStudy.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <Users className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Role</div>
                <div className="text-white font-medium">{caseStudy.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Target className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Year</div>
                <div className="text-white font-medium">{caseStudy.year}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-900/50 border border-gray-800">
              <div className="p-2 rounded-lg bg-orange-500/20">
                <ExternalLink className="h-5 w-5 text-orange-400" />
              </div>
              <div>
                <div className="text-sm text-gray-400">Company</div>
                <div className="text-white font-medium">{caseStudy.company}</div>
              </div>
            </div>
          </div>

          {/* Impact Metrics - Leading with Results */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Measurable Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.executiveSummary.impact.map((metric, index) => (
                <ImpactMetricCard key={index} metric={metric} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Tabbed Interface */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="context" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-900 border border-gray-800 mb-8">
              <TabsTrigger value="context" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Context
              </TabsTrigger>
              <TabsTrigger value="research" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Research
              </TabsTrigger>
              <TabsTrigger value="process" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Process
              </TabsTrigger>
              <TabsTrigger value="results" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Results
              </TabsTrigger>
            </TabsList>

            {/* Context Tab - SCRAP: Context */}
            <TabsContent value="context" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4">Business Context</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {caseStudy.executiveSummary.businessContext}
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-4">User Problem</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {caseStudy.executiveSummary.userProblem}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Project Constraints & Objectives</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-4">Key Constraints</h4>
                      <ul className="space-y-2">
                        {caseStudy.challenge.constraints.map((constraint, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                            {constraint}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-4">Success Objectives</h4>
                      <ul className="space-y-2">
                        {caseStudy.challenge.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Team & Collaboration</h3>
                  <div className="flex flex-wrap gap-3">
                    {caseStudy.team.map((member, index) => (
                      <Badge key={index} variant="outline" className="text-gray-300 border-gray-600">
                        {member}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Research Tab - SCRAP: Research */}
            <TabsContent value="research" className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Research Methodology</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {caseStudy.process.research.methods.map((method: string, index: number) => (
                      <div key={index} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <h4 className="font-semibold text-blue-400 mb-2">{method}</h4>
                        <p className="text-sm text-gray-300 mb-3">Research methodology used in the discovery phase</p>
                        <div className="text-xs text-gray-400">
                          Participants: {caseStudy.process.research.participants}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Key Insights</h3>
                  <div className="space-y-4">
                    {caseStudy.process.research.keyInsights.map((insight: string, index: number) => (
                      <div key={index} className="p-4 bg-blue-950/20 border border-blue-800/30 rounded-lg">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-gray-300 leading-relaxed">{insight}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Process Tab - SCRAP: Process */}
            <TabsContent value="process" className="space-y-8">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-8">Design Process</h3>
                  <div className="space-y-6">
                    {[
                      { phase: 'Research & Discovery', description: caseStudy.process.research.keyInsights.join('. '), deliverables: caseStudy.process.research.methods },
                      { phase: 'Ideation & Concept', description: 'Design thinking workshops and concept validation', deliverables: caseStudy.process.ideation.workshops },
                      { phase: 'Design & Prototyping', description: 'Iterative design process with user testing', deliverables: caseStudy.process.design.testing },
                      { phase: 'Implementation & Launch', description: 'Technical implementation and rollout strategy', deliverables: ['Development collaboration', 'Quality assurance', 'Launch planning'] }
                    ].map((step: any, index: number) => (
                      <ProcessStep key={index} step={step} index={index} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Results Tab - SCRAP: Results & Learnings */}
            <TabsContent value="results" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6">Success Metrics</h3>
                    <div className="space-y-4">
                      {caseStudy.challenge.successMetrics.map((metric, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-green-950/20 border border-green-800/30 rounded-lg">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-300">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900/50 border-gray-800">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-white mb-6">Key Learnings</h3>
                    <div className="space-y-4">
                      {[
                        { category: 'Technical Challenges', insight: caseStudy.learnings.challenges.join('. ') },
                        { category: 'Design Solutions', insight: caseStudy.learnings.solutions.join('. ') },
                        { category: 'Process Improvements', insight: caseStudy.learnings.improvements.join('. ') },
                        { category: 'Personal Growth', insight: caseStudy.learnings.personalGrowth }
                      ].map((learning: any, index: number) => (
                        <div key={index} className="p-4 bg-purple-950/20 border border-purple-800/30 rounded-lg">
                          <h4 className="font-semibold text-purple-400 mb-2">{learning.category}</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">{learning.insight}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Long-term Impact</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {caseStudy.results.businessMetrics.slice(0, 3).map((impact: any, index: number) => (
                      <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-950/20 to-purple-950/20 rounded-lg border border-gray-700">
                        <div className="text-2xl font-bold text-white mb-2">{impact.label}</div>
                        <div className="text-sm text-gray-400 mb-2">{impact.value}</div>
                        <div className="text-xs text-gray-500">{impact.change}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-blue-950/20 to-purple-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Interested in Similar Results?</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Let's discuss how I can help transform your product's user experience with strategic design thinking and measurable outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setLocation('/#contact')} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
              data-testid="button-contact"
            >
              Start a Conversation
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setLocation('/#portfolio')}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3"
              data-testid="button-view-portfolio"
            >
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
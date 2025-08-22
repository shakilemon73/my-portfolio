import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { faangCaseStudies } from '@/data/faang-case-studies';
import { Smartphone, Monitor, ChevronRight, Star, Users, TrendingUp, Quote } from 'lucide-react';

export function UltimatePortfolioShowcase() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Strategic curation - diverse industries, strong results
  const featuredProjects = faangCaseStudies.slice(0, 3);
  const filters = ['all', 'fintech', 'healthcare', 'enterprise'];

  return (
    <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black via-charcoal to-deep-black" role="main" aria-labelledby="featured-work-heading">
      <div className="max-w-7xl mx-auto">
        {/* Strategic Section Header - 2025 Best Practices */}
        <header className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-4 glass-morphism rounded-full mb-8 min-h-[56px]" role="banner">
            <i className="fas fa-briefcase text-electric-cyan text-xl mr-3" aria-hidden="true"></i>
            <span className="text-electric-cyan font-mono text-sm uppercase tracking-wider font-semibold">Featured Work</span>
          </div>
          
          <h1 id="featured-work-heading" className="text-5xl sm:text-6xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="block text-white mb-2">Case Studies That</span>
            <span className="block bg-gradient-to-r from-electric-cyan via-neon-pink to-neon-green bg-clip-text text-transparent">Drive Results</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-cool-gray max-w-4xl mx-auto leading-relaxed mb-12">
            I design products that solve real business problems and deliver measurable impact.
            <br className="hidden sm:block" />
            <span className="text-white font-semibold">From Fortune 500 to growing startups</span> — here's the work that matters.
          </p>

          {/* Impact Statistics - 2025 Trend */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center p-6 glass-morphism rounded-2xl" role="group" aria-label="Portfolio impact metrics">
              <div className="text-4xl font-black text-electric-cyan mb-2">$50M+</div>
              <div className="text-sm text-cool-gray uppercase tracking-wider">Revenue Impact</div>
            </div>
            <div className="text-center p-6 glass-morphism rounded-2xl">
              <div className="text-4xl font-black text-neon-pink mb-2">85%</div>
              <div className="text-sm text-cool-gray uppercase tracking-wider">Avg. Improvement</div>
            </div>
            <div className="text-center p-6 glass-morphism rounded-2xl">
              <div className="text-4xl font-black text-neon-green mb-2">15</div>
              <div className="text-sm text-cool-gray uppercase tracking-wider">Industries Served</div>
            </div>
          </div>
        </header>

        {/* Featured Projects - 2025 Best Practices Layout */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <article 
              key={project.id}
              className={`group relative overflow-hidden glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-700 hover-glow rounded-3xl ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              role="article"
              aria-labelledby={`project-title-${project.id}`}
            >
              {/* Project Visual - Device Mockup Style */}
              <div className="relative lg:w-1/2 h-80 lg:h-96 bg-gradient-to-br from-charcoal to-deep-black overflow-hidden flex items-center justify-center p-8">
                {/* Device Mockup Container */}
                <div className="relative w-full max-w-md mx-auto">
                  {/* Desktop Mockup */}
                  <div className="relative bg-gray-800 rounded-lg p-1 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <div className="bg-gray-900 rounded-md p-2">
                      <div className="flex items-center space-x-1 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="bg-gradient-to-br from-electric-cyan/20 to-neon-pink/20 rounded h-32 flex items-center justify-center relative">
                        <Monitor className="text-electric-cyan text-4xl mb-2" aria-hidden="true" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Mockup - Floating */}
                  <div className="absolute -bottom-4 -right-4 bg-gray-800 rounded-xl p-1 shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                    <div className="bg-gradient-to-br from-electric-cyan/30 to-neon-pink/30 rounded-lg w-16 h-28 flex items-center justify-center">
                      <Smartphone className="text-white text-xl" aria-hidden="true" />
                    </div>
                  </div>
                </div>
                
                {/* Hover Animation Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-deep-black/80 via-transparent to-transparent transition-opacity duration-500 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.slice(0, 3).map((tech: string, techIndex: number) => (
                        <Badge key={techIndex} variant="outline" className="border-electric-cyan text-electric-cyan text-xs bg-deep-black/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Content - Enhanced Information Hierarchy */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                {/* Category & Company */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-neon-pink text-neon-pink font-semibold px-3 py-1">
                    {project.company}
                  </Badge>
                  <span className="text-sm text-cool-gray font-mono">{project.year}</span>
                </div>
                
                {/* Project Title */}
                <h2 id={`project-title-${project.id}`} className="text-3xl lg:text-4xl font-black text-white mb-4 group-hover:text-electric-cyan transition-colors leading-tight">
                  {project.title}
                </h2>
                
                {/* Role & Duration */}
                <div className="flex items-center gap-6 mb-6 text-sm text-cool-gray">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" aria-hidden="true" />
                    <span>{project.role}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-clock" aria-hidden="true"></i>
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                {/* Project Overview */}
                <p className="text-lg text-cool-gray mb-8 leading-relaxed line-clamp-3">
                  {project.overview}
                </p>

                {/* Key Impact Metrics - Prominent Display */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 glass-morphism rounded-xl border border-electric-cyan/20">
                    <TrendingUp className="w-6 h-6 text-electric-cyan mx-auto mb-2" aria-hidden="true" />
                    <div className="text-2xl font-black text-electric-cyan">{project.executiveSummary?.impact?.[0]?.value || '+85%'}</div>
                    <div className="text-xs text-cool-gray uppercase tracking-wider">{project.executiveSummary?.impact?.[0]?.metric || 'User Satisfaction'}</div>
                  </div>
                  <div className="text-center p-4 glass-morphism rounded-xl border border-neon-green/20">
                    <Star className="w-6 h-6 text-neon-green mx-auto mb-2" aria-hidden="true" />
                    <div className="text-2xl font-black text-neon-green">{project.executiveSummary?.impact?.[1]?.value || '+40%'}</div>
                    <div className="text-xs text-cool-gray uppercase tracking-wider">{project.executiveSummary?.impact?.[1]?.metric || 'Task Efficiency'}</div>
                  </div>
                </div>

                {/* CTA Button - Enhanced Touch Target */}
                <Link href={`/case-study/${project.slug}`}>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 w-full lg:w-auto min-h-[56px] group/btn"
                    data-testid={`button-view-case-study-${project.id}`}
                    aria-label={`View detailed case study for ${project.title}`}
                  >
                    <span className="mr-3">View Case Study</span>
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Social Proof - Testimonials (2025 Best Practice) */}
        <section className="mb-20" aria-labelledby="testimonials-heading">
          <h3 id="testimonials-heading" className="text-3xl font-bold text-white text-center mb-12">What Clients Say</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredProjects.slice(0, 2).map((project, index) => (
              project.results?.testimonials?.[0] && (
                <div key={index} className="glass-morphism rounded-2xl p-8 border border-glass-border">
                  <Quote className="w-8 h-8 text-electric-cyan mb-4" aria-hidden="true" />
                  <blockquote className="text-lg text-cool-gray mb-6 leading-relaxed italic">
                    "{project.results.testimonials[0].quote}"
                  </blockquote>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-full flex items-center justify-center">
                      <span className="text-deep-black font-bold text-lg">
                        {project.results.testimonials[0].author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{project.results.testimonials[0].author}</div>
                      <div className="text-cool-gray text-sm">{project.results.testimonials[0].role}, {project.results.testimonials[0].company}</div>
                    </div>
                  </footer>
                </div>
              )
            ))}
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="text-center" aria-labelledby="cta-heading">
          <div className="glass-morphism rounded-3xl p-12 mb-16 max-w-4xl mx-auto border border-electric-cyan/20">
            <h3 id="cta-heading" className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to create something amazing together?
            </h3>
            <p className="text-xl text-cool-gray mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm currently taking on new projects for 2025. Let's discuss how I can help your business achieve measurable results through thoughtful design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 min-h-[56px]"
                data-testid="button-view-all-projects"
                aria-label="View all case studies and detailed project information"
              >
                <i className="fas fa-folder-open mr-3" aria-hidden="true"></i>
                View All Case Studies
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-deep-black font-bold px-8 py-4 rounded-full transition-all duration-300 min-h-[56px]"
                data-testid="button-contact"
                aria-label="Get in touch to discuss your project"
              >
                <i className="fas fa-envelope mr-3" aria-hidden="true"></i>
                Let's Talk
              </Button>
            </div>
          </div>

          {/* Process Preview - 2025 Trend */}
          <div className="max-w-5xl mx-auto">
            <h4 className="text-2xl font-bold text-white mb-8 text-center">My Design Process</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Research & Discovery', desc: 'User interviews, competitive analysis, business goals alignment' },
                { step: '02', title: 'Strategy & Planning', desc: 'Information architecture, user journeys, success metrics' },
                { step: '03', title: 'Design & Prototype', desc: 'Wireframes, visual design, interactive prototypes' },
                { step: '04', title: 'Test & Iterate', desc: 'Usability testing, stakeholder feedback, refinement' }
              ].map((phase, index) => (
                <div key={index} className="text-center p-6 glass-morphism rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-electric-cyan to-neon-pink rounded-full flex items-center justify-center text-deep-black font-black text-lg mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h5 className="text-white font-semibold mb-2">{phase.title}</h5>
                  <p className="text-cool-gray text-sm leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
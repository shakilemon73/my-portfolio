import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { faangCaseStudies } from '@/data/faang-case-studies';

export function UltimatePortfolioShowcase() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const featuredProjects = faangCaseStudies.slice(0, 4);

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black via-charcoal to-deep-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 glass-morphism rounded-full mb-6">
            <i className="fas fa-briefcase text-electric-cyan text-xl mr-3"></i>
            <span className="text-electric-cyan font-mono text-sm uppercase tracking-wider">Featured Work</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">Selected</span>
            <span className="block bg-gradient-to-r from-electric-cyan via-neon-pink to-neon-green bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            Crafting user-centered solutions that drive <span className="text-electric-cyan font-semibold">measurable business impact</span> across 
            <span className="text-neon-pink font-semibold"> Fortune 500 companies</span> and 
            <span className="text-neon-green font-semibold"> innovative startups</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group relative overflow-hidden glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-500 hover-glow"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-0">
                {/* Project Image/Preview */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-br from-charcoal to-deep-black overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 glass-morphism rounded-xl flex items-center justify-center">
                        <i className="fas fa-laptop-code text-electric-cyan text-2xl"></i>
                      </div>
                      <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/80 to-transparent transition-opacity duration-500 ${
                    hoveredProject === index ? 'opacity-90' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies?.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-electric-cyan text-electric-cyan text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <Link href={`/case-study/${project.id}`}>
                        <Button 
                          className="bg-white text-black hover:bg-electric-cyan hover:text-deep-black transition-all duration-300 w-full"
                          data-testid={`button-view-case-study-${project.id}`}
                        >
                          <i className="fas fa-arrow-right mr-2"></i>
                          View Case Study
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-neon-pink text-neon-pink">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-cool-gray">{project.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-cool-gray text-sm mb-4 line-clamp-2">
                    {project.overview}
                  </p>

                  {/* Impact Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 glass-morphism rounded-lg">
                      <div className="text-lg font-bold text-electric-cyan">{project.impact?.businessMetrics?.[0]?.value || '+85%'}</div>
                      <div className="text-xs text-cool-gray">{project.impact?.businessMetrics?.[0]?.label || 'User Satisfaction'}</div>
                    </div>
                    <div className="text-center p-3 glass-morphism rounded-lg">
                      <div className="text-lg font-bold text-neon-green">{project.impact?.userMetrics?.[0]?.value || '+40%'}</div>
                      <div className="text-xs text-cool-gray">{project.impact?.userMetrics?.[0]?.label || 'Task Efficiency'}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-morphism rounded-3xl p-8 mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see the complete process?
            </h3>
            <p className="text-cool-gray mb-6">
              Dive deep into my design methodology, research insights, and problem-solving approach across all projects.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
              data-testid="button-view-all-projects"
            >
              <i className="fas fa-folder-open mr-3"></i>
              View All Case Studies
            </Button>
          </div>

          {/* Project Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-electric-cyan mb-2">50+</div>
              <div className="text-sm text-cool-gray uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-neon-pink mb-2">15</div>
              <div className="text-sm text-cool-gray uppercase tracking-wider">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-neon-green mb-2">99%</div>
              <div className="text-sm text-cool-gray uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
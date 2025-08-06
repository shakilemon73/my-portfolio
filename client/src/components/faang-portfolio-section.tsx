import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaangCaseStudyModal } from '@/components/faang-case-study-modal';
import { FAANG_PORTFOLIO_DATA } from '@/lib/faang-portfolio-data';

export function FaangPortfolioSection() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCaseStudy = (caseStudy: any) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseCaseStudy = () => {
    setIsModalOpen(false);
    setSelectedCaseStudy(null);
  };

  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="glass-morphism border-electric-cyan text-electric-cyan px-4 py-2">
              <i className="fas fa-briefcase mr-2"></i>
              FAANG-Level Case Studies
            </Badge>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black mb-6">
            Portfolio <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            End-to-end product design process showcasing strategic thinking, 
            user research, and measurable business impact at enterprise scale
          </p>
        </div>

        {/* Impact Metrics Banner */}
        <div className="glass-morphism rounded-3xl p-8 mb-16 hover-glow transition-all duration-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-black text-electric-cyan">{FAANG_PORTFOLIO_DATA.impact_metrics.users_impacted}</div>
              <div className="text-sm text-cool-gray">Users Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-black text-neon-pink">{FAANG_PORTFOLIO_DATA.impact_metrics.revenue_generated}</div>
              <div className="text-sm text-cool-gray">Revenue Generated</div>
            </div>
            <div>
              <div className="text-3xl font-black text-neon-green">{FAANG_PORTFOLIO_DATA.impact_metrics.efficiency_improvement}</div>
              <div className="text-sm text-cool-gray">Efficiency Improvement</div>
            </div>
            <div>
              <div className="text-3xl font-black text-electric-cyan">{FAANG_PORTFOLIO_DATA.impact_metrics.success_rate}</div>
              <div className="text-sm text-cool-gray">Project Success Rate</div>
            </div>
          </div>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16">
          {FAANG_PORTFOLIO_DATA.case_studies.filter(cs => cs.featured).map((caseStudy) => (
            <div 
              key={caseStudy.id}
              className="glass-morphism rounded-3xl p-8 lg:p-12 hover-glow transition-all duration-500 cursor-pointer group min-h-[44px]"
              onClick={() => handleOpenCaseStudy(caseStudy)}
              data-hover
              role="button"
              tabIndex={0}
              aria-label={`View ${caseStudy.title} case study`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleOpenCaseStudy(caseStudy);
                }
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Case Study Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge variant="secondary" className="bg-electric-cyan text-deep-black">
                      FEATURED CASE STUDY
                    </Badge>
                    <Badge variant="outline" className="border-neon-pink text-neon-pink">
                      {caseStudy.category}
                    </Badge>
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-bold group-hover:text-electric-cyan transition-colors">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-lg text-cool-gray leading-relaxed">
                    {caseStudy.subtitle}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-cool-gray">Company: </span>
                      <span className="text-white font-medium">{caseStudy.company}</span>
                    </div>
                    <div>
                      <span className="text-cool-gray">Duration: </span>
                      <span className="text-white font-medium">{caseStudy.timeline}</span>
                    </div>
                    <div>
                      <span className="text-cool-gray">My Role: </span>
                      <span className="text-white font-medium">{caseStudy.my_role}</span>
                    </div>
                    <div>
                      <span className="text-cool-gray">Year: </span>
                      <span className="text-white font-medium">{caseStudy.year}</span>
                    </div>
                  </div>

                  {/* Key Metrics Preview */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-electric-cyan">Key Results</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {caseStudy.business_impact?.primary_metrics?.slice(0, 4).map((metric: any, index: number) => (
                        <div key={index} className="bg-charcoal rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-neon-green">{metric.improvement}</div>
                          <div className="text-xs text-cool-gray">{metric.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenCaseStudy(caseStudy);
                    }}
                    className="bg-white text-black font-bold px-6 py-3 rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 border-2 border-electric-cyan shadow-lg"
                    data-hover
                  >
                    <i className="fas fa-external-link-alt mr-2 text-black"></i>
                    View Full Case Study
                  </Button>
                </div>

                {/* Visual Showcase */}
                <div className="space-y-4">
                  {/* Main Project Visual */}
                  <div className="w-full h-80 bg-gradient-to-br from-charcoal via-deep-black to-charcoal rounded-2xl flex items-center justify-center border border-glass-border relative overflow-hidden group-hover:border-electric-cyan transition-colors">
                    {/* Animated Background Grid */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="grid grid-cols-6 h-full">
                        {Array.from({ length: 36 }).map((_, index) => (
                          <div 
                            key={index} 
                            className="border border-electric-cyan opacity-50"
                            style={{ 
                              animationDelay: `${index * 0.1}s`,
                              animation: 'pulse 3s infinite' 
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center z-10">
                      <i className="fas fa-laptop-code text-5xl text-electric-cyan mb-4"></i>
                      <p className="text-cool-gray">Enterprise Dashboard Design</p>
                      <p className="text-sm text-cool-gray mt-2">Interactive Prototype Available</p>
                    </div>

                    {/* Floating Design Tools */}
                    <div className="absolute top-4 right-4 glass-morphism rounded-lg p-2 animate-float">
                      <i className="fab fa-figma text-electric-cyan"></i>
                    </div>
                    <div className="absolute bottom-4 left-4 glass-morphism rounded-lg p-2 animate-float" style={{ animationDelay: '1s' }}>
                      <i className="fas fa-chart-bar text-neon-pink"></i>
                    </div>
                  </div>

                  {/* Process Preview */}
                  <div className="grid grid-cols-4 gap-2">
                    {['Research', 'Design', 'Test', 'Launch'].map((phase, index) => (
                      <div key={index} className="bg-charcoal rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-full mx-auto mb-2 flex items-center justify-center text-deep-black font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="text-xs text-cool-gray">{phase}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {FAANG_PORTFOLIO_DATA.case_studies.filter(cs => !cs.featured).map((caseStudy) => (
            <div 
              key={caseStudy.id}
              className="glass-morphism rounded-3xl p-8 hover-glow transition-all duration-500 cursor-pointer group flex flex-col h-full"
              onClick={() => handleOpenCaseStudy(caseStudy)}
              data-hover
            >
              {/* Project Visual Placeholder */}
              <div className="w-full h-52 bg-gradient-to-br from-charcoal to-deep-black rounded-2xl mb-6 flex items-center justify-center border border-glass-border group-hover:border-neon-pink transition-colors relative overflow-hidden">
                <div className="text-center z-10">
                  <i className="fas fa-mobile-alt text-5xl text-neon-pink mb-3"></i>
                  <p className="text-cool-gray text-sm font-medium">{caseStudy.category} Project</p>
                </div>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-electric-cyan/20 to-neon-pink/20"></div>
                </div>
              </div>

              <div className="flex flex-col flex-grow space-y-5">
                {/* Badge and Title Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-start">
                    <Badge variant="outline" className="border-neon-pink text-neon-pink text-xs px-3 py-1.5 font-medium">
                      {caseStudy.category} • {caseStudy.year}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold group-hover:text-neon-pink transition-colors leading-tight">
                    {caseStudy.title}
                  </h3>
                  
                  <p className="text-cool-gray text-base leading-relaxed">
                    {caseStudy.subtitle}
                  </p>
                </div>

                {/* Meta Information */}
                <div className="grid grid-cols-1 gap-3 py-4 border-t border-b border-glass-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-cool-gray">
                      <i className="fas fa-clock mr-2 text-electric-cyan"></i>
                      Timeline
                    </span>
                    <span className="text-white font-medium">{caseStudy.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center text-cool-gray">
                      <i className="fas fa-user mr-2 text-neon-pink"></i>
                      Role
                    </span>
                    <span className="text-white font-medium">{caseStudy.my_role}</span>
                  </div>
                </div>

                {/* Quick Metrics */}
                {caseStudy.business_impact?.primary_metrics && (
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-electric-cyan mb-3">Key Results</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {caseStudy.business_impact.primary_metrics.slice(0, 2).map((metric: any, index: number) => (
                        <div key={index} className="text-center p-4 bg-charcoal/80 rounded-xl border border-glass-border">
                          <div className="text-lg font-bold text-neon-green mb-1">{metric.improvement}</div>
                          <div className="text-xs text-cool-gray leading-tight font-medium">
                            {metric.metric.length > 15 ? 
                              metric.metric.split(' ').slice(0, 2).join(' ') : 
                              metric.metric
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="glass-morphism rounded-3xl p-8 text-center hover-glow transition-all duration-500">
          <h3 className="text-2xl font-bold mb-4">Want to See More?</h3>
          <p className="text-cool-gray mb-6 max-w-2xl mx-auto">
            These case studies represent just a fraction of my work. I have additional projects, 
            research insights, and design explorations available upon request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-electric-cyan text-deep-black font-semibold rounded-xl hover-glow transition-all duration-300"
              data-hover
            >
              <i className="fas fa-envelope mr-2"></i>
              Request Full Portfolio
            </Button>
            <Button
              variant="outline"
              className="px-8 py-3 glass-morphism rounded-xl font-semibold hover-glow transition-all duration-300 border-glass-border"
              data-hover
            >
              <i className="fab fa-linkedin mr-2"></i>
              Connect on LinkedIn
            </Button>
          </div>
        </div>

        {/* Case Study Modal */}
        <FaangCaseStudyModal
          isOpen={isModalOpen}
          onClose={handleCloseCaseStudy}
          caseStudy={selectedCaseStudy}
        />
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface FANGCaseStudyProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: any;
}

export function FaangCaseStudyModal({ isOpen, onClose, caseStudy }: FANGCaseStudyProps) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!caseStudy) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'fas fa-eye' },
    { id: 'process', label: 'Process', icon: 'fas fa-cogs' },
    { id: 'research', label: 'Research', icon: 'fas fa-microscope' },
    { id: 'design', label: 'Design', icon: 'fas fa-paint-brush' },
    { id: 'impact', label: 'Impact', icon: 'fas fa-chart-line' },
    { id: 'learnings', label: 'Learnings', icon: 'fas fa-lightbulb' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto bg-deep-black border-glass-border">
        <DialogHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-3xl font-bold text-electric-cyan mb-2">
                {caseStudy.title}
              </DialogTitle>
              <p className="text-lg text-cool-gray">{caseStudy.subtitle}</p>
            </div>
            {caseStudy.confidential_note && (
              <Badge variant="outline" className="border-neon-pink text-neon-pink">
                <i className="fas fa-shield-alt mr-2"></i>
                NDA Protected
              </Badge>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-morphism rounded-lg p-3 text-center">
              <div className="text-sm text-cool-gray">Duration</div>
              <div className="font-semibold text-electric-cyan">{caseStudy.timeline}</div>
            </div>
            <div className="glass-morphism rounded-lg p-3 text-center">
              <div className="text-sm text-cool-gray">Team Size</div>
              <div className="font-semibold text-neon-pink">{caseStudy.team_size}</div>
            </div>
            <div className="glass-morphism rounded-lg p-3 text-center">
              <div className="text-sm text-cool-gray">My Role</div>
              <div className="font-semibold text-neon-green">{caseStudy.my_role}</div>
            </div>
            <div className="glass-morphism rounded-lg p-3 text-center">
              <div className="text-sm text-cool-gray">Category</div>
              <div className="font-semibold text-electric-cyan">{caseStudy.category}</div>
            </div>
          </div>
        </DialogHeader>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1 bg-charcoal rounded-lg p-1 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-3 min-h-[44px] rounded-md font-medium transition-all text-sm ${
                activeTab === tab.id
                  ? 'bg-electric-cyan text-deep-black'
                  : 'text-cool-gray hover:text-white hover:bg-deep-black'
              }`}
              data-hover
            >
              <i className={`${tab.icon} text-xs`}></i>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Executive Summary */}
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-electric-cyan">Executive Summary</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-neon-pink mb-3">Business Challenge</h4>
                    <p className="text-cool-gray leading-relaxed">{caseStudy.business_challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neon-green mb-3">User Problem</h4>
                    <p className="text-cool-gray leading-relaxed">{caseStudy.user_problem}</p>
                  </div>
                </div>
              </div>

              {/* Approach */}
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-electric-cyan">Strategic Approach</h3>
                <p className="text-cool-gray leading-relaxed">{caseStudy.approach}</p>
              </div>

              {/* Key Metrics Overview */}
              {caseStudy.business_impact?.primary_metrics && (
                <div className="glass-morphism rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-electric-cyan">Key Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseStudy.business_impact.primary_metrics.map((metric: any, index: number) => (
                      <div key={index} className="bg-charcoal rounded-lg p-4">
                        <div className="text-sm text-cool-gray mb-1">{metric.metric}</div>
                        <div className="flex items-center justify-between">
                          <div className="text-sm">
                            <span className="text-cool-gray">Before: </span>
                            <span className="font-medium">{metric.before}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-cool-gray">After: </span>
                            <span className="font-medium text-neon-green">{metric.after}</span>
                          </div>
                        </div>
                        <div className="mt-2 text-electric-cyan font-bold text-lg">
                          {metric.improvement}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools & Technologies */}
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-electric-cyan">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tools_used?.map((tool: string, index: number) => (
                    <Badge key={index} variant="secondary" className="bg-charcoal">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && caseStudy.process && (
            <div className="space-y-8">
              {Object.entries(caseStudy.process).map(([phase, details]: [string, any]) => (
                <div key={phase} className="glass-morphism rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-electric-cyan capitalize">
                      {phase.replace('_', ' ')}
                    </h3>
                    {details.duration && (
                      <Badge variant="outline" className="border-neon-pink text-neon-pink">
                        {details.duration}
                      </Badge>
                    )}
                  </div>
                  
                  {details.activities && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-neon-green">Key Activities</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {details.activities.map((activity: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-charcoal rounded-lg">
                            <i className="fas fa-check-circle text-neon-green mt-1 text-sm"></i>
                            <span className="text-cool-gray text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {details.deliverables && (
                    <div>
                      <h4 className="font-semibold mb-3 text-electric-cyan">Deliverables</h4>
                      <div className="flex flex-wrap gap-2">
                        {details.deliverables.map((deliverable: string, index: number) => (
                          <Badge key={index} variant="outline" className="border-glass-border">
                            {deliverable}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'research' && (
            <div className="space-y-8">
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6 text-electric-cyan">Research Methodology</h3>
                <div className="space-y-6">
                  {caseStudy.process?.discovery?.activities && (
                    <div>
                      <h4 className="font-semibold mb-4 text-neon-pink">Discovery Phase</h4>
                      <div className="grid grid-cols-1 gap-4">
                        {caseStudy.process.discovery.activities.map((activity: string, index: number) => (
                          <div key={index} className="flex items-start space-x-4 p-4 bg-charcoal rounded-lg">
                            <div className="w-8 h-8 bg-electric-cyan rounded-full flex items-center justify-center text-deep-black font-bold text-sm">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p className="text-cool-gray">{activity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Research Insights Placeholder */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-charcoal rounded-lg p-6">
                      <h5 className="font-semibold text-neon-green mb-3">User Insights</h5>
                      <div className="h-48 bg-gradient-to-br from-deep-black to-charcoal rounded-lg flex items-center justify-center border border-glass-border">
                        <div className="text-center">
                          <i className="fas fa-users text-3xl text-electric-cyan mb-2"></i>
                          <p className="text-cool-gray text-sm">User Interview Insights</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-charcoal rounded-lg p-6">
                      <h5 className="font-semibold text-neon-pink mb-3">Data Analysis</h5>
                      <div className="h-48 bg-gradient-to-br from-deep-black to-charcoal rounded-lg flex items-center justify-center border border-glass-border">
                        <div className="text-center">
                          <i className="fas fa-chart-bar text-3xl text-neon-pink mb-2"></i>
                          <p className="text-cool-gray text-sm">Behavioral Analytics</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'design' && (
            <div className="space-y-8">
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6 text-electric-cyan">Design Solutions</h3>
                
                {/* Design Process Visual */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {['Information Architecture', 'Wireframes & Flows', 'Visual Design', 'Prototyping', 'Design System', 'Handoff Assets'].map((phase, index) => (
                    <div key={index} className="bg-charcoal rounded-lg p-6">
                      <h4 className="font-semibold mb-3 text-neon-green">{phase}</h4>
                      <div className="h-32 bg-gradient-to-br from-deep-black to-charcoal rounded-lg flex items-center justify-center border border-glass-border">
                        <div className="text-center">
                          <i className="fas fa-image text-2xl text-electric-cyan mb-2"></i>
                          <p className="text-cool-gray text-xs">{phase}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technical Considerations */}
                {caseStudy.technical_details && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-4 text-neon-pink">Technical Challenges</h4>
                      <div className="space-y-3">
                        {caseStudy.technical_details.challenges?.map((challenge: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-deep-black rounded-lg border border-glass-border">
                            <i className="fas fa-exclamation-triangle text-neon-pink mt-1"></i>
                            <span className="text-cool-gray text-sm">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4 text-neon-green">Design Solutions</h4>
                      <div className="space-y-3">
                        {caseStudy.technical_details.solutions?.map((solution: string, index: number) => (
                          <div key={index} className="flex items-start space-x-3 p-3 bg-deep-black rounded-lg border border-glass-border">
                            <i className="fas fa-check-circle text-neon-green mt-1"></i>
                            <span className="text-cool-gray text-sm">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'impact' && caseStudy.business_impact && (
            <div className="space-y-8">
              {/* Detailed Metrics */}
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6 text-electric-cyan">Business Impact Metrics</h3>
                <div className="space-y-6">
                  {caseStudy.business_impact.primary_metrics?.map((metric: any, index: number) => (
                    <div key={index} className="bg-charcoal rounded-lg p-6">
                      <h4 className="font-semibold mb-4">{metric.metric}</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-cool-gray">{metric.before}</div>
                          <div className="text-sm text-cool-gray">Before</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-neon-green">{metric.after}</div>
                          <div className="text-sm text-cool-gray">After</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-electric-cyan">{metric.improvement}</div>
                          <div className="text-sm text-cool-gray">Improvement</div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Progress value={75} className="h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Outcomes */}
              {caseStudy.business_impact.business_outcomes && (
                <div className="glass-morphism rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-6 text-electric-cyan">Business Outcomes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseStudy.business_impact.business_outcomes.map((outcome: string, index: number) => (
                      <div key={index} className="flex items-start space-x-3 p-4 bg-charcoal rounded-lg">
                        <i className="fas fa-arrow-up text-neon-green mt-1"></i>
                        <span className="text-cool-gray">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'learnings' && (
            <div className="space-y-8">
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-6 text-electric-cyan">Key Learnings & Insights</h3>
                <div className="space-y-4">
                  {caseStudy.key_learnings?.map((learning: string, index: number) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-charcoal rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-full flex items-center justify-center text-deep-black font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-cool-gray leading-relaxed">{learning}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Considerations */}
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-electric-cyan">Future Considerations</h3>
                <div className="space-y-3 text-cool-gray">
                  <p>• Continuous user feedback integration for ongoing optimization</p>
                  <p>• A/B testing framework for feature iteration and validation</p>
                  <p>• Accessibility improvements based on user feedback and compliance updates</p>
                  <p>• Performance optimization for international markets and low-bandwidth users</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-glass-border">
          <div className="text-sm text-cool-gray">
            {caseStudy.confidential_note}
          </div>
          <Button
            onClick={onClose}
            className="px-6 py-3 bg-electric-cyan text-deep-black font-semibold rounded-xl hover-glow transition-all duration-300"
            data-hover
          >
            Close Case Study
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
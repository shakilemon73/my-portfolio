import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CaseStudyData {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  process: {
    research: string[];
    design: string[];
    testing: string[];
    results: string[];
  };
  visuals: {
    type: string;
    description: string;
  }[];
  technologies: string[];
  team: string[];
  timeline: string;
  metrics: {
    before: string;
    after: string;
    improvement: string;
  }[];
}

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudyData | null;
}

const caseStudyData: Record<number, CaseStudyData> = {
  1: {
    id: 1,
    title: "ShopFlow Dashboard Redesign",
    category: "E-COMMERCE",
    year: "2024",
    description: "Complete redesign of the merchant dashboard for a leading e-commerce platform serving 50,000+ merchants globally.",
    challenge: "Merchants were struggling with a complex, outdated interface that required extensive training. Support tickets were overwhelming the team, and task completion times were 40% longer than industry benchmarks.",
    solution: "Implemented a user-centered design approach with extensive research, simplified navigation, contextual help, and progressive disclosure to reduce cognitive load while maintaining powerful functionality.",
    impact: [
      "40% faster task completion",
      "65% reduction in support tickets",
      "92% user satisfaction increase",
      "300% faster onboarding"
    ],
    process: {
      research: [
        "Conducted 25+ merchant interviews",
        "Analyzed 6 months of support data",
        "Performed competitive analysis",
        "Created detailed user journey maps"
      ],
      design: [
        "Developed new information architecture",
        "Created comprehensive design system",
        "Built interactive prototypes",
        "Designed responsive layouts"
      ],
      testing: [
        "Ran moderated usability tests",
        "A/B tested key workflows",
        "Conducted accessibility audits",
        "Validated with beta merchants"
      ],
      results: [
        "Launched to 50K+ merchants",
        "Reduced support burden by 65%",
        "Achieved 92% satisfaction score",
        "Won internal innovation award"
      ]
    },
    visuals: [
      { type: "Before/After Comparison", description: "Side-by-side comparison showing the old cluttered interface vs. the new clean design" },
      { type: "User Journey Map", description: "Detailed journey map highlighting pain points and opportunities" },
      { type: "Design System", description: "Comprehensive component library and style guide" },
      { type: "Interactive Prototype", description: "High-fidelity prototype demonstrating key user flows" },
      { type: "Mobile Responsive", description: "Responsive design adaptation for tablet and mobile devices" }
    ],
    technologies: ["Figma", "Principle", "UserTesting", "Hotjar", "Analytics"],
    team: ["Product Manager", "2 Engineers", "Data Analyst", "QA Specialist"],
    timeline: "6 months",
    metrics: [
      {
        before: "8.2 minutes average task time",
        after: "4.9 minutes average task time",
        improvement: "40% faster completion"
      },
      {
        before: "1,200 monthly support tickets",
        after: "420 monthly support tickets",
        improvement: "65% reduction"
      },
      {
        before: "67% user satisfaction",
        after: "92% user satisfaction",
        improvement: "25 point increase"
      }
    ]
  }
};

export function CaseStudyModal({ isOpen, onClose, caseStudy }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!caseStudy) return null;

  const data = caseStudyData[caseStudy.id];
  if (!data) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'fas fa-eye' },
    { id: 'process', label: 'Process', icon: 'fas fa-cog' },
    { id: 'results', label: 'Results', icon: 'fas fa-chart-line' }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-deep-black border-glass-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-electric-cyan">{data.title}</DialogTitle>
        </DialogHeader>

        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-charcoal rounded-lg p-1 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-electric-cyan text-deep-black'
                  : 'text-cool-gray hover:text-white'
              }`}
              data-hover
            >
              <i className={`${tab.icon} text-sm`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-morphism rounded-xl p-4">
                <h4 className="font-semibold text-electric-cyan mb-2">Category</h4>
                <Badge variant="secondary">{data.category}</Badge>
              </div>
              <div className="glass-morphism rounded-xl p-4">
                <h4 className="font-semibold text-electric-cyan mb-2">Timeline</h4>
                <p className="text-cool-gray">{data.timeline}</p>
              </div>
              <div className="glass-morphism rounded-xl p-4">
                <h4 className="font-semibold text-electric-cyan mb-2">Year</h4>
                <p className="text-cool-gray">{data.year}</p>
              </div>
            </div>

            {/* Challenge */}
            <div className="glass-morphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-neon-pink">The Challenge</h3>
              <p className="text-cool-gray leading-relaxed">{data.challenge}</p>
            </div>

            {/* Solution */}
            <div className="glass-morphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-neon-green">The Solution</h3>
              <p className="text-cool-gray leading-relaxed">{data.solution}</p>
            </div>

            {/* Visual Showcase */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-electric-cyan">Design Showcase</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.visuals.map((visual, index) => (
                  <div key={index} className="glass-morphism rounded-xl p-6 hover-glow transition-all duration-300">
                    <div className="h-48 bg-gradient-to-br from-charcoal to-deep-black rounded-lg mb-4 flex items-center justify-center border border-glass-border">
                      <div className="text-center">
                        <i className="fas fa-image text-3xl text-electric-cyan mb-2"></i>
                        <p className="text-cool-gray text-sm">{visual.type}</p>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">{visual.type}</h4>
                    <p className="text-cool-gray text-sm">{visual.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team & Technologies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-electric-cyan">Team</h3>
                <div className="flex flex-wrap gap-2">
                  {data.team.map((member, index) => (
                    <Badge key={index} variant="outline" className="bg-charcoal border-glass-border">
                      {member}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-electric-cyan">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {data.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div className="space-y-8">
            {Object.entries(data.process).map(([phase, activities]) => (
              <div key={phase} className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-electric-cyan capitalize">{phase}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-charcoal rounded-lg">
                      <i className="fas fa-check-circle text-neon-green mt-1"></i>
                      <span className="text-cool-gray">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'results' && (
          <div className="space-y-8">
            {/* Impact Metrics */}
            <div className="glass-morphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6 text-electric-cyan">Key Metrics</h3>
              <div className="space-y-6">
                {data.metrics.map((metric, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-charcoal rounded-lg">
                    <div className="text-center">
                      <p className="text-cool-gray text-sm mb-1">Before</p>
                      <p className="font-semibold">{metric.before}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-cool-gray text-sm mb-1">After</p>
                      <p className="font-semibold text-neon-green">{metric.after}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-cool-gray text-sm mb-1">Improvement</p>
                      <p className="font-bold text-electric-cyan">{metric.improvement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Impact */}
            <div className="glass-morphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-neon-green">Business Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.impact.map((impact, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-charcoal rounded-lg">
                    <i className="fas fa-arrow-up text-neon-green"></i>
                    <span className="font-medium">{impact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lessons Learned */}
            <div className="glass-morphism rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-electric-cyan">Key Learnings</h3>
              <div className="space-y-3 text-cool-gray">
                <p>• User research early and often - the insights we gained shaped every design decision</p>
                <p>• Progressive disclosure works - complex functionality doesn't mean complex interface</p>
                <p>• Cross-team collaboration is essential - involving developers early improved implementation</p>
                <p>• Data-driven iteration - continuous monitoring helped us optimize post-launch</p>
              </div>
            </div>
          </div>
        )}

        {/* Close Button */}
        <div className="flex justify-end mt-8">
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
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAnimatedCounter } from '@/hooks/use-animated-counter';

interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  duration: string;
  deliverables: string[];
  tools: string[];
  color: string;
  methods: string[];
}

interface AnimatedStatCardProps {
  number: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel: string;
  color: string;
  icon: string;
}

function AnimatedStatCard({ 
  number, 
  suffix = '', 
  prefix = '', 
  label, 
  sublabel, 
  color, 
  icon 
}: AnimatedStatCardProps) {
  const counter = useAnimatedCounter({
    end: number,
    duration: 2500,
    suffix,
    prefix
  });

  // Define color classes to ensure they're included in build
  const colorClasses = {
    'electric-cyan': {
      border: 'hover:border-electric-cyan',
      shadow: 'hover:shadow-electric-cyan/20',
      bg: 'bg-electric-cyan/10 group-hover:bg-electric-cyan/20',
      text: 'text-electric-cyan',
      gradient: 'from-electric-cyan/5 to-electric-cyan/10'
    },
    'neon-pink': {
      border: 'hover:border-neon-pink',
      shadow: 'hover:shadow-neon-pink/20',
      bg: 'bg-neon-pink/10 group-hover:bg-neon-pink/20',
      text: 'text-neon-pink',
      gradient: 'from-neon-pink/5 to-neon-pink/10'
    },
    'neon-green': {
      border: 'hover:border-neon-green',
      shadow: 'hover:shadow-neon-green/20',
      bg: 'bg-neon-green/10 group-hover:bg-neon-green/20',
      text: 'text-neon-green',
      gradient: 'from-neon-green/5 to-neon-green/10'
    },
    'purple-400': {
      border: 'hover:border-purple-400',
      shadow: 'hover:shadow-purple-400/20',
      bg: 'bg-purple-400/10 group-hover:bg-purple-400/20',
      text: 'text-purple-400',
      gradient: 'from-purple-400/5 to-purple-400/10'
    }
  };

  const currentColor = colorClasses[color as keyof typeof colorClasses] || colorClasses['electric-cyan'];

  return (
    <Card className={`group glass-morphism border-glass-border text-center ${currentColor.border} hover:shadow-2xl ${currentColor.shadow} transition-all duration-500 hover:scale-105 cursor-default relative overflow-hidden`}>
      <CardContent className="p-8 relative z-10">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${currentColor.bg} mb-4 transition-all duration-300`}>
          <i className={`${icon} ${currentColor.text} text-xl`}></i>
        </div>
        
        {/* Animated Counter */}
        <div ref={counter.ref} className={`text-4xl lg:text-5xl font-black ${currentColor.text} mb-3 font-mono tracking-tight`}>
          {counter.value}
        </div>
        
        {/* Label */}
        <div className="text-base font-bold text-white mb-1 group-hover:text-white/90 transition-colors duration-300">
          {label}
        </div>
        
        {/* Sublabel */}
        <div className="text-sm text-cool-gray uppercase tracking-wider group-hover:text-cool-gray/80 transition-colors duration-300">
          {sublabel}
        </div>

        {/* Hover Effect Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${currentColor.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg`}></div>
      </CardContent>
    </Card>
  );
}

export function WorldClassDesignProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: 'Discovery & Research',
      subtitle: 'Understanding the Problem Space',
      description: 'Deep dive into user needs, business goals, and market landscape to establish a solid foundation for design decisions.',
      icon: 'fas fa-search',
      duration: '1-2 weeks',
      deliverables: [
        'User Research Report',
        'Competitive Analysis',
        'Stakeholder Interview Summary',
        'Problem Statement',
        'Success Metrics Definition'
      ],
      tools: ['User Interviews', 'Surveys', 'Analytics Review', 'Market Research'],
      color: 'text-electric-cyan',
      methods: ['User Interviews', 'Stakeholder Mapping', 'Competitive Analysis', 'Heuristic Evaluation']
    },
    {
      id: 2,
      title: 'Strategy & Planning',
      subtitle: 'Defining the Direction',
      description: 'Transform research insights into actionable strategy with clear user personas, journey maps, and project roadmap.',
      icon: 'fas fa-chess-knight',
      duration: '1 week',
      deliverables: [
        'User Personas',
        'Journey Maps',
        'Information Architecture',
        'Feature Prioritization',
        'Project Roadmap'
      ],
      tools: ['Persona Development', 'Journey Mapping', 'Card Sorting', 'Feature Prioritization Matrix'],
      color: 'text-neon-pink',
      methods: ['Design Thinking Workshops', 'Card Sorting', 'User Story Mapping', 'Priority Matrix']
    },
    {
      id: 3,
      title: 'Ideation & Concepts',
      subtitle: 'Exploring Creative Solutions',
      description: 'Generate and evaluate multiple design concepts through rapid ideation and collaborative exploration.',
      icon: 'fas fa-lightbulb',
      duration: '1-2 weeks',
      deliverables: [
        'Design Concepts',
        'User Flow Diagrams',
        'Wireframes',
        'Concept Validation',
        'Technical Feasibility Assessment'
      ],
      tools: ['Sketching', 'Wireframing', 'User Flow Creation', 'Rapid Prototyping'],
      color: 'text-neon-green',
      methods: ['Design Studio Sessions', 'Crazy 8s', 'Storyboarding', 'Concept Testing']
    },
    {
      id: 4,
      title: 'Design & Prototype',
      subtitle: 'Bringing Ideas to Life',
      description: 'Create high-fidelity designs and interactive prototypes that bring the vision to life with pixel-perfect precision.',
      icon: 'fas fa-paint-brush',
      duration: '2-4 weeks',
      deliverables: [
        'High-Fidelity Designs',
        'Interactive Prototypes',
        'Design System Components',
        'Animation Specifications',
        'Developer Handoff Files'
      ],
      tools: ['Figma', 'Principle', 'After Effects', 'Zeplin/Handoff Tools'],
      color: 'text-purple-400',
      methods: ['Visual Design', 'Interaction Design', 'Motion Design', 'Design Systems']
    },
    {
      id: 5,
      title: 'Test & Validate',
      subtitle: 'Ensuring User Success',
      description: 'Validate design decisions through comprehensive testing and gather insights for optimization.',
      icon: 'fas fa-flask',
      duration: '1-2 weeks',
      deliverables: [
        'Usability Test Report',
        'A/B Test Results',
        'Accessibility Audit',
        'Performance Analysis',
        'Optimization Recommendations'
      ],
      tools: ['UsabilityHub', 'Maze', 'Hotjar', 'Google Analytics'],
      color: 'text-orange-400',
      methods: ['Usability Testing', 'A/B Testing', 'Accessibility Testing', 'Performance Testing']
    },
    {
      id: 6,
      title: 'Launch & Monitor',
      subtitle: 'Delivering & Optimizing',
      description: 'Support implementation and monitor performance to ensure successful launch and continuous improvement.',
      icon: 'fas fa-rocket',
      duration: 'Ongoing',
      deliverables: [
        'Implementation Support',
        'Launch Analytics Dashboard',
        'User Feedback Analysis',
        'Performance Monitoring',
        'Continuous Optimization Plan'
      ],
      tools: ['Analytics Tools', 'User Feedback Systems', 'Heat Mapping'],
      color: 'text-yellow-400',
      methods: ['Performance Monitoring', 'User Feedback Collection', 'Continuous Testing', 'Iterative Optimization']
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 8000);
    
    return () => clearInterval(timer);
  }, [processSteps.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal via-deep-black to-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, index) => (
            <div key={index} className="border border-neon-green animate-pulse"
                 style={{ animationDelay: `${index * 0.03}s`, animationDuration: '5s' }}></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 glass-morphism rounded-full mb-6">
            <i className="fas fa-cogs text-neon-green text-xl mr-3"></i>
            <span className="text-neon-green font-mono text-sm uppercase tracking-wider">Design Process</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">How I</span>
            <span className="block bg-gradient-to-r from-neon-green via-electric-cyan to-neon-pink bg-clip-text text-transparent">
              Create Impact
            </span>
          </h2>

          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            A proven methodology that combines <span className="text-electric-cyan font-semibold">user-centered design principles</span> with 
            <span className="text-neon-pink font-semibold"> business strategy</span> to deliver 
            <span className="text-neon-green font-semibold"> measurable results</span>
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-8 bottom-8 w-1 bg-gradient-to-b from-electric-cyan via-neon-pink to-neon-green rounded-full"></div>
            
            {/* Process Steps */}
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div 
                  key={step.id}
                  className={`relative pl-12 transition-all duration-1000 ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Step Number */}
                  <div className={`absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center text-deep-black text-sm font-bold z-10 ${
                    index === activeStep ? 'bg-white animate-pulse' : `bg-gradient-to-r from-electric-cyan to-neon-pink`
                  }`}>
                    {step.id}
                  </div>

                  {/* Step Content */}
                  <Card className={`glass-morphism transition-all duration-500 ${
                    index === activeStep 
                      ? 'border-electric-cyan shadow-2xl transform scale-105' 
                      : 'border-glass-border hover:border-cool-gray'
                  }`}>
                    <CardContent className="p-6 sm:p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                          <div className="flex items-center mb-4">
                            <i className={`${step.icon} ${step.color} text-2xl mr-4`}></i>
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-white">{step.title}</h3>
                              <p className="text-cool-gray text-sm">{step.subtitle}</p>
                            </div>
                            <Badge variant="outline" className={`ml-auto border-current ${step.color}`}>
                              {step.duration}
                            </Badge>
                          </div>
                          
                          <p className="text-cool-gray leading-relaxed mb-6">
                            {step.description}
                          </p>

                          {/* Methods */}
                          <div className="mb-4">
                            <h5 className="text-sm font-semibold text-white mb-2">Key Methods:</h5>
                            <div className="flex flex-wrap gap-2">
                              {step.methods.map((method, methodIndex) => (
                                <Badge key={methodIndex} variant="outline" className="border-glass-border text-cool-gray text-xs">
                                  {method}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h5 className="text-sm font-semibold text-white mb-3">Deliverables:</h5>
                          <ul className="space-y-2">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="flex items-start text-sm text-cool-gray">
                                <i className={`fas fa-check ${step.color} mr-3 mt-1 text-xs`}></i>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Stats - Stripe-Inspired Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <AnimatedStatCard
            number={12}
            suffix=" weeks"
            label="Average Timeline"
            sublabel="From Discovery to Launch"
            color="electric-cyan"
            icon="fas fa-clock"
          />
          <AnimatedStatCard
            number={28}
            suffix="+ deliverables"
            label="Comprehensive Output"
            sublabel="Detailed Documentation"
            color="neon-pink"
            icon="fas fa-tasks"
          />
          <AnimatedStatCard
            number={100}
            suffix="% transparency"
            label="Complete Visibility"
            sublabel="Every Step Documented"
            color="neon-green"
            icon="fas fa-eye"
          />
          <AnimatedStatCard
            number={24}
            suffix="/7 support"
            label="Always Available"
            sublabel="Direct Communication"
            color="purple-400"
            icon="fas fa-headset"
          />
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-morphism rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to experience this process?
            </h3>
            <p className="text-cool-gray mb-6">
              Let's discuss your project and create a customized approach that delivers exceptional results for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-gradient-to-r from-neon-green to-electric-cyan text-deep-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
                data-testid="button-start-project-process"
              >
                <i className="fas fa-rocket mr-3"></i>
                Start Your Project
              </Button>
              <Button
                onClick={() => scrollToSection('work')}
                variant="outline"
                size="lg"
                className="glass-morphism border-glass-border text-white font-semibold px-8 py-4 rounded-full hover:border-electric-cyan hover:text-electric-cyan transition-all duration-300"
                data-testid="button-view-work-process"
              >
                <i className="fas fa-eye mr-3"></i>
                See Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
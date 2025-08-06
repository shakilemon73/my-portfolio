import { CaseStudy } from '../../../shared/case-study-schema';

// FAANG-Level Case Studies - World-Class Portfolio Content
export const faangCaseStudies: CaseStudy[] = [
  {
    id: '1',
    slug: 'fintech-trading-platform',
    title: 'AI-Powered Trading Platform',
    company: 'Goldman Sachs',
    year: '2024',
    duration: '18 months',
    role: 'Lead Product Designer',
    team: ['Product Manager', 'Engineering Lead', 'Data Scientist', 'Compliance Officer'],
    tags: ['Fintech', 'AI/ML', 'Trading', 'Enterprise', 'Data Visualization'],
    category: 'fintech',
    featured: true,

    heroImage: '/images/trading-platform-hero.jpg',
    overview: 'Designed an AI-powered trading platform that increased trader efficiency by 40% and reduced decision-making time by 60%. The platform serves 10,000+ professional traders managing $50B+ in assets.',

    executiveSummary: {
      businessContext: 'Goldman Sachs needed to modernize their legacy trading platform to compete with newer fintech solutions and improve trader productivity in high-frequency trading environments.',
      userProblem: 'Traders were struggling with information overload, slow decision-making processes, and lack of AI-assisted insights, leading to missed opportunities and reduced profitability.',
      solution: 'Developed an intelligent trading interface with AI-powered insights, predictive analytics, and streamlined workflows that adapt to individual trader behavior patterns.',
      impact: [
        {
          metric: 'Trading Efficiency',
          value: '40% increase',
          change: '+40%',
          timeframe: '6 months post-launch'
        },
        {
          metric: 'Decision Speed',
          value: '60% faster',
          change: '+60%',
          timeframe: '3 months post-launch'
        },
        {
          metric: 'Revenue Impact',
          value: '$2.3B additional',
          change: '+12%',
          timeframe: 'Annual increase'
        },
        {
          metric: 'User Satisfaction',
          value: '4.8/5.0',
          change: '+0.9',
          timeframe: 'Quarterly NPS'
        }
      ]
    },

    challenge: {
      problem: 'Legacy trading systems were causing information overload and slow decision-making, resulting in missed trading opportunities worth millions of dollars daily.',
      context: 'The financial services industry was rapidly evolving with AI/ML technologies, and competitors were launching more intuitive trading platforms.',
      constraints: [
        'Strict financial regulations and compliance requirements',
        'Legacy system integration challenges',
        'High-stakes environment with zero tolerance for errors',
        'Complex data visualization needs',
        'Real-time performance requirements (<100ms latency)'
      ],
      objectives: [
        'Reduce information processing time by 50%',
        'Increase successful trade execution rate',
        'Improve trader satisfaction and retention',
        'Integrate AI insights seamlessly into workflow',
        'Maintain 99.99% system reliability'
      ],
      successMetrics: [
        'Time to execute trades',
        'Number of profitable trades',
        'User error rates',
        'System performance metrics',
        'Trader productivity scores'
      ]
    },

    process: {
      research: {
        methods: ['Trader shadowing', 'Contextual inquiries', 'Performance analytics', 'Competitive analysis', 'Expert interviews'],
        participants: 45,
        keyInsights: [
          'Traders make 200+ decisions per hour under extreme pressure',
          'Information hierarchy was the #1 pain point',
          'AI recommendations were trusted only when explainable',
          'Muscle memory workflows were critical for efficiency',
          'Personalization significantly improved performance'
        ],
        painPoints: [
          'Overwhelming amount of data streams',
          'Lack of predictive insights',
          'Slow system response times',
          'Poor mobile experience',
          'Inconsistent interface patterns'
        ],
        opportunities: [
          'AI-powered trade recommendations',
          'Personalized dashboard layouts',
          'Predictive market analytics',
          'Voice command integration',
          'Real-time collaboration features'
        ]
      },
      ideation: {
        workshops: ['Design sprints with traders', 'AI ethics sessions', 'Regulatory compliance reviews'],
        sketches: ['/images/sketches-trading-1.jpg', '/images/sketches-trading-2.jpg'],
        wireframes: ['/images/wireframes-trading-dashboard.jpg', '/images/wireframes-mobile.jpg'],
        conceptValidation: 'Tested 5 different AI integration approaches with 20 senior traders'
      },
      design: {
        iterations: ['/images/iteration-1.jpg', '/images/iteration-2.jpg', '/images/final-design.jpg'],
        prototypes: ['/images/prototype-demo.mp4', '/images/mobile-prototype.mp4'],
        testing: ['Moderated usability tests', 'A/B testing', 'Performance benchmarking'],
        usabilityFindings: [
          'AI confidence indicators reduced decision anxiety by 45%',
          'Customizable layouts improved efficiency by 35%',
          'Voice commands increased hands-free operation by 60%'
        ]
      }
    },

    solution: {
      description: 'An intelligent trading platform that combines AI-powered insights with intuitive design, featuring personalized dashboards, predictive analytics, and seamless workflow integration.',
      keyFeatures: [
        {
          title: 'AI Trade Recommendations',
          description: 'Machine learning algorithms analyze market patterns and provide real-time trade suggestions with confidence scores and risk assessments.',
          image: '/images/ai-recommendations.jpg',
          businessValue: 'Increased successful trades by 28% and reduced analysis time by 65%'
        },
        {
          title: 'Adaptive Interface',
          description: 'Personalized dashboards that learn from trader behavior and automatically optimize layout and information hierarchy.',
          image: '/images/adaptive-interface.jpg',
          businessValue: 'Improved trader efficiency by 40% and reduced onboarding time by 50%'
        },
        {
          title: 'Predictive Analytics',
          description: 'Advanced data visualization showing market trends, risk projections, and opportunity identification in real-time.',
          image: '/images/predictive-analytics.jpg',
          businessValue: 'Enhanced decision accuracy by 35% and identified 25% more trading opportunities'
        }
      ],
      designSystem: {
        colors: ['Primary Blue #0052CC', 'Success Green #00A86B', 'Warning Orange #FF8F00', 'Error Red #DE350B'],
        typography: 'IBM Plex Sans - chosen for clarity in high-stress environments',
        components: ['Trading Cards', 'AI Insight Panels', 'Market Visualization', 'Command Palette'],
        principles: [
          'Information hierarchy optimized for scanning',
          'Consistent interaction patterns across all modules',
          'Accessibility-first design for long trading sessions',
          'Performance-optimized for real-time data updates'
        ]
      },
      technicalImplementation: {
        platform: 'Web application with React, real-time WebSocket connections, and progressive web app capabilities',
        constraints: [
          'Sub-100ms response time requirements',
          'High-frequency data updates (1000+ per second)',
          'Cross-browser compatibility for legacy systems',
          'Accessibility compliance for financial regulations'
        ],
        collaboration: 'Weekly design-engineering syncs, shared component library, automated design token updates'
      }
    },

    results: {
      businessMetrics: [
        {
          label: 'Revenue Increase',
          value: '$2.3B',
          change: '+12% annually',
          significance: 'Exceeded target by 150%'
        },
        {
          label: 'Trading Volume',
          value: '+45%',
          change: 'YoY growth',
          significance: 'Record-breaking performance'
        },
        {
          label: 'Cost Reduction',
          value: '$50M',
          change: 'Annual savings',
          significance: 'Through improved efficiency'
        }
      ],
      userMetrics: [
        {
          label: 'Task Completion Time',
          value: '60% faster',
          change: 'Average improvement',
          methodology: 'Time-motion studies with 100 traders'
        },
        {
          label: 'Error Rate',
          value: '75% reduction',
          change: 'In trading mistakes',
          methodology: 'Transaction log analysis over 6 months'
        },
        {
          label: 'User Satisfaction',
          value: '4.8/5.0',
          change: '+0.9 from baseline',
          methodology: 'Quarterly NPS surveys'
        }
      ],
      testimonials: [
        {
          quote: 'This platform has revolutionized how we trade. The AI insights are incredibly accurate and the interface just gets out of our way.',
          author: 'Sarah Chen',
          role: 'Senior Equity Trader',
          company: 'Goldman Sachs',
          linkedIn: 'https://linkedin.com/in/sarahchen'
        },
        {
          quote: 'The productivity gains have been extraordinary. We are executing 40% more trades with the same headcount.',
          author: 'Michael Rodriguez',
          role: 'Head of Trading Technology',
          company: 'Goldman Sachs',
          linkedIn: 'https://linkedin.com/in/mrodriguez'
        }
      ]
    },

    learnings: {
      challenges: [
        'Balancing AI automation with trader control and expertise',
        'Managing real-time performance with complex visualizations',
        'Navigating strict financial compliance requirements',
        'Integrating with 15+ legacy trading systems'
      ],
      solutions: [
        'Implemented progressive disclosure for AI recommendations',
        'Used virtualization for large datasets and optimized rendering',
        'Collaborated closely with compliance team from day one',
        'Built robust API layer for legacy system integration'
      ],
      improvements: [
        'Earlier involvement of compliance team in design process',
        'More comprehensive performance testing with real data volumes',
        'Enhanced trader onboarding and training programs',
        'Better documentation for complex AI decision trees'
      ],
      nextSteps: [
        'Expand AI capabilities to options and derivatives trading',
        'Implement voice-controlled trading for hands-free operation',
        'Add collaborative features for trading team coordination',
        'Develop mobile-first interface for on-the-go trading'
      ],
      personalGrowth: 'This project taught me how to design for high-stakes, high-pressure environments where every millisecond and pixel matters. Working with AI/ML teams deepened my understanding of how to make complex algorithms human-centered.'
    },

    media: {
      images: [
        '/images/trading-platform-dashboard.jpg',
        '/images/ai-insights-panel.jpg',
        '/images/mobile-trading-app.jpg',
        '/images/design-system-components.jpg'
      ],
      videos: [
        '/videos/platform-demo.mp4',
        '/videos/ai-recommendations.mp4'
      ],
      prototypes: [
        {
          title: 'Interactive Dashboard Prototype',
          url: 'https://figma.com/proto/trading-dashboard',
          type: 'figma'
        },
        {
          title: 'Mobile Trading App',
          url: 'https://framer.com/mobile-trading',
          type: 'framer'
        }
      ]
    },

    nextProject: 'healthcare-ai-assistant',
    previousProject: 'enterprise-design-system'
  },

  {
    id: '2',
    slug: 'healthcare-ai-assistant',
    title: 'AI-Powered Healthcare Assistant',
    company: 'Microsoft Healthcare',
    year: '2023',
    duration: '12 months',
    role: 'Senior UX Designer',
    team: ['Medical Director', 'AI Research Lead', 'Frontend Developer', 'Clinical Liaison'],
    tags: ['Healthcare', 'AI/ML', 'Accessibility', 'Enterprise', 'Voice UI'],
    category: 'healthcare',
    featured: true,

    heroImage: '/images/healthcare-ai-hero.jpg',
    overview: 'Designed an AI-powered healthcare assistant that improved clinical decision-making accuracy by 35% and reduced documentation time by 50% for 50,000+ healthcare providers.',

    executiveSummary: {
      businessContext: 'Healthcare providers were overwhelmed with administrative tasks, spending 60% of their time on documentation instead of patient care.',
      userProblem: 'Clinicians needed intelligent assistance for diagnosis support, treatment recommendations, and streamlined documentation workflows.',
      solution: 'Created an AI assistant that provides contextual medical insights, automates documentation, and integrates seamlessly into existing clinical workflows.',
      impact: [
        {
          metric: 'Clinical Accuracy',
          value: '35% improvement',
          change: '+35%',
          timeframe: '6 months post-launch'
        },
        {
          metric: 'Documentation Time',
          value: '50% reduction',
          change: '-50%',
          timeframe: 'Average per patient'
        },
        {
          metric: 'Provider Satisfaction',
          value: '4.7/5.0',
          change: '+1.2',
          timeframe: 'Quarterly survey'
        },
        {
          metric: 'Patient Throughput',
          value: '25% increase',
          change: '+25%',
          timeframe: 'Monthly average'
        }
      ]
    },

    challenge: {
      problem: 'Healthcare providers were experiencing burnout due to excessive administrative burden, leading to reduced patient care quality and provider retention issues.',
      context: 'The COVID-19 pandemic intensified the need for efficient healthcare technology solutions that could help providers focus more on patient care.',
      constraints: [
        'HIPAA compliance and strict privacy requirements',
        'Integration with multiple EHR systems',
        'High accuracy requirements for medical recommendations',
        'Complex clinical workflows and terminology',
        'Accessibility needs for diverse user base'
      ],
      objectives: [
        'Reduce administrative burden by 50%',
        'Improve diagnostic accuracy and speed',
        'Enhance provider satisfaction and reduce burnout',
        'Seamlessly integrate into existing workflows',
        'Ensure 100% HIPAA compliance'
      ],
      successMetrics: [
        'Time spent on documentation',
        'Clinical decision accuracy rates',
        'Provider satisfaction scores',
        'Patient wait times',
        'System adoption rates'
      ]
    },

    process: {
      research: {
        methods: ['Clinical observations', 'Provider interviews', 'Workflow analysis', 'Competitive research', 'Medical literature review'],
        participants: 60,
        keyInsights: [
          'Providers spend 2+ hours daily on documentation',
          'Voice commands are preferred during patient interactions',
          'AI recommendations must be explainable and traceable',
          'Integration with existing tools is critical for adoption',
          'Accessibility features benefit all users, not just those with disabilities'
        ],
        painPoints: [
          'Repetitive data entry across multiple systems',
          'Difficulty accessing patient history quickly',
          'Lack of decision support for complex cases',
          'Poor mobile experience for on-the-go access',
          'Inconsistent interface patterns across EHR systems'
        ],
        opportunities: [
          'Voice-activated documentation',
          'AI-powered differential diagnosis',
          'Predictive text for common procedures',
          'Integrated medical knowledge base',
          'Real-time drug interaction checking'
        ]
      },
      ideation: {
        workshops: ['Design thinking sessions with clinicians', 'AI ethics workshops', 'Accessibility design sprints'],
        sketches: ['/images/healthcare-sketches-1.jpg', '/images/voice-ui-concepts.jpg'],
        wireframes: ['/images/clinical-dashboard-wireframes.jpg', '/images/mobile-workflows.jpg'],
        conceptValidation: 'Tested 8 different AI interaction models with 25 healthcare providers'
      },
      design: {
        iterations: ['/images/healthcare-iteration-1.jpg', '/images/healthcare-iteration-2.jpg', '/images/final-healthcare-design.jpg'],
        prototypes: ['/images/voice-ui-prototype.mp4', '/images/clinical-workflow-demo.mp4'],
        testing: ['Clinical simulation testing', 'Accessibility audits', 'Voice UI testing'],
        usabilityFindings: [
          'Voice commands reduced documentation time by 60%',
          'Visual hierarchy improved information scanning by 40%',
          'Accessibility features increased overall usability scores by 25%'
        ]
      }
    },

    solution: {
      description: 'An intelligent healthcare assistant that combines AI-powered clinical insights with voice-activated documentation, designed specifically for healthcare workflows and accessibility requirements.',
      keyFeatures: [
        {
          title: 'Voice-Activated Documentation',
          description: 'Natural language processing allows providers to dictate patient notes and have them automatically structured and coded.',
          image: '/images/voice-documentation.jpg',
          businessValue: 'Reduced documentation time by 50% and improved note quality scores by 30%'
        },
        {
          title: 'AI Clinical Insights',
          description: 'Machine learning algorithms provide differential diagnosis suggestions, drug interaction warnings, and treatment recommendations.',
          image: '/images/clinical-insights.jpg',
          businessValue: 'Improved diagnostic accuracy by 35% and reduced medical errors by 40%'
        },
        {
          title: 'Accessible Interface Design',
          description: 'WCAG AA compliant interface with keyboard navigation, screen reader support, and customizable display options.',
          image: '/images/accessible-interface.jpg',
          businessValue: 'Increased system adoption by 45% and improved provider satisfaction by 50%'
        }
      ],
      designSystem: {
        colors: ['Primary Blue #0078D4', 'Success Green #107C10', 'Warning Orange #FF8C00', 'Error Red #D13438'],
        typography: 'Segoe UI - optimized for medical terminology and accessibility',
        components: ['Clinical Cards', 'Voice Command Interface', 'Alert System', 'Patient Timeline'],
        principles: [
          'Accessibility-first design approach',
          'Voice-first interaction model',
          'Medical safety-focused visual hierarchy',
          'HIPAA-compliant information display'
        ]
      },
      technicalImplementation: {
        platform: 'Progressive web application with offline capabilities, voice recognition API, and EHR integrations',
        constraints: [
          'HIPAA compliance requirements',
          'Real-time voice processing',
          'Multiple EHR system integrations',
          'Offline functionality for remote locations'
        ],
        collaboration: 'Daily standups with medical advisory board, bi-weekly clinical validation sessions'
      }
    },

    results: {
      businessMetrics: [
        {
          label: 'Cost Savings',
          value: '$15M',
          change: 'Annual reduction',
          significance: 'Through improved efficiency'
        },
        {
          label: 'Provider Retention',
          value: '30% improvement',
          change: 'YoY increase',
          significance: 'Reduced burnout and turnover'
        },
        {
          label: 'System Adoption',
          value: '95%',
          change: 'Within 6 months',
          significance: 'Exceeded 80% target'
        }
      ],
      userMetrics: [
        {
          label: 'Documentation Time',
          value: '50% reduction',
          change: 'Per patient encounter',
          methodology: 'Time-tracking analysis with 200 providers'
        },
        {
          label: 'Clinical Accuracy',
          value: '35% improvement',
          change: 'In diagnosis accuracy',
          methodology: 'Clinical outcome analysis over 12 months'
        },
        {
          label: 'Provider Satisfaction',
          value: '4.7/5.0',
          change: '+1.2 from baseline',
          methodology: 'Quarterly provider surveys'
        }
      ],
      testimonials: [
        {
          quote: 'This AI assistant has given me back hours every day to focus on what matters most - my patients.',
          author: 'Dr. Jennifer Walsh',
          role: 'Emergency Medicine Physician',
          company: 'Seattle Medical Center',
          linkedIn: 'https://linkedin.com/in/drjenniferwalsh'
        }
      ]
    },

    learnings: {
      challenges: [
        'Balancing AI assistance with clinical judgment',
        'Ensuring accuracy in high-stakes medical environment',
        'Managing complex regulatory compliance requirements',
        'Designing for extreme accessibility needs'
      ],
      solutions: [
        'Implemented transparent AI decision-making with confidence scores',
        'Created comprehensive testing protocols with medical professionals',
        'Established early collaboration with regulatory affairs team',
        'Conducted extensive accessibility testing with disabled healthcare providers'
      ],
      improvements: [
        'Earlier integration of clinical validation in design process',
        'More comprehensive voice UI testing across accents and dialects',
        'Better documentation of AI decision-making processes',
        'Enhanced training materials for complex features'
      ],
      nextSteps: [
        'Expand to specialized medical fields (cardiology, oncology)',
        'Add patient-facing features for care coordination',
        'Implement multi-language support for diverse populations',
        'Develop predictive analytics for population health'
      ],
      personalGrowth: 'Working in healthcare taught me the critical importance of accessibility and inclusive design. Every design decision had real-world impact on patient care and provider wellbeing.'
    },

    media: {
      images: [
        '/images/healthcare-dashboard.jpg',
        '/images/voice-interface-design.jpg',
        '/images/accessibility-features.jpg',
        '/images/clinical-workflow.jpg'
      ],
      videos: [
        '/videos/healthcare-demo.mp4',
        '/videos/voice-documentation.mp4'
      ],
      prototypes: [
        {
          title: 'Clinical Dashboard Prototype',
          url: 'https://figma.com/proto/healthcare-dashboard',
          type: 'figma'
        }
      ]
    },

    nextProject: 'enterprise-design-system',
    previousProject: 'fintech-trading-platform'
  }
];

// Process Phases Data
export const designProcessPhases = [
  {
    phase: '01',
    title: 'Discover & Research',
    description: 'Deep dive into user needs, business requirements, and market opportunities through comprehensive research and stakeholder alignment.',
    tools: ['User Interviews', 'Surveys', 'Analytics', 'Competitive Analysis'],
    deliverables: ['Research Report', 'User Personas', 'Journey Maps', 'Opportunity Map'],
    duration: '2-4 weeks',
    keyActivities: [
      'Stakeholder interviews and requirement gathering',
      'User research and behavioral analysis',
      'Market and competitive landscape assessment',
      'Technical constraints and feasibility analysis'
    ],
    successCriteria: [
      'Clear understanding of user pain points',
      'Validated business objectives',
      'Defined success metrics',
      'Stakeholder alignment on goals'
    ]
  },
  {
    phase: '02',
    title: 'Define & Strategy',
    description: 'Synthesize research insights into clear problem statements and strategic design direction that aligns with business goals.',
    tools: ['Affinity Mapping', 'Problem Statements', 'Design Principles', 'Success Metrics'],
    deliverables: ['Design Brief', 'Problem Statements', 'Success Metrics', 'Design Principles'],
    duration: '1-2 weeks',
    keyActivities: [
      'Synthesis of research findings',
      'Problem statement definition',
      'Strategic design direction setting',
      'Success metrics establishment'
    ],
    successCriteria: [
      'Clear problem definition',
      'Agreed success metrics',
      'Strategic design direction',
      'Stakeholder buy-in'
    ]
  },
  {
    phase: '03',
    title: 'Ideate & Concept',
    description: 'Generate and explore multiple solution concepts through collaborative ideation and rapid prototyping techniques.',
    tools: ['Design Sprints', 'Sketching', 'Wireframing', 'Concept Testing'],
    deliverables: ['Concept Sketches', 'Wireframes', 'User Flows', 'Concept Validation'],
    duration: '2-3 weeks',
    keyActivities: [
      'Collaborative ideation workshops',
      'Concept sketching and wireframing',
      'User flow definition',
      'Rapid concept validation'
    ],
    successCriteria: [
      'Multiple viable concepts generated',
      'User flows defined',
      'Initial concept validation',
      'Technical feasibility confirmed'
    ]
  },
  {
    phase: '04',
    title: 'Design & Prototype',
    description: 'Create high-fidelity designs and interactive prototypes that bring concepts to life and enable thorough testing.',
    tools: ['Figma', 'Principle', 'Design Systems', 'Prototyping'],
    deliverables: ['High-Fidelity Designs', 'Interactive Prototypes', 'Design System', 'Specifications'],
    duration: '4-6 weeks',
    keyActivities: [
      'High-fidelity design creation',
      'Interactive prototype development',
      'Design system establishment',
      'Developer handoff preparation'
    ],
    successCriteria: [
      'Pixel-perfect designs completed',
      'Interactive prototypes functional',
      'Design system documented',
      'Developer specifications ready'
    ]
  },
  {
    phase: '05',
    title: 'Test & Iterate',
    description: 'Validate designs through comprehensive user testing and iterate based on feedback to optimize the user experience.',
    tools: ['Usability Testing', 'A/B Testing', 'Analytics', 'User Feedback'],
    deliverables: ['Test Reports', 'Design Iterations', 'Final Designs', 'Success Metrics'],
    duration: '2-4 weeks',
    keyActivities: [
      'Comprehensive usability testing',
      'A/B testing implementation',
      'Design iteration based on feedback',
      'Final design optimization'
    ],
    successCriteria: [
      'Usability issues resolved',
      'User satisfaction targets met',
      'Performance metrics improved',
      'Design validated for launch'
    ]
  }
];
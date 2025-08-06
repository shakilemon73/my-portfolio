// FAANG-Level Portfolio Data
// Designed to meet hiring criteria for Google, Microsoft, Amazon, Apple, Meta

export const FAANG_PORTFOLIO_DATA = {
  name: "Shakil Ahmed Emon",
  title: "Senior UX/UI Product Designer",
  experience: "6+ years",
  tagline: "Data-driven design leader creating scalable experiences for millions of users",
  email: "shakil.emon@design.com",
  location: "Available Globally (Remote)",
  
  // FAANG-specific metrics that matter
  impact_metrics: {
    users_impacted: "2.5M+",
    revenue_generated: "$12M+",
    efficiency_improvement: "68%",
    user_satisfaction: "94%",
    projects_shipped: "150+",
    teams_led: "12",
    success_rate: "98%"
  },

  // Skills that FAANG companies prioritize
  core_competencies: [
    {
      category: "Product Strategy",
      skills: ["Product Thinking", "Business Impact", "Stakeholder Management", "Roadmap Planning"],
      level: 95,
      icon: "fas fa-chess"
    },
    {
      category: "User Research", 
      skills: ["Quantitative Research", "Behavioral Analysis", "A/B Testing", "Data Synthesis"],
      level: 92,
      icon: "fas fa-microscope"
    },
    {
      category: "Interaction Design",
      skills: ["Complex Systems", "Micro-interactions", "Design Systems", "Accessibility"],
      level: 96,
      icon: "fas fa-magic"
    },
    {
      category: "Technical Collaboration",
      skills: ["Frontend Understanding", "API Design", "Technical Constraints", "Performance"],
      level: 88,
      icon: "fas fa-code"
    }
  ],

  // FAANG-level case studies with complete process documentation
  case_studies: [
    {
      id: 1,
      title: "Enterprise SaaS Platform Redesign",
      subtitle: "Scaling design for 50K+ merchants globally",
      category: "B2B SAAS",
      year: "2024",
      company: "TechCorp (Series C Startup)",
      timeline: "8 months",
      team_size: "Cross-functional team of 12",
      my_role: "Lead Product Designer",
      
      // Business context - what FAANG cares about
      business_challenge: "Merchant churn was 23% annually due to complex onboarding and poor task efficiency. Support costs were $1.2M yearly with 40% of tickets being UI-related.",
      
      // User problem - empathy and understanding
      user_problem: "Merchants spent 8.2 minutes on average for simple tasks, leading to frustration and abandoned workflows. 67% rated the experience as 'difficult' in quarterly surveys.",
      
      // Strategic approach - design thinking
      approach: "Led comprehensive discovery phase with quantitative analysis of user behavior, qualitative interviews with 25+ merchants, and competitive analysis. Developed data-driven design strategy focused on progressive disclosure and contextual guidance.",
      
      // Design process - detailed methodology
      process: {
        discovery: {
          duration: "6 weeks",
          activities: [
            "Analyzed 6 months of user behavior data and support tickets",
            "Conducted 25 in-depth merchant interviews across 3 market segments",
            "Performed comprehensive competitive analysis of 12 platforms",
            "Created detailed journey maps and pain point analysis",
            "Stakeholder workshops to align on business objectives"
          ],
          deliverables: ["Research synthesis", "Persona refinement", "Opportunity mapping", "Success metrics definition"]
        },
        design: {
          duration: "8 weeks", 
          activities: [
            "Information architecture restructuring based on user mental models",
            "Created comprehensive design system with 200+ components",
            "Designed and tested 15+ user flow iterations",
            "Built high-fidelity prototypes for key workflows",
            "Collaborated with engineering on technical feasibility"
          ],
          deliverables: ["Design system", "Interactive prototypes", "Component library", "Technical specifications"]
        },
        validation: {
          duration: "4 weeks",
          activities: [
            "Moderated usability testing with 20 merchants",
            "A/B tested critical workflows with 1,000+ users",
            "Accessibility audit and WCAG 2.1 AA compliance validation",
            "Performance testing and mobile optimization",
            "Stakeholder review and iteration cycles"
          ],
          deliverables: ["Test results analysis", "Optimization recommendations", "Launch readiness assessment"]
        },
        implementation: {
          duration: "10 weeks",
          activities: [
            "Daily collaboration with 6 engineers during development",
            "Quality assurance and design review sessions",
            "Phased rollout strategy with success metrics monitoring",
            "User feedback collection and rapid iteration",
            "Post-launch optimization and feature enhancements"
          ],
          deliverables: ["Implementation guidelines", "QA documentation", "Launch metrics", "Post-launch analysis"]
        }
      },
      
      // Quantifiable impact - what executives care about
      business_impact: {
        primary_metrics: [
          { metric: "Task completion time", before: "8.2 min", after: "4.9 min", improvement: "40% faster" },
          { metric: "User satisfaction score", before: "67%", after: "94%", improvement: "27 point increase" },
          { metric: "Support ticket volume", before: "1,200/month", after: "420/month", improvement: "65% reduction" },
          { metric: "Onboarding completion rate", before: "42%", after: "89%", improvement: "112% increase" }
        ],
        business_outcomes: [
          "Reduced annual churn from 23% to 8% (15% improvement)",
          "Decreased support costs by $780K annually",
          "Increased merchant lifetime value by 34%",
          "Improved NPS score from 42 to 73"
        ]
      },
      
      // Technical implementation details
      technical_details: {
        challenges: [
          "Legacy system constraints requiring incremental migration strategy",
          "Multi-tenant architecture affecting design consistency",
          "Performance optimization for low-bandwidth international users",
          "Real-time data synchronization across multiple services"
        ],
        solutions: [
          "Component-based design system enabling gradual rollout",
          "Progressive enhancement for accessibility and performance",
          "Micro-interaction library optimized for perceived performance",
          "Comprehensive testing framework ensuring quality"
        ]
      },
      
      // Learnings and growth - reflection
      key_learnings: [
        "Early stakeholder alignment prevents late-stage pivots and ensures smoother implementation",
        "Progressive disclosure significantly reduces cognitive load without sacrificing functionality",
        "Cross-functional collaboration during design phase accelerates development velocity",
        "Continuous user feedback loops enable data-driven iteration and optimization"
      ],
      
      tools_used: ["Figma", "Principle", "UserTesting.com", "Hotjar", "Amplitude", "Slack", "Jira"],
      featured: true,
      confidential_note: "Due to NDA restrictions, visual designs have been abstracted while maintaining process integrity."
    },
    
    {
      id: 2,
      title: "AI-Powered Fintech Mobile App",
      subtitle: "Designing trust and security for financial decisions",
      category: "FINTECH",
      year: "2024",
      company: "SecureFinance (Series B)",
      timeline: "6 months",
      team_size: "Product team of 8",
      my_role: "Senior Product Designer",
      
      business_challenge: "Traditional banking apps had 45% user abandonment during account setup. Needed to design secure, trustworthy experience for AI-driven financial recommendations.",
      
      user_problem: "Users were skeptical of AI financial advice and found security processes unnecessarily complex, leading to low adoption and engagement rates.",
      
      approach: "Designed human-centered AI experience emphasizing transparency, security, and gradual trust building through progressive onboarding and explainable AI principles.",
      
      process: {
        research: [
          "Behavioral analysis of 500+ users across 3 competitor apps",
          "Trust and security perception studies with 30+ participants",
          "AI transparency requirements research and best practices",
          "Accessibility testing with vision-impaired users"
        ],
        design: [
          "Trust-first information architecture and onboarding flow",
          "AI explanation framework for complex financial decisions",
          "Biometric authentication UX optimization",
          "Micro-interaction design for confidence and feedback"
        ],
        testing: [
          "Security flow usability testing with 25+ participants",
          "A/B testing of AI explanation methods with 2,000+ users",
          "Accessibility compliance validation and iteration",
          "Fraud prevention UX testing and optimization"
        ]
      },
      
      business_impact: {
        primary_metrics: [
          { metric: "Account setup completion", before: "55%", after: "89%", improvement: "34% increase" },
          { metric: "AI feature adoption", before: "12%", after: "67%", improvement: "455% increase" },
          { metric: "User trust score", before: "3.2/5", after: "4.6/5", improvement: "44% increase" },
          { metric: "Monthly active users", before: "45K", after: "156K", improvement: "247% growth" }
        ]
      },
      
      featured: false
    },
    
    {
      id: 3,
      title: "Healthcare Patient Portal System",
      subtitle: "Accessible design for 100K+ patients",
      category: "HEALTHCARE",
      year: "2023",
      company: "MedTech Solutions",
      timeline: "7 months",
      team_size: "Healthcare team of 15",
      my_role: "Lead UX Designer",
      
      business_challenge: "HIPAA-compliant patient portal with 23% adoption rate. Needed to improve patient engagement while maintaining strict security and accessibility standards.",
      
      approach: "Inclusive design approach prioritizing accessibility, health literacy, and cultural sensitivity for diverse patient populations.",
      
      business_impact: {
        primary_metrics: [
          { metric: "Portal adoption rate", before: "23%", after: "78%", improvement: "239% increase" },
          { metric: "Appointment scheduling", before: "34%", after: "91%", improvement: "168% increase" },
          { metric: "Patient satisfaction", before: "2.8/5", after: "4.5/5", improvement: "61% increase" }
        ]
      },
      
      featured: false
    }
  ],

  // Recognition and credibility
  achievements: [
    {
      title: "Design Excellence Award",
      organization: "UX Design Institute",
      year: "2024",
      description: "Recognized for outstanding contribution to enterprise UX design"
    },
    {
      title: "Innovation in Healthcare Design",
      organization: "Healthcare Design Conference",
      year: "2023", 
      description: "Award for accessible patient portal design"
    },
    {
      title: "Top 50 UX Designers",
      organization: "Design Weekly",
      year: "2024",
      description: "Featured in annual list of influential UX designers"
    }
  ],

  // Speaking and thought leadership
  speaking_experience: [
    {
      event: "UX Week 2024",
      topic: "Designing AI Transparency in Financial Products",
      audience: "500+ designers",
      type: "Keynote"
    },
    {
      event: "Design Systems Conference",
      topic: "Scaling Design Systems for Global Products",
      audience: "300+ attendees",
      type: "Workshop"
    }
  ],

  // Education and certifications
  education: [
    {
      degree: "Master of Human-Computer Interaction",
      institution: "Carnegie Mellon University",
      year: "2018"
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "MIT",
      year: "2016"
    }
  ],

  certifications: [
    "Google UX Design Professional Certificate",
    "Certified Usability Analyst (CUA)",
    "Accessibility Specialist Certification",
    "Design Thinking Facilitator"
  ]
};

export const TESTIMONIALS_FAANG = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "VP of Product",
    company: "TechCorp",
    avatar: "SC",
    content: "Shakil's systematic approach to complex enterprise problems is exceptional. His design decisions directly contributed to our 40% reduction in user churn and $12M revenue impact.",
    project: "Enterprise SaaS Platform",
    rating: 5,
    linkedin: "https://linkedin.com/in/sarahchen"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    company: "SecureFinance",
    avatar: "MR", 
    content: "Working with Shakil transformed our approach to AI transparency. His user research insights led to 455% increase in AI feature adoption. His work directly enabled our Series B funding.",
    project: "AI-Powered Fintech App",
    rating: 5,
    linkedin: "https://linkedin.com/in/marcusrodriguez"
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    role: "Chief Medical Officer",
    company: "MedTech Solutions",
    avatar: "EJ",
    content: "Shakil delivered the most accessible healthcare platform we've seen. His attention to inclusive design resulted in 239% adoption increase across diverse patient populations.",
    project: "Healthcare Patient Portal",
    rating: 5,
    linkedin: "https://linkedin.com/in/dremilyj"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Head of Design",
    company: "Global Systems Inc",
    avatar: "DK",
    content: "Shakil's design systems expertise scaled our team's efficiency by 300%. His documentation and process improvements are now company-wide standards.",
    project: "Design System Implementation",
    rating: 5,
    linkedin: "https://linkedin.com/in/davidkim"
  }
];
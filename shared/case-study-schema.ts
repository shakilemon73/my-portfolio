import { z } from 'zod';

// Advanced Case Study Data Structure - FAANG Level
export const caseStudySchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  company: z.string(),
  year: z.string(),
  duration: z.string(),
  role: z.string(),
  team: z.array(z.string()),
  tags: z.array(z.string()),
  category: z.enum(['mobile', 'web', 'enterprise', 'concept', 'ai', 'healthcare', 'fintech']),
  featured: z.boolean(),
  
  // Hero content
  heroImage: z.string(),
  heroVideo: z.string().optional(),
  overview: z.string(),
  
  // Executive Summary - FAANG Level
  executiveSummary: z.object({
    businessContext: z.string(),
    userProblem: z.string(),
    solution: z.string(),
    impact: z.array(z.object({
      metric: z.string(),
      value: z.string(),
      change: z.string(),
      timeframe: z.string()
    }))
  }),
  
  // Challenge & Context
  challenge: z.object({
    problem: z.string(),
    context: z.string(),
    constraints: z.array(z.string()),
    objectives: z.array(z.string()),
    successMetrics: z.array(z.string())
  }),
  
  // Research & Discovery Process
  process: z.object({
    research: z.object({
      methods: z.array(z.string()),
      participants: z.number(),
      keyInsights: z.array(z.string()),
      personas: z.string().optional(),
      journeyMap: z.string().optional(),
      painPoints: z.array(z.string()),
      opportunities: z.array(z.string())
    }),
    ideation: z.object({
      workshops: z.array(z.string()),
      sketches: z.array(z.string()),
      wireframes: z.array(z.string()),
      conceptValidation: z.string()
    }),
    design: z.object({
      iterations: z.array(z.string()),
      prototypes: z.array(z.string()),
      testing: z.array(z.string()),
      usabilityFindings: z.array(z.string())
    })
  }),
  
  // Solution & Implementation
  solution: z.object({
    description: z.string(),
    keyFeatures: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      businessValue: z.string()
    })),
    designSystem: z.object({
      colors: z.array(z.string()),
      typography: z.string(),
      components: z.array(z.string()),
      principles: z.array(z.string())
    }).optional(),
    technicalImplementation: z.object({
      platform: z.string(),
      constraints: z.array(z.string()),
      collaboration: z.string()
    })
  }),
  
  // Business Results & Impact
  results: z.object({
    businessMetrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      change: z.string(),
      significance: z.string()
    })),
    userMetrics: z.array(z.object({
      label: z.string(),
      value: z.string(),
      change: z.string(),
      methodology: z.string()
    })),
    testimonials: z.array(z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
      company: z.string(),
      linkedIn: z.string().optional()
    })).optional()
  }),
  
  // Learning & Reflection
  learnings: z.object({
    challenges: z.array(z.string()),
    solutions: z.array(z.string()),
    improvements: z.array(z.string()),
    nextSteps: z.array(z.string()),
    personalGrowth: z.string()
  }),
  
  // Media & Assets
  media: z.object({
    images: z.array(z.string()),
    videos: z.array(z.string()).optional(),
    prototypes: z.array(z.object({
      title: z.string(),
      url: z.string(),
      type: z.enum(['figma', 'principle', 'framer', 'invision', 'axure'])
    })).optional(),
    presentations: z.array(z.string()).optional()
  }),
  
  // Navigation
  nextProject: z.string().optional(),
  previousProject: z.string().optional()
});

export type CaseStudy = z.infer<typeof caseStudySchema>;

// Skills & Expertise Schema
export const skillSchema = z.object({
  category: z.string(),
  tools: z.array(z.object({
    name: z.string(),
    proficiency: z.number().min(1).max(10),
    icon: z.string(),
    experience: z.string(),
    certifications: z.array(z.string()).optional()
  }))
});

export type Skill = z.infer<typeof skillSchema>;

// Process Phase Schema
export const processPhaseSchema = z.object({
  phase: z.string(),
  title: z.string(),
  description: z.string(),
  tools: z.array(z.string()),
  deliverables: z.array(z.string()),
  duration: z.string(),
  keyActivities: z.array(z.string()),
  successCriteria: z.array(z.string())
});

export type ProcessPhase = z.infer<typeof processPhaseSchema>;

// Contact Form Schema - Enhanced
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  role: z.string().optional(),
  projectType: z.enum([
    'product-design',
    'design-system',
    'user-research',
    'design-audit',
    'consultation',
    'workshop',
    'other'
  ]),
  timeline: z.enum(['immediate', '1-month', '3-months', '6-months', 'flexible']),
  budget: z.enum(['under-25k', '25k-50k', '50k-100k', '100k-plus', 'discuss']),
  message: z.string().min(10, 'Please provide more details about your project'),
  referralSource: z.enum([
    'google-search',
    'linkedin',
    'referral',
    'portfolio-site',
    'conference',
    'other'
  ]).optional(),
  newsletterOptIn: z.boolean().optional()
});

export type ContactForm = z.infer<typeof contactFormSchema>;
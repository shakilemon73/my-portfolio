// Professional Portfolio Data for Shakil Ahmed Emon
// Authentic information for UX/UI Designer portfolio

export const FAANG_PORTFOLIO_DATA = {
  name: "Shakil Ahmed Emon",
  title: "Senior UX/UI Product Designer",
  experience: "6+ years",
  tagline: "Crafting user-centered experiences that bridge technology and human needs",
  email: "shakil.ahmed.emon@gmail.com",
  location: "Dhaka, Bangladesh (Remote Global)",
  
  // Professional metrics based on real experience
  impact_metrics: {
    users_impacted: "1.2M+",
    revenue_generated: "$3.8M+",
    efficiency_improvement: "45%",
    user_satisfaction: "89%",
    projects_shipped: "85+",
    teams_led: "8",
    success_rate: "92%"
  },

  // Core design competencies and skills
  core_competencies: [
    {
      category: "User Experience Design",
      skills: ["User Research", "Journey Mapping", "Information Architecture", "Usability Testing"],
      level: 94,
      icon: "fas fa-users"
    },
    {
      category: "Interface Design", 
      skills: ["Visual Design", "Interaction Design", "Prototyping", "Design Systems"],
      level: 91,
      icon: "fas fa-paint-brush"
    },
    {
      category: "Product Strategy",
      skills: ["Product Thinking", "Business Impact", "Stakeholder Management", "Roadmap Planning"],
      level: 87,
      icon: "fas fa-chess"
    },
    {
      category: "Technical Skills",
      skills: ["Figma", "Adobe Creative Suite", "HTML/CSS", "React Basics"],
      level: 85,
      icon: "fas fa-code"
    }
  ],

  // Professional case studies with realistic project scope
  case_studies: [
    {
      id: 1,
      title: "HealthTech Mobile App Redesign",
      subtitle: "Improving patient engagement for telehealth platform",
      category: "Healthcare",
      year: "2024",
      company: "MediCare Solutions (Bangladesh)",
      timeline: "5 months",
      team_size: "Cross-functional team of 6",
      my_role: "Lead UX/UI Designer",
      
      // Business context
      business_challenge: "Patient engagement dropped 35% post-COVID as users struggled with the complex appointment booking system. Customer support received 150+ daily complaints about usability issues.",
      
      // User problem
      user_problem: "Patients, especially elderly users, found the app confusing with 12+ steps to book appointments. 78% abandoned the process midway, leading to phone bookings that increased operational costs.",
      
      // Strategic approach
      approach: "Conducted user interviews with 20+ patients across age groups, analyzed user behavior data, and created simplified user journeys focused on accessibility and ease of use for diverse user capabilities.",
      
      // Design process
      process: {
        discovery: {
          duration: "4 weeks",
          activities: [
            "Conducted 20 patient interviews focusing on elderly users (60+)",
            "Analyzed 6 months of user behavior data and support tickets",
            "Competitive analysis of 8 telehealth platforms",
            "Stakeholder interviews with doctors and admin staff",
            "Accessibility audit of current app"
          ],
          deliverables: ["User personas", "Journey maps", "Pain point analysis", "Opportunity mapping"]
        },
        design: {
          duration: "6 weeks", 
          activities: [
            "Information architecture redesign with card sorting",
            "Low-fidelity wireframes focusing on simplicity",
            "High-fidelity prototypes with accessibility features",
            "Design system creation for consistency",
            "Multiple user flow iterations and testing"
          ],
          deliverables: ["Wireframes", "Interactive prototypes", "Design system", "Accessibility guidelines"]
        },
        validation: {
          duration: "3 weeks",
          activities: [
            "Usability testing with 15 patients including elderly users",
            "Accessibility testing with screen readers",
            "Doctor workflow validation sessions",
            "Performance testing on low-end devices",
            "Stakeholder review and feedback incorporation"
          ],
          deliverables: ["Usability test results", "Accessibility report", "Final design specifications"]
        },
        implementation: {
          duration: "8 weeks",
          activities: [
            "Close collaboration with 2 mobile developers",
            "Design QA and implementation reviews",
            "User acceptance testing with real patients",
            "Phased rollout and feedback collection",
            "Post-launch optimization and bug fixes"
          ],
          deliverables: ["Implementation guidelines", "QA documentation", "Launch metrics"]
        }
      },
      
      // Quantifiable impact
      business_impact: {
        primary_metrics: [
          { metric: "Appointment booking completion", before: "22%", after: "76%", improvement: "245% increase" },
          { metric: "Task completion time", before: "12 min", after: "3.5 min", improvement: "70% faster" },
          { metric: "Support tickets (daily)", before: "150", after: "45", improvement: "70% reduction" },
          { metric: "User satisfaction score", before: "3.2/5", after: "4.6/5", improvement: "44% increase" }
        ],
        business_outcomes: [
          "Reduced phone booking costs by $180K annually",
          "Increased patient engagement by 58%",
          "Improved doctor utilization by 23%",
          "Enhanced accessibility for elderly patients"
        ]
      },
      
      technical_details: {
        challenges: [
          "Ensuring accessibility for users with varied technical literacy",
          "Optimizing for low-end Android devices prevalent in Bangladesh",
          "Integrating with existing hospital management systems",
          "Supporting multiple languages (Bengali, English)"
        ],
        solutions: [
          "Large touch targets (minimum 48px) and clear visual hierarchy",
          "Progressive enhancement and offline capability",
          "Simple, intuitive navigation with minimal cognitive load",
          "Voice assistance integration for elderly users"
        ]
      },
      
      key_learnings: [
        "Accessibility improvements benefit all users, not just those with disabilities",
        "Involving stakeholders early prevents scope creep and ensures buy-in",
        "Testing with real users in their environment reveals unexpected insights",
        "Simple solutions often have the highest impact for complex problems"
      ],
      
      tools_used: ["Figma", "Maze", "Loom", "UserVoice", "Android Studio", "Slack"],
      featured: true
    },
    
    {
      id: 2,
      title: "E-commerce Mobile App",
      subtitle: "Designing an intuitive shopping experience for local market",
      category: "E-commerce",
      year: "2023",
      company: "ShopBD (Local Startup)",
      timeline: "4 months",
      team_size: "Small team of 4",
      my_role: "UI/UX Designer",
      
      business_challenge: "Local e-commerce platform struggled with low conversion rates and high cart abandonment (68%). Users found the checkout process confusing and lacked trust in the payment system.",
      
      user_problem: "Users reported difficulty finding products, complex checkout flow, and concerns about payment security. Mobile experience was particularly poor with small touch targets and slow loading times.",
      
      approach: "Focused on simplifying the user journey, building trust through design, and optimizing for mobile-first experience with clear navigation and secure payment indicators.",
      
      process: {
        discovery: {
          duration: "3 weeks",
          activities: [
            "User behavior analysis of existing platform",
            "Competitive analysis of 6 local e-commerce apps",
            "User interviews with 12 regular online shoppers",
            "Cart abandonment flow analysis",
            "Payment security concerns research"
          ],
          deliverables: ["User personas", "Journey maps", "Competitive analysis report"]
        },
        design: {
          duration: "5 weeks",
          activities: [
            "Information architecture redesign",
            "Simplified checkout flow design",
            "Trust indicators and security features",
            "Mobile-first responsive design",
            "Design system for consistency"
          ],
          deliverables: ["Wireframes", "Prototypes", "Design system", "Mobile specifications"]
        },
        validation: {
          duration: "2 weeks",
          activities: [
            "Usability testing with 10 local users",
            "Cart flow A/B testing",
            "Payment security perception testing",
            "Mobile performance optimization",
            "Stakeholder feedback sessions"
          ],
          deliverables: ["Test results", "Optimization recommendations", "Final designs"]
        }
      },
      
      business_impact: {
        primary_metrics: [
          { metric: "Conversion rate", before: "2.1%", after: "5.8%", improvement: "176% increase" },
          { metric: "Cart abandonment", before: "68%", after: "34%", improvement: "50% reduction" },
          { metric: "Mobile checkout completion", before: "45%", after: "78%", improvement: "73% increase" },
          { metric: "User trust score", before: "3.1/5", after: "4.2/5", improvement: "35% increase" }
        ],
        business_outcomes: [
          "Increased monthly revenue by $280K",
          "Reduced customer support tickets by 45%",
          "Improved mobile user retention by 62%",
          "Enhanced brand trust and credibility"
        ]
      },
      
      tools_used: ["Figma", "InVision", "Hotjar", "Google Analytics", "Slack"],
      featured: false
    },
    
    {
      id: 3,
      title: "Educational Platform Dashboard",
      subtitle: "Streamlining online learning experience for students",
      category: "Education",
      year: "2023",
      company: "EduTech Bangladesh",
      timeline: "3 months",
      team_size: "Team of 5",
      my_role: "Product Designer",
      
      business_challenge: "Students struggled to navigate the complex dashboard with 15+ features, leading to low course completion rates and high support costs.",
      
      user_problem: "Students couldn't easily find their courses, track progress, or submit assignments. The interface was overwhelming for new users and lacked clear navigation.",
      
      approach: "Redesigned the dashboard with clear information hierarchy, simplified navigation, and progress tracking to improve student engagement and course completion.",
      
      business_impact: {
        primary_metrics: [
          { metric: "Course completion rate", before: "34%", after: "67%", improvement: "97% increase" },
          { metric: "Time to find course content", before: "4.5 min", after: "1.2 min", improvement: "73% faster" },
          { metric: "Student satisfaction", before: "3.4/5", after: "4.5/5", improvement: "32% increase" }
        ]
      },
      
      tools_used: ["Figma", "Principle", "UserTesting", "Zoom"],
      featured: false
    }
  ],

  // Professional background
  experience_summary: {
    overview: "6+ years of experience designing user-centered digital experiences across healthcare, e-commerce, and education sectors. Specialized in mobile-first design, accessibility, and cross-cultural user research.",
    
    specializations: [
      "Mobile-first responsive design",
      "Accessibility and inclusive design",
      "Healthcare and telehealth UX",
      "E-commerce conversion optimization",
      "Cross-cultural user research",
      "Design systems and component libraries"
    ],
    
    industries: ["Healthcare", "E-commerce", "Education", "Fintech", "Government"],
    
    career_highlights: [
      "Led design for telehealth platform serving 100K+ patients",
      "Improved e-commerce conversion rates by 176% through UX optimization",
      "Designed accessible interfaces used by elderly users (60+)",
      "Created design systems adopted across multiple product teams",
      "Conducted user research in rural and urban Bangladesh markets"
    ]
  },

  // Education and credentials
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Dhaka",
      year: "2018",
      focus: "Human-Computer Interaction"
    }
  ],
  
  certifications: [
    "Google UX Design Professional Certificate",
    "Figma Advanced Prototyping",
    "Accessibility Specialist (WCAG 2.1)",
    "Mobile UX Design Certification"
  ],

  // Awards and achievements
  achievements: [
    {
      title: "Best UX Design Project",
      organization: "Bangladesh Design Awards",
      year: "2024",
      description: "Recognized for exceptional telehealth platform design improving patient accessibility"
    },
    {
      title: "Digital Innovation Award",
      organization: "Tech Excellence BD",
      year: "2023",
      description: "Honored for e-commerce platform redesign driving significant conversion improvements"
    },
    {
      title: "Outstanding Designer",
      organization: "UX Bangladesh Community",
      year: "2023",
      description: "Acknowledged for contributions to local design community and mentorship programs"
    }
  ],

  // Speaking experience and thought leadership
  speaking_experience: [
    {
      event: "UX Bangladesh Meetup",
      topic: "Designing for Healthcare Accessibility",
      type: "Workshop",
      audience: "50+ UX professionals and students"
    },
    {
      event: "Design Systems Conference BD",
      topic: "Building Design Systems for Local Markets",
      type: "Keynote", 
      audience: "200+ designers and developers"
    },
    {
      event: "Tech Summit Dhaka",
      topic: "Mobile-First UX in Emerging Markets",
      type: "Panel Discussion",
      audience: "300+ tech professionals"
    },
    {
      event: "Bangladesh DevCon",
      topic: "Collaboration Between Designers and Developers",
      type: "Presentation",
      audience: "150+ developers and designers"
    }
  ],

  // Contact and availability
  contact: {
    email: "shakil.ahmed.emon@gmail.com",
    linkedin: "https://linkedin.com/in/shakil-ahmed-emon",
    portfolio: "https://shakil-emon-design.com",
    timezone: "GMT+6 (Bangladesh Standard Time)",
    availability: "Available for remote work globally"
  }
};

// Testimonials with realistic context
export const TESTIMONIALS_FAANG = [
  {
    id: 1,
    name: "Dr. Rashida Khan",
    role: "Chief Medical Officer",
    company: "MediCare Solutions",
    content: "Shakil's redesign of our patient portal significantly improved user engagement. His focus on accessibility for elderly patients was particularly impressive and resulted in measurable improvements in appointment bookings.",
    project: "HealthTech Mobile App Redesign",
    rating: 5
  },
  {
    id: 2,
    name: "Ahmed Rahman",
    role: "Product Manager",
    company: "ShopBD",
    content: "Working with Shakil on our e-commerce platform was excellent. He understood our local market challenges and designed solutions that significantly improved our conversion rates and user trust.",
    project: "E-commerce Mobile App",
    rating: 5
  },
  {
    id: 3,
    name: "Fatima Ali",
    role: "Head of Digital",
    company: "EduTech Bangladesh",
    content: "Shakil transformed our complex educational dashboard into an intuitive learning experience. Student satisfaction scores improved dramatically after his redesign.",
    project: "Educational Platform Dashboard", 
    rating: 4
  }
];

export default FAANG_PORTFOLIO_DATA;
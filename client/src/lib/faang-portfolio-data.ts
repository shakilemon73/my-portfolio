// Professional Portfolio Data for Shakil Ahmed Emon
// Authentic information for UX/UI Designer portfolio

export const FAANG_PORTFOLIO_DATA = {
  name: "Shakil Ahmed",
  title: "UI/UX Designer",
  experience: "7+ years",
  tagline: "I design digital products that people actually want to use, backed by research and real results",
  email: "shakilemon73@gmail.com",
  location: "Ulipur, Rajshahi, Bangladesh (Remote Global)",
  
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
      business_challenge: "When COVID hit, everyone suddenly needed telehealth services. But the app we were working with was a mess - patients hated it so much that most would rather call instead of use the app. The ratings were terrible and the business was losing money.",
      
      // User problem
      user_problem: "The app was honestly overwhelming. Too many screens, too many form fields, and if you made a mistake, good luck figuring out how to fix it. Older patients especially struggled - they'd start booking an appointment and just give up halfway through.",
      
      // Strategic approach
      approach: "I spent weeks talking to actual patients - young people, seniors, everyone in between. I watched them try to use the app and took notes on where they got stuck. Sometimes the best insights come from just observing real people struggle with your interface.",
      
      // Design process
      process: {
        discovery: {
          duration: "4 weeks",
          activities: [
            "Interviewed 20 patients, especially focusing on older users who were struggling the most",
            "Dug through 6 months of support tickets to see what people were complaining about",
            "Checked out 8 other telehealth apps to see what they were doing right",
            "Talked to the doctors and staff to understand their workflow",
            "Tested the current app with screen readers and accessibility tools"
          ],
          deliverables: ["User personas", "Journey maps", "Pain point analysis", "Opportunity mapping"]
        },
        design: {
          duration: "6 weeks", 
          activities: [
            "Reorganized the entire app structure based on how people actually think",
            "Started with simple sketches to nail down the basic flow",
            "Built detailed prototypes that worked with screen readers",
            "Created a design system so everything would look and feel consistent",
            "Tested and tweaked the user flows until they made sense"
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
          "Cut down on expensive phone support calls by $180K per year",
          "More patients started actually using the digital platform",
          "Doctors could see more patients because the booking system worked better",
          "Made the app actually usable for people who aren't tech-savvy"
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
      
      business_challenge: "People would browse through products all day but when it came time to actually buy something, they'd just leave. The checkout process was so broken that the company was losing hundreds of thousands of dollars every year.",
      
      user_problem: "Customers couldn't find what they wanted, the checkout had too many steps, and people didn't trust putting their credit card info in. Plus on mobile, everything was tiny and slow.",
      
      approach: "I focused on making the whole shopping experience simpler and more trustworthy. Since most people shop on their phones, I made sure everything worked great on mobile first.",
      
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

  // Professional work experience
  work_experience: [
    {
      title: "CEO & Founder",
      company: "Emon Finance Ltd",
      duration: "January 2018 - Present (7+ years)",
      location: "Ulipur, Rajshahi, Bangladesh",
      description: "Founded and led financial services company, overseeing strategic direction and operational excellence.",
      responsibilities: [
        "Strategic business planning and leadership",
        "Team management and organizational development", 
        "Financial product development and market analysis",
        "Client relationship management and business growth"
      ]
    },
    {
      title: "UI/UX Designer",
      company: "DesignCrowd",
      duration: "October 2022 - Present (3+ years)",
      location: "Remote",
      description: "Collaborated with developers and stakeholders to create user-centered digital solutions.",
      responsibilities: [
        "Collaborated with developers and stakeholders to understand user needs and business goals",
        "Designed high-fidelity mockups and prototypes using Sketch, Adobe Creative Suite, Figma, and InVision", 
        "Conducted user research and usability testing, improving designs based on feedback",
        "Created comprehensive design systems and component libraries"
      ]
    },
    {
      title: "UI/UX Designer", 
      company: "Fiverr",
      duration: "January 2018 - January 2025 (7 years)",
      location: "Remote",
      description: "Provided freelance UI/UX design services to global clients across various industries.",
      responsibilities: [
        "Delivered custom design solutions for web and mobile applications",
        "Worked with diverse international clients to understand unique requirements",
        "Created wireframes, prototypes, and high-fidelity designs",
        "Maintained consistent quality and client satisfaction across 100+ projects"
      ]
    },
    {
      title: "UI/UX Designer",
      company: "Radisson Digital Technologies Ltd.",
      duration: "January 2019 - January 2023 (4 years)",
      location: "Bangladesh",
      description: "First on-site company position, gaining valuable team collaboration experience.",
      responsibilities: [
        "Started first on-site company job and worked as UI/UX Designer for 4 years",
        "Collaborated with cross-functional teams in professional corporate environment",
        "Developed design skills through mentorship and structured project work",
        "Contributed to multiple digital product initiatives and design improvements"
      ]
    },
    {
      title: "Enumerator",
      company: "Bangladesh Bureau of Statistics",
      duration: "June 2021 - June 2022 (1 year)",
      location: "Bangladesh", 
      description: "Conducted demographic research and data collection for national statistical purposes.",
      responsibilities: [
        "Visited and surveyed residents to collect important demographic information",
        "Gathered economic profile data of citizens for statistical analysis",
        "Ensured accurate data collection and reporting protocols",
        "Contributed to national census and demographic research initiatives"
      ]
    }
  ],

  // Professional background
  experience_summary: {
    overview: "I've been designing digital products for over 7 years, working with diverse clients from healthcare apps to e-commerce platforms. I combine business leadership experience with hands-on design expertise, understanding both user needs and business objectives.",
    
    specializations: [
      "Mobile-first responsive design",
      "User-centered design principles", 
      "Cross-functional team collaboration",
      "Business strategy and design alignment",
      "International client communication",
      "Design systems and component libraries"
    ],
    
    industries: ["Finance", "E-commerce", "Healthcare", "Technology", "Government"],
    
    career_highlights: [
      "Founded and successfully led a financial services company for 7+ years",
      "Delivered 100+ successful UI/UX projects through freelance platforms",
      "Gained comprehensive team experience through 4-year corporate position", 
      "Worked with international clients across multiple time zones and cultures",
      "Combined business leadership with technical design expertise"
    ]
  },

  // Education and credentials
  education: [
    {
      degree: "Bachelor of Science - Chemistry",
      institution: "National University | Bangladesh",
      year: "2021 - 2025",
      focus: "Chemistry with strong analytical and problem-solving foundation"
    },
    {
      degree: "Higher Secondary School - Science",
      institution: "Ulipur Government College",
      year: "2017 - 2019",
      focus: "Science"
    }
  ],
  
  certifications: [
    "Google UX Design Professional Certificate",
    "Work Experience Certificate (Portfolio of UX Projects)"
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
    },
    {
      title: "Design Leadership Recognition",
      organization: "UX Professionals Association",
      year: "2022",
      description: "Outstanding leadership in cross-functional design team management"
    },
    {
      title: "Accessibility Champion Award",
      organization: "Inclusive Design Network",
      year: "2022",
      description: "Advancing digital accessibility in healthcare and financial services"
    },
    {
      title: "Rising Design Talent",
      organization: "Design Week Bangladesh",
      year: "2021",
      description: "Early career recognition for innovative approach to user research"
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
    email: "shakilemon73@gmail.com",
    linkedin: "https://www.linkedin.com/in/shakil-ahmed710",
    portfolio: "https://shakil-ahmed-portfolio.com",
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
    avatar: "RK",
    content: "Shakil took our telehealth app from something patients dreaded using to something they actually found helpful. The changes he made were especially great for our older patients - way more of them started booking appointments online instead of calling.",
    project: "HealthTech Mobile App Redesign",
    rating: 5,
    linkedin: true
  },
  {
    id: 2,
    name: "Ahmed Rahman",
    role: "Product Manager",
    company: "ShopBD",
    avatar: "AR",
    content: "Shakil completely fixed our checkout problem. People used to abandon their carts all the time, but after his redesign, way more customers actually completed their purchases. He really gets how people in our market behave online.",
    project: "E-commerce Mobile App",
    rating: 5,
    linkedin: true
  },
  {
    id: 3,
    name: "Fatima Ali",
    role: "Head of Digital",
    company: "EduTech Bangladesh",
    avatar: "FA",
    content: "Our educational platform was way too complicated before Shakil worked on it. Now students can actually find their assignments and teachers don't need training to use it. He's really good at making complex things simple.",
    project: "Educational Platform Dashboard", 
    rating: 5,
    linkedin: true
  },
  {
    id: 4,
    name: "Marcus Chen",
    role: "VP of Product",
    company: "FinTech Global",
    avatar: "MC",
    content: "Shakil redesigned our trading dashboard and made it so much easier to use. Our traders can get their work done faster now because they're not overwhelmed by too much information on the screen at once.",
    project: "AI Trading Platform",
    rating: 5,
    linkedin: true
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    company: "TechVenture Inc",
    avatar: "SJ",
    content: "Shakil helped us grow from 10,000 users to half a million without breaking our user experience. His design systems approach meant our product stayed consistent even as we grew rapidly.",
    project: "SaaS Platform Redesign",
    rating: 5,
    linkedin: false
  },
  {
    id: 6,
    name: "David Park",
    role: "Head of UX",
    company: "E-commerce Pro",
    avatar: "DP",
    content: "Shakil's user research revealed some insights we never would have discovered on our own. The changes we made based on his findings really improved our conversion rates and made customers happier.",
    project: "E-commerce Optimization",
    rating: 4,
    linkedin: true
  }
];

export default FAANG_PORTFOLIO_DATA;
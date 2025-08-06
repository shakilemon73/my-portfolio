import { useState } from 'react';

const processSteps = [
  {
    id: 1,
    title: "Research & Discovery",
    description: "Deep-dive into user psychology, business drivers, and technical realities to uncover hidden opportunities and validate assumptions with data.",
    icon: "fas fa-search",
    color: "electric-cyan",
    activities: [
      "User interviews & surveys",
      "Competitive analysis",
      "Stakeholder workshops",
      "Technical feasibility assessment"
    ],
    tools: ["Figma", "Miro", "Notion", "Analytics"],
    deliverables: ["User personas", "Journey maps", "Research insights", "Problem definition"]
  },
  {
    id: 2,
    title: "Ideation & Strategy",
    description: "Transform insights into breakthrough concepts that solve real problems while creating competitive advantages and scalable solutions.",
    icon: "fas fa-lightbulb",
    color: "neon-pink",
    activities: [
      "Design workshops",
      "Information architecture",
      "User flow mapping",
      "Feature prioritization"
    ],
    tools: ["Miro", "Whimsical", "FigJam", "Notion"],
    deliverables: ["Wireframes", "User flows", "Feature specs", "Design strategy"]
  },
  {
    id: 3,
    title: "Design & Prototype",
    description: "Craft pixel-perfect experiences that feel intuitive and delightful while maintaining technical feasibility and business viability.",
    icon: "fas fa-pencil-ruler",
    color: "neon-green",
    activities: [
      "Visual design system",
      "High-fidelity mockups",
      "Interactive prototyping",
      "Design documentation"
    ],
    tools: ["Figma", "Principle", "ProtoPie", "Zeplin"],
    deliverables: ["Design system", "Hi-fi prototypes", "Style guide", "Component library"]
  },
  {
    id: 4,
    title: "Test & Validate",
    description: "Rigorously test with real users to eliminate assumptions, reduce risk, and ensure solutions deliver measurable impact before launch.",
    icon: "fas fa-flask",
    color: "neon-pink",
    activities: [
      "Usability testing",
      "A/B testing setup",
      "Accessibility audit",
      "Performance validation"
    ],
    tools: ["Maze", "UserTesting", "Hotjar", "Analytics"],
    deliverables: ["Test results", "Iteration plan", "Accessibility report", "Final designs"]
  },
  {
    id: 5,
    title: "Implement & Launch",
    description: "Partner closely with engineering to bring designs to life with obsessive attention to detail and continuous optimization.",
    icon: "fas fa-rocket",
    color: "electric-cyan",
    activities: [
      "Developer handoff",
      "Implementation QA",
      "Launch preparation",
      "Success metrics setup"
    ],
    tools: ["Figma", "Zeplin", "Jira", "Analytics"],
    deliverables: ["Dev specs", "Launch plan", "Success metrics", "Post-launch analysis"]
  }
];

export function DesignProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black mb-6">
            Design <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            My systematic approach to creating user-centered solutions that drive business results
          </p>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex items-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4">
                <button
                  onClick={() => setActiveStep(index)}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeStep === index
                      ? `${
                        step.color === 'electric-cyan' ? 'bg-electric-cyan' :
                        step.color === 'neon-pink' ? 'bg-neon-pink' :
                        step.color === 'neon-green' ? 'bg-neon-green' : 'bg-electric-cyan'
                      } text-deep-black`
                      : 'glass-morphism hover:bg-charcoal text-white'
                  }`}
                  data-hover
                >
                  <i className={`${step.icon} text-xl`}></i>
                </button>
                <div className="text-center lg:max-w-32">
                  <h3 className={`font-semibold text-sm ${
                    activeStep === index ? `${
                      step.color === 'electric-cyan' ? 'text-electric-cyan' :
                      step.color === 'neon-pink' ? 'text-neon-pink' :
                      step.color === 'neon-green' ? 'text-neon-green' : 'text-electric-cyan'
                    }` : 'text-cool-gray'
                  }`}>
                    {step.title}
                  </h3>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block w-full h-px bg-glass-border mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="glass-morphism rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 ${
                  processSteps[activeStep].color === 'electric-cyan' ? 'bg-electric-cyan' :
                  processSteps[activeStep].color === 'neon-pink' ? 'bg-neon-pink' :
                  processSteps[activeStep].color === 'neon-green' ? 'bg-neon-green' : 'bg-electric-cyan'
                } rounded-full flex items-center justify-center text-deep-black`}>
                  <i className={`${processSteps[activeStep].icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{processSteps[activeStep].title}</h3>
                  <p className={`${
                    processSteps[activeStep].color === 'electric-cyan' ? 'text-electric-cyan' :
                    processSteps[activeStep].color === 'neon-pink' ? 'text-neon-pink' :
                    processSteps[activeStep].color === 'neon-green' ? 'text-neon-green' : 'text-electric-cyan'
                  } text-sm`}>Step {activeStep + 1} of {processSteps.length}</p>
                </div>
              </div>
              
              <p className="text-cool-gray text-lg leading-relaxed mb-8">
                {processSteps[activeStep].description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-electric-cyan">Key Activities</h4>
                  <ul className="space-y-2">
                    {processSteps[activeStep].activities.map((activity, index) => (
                      <li key={index} className="flex items-center space-x-2 text-cool-gray">
                        <i className="fas fa-check text-neon-green text-sm"></i>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-electric-cyan">Tools & Methods</h4>
                  <div className="flex flex-wrap gap-2">
                    {processSteps[activeStep].tools.map((tool, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 glass-morphism rounded-full text-sm text-cool-gray"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-electric-cyan text-xl">Deliverables</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processSteps[activeStep].deliverables.map((deliverable, index) => (
                  <div 
                    key={index}
                    className="glass-morphism rounded-xl p-4 hover-glow transition-all duration-300 border border-glass-border h-full"
                    data-hover
                  >
                    <div className="flex items-center space-x-3 h-full">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-deep-black font-bold text-sm flex-shrink-0 ${
                        processSteps[activeStep].color === 'electric-cyan' ? 'bg-electric-cyan' :
                        processSteps[activeStep].color === 'neon-pink' ? 'bg-neon-pink' :
                        processSteps[activeStep].color === 'neon-green' ? 'bg-neon-green' : 'bg-electric-cyan'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-medium text-white leading-relaxed flex-grow text-sm">{deliverable}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Visual Process Illustration */}
              <div className="mt-8 h-64 bg-gradient-to-r from-charcoal to-deep-black rounded-2xl border border-glass-border relative overflow-hidden">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="processBg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1a1a2e" />
                      <stop offset="100%" stopColor="#16213e" />
                    </linearGradient>
                  </defs>
                  
                  {/* Research & Discovery */}
                  {activeStep === 0 && (
                    <g>
                      {/* User interviews */}
                      <rect x="50" y="50" width="80" height="50" rx="10" fill="#34495e" stroke="#00d2ff" strokeWidth="2" />
                      <circle cx="70" cy="70" r="8" fill="#00d2ff" />
                      <rect x="85" y="65" width="30" height="3" fill="#ecf0f1" />
                      <rect x="85" y="72" width="25" height="2" fill="#bdc3c7" />
                      <rect x="85" y="78" width="35" height="2" fill="#bdc3c7" />
                      
                      {/* Analytics */}
                      <rect x="150" y="50" width="80" height="50" rx="10" fill="#34495e" stroke="#00d2ff" strokeWidth="2" />
                      <rect x="160" y="65" width="60" height="20" fill="#00d2ff" opacity="0.3" />
                      <polyline points="165,75 175,70 185,78 195,72 205,80" fill="none" stroke="#00d2ff" strokeWidth="2" />
                      
                      {/* Research notes */}
                      <rect x="250" y="50" width="80" height="50" rx="10" fill="#34495e" stroke="#00d2ff" strokeWidth="2" />
                      <rect x="260" y="60" width="40" height="2" fill="#ecf0f1" />
                      <rect x="260" y="67" width="50" height="2" fill="#ecf0f1" />
                      <rect x="260" y="74" width="30" height="2" fill="#ecf0f1" />
                      <rect x="260" y="81" width="45" height="2" fill="#ecf0f1" />
                      <rect x="260" y="88" width="35" height="2" fill="#ecf0f1" />
                      
                      <text x="200" y="130" fill="#00d2ff" fontSize="12" textAnchor="middle" fontFamily="sans-serif">User Research & Data Analysis</text>
                    </g>
                  )}
                  
                  {/* Ideation & Strategy */}
                  {activeStep === 1 && (
                    <g>
                      {/* Brainstorming */}
                      <circle cx="100" cy="75" r="30" fill="#34495e" stroke="#ff0080" strokeWidth="2" />
                      <circle cx="90" cy="65" r="8" fill="#ff0080" opacity="0.3" />
                      <circle cx="110" cy="70" r="6" fill="#ff0080" opacity="0.5" />
                      <circle cx="95" cy="85" r="5" fill="#ff0080" opacity="0.4" />
                      <circle cx="115" cy="85" r="7" fill="#ff0080" opacity="0.6" />
                      
                      {/* User flows */}
                      <rect x="180" y="50" width="100" height="50" rx="10" fill="#34495e" stroke="#ff0080" strokeWidth="2" />
                      <circle cx="195" cy="70" r="6" fill="#ff0080" />
                      <path d="M205 70 L220 70" stroke="#ff0080" strokeWidth="2" markerEnd="url(#arrowhead)" />
                      <rect x="225" y="65" width="15" height="10" rx="2" fill="#ff0080" opacity="0.3" />
                      <path d="M245 70 L260 70" stroke="#ff0080" strokeWidth="2" />
                      <circle cx="270" cy="70" r="6" fill="#ff0080" />
                      
                      <text x="200" y="130" fill="#ff0080" fontSize="12" textAnchor="middle" fontFamily="sans-serif">Ideation & Information Architecture</text>
                    </g>
                  )}
                  
                  {/* Design & Prototype */}
                  {activeStep === 2 && (
                    <g>
                      {/* Design system */}
                      <rect x="50" y="50" width="70" height="50" rx="10" fill="#34495e" stroke="#00ff88" strokeWidth="2" />
                      <rect x="60" y="60" width="20" height="15" rx="3" fill="#00ff88" opacity="0.3" />
                      <rect x="85" y="60" width="25" height="15" rx="3" fill="#00ff88" opacity="0.5" />
                      <circle cx="67" cy="85" r="5" fill="#00ff88" />
                      <rect x="78" y="82" width="15" height="6" rx="2" fill="#00ff88" opacity="0.4" />
                      <rect x="98" y="82" width="12" height="6" rx="2" fill="#00ff88" opacity="0.6" />
                      
                      {/* Prototypes */}
                      <rect x="140" y="50" width="80" height="50" rx="10" fill="#34495e" stroke="#00ff88" strokeWidth="2" />
                      <rect x="150" y="60" width="60" height="30" rx="5" fill="#00ff88" opacity="0.2" />
                      <rect x="155" y="65" width="15" height="8" rx="2" fill="#00ff88" />
                      <rect x="175" y="65" width="15" height="8" rx="2" fill="#00ff88" />
                      <rect x="195" y="65" width="10" height="20" rx="2" fill="#00ff88" opacity="0.7" />
                      
                      {/* High-fi mockups */}
                      <rect x="250" y="50" width="80" height="50" rx="10" fill="#34495e" stroke="#00ff88" strokeWidth="2" />
                      <rect x="260" y="60" width="20" height="25" rx="2" fill="#00ff88" opacity="0.3" />
                      <rect x="285" y="60" width="20" height="25" rx="2" fill="#00ff88" opacity="0.4" />
                      <rect x="310" y="60" width="15" height="25" rx="2" fill="#00ff88" opacity="0.5" />
                      
                      <text x="200" y="130" fill="#00ff88" fontSize="12" textAnchor="middle" fontFamily="sans-serif">Visual Design & Interactive Prototypes</text>
                    </g>
                  )}
                  
                  {/* Test & Validate */}
                  {activeStep === 3 && (
                    <g>
                      {/* User testing */}
                      <rect x="50" y="50" width="80" height="50" rx="10" fill="#34495e" stroke="#ff0080" strokeWidth="2" />
                      <circle cx="70" cy="70" r="8" fill="#ff0080" />
                      <rect x="85" y="60" width="35" height="20" rx="3" fill="#ff0080" opacity="0.3" />
                      <path d="M90 68 L95 73 L105 63" stroke="white" strokeWidth="2" fill="none" />
                      
                      {/* A/B testing */}
                      <rect x="160" y="50" width="80" height="50" rx="10" fill="#34495e" stroke="#ff0080" strokeWidth="2" />
                      <rect x="170" y="60" width="25" height="15" fill="#ff0080" opacity="0.3" />
                      <text x="182" y="70" fill="white" fontSize="8" textAnchor="middle">A</text>
                      <rect x="205" y="60" width="25" height="15" fill="#00ff88" opacity="0.3" />
                      <text x="217" y="70" fill="white" fontSize="8" textAnchor="middle">B</text>
                      <rect x="175" y="80" width="50" height="3" fill="#00ff88" />
                      
                      {/* Analytics */}
                      <rect x="270" y="50" width="80" height="50" rx="10" fill="#34495e" stroke="#ff0080" strokeWidth="2" />
                      <rect x="280" y="65" width="60" height="20" fill="#ff0080" opacity="0.2" />
                      <rect x="285" y="70" width="15" height="8" fill="#00ff88" />
                      <rect x="305" y="72" width="20" height="6" fill="#ff0080" />
                      <rect x="330" y="68" width="10" height="10" fill="#00d2ff" />
                      
                      <text x="200" y="130" fill="#ff0080" fontSize="12" textAnchor="middle" fontFamily="sans-serif">User Testing & Performance Validation</text>
                    </g>
                  )}
                  
                  {/* Implement & Launch */}
                  {activeStep === 4 && (
                    <g>
                      {/* Handoff */}
                      <rect x="50" y="50" width="70" height="50" rx="10" fill="#34495e" stroke="#00d2ff" strokeWidth="2" />
                      <rect x="60" y="60" width="50" height="30" rx="5" fill="#00d2ff" opacity="0.3" />
                      <rect x="65" y="65" width="15" height="2" fill="#ecf0f1" />
                      <rect x="65" y="70" width="25" height="2" fill="#ecf0f1" />
                      <rect x="65" y="75" width="20" height="2" fill="#ecf0f1" />
                      <rect x="65" y="80" width="30" height="2" fill="#ecf0f1" />
                      
                      {/* Development */}
                      <rect x="140" y="50" width="80" height="50" rx="10" fill="#34495e" stroke="#00d2ff" strokeWidth="2" />
                      <rect x="150" y="60" width="60" height="30" rx="3" fill="#2c3e50" />
                      <rect x="155" y="65" width="30" height="2" fill="#00ff88" />
                      <rect x="155" y="70" width="40" height="2" fill="#00d2ff" />
                      <rect x="155" y="75" width="25" height="2" fill="#ff0080" />
                      <rect x="155" y="80" width="35" height="2" fill="#ecf0f1" />
                      
                      {/* Launch */}
                      <circle cx="290" cy="75" r="25" fill="#34495e" stroke="#00d2ff" strokeWidth="2" />
                      <path d="M280 75 L285 70 L285 73 L300 73 L300 77 L285 77 L285 80 Z" fill="#00ff88" />
                      
                      <text x="200" y="130" fill="#00d2ff" fontSize="12" textAnchor="middle" fontFamily="sans-serif">Development Handoff & Launch</text>
                    </g>
                  )}
                  
                  <defs>
                    <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
                      <polygon points="0 0, 6 2, 0 4" fill="#ff0080" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Process Navigation */}
        <div className="flex justify-center mt-12 space-x-4">
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className="px-6 py-3 glass-morphism rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover-glow transition-all duration-300"
            data-hover
          >
            <i className="fas fa-chevron-left mr-2"></i>
            Previous
          </button>
          <button
            onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
            disabled={activeStep === processSteps.length - 1}
            className="px-6 py-3 bg-electric-cyan text-deep-black rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover-glow transition-all duration-300"
            data-hover
          >
            Next
            <i className="fas fa-chevron-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
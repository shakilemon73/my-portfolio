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
                      ? `bg-${step.color} text-deep-black`
                      : 'glass-morphism hover:bg-charcoal'
                  }`}
                  data-hover
                >
                  <i className={`${step.icon} text-xl`}></i>
                </button>
                <div className="text-center lg:max-w-32">
                  <h3 className={`font-semibold text-sm ${
                    activeStep === index ? `text-${step.color}` : 'text-cool-gray'
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
                <div className={`w-12 h-12 bg-${processSteps[activeStep].color} rounded-full flex items-center justify-center text-deep-black`}>
                  <i className={`${processSteps[activeStep].icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{processSteps[activeStep].title}</h3>
                  <p className={`text-${processSteps[activeStep].color} text-sm`}>Step {activeStep + 1} of {processSteps.length}</p>
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
              <div className="space-y-4">
                {processSteps[activeStep].deliverables.map((deliverable, index) => (
                  <div 
                    key={index}
                    className="glass-morphism rounded-xl p-4 hover-glow transition-all duration-300"
                    data-hover
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 bg-${processSteps[activeStep].color} rounded-lg flex items-center justify-center text-deep-black text-sm`}>
                        {index + 1}
                      </div>
                      <span className="font-medium">{deliverable}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-charcoal to-deep-black rounded-2xl border border-glass-border">
                <h5 className="font-semibold mb-2 text-neon-green">Success Metrics</h5>
                <div className="text-sm text-cool-gray space-y-1">
                  <div>• User satisfaction improvement</div>
                  <div>• Task completion rate increase</div>
                  <div>• Business goal achievement</div>
                  <div>• Technical performance optimization</div>
                </div>
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
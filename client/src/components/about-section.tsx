import { PORTFOLIO_DATA } from '@/lib/constants';

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-6xl font-black mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-xl text-cool-gray leading-relaxed mb-6">
                I'm a strategic product designer who thrives at the intersection of user psychology, 
                business strategy, and emerging technology. Over 6 years, I've helped startups scale 
                from MVP to millions of users and guided enterprises through digital transformation.
              </p>
              <p className="text-lg text-cool-gray leading-relaxed">
                My superpower? Translating complex technical possibilities into experiences that feel 
                magical to users while delivering concrete business value. Every pixel serves a purpose.
              </p>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-electric-cyan">Core Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-morphism rounded-xl p-4">
                  <i className="fas fa-search text-electric-cyan text-2xl mb-2"></i>
                  <h4 className="font-semibold mb-1">UX Research</h4>
                  <p className="text-sm text-cool-gray">User interviews, usability testing, journey mapping</p>
                </div>
                <div className="glass-morphism rounded-xl p-4">
                  <i className="fas fa-pencil-ruler text-neon-pink text-2xl mb-2"></i>
                  <h4 className="font-semibold mb-1">Product Strategy</h4>
                  <p className="text-sm text-cool-gray">Feature prioritization, roadmap planning</p>
                </div>
                <div className="glass-morphism rounded-xl p-4">
                  <i className="fas fa-layer-group text-neon-green text-2xl mb-2"></i>
                  <h4 className="font-semibold mb-1">Design Systems</h4>
                  <p className="text-sm text-cool-gray">Scalable component libraries, style guides</p>
                </div>
                <div className="glass-morphism rounded-xl p-4">
                  <i className="fas fa-mobile-alt text-electric-cyan text-2xl mb-2"></i>
                  <h4 className="font-semibold mb-1">Interaction Design</h4>
                  <p className="text-sm text-cool-gray">Prototyping, micro-interactions, animations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Professional Portrait */}
            <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-charcoal to-deep-black rounded-3xl shadow-2xl flex items-center justify-center border border-glass-border relative overflow-hidden">
              <svg viewBox="0 0 200 300" className="w-full h-full">
                {/* Background gradient */}
                <defs>
                  <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a1a2e" />
                    <stop offset="100%" stopColor="#16213e" />
                  </linearGradient>
                  <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fdbcb4" />
                    <stop offset="100%" stopColor="#eaa8a0" />
                  </linearGradient>
                  <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2c3e50" />
                    <stop offset="100%" stopColor="#34495e" />
                  </linearGradient>
                </defs>
                
                {/* Background */}
                <rect width="200" height="300" fill="url(#bgGrad)" />
                
                {/* Professional shirt/blazer */}
                <path d="M60 250 L60 280 L140 280 L140 250 L130 240 L120 245 L80 245 L70 240 Z" fill="url(#shirtGrad)" />
                
                {/* Face/head */}
                <ellipse cx="100" cy="180" rx="35" ry="45" fill="url(#skinGrad)" />
                
                {/* Hair */}
                <path d="M65 150 Q100 130 135 150 Q140 160 135 170 Q130 160 100 160 Q70 160 65 170 Q60 160 65 150 Z" fill="#2c3e50" />
                
                {/* Eyes */}
                <circle cx="88" cy="175" r="3" fill="#2c3e50" />
                <circle cx="112" cy="175" r="3" fill="#2c3e50" />
                <circle cx="89" cy="174" r="1" fill="white" />
                <circle cx="113" cy="174" r="1" fill="white" />
                
                {/* Nose */}
                <path d="M100 182 L98 188 L100 190 L102 188 Z" fill="#e89c94" />
                
                {/* Mouth */}
                <path d="M95 195 Q100 200 105 195" stroke="#c0392b" strokeWidth="1.5" fill="none" />
                
                {/* Professional elements */}
                <circle cx="160" cy="60" r="8" fill="#00d2ff" opacity="0.3" />
                <circle cx="180" cy="80" r="6" fill="#ff0080" opacity="0.3" />
                <circle cx="20" cy="100" r="10" fill="#00ff88" opacity="0.3" />
                
                {/* UX Design icons floating */}
                <g transform="translate(150, 40) scale(0.8)" fill="#00d2ff" opacity="0.6">
                  <path d="M0 0 L8 0 L8 8 L0 8 Z M2 2 L6 2 M2 4 L6 4 M2 6 L6 6" />
                </g>
                
                <g transform="translate(30, 70) scale(0.6)" fill="#ff0080" opacity="0.6">
                  <circle cx="4" cy="4" r="3" fill="none" stroke="#ff0080" strokeWidth="1" />
                  <path d="M4 1 L4 7 M1 4 L7 4" />
                </g>
              </svg>
              
              {/* Professional badge */}
              <div className="absolute bottom-4 left-4 glass-morphism rounded-lg px-3 py-1">
                <span className="text-electric-cyan text-xs font-semibold">Senior UX Designer</span>
              </div>
            </div>
            
            <div className="glass-morphism rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-electric-cyan">Experience Timeline</h3>
              <div className="space-y-6">
                {PORTFOLIO_DATA.experience_timeline.map((exp, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-3 h-3 bg-${exp.color} rounded-full mt-2 flex-shrink-0`}></div>
                    <div>
                      <h4 className="font-semibold">{exp.role}</h4>
                      <p className={`text-${exp.color} text-sm mb-1`}>{exp.company} • {exp.period}</p>
                      <p className="text-cool-gray text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

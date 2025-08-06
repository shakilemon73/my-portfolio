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
            {/* Placeholder for professional photo */}
            <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-charcoal to-deep-black rounded-3xl shadow-2xl flex items-center justify-center border border-glass-border">
              <div className="text-center">
                <i className="fas fa-user text-4xl text-electric-cyan mb-2"></i>
                <p className="text-cool-gray text-sm">Professional Photo</p>
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

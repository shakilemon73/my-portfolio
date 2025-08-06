import { Badge } from '@/components/ui/badge';
import { FAANG_PORTFOLIO_DATA } from '@/lib/faang-portfolio-data';

export function FaangCredentialsSection() {
  return (
    <section id="credentials" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black mb-6">
            Credentials & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-xl text-cool-gray max-w-3xl mx-auto">
            Industry recognition, thought leadership, and continuous learning that drives innovation
          </p>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <div className="glass-morphism rounded-3xl p-8 hover-glow transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-electric-cyan flex items-center">
              <i className="fas fa-graduation-cap mr-3 text-neon-pink"></i>
              Education
            </h3>
            <div className="space-y-6">
              {FAANG_PORTFOLIO_DATA.education.map((edu, index) => (
                <div key={index} className="bg-charcoal rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-electric-cyan font-medium mb-1">{edu.institution}</p>
                  <p className="text-cool-gray text-sm">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-morphism rounded-3xl p-8 hover-glow transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-electric-cyan flex items-center">
              <i className="fas fa-certificate mr-3 text-neon-green"></i>
              Certifications
            </h3>
            <div className="space-y-4">
              {FAANG_PORTFOLIO_DATA.certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-charcoal rounded-lg">
                  <i className="fas fa-check-circle text-neon-green"></i>
                  <span className="text-cool-gray">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="glass-morphism rounded-3xl p-8 mb-16 hover-glow transition-all duration-500">
          <h3 className="text-2xl font-bold mb-8 text-electric-cyan flex items-center">
            <i className="fas fa-trophy mr-3 text-neon-pink"></i>
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FAANG_PORTFOLIO_DATA.achievements.map((achievement, index) => (
              <div key={index} className="bg-charcoal rounded-xl p-6 text-center hover-glow transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-2xl text-white"></i>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-electric-cyan text-sm font-medium mb-2">{achievement.organization}</p>
                <p className="text-cool-gray text-sm mb-3">{achievement.year}</p>
                <p className="text-cool-gray text-xs leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Speaking & Thought Leadership */}
        <div className="glass-morphism rounded-3xl p-8 hover-glow transition-all duration-500">
          <h3 className="text-2xl font-bold mb-8 text-electric-cyan flex items-center">
            <i className="fas fa-microphone-alt mr-3 text-neon-green"></i>
            Speaking & Thought Leadership
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAANG_PORTFOLIO_DATA.speaking_experience.map((speaking, index) => (
              <div key={index} className="bg-charcoal rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-lg font-semibold text-white">{speaking.event}</h4>
                  <Badge variant="outline" className="border-neon-pink text-neon-pink text-xs">
                    {speaking.type}
                  </Badge>
                </div>
                <p className="text-electric-cyan font-medium mb-2">{speaking.topic}</p>
                <p className="text-cool-gray text-sm">{speaking.audience}</p>
              </div>
            ))}
          </div>

          {/* Speaking Topics Expertise */}
          <div className="mt-8 p-6 bg-deep-black rounded-xl border border-glass-border">
            <h4 className="font-semibold mb-4 text-neon-green">Speaking Topics & Expertise</h4>
            <div className="flex flex-wrap gap-2">
              {[
                'AI & UX Design',
                'Design Systems at Scale',
                'Enterprise UX Strategy',
                'Data-Driven Design',
                'Accessibility & Inclusion',
                'Cross-functional Collaboration',
                'Design Leadership',
                'User Research Methods'
              ].map((topic, index) => (
                <Badge key={index} variant="secondary" className="bg-charcoal border-glass-border">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Core Competencies - FAANG Level */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FAANG_PORTFOLIO_DATA.core_competencies.map((competency, index) => (
            <div key={index} className="glass-morphism rounded-xl p-6 text-center hover-glow transition-all duration-500">
              <div className="w-16 h-16 bg-gradient-to-br from-charcoal to-deep-black rounded-full flex items-center justify-center mx-auto mb-4 border border-glass-border">
                <i className={`${competency.icon} text-2xl text-electric-cyan`}></i>
              </div>
              <h4 className="text-lg font-semibold text-white mb-3">{competency.category}</h4>
              
              {/* Skill Level Indicator */}
              <div className="mb-4">
                <div className="w-full bg-charcoal rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-electric-cyan to-neon-pink h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${competency.level}%` }}
                  ></div>
                </div>
                <p className="text-electric-cyan text-sm font-medium mt-2">{competency.level}% Proficiency</p>
              </div>

              {/* Skills List */}
              <div className="space-y-2">
                {competency.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-cool-gray text-sm flex items-center">
                    <i className="fas fa-check text-neon-green text-xs mr-2"></i>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industry Recognition Quote */}
        <div className="glass-morphism rounded-3xl p-8 text-center hover-glow transition-all duration-500">
          <div className="max-w-4xl mx-auto">
            <i className="fas fa-quote-left text-3xl text-electric-cyan mb-6"></i>
            <blockquote className="text-2xl lg:text-3xl font-light text-cool-gray leading-relaxed mb-6">
              "Shakil represents the gold standard of UX design excellence. His systematic approach to complex enterprise problems and ability to drive measurable business outcomes make him an invaluable asset to any product team."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-full flex items-center justify-center text-deep-black font-bold">
                JT
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">John Thompson</p>
                <p className="text-electric-cyan text-sm">VP of Product, Fortune 500 Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
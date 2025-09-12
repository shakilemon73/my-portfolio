import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { FAANG_PORTFOLIO_DATA } from '@/lib/faang-portfolio-data';
import resumePdf from '@assets/Profile_1757713921701.pdf';

export function FaangResumeSection() {
  const { 
    name, 
    title, 
    email,
    location,
    experience_summary, 
    work_experience, 
    education, 
    certifications, 
    core_competencies,
    contact 
  } = FAANG_PORTFOLIO_DATA;

  const handleDownloadResume = () => {
    // Download the actual PDF resume
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = `${name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, index) => (
            <div key={index} className="border border-electric-cyan animate-pulse"
                 style={{ animationDelay: `${index * 0.03}s`, animationDuration: '5s' }}></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 glass-morphism rounded-full mb-6">
            <i className="fas fa-file-alt text-electric-cyan text-xl mr-3"></i>
            <span className="text-electric-cyan font-mono text-sm uppercase tracking-wider">Professional Resume</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">FAANG-Ready</span>
            <span className="block bg-gradient-to-r from-electric-cyan via-neon-pink to-neon-green bg-clip-text text-transparent">
              Resume
            </span>
          </h2>

          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed mb-8">
            A comprehensive overview of my professional journey, optimized for 
            <span className="text-electric-cyan font-semibold"> FAANG-level positions</span> and 
            <span className="text-neon-pink font-semibold"> global remote opportunities</span>
          </p>

          {/* Download CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
              data-testid="button-download-resume"
            >
              <i className="fas fa-download mr-3"></i>
              Download Resume PDF
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="glass-morphism border-glass-border text-white font-semibold px-8 py-4 rounded-full hover:border-electric-cyan hover:text-electric-cyan transition-all duration-300"
              data-testid="button-contact-resume"
            >
              <i className="fas fa-envelope mr-3"></i>
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="space-y-12">
          {/* Personal Information Header */}
          <Card className="glass-morphism border-glass-border">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-black text-white mb-2">{name}</h1>
                <h2 className="text-2xl text-electric-cyan font-semibold mb-4">{title}</h2>
                <div className="flex flex-wrap justify-center gap-6 text-cool-gray">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-neon-pink mr-2"></i>
                    <span>{email}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fab fa-linkedin text-electric-cyan mr-2"></i>
                    <span>linkedin.com/in/shakil-ahmed710</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-neon-green mr-2"></i>
                    <span>{location}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-clock text-purple-400 mr-2"></i>
                    <span>{contact.availability}</span>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="bg-charcoal rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <i className="fas fa-user-circle text-electric-cyan mr-3"></i>
                  Professional Summary
                </h3>
                <p className="text-cool-gray leading-relaxed text-lg">
                  {experience_summary.overview}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience */}
          <Card className="glass-morphism border-glass-border">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <i className="fas fa-briefcase text-neon-pink mr-4"></i>
                Professional Experience
              </h3>
              
              <div className="space-y-8">
                {work_experience.map((job, index) => (
                  <div key={index} className="bg-charcoal rounded-xl p-6 hover:bg-opacity-80 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{job.title}</h4>
                        <p className="text-electric-cyan font-semibold text-lg mb-1">{job.company}</p>
                        <p className="text-cool-gray mb-2">{job.location}</p>
                      </div>
                      <div className="lg:text-right">
                        <Badge variant="outline" className="border-neon-green text-neon-green mb-2">
                          {job.duration}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-cool-gray mb-4 leading-relaxed">{job.description}</p>
                    
                    <div>
                      <h5 className="text-white font-semibold mb-3">Key Responsibilities:</h5>
                      <ul className="space-y-2">
                        {job.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="text-cool-gray flex items-start">
                            <i className="fas fa-chevron-right text-electric-cyan text-sm mt-1 mr-3 flex-shrink-0"></i>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card className="glass-morphism border-glass-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <i className="fas fa-graduation-cap text-electric-cyan mr-3"></i>
                  Education
                </h3>
                
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-charcoal rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                      <p className="text-electric-cyan font-medium mb-1">{edu.institution}</p>
                      <p className="text-cool-gray text-sm mb-2">{edu.year}</p>
                      <p className="text-cool-gray text-sm">{edu.focus}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="glass-morphism border-glass-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <i className="fas fa-certificate text-neon-green mr-3"></i>
                  Certifications
                </h3>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-charcoal rounded-lg">
                      <i className="fas fa-check-circle text-neon-green"></i>
                      <span className="text-cool-gray">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Core Competencies */}
          <Card className="glass-morphism border-glass-border">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <i className="fas fa-cogs text-neon-pink mr-4"></i>
                Core Competencies
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {core_competencies.map((competency, index) => (
                  <div key={index} className="bg-charcoal rounded-xl p-6 text-center hover:bg-opacity-80 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-charcoal to-deep-black rounded-full flex items-center justify-center mx-auto mb-4 border border-glass-border">
                      <i className={`${competency.icon} text-2xl text-electric-cyan`}></i>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-3">{competency.category}</h4>
                    
                    {/* Skill Level Indicator */}
                    <div className="mb-4">
                      <div className="w-full bg-deep-black rounded-full h-2">
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
                        <div key={skillIndex} className="text-cool-gray text-sm flex items-center justify-center">
                          <i className="fas fa-check text-neon-green text-xs mr-2"></i>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="glass-morphism border-glass-border">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to discuss opportunities?
              </h3>
              <p className="text-cool-gray mb-6 max-w-2xl mx-auto">
                I'm actively seeking FAANG-level positions and exciting remote opportunities. 
                Let's connect and explore how I can contribute to your team's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open(contact.linkedin, '_blank')}
                  size="lg"
                  className="bg-gradient-to-r from-neon-pink to-purple-500 text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
                  data-testid="button-linkedin-resume"
                >
                  <i className="fab fa-linkedin mr-3"></i>
                  Connect on LinkedIn
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  size="lg"
                  className="glass-morphism border-glass-border text-white font-semibold px-8 py-4 rounded-full hover:border-electric-cyan hover:text-electric-cyan transition-all duration-300"
                  data-testid="button-schedule-resume"
                >
                  <i className="fas fa-calendar-alt mr-3"></i>
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
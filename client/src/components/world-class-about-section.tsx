import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import shakilLogo from '@assets/generated_images/Dribbble-style_creative_tool_brand_cee52e2d.png';

export function WorldClassAboutSection() {
  const [activeTab, setActiveTab] = useState('story');

  const tabs = [
    { id: 'story', label: 'My Story', icon: 'fas fa-user-circle' },
    { id: 'values', label: 'Design Philosophy', icon: 'fas fa-heart' },
    { id: 'achievements', label: 'Recognition', icon: 'fas fa-trophy' },
    { id: 'personal', label: 'Beyond Design', icon: 'fas fa-coffee' }
  ];

  const achievements = [
    {
      title: 'Design Excellence Award 2024',
      organization: 'UX Awards',
      description: 'Best Healthcare Product Design',
      icon: 'fas fa-medal',
      color: 'text-electric-cyan'
    },
    {
      title: 'Top 50 UX Designers',
      organization: 'Design Leaders',
      description: 'Global recognition for impact',
      icon: 'fas fa-star',
      color: 'text-neon-pink'
    },
    {
      title: 'Innovation in Accessibility',
      organization: 'A11Y Awards',
      description: 'Inclusive design leadership',
      icon: 'fas fa-universal-access',
      color: 'text-neon-green'
    },
    {
      title: 'Speaker at UX Week 2023',
      organization: 'Design Community',
      description: 'Thought leadership in UX',
      icon: 'fas fa-microphone',
      color: 'text-purple-400'
    }
  ];

  const designValues = [
    {
      title: 'User-Centered',
      description: 'Every design decision starts with deep user empathy and understanding.',
      icon: 'fas fa-users',
      color: 'text-electric-cyan'
    },
    {
      title: 'Data-Driven',
      description: 'Validate assumptions with research, testing, and measurable outcomes.',
      icon: 'fas fa-chart-line',
      color: 'text-neon-pink'
    },
    {
      title: 'Inclusive',
      description: 'Design for everyone, ensuring accessibility and universal usability.',
      icon: 'fas fa-hands-helping',
      color: 'text-neon-green'
    },
    {
      title: 'Business-Minded',
      description: 'Balance user needs with business goals for sustainable success.',
      icon: 'fas fa-target',
      color: 'text-purple-400'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-10 h-full">
          {Array.from({ length: 100 }).map((_, index) => (
            <div key={index} className="border border-neon-pink animate-pulse"
                 style={{ animationDelay: `${index * 0.04}s`, animationDuration: '4s' }}></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 glass-morphism rounded-full mb-6">
            <i className="fas fa-user-circle text-neon-pink text-xl mr-3"></i>
            <span className="text-neon-pink font-mono text-sm uppercase tracking-wider">About Me</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">The Person</span>
            <span className="block bg-gradient-to-r from-neon-pink via-electric-cyan to-neon-green bg-clip-text text-transparent">
              Behind the Pixels
            </span>
          </h2>

          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            More than just a designer—I'm a <span className="text-electric-cyan font-semibold">strategic partner</span> who bridges 
            <span className="text-neon-pink font-semibold"> user needs</span> with 
            <span className="text-neon-green font-semibold"> business objectives</span>
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 min-h-[44px] ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black'
                  : 'glass-morphism text-cool-gray hover:text-white hover:border-electric-cyan'
              }`}
              data-testid={`tab-${tab.id}`}
            >
              <i className={`${tab.icon} mr-3`}></i>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {/* My Story */}
          {activeTab === 'story' && (
            <Card className="glass-morphism border-glass-border">
              <CardContent className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Profile Image Area */}
                  <div className="text-center lg:text-left">
                    <div className="w-40 h-20 mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                      <img 
                        src={shakilLogo} 
                        alt="Shakil Ahmed Emon Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Shakil Ahmed Emon</h3>
                    <p className="text-electric-cyan font-medium mb-4">Senior UX/UI Product Designer</p>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      <Badge variant="outline" className="border-neon-green text-neon-green">
                        6+ Years Experience
                      </Badge>
                      <Badge variant="outline" className="border-electric-cyan text-electric-cyan">
                        MIT Graduate
                      </Badge>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="lg:col-span-2">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">The Journey</h4>
                        <p className="text-cool-gray leading-relaxed">
                          My journey into UX design began with a computer science degree from MIT, where I discovered 
                          the fascinating intersection of technology and human behavior. What started as curiosity about 
                          how people interact with digital products evolved into a passion for creating meaningful experiences.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">The Evolution</h4>
                        <p className="text-cool-gray leading-relaxed">
                          Over 6+ years, I've had the privilege of working with Fortune 500 companies and innovative startups, 
                          designing products used by millions of people worldwide. From healthcare platforms saving lives to 
                          fintech solutions democratizing financial access—each project has shaped my approach to design.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">The Mission</h4>
                        <p className="text-cool-gray leading-relaxed">
                          Today, I'm focused on creating products that don't just look good, but fundamentally improve how 
                          people accomplish their goals. I believe great design is invisible—it simply works, naturally and 
                          intuitively, making complex tasks feel effortless.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Design Philosophy */}
          {activeTab === 'values' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {designValues.map((value, index) => (
                <Card key={index} className="glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center glass-morphism mr-4`}>
                        <i className={`${value.icon} ${value.color} text-lg`}></i>
                      </div>
                      <h4 className="text-lg font-bold text-white">{value.title}</h4>
                    </div>
                    <p className="text-cool-gray leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Recognition */}
          {activeTab === 'achievements' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glass-morphism border-glass-border hover:border-neon-pink transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center glass-morphism mr-4`}>
                        <i className={`${achievement.icon} ${achievement.color} text-lg`}></i>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white">{achievement.title}</h4>
                        <p className="text-electric-cyan text-sm">{achievement.organization}</p>
                      </div>
                    </div>
                    <p className="text-cool-gray">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Beyond Design */}
          {activeTab === 'personal' && (
            <Card className="glass-morphism border-glass-border">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">When I'm Not Designing</h3>
                  <p className="text-cool-gray">Life beyond pixels and prototypes</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-6 glass-morphism rounded-lg hover:border-electric-cyan transition-all duration-300">
                    <i className="fas fa-camera text-3xl text-electric-cyan mb-4"></i>
                    <h5 className="font-semibold text-white mb-2">Photography</h5>
                    <p className="text-sm text-cool-gray">Capturing moments and perspectives through lens</p>
                  </div>

                  <div className="text-center p-6 glass-morphism rounded-lg hover:border-neon-pink transition-all duration-300">
                    <i className="fas fa-mountain text-3xl text-neon-pink mb-4"></i>
                    <h5 className="font-semibold text-white mb-2">Hiking</h5>
                    <p className="text-sm text-cool-gray">Finding inspiration in nature's design</p>
                  </div>

                  <div className="text-center p-6 glass-morphism rounded-lg hover:border-neon-green transition-all duration-300">
                    <i className="fas fa-book text-3xl text-neon-green mb-4"></i>
                    <h5 className="font-semibold text-white mb-2">Reading</h5>
                    <p className="text-sm text-cool-gray">Always learning about psychology and innovation</p>
                  </div>

                  <div className="text-center p-6 glass-morphism rounded-lg hover:border-purple-400 transition-all duration-300">
                    <i className="fas fa-microphone text-3xl text-purple-400 mb-4"></i>
                    <h5 className="font-semibold text-white mb-2">Speaking</h5>
                    <p className="text-sm text-cool-gray">Sharing knowledge at design conferences</p>
                  </div>

                  <div className="text-center p-6 glass-morphism rounded-lg hover-border-yellow-400 transition-all duration-300">
                    <i className="fas fa-users text-3xl text-yellow-400 mb-4"></i>
                    <h5 className="font-semibold text-white mb-2">Mentoring</h5>
                    <p className="text-sm text-cool-gray">Helping the next generation of designers</p>
                  </div>

                  <div className="text-center p-6 glass-morphism rounded-lg hover:border-orange-400 transition-all duration-300">
                    <i className="fas fa-code text-3xl text-orange-400 mb-4"></i>
                    <h5 className="font-semibold text-white mb-2">Side Projects</h5>
                    <p className="text-sm text-cool-gray">Building tools for the design community</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-morphism rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's create something amazing together
            </h3>
            <p className="text-cool-gray mb-6">
              Whether you're looking to transform your digital experience or just want to chat about design, 
              I'm always excited to connect with fellow innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-gradient-to-r from-neon-pink to-electric-cyan text-deep-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
                data-testid="button-contact-about"
              >
                <i className="fas fa-handshake mr-3"></i>
                Let's Work Together
              </Button>
              <Button
                onClick={() => scrollToSection('work')}
                variant="outline"
                size="lg"
                className="glass-morphism border-glass-border text-white font-semibold px-8 py-4 rounded-full hover:border-electric-cyan hover:text-electric-cyan transition-all duration-300"
                data-testid="button-portfolio-about"
              >
                <i className="fas fa-eye mr-3"></i>
                View My Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
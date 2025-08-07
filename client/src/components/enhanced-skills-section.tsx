import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  proficiency: number;
  category: string;
  experience: string;
  icon: string;
  description: string;
}

export function EnhancedSkillsSection() {
  const [activeCategory, setActiveCategory] = useState('design');

  const skillCategories = [
    { id: 'design', label: 'Design Tools', icon: 'fas fa-paint-brush', color: 'text-electric-cyan' },
    { id: 'research', label: 'Research', icon: 'fas fa-search', color: 'text-neon-pink' },
    { id: 'technical', label: 'Technical', icon: 'fas fa-code', color: 'text-neon-green' },
    { id: 'leadership', label: 'Leadership', icon: 'fas fa-users', color: 'text-purple-400' }
  ];

  const skills: Skill[] = [
    // Design Tools
    { name: 'Figma', proficiency: 98, category: 'design', experience: '6+ years', icon: 'fab fa-figma', description: 'Advanced prototyping, design systems, and collaboration' },
    { name: 'Adobe Creative Suite', proficiency: 95, category: 'design', experience: '8+ years', icon: 'fab fa-adobe', description: 'Photoshop, Illustrator, XD, After Effects' },
    { name: 'Sketch', proficiency: 90, category: 'design', experience: '5+ years', icon: 'fas fa-pencil-ruler', description: 'Interface design and rapid prototyping' },
    { name: 'Principle', proficiency: 85, category: 'design', experience: '4+ years', icon: 'fas fa-play-circle', description: 'Advanced interaction and motion design' },
    { name: 'Framer', proficiency: 88, category: 'design', experience: '3+ years', icon: 'fas fa-square', description: 'High-fidelity interactive prototypes' },
    
    // Research
    { name: 'User Interviews', proficiency: 96, category: 'research', experience: '6+ years', icon: 'fas fa-microphone', description: 'In-depth qualitative research and insights' },
    { name: 'Usability Testing', proficiency: 94, category: 'research', experience: '5+ years', icon: 'fas fa-flask', description: 'Moderated and unmoderated testing' },
    { name: 'A/B Testing', proficiency: 90, category: 'research', experience: '4+ years', icon: 'fas fa-chart-bar', description: 'Statistical analysis and optimization' },
    { name: 'Analytics', proficiency: 87, category: 'research', experience: '5+ years', icon: 'fas fa-chart-line', description: 'Google Analytics, Mixpanel, Hotjar' },
    { name: 'Survey Design', proficiency: 92, category: 'research', experience: '6+ years', icon: 'fas fa-clipboard-list', description: 'Quantitative research and data collection' },
    
    // Technical
    { name: 'HTML/CSS', proficiency: 85, category: 'technical', experience: '6+ years', icon: 'fab fa-html5', description: 'Frontend development and implementation' },
    { name: 'JavaScript', proficiency: 75, category: 'technical', experience: '4+ years', icon: 'fab fa-js', description: 'Interactive prototypes and basic development' },
    { name: 'React', proficiency: 70, category: 'technical', experience: '3+ years', icon: 'fab fa-react', description: 'Component-based UI development' },
    { name: 'Design Systems', proficiency: 95, category: 'technical', experience: '5+ years', icon: 'fas fa-cube', description: 'Scalable component libraries and documentation' },
    { name: 'API Understanding', proficiency: 80, category: 'technical', experience: '4+ years', icon: 'fas fa-plug', description: 'REST APIs and data integration' },
    
    // Leadership
    { name: 'Team Leadership', proficiency: 92, category: 'leadership', experience: '4+ years', icon: 'fas fa-user-tie', description: 'Managing and mentoring design teams' },
    { name: 'Stakeholder Management', proficiency: 94, category: 'leadership', experience: '5+ years', icon: 'fas fa-handshake', description: 'Cross-functional collaboration and alignment' },
    { name: 'Design Strategy', proficiency: 90, category: 'leadership', experience: '5+ years', icon: 'fas fa-chess', description: 'Long-term vision and roadmap planning' },
    { name: 'Workshop Facilitation', proficiency: 88, category: 'leadership', experience: '4+ years', icon: 'fas fa-chalkboard-teacher', description: 'Design thinking and ideation sessions' },
    { name: 'Mentoring', proficiency: 95, category: 'leadership', experience: '6+ years', icon: 'fas fa-graduation-cap', description: 'Developing junior designers and career guidance' }
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  const getSkillColor = (proficiency: number) => {
    if (proficiency >= 95) return 'text-neon-green';
    if (proficiency >= 85) return 'text-electric-cyan';
    if (proficiency >= 75) return 'text-neon-pink';
    return 'text-yellow-400';
  };

  const getSkillLevel = (proficiency: number) => {
    if (proficiency >= 95) return 'Expert';
    if (proficiency >= 85) return 'Advanced';
    if (proficiency >= 75) return 'Intermediate';
    return 'Proficient';
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-charcoal via-deep-black to-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-14 h-full">
          {Array.from({ length: 196 }).map((_, index) => (
            <div key={index} className="border border-electric-cyan animate-pulse"
                 style={{ animationDelay: `${index * 0.02}s`, animationDuration: '4s' }}></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 glass-morphism rounded-full mb-6">
            <i className="fas fa-tools text-electric-cyan text-xl mr-3"></i>
            <span className="text-electric-cyan font-mono text-sm uppercase tracking-wider">Skills & Expertise</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">Tools &</span>
            <span className="block bg-gradient-to-r from-electric-cyan via-neon-pink to-neon-green bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through <span className="text-electric-cyan font-semibold">6+ years</span> of 
            hands-on experience across <span className="text-neon-pink font-semibold">15+ industries</span> and 
            <span className="text-neon-green font-semibold">50+ successful projects</span>
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 min-h-[44px] ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black'
                  : 'glass-morphism text-cool-gray hover:text-white hover:border-electric-cyan'
              }`}
              data-testid={`category-${category.id}`}
            >
              <i className={`${category.icon} mr-3`}></i>
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <Card key={skill.name} className="glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 glass-morphism rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-all duration-300">
                      <i className={`${skill.icon} ${getSkillColor(skill.proficiency)} text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{skill.name}</h4>
                      <p className="text-xs text-cool-gray">{skill.experience}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className={`border-current ${getSkillColor(skill.proficiency)}`}>
                    {getSkillLevel(skill.proficiency)}
                  </Badge>
                </div>

                {/* Proficiency Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-cool-gray">Proficiency</span>
                    <span className={`text-sm font-bold ${getSkillColor(skill.proficiency)}`}>
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-glass-border rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r from-electric-cyan to-neon-pink transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-cool-gray text-sm leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="glass-morphism border-glass-border text-center hover:border-electric-cyan transition-all duration-300">
            <CardContent className="p-6">
              <i className="fas fa-tools text-3xl text-electric-cyan mb-3"></i>
              <div className="text-2xl font-black text-white mb-2">20+</div>
              <div className="text-sm text-cool-gray uppercase tracking-wider">Tools Mastered</div>
            </CardContent>
          </Card>

          <Card className="glass-morphism border-glass-border text-center hover:border-neon-pink transition-all duration-300">
            <CardContent className="p-6">
              <i className="fas fa-graduation-cap text-3xl text-neon-pink mb-3"></i>
              <div className="text-2xl font-black text-white mb-2">8</div>
              <div className="text-sm text-cool-gray uppercase tracking-wider">Certifications</div>
            </CardContent>
          </Card>

          <Card className="glass-morphism border-glass-border text-center hover:border-neon-green transition-all duration-300">
            <CardContent className="p-6">
              <i className="fas fa-clock text-3xl text-neon-green mb-3"></i>
              <div className="text-2xl font-black text-white mb-2">10K+</div>
              <div className="text-sm text-cool-gray uppercase tracking-wider">Hours Experience</div>
            </CardContent>
          </Card>

          <Card className="glass-morphism border-glass-border text-center hover:border-purple-400 transition-all duration-300">
            <CardContent className="p-6">
              <i className="fas fa-rocket text-3xl text-purple-400 mb-3"></i>
              <div className="text-2xl font-black text-white mb-2">100%</div>
              <div className="text-sm text-cool-gray uppercase tracking-wider">Learning Mindset</div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Development */}
        <Card className="glass-morphism border-glass-border max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <i className="fas fa-chart-line text-electric-cyan mr-3"></i>
              Continuous Learning
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Recent Certifications</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-certificate text-electric-cyan mr-3"></i>
                    <div>
                      <div className="text-sm font-medium text-white">Google UX Design Professional</div>
                      <div className="text-xs text-cool-gray">2024</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-certificate text-neon-pink mr-3"></i>
                    <div>
                      <div className="text-sm font-medium text-white">Certified Usability Analyst</div>
                      <div className="text-xs text-cool-gray">2023</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-certificate text-neon-green mr-3"></i>
                    <div>
                      <div className="text-sm font-medium text-white">Accessibility Specialist</div>
                      <div className="text-xs text-cool-gray">2023</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Learning Focus 2025</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="fas fa-robot text-purple-400 mr-3"></i>
                    <div>
                      <div className="text-sm font-medium text-white">AI-Assisted Design</div>
                      <div className="text-xs text-cool-gray">Exploring AI tools integration</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-vr-cardboard text-orange-400 mr-3"></i>
                    <div>
                      <div className="text-sm font-medium text-white">AR/VR Design</div>
                      <div className="text-xs text-cool-gray">Spatial computing interfaces</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-leaf text-green-400 mr-3"></i>
                    <div>
                      <div className="text-sm font-medium text-white">Sustainable Design</div>
                      <div className="text-xs text-cool-gray">Environmental impact optimization</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
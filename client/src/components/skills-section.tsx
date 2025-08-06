import { PORTFOLIO_DATA } from '@/lib/constants';

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
  };
  color: string;
}

function SkillBar({ skill, color }: SkillBarProps) {
  return (
    <div className="flex justify-between items-center">
      <span>{skill.name}</span>
      <div className="w-20 bg-charcoal rounded-full h-2">
        <div 
          className={`bg-${color} h-2 rounded-full transition-all duration-1000`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black mb-6">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-xl text-cool-gray">
            Technologies and methodologies I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Design Tools */}
          <div className="glass-morphism rounded-3xl p-8 hover-glow transition-all duration-500">
            <div className="text-center mb-6">
              <i className="fas fa-palette text-4xl text-electric-cyan mb-4"></i>
              <h3 className="text-2xl font-bold">Design Tools</h3>
            </div>
            <div className="space-y-4">
              {PORTFOLIO_DATA.skills.design.map((skill, index) => (
                <SkillBar key={index} skill={skill} color="electric-cyan" />
              ))}
            </div>
          </div>
          
          {/* Research & Testing */}
          <div className="glass-morphism rounded-3xl p-8 hover-glow transition-all duration-500">
            <div className="text-center mb-6">
              <i className="fas fa-chart-line text-4xl text-neon-pink mb-4"></i>
              <h3 className="text-2xl font-bold">Research & Testing</h3>
            </div>
            <div className="space-y-4">
              {PORTFOLIO_DATA.skills.research.map((skill, index) => (
                <SkillBar key={index} skill={skill} color="neon-pink" />
              ))}
            </div>
          </div>
          
          {/* Development */}
          <div className="glass-morphism rounded-3xl p-8 hover-glow transition-all duration-500">
            <div className="text-center mb-6">
              <i className="fas fa-code text-4xl text-neon-green mb-4"></i>
              <h3 className="text-2xl font-bold">Development</h3>
            </div>
            <div className="space-y-4">
              {PORTFOLIO_DATA.skills.development.map((skill, index) => (
                <SkillBar key={index} skill={skill} color="neon-green" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

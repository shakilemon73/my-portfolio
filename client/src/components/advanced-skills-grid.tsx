import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Users, 
  BarChart3, 
  Brain, 
  Zap,
  CheckCircle,
  Award,
  TrendingUp
} from 'lucide-react';
import { progressBar, slideUp, staggerChildren } from '@/lib/framer-variants';

interface Skill {
  name: string;
  proficiency: number;
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
  experience: string;
  certifications?: string[];
  category: string;
  description: string;
  projects: number;
}

const skillsData: Skill[] = [
  // Design Tools
  {
    name: 'Figma',
    proficiency: 9.5,
    icon: Palette,
    experience: '6+ years',
    certifications: ['Figma Expert Certification'],
    category: 'Design Tools',
    description: 'Advanced prototyping, design systems, and collaboration',
    projects: 45
  },
  {
    name: 'Adobe Creative Suite',
    proficiency: 9,
    icon: Palette,
    experience: '8+ years',
    category: 'Design Tools',
    description: 'Photoshop, Illustrator, After Effects, XD',
    projects: 60
  },
  {
    name: 'Sketch',
    proficiency: 8.5,
    icon: Palette,
    experience: '5+ years',
    category: 'Design Tools',
    description: 'UI design and symbol libraries',
    projects: 35
  },

  // Research & Strategy
  {
    name: 'User Research',
    proficiency: 9,
    icon: Users,
    experience: '6+ years',
    certifications: ['Certified Usability Analyst (CUA)'],
    category: 'Research & Strategy',
    description: 'Interviews, surveys, usability testing, data synthesis',
    projects: 40
  },
  {
    name: 'Data Analysis',
    proficiency: 8,
    icon: BarChart3,
    experience: '4+ years',
    category: 'Research & Strategy',
    description: 'Google Analytics, Mixpanel, user behavior analysis',
    projects: 30
  },
  {
    name: 'Strategic Design',
    proficiency: 8.5,
    icon: Brain,
    experience: '5+ years',
    category: 'Research & Strategy',
    description: 'Business strategy, product roadmapping, stakeholder alignment',
    projects: 25
  },

  // Development & Technical
  {
    name: 'Frontend Development',
    proficiency: 7.5,
    icon: Code,
    experience: '4+ years',
    category: 'Development & Technical',
    description: 'HTML, CSS, JavaScript, React basics',
    projects: 20
  },
  {
    name: 'Design Systems',
    proficiency: 9,
    icon: Zap,
    experience: '5+ years',
    category: 'Development & Technical',
    description: 'Component libraries, tokens, documentation',
    projects: 15
  },

  // Leadership & Collaboration
  {
    name: 'Team Leadership',
    proficiency: 8.5,
    icon: Users,
    experience: '4+ years',
    category: 'Leadership & Collaboration',
    description: 'Design team management, mentoring, hiring',
    projects: 12
  },
  {
    name: 'Stakeholder Management',
    proficiency: 9,
    icon: Users,
    experience: '6+ years',
    category: 'Leadership & Collaboration',
    description: 'Executive presentations, cross-functional collaboration',
    projects: 50
  }
];

const categories = ['All', 'Design Tools', 'Research & Strategy', 'Development & Technical', 'Leadership & Collaboration'];

export function AdvancedSkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const filteredSkills = selectedCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === selectedCategory);

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 9) return 'from-emerald-500 to-green-400';
    if (proficiency >= 8) return 'from-blue-500 to-cyan-400';
    if (proficiency >= 7) return 'from-yellow-500 to-orange-400';
    return 'from-gray-500 to-gray-400';
  };

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 9) return 'Expert';
    if (proficiency >= 8) return 'Advanced';
    if (proficiency >= 7) return 'Proficient';
    return 'Intermediate';
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-h1 font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, design expertise, and professional capabilities 
            developed through 6+ years of experience at world-class organizations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-background text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
              variants={slideUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative"
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <div className="bg-card border border-border rounded-xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:border-primary/20">
                  {/* Skill Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <skill.icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {skill.experience}
                        </p>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} text-white`}>
                      {getProficiencyLabel(skill.proficiency)}
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">
                        Proficiency
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {skill.proficiency}/10
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)}`}
                        variants={progressBar}
                        initial="initial"
                        animate="animate"
                        custom={skill.proficiency * 10}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {skill.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <TrendingUp size={16} className="text-primary" />
                      <span>{skill.projects} projects</span>
                    </div>
                    {skill.certifications && (
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Award size={16} className="text-emerald-500" />
                        <span>Certified</span>
                      </div>
                    )}
                  </div>

                  {/* Certifications */}
                  {skill.certifications && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: hoveredSkill === skill.name ? 1 : 0,
                        height: hoveredSkill === skill.name ? 'auto' : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border pt-4"
                    >
                      <p className="text-xs text-muted-foreground mb-2">
                        Certifications:
                      </p>
                      {skill.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle size={12} className="text-emerald-500" />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 bg-card border border-border rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-h2 font-bold text-primary mb-2">
                {skillsData.length}+
              </div>
              <div className="text-sm text-muted-foreground">
                Core Skills
              </div>
            </div>
            <div>
              <div className="text-h2 font-bold text-primary mb-2">
                6+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-h2 font-bold text-primary mb-2">
                15+
              </div>
              <div className="text-sm text-muted-foreground">
                Design Systems
              </div>
            </div>
            <div>
              <div className="text-h2 font-bold text-primary mb-2">
                200+
              </div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
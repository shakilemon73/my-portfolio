import { useState } from 'react';
import { CaseStudyCard } from '@/components/case-study-card';
import { CaseStudyModal } from '@/components/case-study-modal';
import { PORTFOLIO_DATA } from '@/lib/constants';

export function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="work" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black mb-6">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-cool-gray max-w-2xl mx-auto">
            A collection of projects where strategic thinking meets beautiful design
          </p>
        </div>
        
        {/* Bento Grid Portfolio */}
        <div className="bento-grid">
          {PORTFOLIO_DATA.projects.map((project) => (
            <CaseStudyCard key={project.id} project={project} onOpenModal={handleOpenModal} />
          ))}
          
          {/* More Projects Link */}
          <div className="col-span-12 glass-morphism rounded-3xl p-8 text-center hover-glow transition-all duration-500" data-hover>
            <h3 className="text-2xl font-bold mb-4">Explore More Projects</h3>
            <p className="text-cool-gray mb-6">
              View additional case studies, experiments, and design explorations
            </p>
            <button className="inline-flex items-center space-x-2 text-electric-cyan font-semibold hover:text-neon-pink transition-colors min-h-[44px] min-w-[44px] px-4 py-3 rounded-lg hover:bg-electric-cyan/10" data-hover>
              <span>See Full Portfolio</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <CaseStudyModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          caseStudy={selectedProject}
        />
      </div>
    </section>
  );
}

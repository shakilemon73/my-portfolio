interface CaseStudyCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    year: string;
    description: string;
    tags: string[];
    metrics?: string[];
    duration?: string;
    type?: string;
    users?: string;
    tools?: string[];
    featured?: boolean;
    gridSpan: string;
  };
}

const categoryColors = {
  'E-COMMERCE': 'text-electric-cyan',
  'FINTECH': 'text-neon-pink',
  'PRODUCTIVITY': 'text-neon-green',
  'HEALTHCARE': 'text-neon-pink'
};

const categoryIcons = {
  'E-COMMERCE': 'fas fa-shopping-cart',
  'FINTECH': 'fas fa-mobile-alt',
  'PRODUCTIVITY': 'fas fa-users',
  'HEALTHCARE': 'fas fa-heartbeat'
};

export function CaseStudyCard({ project }: CaseStudyCardProps) {
  const categoryColor = categoryColors[project.category as keyof typeof categoryColors] || 'text-electric-cyan';
  const categoryIcon = categoryIcons[project.category as keyof typeof categoryIcons] || 'fas fa-star';

  return (
    <div 
      className={`${project.gridSpan} glass-morphism rounded-3xl p-6 lg:p-8 hover-glow transition-all duration-500 group`}
      data-hover
    >
      {/* Placeholder for project image */}
      <div className="w-full h-48 lg:h-80 bg-gradient-to-br from-charcoal to-deep-black rounded-2xl mb-6 flex items-center justify-center border border-glass-border">
        <div className="text-center">
          <i className={`${categoryIcon} text-4xl ${categoryColor} mb-2`}></i>
          <p className="text-cool-gray text-sm">Project Visual</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className={`font-mono ${categoryColor} text-sm`}>
            {project.category} • {project.year}
          </span>
          <div className="flex space-x-2 flex-wrap">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 glass-morphism rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-electric-cyan transition-colors">
          {project.title}
        </h3>
        
        <p className="text-cool-gray leading-relaxed">
          {project.description}
        </p>

        {project.featured && project.metrics && (
          <div className="flex items-center justify-between pt-4 flex-wrap gap-4">
            <div className="flex space-x-4 text-sm text-cool-gray flex-wrap">
              {project.duration && <span>• {project.duration}</span>}
              {project.type && <span>• {project.type}</span>}
              {project.users && <span>• {project.users}</span>}
            </div>
            <div className="flex space-x-2">
              <i className="fab fa-figma text-electric-cyan"></i>
              <i className="fas fa-chart-line text-neon-pink"></i>
              <i className="fas fa-users text-neon-green"></i>
            </div>
          </div>
        )}

        {!project.featured && project.metrics && (
          <div className="flex justify-between items-center pt-2">
            <span className="text-neon-green text-sm font-medium">
              {project.metrics[0]}
            </span>
            <i className={`${categoryIcon} ${categoryColor}`}></i>
          </div>
        )}
      </div>
    </div>
  );
}

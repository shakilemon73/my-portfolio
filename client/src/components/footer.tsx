import { SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="py-12 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-electric-cyan mb-2">Shakil.design</div>
            <p className="text-cool-gray text-sm">
              © 2024 Shakil Ahmed Emon. Crafted with passion & precision.
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href={SOCIAL_LINKS.dribbble} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cool-gray hover:text-electric-cyan transition-colors" 
              data-hover
            >
              <i className="fab fa-dribbble text-xl"></i>
            </a>
            <a 
              href={SOCIAL_LINKS.behance} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cool-gray hover:text-neon-pink transition-colors" 
              data-hover
            >
              <i className="fab fa-behance text-xl"></i>
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cool-gray hover:text-neon-green transition-colors" 
              data-hover
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href={SOCIAL_LINKS.twitter} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cool-gray hover:text-electric-cyan transition-colors" 
              data-hover
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#', color: 'text-blue-400' },
    { name: 'Behance', icon: 'fab fa-behance', url: '#', color: 'text-blue-500' },
    { name: 'Dribbble', icon: 'fab fa-dribbble', url: '#', color: 'text-pink-400' },
    { name: 'Medium', icon: 'fab fa-medium', url: '#', color: 'text-gray-300' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#', color: 'text-blue-400' }
  ];

  const quickLinks = [
    { name: 'Portfolio', id: 'work' },
    { name: 'Process', id: 'process' },
    { name: 'About', id: 'about' },
    { name: 'Testimonials', id: 'testimonials' }
  ];

  return (
    <footer className="bg-gradient-to-br from-deep-black via-charcoal to-deep-black border-t border-glass-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-16 h-full">
          {Array.from({ length: 256 }).map((_, index) => (
            <div key={index} className="border border-electric-cyan animate-pulse"
                 style={{ animationDelay: `${index * 0.02}s`, animationDuration: '6s' }}></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-black text-white mb-2">
                  <span className="text-electric-cyan">Shakil</span> Ahmed Emon
                </h3>
                <p className="text-electric-cyan font-mono text-sm uppercase tracking-wider mb-4">
                  Senior UX/UI Product Designer
                </p>
                <p className="text-cool-gray leading-relaxed max-w-md">
                  Transforming complex business challenges into intuitive digital experiences that drive measurable results. 
                  <span className="text-white font-medium"> 6+ years</span> crafting user-centered solutions worldwide.
                </p>
              </div>

              {/* Status Badge */}
              <div className="mb-6">
                <Badge variant="outline" className="border-neon-green text-neon-green px-4 py-2 text-sm">
                  <i className="fas fa-circle mr-2 text-xs animate-pulse"></i>
                  Available for New Projects
                </Badge>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md">
                <div className="text-center glass-morphism rounded-lg p-3">
                  <div className="text-lg font-bold text-electric-cyan">50+</div>
                  <div className="text-xs text-cool-gray">Projects</div>
                </div>
                <div className="text-center glass-morphism rounded-lg p-3">
                  <div className="text-lg font-bold text-neon-pink">15</div>
                  <div className="text-xs text-cool-gray">Industries</div>
                </div>
                <div className="text-center glass-morphism rounded-lg p-3">
                  <div className="text-lg font-bold text-neon-green">99%</div>
                  <div className="text-xs text-cool-gray">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <i className="fas fa-link text-electric-cyan mr-3"></i>
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-cool-gray hover:text-electric-cyan transition-colors text-left min-h-[44px] flex items-center"
                    data-testid={`footer-link-${link.id}`}
                  >
                    <i className="fas fa-arrow-right mr-3 text-xs"></i>
                    {link.name}
                  </button>
                ))}
                <a
                  href="/case-studies"
                  className="block text-cool-gray hover:text-electric-cyan transition-colors min-h-[44px] flex items-center"
                  data-testid="footer-link-case-studies"
                >
                  <i className="fas fa-arrow-right mr-3 text-xs"></i>
                  Case Studies
                </a>
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center">
                <i className="fas fa-handshake text-neon-pink mr-3"></i>
                Let's Connect
              </h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:shakil@example.com"
                  className="flex items-center text-cool-gray hover:text-white transition-colors min-h-[44px]"
                  data-testid="footer-email"
                >
                  <i className="fas fa-envelope text-electric-cyan mr-3 min-w-[20px]"></i>
                  shakil@example.com
                </a>
                <div className="flex items-center text-cool-gray min-h-[44px]">
                  <i className="fas fa-clock text-neon-green mr-3 min-w-[20px]"></i>
                  Response within 2 hours
                </div>
                <div className="flex items-center text-cool-gray min-h-[44px]">
                  <i className="fas fa-globe text-neon-pink mr-3 min-w-[20px]"></i>
                  Global Remote • US/EU Time
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-cool-gray text-sm mb-3">Follow my work:</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 glass-morphism rounded-lg ${social.color} hover:scale-110 hover:bg-white/5 transition-all duration-300`}
                      title={social.name}
                      data-testid={`social-${social.name.toLowerCase()}`}
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-12 border-t border-glass-border">
          <div className="text-center">
            <div className="glass-morphism rounded-3xl p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to transform your digital experience?
              </h3>
              <p className="text-cool-gray mb-6">
                Let's create something amazing together. Get your project proposal within 24 hours.
              </p>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 mr-4"
                data-testid="footer-cta-contact"
              >
                <i className="fas fa-rocket mr-3"></i>
                Start Your Project
              </Button>
              <Button
                onClick={() => scrollToSection('work')}
                variant="outline"
                size="lg"
                className="glass-morphism border-glass-border text-white font-semibold px-8 py-4 rounded-full hover:border-electric-cyan hover:text-electric-cyan transition-all duration-300"
                data-testid="footer-cta-portfolio"
              >
                <i className="fas fa-eye mr-3"></i>
                View Portfolio
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-glass-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-cool-gray text-sm">
              © {currentYear} Shakil Ahmed Emon. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-cool-gray text-sm">
              <a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors min-h-[44px] flex items-center">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="hover:text-electric-cyan transition-colors min-h-[44px] flex items-center"
                data-testid="scroll-to-top"
              >
                <i className="fas fa-arrow-up mr-2"></i>
                Back to Top
              </button>
            </div>
          </div>
        </div>

        {/* Performance Badge */}
        <div className="absolute bottom-4 right-4 opacity-60 hover:opacity-100 transition-opacity">
          <div className="text-xs text-cool-gray glass-morphism rounded-lg px-3 py-2">
            <i className="fas fa-tachometer-alt text-electric-cyan mr-2"></i>
            Built for Performance & Accessibility
          </div>
        </div>
      </div>
    </footer>
  );
}
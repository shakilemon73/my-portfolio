import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FAANG_PORTFOLIO_DATA } from '@/lib/faang-portfolio-data';
import { 
  ArrowUp, 
  Calendar, 
  Mail, 
  MapPin, 
  Clock,
  ExternalLink,
  Linkedin,
  Github,
  Dribbble,
  Twitter,
  Download,
  Eye,
  User,
  Code,
  Briefcase,
  MessageCircle,
  Heart,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear();
  const { name, email, location, experience_summary } = FAANG_PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleStartProject = () => {
    const subject = "New Project Inquiry";
    const body = "Hi Shakil, I'm interested in starting a project with you. Let's discuss the details.";
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  // Real social links with proper URLs
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://linkedin.com/in/shakil-ahmed-emon', 
      color: 'text-blue-400',
      external: true
    },
    { 
      name: 'Behance', 
      icon: Briefcase, 
      url: 'https://behance.net/shakilemon', 
      color: 'text-blue-500',
      external: true
    },
    { 
      name: 'Dribbble', 
      icon: Dribbble, 
      url: 'https://dribbble.com/shakilemon', 
      color: 'text-pink-400',
      external: true
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: 'https://twitter.com/shakilemon', 
      color: 'text-blue-400',
      external: true
    }
  ];

  const quickLinks = [
    { name: 'Portfolio', id: 'work', icon: Eye },
    { name: 'Process', id: 'process', icon: Code },
    { name: 'About', id: 'about', icon: User },
    { name: 'Resume', id: 'resume', icon: Download },
    { name: 'Testimonials', id: 'testimonials', icon: MessageCircle }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: email,
      action: () => window.open(`mailto:${email}`)
    },
    {
      icon: MapPin,
      label: 'Location',
      value: location,
      action: null
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '24 hours',
      action: null
    },
    {
      icon: Globe,
      label: 'Timezone',
      value: 'GMT+6 (Bangladesh)',
      action: null
    }
  ];

  return (
    <footer 
      className="bg-gradient-to-br from-deep-black via-charcoal to-deep-black border-t border-glass-border relative"
      role="contentinfo"
      aria-label="Site footer with contact information and navigation"
    >
      {/* Lightweight Background - Replaces heavy grid */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-charcoal/50 to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* About Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-3xl font-black text-white mb-3" data-testid="text-footer-name">
                  <span className="text-electric-cyan">{name.split(' ')[0]}</span> {name.split(' ')[1]} {name.split(' ')[2]}
                </h3>
                <p className="text-electric-cyan font-mono text-sm uppercase tracking-wider mb-4" data-testid="text-footer-title">
                  Senior UX/UI Product Designer
                </p>
                <p className="text-cool-gray leading-relaxed max-w-md mb-6" data-testid="text-footer-description">
                  Transforming complex business challenges into intuitive digital experiences that drive measurable results. 
                  <span className="text-white font-medium"> 7+ years</span> crafting user-centered solutions for global clients.
                </p>
              </div>

              {/* Status and Achievements */}
              <div className="space-y-4">
                <Badge 
                  variant="outline" 
                  className="border-neon-green text-neon-green px-4 py-2 text-sm min-h-[48px] min-w-[48px]"
                  data-testid="badge-footer-available"
                >
                  <div className="w-3 h-3 bg-neon-green rounded-full mr-3 animate-pulse"></div>
                  Available for New Projects
                </Badge>
                
                <div className="flex flex-wrap gap-3">
                  <Badge 
                    variant="outline" 
                    className="border-electric-cyan/50 text-electric-cyan px-3 py-2 text-xs"
                    data-testid="badge-footer-certified"
                  >
                    <Shield className="w-3 h-3 mr-2" />
                    Google UX Certified
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className="border-neon-pink/50 text-neon-pink px-3 py-2 text-xs"
                    data-testid="badge-footer-fast"
                  >
                    <Zap className="w-3 h-3 mr-2" />
                    Fast 24h Response
                  </Badge>
                </div>
              </div>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6" data-testid="text-footer-nav-title">
                Quick Links
              </h4>
              <nav className="space-y-3" role="navigation" aria-label="Footer navigation">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center text-cool-gray hover:text-electric-cyan transition-all duration-300 min-h-[48px] w-full text-left group"
                    data-testid={`link-footer-${link.name.toLowerCase()}`}
                    aria-label={`Navigate to ${link.name} section`}
                  >
                    <link.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6" data-testid="text-footer-contact-title">
                Get In Touch
              </h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 ${contact.action ? 'cursor-pointer hover:text-electric-cyan' : ''} transition-colors duration-300 min-h-[48px]`}
                    onClick={contact.action || undefined}
                    data-testid={`contact-${contact.label.toLowerCase().replace(' ', '-')}`}
                  >
                    <contact.icon className="w-5 h-5 text-electric-cyan mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-sm text-cool-gray">{contact.label}</div>
                      <div className="text-white font-medium">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="text-sm font-semibold text-white mb-4" data-testid="text-footer-social-title">
                  Follow My Work
                </h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target={social.external ? '_blank' : '_self'}
                      rel={social.external ? 'noopener noreferrer' : undefined}
                      className={`flex items-center justify-center w-12 h-12 rounded-lg glass-morphism border border-glass-border ${social.color} hover:scale-110 hover:border-electric-cyan transition-all duration-300 min-h-[48px] min-w-[48px]`}
                      aria-label={`Visit ${social.name} profile`}
                      data-testid={`link-social-${social.name.toLowerCase()}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with CTA */}
        <div className="py-8 border-t border-glass-border">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Conversion CTA */}
            <div className="text-center lg:text-left">
              <h4 className="text-xl font-bold text-white mb-2" data-testid="text-footer-cta-title">
                Ready to start your next project?
              </h4>
              <p className="text-cool-gray text-sm mb-4" data-testid="text-footer-cta-description">
                Let's create something amazing together. Get in touch and let's discuss your vision.
              </p>
              <Button
                onClick={handleStartProject}
                size="lg"
                className="bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 min-h-[48px]"
                data-testid="button-footer-start-project"
                aria-label="Start a new project - Contact Shakil Ahmed"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Start a Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="lg"
              className="glass-morphism border-glass-border text-white hover:border-electric-cyan hover:text-electric-cyan transition-all duration-300 min-h-[48px] min-w-[48px]"
              data-testid="button-back-to-top"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-5 h-5 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="py-6 border-t border-glass-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-cool-gray">
            <div className="flex items-center space-x-2" data-testid="text-footer-copyright">
              <Heart className="w-4 h-4 text-neon-pink" />
              <span>© {currentYear} {name}. Crafted with passion in {location}.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="flex items-center" data-testid="text-footer-accessibility">
                <Shield className="w-4 h-4 mr-2 text-electric-cyan" />
                WCAG AA Compliant
              </span>
              <span className="flex items-center" data-testid="text-footer-performance">
                <Zap className="w-4 h-4 mr-2 text-neon-green" />
                Optimized Performance
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
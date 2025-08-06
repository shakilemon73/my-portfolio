import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { PORTFOLIO_DATA } from '@/lib/constants';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default"
      });
      setFormData({ name: '', email: '', company: '', project: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-cool-gray">
            Ready to create something amazing together? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-morphism rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-electric-cyan">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <i className="fas fa-envelope text-electric-cyan text-xl"></i>
                  <span>{PORTFOLIO_DATA.email}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fab fa-linkedin text-neon-pink text-xl"></i>
                  <span>/in/shakil-ahmed-emon</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fab fa-behance text-neon-green text-xl"></i>
                  <span>/shakil-design</span>
                </div>
                <div className="flex items-center space-x-4">
                  <i className="fas fa-map-marker-alt text-electric-cyan text-xl"></i>
                  <span>Available for remote work globally</span>
                </div>
              </div>
            </div>
            
            <div className="glass-morphism rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-4">What I'm Looking For</h4>
              <ul className="space-y-2 text-cool-gray">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-neon-green text-sm"></i>
                  <span>Senior UX/UI Design roles</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-neon-green text-sm"></i>
                  <span>Design consultation projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-neon-green text-sm"></i>
                  <span>Collaborative design opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check text-neon-green text-sm"></i>
                  <span>Speaking at design events</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-morphism rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-glass-border rounded-xl focus:outline-none focus:border-electric-cyan transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-glass-border rounded-xl focus:outline-none focus:border-electric-cyan transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <Input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="w-full px-4 py-3 bg-charcoal border border-glass-border rounded-xl focus:outline-none focus:border-electric-cyan transition-colors"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium mb-2">Project Type</label>
                <Select onValueChange={(value) => handleInputChange('project', value)}>
                  <SelectTrigger className="w-full px-4 py-3 bg-charcoal border border-glass-border rounded-xl focus:outline-none focus:border-electric-cyan transition-colors">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-charcoal border-glass-border">
                    <SelectItem value="web-design">Web Design</SelectItem>
                    <SelectItem value="mobile-app">Mobile App</SelectItem>
                    <SelectItem value="design-system">Design System</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-glass-border rounded-xl focus:outline-none focus:border-electric-cyan transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-semibold rounded-xl hover-glow transition-all duration-300"
                data-hover
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

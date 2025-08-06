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

  // UX Enhancement: Error Prevention & User Feedback (Alan Cooper + Susan Weinschenk)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    const inputs = document.querySelectorAll('.error-state');
    inputs.forEach(input => input.classList.remove('error-state'));
    
    let hasErrors = false;
    
    // Validate required fields with specific feedback
    if (!formData.name.trim()) {
      const nameInput = document.getElementById('name');
      nameInput?.classList.add('error-state');
      hasErrors = true;
    }
    
    if (!formData.email.trim()) {
      const emailInput = document.getElementById('email');
      emailInput?.classList.add('error-state');
      hasErrors = true;
    }
    
    if (!formData.message.trim()) {
      const messageInput = document.getElementById('message');
      messageInput?.classList.add('error-state');
      hasErrors = true;
    }
    
    if (hasErrors) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked in red.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission with realistic timing
    setTimeout(() => {
      // Success feedback with clear next steps
      toast({
        title: "Message Sent Successfully! ✓",
        description: "Thank you for reaching out. I'll respond within 24 hours with next steps.",
        variant: "default"
      });
      
      // Mark form as successful
      const form = document.querySelector('form');
      if (form) form.classList.add('success-state');
      
      setFormData({ name: '', email: '', company: '', project: '', message: '' });
      setIsSubmitting(false);
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        form?.classList.remove('success-state');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* UX Enhancement: Clear Purpose & Emotional Connection (Aarron Walter) */}
          <h2 className="text-4xl sm:text-6xl font-black mb-6 text-white">
            Ready to <span className="text-gradient">Transform</span> Your Product?
          </h2>
          <p className="text-xl text-cool-gray">
            Let's turn your complex challenges into breakthrough user experiences that drive real business results.
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
              {/* UX Enhancement: Form Simplicity & Clear Labels (Luke Wroblewski) */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">Name *</label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-glass-border rounded-xl focus:outline-none focus:border-electric-cyan focus:ring-2 focus:ring-electric-cyan/30 transition-all duration-300 min-h-[44px] text-white"
                  placeholder="Your full name"
                  aria-describedby="name-help"
                  data-testid="input-name"
                />
                <div id="name-help" className="sr-only">Enter your full name for contact purposes</div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">Email *</label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-glass-border rounded-xl focus:outline-none focus:border-electric-cyan focus:ring-2 focus:ring-electric-cyan/30 transition-all duration-300 min-h-[44px] text-white"
                  placeholder="your.email@example.com"
                  aria-describedby="email-help"
                  data-testid="input-email"
                />
                <div id="email-help" className="sr-only">Enter your email address for follow-up communication</div>
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
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">Message *</label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-charcoal border border-glass-border rounded-xl focus:outline-none focus:border-electric-cyan focus:ring-2 focus:ring-electric-cyan/30 transition-all duration-300 min-h-[120px] text-white resize-none"
                  placeholder="Tell me about your project, challenges, and goals..."
                  aria-describedby="message-help"
                  data-testid="textarea-message"
                />
                <div id="message-help" className="sr-only">Describe your project requirements, challenges, and objectives</div>
              </div>
              
              {/* UX Enhancement: Clear Submit Action with Loading State (Alan Cooper - Forgiveness) */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-semibold rounded-xl hover-glow transition-all duration-300 min-h-[44px] focus:ring-4 focus:ring-electric-cyan/30 active:scale-98 ${isSubmitting ? 'loading-state' : ''}`}
                data-hover
                aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
                data-testid="button-submit"
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

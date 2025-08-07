import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function WorldClassContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const projectTypes = [
    'Web Application Design',
    'Mobile App Design',
    'Design System Creation',
    'UX Research & Strategy',
    'Product Redesign',
    'Startup MVP',
    'Other'
  ];

  const budgetRanges = [
    '$5K - $15K',
    '$15K - $30K',
    '$30K - $50K',
    '$50K - $100K',
    '$100K+',
    'Let\'s discuss'
  ];

  const timelines = [
    '2-4 weeks',
    '1-2 months',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-deep-black via-charcoal to-deep-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 144 }).map((_, index) => (
            <div key={index} className="border border-neon-pink animate-pulse"
                 style={{ animationDelay: `${index * 0.05}s`, animationDuration: '4s' }}></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 glass-morphism rounded-full mb-6">
            <i className="fas fa-rocket text-neon-green text-xl mr-3"></i>
            <span className="text-neon-green font-mono text-sm uppercase tracking-wider">Ready to Transform Your Product?</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">Let's Create</span>
            <span className="block bg-gradient-to-r from-neon-green via-electric-cyan to-neon-pink bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>

          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            Transform your digital experience with user-centered design that drives 
            <span className="text-electric-cyan font-semibold"> measurable results</span>. 
            Let's discuss your vision and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <i className="fas fa-bolt text-electric-cyan mr-3"></i>
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-neon-pink mr-3 min-w-[20px]"></i>
                    <a href="mailto:shakil@example.com" 
                       className="text-cool-gray hover:text-white transition-colors"
                       data-testid="email-contact">
                      shakil@example.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <i className="fab fa-linkedin text-electric-cyan mr-3 min-w-[20px]"></i>
                    <a href="#" 
                       className="text-cool-gray hover:text-white transition-colors"
                       data-testid="linkedin-contact">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center">
                    <i className="fab fa-behance text-neon-pink mr-3 min-w-[20px]"></i>
                    <a href="#" 
                       className="text-cool-gray hover:text-white transition-colors"
                       data-testid="behance-contact">
                      Behance Portfolio
                    </a>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-calendar text-neon-green mr-3 min-w-[20px]"></i>
                    <a href="#" 
                       className="text-cool-gray hover:text-white transition-colors"
                       data-testid="calendar-contact">
                      Schedule a Call
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="glass-morphism border-glass-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <i className="fas fa-clock text-neon-green mr-3"></i>
                  Availability
                </h3>
                <div className="space-y-3">
                  <Badge variant="outline" className="border-neon-green text-neon-green w-full justify-center py-2">
                    <i className="fas fa-circle mr-2 text-xs animate-pulse"></i>
                    Currently Available
                  </Badge>
                  <p className="text-cool-gray text-sm">
                    Taking on new projects starting February 2025
                  </p>
                  <div className="text-xs text-cool-gray">
                    <div className="flex justify-between mb-1">
                      <span>Response Time:</span>
                      <span className="text-electric-cyan">Within 2 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time Zone:</span>
                      <span className="text-electric-cyan">US EST / EU CET</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Preview */}
            <Card className="glass-morphism border-glass-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <i className="fas fa-route text-neon-pink mr-3"></i>
                  What Happens Next?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-electric-cyan rounded-full flex items-center justify-center text-deep-black text-xs font-bold mr-3 mt-0.5">1</div>
                    <div>
                      <div className="text-sm font-medium text-white">Discovery Call</div>
                      <div className="text-xs text-cool-gray">We'll discuss your project goals and requirements</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-neon-pink rounded-full flex items-center justify-center text-deep-black text-xs font-bold mr-3 mt-0.5">2</div>
                    <div>
                      <div className="text-sm font-medium text-white">Proposal & Timeline</div>
                      <div className="text-xs text-cool-gray">Detailed project scope and timeline within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-neon-green rounded-full flex items-center justify-center text-deep-black text-xs font-bold mr-3 mt-0.5">3</div>
                    <div>
                      <div className="text-sm font-medium text-white">Project Kickoff</div>
                      <div className="text-xs text-cool-gray">Begin with user research and strategy</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="glass-morphism border-glass-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Tell Me About Your Project</h3>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-neon-green/20 border border-neon-green rounded-lg">
                    <div className="flex items-center text-neon-green">
                      <i className="fas fa-check-circle mr-3"></i>
                      <span>Message sent successfully! I'll respond within 2 hours.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-cool-gray mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="glass-morphism border-glass-border focus:border-electric-cyan text-white"
                        placeholder="John Doe"
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-cool-gray mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="glass-morphism border-glass-border focus:border-electric-cyan text-white"
                        placeholder="john@company.com"
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-cool-gray mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="glass-morphism border-glass-border focus:border-electric-cyan text-white"
                      placeholder="Your Company Name"
                      data-testid="input-company"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-cool-gray mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                        className="w-full glass-morphism border-glass-border focus:border-electric-cyan text-white bg-charcoal rounded-md px-3 py-2"
                        data-testid="select-project-type"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-cool-gray mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                        className="w-full glass-morphism border-glass-border focus:border-electric-cyan text-white bg-charcoal rounded-md px-3 py-2"
                        data-testid="select-timeline"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-cool-gray mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full glass-morphism border-glass-border focus:border-electric-cyan text-white bg-charcoal rounded-md px-3 py-2"
                      data-testid="select-budget"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-cool-gray mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="glass-morphism border-glass-border focus:border-electric-cyan text-white resize-none"
                      placeholder="Tell me about your project goals, target users, current challenges, and what success looks like to you..."
                      rows={5}
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-bold py-4 rounded-full hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:scale-100"
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner animate-spin mr-3"></i>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane mr-3"></i>
                        Send Message & Get Proposal
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-cool-gray text-center">
                    I typically respond within 2 hours during business hours (9 AM - 6 PM EST)
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
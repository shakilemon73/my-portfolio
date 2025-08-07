import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
  projectType: string;
  results: string;
  industry: string;
  featured: boolean;
  linkedIn?: string;
}

export function EnhancedTestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'VP of Product',
      company: 'TechFlow Solutions',
      image: 'SC',
      content: 'Shakil\'s approach to UX design is methodical yet creative. He delivered a 40% increase in user engagement and reduced our support tickets by 60%. His ability to translate complex business requirements into intuitive user experiences is exceptional.',
      rating: 5,
      projectType: 'Enterprise SaaS Redesign',
      results: '40% ↑ engagement, 60% ↓ support tickets',
      industry: 'B2B SaaS',
      featured: true,
      linkedIn: '#'
    },
    {
      id: '2',
      name: 'Marcus Rodriguez',
      role: 'Chief Technology Officer',
      company: 'FinanceCore',
      image: 'MR',
      content: 'Working with Shakil was transformative for our fintech platform. His user research uncovered critical pain points that resulted in a 75% improvement in task completion rates. He\'s a strategic partner, not just a designer.',
      rating: 5,
      projectType: 'Fintech Mobile App',
      results: '75% ↑ task completion, 45% ↓ abandonment',
      industry: 'Financial Technology',
      featured: true,
      linkedIn: '#'
    },
    {
      id: '3',
      name: 'Emily Watson',
      role: 'Head of Digital Experience',
      company: 'HealthTech Innovations',
      image: 'EW',
      content: 'Shakil\'s healthcare app design exceeded all expectations. Patient satisfaction scores increased by 85%, and our clinicians report 50% faster workflow completion. His attention to accessibility and compliance was outstanding.',
      rating: 5,
      projectType: 'Healthcare Platform',
      results: '85% ↑ satisfaction, 50% ↑ workflow speed',
      industry: 'Healthcare',
      featured: true,
      linkedIn: '#'
    },
    {
      id: '4',
      name: 'David Kim',
      role: 'Product Manager',
      company: 'EduStream',
      image: 'DK',
      content: 'The e-learning platform Shakil designed achieved a 95% course completion rate - industry leading. His user-centered approach and iterative testing process ensured every feature served a real user need.',
      rating: 5,
      projectType: 'EdTech Platform',
      results: '95% completion rate, 3x engagement',
      industry: 'Education Technology',
      featured: false,
      linkedIn: '#'
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      role: 'Director of UX',
      company: 'RetailMax',
      image: 'LT',
      content: 'Shakil led our e-commerce redesign that resulted in a 120% increase in conversion rates. His understanding of user psychology and shopping behaviors is remarkable. ROI was achieved within 3 months.',
      rating: 5,
      projectType: 'E-commerce Redesign',
      results: '120% ↑ conversions, 3-month ROI',
      industry: 'E-commerce',
      featured: false,
      linkedIn: '#'
    },
    {
      id: '6',
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      company: 'GreenTech Startup',
      image: 'AJ',
      content: 'As a startup, we needed someone who could move fast without sacrificing quality. Shakil delivered a complete product experience in 8 weeks that helped us secure Series A funding. His impact was immediate.',
      rating: 5,
      projectType: 'Startup MVP',
      results: 'Series A funding secured, 200% ↑ signups',
      industry: 'Clean Technology',
      featured: false,
      linkedIn: '#'
    }
  ];

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-deep-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 64 }).map((_, index) => (
            <div key={index} className="border border-electric-cyan animate-pulse" 
                 style={{ animationDelay: `${index * 0.1}s`, animationDuration: '3s' }}></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 glass-morphism rounded-full mb-6">
            <i className="fas fa-quote-left text-neon-pink text-xl mr-3"></i>
            <span className="text-neon-pink font-mono text-sm uppercase tracking-wider">Client Success Stories</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            <span className="block text-white">What Clients</span>
            <span className="block bg-gradient-to-r from-neon-pink via-electric-cyan to-neon-green bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>

          <p className="text-xl text-cool-gray max-w-3xl mx-auto leading-relaxed">
            Real results from <span className="text-electric-cyan font-semibold">Fortune 500 companies</span> and 
            <span className="text-neon-pink font-semibold"> innovative startups</span> who trusted me with their most important projects
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <Card className="glass-morphism border-glass-border hover:border-neon-pink transition-all duration-500 max-w-4xl mx-auto">
            <CardContent className="p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Client Info */}
                <div className="text-center lg:text-left">
                  <div className="w-20 h-20 mx-auto lg:mx-0 mb-4 bg-gradient-to-br from-neon-pink to-electric-cyan rounded-full flex items-center justify-center text-deep-black text-xl font-bold">
                    {testimonials[activeTestimonial].image}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-electric-cyan font-medium mb-1">
                    {testimonials[activeTestimonial].role}
                  </p>
                  <p className="text-cool-gray text-sm mb-3">
                    {testimonials[activeTestimonial].company}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start gap-1 mb-3">
                    {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                      <i key={i} className="fas fa-star text-neon-green text-sm"></i>
                    ))}
                  </div>
                  
                  {/* LinkedIn Badge */}
                  {testimonials[activeTestimonial].linkedIn && (
                    <Badge variant="outline" className="border-electric-cyan text-electric-cyan text-xs">
                      <i className="fab fa-linkedin mr-1"></i>
                      Verified on LinkedIn
                    </Badge>
                  )}
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <i className="fas fa-quote-left text-4xl text-neon-pink opacity-20 absolute -top-2 -left-2"></i>
                    <p className="text-white text-lg leading-relaxed mb-6 relative z-10">
                      {testimonials[activeTestimonial].content}
                    </p>
                  </div>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="glass-morphism rounded-lg p-4">
                      <div className="text-xs text-cool-gray uppercase tracking-wider mb-1">Project Type</div>
                      <div className="text-sm font-medium text-electric-cyan">
                        {testimonials[activeTestimonial].projectType}
                      </div>
                    </div>
                    <div className="glass-morphism rounded-lg p-4">
                      <div className="text-xs text-cool-gray uppercase tracking-wider mb-1">Results Achieved</div>
                      <div className="text-sm font-medium text-neon-green">
                        {testimonials[activeTestimonial].results}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={() => setAutoplay(false)}
              className="text-cool-gray hover:text-electric-cyan transition-colors min-h-[44px] px-4"
              data-testid="button-pause-testimonials"
            >
              <i className={`fas ${autoplay ? 'fa-pause' : 'fa-play'}`}></i>
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTestimonial(index);
                    setAutoplay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                    index === activeTestimonial
                      ? 'bg-electric-cyan scale-125'
                      : 'bg-glass-border hover:bg-cool-gray'
                  }`}
                  data-testid={`testimonial-nav-${index}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Wall of Love - Additional Testimonials */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-white mb-8">More Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.filter(t => !t.featured).map((testimonial, index) => (
              <Card key={testimonial.id} className="glass-morphism border-glass-border hover:border-electric-cyan transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-full flex items-center justify-center text-deep-black text-sm font-bold mr-3">
                      {testimonial.image}
                    </div>
                    <div>
                      <h5 className="font-semibold text-white text-sm">{testimonial.name}</h5>
                      <p className="text-cool-gray text-xs">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white text-sm mb-3 line-clamp-3 group-hover:line-clamp-none transition-all">
                    {testimonial.content}
                  </p>
                  <div className="text-xs text-electric-cyan">
                    {testimonial.results}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-morphism rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to be the next success story?
            </h3>
            <p className="text-cool-gray mb-6">
              Let's discuss how I can help transform your digital experience and drive measurable business results.
            </p>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="bg-gradient-to-r from-neon-pink to-electric-cyan text-deep-black font-bold px-8 py-4 rounded-full hover:scale-105 transition-all duration-300"
              data-testid="button-start-project-testimonials"
            >
              <i className="fas fa-handshake mr-3"></i>
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
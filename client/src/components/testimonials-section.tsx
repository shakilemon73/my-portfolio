import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp Inc.",
    avatar: "SC",
    content: "Shakil's design thinking transformed our user experience. His research-driven approach led to a 40% increase in user engagement.",
    project: "ShopFlow Dashboard",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "StartupXYZ",
    avatar: "MR",
    content: "Working with Shakil was exceptional. He delivered a fintech app that exceeded our expectations and user feedback has been outstanding.",
    project: "PaySecure Mobile",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Emily Johnson",
    role: "Chief Medical Officer",
    company: "HealthTech Solutions",
    avatar: "EJ",
    content: "Shakil created a patient portal that's both secure and incredibly user-friendly. The compliance with HIPAA standards was flawless.",
    project: "MediConnect Portal",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[currentTestimonial];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-6xl font-black mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-cool-gray">
            What clients say about working with me
          </p>
        </div>

        <div className="glass-morphism rounded-3xl p-8 lg:p-12 hover-glow transition-all duration-500">
          <div className="mb-8">
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <i key={i} className="fas fa-star text-neon-pink text-xl mx-1"></i>
              ))}
            </div>
            <blockquote className="text-xl lg:text-2xl leading-relaxed text-cool-gray mb-8">
              "{testimonial.content}"
            </blockquote>
          </div>

          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-neon-pink rounded-full flex items-center justify-center text-deep-black font-bold text-xl">
              {testimonial.avatar}
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              <p className="text-electric-cyan text-sm">{testimonial.role}</p>
              <p className="text-cool-gray text-sm">{testimonial.company}</p>
            </div>
          </div>

          <div className="text-sm text-cool-gray">
            Project: <span className="text-neon-green">{testimonial.project}</span>
          </div>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-electric-cyan'
                  : 'bg-charcoal hover:bg-cool-gray'
              }`}
              data-hover
            />
          ))}
        </div>
      </div>
    </section>
  );
}
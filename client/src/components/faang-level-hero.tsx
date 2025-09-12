import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, MessageCircle, ArrowRight, MapPin, Clock, Figma, TrendingUp, Users, ChevronDown } from 'lucide-react';
import { profileImage, profileAlt } from '@/lib/profile';

export function FaangLevelHero() {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <section id="home" className="hero-grid-section min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Professional Grid Background - Similar to emonfinance.art */}
      <div className="absolute inset-0 hero-grid-background">
        {/* Main Grid Pattern */}
        <div className="absolute inset-0 hero-main-grid"></div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 hero-grid-overlay"></div>

        {/* Gradient Accent */}
        <div className="absolute inset-0 hero-gradient-accent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            {/* Designer Badge */}
            <div className="mb-6">
              <Badge variant="outline" className="glass-morphism border-electric-cyan text-electric-cyan font-medium px-4 py-2">
                Senior UX/UI Product Designer
              </Badge>
            </div>

            {/* Value Proposition Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">
              Design leader for data-heavy SaaS.
              <span className="text-electric-cyan"> I turn complexity into measurable outcomes.</span>
            </h1>

            {/* Supporting Subhead */}
            <p className="text-xl text-cool-gray mb-4 max-w-2xl">
              25M+ users, 150+ projects, 99% CSAT across Fortune 500 and YC-backed startups
            </p>

            {/* Designer Credit */}
            <p className="text-sm text-cool-gray/70 mb-8">
              Shakil Ahmed Emon • Available for New Projects
            </p>

            {/* Call to Action Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Primary CTA */}
              <Button
                onClick={() => scrollToSection('work')}
                className="bg-electric-cyan hover:bg-electric-cyan/90 text-slate-900 font-semibold px-8 py-4 h-14 min-w-[200px] rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-electric-cyan/25 group"
                data-testid="button-view-case-studies"
              >
                <Eye className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
                View Case Studies
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>

              {/* Secondary CTA */}
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-slate-900 font-semibold px-8 py-4 h-14 min-w-[180px] rounded-xl transition-all duration-300 group"
                data-testid="button-contact"
              >
                <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" aria-hidden="true" />
                Contact Me
              </Button>
            </div>

            {/* Social Proof - Client Trust Indicators */}
            <div className="mb-8" data-testid="section-social-proof">
              <p className="text-xs text-cool-gray/60 mb-4 font-medium tracking-wide">
                TRUSTED BY LEADING COMPANIES
              </p>
              <ul className="flex flex-wrap items-center gap-6 opacity-70" aria-label="Trusted by leading companies">
                <li className="text-cool-gray/70 text-sm font-medium" data-testid="text-trust-fortune500">
                  Fortune 500
                </li>
                <li className="w-1 h-1 bg-cool-gray/30 rounded-full" aria-hidden="true" role="presentation"></li>
                <li className="text-cool-gray/70 text-sm font-medium" data-testid="text-trust-yc">
                  Y Combinator
                </li>
                <li className="w-1 h-1 bg-cool-gray/30 rounded-full" aria-hidden="true" role="presentation"></li>
                <li className="text-cool-gray/70 text-sm font-medium" data-testid="text-trust-startups">
                  Series A-C Startups
                </li>
                <li className="w-1 h-1 bg-cool-gray/30 rounded-full" aria-hidden="true" role="presentation"></li>
                <li className="text-cool-gray/70 text-sm font-medium" data-testid="text-trust-global">
                  Global Brands
                </li>
              </ul>
            </div>

            {/* Professional Links */}
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-cool-gray">
                <MapPin className="w-4 h-4 text-electric-cyan" aria-hidden="true" />
                <span>Available Globally (Remote)</span>
              </div>
              <div className="flex items-center space-x-2 text-cool-gray">
                <Clock className="w-4 h-4 text-electric-cyan" aria-hidden="true" />
                <span>Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Showcase */}
          <div className="space-y-6">
            {/* Main Professional Image */}
            <div className="relative">
              <div className="w-full h-96 lg:h-[520px] bg-gradient-to-br from-charcoal via-deep-black to-charcoal rounded-3xl shadow-2xl relative overflow-hidden border border-glass-border">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10 z-0">
                  <div className="grid grid-cols-8 h-full">
                    {Array.from({ length: 64 }).map((_, index) => (
                      <div
                        key={index}
                        className="border border-electric-cyan opacity-20"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Professional Headshot */}
                <img
                  src={profileImage}
                  alt={profileAlt}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl z-10"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width={1200}
                  height={900}
                  data-testid="img-headshot-hero"
                />

                {/* Removed floating elements to reduce visual noise and focus on primary CTAs */}
              </div>
            </div>
          </div>
        </div>

        {/* Impact Metrics - Moved below the fold */}
        <div className="mt-16 pt-12 border-t border-glass-border">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">Proven Impact</h3>
            <p className="text-cool-gray text-sm">Quantified results across 6+ years</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="glass-morphism rounded-xl p-4 text-center hover-glow transition-all duration-300">
              <div className="text-2xl font-bold text-electric-cyan">150+</div>
              <div className="text-xs text-cool-gray">Projects Delivered</div>
            </div>
            <div className="glass-morphism rounded-xl p-4 text-center hover-glow transition-all duration-300">
              <div className="text-2xl font-bold text-electric-cyan">99%</div>
              <div className="text-xs text-cool-gray">Client Satisfaction</div>
            </div>
            <div className="glass-morphism rounded-xl p-4 text-center hover-glow transition-all duration-300">
              <div className="text-2xl font-bold text-electric-cyan">25M+</div>
              <div className="text-xs text-cool-gray">User Interactions</div>
            </div>
            <div className="glass-morphism rounded-xl p-4 text-center hover-glow transition-all duration-300">
              <div className="text-2xl font-bold text-electric-cyan">92%</div>
              <div className="text-xs text-cool-gray">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-8 opacity-50 hover:opacity-100 transition-opacity">
          <ChevronDown className="w-6 h-6 text-electric-cyan" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
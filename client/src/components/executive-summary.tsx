import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Award,
  Target,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { slideUp, staggerChildren, fadeIn } from '@/lib/framer-variants';
import { useScrollAnimation } from '@/hooks/use-scroll-animations';

interface ExecutiveSummaryProps {
  businessContext: string;
  userProblem: string;
  solution: string;
  impact: Array<{
    metric: string;
    value: string;
    change: string;
    timeframe: string;
  }>;
}

export function ExecutiveSummary({
  businessContext,
  userProblem,
  solution,
  impact
}: ExecutiveSummaryProps) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const getImpactIcon = (metric: string) => {
    if (metric.toLowerCase().includes('revenue') || metric.toLowerCase().includes('cost')) {
      return DollarSign;
    }
    if (metric.toLowerCase().includes('user') || metric.toLowerCase().includes('satisfaction')) {
      return Users;
    }
    if (metric.toLowerCase().includes('efficiency') || metric.toLowerCase().includes('speed')) {
      return Zap;
    }
    return TrendingUp;
  };

  const getImpactColor = (change: string) => {
    const value = parseFloat(change.replace(/[^0-9.-]/g, ''));
    if (value > 0) return 'text-emerald-500';
    if (value < 0) return 'text-red-500';
    return 'text-primary';
  };

  return (
    <section ref={ref} className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerChildren}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            variants={slideUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              Executive Summary
            </div>
            <h2 className="text-h1 font-bold text-foreground mb-6">
              Business Impact & Results
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of the strategic context, challenges addressed, 
              and measurable business outcomes achieved through design excellence.
            </p>
          </motion.div>

          {/* Three-Column Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Business Context */}
            <motion.div
              variants={slideUp}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Target size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-h3 font-semibold text-foreground">
                    Business Context
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Strategic Foundation
                  </p>
                </div>
              </div>
              <p className="text-body text-muted-foreground leading-relaxed">
                {businessContext}
              </p>
            </motion.div>

            {/* User Problem */}
            <motion.div
              variants={slideUp}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-lg">
                  <Users size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-h3 font-semibold text-foreground">
                    User Problem
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Core Challenge
                  </p>
                </div>
              </div>
              <p className="text-body text-muted-foreground leading-relaxed">
                {userProblem}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              variants={slideUp}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <CheckCircle size={24} className="text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-h3 font-semibold text-foreground">
                    Design Solution
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Strategic Response
                  </p>
                </div>
              </div>
              <p className="text-body text-muted-foreground leading-relaxed">
                {solution}
              </p>
            </motion.div>
          </div>

          {/* Impact Metrics Grid */}
          <motion.div
            variants={slideUp}
            className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-h2 font-bold text-foreground mb-4">
                Measurable Impact
              </h3>
              <p className="text-body-lg text-muted-foreground">
                Quantified results demonstrating the business value of design decisions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impact.map((metric, index) => {
                const IconComponent = getImpactIcon(metric.metric);
                return (
                  <motion.div
                    key={index}
                    variants={slideUp}
                    className="bg-card border border-border rounded-xl p-6 text-center group hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent size={24} className="text-primary" />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="text-h2 font-bold text-foreground mb-1">
                        {metric.value}
                      </div>
                      <div className={`text-sm font-medium ${getImpactColor(metric.change)}`}>
                        {metric.change}
                      </div>
                    </div>
                    
                    <div className="text-sm font-medium text-foreground mb-2">
                      {metric.metric}
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      {metric.timeframe}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Key Insights */}
          <motion.div
            variants={slideUp}
            className="mt-16 bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-h3 font-bold text-foreground mb-2">
                  Key Strategic Insights
                </h3>
                <p className="text-body text-muted-foreground">
                  Critical learnings that drove exceptional business outcomes
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award size={24} className="text-primary" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      User-Centered Approach
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Deep user research and empathy-driven design decisions resulted in 
                      solutions that truly addressed core pain points.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Business-Design Alignment
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Strategic design decisions that balanced user needs with clear 
                      business objectives and measurable outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Iterative Validation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Continuous testing and iteration ensured optimal user experience 
                      and maximum business impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Scalable Solutions
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Design systems and scalable patterns that enable sustainable 
                      growth and consistent experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Ready to achieve similar results?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Let's discuss how strategic design can drive your business forward.
                  </p>
                </div>
                <motion.button
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start a Project
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
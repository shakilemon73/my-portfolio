import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  Calendar,
  DollarSign,
  Building,
  User,
  Mail,
  MessageSquare,
  Briefcase,
  Clock,
  Globe
} from 'lucide-react';
import { contactFormSchema, ContactForm } from '../../../shared/case-study-schema';
import { slideUp, buttonHover, fadeIn } from '@/lib/framer-variants';

const projectTypes = [
  { value: 'product-design', label: 'Product Design', icon: Briefcase, description: 'End-to-end product design and strategy' },
  { value: 'design-system', label: 'Design System', icon: Globe, description: 'Component libraries and design systems' },
  { value: 'user-research', label: 'User Research', icon: User, description: 'User research and testing services' },
  { value: 'design-audit', label: 'Design Audit', icon: CheckCircle, description: 'UX/UI audit and recommendations' },
  { value: 'consultation', label: 'Consultation', icon: MessageSquare, description: 'Design strategy and consultation' },
  { value: 'workshop', label: 'Workshop', icon: Calendar, description: 'Design workshops and training' },
  { value: 'other', label: 'Other', icon: AlertCircle, description: 'Custom project requirements' }
];

const timelines = [
  { value: 'immediate', label: 'ASAP', description: 'Starting immediately' },
  { value: '1-month', label: '1 Month', description: 'Starting within 1 month' },
  { value: '3-months', label: '3 Months', description: 'Starting within 3 months' },
  { value: '6-months', label: '6 Months', description: 'Starting within 6 months' },
  { value: 'flexible', label: 'Flexible', description: 'Timeline is flexible' }
];

const budgets = [
  { value: 'under-25k', label: 'Under $25K', description: 'Small project budget' },
  { value: '25k-50k', label: '$25K - $50K', description: 'Medium project budget' },
  { value: '50k-100k', label: '$50K - $100K', description: 'Large project budget' },
  { value: '100k-plus', label: '$100K+', description: 'Enterprise project budget' },
  { value: 'discuss', label: 'Let\'s Discuss', description: 'Budget to be determined' }
];

const referralSources = [
  { value: 'google-search', label: 'Google Search' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'referral', label: 'Referral' },
  { value: 'portfolio-site', label: 'Portfolio Website' },
  { value: 'conference', label: 'Conference/Event' },
  { value: 'other', label: 'Other' }
];

export function EnhancedContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<ContactForm>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      projectType: 'product-design',
      timeline: '3-months',
      budget: 'discuss',
      newsletterOptIn: false
    }
  });

  const watchedProjectType = watch('projectType');
  const watchedTimeline = watch('timeline');
  const watchedBudget = watch('budget');

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-16"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
          animate={{ scale: [0.8, 1.1, 1] }}
          transition={{ duration: 0.6 }}
        >
          <CheckCircle size={32} className="text-white" />
        </motion.div>
        <h3 className="text-h3 font-bold text-foreground mb-4">
          Thank You!
        </h3>
        <p className="text-body-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Your message has been sent successfully. I'll get back to you within 24 hours.
        </p>
        <motion.button
          onClick={() => setIsSubmitted(false)}
          className="text-primary hover:text-primary/80 font-medium"
          variants={buttonHover}
          whileHover="hover"
          whileTap="tap"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
      variants={slideUp}
      initial="initial"
      animate="animate"
    >
      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            <User size={16} className="inline mr-2" />
            Full Name
          </label>
          <input
            {...register('name')}
            type="text"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            <Mail size={16} className="inline mr-2" />
            Email Address
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="your.email@company.com"
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            <Building size={16} className="inline mr-2" />
            Company
          </label>
          <input
            {...register('company')}
            type="text"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Your company name"
          />
          {errors.company && (
            <p className="text-sm text-destructive">{errors.company.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Role (Optional)
          </label>
          <input
            {...register('role')}
            type="text"
            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
            placeholder="Your role/title"
          />
        </div>
      </div>

      {/* Project Type Selection */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-foreground">
          <Briefcase size={16} className="inline mr-2" />
          Project Type
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projectTypes.map((type) => (
            <motion.label
              key={type.value}
              className={`relative cursor-pointer p-4 border rounded-lg transition-all ${
                watchedProjectType === type.value
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-muted-foreground'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <input
                {...register('projectType')}
                type="radio"
                value={type.value}
                className="sr-only"
              />
              <div className="flex items-start gap-3">
                <type.icon size={20} className={watchedProjectType === type.value ? 'text-primary' : 'text-muted-foreground'} />
                <div>
                  <div className="font-medium text-foreground">{type.label}</div>
                  <div className="text-sm text-muted-foreground">{type.description}</div>
                </div>
              </div>
              {watchedProjectType === type.value && (
                <motion.div
                  className="absolute top-2 right-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <CheckCircle size={16} className="text-primary" />
                </motion.div>
              )}
            </motion.label>
          ))}
        </div>
      </div>

      {/* Timeline & Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-foreground">
            <Clock size={16} className="inline mr-2" />
            Timeline
          </label>
          <div className="space-y-2">
            {timelines.map((timeline) => (
              <motion.label
                key={timeline.value}
                className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all ${
                  watchedTimeline === timeline.value
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-muted-foreground'
                }`}
                whileHover={{ x: 4 }}
              >
                <div>
                  <div className="font-medium text-foreground">{timeline.label}</div>
                  <div className="text-sm text-muted-foreground">{timeline.description}</div>
                </div>
                <input
                  {...register('timeline')}
                  type="radio"
                  value={timeline.value}
                  className="w-4 h-4 text-primary border-border focus:ring-primary"
                />
              </motion.label>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-foreground">
            <DollarSign size={16} className="inline mr-2" />
            Budget Range
          </label>
          <div className="space-y-2">
            {budgets.map((budget) => (
              <motion.label
                key={budget.value}
                className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all ${
                  watchedBudget === budget.value
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-muted-foreground'
                }`}
                whileHover={{ x: 4 }}
              >
                <div>
                  <div className="font-medium text-foreground">{budget.label}</div>
                  <div className="text-sm text-muted-foreground">{budget.description}</div>
                </div>
                <input
                  {...register('budget')}
                  type="radio"
                  value={budget.value}
                  className="w-4 h-4 text-primary border-border focus:ring-primary"
                />
              </motion.label>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          <MessageSquare size={16} className="inline mr-2" />
          Project Details
        </label>
        <textarea
          {...register('message')}
          rows={5}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
          placeholder="Tell me about your project, goals, challenges, and any specific requirements..."
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Referral Source */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-foreground">
          How did you hear about me? (Optional)
        </label>
        <select
          {...register('referralSource')}
          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
        >
          <option value="">Select source</option>
          {referralSources.map((source) => (
            <option key={source.value} value={source.value}>
              {source.label}
            </option>
          ))}
        </select>
      </div>

      {/* Newsletter Opt-in */}
      <motion.label
        className="flex items-start gap-3 cursor-pointer"
        whileHover={{ x: 2 }}
      >
        <input
          {...register('newsletterOptIn')}
          type="checkbox"
          className="w-6 h-6 mt-0.5 text-primary border-border rounded focus:ring-primary"
        />
        <div>
          <div className="text-sm font-medium text-foreground">
            Subscribe to design insights
          </div>
          <div className="text-xs text-muted-foreground">
            Receive monthly updates on design trends, case studies, and industry insights. Unsubscribe anytime.
          </div>
        </div>
      </motion.label>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white text-black font-bold min-h-[56px] px-6 rounded-xl hover:bg-gray-100 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3 shadow-xl border-4 border-electric-cyan"
        variants={buttonHover}
        whileHover={!isSubmitting ? "hover" : undefined}
        whileTap={!isSubmitting ? "tap" : undefined}
      >
        <AnimatePresence mode="wait">
          {isSubmitting ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Sending...
            </motion.div>
          ) : (
            <motion.div
              key="send"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3"
            >
              <Send size={20} />
              Send Message
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Error Message */}
      <AnimatePresence>
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive"
          >
            <AlertCircle size={16} />
            {submitError}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Information */}
      <div className="pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground text-center">
          Prefer email? Reach me directly at{' '}
          <a href="mailto:hello@shakilemon.design" className="text-primary hover:underline">
            hello@shakilemon.design
          </a>
        </p>
      </div>
    </motion.form>
  );
}
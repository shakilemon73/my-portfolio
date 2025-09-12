import { ScrollProgress } from '@/components/scroll-progress';
import { UXEnhancementSystem } from '@/components/ux-enhancement-system';
import { Navigation } from '@/components/navigation';
import { RevolutionaryHero } from '@/components/revolutionary-hero';
import { UltimatePortfolioShowcase } from '@/components/ultimate-portfolio-showcase';
import { WorldClassDesignProcess } from '@/components/world-class-design-process';
import { FaangCredentialsSection } from '@/components/faang-credentials-section';
import { FaangResumeSection } from '@/components/faang-resume-section';
import { WorldClassAboutSection } from '@/components/world-class-about-section';
import { EnhancedSkillsSection } from '@/components/enhanced-skills-section';
import { EnhancedTestimonialsSection } from '@/components/enhanced-testimonials-section';
import { WorldClassContactSection } from '@/components/world-class-contact-section';
import { EnhancedFooter } from '@/components/enhanced-footer';

export default function Home() {
  return (
    <div className="bg-deep-black text-white font-inter overflow-x-hidden">
      <UXEnhancementSystem />
      <ScrollProgress />
      <Navigation />
      <main>
        <RevolutionaryHero />
        <UltimatePortfolioShowcase />
        <WorldClassDesignProcess />
        <FaangCredentialsSection />
        <FaangResumeSection />
        <WorldClassAboutSection />
        <EnhancedSkillsSection />
        <EnhancedTestimonialsSection />
        <WorldClassContactSection />
      </main>
      <EnhancedFooter />
    </div>
  );
}

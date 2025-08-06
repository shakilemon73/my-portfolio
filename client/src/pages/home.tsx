import { CustomCursor } from '@/components/custom-cursor';
import { ScrollProgress } from '@/components/scroll-progress';
import { UXEnhancementSystem } from '@/components/ux-enhancement-system';
import { Navigation } from '@/components/navigation';
import { FaangLevelHero } from '@/components/faang-level-hero';
import { FaangPortfolioSection } from '@/components/faang-portfolio-section';
import { DesignProcessSection } from '@/components/design-process-section';
import { FaangCredentialsSection } from '@/components/faang-credentials-section';
import { AboutSection } from '@/components/about-section';
import { SkillsSection } from '@/components/skills-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-deep-black text-white font-inter overflow-x-hidden">
      <UXEnhancementSystem />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main>
        <FaangLevelHero />
        <FaangPortfolioSection />
        <DesignProcessSection />
        <FaangCredentialsSection />
        <AboutSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

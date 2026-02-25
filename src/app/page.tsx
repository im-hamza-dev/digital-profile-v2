import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'ScrumStack Solutions – We build experiences',
  description:
    'A digital studio specializing in transforming ambitious ideas into exceptional products through design, technology, and innovation.',
  openGraph: {
    title: 'ScrumStack Solutions – We build experiences',
    description:
      'A digital studio specializing in transforming ambitious ideas into exceptional products through design, technology, and innovation.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <main>
        <HeroSection />
        <ProjectsSection />
        {/* <AboutSection /> */}
        <ServicesSection />
        <StatsSection />
        <ProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
    </div>
  );
}

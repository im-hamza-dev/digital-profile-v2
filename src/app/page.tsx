import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Hamza Iqbal – Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer building scalable SaaS, MVPs, and web applications with React, Next.js, TypeScript & Tailwind.',
  openGraph: {
    title: 'Hamza Iqbal – Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer building scalable SaaS, MVPs, and web applications with React, Next.js, TypeScript & Tailwind.',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <main>
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </div>
  );
}

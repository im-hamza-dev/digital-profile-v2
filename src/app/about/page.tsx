import type { Metadata } from 'next';
import Link from 'next/link';
import { AboutSection } from '@/components/sections/AboutSection';

export const metadata: Metadata = {
  title: 'About – ScrumStack Solutions',
  description:
    "We're a digital studio founded by product-obsessed creators. We build interfaces, products and experiences that redefine how people connect with technology.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        {/* <AboutSection /> */}
        <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-16 py-16 text-center">
          <Link href="/" className="text-primary font-medium hover:underline">
            ← Back to home
          </Link>
        </section>
      </main>
    </div>
  );
}

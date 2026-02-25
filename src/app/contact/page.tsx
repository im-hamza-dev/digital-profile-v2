import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Contact – Hamza Iqbal',
  description:
    "Get in touch. Book a call or say hi. I'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24">
        <ContactSection />
        <section className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 py-12 text-center">
          <Link href="/" className="text-primary font-medium hover:underline">
            ← Back to home
          </Link>
        </section>
      </main>
    </div>
  );
}

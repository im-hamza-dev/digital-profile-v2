'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export function CTASection() {
  return (
    <section
      id="contact"
      className="group py-16 sm:py-20 lg:py-[7.5rem] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 left-1/3 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 relative">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-4"
          >
            Keep in touch with me
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8"
          >
            Say Hi.{' '}
            <span className="transition-colors group-hover:text-primary">
              Start a conversation
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-xl mb-10 sm:mb-12 leading-relaxed"
          >
            Have a project in mind or just want to connect? Book a call or drop
            me an email. I&apos;d love to hear from you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <Link
              href="/contact#calendly"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book a call
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

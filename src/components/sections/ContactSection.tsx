'use client';

import { motion } from 'motion/react';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="group py-16 sm:py-20 lg:py-[7.5rem] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 left-1/3 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 relative">
        <div className="mb-10 sm:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6"
          >
            Let&apos;s have a{' '}
            <span className="transition-colors group-hover:text-primary">
              conversation
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-xl mb-4"
          >
            Book a 30-min call. Pick a time that works for you.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="mailto:hi.hamza.dev@gmail.com"
            className="text-foreground text-base sm:text-lg font-semibold hover:text-primary transition-colors inline-block"
          >
            hi.hamza.dev@gmail.com
          </motion.a>
        </div>

        <motion.div
          id="calendly"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="bg-zinc-800 dark:bg-zinc-900 border border-zinc-700 dark:border-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          <div className="min-h-[700px] w-full">
            <iframe
              title="Book a meeting with Hamza"
              src="https://calendly.com/hi-hamza-dev/30min"
              width="100%"
              height="100%"
              className="min-h-[700px] w-full border-0"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

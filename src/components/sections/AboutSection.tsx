'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-[7.5rem] relative overflow-hidden"
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] border border-border rounded-full opacity-30 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-16 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {[
              { value: '1+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '12+', label: 'Years Experience' },
              { value: '50+', label: 'Team Members' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.15 }}
                className="bg-secondary border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl sm:text-5xl font-bold text-primary mb-2 sm:mb-3">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              We&apos;re a digital studio founded by
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              product-obsessed creators.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-[800px] leading-relaxed"
            >
              We build interfaces, products and experiences that redefine how
              people connect with technology.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-8"
          >
            <a
              href="/contact"
              className="group flex items-center gap-2 px-6 py-3 text-primary hover:gap-3 transition-all font-medium"
            >
              Get in touch
              <ArrowRight className="w-5 h-5" />
            </a>
            <span className="w-1 h-1 bg-muted rounded-full" />
            <a
              href="#about-full"
              className="group flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground hover:gap-3 transition-all font-medium"
            >
              More about us
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: 180 }}
            viewport={{ once: true }}
            transition={{ duration: 2.4, delay: 0.6 }}
            className="absolute -right-20 lg:-right-32 top-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 border border-border rounded-full opacity-20 pointer-events-none hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}

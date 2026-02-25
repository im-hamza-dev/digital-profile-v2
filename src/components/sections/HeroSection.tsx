'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const rotatingWords = [
  'Web Solutions',
  'MVPs',
  'AI Solutions',
  'Digital Products',
  'SaaS Platforms',
];

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="group min-h-screen relative flex items-center overflow-hidden pt-32 pb-20">
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full text-sm mb-8"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-muted-foreground">
              Available for new projects
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="space-y-6 mb-8"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl leading-[1.1] tracking-tight">
              <span className="text-foreground block">We build</span>
              <div className="h-[1.2em] overflow-hidden relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIndex}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="text-primary absolute"
                  >
                    {rotatingWords[currentWordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-foreground block">
                that drive{' '}
                <span className="inline transition-colors group-hover:text-primary">
                  results
                </span>
              </span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Specializing in web solutions, MVPs, and AI-powered applications.
              We transform ambitious ideas into scalable digital products that
              perform flawlessly and drive business growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
              >
                Start a Project
                <span className="text-xl">→</span>
              </a>
              <a
                href="#work"
                className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-all inline-flex items-center justify-center gap-2"
              >
                View Our Work
              </a>
            </div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4"
            >
              <span className="px-4 py-2 bg-secondary border border-primary/30 rounded-full text-sm text-foreground shadow-[0_0_15px_rgba(79,142,247,0.3)] hover:shadow-[0_0_20px_rgba(79,142,247,0.5)] hover:border-primary/50 transition-all">
                Lightning Fast
              </span>
              <span className="px-4 py-2 bg-secondary border border-primary/30 rounded-full text-sm text-foreground shadow-[0_0_15px_rgba(79,142,247,0.3)] hover:shadow-[0_0_20px_rgba(79,142,247,0.5)] hover:border-primary/50 transition-all">
                Pixel Perfect
              </span>
              <span className="px-4 py-2 bg-secondary border border-primary/30 rounded-full text-sm text-foreground shadow-[0_0_15px_rgba(79,142,247,0.3)] hover:shadow-[0_0_20px_rgba(79,142,247,0.5)] hover:border-primary/50 transition-all">
                AI-Powered
              </span>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
          className="mt-24 sm:mt-32 pt-12 sm:pt-16 border-t border-border"
        >
          <p className="text-muted-foreground text-xs sm:text-sm uppercase tracking-[0.2em] mb-6 sm:mb-8 text-center">
            Trusted By Industry Leaders
          </p>
          <div className="flex items-center justify-center gap-8 sm:gap-16 flex-wrap opacity-40 grayscale">
            {[
              'DigitalFlow',
              'Tido',
              'SHAPE',
              'TechCorp',
              'NextGen',
              'NoodleFactory',
              'Dapster',
              'DataPro',
              'DP World',
            ].map((company) => (
              <div
                key={company}
                className="text-foreground font-bold text-lg sm:text-xl"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

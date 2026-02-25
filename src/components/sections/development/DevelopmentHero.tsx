"use client";

import { motion } from "motion/react";
import { Code, ArrowRight } from "lucide-react";
import Link from "next/link";

export function DevelopmentHero() {
  return (
    <section className="pt-32 sm:pt-40 pb-20 sm:pb-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full text-sm mb-8">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">Development Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Development
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
            Build websites that drive business growth. From custom web development to WordPress,
            Framer and Webflow solutions, we build high-performance websites and applications that
            convert visitors into customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
            >
              Start your development project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/work"
              className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-all inline-flex items-center justify-center gap-2"
            >
              View our work
            </Link>
          </div>
        </motion.div>

        {/* Service Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mt-16 sm:mt-24 flex flex-wrap gap-3 sm:gap-4"
        >
          {["Web Development", "Landing Page", "WordPress", "Framer", "Webflow"].map(
            (tag, idx) => (
              <span
                key={tag}
                className="px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
              >
                {tag}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}

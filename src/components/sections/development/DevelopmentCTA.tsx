"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Mail, Calendar } from "lucide-react";

export function DevelopmentCTA() {
  return (
    <section className="py-16 sm:py-20 lg:py-[7.5rem] relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8">
            Ready to build your website?
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you need custom web development, a high-converting landing page, or a
            WordPress, Framer, or Webflow website, we deliver solutions that perform flawlessly
            and drive business results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Request a quote
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:bg-card transition-all inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book a free call
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="bg-background/50 backdrop-blur-sm border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          >
            <p className="text-foreground font-semibold mb-2">No sales pitch</p>
            <p className="text-muted-foreground text-sm sm:text-base">
              Just honest advice on whether we&apos;re the right fit. Let&apos;s bring your vision
              to life!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

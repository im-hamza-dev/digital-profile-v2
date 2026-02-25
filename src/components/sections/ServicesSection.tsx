"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Palette, Code, LucideIcon } from "lucide-react";

const services: {
  name: string;
  icon: LucideIcon;
  tagline: string;
  href: string;
}[] = [
  {
    name: "Design",
    icon: Palette,
    tagline: "Aesthetics with functionality",
    href: "/services/design",
  },
  {
    name: "Development",
    icon: Code,
    tagline: "Designs into digital products",
    href: "/services/development",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="group py-16 sm:py-20 lg:py-[7.5rem] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-4"
            >
              Our Solutions
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground"
            >
              Transforming{' '}
              <span className="transition-colors group-hover:text-primary">
                ideas
              </span>{' '}
              <br className="hidden sm:block" />
              into{' '}
              <span className="transition-colors group-hover:text-primary">
                reality
              </span>
            </motion.h2>
          </div>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            href="/services/development"
            className="hidden md:inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block py-6 sm:py-8 border-b border-border hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors mb-4">
                      <service.icon className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {service.tagline}
                    </p>
                  </div>
                  <span className="shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

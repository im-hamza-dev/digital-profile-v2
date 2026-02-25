"use client";

import { motion } from "motion/react";
import { Code, Zap, Smartphone, HeadphonesIcon } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Technical Excellence",
    description:
      "Our developers follow industry best practices, write clean code, and build solutions that are maintainable, scalable, and secure.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    description:
      "We optimize every website for speed, implementing best practices for fast loading times and excellent Core Web Vitals scores.",
  },
  {
    icon: Smartphone,
    title: "Responsive & Accessible",
    description:
      "All our websites are built mobile-first, ensuring perfect and accessible experiences on smartphones, tablets, and desktops.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description:
      "We don't disappear after launch. Our web development services include training, documentation, and ongoing support options.",
  },
];

export function DevelopmentValues() {
  return (
    <section className="py-16 sm:py-20 lg:py-[7.5rem] relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Development that drives results
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.15 }}
                className="group p-6 sm:p-8 bg-background border border-border rounded-xl sm:rounded-2xl hover:border-primary/30 hover:bg-background/80 transition-all duration-500"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

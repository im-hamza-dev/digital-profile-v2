"use client";

import { motion } from "motion/react";
import { Search, Lightbulb, Wrench, Rocket, LucideIcon } from "lucide-react";

const steps: {
  number: string;
  title: string;
  duration: string;
  icon: LucideIcon;
  description: string;
  deliverables: string[];
}[] = [
  {
    number: "01",
    title: "Discovery & Understanding",
    duration: "1–2 days",
    icon: Search,
    description:
      "We dive deep into your business, goals, and target audience. Through workshops and research, we uncover insights that will drive the project strategy.",
    deliverables: ["Business Analysis", "Target Audience Research", "Project Goals"],
  },
  {
    number: "02",
    title: "Strategy & Planning",
    duration: "2–3 days",
    icon: Lightbulb,
    description:
      "We craft a comprehensive roadmap outlining scope, timelines, and deliverables. User flows, wireframes, and technical architecture are defined.",
    deliverables: ["Roadmap", "User Flows", "Wireframes"],
  },
  {
    number: "03",
    title: "Design & Development",
    duration: "5–7 days",
    icon: Wrench,
    description:
      "Our designers and developers work in parallel, creating stunning interfaces and robust code. Regular check-ins ensure alignment with your vision.",
    deliverables: ["Design Mockups", "Code Implementation", "Testing"],
  },
  {
    number: "04",
    title: "Launch & Optimization",
    duration: "1–2 days",
    icon: Rocket,
    description:
      "We deploy your product with thorough testing and quality assurance. Post-launch, we monitor performance and iterate based on real user data.",
    deliverables: ["Deployment", "Quality Assurance", "Performance Monitoring"],
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="group py-16 sm:py-20 lg:py-[7.5rem] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="mb-16 sm:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-4"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground"
          >
            How we bring <br className="hidden sm:block" />{' '}
            <span className="transition-colors group-hover:text-primary">
              ideas
            </span>{' '}
            to{' '}
            <span className="transition-colors group-hover:text-primary">
              life
            </span>
          </motion.h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.15 }}
              className="group relative"
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-stretch sm:items-start">
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-secondary border-2 border-border rounded-xl sm:rounded-2xl flex items-center justify-center font-mono text-xl sm:text-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {step.number}
                </div>
                <div className="flex-1 bg-secondary border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 group-hover:border-primary/30 transition-all min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {step.deliverables.map((deliverable) => (
                      <span
                        key={deliverable}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-background border border-border rounded-lg text-xs sm:text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {idx < steps.length - 1 && (
                <div className="absolute left-6 sm:left-10 top-16 sm:top-20 w-0.5 h-4 sm:h-8 bg-gradient-to-b from-border to-transparent hidden sm:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

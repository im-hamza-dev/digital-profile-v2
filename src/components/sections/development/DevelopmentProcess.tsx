"use client";

import { motion } from "motion/react";
import {
  FileText,
  Palette,
  Code,
  TestTube,
  Rocket,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Planning & Architecture",
    icon: FileText,
    items: [
      "Requirements and analysis",
      "Technical specification documentation",
      "Architecture planning and design",
      "Technology stack selection",
      "Timeline and milestone definition",
    ],
  },
  {
    number: "02",
    title: "Design Integration",
    icon: Palette,
    items: [
      "Design review and preparation",
      "Component breakdown and planning",
      "Responsive behavior planning",
      "Interaction and animation",
      "Asset optimization",
    ],
  },
  {
    number: "03",
    title: "Development & Implementation",
    icon: Code,
    items: [
      "Development environment setup",
      "Front-end development and styling",
      "Back-end development and APIs",
      "Database implementation",
      "CMS implementation",
    ],
  },
  {
    number: "04",
    title: "Testing & Assurance",
    icon: TestTube,
    items: [
      "Cross-browser testing",
      "Mobile device testing",
      "Performance testing and optimization",
      "Accessibility testing",
      "Functionality & Security testing",
    ],
  },
  {
    number: "05",
    title: "Launch & Deployment",
    icon: Rocket,
    items: [
      "Staging environment review",
      "Production deployment",
      "SSL, DNS, Analytics and domain configuration",
      "Analytics implementation",
      "Final client approval",
    ],
  },
  {
    number: "06",
    title: "Training & Handoff",
    icon: GraduationCap,
    items: [
      "CMS training and documentation",
      "Content update procedures",
      "Ongoing maintenance guidance",
      "Support and warranty period",
    ],
  },
];

export function DevelopmentProcess() {
  return (
    <section className="py-16 sm:py-20 lg:py-[7.5rem] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Development process that delivers
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl">
            Our tool stack
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
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
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className="text-muted-foreground text-sm sm:text-base flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="absolute left-6 sm:left-10 top-16 sm:top-20 w-0.5 h-4 sm:h-8 bg-gradient-to-b from-border to-transparent hidden sm:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

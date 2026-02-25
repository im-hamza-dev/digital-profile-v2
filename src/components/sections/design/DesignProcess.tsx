"use client";

import { motion } from "motion/react";
import {
  Search,
  Lightbulb,
  Palette,
  TestTube,
  Rocket,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    icon: Search,
    items: [
      "User research and interviews",
      "Competitive analysis",
      "Brand and market research",
      "Stakeholder workshops",
      "Requirements gathering",
    ],
  },
  {
    number: "02",
    title: "Strategy & Planning",
    icon: Lightbulb,
    items: [
      "Information architecture",
      "User journey mapping",
      "Content strategy",
      "Design direction definition",
      "Project roadmap",
    ],
  },
  {
    number: "03",
    title: "Design & Prototyping",
    icon: Palette,
    items: [
      "Wireframing and layout design",
      "Visual design creation",
      "Interactive prototyping",
      "Design system development",
      "Iterative design refinement",
    ],
  },
  {
    number: "04",
    title: "Testing & Validation",
    icon: TestTube,
    items: [
      "Usability testing",
      "User feedback collection",
      "Design iteration",
      "Accessibility audit",
      "Design quality assurance",
    ],
  },
  {
    number: "05",
    title: "Handoff & Launch",
    icon: Rocket,
    items: [
      "Design specifications",
      "Asset preparation",
      "Developer handoff",
      "Design system documentation",
      "Launch support",
    ],
  },
  {
    number: "06",
    title: "Support & Iteration",
    icon: GraduationCap,
    items: [
      "Design system maintenance",
      "Ongoing design support",
      "Performance monitoring",
      "Design updates and iterations",
      "Team training",
    ],
  },
];

export function DesignProcess() {
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
            Design process that delivers
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl">
            Our design methodology
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

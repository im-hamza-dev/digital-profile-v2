"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Monitor,
  Smartphone,
  Check,
  ChevronDown,
  LucideIcon,
} from "lucide-react";

interface Service {
  id: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  whatsIncluded: string[];
  solutions: string[];
  deliverables: string[];
  idealFor: string[];
}

const services: Service[] = [
  {
    id: "web-design",
    name: "Web Design",
    icon: Monitor,
    tagline: "Create stunning, conversion-focused web interfaces",
    description:
      "We design beautiful, intuitive web interfaces that engage users and drive conversions. Our web design process combines user research, strategic thinking, and visual excellence to create experiences that perform.",
    whatsIncluded: [
      "User research and persona development",
      "Information architecture and wireframing",
      "Visual design and UI creation",
      "Responsive design for all devices",
      "Component library creation",
      "Prototyping and interaction design",
      "Design handoff and developer collaboration",
    ],
    solutions: [
      "Landing page design",
      "Website redesign",
      "E-commerce design",
      "Dashboard and admin interfaces",
      "SaaS platform design",
      "Corporate website design",
      "Portfolio and showcase sites",
    ],
    deliverables: [
      "Wireframes and user flows",
      "High-fidelity mockups",
      "Interactive prototypes",
      "Style guides and documentation",
      "Asset libraries and style guides",
      "Responsive design specifications",
    ],
    idealFor: [
      "Businesses launching new websites",
      "Companies needing website redesigns",
      "Startups building their digital presence",
      "Organizations seeking modern web interfaces",
    ],
  },
  {
    id: "mobile-design",
    name: "Mobile Design",
    icon: Smartphone,
    tagline: "Design native and responsive mobile experiences",
    description:
      "We create mobile-first designs that feel native and intuitive. From iOS and Android apps to responsive mobile web experiences, we ensure your mobile interface delights users and drives engagement.",
    whatsIncluded: [
      "Mobile-first design approach",
      "iOS and Android design guidelines",
      "Touch-optimized interactions",
      "Mobile user flow design",
      "Responsive breakpoint planning",
      "Mobile prototyping",
      "Design specifications for developers",
    ],
    solutions: [
      "Mobile app UI/UX design",
      "Responsive mobile web design",
      "Progressive web app (PWA) design",
      "Mobile dashboard design",
      "E-commerce mobile experience",
      "Mobile-first landing pages",
    ],
    deliverables: [
      "Mobile wireframes",
      "iOS and Android mockups",
      "Mobile component library",
      "Touch interaction specifications",
      "Responsive design breakpoints",
      "Mobile asset libraries",
    ],
    idealFor: [
      "Companies building mobile apps",
      "Businesses prioritizing mobile users",
      "Startups launching mobile products",
      "Organizations needing mobile-first experiences",
    ],
  },
];

export function DesignServices() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-[7.5rem] relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Design services that deliver
          </h2>
        </motion.div>

        <div className="space-y-4">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: idx * 0.15 }}
                className={`border rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 ${
                  isActive
                    ? "bg-secondary border-primary"
                    : "bg-background border-border hover:border-muted"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveService(isActive ? null : service.id)}
                  className="w-full px-6 sm:px-8 py-6 sm:py-8 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground text-sm sm:text-base truncate">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground transition-transform duration-300 shrink-0 ml-2 ${
                      isActive ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.9 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 border-t border-border">
                        <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                          <div>
                            <h4 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              What&apos;s included
                            </h4>
                            <ul className="space-y-2">
                              {service.whatsIncluded.map((item) => (
                                <li
                                  key={item}
                                  className="text-muted-foreground text-sm flex items-start gap-2"
                                >
                                  <span className="text-primary mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              Solutions
                            </h4>
                            <ul className="space-y-2">
                              {service.solutions.map((item) => (
                                <li
                                  key={item}
                                  className="text-muted-foreground text-sm flex items-start gap-2"
                                >
                                  <span className="text-primary mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              Deliverables
                            </h4>
                            <ul className="space-y-2">
                              {service.deliverables.map((item) => (
                                <li
                                  key={item}
                                  className="text-muted-foreground text-sm flex items-start gap-2"
                                >
                                  <span className="text-primary mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-foreground font-semibold mb-4 flex items-center gap-2">
                              <Check className="w-4 h-4 text-primary" />
                              Ideal for
                            </h4>
                            <ul className="space-y-2">
                              {service.idealFor.map((item) => (
                                <li
                                  key={item}
                                  className="text-muted-foreground text-sm flex items-start gap-2"
                                >
                                  <span className="text-primary mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

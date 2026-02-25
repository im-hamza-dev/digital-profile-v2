'use client';

import { motion } from 'motion/react';
import { Zap, Layers, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const plans: {
  id: string;
  name: string;
  range: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}[] = [
  {
    id: 'mvp',
    name: 'MVP',
    range: '$600 – $1,200',
    icon: Zap,
    description:
      'Ideal for validating your idea quickly with a focused, launch-ready product.',
    features: [
      'Core features only',
      'Clean, scalable foundation',
      'Fast delivery',
      'Perfect for startups & side projects',
    ],
  },
  {
    id: 'complex-mvp',
    name: 'Complex MVP',
    range: '$1,500 – $2,500',
    icon: Layers,
    description:
      'More scope: integrations, auth, dashboards, and richer functionality.',
    features: [
      'Multiple user roles',
      'Integrations & APIs',
      'Admin or dashboard',
      'Design + development',
    ],
  },
  {
    id: 'support',
    name: 'Monthly Dev Support',
    range: '$800 – $1,200/mo',
    icon: Headphones,
    description: 'Ongoing development, maintenance, and feature iterations.',
    features: [
      'Dedicated dev time',
      'Bug fixes & updates',
      'New features & improvements',
      'Ongoing support',
    ],
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="group py-16 sm:py-20 lg:py-[7.5rem] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute top-1/2 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 relative">
        <div className="mb-16 sm:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-4"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground"
          >
            Clear{' '}
            <span className="transition-colors group-hover:text-primary">
              pricing
            </span>
            , <br className="hidden sm:block" /> no surprises
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: index * 0.15 }}
              className="bg-background border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <plan.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                {plan.name}
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">
                {plan.range}
              </p>
              <p className="text-muted-foreground text-sm sm:text-base mb-6 flex-1">
                {plan.description}
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-foreground text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

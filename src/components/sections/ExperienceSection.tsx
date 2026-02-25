'use client';

import { motion } from 'motion/react';

const experiences = [
  {
    company: 'Sondr',
    role: 'Senior Software Engineer',
    period: 'Aug 2025 – Present',
    summary:
      'Full-stack services with Next.js & NestJS, Stripe billing, Stream Chat, Customer.io campaigns, Statsig experimentation.',
  },
  {
    company: 'Circlone',
    role: 'Full-Stack Engineer',
    period: 'Nov 2022 – Feb 2024',
    summary: 'Critical part of the engineering team; full-stack product development and delivery.',
  },
  {
    company: 'SHAPE',
    role: 'Senior Frontend Developer',
    period: 'Oct 2020 – Apr 2024',
    summary:
      'React, TypeScript, Redux, Tailwind/SCSS. SignalR real-time updates, GSAP animations, product revamp featured in Forbes.',
  },
  {
    company: 'Aerodyne – DRONOS',
    role: 'Executive Software Engineer',
    period: 'May 2024 – Jul 2025',
    summary:
      'Three.js & Potree 3D point cloud viewer for drone data, FLIR thermal analysis, LangChain AI chatbots.',
  },
  {
    company: 'DP World',
    role: 'Engineering',
    period: '.',
    summary: 'Logistics and trade technology projects.',
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="group py-16 sm:py-20 lg:py-[7.5rem] relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-xs uppercase tracking-[0.2em] mb-4"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 sm:mb-16"
        >
          Where I&apos;ve worked
        </motion.h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="py-6 sm:py-8 border-b border-border last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <div>
                  <h3 className="text-foreground font-semibold text-lg sm:text-xl">
                    {exp.company}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    {exp.role}
                  </p>
                </div>
                <span className="text-muted-foreground text-xs sm:text-sm tabular-nums shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mt-2 sm:mt-3 leading-relaxed max-w-2xl">
                {exp.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

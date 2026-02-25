'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const experiences = [
  {
    company: 'Sondr',
    role: 'Senior Software Engineer',
    period: 'Aug 2025 – Present',
    location: 'Remote',
    summary:
      'Full-stack services with Next.js & NestJS, Stripe billing, Stream Chat, Customer.io campaigns, Statsig experimentation.',
    bullets: [
      'Built scalable full-stack services using Next.js and NestJS with MongoDB, ensuring high-performance, maintainable code',
      'Developed Instagram OTP verification flow, improving user onboarding security and reducing drop-off',
      'Implemented drip campaigns via Customer.io, enabling automated personalized user engagement',
      'Integrated Statsig event tracking for feature experimentation and data-driven product decisions',
      'Integrated Stream Chat for real-time messaging, enhancing user experience across the platform',
      'Optimized Stripe subscription billing and checkout flows for reliable payment handling',
    ],
  },
  {
    company: 'Circlone',
    role: 'Full-Stack Engineer',
    period: 'May 2025 – Aug 2025',
    location: 'Remote',
    summary:
      'Critical part of the engineering team; full-stack product development and delivery.',
    bullets: [
      'Full-stack product development and delivery',
      'Key contributor to the engineering team',
    ],
  },
  {
    company: 'Aerodyne – DRONOS',
    role: 'Executive Software Engineer',
    period: 'May 2024 – May 2025',
    location: 'Remote',
    summary:
      'Three.js & Potree 3D point cloud viewer for drone data, FLIR thermal analysis, LangChain AI chatbots.',
    bullets: [
      'Led integration of a Point Cloud Viewer using Three.js and Potree for real-time 3D drone data visualization',
      'Implemented Potree 2.0 loading from AWS S3 via pre-signed URLs; contributed enhancements to the Potree core library',
      'Designed reusable Angular components for zooming, panning, rotating, and 3D object selection',
      'Built a FLIR Tool replica enabling advanced thermal image analysis for drone inspections',
      'Re-architected an image gallery with Three.js canvas integration and optimized fetch performance',
      'Implemented centralized data access using signals and a store pattern, significantly reducing redundant API calls',
      'Integrated LangChain prompt template chatbots into the platform for AI-assisted drone data analysis',
    ],
  },
  {
    company: 'SHAPE',
    role: 'Senior Frontend Developer',
    period: 'Oct 2020 – Apr 2024',
    location: 'Remote',
    summary:
      'React, TypeScript, Redux, Tailwind/SCSS. SignalR real-time updates, GSAP animations, product revamp featured in Forbes.',
    bullets: [
      'Built and maintained product features using React, TypeScript, Redux, Tailwind CSS/SCSS, and Bootstrap in an agile environment',
      'Set up a SignalR module for real-time server communication powering live product data updates',
      'Delivered product revamp under tight deadlines; product was subsequently featured in Forbes',
      'Developed reusable animation scripts with GSAP for polished, performant UI interactions',
      'Delivered demo and admin panels for controlling and monitoring product features',
      'Improved developer experience through dependency upgrades and Webpack Bundle Analyzer optimizations',
      'Maintained clean, reusable code with proper documentation and Git-based version control across the team',
    ],
  },
  {
    company: 'SnapDoc',
    role: 'Founder & Full-Stack Developer',
    period: 'Jan 2026 – Present',
    location: 'Independent / Side Project · Remote',
    summary:
      'Chrome Extension that converts screenshots into structured PDF reports. Next.js, Tailwind, Manifest V3.',
    bullets: [
      'Architected the full product: landing page (Next.js + Tailwind), Chrome Extension (Manifest V3), and PDF export engine - all shipped solo',
      'Built offline-first capture and annotation tools using Canvas APIs, IndexedDB for local storage, and custom PDF layout rendering',
      'Implemented drag-and-drop multi-image layout editor with live preview before PDF export',
      'Shipped a production-grade Next.js marketing site (getsnapdoc.com) with performance-optimized image handling and SEO',
      'Integrated annotation tools: arrows, highlights, shapes, and rich metadata tagging per screenshot',
      'Designed the full UI/UX in Tailwind CSS - responsive, accessible, zero external component libraries',
    ],
  },
  {
    company: 'Iqra Labs - DP World',
    role: 'Senior Frontend Developer',
    period: '',
    location: 'Remote',
    summary:
      'Led frontend for ERP systems and MVPs. CCTV surveillance with Paper.js, Dockspace planning tool, MinIO, WebSockets.',
    bullets: [
      'Led frontend development of ERP systems and multiple MVP products from zero to launch',
      'Delivered an advanced CCTV surveillance solution using React and Paper.js with real-time violation detection',
      'Shipped Dockspace - a comprehensive space planning tool for dock and fabrication area management',
      'Integrated MinIO as an object storage facility and WebSockets for real-time data updates',
      'Managed a team of 2 engineers; acted as Scrum Master for agile ceremonies and sprint optimization',
    ],
  },
];

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-b border-border last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full text-left py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 hover:bg-secondary/30 transition-colors rounded-lg -mx-1 px-1"
                  aria-expanded={isExpanded}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-foreground font-semibold text-lg sm:text-xl">
                      {exp.company}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-0.5">
                      {exp.role}
                      {exp.location && (
                        <span className="text-muted-foreground/80">
                          {' '}
                          · {exp.location}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-muted-foreground text-xs sm:text-sm tabular-nums">
                      {exp.period}
                    </span>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-muted-foreground"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: [0.32, 0.72, 0, 1] },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pb-8 pt-0">
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
                          {exp.summary}
                        </p>
                        <ul className="space-y-2 max-w-2xl">
                          {exp.bullets.map((bullet, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -8 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: i * 0.04,
                              }}
                              className="text-muted-foreground text-sm sm:text-base leading-relaxed flex gap-2"
                            >
                              <span className="text-primary mt-1.5 shrink-0">
                                •
                              </span>
                              <span>{bullet}</span>
                            </motion.li>
                          ))}
                        </ul>
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

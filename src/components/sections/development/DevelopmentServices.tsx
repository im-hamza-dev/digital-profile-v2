"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code,
  Zap,
  Globe,
  Sparkles,
  Layout,
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
  technologies: string[];
  idealFor: string[];
}

const services: Service[] = [
  {
    id: "web-development",
    name: "Web Development",
    icon: Code,
    tagline: "Build powerful, scalable websites with custom web development services",
    description:
      "Build powerful, scalable websites with custom web development services tailored to your business needs. Our web development company delivers solutions that combine performance, security, and user experience.",
    whatsIncluded: [
      "Custom web development from scratch",
      "Front-end development (HTML, CSS, JavaScript, React, NextJS, AstroJS)",
      "Back-end development and API integration",
      "Database design and implementation",
      "Responsive website development",
      "Security implementation",
      "Third-party service integration",
    ],
    solutions: [
      "Custom website development for unique requirements",
      "Web application development for complex functionality",
      "E-commerce website development and online stores",
      "Corporate website development for enterprises",
      "B2B platform development",
      "Portal and dashboard development",
      "Progressive web apps (PWA)",
    ],
    technologies: [
      "Modern JavaScript frameworks (React, AstroJS, Next.JS)",
      "Backend technologies (Node.js and PHP)",
      "Database solutions (PostgreSQL, MongoDB, MySQL)",
      "Cloud hosting and deployment (AWS, Vercel, Netlify)",
      "API development and integration",
      "CMS integration when needed",
    ],
    idealFor: [
      "Businesses needing custom solutions",
      "Companies requiring web development company expertise",
      "Organisations with complex requirements",
      "Enterprises seeking scalable web development services",
    ],
  },
  {
    id: "landing-page",
    name: "Landing Page",
    icon: Zap,
    tagline: "Drive conversions with high-performance landing page development",
    description:
      "Drive conversions with high-performance landing page development optimized for speed and user experience. Our landing pages are built to convert visitors into leads and customers.",
    whatsIncluded: [
      "Custom landing page development",
      "Conversion-optimized code and structure",
      "Fast loading times and performance",
      "Mobile-responsive implementation",
      "Form integration and lead capture",
      "Analytics and tracking setup",
      "A/B testing setup capabilities",
    ],
    solutions: [
      "Product launch landing pages",
      "Lead generation pages",
      "Event registration pages",
      "E-book and content download pages",
      "Sales campaign landing pages",
      "Webinar registration pages",
    ],
    technologies: [
      "Next.js for optimal performance",
      "React for interactive components",
      "Tailwind CSS for rapid styling",
      "Form handling and validation",
      "Email marketing integration",
      "CRM integration (HubSpot, Salesforce, Zoho, Monday)",
      "Analytics tracking (Google Analytics, Mixpanel, Hotjar)",
    ],
    idealFor: [
      "Marketing campaigns",
      "Product launches",
      "Lead generation initiatives",
      "Businesses needing conversion-optimized landing page development",
    ],
  },
  {
    id: "mvp",
    name: "MVP Development",
    icon: Sparkles,
    tagline: "Launch your product fast with MVP development services",
    description:
      "Get to market quickly with a Minimum Viable Product that validates your idea, attracts early users, and sets the foundation for future growth. We build MVPs that are production-ready and scalable.",
    whatsIncluded: [
      "Rapid MVP development and deployment",
      "Core feature implementation",
      "User authentication and authorization",
      "Database design and setup",
      "API development",
      "Basic admin dashboard",
      "Deployment and hosting setup",
    ],
    solutions: [
      "SaaS MVP development",
      "Mobile app MVP",
      "Web application MVP",
      "E-commerce MVP",
      "Marketplace MVP",
      "Platform MVP",
    ],
    technologies: [
      "Next.js for full-stack development",
      "React for frontend",
      "Node.js for backend",
      "PostgreSQL or MongoDB",
      "Authentication (NextAuth, Auth0)",
      "Payment integration (Stripe)",
      "Cloud deployment (Vercel, AWS)",
    ],
    idealFor: [
      "Startups validating ideas",
      "Entrepreneurs launching products",
      "Companies needing rapid prototyping",
      "Businesses testing market fit",
    ],
  },
  {
    id: "wordpress",
    name: "WordPress Development",
    icon: Globe,
    tagline: "Launch professional WordPress websites with expert development",
    description:
      "Launch professional WordPress websites with expert WordPress development services. From custom themes to complex plugins, we build WordPress solutions that are easy to manage and built to perform.",
    whatsIncluded: [
      "Custom WordPress theme development",
      "WordPress plugin development and customization",
      "WooCommerce e-commerce setup",
      "WordPress website optimization",
      "Security hardening and best practices",
      "Content migration from other platforms",
      "Training and documentation",
    ],
    solutions: [
      "Custom WordPress website design and development",
      "WordPress e-commerce with WooCommerce",
      "Membership site development",
      "Multi-site WordPress installations",
      "WordPress API and headless WordPress",
      "WordPress website redesign and migration",
      "WordPress maintenance and support",
    ],
    technologies: [
      "WordPress core and custom themes",
      "Advanced Custom Fields (ACF)",
      "Page builders (Bricks, Breakdance, Gutenberg)",
      "WooCommerce for e-commerce",
      "WordPress REST API",
      "Performance optimization plugins",
      "Security plugins and hardening",
    ],
    idealFor: [
      "Businesses wanting content management flexibility",
      "Companies needing WordPress development services",
      "Organisations requiring e-commerce functionality",
      "Small businesses seeking affordable website solutions",
    ],
  },
  {
    id: "framer",
    name: "Framer Development",
    icon: Layout,
    tagline: "Create stunning, interactive websites with Framer development",
    description:
      "Create stunning, interactive websites with Framer development. Perfect for startups and businesses wanting design-forward websites with smooth animations and micro-interactions.",
    whatsIncluded: [
      "Custom Framer website development",
      "Design to Framer conversion",
      "Animation and interaction implementation",
      "CMS setup and integration",
      "Responsive development for all devices",
      "Form integration and functionality",
      "SEO optimization",
      "Performance optimization",
    ],
    solutions: [
      "Startup websites",
      "Portfolio websites",
      "Product launch pages",
      "Marketing websites",
      "Interactive presentations",
    ],
    technologies: [
      "Framer platform",
      "Framer CMS",
      "Custom code components",
      "Animation and interaction tools",
      "Third-party integrations",
    ],
    idealFor: [
      "Startups",
      "Design-focused businesses",
      "Companies wanting modern interactive websites",
      "Businesses prioritizing visual impact and user experience",
    ],
  },
];

export function DevelopmentServices() {
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
            Development services that deliver
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
                              Technologies
                            </h4>
                            <ul className="space-y-2">
                              {service.technologies.map((item) => (
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

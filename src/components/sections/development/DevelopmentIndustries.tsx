"use client";

import { motion } from "motion/react";
import {
  Building2,
  Heart,
  Home,
  CreditCard,
  ShoppingBag,
  Briefcase,
} from "lucide-react";

const industries = [
  {
    icon: Building2,
    name: "Technology & SaaS",
    description: "SaaS platforms, tech products, developer tools",
  },
  {
    icon: Heart,
    name: "Healthcare & Medical",
    description: "Patient portals, telemedicine platforms, practice websites",
  },
  {
    icon: Home,
    name: "Real Estate",
    description: "Property listings, agent websites, real estate platforms",
  },
  {
    icon: CreditCard,
    name: "Finance & Fintech",
    description: "Financial services websites, investment platforms",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce & Retail",
    description: "Online stores, marketplaces, shopping platforms",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    description: "Law firms, consulting firms, B2B service providers",
  },
];

export function DevelopmentIndustries() {
  return (
    <section className="py-16 sm:py-20 lg:py-[7.5rem] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We speak your industry
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl">
            Our web development services span multiple industries:
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.15 }}
                className="group p-6 sm:p-8 bg-secondary border border-border rounded-xl sm:rounded-2xl hover:border-primary/30 hover:bg-secondary/80 transition-all duration-500"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

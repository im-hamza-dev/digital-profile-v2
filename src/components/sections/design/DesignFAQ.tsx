"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a design project take?",
    answer:
      "Timeline varies by scope. Landing page design: 1-2 weeks. Website design: 2-4 weeks. Mobile app design: 4-6 weeks. Design system: 6-8 weeks. We provide detailed timelines during planning.",
  },
  {
    question: "What design tools do you use?",
    answer:
      "We primarily use Figma for design and prototyping, along with Adobe Creative Suite when needed. We also use tools like Miro for collaboration and user research.",
  },
  {
    question: "Do you provide design assets and files?",
    answer:
      "Yes, we provide all design files including Figma files, design systems, asset libraries, style guides, and specifications for developers.",
  },
  {
    question: "Can you design for both web and mobile?",
    answer:
      "Absolutely. We design responsive web experiences and native mobile interfaces for iOS and Android, ensuring consistent experiences across all platforms.",
  },
  {
    question: "Do you conduct user research?",
    answer:
      "Yes, user research is a core part of our design process. We conduct user interviews, usability testing, competitive analysis, and gather insights to inform design decisions.",
  },
  {
    question: "What's included in a design system?",
    answer:
      "A design system includes design tokens (colors, typography, spacing), component library, style guide, usage guidelines, accessibility standards, and documentation.",
  },
  {
    question: "Do you work with existing brands?",
    answer:
      "Yes, we can work with your existing brand guidelines or help evolve your brand identity. We ensure all designs align with your brand values and visual identity.",
  },
  {
    question: "What happens after design is complete?",
    answer:
      "We provide design handoff documentation, developer collaboration, design system access, and ongoing support. We also offer design iteration and refinement services.",
  },
];

export function DesignFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-[7.5rem] relative">
      <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your questions answered
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: idx * 0.1 }}
                className="border border-border rounded-xl sm:rounded-2xl overflow-hidden bg-background hover:border-primary/30 transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 sm:px-8 py-6 sm:py-8 flex items-center justify-between text-left group"
                >
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.9 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 border-t border-border">
                        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed pt-6">
                          {faq.answer}
                        </p>
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

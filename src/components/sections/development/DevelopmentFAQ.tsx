"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does website development take?",
    answer:
      "Timeline varies by complexity. Landing pages: 1-2 weeks. Small business websites: 2-4 weeks. E-commerce sites: 6-8 weeks. Complex web applications: 10+ weeks. We provide detailed timelines during planning.",
  },
  {
    question: "What's the difference between WordPress, Webflow, and custom development?",
    answer:
      "WordPress offers flexibility and extensive plugins. Webflow provides visual development with clean code. Custom development offers unlimited possibilities for unique requirements. We help you choose the best fit.",
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer:
      "Yes, we offer hosting solutions and ongoing maintenance packages including updates, backups, security monitoring, and technical support.",
  },
  {
    question: "Can you build e-commerce websites?",
    answer:
      "Absolutely. We build e-commerce solutions using WooCommerce, Shopify, Webflow, or custom platforms, depending on your needs and budget.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, all our websites are fully responsive and mobile-optimized. We build mobile-first, ensuring perfect experiences on all devices.",
  },
  {
    question: "Can you integrate with third-party services?",
    answer:
      "Yes, we regularly integrate CRMs (Salesforce, HubSpot, Zoho, Monday), email marketing (Mailchimp, Brevo), payment processors (Stripe), analytics tools, and many other services.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "While we focus on development, we build SEO-friendly websites with clean code, fast performance, and proper technical SEO implementation. We can recommend SEO partners for ongoing optimization.",
  },
  {
    question: "What happens after the website launches?",
    answer:
      "We provide training, documentation, and a warranty period. We also offer ongoing maintenance, updates, and support packages to keep your website running smoothly.",
  },
];

export function DevelopmentFAQ() {
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

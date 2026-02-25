"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "ScruStack delivered exceptional digital product design for our educational platform, meeting every deadline with clear communication. Their UX design expertise and proactive approach provided outstanding value. Highly recommended design partner for tech companies!",
    author: "Mircea M",
    role: "Founder",
    company: "sKOOLvers",
  },
  {
    quote:
      "Working with ScruStack was transformative! Their UI/UX design perfectly captured our vision. The SaaS platform and mobile app exceeded expectations, making event management effortless. Highly recommend their digital product design expertise!",
    author: "Flavian P",
    role: "CEO",
    company: "Ality",
  },
  {
    quote:
      "ScruStack delivered a custom web platform that highlights our event expertise. Their strategic design approach and attention to detail made the design process efficient and collaborative. Highly recommended!",
    author: "Andrei R",
    role: "Founder",
    company: "Twelve",
  },
];

function Star() {
  return (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-primary" viewBox="0 0 20 20">
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  );
}

export function DesignTestimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-[7.5rem] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Stories of success
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl">
            Hear it from our clients
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.15 }}
              className="bg-secondary border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all group"
            >
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="text-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed line-clamp-5">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base shrink-0">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="text-foreground font-semibold text-sm sm:text-base truncate">
                    {testimonial.author}
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-sm">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

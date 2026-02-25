"use client";

import { motion } from "motion/react";

const testimonials = [
  {
    id: "circlone-cto",
    quote:
      "Hamza is a great engineer. He's devoted and hard-working, and crucially is a quick-learner. Throughout his time working with Circlone he has been a critical part of our engineering team, working as a full-stack engineer. Couldn't recommend more highly 10/10",
    author: "CTO",
    role: "CTO",
    company: "Circlone",
  },
  {
    id: "noodlefactory-1",
    quote:
      "Hamza delivered excellent work in bringing our wireframes to life through REACT exactly like how we imagined it to be. I was happy working with him as he has great communication skills and made the process for a non-tech person like myself understand the components of integrating WordPress into REACT. Hamza was also very forthcoming towards additional work, even when the task may be outside his expertise (like SEO). Despite the time difference, Hamza was always available, and he stuck to the schedule while still accommodating our additional requests. I definitely have enjoyed working with Hamza and would highly recommend it to anyone that require his skills.",
    author: "Marylien",
    role: "Client",
    company: "NoodleFactory",
  },
  {
    id: "noodlefactory-2",
    quote:
      "This was my second project with Hamza and I would definitely recommend him if you're looking for a REACT web developer. There has been a lot of sudden changes yet he was able to deliver through the requirements. Again, communicating with him despite the time difference was a breeze and he accommodating to our last-minute meetings with my team to get the tasks completed. Hamza is also resourceful, always having a solution to the problems we faced with the site and to the ideas we have on the site. It was great experience working with him.",
    author: "Marylien",
    role: "Client",
    company: "NoodleFactory",
  },
  {
    id: "headless-client",
    quote:
      "This guy is very cooperative. Has patience to deal the situation. Got very good support in crunch time.",
    author: "Client",
    role: "Client",
    company: "Headless CMS Project",
  },
];

function Star() {
  return (
    <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-primary" viewBox="0 0 20 20">
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
  );
}

export function DevelopmentTestimonials() {
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
              key={testimonial.id}
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
              <p className="text-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed line-clamp-[12]">
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

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  Target,
  Lightbulb,
  Users,
  MessageSquare,
  LucideIcon,
} from 'lucide-react';

const stats = [
  { value: 20, label: 'Projects Completed', suffix: '+' },
  { value: 6, label: 'Years Experience', suffix: '+' },
  { value: 95, label: 'Client Retention', suffix: '%' },
  { value: 32, label: 'Avg Conversion Increase', suffix: '%' },
];

const values: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Target,
    title: 'Creative Excellence',
    description:
      'Award-winning designs that push boundaries and set new standards',
  },
  {
    icon: Lightbulb,
    title: 'Customised Solutions',
    description:
      'Tailored strategies that align perfectly with your business goals',
  },
  {
    icon: Users,
    title: 'Integrated Expertise',
    description:
      'Full-stack capabilities from brand to code in one unified team',
  },
  {
    icon: MessageSquare,
    title: 'Open Communication',
    description:
      'Transparent processes with you involved at every crucial step',
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const hasAnimatedRef = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();
          let start = 0;
          const end = target;
          const duration = 2000;
          const increment = end / (duration / 16);
          timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              if (timer) clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function ValueCard({
  value,
  index,
}: {
  value: (typeof values)[0];
  index: number;
}) {
  const Icon = value.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: index * 0.15 }}
      className="group p-6 sm:p-8 bg-card border border-border rounded-xl sm:rounded-2xl hover:border-primary/30 hover:bg-card/80 transition-all duration-500"
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">
        {value.title}
      </h3>
      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
        {value.description}
      </p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="group py-16 sm:py-20 lg:py-[7.5rem] relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-20 sm:mb-32">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: idx * 0.15 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-2 sm:mb-4">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground text-sm sm:text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-background/50 backdrop-blur-sm border border-border rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 mb-16 sm:mb-24"
        >
          <p className="text-xl sm:text-2xl lg:text-4xl text-foreground leading-relaxed mb-6 sm:mb-8">
            &quot;We don&apos;t just create products we craft{' '}
            <span className="font-semibold transition-colors text-foreground group-hover:text-primary">
              experiences
            </span>{' '}
            that drive growth.&quot;
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <div className="text-center">
              <div className="text-foreground font-semibold">Hamza Iqbal</div>
              <div className="text-muted-foreground text-xs sm:text-sm">
                Co-Founder
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

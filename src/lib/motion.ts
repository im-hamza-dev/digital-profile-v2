/**
 * Centralized motion variants for consistent animations across sections.
 * Use with motion/react: initial, animate, whileInView, etc.
 */

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const fadeInUpStrong = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export const defaultTransition = {
  duration: 1.2,
  ease: "easeInOut" as const,
};

export const viewportOnce = { once: true, margin: "-50px" };

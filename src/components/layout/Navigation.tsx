'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Linkedin, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'backdrop-blur-xl border-b border-border/50',
        isScrolled
          ? 'bg-background/40 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]'
          : 'bg-transparent',
      )}
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 py-4 sm:py-5">
        <div className="relative flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2 -ml-3 rounded-lg hover:bg-card transition-colors shrink-0"
            aria-label="Hamza Iqbal Home"
          >
            {/* <Image
              src="/favicon.png"
              alt="Hamza Iqbal"
              width={56}
              height={56}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-[20px] object-cover shrink-0"
            /> */}
            <span className="text-foreground font-bold text-1xl sm:text-5xl tracking-tight hidden sm:block">
              Hamza .
            </span>
          </Link>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center border border-border rounded-full bg-card/50 px-1.5 py-1">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-muted-foreground hover:text-foreground transition-colors px-4 sm:px-5 py-2 rounded-full hover:bg-background/80 text-sm font-medium"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="hidden lg:flex items-center gap-2">
              <ThemeSwitcher />
              <a
                href="https://linkedin.com/in/iamhamzaiqbal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href="/contact"
              className="hidden sm:inline-flex px-4 sm:px-6 py-2.5 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Contact
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-border flex flex-col gap-2"
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground py-3 px-4 rounded-lg hover:bg-card"
              >
                {label}
              </a>
            ))}
            <div className="pt-2 border-t border-border mt-2">
              <ThemeSwitcher />
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

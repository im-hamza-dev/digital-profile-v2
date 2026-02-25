import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 sm:mb-20">
          <div className="flex items-center gap-3">
            <Image
              src="/favicon.png"
              alt="ScrumStack Solutions"
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-[20px] object-cover shrink-0"
            />
            <div>
              <div className="text-foreground font-bold text-lg sm:text-xl tracking-tight">
                ScrumStack Solutions
              </div>
              <div className="text-muted-foreground text-sm">
                Building digital excellence
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://www.linkedin.com/company/106638005"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-11 sm:h-11 bg-card rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div>
            <h3 className="text-foreground font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
              Company
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#tech-stack"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
              Services
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Overview
                </Link>
              </li>

              <li>
                <Link
                  href="#design"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  href="#development"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
              Legal
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-foreground font-semibold mb-4 sm:mb-6 text-base sm:text-lg">
              About Us
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A digital studio obsessed with crafting exceptional products that
              push boundaries and deliver results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

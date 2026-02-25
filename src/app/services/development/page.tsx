import type { Metadata } from "next";
import { DevelopmentHero } from "@/components/sections/development/DevelopmentHero";
import { DevelopmentServices } from "@/components/sections/development/DevelopmentServices";
import { DevelopmentValues } from "@/components/sections/development/DevelopmentValues";
import { DevelopmentProcess } from "@/components/sections/development/DevelopmentProcess";
import { DevelopmentTestimonials } from "@/components/sections/development/DevelopmentTestimonials";
import { DevelopmentIndustries } from "@/components/sections/development/DevelopmentIndustries";
import { DevelopmentFAQ } from "@/components/sections/development/DevelopmentFAQ";
import { DevelopmentCTA } from "@/components/sections/development/DevelopmentCTA";

export const metadata: Metadata = {
  title: "Development Services – ScruStack",
  description:
    "Build websites that drive business growth. From custom web development to WordPress, Framer and Webflow solutions, we build high-performance websites and applications that convert visitors into customers.",
  openGraph: {
    title: "Development Services – ScruStack",
    description:
      "Build websites that drive business growth. From custom web development to WordPress, Framer and Webflow solutions.",
  },
};

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <DevelopmentHero />
        <DevelopmentServices />
        <DevelopmentValues />
        <DevelopmentProcess />
        <DevelopmentTestimonials />
        <DevelopmentIndustries />
        <DevelopmentFAQ />
        <DevelopmentCTA />
      </main>
    </div>
  );
}

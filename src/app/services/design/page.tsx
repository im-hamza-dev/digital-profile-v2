import type { Metadata } from 'next';
import { DesignHero } from '@/components/sections/design/DesignHero';
import { DesignServices } from '@/components/sections/design/DesignServices';
import { DesignProcess } from '@/components/sections/design/DesignProcess';
import { DesignIndustries } from '@/components/sections/design/DesignIndustries';
import { DesignFAQ } from '@/components/sections/design/DesignFAQ';
import { DesignCTA } from '@/components/sections/design/DesignCTA';

export const metadata: Metadata = {
  title: 'Design Services – ScruStack',
  description:
    'Create beautiful, intuitive interfaces for web and mobile. We design user-centered experiences that balance aesthetics with functionality, driving engagement and conversions.',
  openGraph: {
    title: 'Design Services – ScruStack',
    description:
      'Create beautiful, intuitive interfaces for web and mobile. We design user-centered experiences that balance aesthetics with functionality.',
  },
};

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <DesignHero />
        <DesignServices />
        <DesignProcess />
        <DesignIndustries />
        <DesignFAQ />
        <DesignCTA />
      </main>
    </div>
  );
}

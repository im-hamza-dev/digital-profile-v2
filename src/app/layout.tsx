import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hamzaiqbal.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hamza Iqbal – Senior Frontend Engineer',
    template: '%s | Hamza Iqbal',
  },
  description:
    'Senior Frontend Engineer building scalable SaaS, MVPs, and web applications with React, Next.js, TypeScript & Tailwind.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Hamza Iqbal',
    title: 'Hamza Iqbal – Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer building scalable SaaS, MVPs, and web applications with React, Next.js, TypeScript & Tailwind.',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'Hamza Iqbal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamza Iqbal – Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer building scalable SaaS, MVPs, and web applications with React, Next.js, TypeScript & Tailwind.',
    images: ['/favicon.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#292826',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('hamza-theme');document.documentElement.setAttribute('data-theme',t==='dark'?t:'light');})();`,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased bg-background text-foreground min-h-screen`}
      >
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

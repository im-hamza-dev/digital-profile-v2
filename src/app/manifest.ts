import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Hamza Iqbal – Senior Frontend Engineer',
    short_name: 'Hamza Iqbal',
    description:
      'Senior Frontend Engineer building scalable SaaS, MVPs, and web applications with React, Next.js, TypeScript & Tailwind.',
    start_url: '/',
    display: 'standalone',
    background_color: '#292826',
    theme_color: '#292826',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['business', 'productivity', 'design', 'development'],
    lang: 'en-US',
    dir: 'ltr',
    scope: '/',
    id: '/',
  };
}

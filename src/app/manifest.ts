import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ScrumStack Solutions – We build experiences',
    short_name: 'ScrumStack',
    description:
      'A digital studio specializing in transforming ambitious ideas into exceptional products through design, technology, and innovation.',
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

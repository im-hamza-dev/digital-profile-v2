import type { Metadata } from 'next';
import { StillPointProvider } from './stillpoint.store';

export const metadata: Metadata = {
  title: 'StillPoint',
  description: 'A minimal, linear prompt flow to clarify a problem and pick a next step.',
};

export default function StillPointLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StillPointProvider>{children}</StillPointProvider>;
}


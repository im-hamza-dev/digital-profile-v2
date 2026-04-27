'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function StillPointShell({
  title = 'StillPoint',
  subtitle = 'A quiet, linear prompt flow.',
  children,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-80px)] pt-24 sm:pt-28 pb-16 px-6 sm:px-8">
      <div className="mx-auto w-full max-w-[720px]">
        <div className="mb-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-foreground text-2xl sm:text-3xl font-semibold tracking-tight">
                {title}
              </h1>
              <p className="mt-2 text-muted-foreground">{subtitle}</p>
            </div>
            <Link
              href="/"
              className={cn(
                'text-sm font-medium text-muted-foreground hover:text-foreground transition-colors',
                'rounded-md px-3 py-2 hover:bg-card border border-transparent hover:border-border',
              )}
            >
              Back to site
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card shadow-sm">
          <div className="p-6 sm:p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}


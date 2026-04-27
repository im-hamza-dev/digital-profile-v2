'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export function Progress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const clampedCurrent = Math.max(1, Math.min(total, current));
  const pct = total > 0 ? (clampedCurrent / total) * 100 : 0;

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="text-sm text-muted-foreground">
        {clampedCurrent} of {total}
      </div>
      <div
        className={cn(
          'h-2 w-full max-w-[260px] rounded-full bg-muted overflow-hidden',
          'border border-border',
        )}
        aria-hidden="true"
      >
        <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}


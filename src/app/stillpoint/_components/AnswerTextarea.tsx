'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export function AnswerTextarea({
  id,
  label,
  value,
  onChange,
  placeholder,
  autoFocus,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}) {
  return (
    <div className="space-y-3">
      <label htmlFor={id} className="block text-foreground">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        rows={7}
        className={cn(
          'w-full resize-y rounded-xl border border-border bg-background',
          'px-4 py-3 text-foreground placeholder:text-muted-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background',
        )}
      />
    </div>
  );
}


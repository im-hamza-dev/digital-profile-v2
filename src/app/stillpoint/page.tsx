'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { StillPointShell } from './_components/StillPointShell';
import { AnswerTextarea } from './_components/AnswerTextarea';
import { Button } from '@/components/ui/button';
import { useStillPoint } from './stillpoint.store';

export default function StillPointStartPage() {
  const router = useRouter();
  const { state, setInitialProblem } = useStillPoint();
  const [value, setValue] = React.useState(state.initialProblem);

  const canStart = value.trim().length > 0;

  return (
    <StillPointShell
      subtitle="Answer a short sequence of prompts. One question at a time. No saved data."
    >
      <div className="space-y-6">
        <AnswerTextarea
          id="stillpoint-problem"
          label="What are you trying to resolve?"
          value={value}
          onChange={setValue}
          placeholder="Describe the situation in a sentence or two."
          autoFocus
        />

        <div className="flex items-center justify-end gap-3">
          <Button
            type="button"
            disabled={!canStart}
            onClick={() => {
              const trimmed = value.trim();
              if (!trimmed) return;
              setInitialProblem(trimmed);
              router.push('/stillpoint/flow');
            }}
          >
            Start
          </Button>
        </div>
      </div>
    </StillPointShell>
  );
}


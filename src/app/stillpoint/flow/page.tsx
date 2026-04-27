'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { StillPointShell } from '../_components/StillPointShell';
import { AnswerTextarea } from '../_components/AnswerTextarea';
import { Progress } from '../_components/Progress';
import { QUESTIONS } from '../questions';
import { useStillPoint } from '../stillpoint.store';

export default function StillPointFlowPage() {
  const router = useRouter();
  const { state, setAnswer, back, next } = useStillPoint();

  React.useEffect(() => {
    if (!state.initialProblem.trim()) {
      router.replace('/stillpoint');
    }
  }, [router, state.initialProblem]);

  const total = QUESTIONS.length - 1; // excluding initial problem captured on start screen
  const idx = state.currentQuestionIndex;
  const question = QUESTIONS[idx];

  if (!question) return null;

  const isFirst = idx === 1;
  const isLast = idx === QUESTIONS.length - 1;
  const value = state.answers[question.id] ?? '';
  const canGoNext = value.trim().length > 0;

  return (
    <StillPointShell subtitle="One prompt at a time. Keep it concrete and brief.">
      <div className="space-y-6">
        <Progress current={idx} total={total} />

        <AnswerTextarea
          id={`stillpoint-${question.id}`}
          label={question.prompt}
          value={value}
          onChange={(v) => setAnswer(question.id, v)}
          placeholder="Write your answer here."
          autoFocus
        />

        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
          <Button
            type="button"
            variant="outline"
            disabled={isFirst}
            onClick={() => back()}
          >
            Back
          </Button>
          <Button
            type="button"
            disabled={!canGoNext}
            onClick={() => {
              if (isLast) router.push('/stillpoint/summary');
              else next();
            }}
          >
            {isLast ? 'Review summary' : 'Next'}
          </Button>
        </div>
      </div>
    </StillPointShell>
  );
}


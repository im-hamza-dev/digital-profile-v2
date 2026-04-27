import { QUESTIONS } from '../questions';
import type { StillPointQuestionId } from '../questions';

export function formatStillPointSummary({
  initialProblem,
  answers,
  createdAt = new Date(),
}: {
  initialProblem: string;
  answers: Partial<Record<StillPointQuestionId, string>>;
  createdAt?: Date;
}) {
  const lines: string[] = [];
  lines.push('StillPoint — Summary');
  lines.push(createdAt.toISOString());
  lines.push('');
  lines.push('Problem');
  lines.push(initialProblem.trim() || '(empty)');
  lines.push('');

  for (const q of QUESTIONS.slice(1)) {
    const a = (answers[q.id] ?? '').trim();
    const heading = q.id === 'next-step' ? 'My next step' : q.prompt;
    lines.push(heading);
    lines.push(a || '(empty)');
    lines.push('');
  }

  return lines.join('\n').trimEnd() + '\n';
}


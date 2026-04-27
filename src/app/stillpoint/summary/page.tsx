'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { StillPointShell } from '../_components/StillPointShell';
import { QUESTIONS } from '../questions';
import { useStillPoint } from '../stillpoint.store';
import { formatStillPointSummary } from './formatSummary';

function downloadText(filename: string, content: string) {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export default function StillPointSummaryPage() {
  const router = useRouter();
  const { state, reset } = useStillPoint();
  const [copied, setCopied] = React.useState(false);
  const [copyError, setCopyError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!state.initialProblem.trim()) {
      router.replace('/stillpoint');
    }
  }, [router, state.initialProblem]);

  const summaryText = React.useMemo(() => {
    return formatStillPointSummary({
      initialProblem: state.initialProblem,
      answers: state.answers,
    });
  }, [state.answers, state.initialProblem]);

  async function downloadPdf() {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({
      unit: 'pt',
      format: 'a4',
    });

    const pageWidth = doc.internal.pageSize.getWidth();
    const marginX = 48;
    const maxWidth = pageWidth - marginX * 2;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('StillPoint — Summary', marginX, 64);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text(new Date().toISOString(), marginX, 82);

    doc.setTextColor(20);
    doc.setFontSize(11);

    const lines = doc.splitTextToSize(summaryText.trim(), maxWidth);
    let y = 110;
    const lineHeight = 15;

    for (const line of lines) {
      if (y > 800) {
        doc.addPage();
        y = 64;
      }
      doc.text(String(line), marginX, y);
      y += lineHeight;
    }

    doc.save('stillpoint-summary.pdf');
  }

  return (
    <StillPointShell subtitle="Review your answers. Copy or download your summary.">
      <div className="space-y-6">
        <div className="rounded-xl border border-border bg-background p-5">
          <div className="text-sm text-muted-foreground">Problem</div>
          <div className="mt-2 whitespace-pre-wrap text-foreground">
            {state.initialProblem || '(empty)'}
          </div>
        </div>

        <div className="space-y-4">
          {QUESTIONS.slice(1).map((q) => {
            const answer = (state.answers[q.id] ?? '').trim();
            const isNextStep = q.id === 'next-step';
            return (
              <div
                key={q.id}
                className={[
                  'rounded-xl border p-5',
                  isNextStep
                    ? 'border-primary/40 bg-primary/10'
                    : 'border-border bg-background',
                ].join(' ')}
              >
                <div className="text-sm text-muted-foreground">
                  {isNextStep ? 'My next step' : q.prompt}
                </div>
                <div className="mt-2 whitespace-pre-wrap text-foreground">
                  {answer || '(empty)'}
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-xl border border-border bg-background p-5">
          <div className="text-sm text-muted-foreground mb-2">Plain-text summary</div>
          <pre className="text-xs whitespace-pre-wrap break-words text-foreground/90">
            {summaryText}
          </pre>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={async () => {
                try {
                  setCopyError(null);
                  await navigator.clipboard.writeText(summaryText);
                  setCopied(true);
                  window.setTimeout(() => setCopied(false), 1400);
                } catch {
                  setCopyError('Copy failed. Please select the text and copy manually.');
                }
              }}
            >
              {copied ? 'Copied' : 'Copy summary'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => downloadText('stillpoint-summary.txt', summaryText)}
            >
              Download .txt
            </Button>
            <Button type="button" variant="outline" onClick={downloadPdf}>
              Download PDF
            </Button>
          </div>

          <div className="flex gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => router.push('/stillpoint/flow')}
            >
              Back
            </Button>
            <Button
              type="button"
              onClick={() => {
                reset();
                router.push('/stillpoint');
              }}
            >
              Start over
            </Button>
          </div>
        </div>

        {copyError ? (
          <div
            role="status"
            className="text-sm text-destructive border border-destructive/30 bg-destructive/10 rounded-xl px-4 py-3"
          >
            {copyError}
          </div>
        ) : null}
      </div>
    </StillPointShell>
  );
}


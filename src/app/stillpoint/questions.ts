export const QUESTIONS = [
  { id: 'problem', prompt: 'What are you trying to resolve?' },
  { id: 'why-now', prompt: 'Why is this important right now?' },
  { id: 'facts', prompt: 'What are the concrete facts of the situation?' },
  { id: 'constraints', prompt: 'What constraints or non-negotiables exist?' },
  { id: 'options', prompt: 'What options do you see?' },
  { id: 'risk', prompt: 'What would happen if you did nothing?' },
  { id: 'next-step', prompt: 'What is the single next step you are willing to take?' },
] as const;

export type StillPointQuestionId = (typeof QUESTIONS)[number]['id'];


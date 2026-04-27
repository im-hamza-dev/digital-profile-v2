'use client';

import * as React from 'react';
import { QUESTIONS, type StillPointQuestionId } from './questions';

type StillPointState = {
  initialProblem: string;
  currentQuestionIndex: number;
  answers: Partial<Record<StillPointQuestionId, string>>;
};

type StillPointAction =
  | { type: 'setInitialProblem'; value: string }
  | { type: 'setAnswer'; id: StillPointQuestionId; value: string }
  | { type: 'setCurrentQuestionIndex'; value: number }
  | { type: 'reset' };

const INITIAL_STATE: StillPointState = {
  initialProblem: '',
  currentQuestionIndex: 1,
  answers: {},
};

function clampQuestionIndex(index: number) {
  return Math.max(1, Math.min(QUESTIONS.length - 1, index));
}

function reducer(state: StillPointState, action: StillPointAction): StillPointState {
  switch (action.type) {
    case 'setInitialProblem': {
      const value = action.value;
      return {
        ...state,
        initialProblem: value,
        answers: {
          ...state.answers,
          problem: value,
        },
        currentQuestionIndex: 1,
      };
    }
    case 'setAnswer': {
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.id]: action.value,
        },
      };
    }
    case 'setCurrentQuestionIndex': {
      return {
        ...state,
        currentQuestionIndex: clampQuestionIndex(action.value),
      };
    }
    case 'reset': {
      return INITIAL_STATE;
    }
    default: {
      return state;
    }
  }
}

type StillPointStore = {
  state: StillPointState;
  setInitialProblem: (value: string) => void;
  setAnswer: (id: StillPointQuestionId, value: string) => void;
  back: () => void;
  next: () => void;
  setCurrentQuestionIndex: (value: number) => void;
  reset: () => void;
};

const StillPointContext = React.createContext<StillPointStore | null>(null);

export function StillPointProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const store = React.useMemo<StillPointStore>(() => {
    return {
      state,
      setInitialProblem: (value) => dispatch({ type: 'setInitialProblem', value }),
      setAnswer: (id, value) => dispatch({ type: 'setAnswer', id, value }),
      back: () =>
        dispatch({
          type: 'setCurrentQuestionIndex',
          value: state.currentQuestionIndex - 1,
        }),
      next: () =>
        dispatch({
          type: 'setCurrentQuestionIndex',
          value: state.currentQuestionIndex + 1,
        }),
      setCurrentQuestionIndex: (value) =>
        dispatch({ type: 'setCurrentQuestionIndex', value }),
      reset: () => dispatch({ type: 'reset' }),
    };
  }, [state]);

  return <StillPointContext.Provider value={store}>{children}</StillPointContext.Provider>;
}

export function useStillPoint() {
  const ctx = React.useContext(StillPointContext);
  if (!ctx) {
    throw new Error('useStillPoint must be used within StillPointProvider');
  }
  return ctx;
}


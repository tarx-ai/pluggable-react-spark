import { useState } from 'react';

interface LayoutState {
  leftOpen: boolean;
  rightOpen: boolean;
}

export function useLayoutState() {
  const [state, setState] = useState<LayoutState>({
    leftOpen: false,
    rightOpen: false,
  });

  const updateState = (updates: Partial<LayoutState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  return [state, updateState] as const;
}

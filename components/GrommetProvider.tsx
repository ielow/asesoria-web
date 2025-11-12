'use client';

import { Grommet } from 'grommet';
import { ReactNode } from 'react';

const theme = {
  global: {
    colors: {
      brand: '#4F46E5',
      'accent-1': '#7C3AED',
      'accent-2': '#06B6D4',
      focus: '#4F46E5',
    },
    font: {
      family: 'system-ui, -apple-system, sans-serif',
    },
  },
};

export function GrommetProvider({ children }: { children: ReactNode }) {
  return (
    <Grommet theme={theme} full>
      {children}
    </Grommet>
  );
}

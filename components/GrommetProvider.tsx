'use client';

import { Grommet } from 'grommet';
import { ReactNode } from 'react';

const theme = {
  global: {
    colors: {
      brand: '#7C3AED',
      'accent-1': '#7C3AED',
      'accent-2': '#c4b5fd',
      focus: '#7C3AED',
    },
    font: {
      family: "var(--font-instrument-sans), 'Instrument Sans', sans-serif",
    },
  },
  heading: {
    font: {
      family: "var(--font-league-spartan), 'League Spartan', sans-serif",
    },
    weight: 600,
  },
};

export function GrommetProvider({ children }: { children: ReactNode }) {
  return (
    <Grommet theme={theme} full>
      {children}
    </Grommet>
  );
}

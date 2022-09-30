import { Theme } from 'styled-components'
export const theme: Theme = {
  iconSize: 20,
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '10px',
    '2xl': '12px',
  },
  palette: {
    gray: {
      g1: '#fff',
      g2: '#f1f5f9',
      g3: '#eeeff2',
      g4: '#e4e4e7',
      g5: '#e4e5e9',
      g6: '#c1c1c1',
      g7: '#36454f',
      g8: '#222',
    },
    accent: {
      a1: '#fef3c7',
      a2: '#d97706',
    },
    error: {
      e1: '#fee2e2',
      e2: '#f44336',
    },
  },
  screen: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
}

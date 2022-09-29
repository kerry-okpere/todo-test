import { Theme } from 'styled-components'
export const theme: Theme = {
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '10px',
    '2xl': '12px',
  },
  palette: {
    gray: {
      '001': '#fff',
      '002': '#f1f5f9',
      '003': '#eeeff2',
      '004': '#e4e4e7',
      '005': '#e4e5e9',
      '006': '#c1c1c1',
      '007': '#36454f',
      '008': '#222',
    },
    accent: {
      '001': '#fef3c7',
      '002': '#d97706',
    },
    error: {
      '001': '#fee2e2',
      '002': '#f44336',
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

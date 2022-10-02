import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@styles/theme'

const wrapWithTheme = (Component: ReactNode) => {
  return <ThemeProvider theme={theme}>{Component}</ThemeProvider>
}

export default wrapWithTheme

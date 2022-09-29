import 'styled-components'

declare module 'styled-components' {
  export interface Theme {
    borderRadius: {
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
    iconSize: number
    palette: {
      gray: {
        g1: string
        g2: string
        g3: string
        g4: string
        g5: string
        g6: string
        g7: string
        g8: string
      }
      accent: {
        a1: string
        a2: string
      }
      error: {
        e1: string
        e2: string
      }
    }
    screen: {
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
  }
}

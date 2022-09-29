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
    palette: {
      gray: {
        '001': string
        '002': string
        '003': string
        '004': string
        '005': string
        '006': string
        '007': string
        '008': string
      }
      accent: {
        '001': string
        '002': string
      }
      error: {
        '001': string
        '002': string
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

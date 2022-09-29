import '@nextcss/reset'
import { DefaultLayout } from '@components/templates'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import { theme } from '@styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ThemeProvider>
  )
}

export default MyApp

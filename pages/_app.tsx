import type { AppProps } from 'next/app'

import GlobalStyles from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import "../styles/fonts.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  )
}
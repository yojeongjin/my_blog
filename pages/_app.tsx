import type { AppProps } from 'next/app'
import { useState } from 'react'

import GlobalStyles from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from '../styles/theme'
import "../styles/fonts.css"
import Toggle from '../components/Toggle'


export default function App({ Component, pageProps }: AppProps) {
  const [ isDark, setIsDark ] = useState(true)

  const changeTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
        <Toggle changeTheme={changeTheme} isDark={isDark} />
        <Component {...pageProps} />
      </ThemeProvider>

    </>
  )
}
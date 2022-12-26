import GlobalStyles from '../styles/GlobalStyles'
import type { AppProps } from 'next/app'
import { NextPageContext } from 'next'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
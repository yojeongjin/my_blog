import GlobalStyles from '../styles/GlobalStyles'
import type { AppProps } from 'next/app'
import "../styles/fonts.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
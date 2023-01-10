import { GetStaticProps } from "next"
import Head from "next/head"
import Layout from "../components/Layout"
import PortfolioDetail from "../components/PortfolioDetail"
import SanityService from "../service/SanityService"

export default function Portfolio({portfolio}) {
  const portfolioData = portfolio[0]
  return (
    <>
      <Head>
        <title>오정진 포트폴리오 | 포트폴리오</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <PortfolioDetail portfolio={portfolioData} />
      </Layout>
    </>

  )
}

export const getStaticProps: GetStaticProps = async() => {
  const portfolio = await new SanityService().getPortfolio()

  return {
    props: {
      portfolio
    }
  }
}
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import PortfolioDetail from "../components/PortfolioDetail"
import SanityService from "../service/SanityService"

export default function Portfolio({portfolio}) {
  const portfolioData = portfolio[0]
  return (
    <Layout>
      <PortfolioDetail portfolio={portfolioData} />
    </Layout>
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
import { GetStaticProps } from "next"
import AboutDetail from "../components/AboutDetail"
import Layout from "../components/Layout"
import SanityService from "../service/SanityService"

export default function About({about}) {
  return (
    <Layout>
      <AboutDetail about={about} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const about = await new SanityService().getAbout()

  return {
    props: {
      about
    }
  }
}

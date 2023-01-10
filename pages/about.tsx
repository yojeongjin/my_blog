import { GetStaticProps } from "next"
import Head from "next/head"
import AboutDetail from "../components/AboutDetail"
import Layout from "../components/Layout"
import SanityService from "../service/SanityService"

export default function About({about}) {
  return (
    <>
      <Head>
        <title>오정진 포트폴리오 | About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <AboutDetail about={about} />
      </Layout>
    </>
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

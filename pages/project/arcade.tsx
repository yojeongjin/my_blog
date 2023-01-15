import { GetStaticProps } from "next"
import Head from "next/head"
import SanityService from "../../service/SanityService"

import Layout from "../../components/Layout"
import ArcadeDetail from "../../components/ArcadeDetail"


export default function Post({arcade}) {
  return (
    <>
      <Head>
        <title>오정진 포트폴리오 | Arcade</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <ArcadeDetail arcade={arcade} />   
      </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async() => {
  const arcade = await new SanityService().getArcade()

  return {
    props: {
      arcade
    }
  }
}
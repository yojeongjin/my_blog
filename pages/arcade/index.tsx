import { GetStaticProps } from "next"
import SanityService from "../../service/SanityService"

import Layout from "../../components/Layout"
import ArcadeDetail from "../../components/ArcadeDetail"


export default function Post({arcade}) {
  return (
    <Layout>
      <ArcadeDetail arcade={arcade} />   
    </Layout>
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
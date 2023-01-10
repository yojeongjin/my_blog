import { GetStaticProps } from "next"
import Head from "next/head"
import SanityService from "../../service/SanityService"

import Layout from "../../components/Layout"
import Project from "../../components/Project"
import { PostType } from "../../types"

interface PostProps {
  project: PostType[]
}

export default function Post({project}: PostProps) {
  return (
    <>
      <Head>
        <title>오정진 포트폴리오 | Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <Project project={project} />   
      </Layout>`
    </>
  )
}


export const getStaticProps: GetStaticProps = async() => {
  const project = await new SanityService().getPosts()

  return {
    props: {
      project
    }
  }
}
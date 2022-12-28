import { GetStaticProps } from "next"
import SanityService from "../../service/SanityService"

import Layout from "../../components/Layout"
import Project from "../../components/Project"
import { PostType } from "../../types"

interface PostProps {
  project: PostType[]
}

export default function Post({project}: PostProps) {
  return (
    <Layout>
      <Project project={project} />   
    </Layout>
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
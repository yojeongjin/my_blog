import SanityService from "../../service/SanityService"
import type { GetStaticPaths, GetStaticProps } from "next"
import Layout from "../../components/Layout"
import ProjectDetail from "../../components/ProjectDetail"


export default function ProjectAll() {

  return (
    <Layout>
      <ProjectDetail />
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async() => {
  const posts = await new SanityService().getPosts()

  const paths = posts.map(post => ({
    params: {
      slug: post.slug
    }
  }))
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = ({params}) => {
  const { slug } = params!

  return {
    props: {
      slug
    }
  }
}
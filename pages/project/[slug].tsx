import SanityService from "../../service/SanityService"
import type { GetStaticPaths, GetStaticProps } from "next"
import Layout from "../../components/Layout"
import ProjectDetail from "../../components/ProjectDetail"


export default function ProjectAll({projectDatas}) {
  // const imgArr = projectDatas.contentImage.map((img:any) => {
  //   return img.url
  // })
  // let imgUrl = imgArr.filter((element) => element !== undefined)

  return (
    <Layout>
      <ProjectDetail projectDatas={projectDatas} impression={projectDatas.impression} />
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async() => {
  const projects = await new SanityService().getProject()

  const paths = projects.map(project => ({
    params: {
      slug: project.slug
    }
  }))
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async({params}) => {
  const { slug } = params!
  const projects  = await new SanityService().getProject()
  const projectDatas = projects.find(p => p.slug === slug)

  return {
    props: {
      projectDatas
    }
  }
}
import SanityService from "../../service/SanityService"
import { GetStaticProps } from "next"

export interface PostProps {
  title: string,
  slug: string,
  thumbnail: {
    alt: string,
    imgUrl: string
  },
  contents: [],
  tag: {
    title: string
  }
}


export default function Post({post} : {post: PostProps}) {
  console.log(post)
  return <div>
    <h1>Post </h1>
  </div>
}

export const getStaticPaths = async () => {
  const posts:PostProps[] = await new SanityService().getPosts()

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { slug } = params!
  const posts:PostProps[]  = await new SanityService().getPosts()
  const post = posts.find(p => p.slug === slug)

  return {
    props: {
      post
    }
  }
}
import SanityService from "../../service/SanityService"
import { GetStaticProps } from "next"
import { PostType } from "../../types"

export default function Post({post} : {post: PostType}) {
  return <div>
    <h1>Post </h1>
  </div>
}

export const getStaticPaths = async () => {
  const posts:PostType[] = await new SanityService().getPosts()

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
  const posts:PostType[]  = await new SanityService().getPosts()
  const post = posts.find(p => p.slug === slug)

  return {
    props: {
      post
    }
  }
}
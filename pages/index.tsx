import Header from "../components/Header";
import { GetStaticProps } from "next";
import SanityService from "../service/SanityService";
import MainPost from "../components/MainPost";
import type { PostType } from "../types";

export default function Home({post}) {
  return (
    <>
      <Header />
      <MainPost {...post} />
    </>
  )
}


export const getStaticProps: GetStaticProps = async() => {
  const post: PostType = await new SanityService().getPosts()

  return {
    props: {
      post
    }
  }
}

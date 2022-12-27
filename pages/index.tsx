import { GetStaticProps } from "next";
import SanityService from "../service/SanityService";
import MainPost from "../components/MainPost";
import type { PostType } from "../types";
import styled from "styled-components";

export default function Home({post}) {
  return (
    <HomeBase>
      <video src="https://assets.codepen.io/3364143/7btrrd.mp4" autoPlay playsInline loop muted />
      <MainPost {...post} />
    </HomeBase>
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


const HomeBase = styled.div`
overflow: hidden;
height: 100vh;
> video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`
import { GetStaticProps } from "next";
import Head from "next/head";
import SanityService from "../service/SanityService";
import StacksSection from "../components/StacksSection";
import type { StackType } from "../types";

export default function Home({stack}) {
  return (
    <>
      <Head>
        <title>오정진 포트폴리오 | Stacks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* <meta name="description" content=" " /> */}
      </Head>
      <StacksSection stack={stack} />
    </>
  )
}


export const getStaticProps: GetStaticProps = async() => {
  const stack: StackType = await new SanityService().getStacks()

  return {
    props: {
      stack
    }
  }
}

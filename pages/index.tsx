import { GetStaticProps } from "next";
import SanityService from "../service/SanityService";
import StacksSection from "../components/StacksSection";
import type { StackType } from "../types";
import Layout from "../components/Layout";

export default function Home({stack}) {
  return (
    <Layout>
      <StacksSection stack={stack} />
    </Layout>
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

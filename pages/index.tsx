import { GetStaticProps } from "next";
import SanityService from "../service/SanityService";
import StacksSection from "../components/StacksSection";
import type { StackType } from "../types";

export default function Home({stack}) {
  return (
    <StacksSection stack={stack} />
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

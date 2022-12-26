import { PostType } from "../types";
import styled from "styled-components";

interface MainPostProps {
  post: PostType
}

export default function MainPost(post: MainPostProps) {
  return (
    <MainPostBase>
      <Inner>
        <MainPostContent>
          <MainPostTitle>Tech Stack</MainPostTitle>

          <MainPostSection>
            <StackList>
              <StackItem>html</StackItem>
            </StackList>
          </MainPostSection>
        </MainPostContent>
      </Inner>
    </MainPostBase>
  )
}

const MainPostBase = styled.main`
margin-top: 60px;
`

const Inner = styled.div`
width: 1100px;
height: 570px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
`

const MainPostContent = styled.div`
width: 70%;
height: 80%;
background-color: #fff;
border-radius: 15px;
box-shadow : 5px 5px 8px -8px;
`

const MainPostTitle = styled.div`
border: 1px solid purple;
text-align: center;
`

const MainPostSection = styled.div`
border: 1px solid orange;
margin-top: 100px;
height: calc(100% - 150px);
`

const StackList = styled.ul`

`

const StackItem = styled.li`

`
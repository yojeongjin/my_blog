import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import { useState } from "react"


export default function AboutDetail({about}) {
  const [ select, setSelect ] = useState(1)
  const [ tag, setTag ] = useState(0)

  const contentsDetail = 
  about.map((about, idx) => (
    <Content key={idx} isTag = {tag === idx}>
      <Title>{about.title}</Title>
      <Text>
        <BlockContent blocks={about.contents} projectId="te7gy4v3" dataset="production" />
      </Text>
    </Content>
  ))

  return (
  <AboutBase>
    <AboutWrapper>

      <LeftSide>
        <AboutList>
          <AboutItem
          isSelect = {select === 1}
          onClick = {()=>{setSelect(1), setTag(0)}}
          >자기 소개</AboutItem>
          <AboutItem
          isSelect = {select === 2}
          onClick = {()=>{setSelect(2), setTag(1)}}
          >이직 이유</AboutItem>
          <AboutItem
          isSelect = {select === 3}
          onClick = {()=>{setSelect(3), setTag(2)}}
          >앞으로</AboutItem>
        </AboutList>
      </LeftSide>

      <Border>
        <Line isSelect = {select}>

        </Line>
      </Border>

      <RightSide>
        {contentsDetail}
      </RightSide>

    </AboutWrapper>
  </AboutBase>
  )
}

const AboutBase = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
`

const AboutWrapper = styled.div`
width: 900px;
height: 450px;
background-color: ${(props) => props.theme.contentBg};
border-radius: 25px;
display: flex;
align-items: center;
justify-content: left;
`

const LeftSide = styled.div`
height: 70%;
width: 25%;
display: flex;
align-items: center;
justify-content: center;
`

const AboutList = styled.ul`

`

const AboutItem = styled.li<{isSelect:boolean}>`
padding: 10px 0 10px;
margin-bottom: 10px;
display: flex;
line-height: 34px;
color: ${(props) => props.isSelect ? props.theme.themeColor : props.theme.contentTitleColor};
// color: ${(props) => props.theme.themeColor};
font-weight: 500;
cursor: pointer;
transition: all .2s ease-out;
&:hover {
  color: ${(props) => props.theme.themeColor};
  // color: ${(props) => props.theme.contentTitleColor};
  transition: all .2s ease-out;
}
`

const Border = styled.div`
height: 288px;
width: 1px;
background-color: #ddd;
opacity: 0.2;
`

const Line = styled.div<{isSelect:number}>`
width: 5px;
height: 50px;
background-color: #E74C3C;
margin-left: -2px;
// margin-top: 50px;
margin-top: ${(props) => props.isSelect === 1 ? '50px'
: props.isSelect === 2
? '114px'
: props.isSelect === 3
? '177px'
: '0'
};
transition: all .4s ease-in-out;
`

const RightSide = styled.div`
position: relative;
height: 300px;
width: 75%;
overflow: hidden;
color: ${(props) => props.theme.themeColor};
`

const Content = styled.div<{isTag:boolean}>`
position: absolute;
width: 100%;
height: 280px;
transition: all .6s ease-in-out;
margin-top: ${(props) => props.isTag ? '0px' : '-350px'};
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 15px 30px;
line-height: 1.5;
`

const Title = styled.h1`
font-weight: 700;
font-size: 20px;
margin-bottom: 25px;
`

const Text = styled.div`
font-weight: 400;
padding: 0 30px;
font-size: 14px;
`
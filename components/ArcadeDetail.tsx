import styled from "styled-components"
import Link from "next/link"
import BlockContent from "@sanity/block-content-to-react"

export default function ArcadeDetail({arcade}) {

  const ArcadeDetail = 
  arcade.map((arcade, index) => (
    <ProjectCardWrap key={index}>

      <ProjectImgWrap>
        <ProjectImg src={arcade.thumbnail} alt="썸네일" />
      </ProjectImgWrap>

      <ProjectDescription>
        <Title>
        {arcade.title}
          <SubTitle>{arcade.period}</SubTitle>
        </Title>
        <StackIconWrap>
          {
            arcade.front.map((badge,idx) => (
              <StackIcon key={idx} src={badge} alt="뱃지" />
            ))
          }
          <TextWrap>
            <Link
            href={arcade.link1} 
            style={{display: "flex"}}
            target="_blank" rel="noreferrer">📎
              <LinkSpan>{arcade.title} 바로가기</LinkSpan>
            </Link>
            <Link
            href={arcade.link2} 
            style={{display: "flex"}}
            target="_blank" rel="noreferrer">📎
              <LinkSpan>Github 바로가기</LinkSpan>
            </Link>
          </TextWrap>
        </StackIconWrap>
        <Description>
          {arcade.desc1} <br></br>
          {arcade.desc2} <br></br>
          {arcade.desc3}
        </Description>
      </ProjectDescription>
  </ProjectCardWrap>
  ))
  return (
    <ContentSection>
      <ContetnSectionTitle>
        <BlockContent blocks={arcade[0].contents} projectId={process.env.SANITY_PROJECT_ID} dataset="production" />
      </ContetnSectionTitle>
      {ArcadeDetail}
    </ContentSection>
  )
}

const ContentSection = styled.div`
margin-top: 30px;
padding: 0 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const ContetnSectionTitle = styled.div`
color: ${(props) => props.theme.contentTitleColor};
margin-bottom: 30px;
width: 90%;
`

const ProjectCardWrap = styled.div`
display: flex;
align-items: center;
width: 1100px;
height: 400px;
margin-bottom: 30px;
`

const ProjectDescription = styled.div`
width: 550px;
height: 100%;
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
border-radius: 14px;
padding: 20px;
margin-left: 20px;
transition: 0.3s ease;
`

const Title = styled.div`
display: flex;
font-size: 25px;
`
const SubTitle = styled.h3`
height: 50%;
font-size: 12px;
font-weight: 400;
margin: 12px 0 0 15px;
`

const Description = styled.div`
font-size: 14px;
font-weight: 400;
line-height: 1.7;
margin-top: 20px;
padding-bottom: 10px;
`

const StackIconWrap = styled.div`
padding: 15px 0;
border-bottom: 1px solid  ${(props) => props.theme.borderColor};
`
const StackIcon = styled.img`
margin: 0 7px 7px 0;
`
const TextWrap = styled.div`
font-size: 14px;
font-weight: 400;
`

const LinkSpan = styled.span`
display: block;
padding: 4px 5px;
color: #aaa;
text-decoration: underline;
`

const ProjectImgWrap = styled.div`
background-color: ${(props) => props.theme.contentBg};
width: 550px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
border-radius: 14px;
border: 1px solid ${(props) => props.theme.bgColor};
transition: 0.3s ease;
&:hover {
  transform: scale(1.02);
  background-color: ${(props) => props.theme.bgColor};
}
`
const ProjectImg = styled.img`
width: 95%;
height: 95%;
border-radius: 10px;
`


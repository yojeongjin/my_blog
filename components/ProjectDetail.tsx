import styled from "styled-components"
import { ProjectDetailType } from "../types"
import BlockContent from "@sanity/block-content-to-react"
import Link from "next/link"

interface DetailProps {
  projectDatas: ProjectDetailType,
  impression: []
}

export default function ProjectDetail({projectDatas, impression}: DetailProps) {
  console.log(projectDatas)
  return (
  <ContentSection>
    <ProjectLogo>
      <DetailImg src={projectDatas.image} alt="로고이미지" />
    </ProjectLogo>

    <ProjectSubTitle>{projectDatas.title}</ProjectSubTitle>
    <Content>
      <TextWrap>
        <Description>{projectDatas.desc1}</Description>
        <Description>💻 개발 기간 : {projectDatas.period}</Description>
      </TextWrap>

      <TextWrap>
        <Link 
        href={projectDatas.link1} 
        style={{display: "flex"}}
        target="_blank" rel="noreferrer"
        >📎 
          <LinkSpan>{projectDatas.title} 바로가기</LinkSpan>
        </Link>
      </TextWrap>

    </Content>

    <ProjectSubTitle>프로젝트 기술스택</ProjectSubTitle>
    <Content>
      <IconWrap>
        <StackName>Frontend</StackName>
        {
          projectDatas.front.map((front) => (
            <Icon key={front} src={front} alt="뱃지" />
          ))
        }
      </IconWrap>

      <IconWrap>
        <StackName>Backend</StackName>
        {
          projectDatas.back.map((back) => (
            <Icon key={back} src={back} alt="뱃지" />
          ))
        }
      </IconWrap>

      <IconWrap>
        <StackName>DataBase</StackName>
        {
          projectDatas.db.map((db) => (
            <Icon key={db} src={db} alt="뱃지" />
          ))
        }
      </IconWrap>

      <IconWrap>
        <StackName>Hosting</StackName>
        {
          projectDatas.hosting.map((hosting) => (
            <Icon key={hosting} src={hosting} alt="뱃지" />
          ))
        }
      </IconWrap>
    </Content>

    <ProjectSubTitle>주요기능 미리보기</ProjectSubTitle>
    <Content>
      <TextWrap>
        <BlockContent blocks={projectDatas.contents} projectId="te7gy4v3" dataset="production" />
      </TextWrap>

      <Preview>
        <Thumbnail>
          {
            projectDatas.thumbnail.map((thumbnail) => (
              <ThumbnailImg key={thumbnail} src={thumbnail} alt="썸네일"  />
            ))
          }
        </Thumbnail>
        <BriefDes>
        {
          projectDatas.des.map((data: any) => (
            <DesWrap key={data.subtitle}>
              <Subtitle>{data.subtitle}</Subtitle>
              <BriefInfo>
                {data.briefDes1}
              </BriefInfo>
              <BriefInfo>
                {data.briefDes2}
              </BriefInfo>
              <BriefInfo>
                {data.briefDes3}
              </BriefInfo>
            </DesWrap>
          ))
        }
        </BriefDes>
      </Preview>


    </Content>

    <ProjectSubTitle></ProjectSubTitle>
    <Content>
      <TextWrap>
        <BlockContent blocks={impression} projectId="te7gy4v3" dataset="production" />
      </TextWrap>
    </Content>

  </ContentSection>
  )
}


const ContentSection = styled.div`
margin-top: 10px;
padding: 0 10px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const DetailImg = styled.img`

`

const ProjectLogo = styled.div`
height: 200px;
display: flex;
align-items: center;
justify-content: center;
`

const ProjectSubTitle = styled.div`
width: 900px;
color: ${(props) => props.theme.contentTitleColor};
font-weight: 600;
margin: 10px 0 5px;
padding: 0 5px;
`


const Content = styled.div`
display: flex;
flex-direction: column;
width: 900px;
justify-content: space-around;
background-color: ${(props) => props.theme.contentBg};
border-radius: 14px;
padding: 15px 20px;
`

const TextWrap = styled.div`
padding: 13px 25px;
font-size: 14px;
font-weight: 400;
`

const Description = styled.p`
padding: 2px 0;
`
const LinkSpan = styled.span`
display: block;
padding: 4px 5px;
color: #aaa;
text-decoration: underline;
`


const IconWrap = styled.div`
padding: 13px 25px;
border-bottom: 1px solid  ${(props) => props.theme.borderColor};
`

const StackName = styled.div`
margin-bottom: 10px;
`

const Icon = styled.img`
margin-right: 15px;
`


const Thumbnail = styled.div`
width: 550px;
`

const ThumbnailImg = styled.img`
width: 100%;
height: 235px;
`

const BriefDes = styled.div`
width: 550px;
`

const Subtitle = styled.h3`
font-size: 17px;
font-weight: 600;
margin-bottom: 15px;
`
const DesWrap = styled.div`
display: flex;
align-items: start;
justify-content: center;
flex-direction: column;
padding: 0 15px;
font-size: 14px;
font-weight: 400;
height: 235px;
margin-bottom: 5px;
`

const BriefInfo = styled.p`
padding: 0 5px;
line-height: 1.4;
margin-bottom: 3px;
`

const Preview = styled.div`
display: flex;
`
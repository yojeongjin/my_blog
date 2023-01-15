import Link from "next/link"
import styled from "styled-components"
import { PostType } from "../types"

interface ProjectProps {
  project: PostType[]
}

export default function Project({project}: ProjectProps) {
  const ProjectDetail = 
  project.map((project, index) => (
    <ProjectCardWrap key={index}>
      {
        project.slug === 'arcade' 
        ?
        <Link href='/project/arcade'>
          <ProjectImgWrap>
            <ProjectImg src={project.thumbnail} alt="썸네일" />
          </ProjectImgWrap>
        </Link>
        : project.slug === 'portfolio'
        ?
        <Link href='/project/portfolio'>
          <ProjectImgWrap>
            <ProjectImg src={project.thumbnail} alt="썸네일" />
          </ProjectImgWrap>
        </Link>
        :
        <Link href={`/project/${project.slug}`}>
          <ProjectImgWrap>
            <ProjectImg src={project.thumbnail} alt="썸네일" />
          </ProjectImgWrap>
        </Link>
      }
      <ProjectDescription>
        <Title>
          {project.title}
          <SubTitle>
            {project.period} &nbsp; {project.desc}
          </SubTitle>
        </Title>
        <StackIconWrap>
          <div>
          {
            project.front.map((badge) => (
              <StackIcon key={badge} src={badge} alt="뱃지" />
            ))
          }
          </div>
          <div>
          {
            project.back.map((badge) => (
              <StackIcon key={badge} src={badge} alt="뱃지" />
            ))
          }
          </div>
        </StackIconWrap>
        <Description>
          {project.desc1} <br></br>
          {project.desc2} <br></br>
          {project.desc3}
        </Description>
      </ProjectDescription>
    </ProjectCardWrap>
  ))

  return (
    <ContentSection>
      <ContetnSectionTitle> 각 썸네일을 클릭하면 자세히 볼 수 있어요!</ContetnSectionTitle>
      {ProjectDetail}
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
width: 100%;
margin-bottom: 14px;
padding: 0 150px;
`

const ProjectCardWrap = styled.div`
display: flex;
align-items: center;
width: 1100px;
height: 300px;
margin-bottom: 30px;
`

const ProjectDescription = styled.div`
width: 550px;
height: 95%;
display: flex;
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
line-height: 1.5;
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


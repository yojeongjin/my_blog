import styled from "styled-components"
import { IconType, PostType } from "../types"

interface ProjectProps {
  project: PostType[]
}

export default function Project({project}: ProjectProps) {

  const frontIcon = project.map((project) => {
    return project.front
  })
  const frontBadge: IconType[] = frontIcon[0]

  const ProjectDetail = 
  project.map((project) => (
    <ProjectCardWrap key={project.title}>
      <ProjectImg src={project.thumbnail.imgUrl} alt="썸네일" />
      <ProjectDescription>
        <Title>{project.title}</Title>
        <StackIconWrap>
          {
            frontBadge.map((front) => (
              <StackIcon src={front.icon.url} alt="기술스택뱃지" key={front.icon.url}/>
            ))
          }
        </StackIconWrap>
        <Description>
          📎 {project.desc1} <br></br>
          📎 {project.desc2} <br></br>
          📎 {project.desc3}
        </Description>
      </ProjectDescription>
    </ProjectCardWrap>
  ))

  return (
    <ContentSection>
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
border: 1px solid #fff;
`

const ProjectCardWrap = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 300px;
border: 1px solid purple;
`

const ProjectDescription = styled.div`
flex: 1;
display: flex;
flex-direction: column;
background-color: ${(props) => props.theme.contentBg};
border-radius: 14px;
border: 1px solid ${(props) => props.theme.bgColor};
padding: 20px;
margin-left: 20px;
cursor: pointer;
transition: 0.3s ease;
`

const Title = styled.div`
display: flex;
align-items: center;
font-size: 25px;
`
const Description = styled.div`
font-size: 14px;
font-weight: 400;
line-height: 1.5;
margin-top: 20px;
padding-bottom: 10px;
`

const StackIconWrap = styled.div`
display: flex;
align-items: center;
padding: 15px 0;
border-bottom: 1px solid  ${(props) => props.theme.borderColor};
`
const StackIcon = styled.img`
margin-right: 7px;
`
const ProjectImg = styled.img`
flex: 1;
height: 95%;
`


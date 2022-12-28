import styled from "styled-components"

export default function Project() {
  return (
    <ContentSection>
      <ProjectCardWrap>
        <ProjectImg></ProjectImg>
        <ProjectDescription>룰룰</ProjectDescription>
      </ProjectCardWrap>
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
flex-wrap: wrap;
width: 1000px;
border: 1px solid purple;
`

const ProjectDescription = styled.div`
border: 1px solid #fff;
flex: 1;
display: flex;
flex-direction: column;
width: 250px;
font-size: 16px;
background-color: ${(props) => props.theme.contentBg};
border-radius: 14px;
border: 1px solid ${(props) => props.theme.bgColor};
padding: 20px;
margin-left: 70px;
cursor: pointer;
transition: 0.3s ease;
`

const ProjectImg = styled.div`
border: 1px solid #aaa;
flex: 1;
`
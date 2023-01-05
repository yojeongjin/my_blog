import styled from "styled-components"

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
      {/* <ContetnSectionTitle>각 썸네일을 클릭하면 자세히 볼 수 있어요!</ContetnSectionTitle> */}
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
margin-bottom: 14px;
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


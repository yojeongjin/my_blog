import styled from "styled-components"

export default function ProjectDetail() {
  return (
  <ContentSection>
    <ProjectLogo></ProjectLogo>

    <ProjectSubTitle>오늘 VOCA</ProjectSubTitle>
    <Content>

      <TextWrap>
        <Description>간단 설명</Description>
        <Description>개발기간</Description>
      </TextWrap>

      <TextWrap>
        <LinkSpan>홈페이지</LinkSpan>
        <LinkSpan>깃허브</LinkSpan>
      </TextWrap>

    </Content>

    <ProjectSubTitle>프로젝트 기술스택</ProjectSubTitle>
    <Content>
      <DetailImg />
    </Content>

    <ProjectSubTitle>프로젝트 구조</ProjectSubTitle>
    <Content>
      <DetailImg />
    </Content>

    <ProjectSubTitle>주요기능 미리보기</ProjectSubTitle>
    <ContentList>
      <ContentItem>
        <Thumbnail></Thumbnail>
        <BriefDes></BriefDes>
      </ContentItem>

      <ContentItem>
        <Thumbnail></Thumbnail>
        <BriefDes></BriefDes>
      </ContentItem>

      <ContentItem>
        <Thumbnail></Thumbnail>
        <BriefDes></BriefDes>
      </ContentItem>
    </ContentList>    

    <ProjectSubTitle>주요기능 미리보기</ProjectSubTitle>
    <Content>
      <TextWrap>
        <Description>느낀점</Description>
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


const ProjectLogo = styled.div`
width: 900px;
height: 200px;
border: 1px solid #fff;
`

const ProjectSubTitle = styled.div`
width: 900px;
border: 1px solid black;
color: ${(props) => props.theme.contentTitleColor};
font-weight: 600;
`


const Content = styled.div`
display: flex;
flex-direction: column;
width: 900px;
justify-content: space-around;
background-color: ${(props) => props.theme.contentBg};
border-radius: 14px;
border: 1px solid ${(props) => props.theme.bgColor};
`

const ContentList = styled.ul`
display: flex;
flex-direction: column;
width: 900px;
justify-content: space-around;
background-color: ${(props) => props.theme.contentBg};
border-radius: 14px;
border: 1px solid ${(props) => props.theme.bgColor};
`

const ContentItem = styled.li`
border: 1px solid #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-size: 16px;
width: 100%;
height: 100%;
&:first-child {
border-radius: 13px 13px 0 0;
}
&:last-child {
border-radius: 0 0 13px 13px;
}
& + li {
  border-top: 1px solid ${(props) => props.theme.borderColor};
}
`
const TextWrap = styled.div`
margin: 10px 0;
border: 1px solid #fff;
font-size: 13px;
font-weight: 400;
`

const Description = styled.p`

`
const LinkSpan = styled.span`
display: block;
`

const DetailImg = styled.img`
width: 100%;
height: 100%;
`

const Thumbnail = styled.div`
border: 1px solid #fff;
`

const BriefDes = styled.div`
border: 1px solid #fff;
`
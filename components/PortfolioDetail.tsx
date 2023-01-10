import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import Link from "next/link"

export default function PortfolioDetail({portfolio}) {

  return (
    <ContentSection>

      <ProjectLogo>
        <DetailImg src={portfolio.image} alt="로고이미지" />
      </ProjectLogo>

      <ProjectInfo>
        <h1>{portfolio.desc1}</h1>
        <Link
          href={portfolio.link1}
          style={{display: "flex"}}
          target="_blank" rel="noreferrer"
        > 📎 <LinkSpan>Github 바로가기</LinkSpan>
        </Link>
      </ProjectInfo>

      <Content>
        {
          portfolio.des.map((data) => (
            <TextWrap key={data.subtitle}>
              <h4
              style={{fontWeight: "bold"}}>
              {data.subtitle}
              </h4>
                {data.briefDes1}
                {data.briefDes2}
            </TextWrap>
          ))
        }
      </Content>

      <ProjectSubTitle>📂 저의 포트폴리오는 이런내용을 담고 있어요!</ProjectSubTitle>
      <Content>
        <TextWrap>
          <BlockContent blocks={portfolio.contents} projectId={process.env.SANITY_PROJECT_ID} dataset="production" />
        </TextWrap>
      </Content>

      <ProjectSubTitle>🛠 사용기술</ProjectSubTitle>
      <Content>
        <IconWrap>
          {
            portfolio.tag.map((tag,idx) => (
              <Icon key={idx} src={tag} alt="뱃지" />
            ))
          }
        </IconWrap>
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
const ProjectInfo = styled.div`
padding: 25px 0;
`

const DetailImg = styled.img`

`

const ProjectLogo = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 80%;


${DetailImg} {
  width: 100%;
}
`

const LinkSpan = styled.span`
display: block;
padding: 4px 5px;
color: #aaa;
text-decoration: underline;
`

const ProjectSubTitle = styled.div`
width: 900px;
color: ${(props) => props.theme.contentTitleColor};
font-weight: 600;
margin: 30px 0 5px;
padding: 0 5px;
`


const Content = styled.div`
display: flex;
flex-direction: column;
width: 900px;
justify-content: space-around;
background-color: ${(props) => props.theme.contentBg};
border-radius: 14px;
padding: 10px 15px;
`

const TextWrap = styled.div`
padding: 8px 25px;
font-size: 14px;
font-weight: 400;
line-height: 1.5;
`

const IconWrap = styled.div`
padding: 8px 25px;
// border-bottom: 1px solid  ${(props) => props.theme.borderColor};
`

const Icon = styled.img`
margin-right: 15px;
`
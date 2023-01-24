import styled from "styled-components"
import Head from "next/head"
import { ProjectDetailType } from "../types"
import BlockContent from "@sanity/block-content-to-react"
import Link from "next/link"

interface DetailProps {
  projectDatas: ProjectDetailType,
  impression: []
}

export default function ProjectDetail({projectDatas, impression}: DetailProps) {

  return (
    <>
      <Head>
        <title>오정진 포트폴리오 | {projectDatas.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

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
            <Link 
            href={projectDatas.link2} 
            style={{display: "flex"}}
            target="_blank" rel="noreferrer"
            >📎 
              <LinkSpan>Github 바로가기</LinkSpan>
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
            <BlockContent blocks={projectDatas.contents} projectId={process.env.SANITY_PROJECT_ID} dataset="production" />
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

        <ProjectSubTitle>후기 및 개선방향</ProjectSubTitle>
        <Content>
          <TextWrap>
            <BlockContent blocks={impression} projectId={process.env.SANITY_PROJECT_ID} dataset="production" />
          </TextWrap>
        </Content>

        {
          projectDatas.thumbnailAdd && projectDatas.title !== "Theine"
          ?
          <>
            <ProjectSubTitle>❗️ 이런 기능이 추가되었어요!</ProjectSubTitle>
            <Content>
              <TextWrap>
                <BlockContent blocks={projectDatas.contentsAdd} projectId={process.env.SANITY_PROJECT_ID} dataset="production" />
              </TextWrap>

              <Preview>
                <Thumbnail>
                  {
                    projectDatas.thumbnailAdd.map((thumbnailAdd) => (
                      <ThumbnailImg key={thumbnailAdd} src={thumbnailAdd} alt="썸네일"  />
                    ))
                  }
                </Thumbnail>
                <BriefDes>
                {
                  projectDatas.desAdd.map((desAdd: any) => (
                    <DesWrap key={desAdd.subtitle}>
                      <Subtitle>{desAdd.subtitle}</Subtitle>
                      <BriefInfo>
                        {desAdd.briefDes1}
                      </BriefInfo>
                      <BriefInfo>
                        {desAdd.briefDes2}
                      </BriefInfo>
                    </DesWrap>
                  ))
                }
                </BriefDes>
              </Preview>
            </Content>
          </>
          :
          <>
            <ProjectSubTitle>❗️ 결제 시연 영상</ProjectSubTitle>
            <Content>
              <TextWrap>
                <BlockContent blocks={projectDatas.contentsAdd} projectId={process.env.SANITY_PROJECT_ID} dataset="production" />
              </TextWrap>
              <AddThumbnail>
                <ThumbnailImg style={{height: "auto"}} src={projectDatas.thumbnailAdd[0]} alt="썸네일" />
              </AddThumbnail>
              <BriefDes>
                {
                  projectDatas.desAdd.map((desAdd: any) => (
                    <DesWrap key={desAdd.subtitle}  style={{height: "auto"}}>
                      <Subtitle>{desAdd.subtitle}</Subtitle>
                      <BriefInfo>
                        {desAdd.briefDes1}
                      </BriefInfo>
                      <BriefInfo>
                        {desAdd.briefDes2}
                      </BriefInfo>
                    </DesWrap>
                  ))
                }
              </BriefDes>
              <AddThumbnail>
                <ThumbnailImg style={{height: "auto"}} src={projectDatas.thumbnailAdd[1]} alt="썸네일" />
              </AddThumbnail>
            </Content>
          </>
        }


      </ContentSection>
    </>
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
display: flex;
align-items: center;
justify-content: center;
width: 80%;


${DetailImg} {
  width: 100%;
}
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
font-size: 15px;
font-weight: 400;
line-height: 1.5;
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

const AddThumbnail = styled.div`

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
margin-bottom: 5px;
`

const Preview = styled.div`
display: flex;
`
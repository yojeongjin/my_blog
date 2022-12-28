import styled from "styled-components";
import { StackType } from "../types";

interface StackProps {
  stack: StackType[]
}

export default function StacksSection({stack}: StackProps) {
  const frontArray = stack.filter(el=>el.tag=='Frontend')
  const backArray = stack.filter(el=>el.tag=='Backend')

  const StackDetail = frontArray.map((front) => (
    <ContentItem key={front.title}>
      <Stacks>
        <StacksIcon src={front.image.imagUrl} alt="아이콘" />
        {front.title}
      </Stacks>
      <Category>
        {front.contents}
      </Category>
      <DropDownWrap>
        <DropDownMenu>
          <DropDown>
            {/* <ul>
              <li>더 보기</li>
            </ul> */}
          </DropDown>
        </DropDownMenu>
      </DropDownWrap>
    </ContentItem>
  ))

  const AnotherDetail = backArray.map((back) => (
    <StackCard key={back.title}>
      <div style={{display: "flex", alignItems: "center"}}>
        <ImgWrapper>
          <StacksIcon 
          src={back.image.imagUrl} alt="아이콘"
          style={{margin: "0 auto"}}
          />
        </ImgWrapper>
        {back.title}
      </div>
      <CardText>{back.contents}</CardText>
      <CartBtn>
        <ContentBtn>자세히 보기</ContentBtn>
      </CartBtn>
    </StackCard>
  ))

  return (
    <>
      <WrapperHeader>
        <WrapperContext>
          <Title>기술 스택 소개</Title>
          <ContentText>
          Grab yourself 10 free images from Adobe Stock in a 30-day free trial plan and find perfect image, 
          that will help you with your new project
          </ContentText>
          <ContentBtn>자세히 보기</ContentBtn>
        </WrapperContext>
        <ContentWrapperImg 
        src="https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/stacks.webp"
        alt="기술 이미지" />
      </WrapperHeader>

      <ContentSection>
        <ContetnSectionTitle>Frontend</ContetnSectionTitle>
        <ContentList>
          {StackDetail}
        </ContentList>
      </ContentSection>

      <ContentSection>
        <StackCardWrap>
          {AnotherDetail}
        </StackCardWrap>
      </ContentSection>

    </>
  )
}


const WrapperHeader = styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
background-image: url("https://www.transparenttextures.com/patterns/cubes.png"),
linear-gradient(
 to right top,
 #cf4af3,
 #e73bd7,
 #f631bc,
 #fd31a2,
 #ff3a8b,
 #ff4b78,
 #ff5e68,
 #ff705c,
 #ff8c51,
 #ffaa49,
 #ffc848,
 #ffe652
);
border-radius: 14px;
padding: 20px 40px;
`

const WrapperContext = styled.div`
max-width: 350px;
`
const Title = styled.h3`
font-weight: 500;
font-size: 17px;
display: flex;
align-items: center;
margin: 0;
`

const ContentText = styled.div`
font-weight: 400;
font-size: 14px;
margin-top: 16px;
line-height: 1.7em;
color: #ebecec;
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
`

const ContentBtn = styled.button`
background-color: #3a6df0;
border: none;
padding: 8px 26px;
color: #fff;
border-radius: 20px;
margin-top: 16px;
cursor: pointer;
transition: 0.3s;
white-space: nowrap;
`

const ContentWrapperImg = styled.img`
width: 186px;
object-fit: cover;
margin-top: -25px;
object-position: center;
`

const ContentSection = styled.div`
margin-top: 30px;
padding: 0 10px;
display: flex;
flex-direction: column;
`
const ContetnSectionTitle = styled.div`
color: ${(props) => props.theme.contentTitleColor};
margin-bottom: 14px;
`
const ContentList = styled.ul`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
justify-content: space-around;
background-color: ${(props) => props.theme.contentBg};
padding-left: 0;
margin: 0;
border-radius: 14px;
border: 1px solid ${(props) => props.theme.bgColor};
cursor: pointer;
`
const ContentItem = styled.li`
padding: 10px 18px;
display: flex;
align-items: center;
font-size: 16px;
width: 100%;
height: 100%;
white-space: nowrap;
transition: 0.3s;
&:hover {
  background-color: ${(props) => props.theme.bgColor};
  &:first-child {
    border-radius: 13px 13px 0 0;
   }
   &:last-child {
    border-radius: 0 0 13px 13px;
   }
}
& + li {
  border-top: 1px solid ${(props) => props.theme.borderColor};
}
`

const Stacks = styled.div`
display: flex;
align-items: center;
width: 25%;
`

const StacksIcon = styled.img`
width: 22px;
height: 22px;
margin-right: 10px;
`

const Category = styled.span`
width: 70%;
position: relative;
display: inline-block;
font-size: 13px;
font-weight: 400;
text-overflow: ellipsis;
`

const DropDownWrap = styled.div`
width: 5%;
display: flex;
justify-content: flex-end;
`

const DropDownMenu = styled.div`
width: 5px;
height: 5px;
background-color: ${(props) => props.theme.buttonInactive};
border-radius: 50%;
box-shadow: 7px 0 0 0 ${(props) => props.theme.buttonInactive}, 14px 0 0 0 ${(props) => props.theme.buttonInactive};
margin: 0 12px;
`

const DropDown = styled.button`
position: relative;
height: 53px;
width: 40px;
top: -24px;
display: flex;
left: -5px;
background: transparent;
border: none;
cursor: pointer;
`

const StackCardWrap = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
width: 1100px;
`

const StackCard = styled.div`
display: flex;
flex-direction: column;
width: calc(33.3% - 20px);
font-size: 16px;
background-color: ${(props) => props.theme.contentBg};
border-radius: 14px;
border: 1px solid ${(props) => props.theme.bgColor};
padding: 20px;
margin: 0 0 8px 15px;
cursor: pointer;
transition: 0.3s ease;
&:hover {
  transform: scale(1.02);
  background-color: ${(props) => props.theme.bgColor};
 }
`

const CardText = styled.div`
font-size: 14px;
font-weight: 400;
line-height: 1.6em;
margin-top: 20px;
border-bottom: 1px solid  ${(props) => props.theme.borderColor};
padding-bottom: 20px;
`

const CartBtn = styled.div`
display: flex;
align-items: center;
margin-left: auto;
margin-top: 16px;
`

const ImgWrapper = styled.div`
width: 32px;
height: 32px;
border-radius: 50%;
background-color: #ddd;
display: flex;
align-items: center;
margin-right: 8px;
`
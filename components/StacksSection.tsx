import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { StackType } from "../types";
import Layout from "./Layout";
import Modal from "./Modal";

interface StackProps {
  stack: StackType[]
}

export default function StacksSection({stack}: StackProps) {
  const frontArray = stack.filter(el=>el.tag=='Frontend')
  const backArray = stack.filter(el=>el.tag=='Backend')

  const [ dropDown, setDropDown ] = useState<boolean>(false)
  const [ dropIdx, setDropIdx ] = useState<number>(null)
  const [ openModal, setOpenModal ] = useState<boolean>(false)
  const [ stackContents, setStackContents ] = useState<StackType>({
    title: '',
    des1: '',
    des2: '',
    contents: '',
    image: '',
    tag: '',
  })

  const showModal = (content) => {
    setOpenModal(true)
    setStackContents(content)
  } 

  const dropHandler = (idx) => {
    setDropIdx(idx)
    setDropDown(!dropDown)
  }

  const StackDetail = frontArray.map((front,idx) => (
    <ContentItem key={idx}>
      <Stacks>
        <StacksIcon src={front.image} alt="아이콘" />
        {front.title}
      </Stacks>
      <Category>
        {front.contents}
      </Category>
      <DropDownWrap onClick={()=>dropHandler(idx)}>
        <DropDownMenu>
          <DropDown drop={dropDown && dropIdx === idx} onClick={() => {showModal(front)}}> 
            더 보기 
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
          src={back.image} alt="아이콘"
          style={{margin: "0 auto"}}
          />
        </ImgWrapper>
        {back.title}
      </div>
      <CardText>{back.contents}</CardText>
      <CardBtn onClick={()=>{showModal(back)}}>
        <ContentBtn>자세히 보기</ContentBtn>
      </CardBtn>
    </StackCard>
  ))

  return (
    <>
      <Layout>
        <WrapperHeader>
          <WrapperContext>
            <ContentText>
            <em style={{fontWeight: "bold", fontSize: "15px"}}>‘이게 최선입니까? 확실해요?’</em> <br></br>
            코드를 작성 할 때마다 유명 드라마 나온 이 대사를 되뇌입니다.<br></br>
            지금 내가 친 코드가 제대로 된 코드인지 더 나은 코드는 없는지 끊임없이 생각합니다.<br></br>
            <br></br>
            단순히 <em style={{fontWeight: "bold", fontSize: "15px"}}>‘기능을 구현하는 사람’</em> 보다는 <em style={{fontWeight: "bold", fontSize: "15px"}}>‘코드를 작성하는 사람’</em>이 되고 싶은 개발자입니다. <br></br>
            끊임없이 공부하고 성실하게 쌓은 지식으로 실질적인 도움이 되는 개발자로 일하고싶습니다.
            </ContentText>
            <ContentBtn>
              <Link href='/about'>
              자세히 보기
              </Link>
            </ContentBtn>
          </WrapperContext>
          <ContentWrapperImg 
          src="https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/stacks.webp"
          alt="기술 이미지" />
        </WrapperHeader>

        <ContentSection>
          <ContentList>
            {StackDetail}
          </ContentList>
        </ContentSection>

        <ContentSection>
          <StackCardWrap>
            {AnotherDetail}
          </StackCardWrap>
        </ContentSection>
      </Layout>

      {
        openModal &&
        <Modal setOpenModal={setOpenModal} stackContents={stackContents}/>
      }

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
padding: 20px 80px;
`

const WrapperContext = styled.div`
max-width: 550px;
`

const ContentText = styled.div`
font-weight: 400;
font-size: 14px;
margin-top: 16px;
line-height: 1.7;
color: #ebecec;
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
padding: 7px 0;
&:hover {
  scale: 1.1;
}
`

const DropDownMenu = styled.div`
width: 5px;
height: 5px;
background-color: ${(props) => props.theme.buttonInactive};
border-radius: 50%;
box-shadow: 7px 0 0 0 ${(props) => props.theme.buttonInactive}, 14px 0 0 0 ${(props) => props.theme.buttonInactive};
margin: 0 12px;
`

const DropDown = styled.button<{drop: boolean}>`
position: relative;
top: 10px;
right: 30px;
padding: 7px 20px;
border-radius: 15px;
background: ${(props) => props.theme.dropdownBg};
transition: all 0.4s ease;
font-size: 12px;
display: ${(props) =>  props.drop ? 'show' : 'none'};
&:hover{
  background-color: ${(props) => props.theme.dropdownHover};
}
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
transition: 0.3s ease;
&:hover {
  transform: scale(1.02);
  background-color: ${(props) => props.theme.bgColor};
 }
`

const CardText = styled.div`
height: 80px;
font-size: 14px;
font-weight: 400;
line-height: 1.5;
margin-top: 20px;
border-bottom: 1px solid  ${(props) => props.theme.borderColor};
padding-bottom: 20px;
`

const CardBtn = styled.div`
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
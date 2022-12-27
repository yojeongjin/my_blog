import { PostType } from "../types";
import styled from "styled-components";

interface MainPostProps {
  post: PostType
}

export default function MainPost(post: MainPostProps) {
  return (
    <MainPostBase>
      <Inner>
        <MainPostContent>

          <PostHeader>
            <MenuCircle></MenuCircle>

            <SearchBar>
              <Input type="text" placeholder="Search" />
            </SearchBar>

            <HeaderProfile>
              <Norification>
                <NorificationNumber>3</NorificationNumber>
                <svg viewBox="0 0 24 24" fill="#f9fafb" stroke="#f9fafb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{width: "24px", height: "24px"}}>
                  <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                </svg>
              </Norification>
              <ProfileImg />
            </HeaderProfile>
          </PostHeader>

          <MainContainer>
            <MainHeader>
              <HeaderMenu>
                <HeaderItem>Stacks</HeaderItem>
                <HeaderItem>Projects</HeaderItem>
                <HeaderItem>About</HeaderItem>
              </HeaderMenu>
            </MainHeader>
          </MainContainer>

          <ContentWrapper>
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
          </ContentWrapper>
          <ContentSection>
            <ContetnSectionTitle>Main Skills</ContetnSectionTitle>
          </ContentSection>
        </MainPostContent>
      </Inner>
    </MainPostBase>
  )
}

const MainPostBase = styled.main`
margin-top: 50px;
position: fixed;
right: 0;
top: 0;
width: 100%;
height: 100%;
`

const Inner = styled.div`
width: 1100px;
margin: 0 auto;
`

const MainPostContent = styled.div`
background-color: ${(props) => props.theme.bgColor};
position: relative;
width: 100%;
height: 80vh;
display: flex;
flex-direction: column;
overflow: hidden;
border-radius: 14px;
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
font-size: 15px;
font-weight: 500;
`

const PostHeader = styled.div`
display: flex;
align-items: center;
flex-shrink: 0;
height: 58px;
width: 100%;
border-bottom: 1px solid ${(props) => props.theme.borderColor};
padding: 0 30px;
white-space: nowrap;
`

const MenuCircle = styled.div`
width: 15px;
height: 15px;
background-color: #f96057;
border-radius: 50%;
box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
margin-right: 195px;
flex-shrink: 0;
`

const SearchBar = styled.div`
width: 100%;
height: 40px;
max-width: 400px;
display: flex;
margin: 0 auto;
border-radius: 4px;
`
const Input = styled.input`
width: 100%;
height: 100%;
border: none;
background-color: ${(props) => props.theme.searchBg};
border-radius: 4px;
font-size: 15px;
font-weight: 500;
padding: 0 20px 0 40px;
box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
background-size: 14px;
background-repeat: no-repeat;
background-position: 16px 48%;
color: ${(props) => props.theme.themeColor};
`

const HeaderProfile = styled.div`
display: flex;
align-items: center;
padding: 0 16px 0 40px;
margin-left: auto;
flex-shrink: 0;

`

const Norification = styled.div`
position: relative;
`
const NorificationNumber = styled.span`
position: absolute;
background-color: #3a6df0;
width: 16px;
height: 16px;
border-radius: 50%;
font-size: 10px;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
right: -6px;
top: -6px;
`

const ProfileImg = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
object-fit: cover;
border: 2px solid ${(props) => props.theme.themeColor};
margin-left: 22px;
`

const MainContainer = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
`

const MainHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-bottom: 1px solid ${(props) => props.theme.borderColor};
height: 58px;
flex-shrink: 0;
`

const HeaderMenu = styled.ul`
display: flex;
`

const HeaderItem = styled.li`
padding: 20px 40px;
color: ${(props) => props.theme.inactiveColor};
border-bottom: 2px solid transparent;
transition: 0.3s;
&:hover {
  color: ${(props) => props.theme.themeColor};
  border-bottom: 2px solid ${(props) => props.theme.themeColor};
}
`

const ContentWrapper = styled.div`
background-color: ${(props) => props.theme.bgColor};
display: flex;
flex-direction: column;
color: ${(props) => props.theme.themeColor};
padding: 20px 40px;
height: 100%;
overflow: auto;
`
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
display: flex;
flex-direction: column;
`
const ContetnSectionTitle = styled.div`
color: ${(props) => props.theme.contentTitleColor};
margin-bottom: 14px;
`
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}:LayoutProps) {
  const  router = useRouter()
  return (
    <MainPostBase>
        <video src="https://assets.codepen.io/3364143/7btrrd.mp4" autoPlay playsInline loop muted />
      <Inner>
        <MainPostContent>

          <PostHeader>
            <MenuCircle></MenuCircle>

            <HeaderProfile>
              <LinkWrap>
                <svg viewBox="0 0 20 20" fill="#f9fafb">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </LinkWrap>
              <LinkWrap>
                <svg fill="#f9fafb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: "24px", height: "24px"}} viewBox="0 0 24 24">
                  <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z">
                  </path>
                </svg>
              </LinkWrap>
              <LinkWrap>
                <svg fill="#f9fafb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd">
                  </path>
                </svg>
              </LinkWrap>
              <ProfileImg src="https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/AgileThisBluebottle-size_restricted.gif" alt="프로필이미지" />
            </HeaderProfile>
          </PostHeader>

          <MainContainer>
            
            <MainHeader>
              <HeaderMenu>
                <HeaderItem isSelect = {router.pathname === "/"}>
                  <Link href="/">
                    Stacks
                  </Link>
                </HeaderItem>
                
                <HeaderItem isSelect = {router.pathname === "/post"}>
                  <Link href='/post'>
                    Projects
                  </Link>
                </HeaderItem>
                <HeaderItem isSelect = {router.pathname === "/about"}>
                  <Link href='/about'>
                    About
                  </Link>
                </HeaderItem>
              </HeaderMenu>
            </MainHeader>
            <ContentWrapper>
              {children}
            </ContentWrapper>

          </MainContainer>
        </MainPostContent>
      </Inner>
    </MainPostBase>
  )
}

const MainPostBase = styled.main`
display: flex;
align-items: center;
overflow: hidden;
height: 100vh;
> video {
  position: fixed;
  right: 0;
  top: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
`

const Inner = styled.div`
width: 1200px;
margin: 0 auto;
`

const MainPostContent = styled.div`
background-color: ${(props) => props.theme.bgColor};
position: relative;
width: 100%;
height: 93vh;
display: flex;
flex-direction: column;
overflow-y: scroll;
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

const HeaderProfile = styled.div`
display: flex;
align-items: center;
padding: 0 16px 0 40px;
margin-left: auto;
flex-shrink: 0;
`

const LinkWrap = styled.div`
width: 32px;
height: 32px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 7px;
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


const HeaderItem = styled.li<{isSelect:boolean}>`
padding: 20px 40px;
color: ${(props) => props.isSelect ? "#f9fafb" : "#717790c7" };
border-bottom: ${(props) => props.isSelect ? "2px solid #f9fafb" : "2px solid transparent;" };
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
import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderBase>
      <Inner>

        <Logo>
          <Link href='/'>O&#39;s Blog</Link>
        </Logo>
        
        <MainNav>
          <Nav>
            <NavItem>
              <Link href='/'>About</Link>
            </NavItem>

            <NavItem>
              <Link href='/'>Portfolio</Link>
            </NavItem>

          </Nav>

        </MainNav>

        <SubNav>
          <Nav>
            <NavItem>
              <Link href='/'>
                <NavImg src="/assets/github-icon.png"  alt='깃허브아이콘' />
              </Link>
            </NavItem>

            <NavItem>
              <Link href='/'>
                <NavImg src="/assets/velog-icon.png"  alt='벨로그 아이콘' /> 
              </Link>
            </NavItem>

            <NavItem>
              <Link href='/'>
                <NavImg />
              </Link>
            </NavItem>
          </Nav>
        </SubNav>        
      </Inner>
    </HeaderBase>
  )
}

const HeaderBase = styled.header`
border-bottom: 1px solid #c8c8c8;
position: fixed;
top: 0;
width: 100%;
z-index: 9;
`

const Inner = styled.div`
width: 1100px;
height: 50px;
margin: 0 auto;
display: flex;
`

const Logo = styled.div`
flex: 1;
display: flex;
justify-content: start;
align-items: center;
font-weight: 700;
font-size: 20px;
`

const MainNav = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex: 1;
`

const SubNav = styled.div`
display: flex;
justify-content: end;
align-items: center;
flex: 1;
`

const Nav = styled.ul`
display: flex;
font-size: 15px;
`

const NavItem = styled.li`
padding: 11px 16px;
display: block;
color: #333;
`

const NavImg = styled.img`
width: 30px;
height: 30px;
border-radius: 50%;
`
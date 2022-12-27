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
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" style={{width:"30px", height:"30px"}}>
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd">
                </path>
              </svg>
              </Link>
            </NavItem>

            <NavItem>
              <Link href='/'>
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" style={{width:"24px", height:"24px"}}>
                  <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z">
                  </path>
                </svg>
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
display: flex;
justify-content: center;
align-items: center;
flex: 1;
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
font-size: 15px;
display: flex;
justify-content: center;
align-items: center;
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
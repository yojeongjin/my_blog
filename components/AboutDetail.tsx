import styled from "styled-components"

export default function AboutDetail() {
  return (
  <AboutBase>
    <AboutSlider>
      <AboutImg />
      <AboutContent>
        <ContentTitle>자기소개</ContentTitle>
        <ContentText>Blahblah</ContentText>
      </AboutContent>
    </AboutSlider>
  </AboutBase>
  )
}

const AboutBase = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
`

const AboutSlider = styled.div`
width: 95%;
position: relative;
display: flex;
max-width: 800px;
padding: 25px;
background-color: ${(props) => props.theme.contentBg};
border-radius: 25px;
height: 400px;
transition: all .3s;  
`



const AboutImg = styled.img`
width: 300px;
flex-shrink: 0;
height: 300px;
box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
border-radius: 20px;
transform: translateX(-80px);
overflow: hidden;

// &:after {
// content: '';
// position: absolute;
// top: 0;
// left: 0;
// width: 100%;
// height: 100%;
// background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
// border-radius: 20px;
// opacity: 0.8;
// }
`

const AboutContent = styled.div`
`

const ContentTitle = styled.h3`
`

const ContentText = styled.p`

`
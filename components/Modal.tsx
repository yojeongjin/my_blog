import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { StackType } from "../types";

interface ModalProps {
  setOpenModal: Dispatch<SetStateAction<boolean>>
  stackContents: StackType
}

export default function Modal({setOpenModal, stackContents}: ModalProps) {
  const closeModal = () => {
    setOpenModal(false)
  }
  
  return (
    <ModalBase>
      <Popup>
        <PopupTitle>
          <div style={{display: "flex", alignItems: "center"}}>
            <Icon src={stackContents.image} alt="뱃지" style={{width: "22px", height: "22px"}} />
            <h1>{stackContents.title}</h1>
          </div>

          <CloseBtn onClick={closeModal}>
            <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: "24px", height: "24px"}}>
              <circle cx="12" cy="12" r="10" />
              <path d="M15 9l-6 6M9 9l6 6" />
            </svg>
          </CloseBtn>
        </PopupTitle>

        <ContentWrapper>
          <Icon src="https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/-.png" alt="아이콘" />
          {stackContents.contents}
        </ContentWrapper>
        <ContentWrapper>
          <Icon src="https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/-.png" alt="아이콘" />
          {stackContents.des1}
        </ContentWrapper>
        {
          stackContents.des2 !== undefined
          ?
          <ContentWrapper>
            <Icon src="https://ssalgu-bucket.s3.ap-northeast-2.amazonaws.com/-.png" alt="아이콘" />
            {stackContents.des2}
          </ContentWrapper>
          :
          <ContentWrapper></ContentWrapper>
        }

        <BtnWrapper onClick={closeModal}>
          <Btn>계속하기</Btn>
        </BtnWrapper>
      </Popup>
    </ModalBase>
  )
}

const ModalBase = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(36, 39, 59, 0.8);
transition: 0.3s;
`

const Popup = styled.div`
width: 500px;
padding: 30px 40px;
overflow-y: auto;
box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.4);
transition: all 0.3s;
z-index: 10;
background-color: ${(props) => props.theme.popupBg};
color: ${(props) => props.theme.themeColor};
border-radius: 6px;
display: flex;
flex-direction: column;
`

const PopupTitle = styled.div`
padding-bottom: 15px;
border-bottom: 1px solid ${(props) => props.theme.borderColor};
display: flex;
justify-content: space-between;
align-items: center;
`

const Icon = styled.img`
margin-right: 8px;
`

const CloseBtn = styled.div`

`

const ContentWrapper = styled.div`
display: flex;
align-items: center;
font-size: 14px;
margin-top: 20px;
`
const BtnWrapper = styled.div`
margin-top: auto;
margin-left: auto;
`

const Btn = styled.button`
background-color: #3a6df0;
padding: 8px 26px;
color: ${(props) => props.theme.themeColor};
border-radius: 20px;
margin-top: 16px;
`
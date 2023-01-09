import styled from "styled-components"

interface ToggleProps {
  changeTheme: () => void
  isDark: Boolean
}

export default function Toggle({changeTheme, isDark}: ToggleProps) {
  return (
    <ToggleBase onClick={changeTheme}>
      {
        isDark ?
        <svg viewBox="0 0 24 24" stroke="#ffce45" strokeWidth="1.5" fill="#ffce45" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
        :
        <svg viewBox="0 0 24 24" stroke="#3c3a3a" strokeWidth="1.5" fill="transparent" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      }
    </ToggleBase>
  )
}

const ToggleBase = styled.div`
position: fixed;
bottom: 50px;
right: 30px;
padding: 8px;
border-radius: 50%;
background-color: ${(props) => props.theme.dropdownBg};
box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
z-index: 3;
cursor: pointer;
>  svg {
  width: 24px;
  flex-shrink: 0;
  transition: 0.5s;
 }
`

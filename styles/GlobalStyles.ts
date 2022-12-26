import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
  font-weight: inherit;
  color: inherit;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  line-height: inherit;
  }
  html,body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  body {
    background-color: #f8f9fd;
  }
  a {
    text-decoration: none;
  }
  button {
    border: 0 none;
    outline:none;
    background: transparent;
    cursor: pointer;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
  }
  ol, ul {
    list-style: none;
  }
  a, button, .tab, input {
    ::-webkit-inner-spin-button{
      -webkit-appearance: none; 
      margin: 0; 
      }
      ::-webkit-outer-spin-button{
      -webkit-appearance: none; 
      margin: 0; 
      }  
    -webkit-tap-highlight-color: transparent;
    outline:none;
  }
`

export default GlobalStyles
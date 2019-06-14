import normalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { color } from "./_theme_default";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    @font-face {
      font-family: 'radnika_next';
      src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
    }

    font-size: 10px;
  }
  
  body {
    color: ${color.blue};
    background: ${color.dark};
    font-size: 1.6rem;
    line-height: 2;
    font-family: 'radnika_next';
  }

  a {
    text-decoration: none;
    color: ${color.dark};
  }
`;

export default GlobalStyle;

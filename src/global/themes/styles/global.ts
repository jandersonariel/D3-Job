import { createGlobalStyle } from "styled-components";

import { colors } from "../colors";
import { medias } from "../../medias";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body, #__next {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  div, header, footer, main {
    width: 100%
  }

  div {
    display: flex;
    justify-content: center;
  }

  body, html {
    font-size: 6px;
  }

  @media (${medias.xXsmall}) {
    body, html {
      font-size: 8px;
    }
  }

  @media (${medias.small}) {
    body, html {
      font-size: 10px;
    }
  }

  @media (${medias.medium}) {
    body, html {
      font-size: 12px;
    }
  }

  @media (${medias.large}) {
    body, html {
      font-size: 14px;
    }
  }

  @media (${medias.huge}) {
    body, html {
      font-size: 16px;
    }
  }

`;

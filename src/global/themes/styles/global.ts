import { createGlobalStyle } from "styled-components";

import { colors } from "../colors";
import { medias } from "../../medias";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  body, #__next {
    background: ${colors.white};
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

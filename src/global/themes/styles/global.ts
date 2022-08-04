import { createGlobalStyle } from "styled-components";

import { colors } from '../../themes';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat, sans-serif';
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  body {
    background: ${colors.secondary};
    color: ${colors.primary};
  }
  text { 
  }
  button {
    color: ${colors.primary};
  }
`;
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    fontFamily: 'Montserrat, sans-serif';
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  body {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.primary};
  }
  text { 
  }
  button {
    color: ${props => props.theme.colors.primary};
  }
`;
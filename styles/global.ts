import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat';
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  body {
    background: black;
    color: ${props => props.theme.colors.nada};
  }
  text { 
  }
  button {

  }
`;
import styled from "styled-components";
import { medias } from "../../global";

export const Group = styled.div`
  flex-direction: column;
  align-items: center;
  gap: 35px;
  width: 100%;

  @media (${medias.small}) {
    width: max-content;
  }
`;

export const ContainerWall = styled.span`
  svg {
    width: 300px;
    height: 300px;
  }

  /* svg {
    width: 354px;
    height: 349px;
  } */
 

  @media (${medias.small}) {
    svg {
      width: 454px;
      height: 449px;
    }
  }
 
`;
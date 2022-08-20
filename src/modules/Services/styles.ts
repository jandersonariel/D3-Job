import styled from "styled-components";
import { Group } from "library-caiol.sousa";
import { medias } from "../../global";

export const CustomGroup = styled(Group)`
  @media (${medias.small}) {
    max-width: max-content;
  }
`;

export const ContainerWall = styled.span`
  svg {
    width: 300px;
    height: 300px;
  }

  @media (${medias.small}) {
    svg {
      width: 454px;
      height: 449px;
    }
  }
`;

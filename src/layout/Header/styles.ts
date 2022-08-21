import styled from "styled-components";
import { medias } from "../../global";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-height: 150px;
  max-width: 1266px;
  padding: 40px 10px;
`;

export const ContainerLogo = styled.a`
  cursor: pointer;
  svg {
    width: 70px;
    height: 25px;
  }

  @media (${medias.xXsmall}) {
    svg {
      width: 110px;
      height: 35px;
    }
  }

  @media (${medias.small}) {
    svg {
      width: 150px;
      height: 45px;
    }
  }

  @media (${medias.medium}) {
    svg {
      width: 190px;
      height: 65px;
    }
  }

  @media (${medias.large}) {
    svg {
      width: 251px;
      height: 93px;
    }
  }
`;

export const MenuOpc = styled.div`
  max-width: max-content;
`;

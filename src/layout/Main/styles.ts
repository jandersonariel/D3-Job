import styled from "styled-components";
import { medias } from "../../global";

export const Container = styled.main`
  display: flex;
  justify-content: center;

  min-height: calc(100vh - 105px);

  @media (${medias.xXsmall}) {
    min-height: calc(100vh - 115px);
  }

  @media (${medias.small}) {
    min-height: calc(100vh - 125px);
  }

  @media (${medias.medium}) {
    min-height: calc(100vh - 145px);
  }

  @media (${medias.large}) {
    min-height: calc(100vh - 150px);
  }
`;

import styled from "styled-components";
import Image from 'next/image'
import { medias } from "../../global";

interface stylesProps {
  transform?: string;
  transformMobile?: string;
}

export const Group = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContainerImg = styled.span<stylesProps>`
  ${({ transformMobile }) => transformMobile};

  @media (${medias.regular}) {
    ${({ transform }) => transform};
  }

  span {
    width: 100% !important;
  }
`;

export const Img = styled(Image)`
  width: 100%;
`;
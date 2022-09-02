import Image from "next/image";
import styled from "styled-components";
import { medias } from "../../../global";

interface styleProps {
  gap?: string;
}

export const Container = styled.nav`
  display: none;
  gap: 64px;

  @media (${medias.medium}) {
    display: flex;
  }
`;

export const ContainerImg = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  span {
    width: 100% !important;
  }
`;

export const Img = styled(Image)`
  width: 100%;
`;

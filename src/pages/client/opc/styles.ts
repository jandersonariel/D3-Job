import Image from "next/image";
import styled from "styled-components";
import { colors, fonts, medias } from "../../../global";

export const Container = styled.nav`
  display: none;
  gap: 64px;

  @media (${medias.medium}) {
    display: flex;
  }

  .open {
    color: ${colors.black};
  }

  .close {
    color: ${colors.blue};
    :hover,
    :active {
      letter-spacing: 3px;
      color: ${colors.black};
    }

    :after {
      backface-visibility: hidden;
      content: " ";
      position: relative;
      transition: all 280ms ease-in-out;
      width: 0;
    }

    :hover:after {
      backface-visibility: hidden;
      border-color: ${colors.black};
      transition: width 350ms ease-in-out;
      width: 120%;
      bottom: auto;
      top: 0;
    }
  }
`;

export const Link = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: ${colors.blue};
  cursor: pointer;
  width: max-content;
  position: relative;
  text-decoration: none;
  letter-spacing: 0;
  gap: 10px;
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.sizes.medium};
`;

export const ContainerImg = styled.span`
  border-radius: 100%;
  overflow: hidden;
`;

export const Img = styled(Image)``;

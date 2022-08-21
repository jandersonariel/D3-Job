import Image from "next/image";
import styled from "styled-components";

import { medias, colors, fonts } from "../../global";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 425px;
`;

export const Divider = styled.div`
  width: 100%;
  background: #d9d9d9;
  height: 26px;

  h2 {
    width: 100%;
    max-width: 1280px;
    text-align: right;
    margin-right: 22px;
  }
`;

export const ContainerLogo = styled.span`
  align-self: flex-start;
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

export const Img = styled(Image)`
  width: 100%;
`;

export const SubGroup = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${colors.primary};
  font-size: ${fonts.sizes.regular};
  font-weight: ${fonts.weight.semiBlack};

  text-decoration: none;

  :hover {
    color: ${colors.blue};
  }
`;

export const Logo = styled.span`
  span {
    width: 35px !important;
    height: 35px !important;
  }
`;

export const Title = styled.h3`
  font-size: ${fonts.sizes.medium};
  font-weight: ${fonts.weight.semiBlack};
`;

export const Paragraph = styled.p`
  font-size: ${fonts.sizes.regular};
`;

export const Unnameds = styled.span`
  span {
    width: 210px !important;
    height: 356px !important;
  }
`;

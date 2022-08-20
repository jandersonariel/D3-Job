import styled from "styled-components";
import Image from "next/image";

import { colors, fonts } from "../../global";

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.primary};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.sizes.medium};
  cursor: pointer;

  :hover {
    color: ${colors.blue};
  }
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const Description = styled.p`
  text-align: center;
  width: 270px;
`;

export const ContainerImg = styled.span`
  width: 100%;
  span {
    width: 100% !important;
  }
`;

export const Img = styled(Image)`
  width: 100%;
`;

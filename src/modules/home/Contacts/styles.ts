import styled from "styled-components";
import Image from "next/image";
import { colors, fonts } from "../../../global";

export const ContainerImg = styled.span`
  width: 100%;
  max-width: 610px;
  span {
    width: 100% !important;
  }
`;

export const Img = styled(Image)`
  width: 100%;
`;

export const Title = styled.h2`
  font-size: ${fonts.sizes.large};
  font-weight: ${fonts.weight.semiBlack};
  color: ${colors.primary};
`;

export const SubGroup = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${colors.primary};
  font-size: ${fonts.sizes.medium};
  font-weight: ${fonts.weight.semiBlack};

  text-decoration: none;

  :hover {
    color: ${colors.blue};
  }
`;

export const Logo = styled.span`
  span {
    width: 70px !important;
    height: 70px !important;
  }
`;

export const Copyright = styled.h3`
  position: absolute;
  bottom: 0;
  right: 0;

  padding: 0 30px 20px 0;

  color: ${colors.black};
  font-size: ${fonts.sizes.regular};
  font-weight: ${fonts.weight.semiBlack};
`;

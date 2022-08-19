import styled from "styled-components";
import Image from "next/image";
import { Group } from "library-caiol.sousa";

import { colors, fonts, medias } from "../../../global";

export const Paragraph = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 11px;

  @media (${medias.xLmedium}) {
    max-width: 550px;
  }

  @media (${medias.large}) {
    max-width: max-content;
  }
`;

export const Title = styled.h1`
  font-size: ${fonts.sizes.xXlarge};
  font-weight: ${fonts.weight.semiBlack};
  color: ${colors.white};
`;

export const Text = styled.p`
  font-size: ${fonts.sizes.medium};
  font-weight: ${fonts.weight.regular};
  color: ${colors.white};
`;

export const SubGroup = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;

  span {
    width: 26px !important;
  }
`;

export const Alert = styled.p`
  font-size: ${fonts.sizes.medium};
  font-weight: ${fonts.weight.regular};
  color: ${colors.error};
`;

export const CustomGroup = styled(Group)`
  span {
    width: 100% !important;
  }
`;

export const Img = styled(Image)`
  width: 100%;
`;

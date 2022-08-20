import styled from "styled-components";
import { colors, fonts, medias } from "../../../global";

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

export const Group = styled.span<styleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => gap};
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${colors.primary};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.sizes.medium};

  :hover {
    color: ${colors.blue};
  }
`;

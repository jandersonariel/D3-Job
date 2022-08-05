import styled from "styled-components";
import { colors, fonts, medias, styleProps } from "../../../global";

export const Container = styled.div`
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

export const Link = styled.a<styleProps>`
  text-decoration: none;
  color: ${colors.primary};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.sizes.medium};

  :hover {
    text-decoration: underline;
    color: ${colors.blue};
  }
`;

export const Button = styled.button<styleProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  padding: 10px;
  width: ${({ widht }) => widht};
  height: 43px;
  font-weight: ${fonts.weight.semiBlack};

  font-size: ${fonts.sizes.medium};

  color: ${colors.secondary};
  
  border: 1px solid ${colors.secondary};
  background: ${colors.primary};
  border-radius: 16px;

  :hover {
    opacity: 0.8;
  }
`;
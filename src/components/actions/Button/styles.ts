import styled from "styled-components";

import { colors, fonts, medias } from "../../../global";
import { ButtonStyles } from "./interface";

const sizes = {
  block: "100%",
  default: "max-content",
  variant: "275px",
};

export const Container = styled.button<ButtonStyles>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${colors.primary};

  width: ${sizes.block};
  height: ${({ height }) => (height ? `${height}px` : "max-content")};

  padding: ${({ pad }) => pad || "15px"};

  border-radius: 16px;
  cursor: pointer;
  outline: 0;
  gap: 15px;

  :hover {
    opacity: 0.7;
  }

  :active {
    transform: translate(3px, -3px);
  }

  :disabled {
    background-color: ${colors.gray};
    cursor: not-allowed;

    :hover {
      opacity: 1;
    }
  }

  @media (${medias.xXsmall}) {
    width: ${({ size }) => (size ? sizes[size] : sizes.default)};
  }

  * {
    font-size: ${({ font }) =>
      font ? fonts.sizes[font] : fonts.sizes.regular};
    color: ${({ color }) => (color ? colors[color] : colors.white)};
    font-weight: ${({ weight }) =>
      weight ? fonts.weight[weight] : fonts.weight.semiBlack};
  }
`;

export const Icon = styled.span``;

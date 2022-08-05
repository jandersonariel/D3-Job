import styled from "styled-components";

import { colors, fonts } from "../../../../global";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${colors.primary};

  width: 275px;
  height: 180.06px;
  border-radius: 16px;
  cursor: pointer;

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
`;

export const Title = styled.h1`
  font-size: ${fonts.sizes.xXlarge};
  color: ${colors.white};
`

export const Icon = styled.span``;
import styled from "styled-components";

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

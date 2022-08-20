import React from "react";
import styled from "styled-components";
import NextLink from "next/link";

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

const MenuOpc = () => (
  <div>
    <NextLink href="/">
      <Link>login</Link>
    </NextLink>
  </div>
);

export default MenuOpc;

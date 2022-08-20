import React from "react";

import NextLink from "next/link";

import * as S from "./styles";

const MenuOpc = () => (
  <NextLink href="/">
    <S.Link>login</S.Link>
  </NextLink>
);

export default MenuOpc;

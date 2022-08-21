import React from "react";
import NextLink from "next/link";

import * as C from "../../components";

import * as I from "./interface";
import * as S from "./styles";

export const Header = ({ menuOpc }: I.HeaderProps) => (
  <S.Container>
    <NextLink href="/">
      <S.ContainerLogo>
        <C.Logo />
      </S.ContainerLogo>
    </NextLink>

    <S.MenuOpc>{menuOpc || <h1> colocar a navegação </h1>}</S.MenuOpc>
  </S.Container>
);

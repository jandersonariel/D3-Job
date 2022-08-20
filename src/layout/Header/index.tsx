import React from "react";

import * as C from "../../components";

import * as I from "./interface";
import * as S from "./styles";

export const Header = ({ menuOpc }: I.HeaderProps) => (
  <S.Container>
    <S.ContainerLogo>
      <C.Logo />
    </S.ContainerLogo>

    <S.MenuOpc>{menuOpc}</S.MenuOpc>
  </S.Container>
);

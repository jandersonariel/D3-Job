import React from "react";

import { Logo } from "../../components";

import { HeaderProps } from "./interface";
import { MenuOpc } from './MenuOpc';
import * as S from './styles';

export const Header = ({ menuOpc }: HeaderProps) => (
  <S.Container>

    <S.ContainerLogo> <Logo/> </S.ContainerLogo>
    
    <S.MenuOpc>
        {menuOpc || <MenuOpc />}
    </S.MenuOpc>

  </S.Container>
)

import React from "react";

import { MainProps } from "./interface";
import * as S from './styles';

export const Main:React.FC<MainProps> = ({ children }) => (
  <S.Container>{children}</S.Container>
)
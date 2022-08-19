import React from "react";

import * as I from "./interface";
import * as S from "./styles";

export const Main: React.FC<I.MainProps> = ({ children }) => (
  <S.Container>{children}</S.Container>
);

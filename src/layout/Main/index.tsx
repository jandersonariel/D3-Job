import React from "react";

import { Container } from "library-caiol.sousa";

import * as I from "./interface";
import * as S from "./styles";

export const Main: React.FC<I.MainProps> = ({ children }) => (
  <S.Main>
    <Container
      justify="flex-start"
      direction="column"
      maxW="block"
      gap={[20, 30]}
    >
      {children}
    </Container>
  </S.Main>
);

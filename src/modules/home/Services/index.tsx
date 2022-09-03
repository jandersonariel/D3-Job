import React from "react";

import { Container } from "library-caiol.sousa";

import * as C from "../../../components";

import * as CT from "./content";
import * as S from "./styles";

export const Services = () => (
  <Container
    mobileResponsive
    maxW={1266}
    gap={[130, 20]}
    pad={[10, 15, 15, 10]}
  >
    <>
      <S.ContainerWall>
        <C.Wall />
      </S.ContainerWall>

      <S.CustomGroup
        direction="column"
        align="center"
        gap={[35, 35]}
        maxW="block"
      >
        {CT.imgButtons.map(({ name, icon, id }) => (
          <C.Button
            key={id}
            weight="regular"
            color="white"
            font="large"
            size="variant"
            height={180}
            title={name}
          >
            {icon}
          </C.Button>
        ))}
      </S.CustomGroup>
    </>
  </Container>
);

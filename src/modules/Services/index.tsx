import React from "react";

import { Container } from "library-caiol.sousa";

import * as C from "../../components";

import * as CT from "./content";
import * as S from "./styles";

export const Services = () => (
  <Container
    align="center"
    justify="center"
    direction="column"
    mobileResponsive
    maxW={1266}
    gap={{ desktop: 130, mobile: 20 }}
    pad={{ top: 10, left: 15, right: 15, bottom: 10 }}
  >
    <>
      <S.ContainerWall>
        <C.Wall />
      </S.ContainerWall>

      <S.CustomGroup
        direction="column"
        align="center"
        gap={{ desktop: 35 }}
        maxW="block"
      >
        {CT.imgButtons.map(({ name, icon }) => (
          <C.Button
            key={name}
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

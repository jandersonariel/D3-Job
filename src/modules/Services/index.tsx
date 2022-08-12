import React from "react";

import * as C from "../../components";

import * as CT from "./content";
import * as S from "./styles";

export const Services = () => (
  <C.Container
    align="center"
    justify="center"
    direction="column"
    mobileResponsive
    maxWidth={1266}
    gap={[130, 20]}
    padding="0 30px"
  >
    <>
      <S.ContainerWall>
        <C.Wall />
      </S.ContainerWall>

      <S.Group>
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
      </S.Group>
    </>
  </C.Container>
);

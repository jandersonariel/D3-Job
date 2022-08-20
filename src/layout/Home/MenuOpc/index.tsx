import React from "react";

import * as C from "../../../components";

import * as CT from "./content";
import * as S from "./styles";

export const MenuOpc: React.FC = () => (
  <S.Container>
    <S.Group gap="28px">
      {CT.help.map((v) => (
        <S.Link key={v.name} href={v.link}>
          {v.name}
        </S.Link>
      ))}
    </S.Group>

    <S.Group gap="12px">
      <S.Link href={CT.login[0].link}> {CT.login[0].name} </S.Link>
      <C.Button
        color="white"
        font={CT.login[1].font}
        size={CT.login[1].size}
        title={CT.login[1].name}
      />
    </S.Group>
  </S.Container>
);

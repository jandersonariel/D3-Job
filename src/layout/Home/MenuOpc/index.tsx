import React from "react";
import NextLink from "next/link";

import * as C from "../../../components";

import * as CT from "./content";
import * as S from "./styles";

export const MenuOpc: React.FC = () => (
  <S.Container>
    <S.Group gap="28px">
      {CT.help.map(({ link, name, id }, i) => (
        <NextLink href={link}>
          <S.Link key={`home-${id}`}>{name}</S.Link>
        </NextLink>
      ))}
    </S.Group>

    <S.Group gap="12px">
      <NextLink href={CT.login[0].link}>
        <S.Link> {CT.login[0].name} </S.Link>
      </NextLink>

      <C.Button
        color="white"
        font={CT.login[1].font}
        size={CT.login[1].size}
        title={CT.login[1].name}
      />
    </S.Group>
  </S.Container>
);

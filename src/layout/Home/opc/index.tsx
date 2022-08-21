import React from "react";
import NextLink from "next/link";

import * as C from "../../../components";

import * as CT from "./content";
import * as S from "./styles";

export const Opc: React.FC = () => (
  <S.Container>
    <S.Group gap="28px">
      {CT.help.map(({ link, name }) => (
        <NextLink href={link} key={name}>
          <S.Link>{name}</S.Link>
        </NextLink>
      ))}
    </S.Group>

    <S.Group gap="12px">
      <NextLink href={CT.registration[0].link}>
        <S.Link> {CT.registration[0].name} </S.Link>
      </NextLink>

      <NextLink href={CT.registration[1].link}>
        <S.Link>
          <C.Button
            pad="0"
            height={53}
            color="white"
            font={CT.registration[1].font}
            size={CT.registration[1].size}
            title={CT.registration[1].name}
          />
        </S.Link>
      </NextLink>
    </S.Group>
  </S.Container>
);

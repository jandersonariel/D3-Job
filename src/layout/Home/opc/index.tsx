import React from "react";

import * as C from "../../../components";

import * as CT from "./content";
import * as S from "./styles";

export const Opc: React.FC = () => (
  <S.Container>
    <S.Group gap="28px">
      {CT.help.map(({ link, name }) => (
        <C.CustomLink href={link} key={name} label={name} />
      ))}
    </S.Group>

    <S.Group gap="12px">
      <C.CustomLink
        href={CT.registration[0].link}
        label={CT.registration[0].name}
      />

      <C.CustomLink href={CT.registration[1].link} type="buttonLink" label="">
        <C.Button
          pad="0"
          height={53}
          color="white"
          font={CT.registration[1].font}
          size={CT.registration[1].size}
          title={CT.registration[1].name}
        />
      </C.CustomLink>
    </S.Group>
  </S.Container>
);

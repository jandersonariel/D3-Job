import React from "react";

import { Group } from "library-caiol.sousa";

import * as C from "../../../components";
import * as A from "../../../assets";

import * as CT from "./content";
import * as S from "./styles";

export const Opc: React.FC = () => (
  <S.Container>
    <Group align="center" justify="center" gap={[28, 28]}>
      {CT.client.map(({ href, label }) => (
        <C.CustomLink href={href} key={label} label={label} />
      ))}
    </Group>

    <Group justify="center" align="center" gap={[18, 15]}>
      <Group direction="column" align="flex-end" gap={[5, 5]}>
        <p>Nome do cliente</p>
        <p>Cliente</p>
      </Group>
      <S.ContainerImg>
        <S.Img priority src={A.imgs.semImg} alt="dowmImg" />
      </S.ContainerImg>
    </Group>
  </S.Container>
);

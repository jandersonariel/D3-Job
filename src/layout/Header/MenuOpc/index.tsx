import React from "react";

import { Button } from "../../../components";

import { help, login } from './content';
import * as S from './styles';

export const MenuOpc: React.FC = () => (
  <S.Container>
    <S.Group gap="28px">
      {help.map((v) => <S.Link key={v.name} href={v.link}> {v.name} </S.Link>)}
    </S.Group>

    <S.Group gap="12px">
        <S.Link href={login[0].link}> {login[0].name} </S.Link>
        <Button color="white" font={login[1].font} size={login[1].size} title={login[1].name} />
    </S.Group>
  </S.Container>

)
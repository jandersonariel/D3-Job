import React from "react";

import { Group } from "library-caiol.sousa";

import * as A from "../../../assets";

import * as CT from "./content";
import * as I from "./interface";
import * as S from "./styles";
import * as F from "./functions";

export const Opc = ({ user, setPage }: I.userProps) => {
  const changePage = (page: I.Pages) => {
    F.changeColorLink(page);
    setPage(page);
  };
  return (
    <S.Container>
      <Group align="center" justify="center" gap={[50, 25]}>
        {CT.client.map(({ page, label, className }) => (
          <S.Link
            key={page}
            onClick={() => changePage(page)}
            id={page}
            className={className}
          >
            {label}
          </S.Link>
        ))}
      </Group>

      <Group justify="center" align="center" gap={[18, 15]}>
        <Group direction="column" align="flex-end" gap={[5, 5]}>
          <p>{user?.name || "Nome do cliente"}</p>
          <p>Cliente</p>
        </Group>
        <S.ContainerImg>
          <S.Img
            priority
            src={user?.img || A.imgs.semImg}
            alt="dowmImg"
            width="130px"
            height="130px"
          />
        </S.ContainerImg>
      </Group>
    </S.Container>
  );
};

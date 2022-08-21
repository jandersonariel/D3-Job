import React from "react";

import NextLink from "next/link";

import * as I from "./interface";
import * as S from "../styles";

export const Opc = ({ href, label }: I.OpcProps) => (
  <NextLink href={href}>
    <S.Link>{label}</S.Link>
  </NextLink>
);

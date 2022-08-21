import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { colors, fonts } from "../global";

const Links = styled.a`
  text-decoration: none;
  color: ${colors.primary};
  font-weight: ${fonts.weight.bold};
  font-size: ${fonts.sizes.medium};
  cursor: pointer;

  :hover {
    color: ${colors.blue};
  }
`;

const NotFound = () => (
  <h1>
    Tela não encontrada <br />
    <Link href="/">
      <Links> clique aqui </Links>
    </Link>
    para voltar a home
  </h1>
);

export default NotFound;

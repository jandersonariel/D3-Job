import React from "react";
import styled from "styled-components";

import { CustomLink } from "../components";

import { colors, fonts } from "../global";

const NotFound = () => (
  <h1>
    Tela não encontrada <br />
    <CustomLink href={{ pathname: "/" }} label="clique aqui" />
    para voltar a home
  </h1>
);

export default NotFound;

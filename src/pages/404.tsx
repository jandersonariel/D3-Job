import React from "react";

import { CustomLink } from "../components";

const NotFound = () => (
  <h1>
    Tela não encontrada <br />
    <CustomLink href={{ defautlLink: "/" }} label="clique aqui" />
    para voltar a home
  </h1>
);

export default NotFound;

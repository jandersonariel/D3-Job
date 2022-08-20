import { Container } from "library-caiol.sousa";
import React from "react";

import { Header } from "../../layout";

import MenuOpc from "./menuOpc";

const Login = () => (
  <>
    <Header menuOpc={<MenuOpc />} />
    <div>
      <h1>bem vindo a tela de login</h1>
    </div>
  </>
);

export default Login;

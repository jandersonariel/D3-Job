import { Container } from "library-caiol.sousa";
import React from "react";

import { Header } from "../../layout";

import { LoginOpc } from "./loginOpc";

const Login = () => (
  <>
    <Header menuOpc={<LoginOpc />} />
    <div>
      <h1>bem vindo a tela de login</h1>
    </div>
  </>
);

export default Login;

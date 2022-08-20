import { Container } from "library-caiol.sousa";
import React from "react";

import { Header } from "../../layout";

import MenuOpc from "./menuOpc";

const Login = () => (
  <Container maxW="block" justify="flex-start" gap={[20, 30]}>
    <>
      <Header menuOpc={<MenuOpc />} />
      <div>
        <h1>bem vindo a tela de login</h1>
      </div>
    </>
  </Container>
);

export default Login;

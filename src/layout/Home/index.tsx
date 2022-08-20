import React from "react";

import { Container } from "library-caiol.sousa";

import { Services, HowItWorks, Contacts } from "../../modules";

import { Header } from "../Header";

import { MenuOpc } from "./MenuOpc";

export const Home = () => (
  <Container maxW="block" gap={[20, 30]}>
    <>
      <Header menuOpc={<MenuOpc />} />
      <Services />
      <HowItWorks />
      <Contacts />
    </>
  </Container>
);

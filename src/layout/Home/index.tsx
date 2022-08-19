import React from "react";

import { Container } from "library-caiol.sousa";

import { Services, HowItWorks, Contacts } from "../../modules";

export const Home = () => (
  <Container direction="column" maxW="block" gap={{ desktop: 20, mobile: 30 }}>
    <>
      <Services />
      <HowItWorks />
      <Contacts />
    </>
  </Container>
);

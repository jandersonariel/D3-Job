import React from "react";

import { Container } from "../../components";
import { Services, HowItWorks, Contacts } from "../../modules";

export const Home = () => (
  <Container
    direction="column"
    width="block"
    maxWidth="block"
    gap={[20, 30]}
    padding="0"
  >
    <>
      <Services />
      <HowItWorks />
      <Contacts />
    </>
  </Container>
);

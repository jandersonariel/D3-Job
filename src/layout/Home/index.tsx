import React from "react";

import { Container } from '../../components';
import { Services, HowItWorks, Contacts } from '../../modules';

export const Home = () => (
  <Container direction="column">
    <>
      <Services />
      <HowItWorks />
      <Contacts />
    </>
  </Container>
)
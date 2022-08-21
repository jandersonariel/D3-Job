import React from "react";

import { Services, HowItWorks, Contacts } from "../../modules";

import { Header } from "../Header";

import { Opc } from "./opc";

export const Home = () => (
  <>
    <Header menuOpc={<Opc />} />
    <Services />
    <HowItWorks />
    <Contacts />
  </>
);

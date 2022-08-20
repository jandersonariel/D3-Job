import React from "react";

import { Services, HowItWorks, Contacts } from "../../modules";

import { Header } from "../Header";

import { MenuOpc } from "./menuOpc";

export const Home = () => (
  <>
    <Header menuOpc={<MenuOpc />} />
    <Services />
    <HowItWorks />
    <Contacts />
  </>
);

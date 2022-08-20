import React from "react";

import { Services, HowItWorks, Contacts } from "../../modules";

import { Header } from "../Header";

import { HomeOpc } from "./homeOpc";

export const Home = () => (
  <>
    <Header menuOpc={<HomeOpc />} />
    <Services />
    <HowItWorks />
    <Contacts />
  </>
);

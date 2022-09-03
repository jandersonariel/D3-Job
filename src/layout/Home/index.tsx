import React from "react";

import { home as H } from "../../modules";

import { Header } from "../Header";

import { Opc } from "./opc";

export const Home = () => (
  <>
    <Header menuOpc={<Opc />} />
    <H.Services />
    <H.HowItWorks />
    <H.Contacts />
  </>
);

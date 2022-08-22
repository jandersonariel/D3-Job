import React from "react";

import { CustomLink } from "../../../components";

import * as I from "./interface";

export const Opc = ({ href, label }: I.OpcProps) => (
  <CustomLink label={label} href={href} />
);

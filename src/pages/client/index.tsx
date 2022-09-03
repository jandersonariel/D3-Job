import React, { useState } from "react";

import { Header } from "../../layout";
import { client as C } from "../../modules";

import { Opc } from "./opc";
import * as I from "./interface";

const Client = ({ user }: I.ClientProps) => {
  const [page, setPage] = useState<"services" | "solicitations" | "profile">(
    "services"
  );

  return (
    <>
      <Header menuOpc={<Opc user={user} setPage={setPage} />} />
      {page === "services" && <C.Services />}
      {page === "profile" && <C.Profile />}
      {page === "solicitations" && <C.Solicitations />}
    </>
  );
};

export default Client;

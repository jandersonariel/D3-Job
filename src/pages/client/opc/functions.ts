import { Pages } from "./interface";

export const changeColorLink = (page: Pages) => {
  const services = document.getElementById("services");
  const solicitations = document.getElementById("solicitations");
  const profile = document.getElementById("profile");

  const classSer = services && services?.classList;
  const classSol = solicitations?.classList;
  const classSPro = profile?.classList;

  if (page === "services") {
    classSer?.add("open");
    classSer?.remove("close");
    classSol?.add("close");
    classSol?.remove("open");
    classSPro?.add("close");
    classSPro?.remove("open");
  }

  if (page === "profile") {
    classSer?.add("close");
    classSer?.remove("open");
    classSol?.add("close");
    classSol?.remove("open");
    classSPro?.add("open");
    classSPro?.remove("close");
  }

  if (page === "solicitations") {
    classSer?.add("close");
    classSer?.remove("open");
    classSol?.add("open");
    classSol?.remove("close");
    classSPro?.add("close");
    classSPro?.remove("open");
  }
};

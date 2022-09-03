export type Pages = "services" | "solicitations" | "profile";

export interface OpcProps {
  page: Pages;
  label: string;
  className: "open" | "close";
}

export interface userProps {
  user: {
    name: "";
    img?: "";
  };
  setPage: React.Dispatch<React.SetStateAction<Pages>>;
}

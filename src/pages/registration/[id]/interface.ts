type id = "client" | "provider";

export interface ClientOrProviderProps {
  id: id;
}

export type GetStaticProps = {
  params: { id: id };
};

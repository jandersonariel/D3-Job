type id = "client" | "provider";

export interface ClientOrProviderProps {
  id: id;
}

export interface GetStaticProps {
  context: { params: { id: id } };
}

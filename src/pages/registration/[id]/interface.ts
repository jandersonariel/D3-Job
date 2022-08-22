type id = "client" | "provider";

export interface ClientOrProviderProps {
  id: id;
}

export type context = {
  query: { id: id };
};

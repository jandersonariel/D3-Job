type id = "client" | "worker";

export interface ClientOrWorkerProps {
  id: id;
}

export type GetStaticProps = {
  params: { id: id };
};

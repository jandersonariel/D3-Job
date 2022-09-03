import { authApi } from "./axios";
import { IAuthWorker } from "../types/typesClient";

export const serviceAuthWorker = async (payload: IAuthWorker) => {
  const request = await authApi.post<IAuthWorker>(`/auth/worker`, payload);

  return request.data;
};

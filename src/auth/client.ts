import { authApi } from "./axios";
import { IAuthClient } from "../types/typesClient";

export const serviceAuthClient = async (payload: IAuthClient) => {
  const request = await authApi.post<IAuthClient>(`/auth/client`, payload);

  return request.data;
};

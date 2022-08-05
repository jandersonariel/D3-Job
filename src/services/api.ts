import { IAuthClient } from './../types/index';
import Axios from 'axios';
import { IClient, ISignup } from '../types'

declare var process: {
  env: {
     NEXT_PUBLIC_BASE_URL: string,
  }
}

const initAxios = (baseURL: string) => {
  const axios = Axios.create({
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzZDQyNWU2Mi1kMThhLTQyMGItYWQ1NS1hMzUyYmRkNDQyNGMiLCJlbWFpbCI6ImNlc2FyMkBtYWlsLmNvbSIsImlhdCI6MTY1OTYxODU5MiwiZXhwIjoxNjU5NzA0OTkyfQ.aVtGlY5cUXD_OZUgXWBF92StBhxTU2RW7T3jYrAflcA"
    },
    baseURL
  });

  return axios;
};

export const Api = initAxios(process.env. NEXT_PUBLIC_BASE_URL);

export const serviceGetAllClients = async () => {
  const request = await Api.get<IClient[]>('/client')

  return request.data
}

export const serviceGetOneClient = async (id: string) => {
  const request = await Api.get<IClient>(`/client/${id}`)

  return request.data
}

export const servicePostClient = async (payload: ISignup | undefined) => {
  const request = await Api.post<IClient>(`/client`, payload)

  return request.data
}
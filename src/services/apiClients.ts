import Axios from 'axios';
import { IClient, ISignupClient, IEditClient } from '../types/typesClient'

declare var process: {
  env: {
     NEXT_PUBLIC_CLIENT_BASE_URL: string,
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

export const Api = initAxios(process.env.NEXT_PUBLIC_CLIENT_BASE_URL);

export const getClients = async () => {
  const request = await Api.get<IClient[]>('/')

  return request.data
}

export const getOneClient = async (id: string) => {
  const request = await Api.get<IClient>(`/${id}`)

  return request.data
}

export const createClient = async (payload: ISignupClient) => {
  const request = await Api.post<IClient>(`/`, payload)

  return request.data
}

export const updateClient = async (payload: IEditClient) => {
  const request = await Api.put<IClient>(`/`, payload)

  return request.data
}

export const deleteClient = async (id: string) => {
  const request = await Api.delete<IClient>(`/${id}`)

  return request.data
}
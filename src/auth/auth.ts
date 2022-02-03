import axios, { AxiosRequestConfig, Method } from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

interface Data {
  message?: string;
  user?: User;
  token?: Token;
  error?: { message: string };
}
interface Token {
  token: string;
  expires_at: string;
}
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: number;
  token: string;
}

interface Response {
  status: number;
  data: Data;
}

const request = async (
  method: Method,
  url: string,
  data: object
): Promise<Response> => {
  const options: AxiosRequestConfig = {
    method,
    url,
    data,
  };

  let response;
  try {
    response = await api.request<AxiosRequestConfig>(options);
  } catch (error: any) {
    response = error.response;
  }

  return response;
};

export const login = async (
  email: string,
  password: string
): Promise<Response> => {
  return await request('POST', 'login', { email, password });
};

export const createUser = async (
  name: string,
  email: string,
  password: string
): Promise<Response> => {
  return await request('POST', 'user/create', { name, email, password });
};

export const resetPassword = async (email: string): Promise<Response> => {
  return await request('POST', 'reset', { email });
};

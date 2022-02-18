import { AxiosRequestConfig, Method } from 'axios';
import { IFormData, IResponse } from '../../interfaces';
import api from '../axios.config';

const request = async (
  method: Method,
  url: string,
  data: object
): Promise<IResponse> => {
  const options: AxiosRequestConfig = {
    method,
    url,
    data,
  };

  let response;
  try {
    response = await api.request<AxiosRequestConfig>(options);
  } catch (error: any) {
    response = error.data.message;
  }

  return response;
};

export const login = async (data: IFormData): Promise<IResponse> => {
  return await request('POST', 'login', data);
};

export const createUser = async (data: IFormData): Promise<IResponse> => {
  return await request('POST', 'user/create', data);
};

export const resetPassword = async (data: IFormData): Promise<IResponse> => {
  return await request('POST', 'reset', data);
};

export const changePassword = async (data: IFormData): Promise<IResponse> => {
  return await request('POST', `reset/${data.token}`, {
    password: data.password,
  });
};

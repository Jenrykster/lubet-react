import { AxiosRequestConfig } from 'axios';

export interface IUserUpdateRequest extends AxiosRequestConfig {
  name: string;
  email: string;
}

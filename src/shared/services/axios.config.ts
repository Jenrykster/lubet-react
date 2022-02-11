import axios, { AxiosError } from 'axios';
import { store } from '../../store/store';

let token = '';

store.subscribe(() => {
  token = store.getState().user.token;
});

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

api.interceptors.request.use(
  async (config) => {
    if (token.length > 0) {
      config.headers!.Authorization = 'Bearer ' + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const handleError = error.response;
      return Promise.reject(handleError);
    }
    return Promise.reject(error);
  }
);

export default api;

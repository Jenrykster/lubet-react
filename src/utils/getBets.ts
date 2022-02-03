import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { store } from '../store/store';

let token: string;
let api: AxiosInstance;

store.subscribe(updateApi);

function updateApi() {
  token = store.getState().user.token;
  api = axios.create({
    baseURL: 'http://127.0.0.1:3333',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
}

const getBets = async (typeFilter: string | null = null) => {
  const params = typeFilter
    ? new URLSearchParams({ 'type[]': typeFilter })
    : {};
  let response: AxiosResponse | Error;
  try {
    response = await api.get('bet/all-bets', { params });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      response = error.response;
    } else {
      response = new Error('Error while contacting the server');
    }
  }
  return response;
};

export default getBets;

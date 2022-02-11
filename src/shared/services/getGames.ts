import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

const getGames = async () => {
  let response: AxiosResponse | Error;
  try {
    response = await api.get('cart_games');
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      response = error.response;
    } else {
      response = new Error('Error while contacting the server');
    }
  }
  return response;
};

export default getGames;

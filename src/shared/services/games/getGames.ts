import axios, { AxiosResponse } from 'axios';
import api from '../axios.config';

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

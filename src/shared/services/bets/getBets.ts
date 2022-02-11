import axios, { AxiosResponse } from 'axios';
import api from '../axios.config';

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

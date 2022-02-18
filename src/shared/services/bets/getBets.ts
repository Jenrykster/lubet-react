import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import api from '../axios.config';

const getBets = async (typeFilter: string | string[] | null = null) => {
  const config: AxiosRequestConfig = {};
  if (typeFilter) {
    const searchParams = new URLSearchParams();
    if (typeof typeFilter === 'object') {
      typeFilter.forEach((type) => searchParams.append('type[]', type));
    } else {
      searchParams.append('type[]', typeFilter);
    }
    config.params = searchParams;
  }

  let response: AxiosResponse | Error;
  try {
    response = await api.get('bet/all-bets', config);
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

import axios, { AxiosResponse } from 'axios';
import api from '../axios.config';

type BetType = {
  game_id: number;
  numbers: number[];
};

const postBets = async (bets: BetType[]) => {
  let response: AxiosResponse | Error;
  try {
    response = await api.post('/bet/new-bet', { games: bets });
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error) && error.response) {
      response = error.response;
    } else {
      response = new Error('Error while contacting the server');
    }
  }
  //console.log(response);
  return response;
};

export default postBets;

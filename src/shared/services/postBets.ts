import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { store } from '../../store/store';

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

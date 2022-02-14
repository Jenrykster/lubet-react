import axios, { AxiosResponse } from 'axios';
import { IUserUpdateRequest } from '../../interfaces';
import api from '../axios.config';

const updateMyUser = async (data: IUserUpdateRequest) => {
  let response: AxiosResponse | Error;
  try {
    response = await api.put('user/update', data);
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      response = error.response;
    } else {
      response = new Error('Error while contacting the server');
    }
  }
  return response;
};

export default updateMyUser;

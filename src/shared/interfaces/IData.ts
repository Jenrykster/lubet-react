import { IUser, IToken } from '.';

export interface IData {
  message?: string;
  user?: IUser;
  token?: IToken | string;
  error?: { message: string };
}

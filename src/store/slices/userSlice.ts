import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  email: string;
  name: string;
  isAdmin: number;
  token: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  email: '',
  name: '',
  isAdmin: 0,
  token: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (
      state,
      action: PayloadAction<{
        email: string;
        name: string;
        isAdmin: number;
        token: string;
      }>
    ) => {
      state.email = action.payload.email;
      state.isAdmin = action.payload.isAdmin;
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

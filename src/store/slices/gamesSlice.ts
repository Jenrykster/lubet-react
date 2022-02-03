import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type GameType = {
  id: number;
  type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
};
export interface GameState {
  minCartValue: number;
  types: GameType[];
}

const initialState: GameState = {
  minCartValue: 0,
  types: [],
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    updateGames: (
      state,
      action: PayloadAction<{
        minCartValue: number;
        types: GameType[];
      }>
    ) => {
      state.minCartValue = action.payload.minCartValue;
      state.types = action.payload.types;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateGames } = gamesSlice.actions;

export default gamesSlice.reducer;

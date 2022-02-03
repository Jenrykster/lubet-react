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
  selectedGame: GameType | null;
}

const initialState: GameState = {
  minCartValue: 0,
  types: [],
  selectedGame: null,
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
    changeSelectedGame: (state, action: PayloadAction<{ gameId: number }>) => {
      state.selectedGame =
        state.types.find((game) => game.id === action.payload.gameId) || null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateGames, changeSelectedGame } = gamesSlice.actions;

export default gamesSlice.reducer;

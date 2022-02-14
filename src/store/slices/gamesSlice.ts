import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

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
  selectedGame: GameType | GameType[] | null;
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
    changeSelectedGame: (
      state,
      action: PayloadAction<{ gameId: number | number[] }>
    ) => {
      if (typeof action.payload.gameId === 'number') {
        state.selectedGame =
          state.types.find((game) => game.id === action.payload.gameId) || null;
      } else if (Array.isArray(action.payload.gameId)) {
        const selectedGameIndexes = action.payload.gameId.map((id) => {
          return state.types.findIndex((game) => game.id === id);
        });
        const selectedGames = selectedGameIndexes.map(
          (index) => current(state).types[index]
        );
        state.selectedGame = [...new Set(selectedGames)];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateGames, changeSelectedGame } = gamesSlice.actions;

export default gamesSlice.reducer;

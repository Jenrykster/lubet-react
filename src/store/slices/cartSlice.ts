import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItemType = {
  id: number;
  numbers: number[];
  gameTypeId: number;
  price: number;
};
export interface CartState {
  bets: CartItemType[];
  totalPrice: number;
}

const initialState: CartState = {
  bets: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        numbers: number[];
        gameId: number;
        price: number;
      }>
    ) => {
      state.bets.push({
        id: Date.now() * Math.random(),
        numbers: action.payload.numbers.sort((a, b) => a - b),
        gameTypeId: action.payload.gameId,
        price: action.payload.price,
      });
      state.totalPrice += action.payload.price;
    },
    deleteCartItem: (state, action: PayloadAction<{ betId: number }>) => {
      state.totalPrice -=
        state.bets.find((bet) => bet.id === action.payload.betId)?.price || 0;
      state.bets = state.bets.filter((bet) => bet.id !== action.payload.betId);
    },
    clearCart: (state) => {
      state.bets = [];
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

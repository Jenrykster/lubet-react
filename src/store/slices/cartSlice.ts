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
        numbers: action.payload.numbers,
        gameTypeId: action.payload.gameId,
        price: action.payload.price,
      });
      state.totalPrice += action.payload.price;
    },
    clearCart: (state) => {
      state.bets = [];
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

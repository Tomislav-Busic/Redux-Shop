import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleCart(state, action) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const cartActions = cartSlice.actions;

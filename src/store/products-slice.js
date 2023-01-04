import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
  },
  reducers: {
    showProducts(state, action) {
      state.productsList = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

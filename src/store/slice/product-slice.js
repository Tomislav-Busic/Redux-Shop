import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    singleProduct: {},
    toggleDescription: false,
  },
  reducers: {
    setProduct(state, action) {
      state.singleProduct = action.payload;
    },
    cleanProduct(state, action) {
      state.singleProduct = {};
      state.toggleDescription = false;
    },
    productDescription(state, action) {
      state.toggleDescription = !state.toggleDescription;
    },
  },
});

export const productActions = productSlice.actions;
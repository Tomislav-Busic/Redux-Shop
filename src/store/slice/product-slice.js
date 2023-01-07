import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    singleProduct: {},
  },
  reducers: {
    setProduct(state, action) {
      state.singleProduct = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
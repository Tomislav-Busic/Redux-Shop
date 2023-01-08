import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    singleProduct: {},
    toggleDescription: false,
    toggleProductCart: false,
  },
  reducers: {
    setProduct(state, action) {
      state.singleProduct = action.payload;
    },
    cleanProduct(state, action) {
      state.singleProduct = {};
      state.toggleDescription = false;
      state.toggleProductCart = false;
    },
    productDescription(state, action) {
      state.toggleDescription = !state.toggleDescription;
    },
    showProductCart(state, action) {
      state.toggleProductCart = !state.toggleProductCart;
    },
  },
});

export const productActions = productSlice.actions;
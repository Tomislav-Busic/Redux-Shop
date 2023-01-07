import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
  },
  reducers: {},
});

export const productActions = productSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 1,
    productsPerPage: 10,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setProductsPerPage(state, action) {
      state.productsPerPage = action.payload;
    },
  },
});

export const paginationActions = paginationSlice.actions;

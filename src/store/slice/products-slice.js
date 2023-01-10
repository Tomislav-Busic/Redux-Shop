import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    showAll: true,
    categoryId: null,
    productName: "",
  },
  reducers: {
    showProducts(state, action) {
      state.productsList = action.payload;
    },
    showAllProducts(state, action) {
      state.showAll = action.payload;
      state.categoryId = null;
    },
    showProductsByCategory(state, action) {
      state.categoryId = action.payload;
      state.showAll = false;
    },
    searchByName(state, action) {
      state.productName = action.payload;
    },
    sortProductsByHigherPrice(state, action) {
      state.productsList.sort((a, b) => {
        if (action.payload === "higher") {
          return b.price - a.price;
        } else if (action.payload === "lower") {
          return a.price - b.price;
        }
      });
    },
  },
});

export const productsActions = productsSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    categoryId: null,
  },
  reducers: {
    showProducts(state, action) {
      state.productsList = action.payload;
    },
    showProductsByCategory(state, action) {
      state.categoryId = action.payload;
    },
    searchByName(state, action) {
      state.productsList = state.productsList.filter(
        (product) =>
          product.title.toLowerCase().includes(action.payload) ||
          product.title.includes(action.payload)
      );
    },
    sortProductsByHigherPrice(state, action) {
      const products = [...state.productsList];
      let value = action.payload;

      if (value === "higher") {
        return products.sort((a, b) => b.price - a.price);
      } else if (value === "lower") {
        return products.sort((a, b) => a.price - b.price);
      } else {
        return products;
      }
    },
  },
});

export const productsActions = productsSlice.actions;

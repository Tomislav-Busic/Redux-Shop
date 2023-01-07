import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    productsList: [],
    categoryId: null,
    productName: "",
  },
  reducers: {
    showProducts(state, action) {
      state.productsList = action.payload;
    },
    showProductsByCategory(state, action) {
      state.categoryId = action.payload;
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

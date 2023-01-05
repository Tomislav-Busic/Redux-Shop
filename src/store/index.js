import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slice/products-slice";
import { categoriesSlice } from "./slice/categories-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./products-slice";
import { categoriesSlice } from "./categories-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});

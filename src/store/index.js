import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slice/products-slice";
import { categoriesSlice } from "./slice/categories-slice";
import { productSlice } from "./slice/product-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,
    product: productSlice.reducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slice/products-slice";
import { categoriesSlice } from "./slice/categories-slice";
import { productSlice } from "./slice/product-slice";
import { cartSlice } from "./slice/cart-slice";
import { favoriteSlice } from "./slice/favorite-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});

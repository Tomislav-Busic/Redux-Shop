import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    totalQuantity: 0,
    isOpen: false,
  },
  reducers: {
    showCartItems(state, action) {
      state.cartList = action.payload;
      state.totalQuantity = action.payload.length;
    },
    toggleCart(state, action) {
      state.isOpen = !state.isOpen;
    },
    addToCart(state, action) {
      const newItem = action.payload;

      const exsistingItem = state.cartList.find(
        (item) => item.id === newItem.id
      );

      if (exsistingItem) {
        exsistingItem.quantity++;
        exsistingItem.totalPrice += newItem.price;
      } else {
        state.cartList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          image: newItem.image,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart(state, action) {
      const exsistingItem = state.cartList.find(
        (item) => item.id === action.payload
      );

      if (exsistingItem.quantity === 1) {
        state.cartList = state.cartList.filter(
          (item) => item.id !== action.payload
        );
        state.totalQuantity--;
      } else {
        exsistingItem.quantity--;
        exsistingItem.totalPrice -= exsistingItem.price;
      }
    },
    totalRemove(state, action) {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload
      );
      state.totalQuantity--;
    },
    clearCartItems(state, action) {
      state.cartList = [];
    },
  },
});

export const cartActions = cartSlice.actions;

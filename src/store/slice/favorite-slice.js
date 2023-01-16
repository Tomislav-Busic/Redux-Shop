import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favList: [],
    showFavorite: false,
    totalQuantity: 0,
  },
  reducers: {
    showFavItems(state, action) {
      state.favList = action.payload;
      state.totalQuantity = action.payload.length;
    },
    toggleFav(state, action) {
      state.showFavorite = !state.showFavorite;
    },
    addToFavList(state, action) {
      const newItem = action.payload;

      const exsistingItem = state.favList.find(
        (item) => item.id === newItem.id
      );

      if (!exsistingItem) {
        state.favList.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
        });
        state.totalQuantity++;
      }
    },
    removeFromFav(state, action) {
      state.favList = state.favList.filter(
        (item) => item.id !== action.payload
      );
      state.totalQuantity--;
    },
  },
});

export const favoriteActions = favoriteSlice.actions;

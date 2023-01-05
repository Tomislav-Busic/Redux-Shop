import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categoriesList: [],
  },
  reducers: {
    showCategories(state, action) {
      state.categoriesList = action.payload;
    },
  },
});

export const categoriesAction = categoriesSlice.actions;

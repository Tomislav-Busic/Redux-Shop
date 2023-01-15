import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeState: false,
  },
  reducers: {
    changeTheme(state, action) {
      state.themeState = !state.themeState;
    },
  },
});

export const themeAction = themeSlice.actions;

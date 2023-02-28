import { createSlice } from "@reduxjs/toolkit";

export const stripeSlice = createSlice({
  name: "stripe",
  initialState: {
    stripeData: {},
    toggleModal: false,
  },
  reducers: {
    handleStripe(state, action) {
      state.stripeData = action.payload;
      state.toggleModal = !state.toggleModal;
    },
    closeModal(state) {
      state.toggleModal = !state.toggleModal;
    },
  },
});

export const stripeActions = stripeSlice.actions;

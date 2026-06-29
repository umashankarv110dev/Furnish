import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",

  initialState: {
    addresses: [],
  },

  reducers: {
    addAddress: (
      state,
      action
    ) => {
      state.addresses.push(
        action.payload
      );
    },

    removeAddress: (
      state,
      action
    ) => {
      state.addresses =
        state.addresses.filter(
          item =>
            item.id !==
            action.payload
        );
    },
  },
});

export const {
  addAddress,
  removeAddress,
} = addressSlice.actions;

export default addressSlice.reducer;
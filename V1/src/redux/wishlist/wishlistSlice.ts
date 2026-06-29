import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    items: [],
  },

  reducers: {
    addWishlist(state, action: PayloadAction<any>) {
      state.items.push(action.payload);
    },

    removeWishlist(state, action) {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
    },
  },
});

export const {
  addWishlist,
  removeWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({

  name: "favorites",

  initialState: {
    list: []
  },

  reducers: {

    addFavorite(state, action) {

      const exists = state.list.find(
        item => item.iso3 === action.payload.iso3
      );

      if (!exists) {
        state.list.push(action.payload);
      }
    },

    removeFavorite(state, action) {

      state.list = state.list.filter(
        item => item.iso3 !== action.payload
      );
    }

  }

});

export const {
  addFavorite,
  removeFavorite
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
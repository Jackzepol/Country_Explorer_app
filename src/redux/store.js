

import { configureStore } from "@reduxjs/toolkit";

import countryReducer from "./slices/CountrySlice";
import favoritesReducer from "./slices/FavoritesSlice";

export const store = configureStore({

  reducer: {

    countries: countryReducer,

    favorites: favoritesReducer

  }

});
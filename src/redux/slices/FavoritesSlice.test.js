

import { describe, test, expect } from "vitest";

import favoritesReducer, {
  addFavorite,
  removeFavorite,
} from "./FavoritesSlice";

describe("Favorites Slice", () => {

  test("debe agregar un país a favoritos", () => {

    const initialState = {
      list: [],
    };

    const country = {
      country: "Mexico",
      iso3: "MEX",
    };

    const state = favoritesReducer(
      initialState,
      addFavorite(country)
    );

    expect(state.list).toHaveLength(1);

    expect(state.list[0].country).toBe("Mexico");
  });

  test("debe eliminar un país de favoritos", () => {

    const initialState = {
      list: [
        {
          country: "Mexico",
          iso3: "MEX",
        },
      ],
    };

    const state = favoritesReducer(
      initialState,
      removeFavorite("MEX")
    );

    expect(state.list).toHaveLength(0);
  });

});
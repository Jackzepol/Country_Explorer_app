

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCountries } from "../../utils/api";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const data = await getAllCountries();
    return data;
  }
);

const countrySlice = createSlice({
  name: "countries",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.loading = false;
        state.error = "Error fetching countries";
      });
  },
});

export default countrySlice.reducer;
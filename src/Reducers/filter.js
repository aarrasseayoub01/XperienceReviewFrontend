import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  open: "lol",
  search: "",
  order: "Newest",
  app: "Google",
  time: "All time",
  rating: "",
  version: "",
  country: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    open: (state, action) => {
      state.open = action.payload;
    },
    search: (state, action) => {
      state.search = action.payload;
    },
    order: (state, action) => {
      state.order = action.payload;
    },
    app: (state, action) => {
      state.app = action.payload;
    },
    time: (state, action) => {
      state.time = action.payload;
    },
    rating: (state, action) => {
      state.rating = action.payload;
    },
    version: (state, action) => {
      state.version = action.payload;
    },
    country: (state, action) => {
      state.country = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, search, order, app, time, rating, version, country } =
  filterSlice.actions;

export default filterSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Reducers/filter.js";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

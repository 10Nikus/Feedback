import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filter/filterSlice";
import sortSlice from "./features/sort/sortSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    sortSlice,
  },
});

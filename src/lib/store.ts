import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/slice/filterSlice";
import sortSlice from "./features/slice/sortSlice";
import numberSlice from "./features/slice/feedbuckNumberSlice";

export const store = configureStore({
  reducer: {
    filterSlice,
    sortSlice,
    numberSlice,
  },
});

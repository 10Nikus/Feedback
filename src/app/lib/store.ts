import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./features/filter/filterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      filterSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

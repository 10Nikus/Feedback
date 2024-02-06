import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    status: "all",
    sort: "Most Comments",
  },
  reducers: {
    setFilter: (state, action) => {
      state.status = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setFilter, setSort } = filterSlice.actions;
export default filterSlice.reducer;

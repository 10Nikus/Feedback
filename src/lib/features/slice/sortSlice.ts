import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    status: "Most Comments",
  },
  reducers: {
    setSort: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setSort } = sortSlice.actions;
export default sortSlice.reducer;

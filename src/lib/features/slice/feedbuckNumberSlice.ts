import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "number",
  initialState: {
    status: 0,
  },
  reducers: {
    setNumber: (state, action) => {
      state.status = action.payload;
    },
  },
});
export const { setNumber } = numberSlice.actions;
export default numberSlice.reducer;

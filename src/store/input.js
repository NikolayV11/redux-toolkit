import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const stateSliceInput = createSlice({
  name: "stateA",
  initialState,
  reducers: {
    incrementValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { incrementValue } = stateSliceInput.actions;

export default stateSliceInput.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  id: 0,
};

export const stateSliceAdded = createSlice({
  name: "stateAdded",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload !== "") {
        state.value = action.payload;
        // console.log(action.payload);
        state.id += 1;
      }
    },
  },
});

export const { addTask } = stateSliceAdded.actions;

export default stateSliceAdded.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const stateSliceAdded = createSlice({
  name: "stateAdded",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.value.push({ title: action.payload, status: false, id: state.value.length - 1 });
      console.log(action.payload, "value");
    },
    changeStatus: (state, action) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload) {
          item.status = true;
        }
      });
    },
    deleteTask: (state, action) => {
      state.value.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addTask, changeStatus, deleteTask } = stateSliceAdded.actions;

export default stateSliceAdded.reducer;

import { configureStore } from "@reduxjs/toolkit";

import sliceInput from "./input";
import stateAdded from "./added";

export const store = configureStore({
  reducer: {
    stateInput: sliceInput,
    stateAdded: stateAdded,
  },
});

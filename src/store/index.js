import { configureStore } from "@reduxjs/toolkit";

import sliceInput from "./input";
import added from "./added";

export const store = configureStore({
  reducer: {
    stateInput: sliceInput,
    added: added,
  },
});

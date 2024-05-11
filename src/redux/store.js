import { configureStore } from "@reduxjs/toolkit";

import globalVariable from "../redux/globalVariable";

export const store = configureStore({
  reducer: {
    Variable: globalVariable,
  },
});

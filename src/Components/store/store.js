import { configureStore } from "@reduxjs/toolkit";
import CreateSlice from "./CreateSlice";

const store = configureStore({
  reducer: {
    cart: CreateSlice,
  },
});

export default store;

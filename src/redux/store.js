import { configureStore } from "@reduxjs/toolkit";
import fetchSlice from "./fetchSlice";
 

const store = configureStore({
  reducer: {
    fetch:fetchSlice,
 
  },
});

export default store;
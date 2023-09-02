import { configureStore } from "@reduxjs/toolkit";
import exerciseResultsReducer from "./reducers";

const store = configureStore({
  reducer: {
    exerciseResults: exerciseResultsReducer,
  },
});

export default store;

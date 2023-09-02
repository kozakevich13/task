import { createReducer } from "@reduxjs/toolkit";
import { setExerciseResults } from "./actions";

const initialState = {
  exerciseResults: [], // Початковий стан для результатів вправ
};

const exerciseResultsReducer = createReducer(initialState, {
  [setExerciseResults]: (state, action) => {
    state.exerciseResults = action.payload;
  },
});

export default exerciseResultsReducer;

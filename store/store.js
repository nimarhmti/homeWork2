import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { question1Slice } from "./Slices/question1Slice";
import { question2Slice } from "./Slices/question2Slice";
import { question3Slice } from "./Slices/question3Slice";
import { question4Slice } from "./Slices/question4Slice";

// const initialState = {
//   question1: {},
//   question2: {},
//   question3: {},
//   question4: {},
// };

export const makeStore = () => {
  return configureStore({
    reducer: {
      [question1Slice.name]: question1Slice.reducer,
      [question2Slice.name]: question2Slice.reducer,
      [question3Slice.name]: question3Slice.reducer,
      [question4Slice.name]: question4Slice.reducer,
    },
  });
};

const store = makeStore();

export default store;

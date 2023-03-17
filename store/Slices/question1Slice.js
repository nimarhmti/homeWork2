import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  questionsData: [
    {
      title: "1+1?",
      level: "1",
      options: ["All options", "X>2", " |R", "2"],
      answer: "2",
    },
    {
      title: "6*5?",
      level: "2",
      options: ["22", "1", "30", "10"],
      answer: "30",
    },
    {
      title: "What is the calculator for multiplying two negative numbers?",
      level: "3",
      options: ["negative", "positive", "positive & negative ", "none"],
      answer: "positive",
    },
    {
      title: "Which number is divisible by 4?",
      level: "4",
      options: ["106", "102", "110", "112"],
      answer: "112",
    },
    {
      title: "Three consecutive numbers that add up to 63?",
      level: "5",
      options: ["19,20,21", "20,21,22", "18,20,22", "17,18,19"],
      answer: "20,21,22",
    },
    {
      title: " sina taller than nima so which option is correct? ",
      level: "6",
      options: [
        "nima taller than sina",
        "Nima and Sina are the same height",
        "nima taller than sina",
        "no One",
      ],
      answer: "no One",
    },
  ],
};

export const question1Slice = createSlice({
  name: "questionOne",
  initialState,
  reducers: {
    // Action to set the authentication status
    // setAuthState(state, action) {
    //   state.authState = action.payload;
    // },
  },
});

export default question1Slice.reducer;

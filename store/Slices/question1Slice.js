import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  questionsData: [
    {
      title: "حاصل جمع عدد 1 و 1 چه مقداری میباشد؟",
      level: "1",
      options: ["همه گزینه‌ها", "هر عددی غیر از 2", "دامنه اعداد صحیح", "2"],
      answer: "2",
    },
    {
      title: "حاصل ضرب اعداد 5 و 6 چه عددی میشود؟",
      level: "2",
      options: ["22", "1", "30", "10"],
      answer: "30",
    },
    {
      title: "حاصلضرب دو عدد منفی در هم عددی است ؟",
      level: "3",
      options: ["منفی", "مثبت", "منفی و مثبت", "خنثی"],
      answer: "مثبت",
    },
    {
      title: "کدام عدد بدون باقی مانده بر عدد 4 بخش پذیر است",
      level: "4",
      options: ["106", "102", "110", "112"],
      answer: "112",
    },
    {
      title: "سه عدد متوالی که حاصل آنها 63 میشود",
      level: "5",
      options: ["19,20,21", "20,21,22", "18,20,22", "17,18,19"],
      answer: "20,21,22",
    },
    {
      title:
        "جان از جیم قدبلند تر است و جین از جان قدکوتاه ت، کدام جمله صحیح است؟",
      level: "6",
      options: [
        "جین از جیم قدبلندتر است",
        "جین هم‌قد جیم است",
        "جیم از جین قدبلندتر است",
        "هیچکدام",
      ],
      answer: "هیچکدام",
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

import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const question4Slice = createSlice({
  name: "questionFour",
  initialState,
  reducers: {
    // Action to set the authentication status
    // setAuthState(state, action) {
    //   state.authState = action.payload;
    // },
  },
});

export default question4Slice.reducer;

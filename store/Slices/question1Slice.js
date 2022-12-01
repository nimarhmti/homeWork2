import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {};

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

import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const question2Slice = createSlice({
  name: "questionTwo",
  initialState,
  reducers: {
    // Action to set the authentication status
    // setAuthState(state, action) {
    //   state.authState = action.payload;
    // },
  },
});

export default question2Slice.reducer;

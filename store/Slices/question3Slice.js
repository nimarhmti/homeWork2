import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const question3Slice = createSlice({
  name: "questionThree",
  initialState,
  reducers: {
    // Action to set the authentication status
    // setAuthState(state, action) {
    //   state.authState = action.payload;
    // },
  },
});

export default question3Slice.reducer;

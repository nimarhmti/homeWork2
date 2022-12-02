import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  players: [],
};

export const question4Slice = createSlice({
  name: "questionFour",
  initialState,
  reducers: {
    savePlayer: (state, { payload }) => {
      state.players.push({
        ...payload,
        id: new Date().getMilliseconds().toString(),
      });
    },
    deletePlayer: (state, { payload }) => {
      state.players = state.players.filter((player) => player.id !== payload);
    },
    updatePlayer: (state, { payload }) => {
      state.players = state.players.map((player) => {
        if (player.id === payload.id) {
          return payload;
        } else {
          return player;
        }
      });
    },
  },
});

export const { savePlayer, deletePlayer, updatePlayer } =
  question4Slice.actions;

export default question4Slice.reducer;

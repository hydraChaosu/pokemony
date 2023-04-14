import { createSlice } from "@reduxjs/toolkit";

export const pokemondleSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    guess: (state, action) => {
      // state.value += 1
    },
    pokemon: (state, action) => {
      // state.value -= 1
    },
    allGuesses: (state, action) => {
      // state.value += action.payload
    },
    guessCount: (state) => {
      state.count += 1;
    },
  },
});

export const { guess, pokemon, allGuesses, guessCount } =
  pokemondleSlice.actions;

export default pokemondleSlice.reducer;

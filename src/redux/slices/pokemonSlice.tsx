import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    perPage: 10,
    pokemons: [],
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPerPage: (state, action) => {
      state.perPage = action.payload;
    },
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    filterPokemons: (state, action) => {
      state.pokemons = state.pokemons.filter((pokemon) => {
        return pokemon.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());
      });
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemon.pending, (state) => {
        state.pokemons = [];
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.pokemons = [];
      });
  },
});

export const { setPage, setPerPage, setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;

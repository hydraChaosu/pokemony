import { configureStore } from "@reduxjs/toolkit";
import pokemondleSlice from "./redux/slices/pokemondleSlice";

export default configureStore({
  reducer: {
    pokemondle: pokemondleSlice,
  },
});

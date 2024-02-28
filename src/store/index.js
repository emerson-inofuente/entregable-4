import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName.slice";
import pokemonName from "./slices/pokemonName.slice";

const store = configureStore({
    reducer: {
        trainerName,
        pokemonName,
    }
});

export default store;
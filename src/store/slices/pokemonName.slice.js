import { createSlice, current } from "@reduxjs/toolkit";

const pokemonNameSlice = createSlice({
    name: 'pokemonName',
    initialState: '',
    reducers: {
        setPokemonName: (currentValue, action) => action.payload
    }
});

export const { setPokemonName } = pokemonNameSlice.actions;

export default pokemonNameSlice.reducer;
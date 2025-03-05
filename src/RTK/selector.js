import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonId) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => pokemon.find((el) => el.id === pokemonId),
  );
export const selectpokemonByRegExp = (reg) =>
  createSelector(
    (state) => state.pokemon.data,
    (pokemon) => {
      return pokemon.filter((el) => el.name.match(reg));
    },
  );
export const selectFavoritePokemons = createSelector(
  (state) => state.pokemon.data,
  (state) => state.Favorite,
  (pokemon, Favorite) => {
    return pokemon.filter((el) => Favorite.includes(el.id));
  },
);

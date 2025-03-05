import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
  "pokemon/fetchMultiplePokemonById",
  async (maxPokeminId) => {
    const numberArray = Array.from({ length: maxPokeminId }, (_, i) => i + 1);

    const fetchAPI = async (pokemonId) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`,
      );
      const data = await response.json();

      const pokemonData = {
        id: pokemonId,
        name:
          data.names.find((el) => el.language.name === "ko")?.name ||
          "이름 없음",
        description:
          data.flavor_text_entries.find((el) => el.language.name === "ko")
            ?.flavor_text || "설명 없음",
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
      };
      return pokemonData;
    };
    return await Promise.all(numberArray.map((el) => fetchAPI(el)));
  },
);

import axios from "axios";

export const getAllPokemons = async () => {
  //! limit 1281
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=30";
  const { data } = await axios.get(URL);
  return data.results;
};

export const getPokemonsByType = async (pokemonType) => {
  const url = `https://pokeapi.co/api/v2/type/${pokemonType}/`;
  const { data } = await axios.get(url);
  const formatPokemons = data.pokemon.map(({ pokemon }) => pokemon);
  return formatPokemons;
};

export const getPokemonById = async (pokemonId) =>{
 
 const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
  const { data } = await axios.get(pokemonUrl);
  const pokemon = {
    // data:data,
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image: data.sprites.other["official-artwork"].front_default,
    gif: data.sprites.versions["generation-v"]["black-white"].animated
      .front_default,
  };
  return pokemon;

}

export const getPokemonByUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);
  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image: data.sprites.other["official-artwork"].front_default,
  };
  return pokemon;
};

const formatStats = (stats) => {
  return stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));
};

const formatTypes = (types) => {
  return types.map((type) => type.type.name);
};

// export const joinPokemonTypes = (types = []) => {
//   return types.slice(0, 2).join(" / ");
// };

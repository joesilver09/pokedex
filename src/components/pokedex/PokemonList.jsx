import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (

    <section className=" max-w-xl mx-auto s900:max-w-4xl s1200:max-w-[1195px] grid gap-3 gap-y-5 place-items-center grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};
export default PokemonList;

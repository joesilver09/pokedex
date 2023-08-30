import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (

    <section className="grid px-4 gap-4 place-items-center grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};
export default PokemonList;

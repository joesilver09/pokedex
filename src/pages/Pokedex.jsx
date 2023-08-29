import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";

const Pokedex = () => {
  const {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handleChange,
    pokemonsByName,
  } = usePokedex();

  return (
    <main>
      <section>
        <p>
          <span className="text-red">Welcome {name}</span>
        </p>
        <form>
          <div>
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon..."
              type="text"
            />
          </div>
          <select className="text-sm" value={pokemonType} onChange={handleChange(setPokemonType)}>
            <option value="">All pokemons</option>
            <option value="normal">Normal</option>
            <option value="fire">Fire</option>
            <option value="fighting">Fighting</option>
            <option value="water">Water</option>
            <option value="flying">Flying</option>
            <option value="grass">Grass</option>
            <option value="poison">Poison</option>
            <option value="electric">Electric</option>
            <option value="ground">Ground</option>
            <option value="psychic">Psychic</option>
            <option value="rock">Rock</option>
            <option value="ice">Ice</option>
            <option value="bug">Bug</option>
            <option value="dragon">Dragon</option>
            <option value="ghost">Ghost</option>
            <option value="dark">Dark</option>
            <option value="steel">Steel</option>
            <option value="fairy">Fairy</option>
          </select>
        </form>
      </section>
      <PokemonList pokemons={pokemonsByName} />
    </main>
  );
};
export default Pokedex;

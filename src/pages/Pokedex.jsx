import { useState } from "react";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";
import { paginateData } from "../utils/pagination";
import Pagination from "../components/pokedex/Pagination";
import { logout } from "../store/slices/trainer.slice";
import { useDispatch } from "react-redux";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch()
 const handleLogout = () => {dispatch(logout())}

  const {
    name,
    pokemonName,
    setPokemonName,
    pokemonType,
    setPokemonType,
    handleChange,
    pokemonsByName,
    types,
  } = usePokedex();

  const { elementsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currentPage
  );

  return (
    <main>
      <section>
        <p>
          <span className="text-red">Welcome {name}</span>
        </p>
        <button
        onClick={handleLogout}>logout</button>
        <form>
          <div>
            <input
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="Search pokemon..."
              type="text"
            />
          </div>
          <select
            className="text-sm"
            value={pokemonType}
            onChange={handleChange(setPokemonType)}
          >
            <option value="">All pokemons</option>
            {types.map((type) => (
              <option key={type.name} className="capitalize" value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>
      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <PokemonList pokemons={elementsInCurrentPage} />
      <Pagination
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
};
export default Pokedex;

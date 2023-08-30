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
      <section className="grid  grid-cols-2 p-6 max-w-md s900:max-w-2xl mx-auto">
        <p>
          <span className=" capitalize ml-3 text-lg text-[#D93F3F] font-bold s900:text-2xl">Welcome {name}!</span>
        </p>
        <button className="translate-y-2 text-[0.7rem] ml-auto pl-1 text-white bg-[#D93F3F] w-14 h-4 rounded-md"
        onClick={handleLogout}>Home <i className='translate-y-[0.07rem] bx bx-log-out-circle'></i></button>
        <form className=" mt-6 grid grid-cols-[57%,43%] col-span-2 justify-between">
          <div>
            <p className="absolute font-medium text-[0.8rem] s900:text-base bg-white translate-x-2 -translate-y-[0.7rem] s900:-translate-y-[0.9rem] px-[0.2rem]">Pokemon Search</p>
            <input className=" placeholder:p-[0.4rem] focus:outline-none border border-black/50 rounded-md p-1 w-full placeholder:text-xs s900:placeholder:text-sm s900:py-3"
              value={pokemonName}
              onChange={handleChange(setPokemonName)}
              placeholder="pokemon name..."
              type="text"
            />
          </div>
          <select
            className="text-sm s900:text-base px-3 rounded focus:outline-none capitalize justify-end ml-2 border bg-slate-300/50"
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

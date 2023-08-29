import { useEffect, useState } from "react";
import { getPokemonByUrl } from "../../services/pokemon";
import StatList from "./StatList";
import { bgStylePokemonType, borderStylePokemonType, flatBgStylePokemonType } from "../../shared/pokemon";
import { Link } from "react-router-dom";


const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);

  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link
    to={`/pokedex/${pokemonInfo?.id}`}
      className={`text-center w-[270px] bg-[#efefef] capitalize shadow-lg shadow-gray-400 border-[8px] ${
        borderStylePokemonType[pokemonInfo?.types[0]]
      } rounded-lg`}
    >
      <header
        className={`relative h-[7.5rem] mb-12 ${
          bgStylePokemonType[pokemonInfo?.types[0]]
        }`}
      >
 <div className="absolute left-1/2 -translate-x-1/2 -bottom-[3.5rem] aspect-square h-[10.5rem]">
  {pokemonInfo?.image ? (
    <img
      className="h-full w-full object-contain"
      src={pokemonInfo?.image}
      alt="pokemon"
    />
  ) : (
    <img
      className="h-full w-full object-contain"
      src="images/pokemonloader.png"
      alt="cargando pokemon"
    />
  )}
</div>
      </header>
      <section>
        <h3 className="text-lg font-semibold">{pokemonInfo?.name}</h3>
        <ul className=" text-sm flex place-content-center gap-2 m-2">
          <li
            className={`h-[1.5rem] grid place-content-center w-[4rem] text-white rounded border  ${
              flatBgStylePokemonType[pokemonInfo?.types[0]]
            }`}
          >
            {pokemonInfo?.types[0]}
          </li>
          {pokemonInfo?.types[1] && (
            <li
              className={`h-[1.5rem] w-[4rem] grid place-content-center text-white rounded border ${
                flatBgStylePokemonType[pokemonInfo?.types[1]]
              }`}
            >
              {pokemonInfo?.types[1]}
            </li>
          )}
        </ul>
        
        <h4 className="text-xs text-slate-500 mb-4"> Type</h4>
        <hr className="border border-[#dcdcdc] mx-6"/>
        <StatList stats={pokemonInfo?.stats} />
      </section>
    </Link>
  );
};
export default PokemonCard;

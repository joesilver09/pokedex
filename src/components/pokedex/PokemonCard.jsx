import { useEffect, useState } from "react";
import { getPokemonByUrl, joinPokemonTypes } from "../../services/pokemon";
import StatList from "./StatList";

const PokemonCard = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);


  useEffect(() => {
    getPokemonByUrl(pokemonUrl)
      .then((data) => setPokemonInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className={`text-center capitalize border-4 border-${pokemonInfo?.types[0]} rounded-md`}>
      <header
        className={`relative h-[80px] mb-14 bg-gradient-to-b from-${pokemonInfo?.types[0]} to-${pokemonInfo?.types[0]}/50`}
        >
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 aspect-square h-[140px]">
          <img
            className="h-full w-full object-contain"
            src={pokemonInfo?.image}
            alt="pokemon"
            />
        </div>
      </header>
      <section>
        <h3 className="text-lg font-bold">{pokemonInfo?.name}</h3>
        <h4>{joinPokemonTypes(pokemonInfo?.types)}</h4>
        {console.log(pokemonInfo)}
        <h5 className="text-sm mb-2"> Types</h5>
        <hr />
        <StatList stats={pokemonInfo?.stats} />
      </section>
    </article>
  );
};
export default PokemonCard;

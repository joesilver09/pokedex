import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemon";
import StatBarList from "../components/pokemonDetail/StatBarList";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex justify-center items-center">
      <article className="p-5">
        <header>
          <div className=" -bottom-[3.5rem] aspect-square max-h-[24rem]">
            {pokemonData?.image ? (
              <img
                className="h-full w-full object-contain"
                src={pokemonData?.image}
                alt="pokemon"
              />
            ) : (
              <img
                className="h-full w-full object-contain"
                src="images/missingimage.png"
                alt="image unable"
              />
            )}
          </div>
        </header>
        <section>
          <span>#{pokemonData?.id}</span>
        </section>
        <StatBarList stats={pokemonData?.stats} />
      </article>
    </main>
  );
};
export default PokemonDetail;

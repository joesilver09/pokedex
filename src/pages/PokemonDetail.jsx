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
          <div>
            <img src={pokemonData?.image} alt="pokemon" />
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

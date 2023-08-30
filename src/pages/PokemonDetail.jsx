import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemon";
import StatBarList from "../components/pokemonDetail/StatBarList";
import {
  bgTriGradient,
  flatBgStylePokemonType,
} from "../shared/pokemon";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);
  console.log(pokemonData);
  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="pt-12">
      <article
        className={ `p-4 h-[500px] mx-auto w-[300px] rounded-md relative grid place-content-center ${
          bgTriGradient[pokemonData?.types[0]]
        } translate-y-32`}
      >
        <header>
          <div className=" absolute -top-[9.7rem] right-1/2 translate-x-1/2 aspect-square h-[14.7rem]">
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
          <div className="absolute -z-10 -left-12 w-[110px]">
            <img src="images/details_1.png" alt="" />
          </div>

          <div className="absolute bottom-0 -right-3 -z-10  w-[170px]">
            <img src="images/details_2.png" alt="" />
          </div>
        </header>
        <section className="grid  grid-cols-1 place-items-center">
          <span className="font-semibold  text-xl pt-4">
            #{pokemonData?.id}
          </span>
          <h2 className="font-semibold capitalize  text-2xl">
            {pokemonData?.name}
          </h2>

          <ul className="grid grid-cols-2 gap-5">
            <li className="grid grid-cols-1 place-items-center">
              <span className="text-sm">weight</span>
              <span className="font-semibold">{pokemonData?.weight}</span>
            </li>

            <li className="grid grid-cols-1 font- place-items-center">
              <span className="text-sm">height</span>
              <span className="font-semibold">{pokemonData?.height}</span>
            </li>
          </ul>
          
          <div className="grid grid-cols-2">
          <ul className=" text-sm grid grid-cols-2 text-center place-content-center gap-2 m-2">
          <p className=" col-span-2">Type</p>
            <li
              className={`h-[1.5rem] grid place-content-center w-[4rem] text-white rounded border  ${
                flatBgStylePokemonType[pokemonData?.types[0]]
              }`}
            >
              {pokemonData?.types[0]}
            </li>
            {pokemonData?.types[1] && (
              <li
                className={`h-[1.5rem] w-[4rem] grid place-content-center text-white rounded border ${
                  flatBgStylePokemonType[pokemonData?.types[1]]
                }`}
              >
                {pokemonData?.types[1]}
              </li>
            )}
          </ul>

          <ul className=" text-sm text-center grid grid-cols-2 place-content-center justify-content gap-2 m-2">
            <p className=" col-span-2">Ability</p>
            {pokemonData?.abilities[1] && (
              <>
            <li
              className={`h-[1.5rem] grid place-content-center  w-[5rem]`}
            >
              {pokemonData?.abilities[0].ability.name}
            </li>
              <li
                className={`h-[1.5rem] w-[5rem] grid place-content-center`}
              >
              {pokemonData?.abilities[1].ability.name}
                
              </li>
              </>
            ) || <li className={`h-[1.5rem] w-[5rem] col-span-2 mx-auto grid place-content-center border`}
            >{pokemonData?.abilities[0].ability.name}</li>}
          </ul>
          </div>
          
        </section>

        
        <StatBarList stats={pokemonData?.stats} />
        
      </article>
    </main>
  );
};
export default PokemonDetail;

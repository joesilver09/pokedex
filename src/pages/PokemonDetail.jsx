import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemon";
import StatBarList from "../components/pokemonDetail/StatBarList";
import { bgTriGradient, flatBgStylePokemonType } from "../shared/pokemon";

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
    <main className=" bg-[#dad2d2] bg-cover bg-repeat h-screen">
      <Link to="/pokedex" className=" flex items-center">
        <i className="p-3 bx bxs-left-arrow" />
        <p className="z-10  -m-4 flex items-center bg-black text-white p-1 h-[0.9rem] text-[0.6rem]">
          GoBack
        </p>
      </Link>
      <article
        className={`h-[34rem] s600:h-[43rem] mx-auto capitalize w-[95vw] rounded-xl relative p-2 max-w-[50rem] max-h-[60rem] ${
          bgTriGradient[pokemonData?.types[0]]
        } translate-y-32 pt-20`}
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
          <div className="absolute -z-10 top-12 left-0 w-[110px]">
            <img src="images/details_1.png" alt="" />
          </div>

          <div className="absolute bottom-0 right-0 -z-10  w-[170px]">
            <img src="images/details_2.png" alt="" />
          </div>
        </header>

        <span className="flex right-2 top-2 justify-center items-center font-bold absolute aspect-square bg-black text-white text-sm w-14 h-14  rounded-full">
          #{pokemonData?.id}
        </span>
        <section className="grid grid-cols-3 s600:grid-cols-2 text-sm place-items-center s600:text-base max-w-screen-s600 mx-auto">
          <h2 className="font-bold capitalize  col-span-3 text-2xl s600:text-4xl pb-3">
            {pokemonData?.name}
          </h2>

          <ul className=" grid gap-2 capitalize translate-x-4 s600:translate-x-0 mx-auto s600:grid-cols-2  text-center  rounded-md s600:row-start-3 s600:col-start-1">
            <p className=" s600:col-span-2 font-bold s600:text-xl ">Types</p>
            {pokemonData?.types[1] && (
              <>
            <li
              className={` w-20 s600:w-28 font-medium rounded border border-white  ${
                flatBgStylePokemonType[pokemonData?.types[0]]
              }`}
            >
              {pokemonData?.types[0]}
            </li>
              <li
                className={` w-20 s600:w-28 font-medium rounded border border-white ${
                  flatBgStylePokemonType[pokemonData?.types[1]]
                }`}
                >
                {pokemonData?.types[1]}
              </li>
                </>)||(<li
              className={` w-20 s600:w-28 font-medium rounded border border-white s600:col-span-2 ${
                flatBgStylePokemonType[pokemonData?.types[0]]
              }`}
            >
              {pokemonData?.types[0]}
            </li>
              ) }
          </ul>

          <ul className=" grid gap-2 -translate-x-3 s600:translate-x-0 text-center capitalize font-medium s600:grid-cols-2 s600:row-start-3 s600:col-start-2">
            <p className="font-bold s600:col-span-2 s600:text-lg">Abilities</p>
            {(pokemonData?.abilities[1] && (
              <>
                <li
                  className={`bg-gray-600/40 border border-white rounded w-[7rem]`}
                >
                  {pokemonData?.abilities[0].ability.name}
                </li>
                <li
                  className={`bg-gray-600/40 border border-white rounded w-[7rem]`}
                >
                  {pokemonData?.abilities[1].ability.name}
                </li>
              </>
            )) || (
              <li
                className={`bg-gray-600 border s600:col-span-2 border-white rounded w-[7rem]`}
              >
                {pokemonData?.abilities[0].ability.name}
              </li>
            )}
          </ul>

          <ul className="col-start-2 row-start-2 s600:col-span-2 s600:row-start-2 grid s600:grid-cols-2 gap-2 translate-y-2 s600:translate-y-0 s600:translate-x-0 s600:gap-20 s600:pt-5">
            <li className="grid place-content-center text-center">
              <span className="text-xs s600:text-base">weight</span>
              <span className="font-semibold s600:text-lg">{pokemonData?.weight}</span>
            </li>

            <li className="grid place-content-center text-center">
              <span className="text-xs s600:text-base">height</span>
              <span className="font-semibold s600:text-lg">{pokemonData?.height}</span>
            </li>
          </ul>
        </section>
        <div className="pt-5 m-3">
          <StatBarList stats={pokemonData?.stats} />
        </div>
      </article>
    </main>
  );
};
export default PokemonDetail;

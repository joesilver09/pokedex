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
    <main className="grid grid-cols-1 pb-[8rem] place-content-center">
      <div className="aspect-square w-full h-[110vh] fixed bg-gradient-to-b from-gray-800 via-gray-400 to-[#5c5864]  bg-cover"></div>
      <div className="w-full grid place-items-center"><Link to="/pokedex" className="flex items-center w-full translate-y-8 max-w-[550px] absolute">
        <i className="z-10 p-3 bx bxs-left-arrow text-[1.68rem]" />
        <p className="z-10  -m-[1.2rem] flex items-center bg-black text-white p-1 h-[1.4rem] -mb-[1.06rem]  text-[0.8rem] pr-3">
          GoBack
        </p>
      </Link>
      </div>
      <article
        className={`mx-auto capitalize w-[95vw] rounded-xl relative p-2 max-w-[24rem] s600:max-w-[35rem] ${
          bgTriGradient[pokemonData?.types[0]]
        } translate-y-40 pt-16 pb-6`}
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
          <div className="absolute -z-10 top-3 left-3 w-[170px] border-l-2 border-t-2 border-black/50">
            <img src="images/details_1.png" alt="" />
          </div>

          <div className="absolute bottom-3 right-3 border-r-2 border-b-2 border-black/50 -z-10  w-[170px]">
            <img src="images/details_2.png" alt="" />
          </div>
        </header>

        <span className="-z-10 flex right-3 top-3 justify-center items-center font-bold absolute aspect-square bg-black text-white text-sm w-14 h-14  rounded-full">
          #{pokemonData?.id}
        </span>
        <section className=" justify-center text-center text-sm place-items-center s600:text-base  mx-auto px-7 ">
          <h2 className="font-bold capitalize  col-span-3 text-4xl s600:text-4xl pb-2 title_bordered">
            {pokemonData?.name}
          </h2>
          <div className=" grid  grid-cols-3 capitalize mx-auto  text-center  rounded-md  py-5">
            <p className="font-bold s600:text-lg" >Types</p>
            <p className="font-bold s600:text-lg" >Dimensions</p>
            <p className="font-bold s600:text-lg">Abilities</p>

            <ul className="grid font-medium place-content-center gap-2 capitalize">
              {(pokemonData?.types[1] && (
                <>
                  <li
                    className={`w-20 s600:w-28 font-medium rounded border border-white  ${
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
                </>
              )) || (
                <li
                  className={` w-20 s600:w-28 font-medium rounded border border-white s600:col-span-2 ${
                    flatBgStylePokemonType[pokemonData?.types[0]]
                  }`}
                >
                  {pokemonData?.types[0]}
                </li>
              )}
            </ul>

            <ul>
              <li className="grid place-content-center text-center">
                <span className="text-xs s600:text-base">weight</span>
                <span className="font-semibold s600:text-lg">
                  {pokemonData?.weight}
                </span>
              </li>

              <li className="grid place-content-center text-center">
                <span className="text-xs s600:text-base">height</span>
                <span className="font-semibold s600:text-lg">
                  {pokemonData?.height}
                </span>
              </li>
            </ul>

            <ul className="grid font-medium place-content-center gap-2 capitalize">
              {(pokemonData?.abilities[1] && (
                <>
                  <li className=" font-bold text_ability_shadow">
                    {pokemonData?.abilities[0].ability.name}
                  </li>
                  <li className=" font-bold text_ability_shadow">
                    {pokemonData?.abilities[1].ability.name}
                  </li>
                </>
              )) || (
                <li className=" font-bold text_ability_shadow">
                  {pokemonData?.abilities[0].ability.name}
                </li>
              )}
            </ul>
          </div>
        </section>
        <div >
          <StatBarList stats={pokemonData?.stats} />
        </div>
      </article>
       </main>
  );
};
export default PokemonDetail;

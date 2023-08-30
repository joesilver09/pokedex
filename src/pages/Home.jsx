import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr] bg-[#9ba4c359]">
      <section className="flex flex-col justify-center text-center items-center gap-4">
        <div className=" grid justify-center mt-5 max-w-[18rem] sm:max-w-[26rem] w-3/4">
          <img src="images/pokedexLogo.png" alt="Logo" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <article className="z-10 sm:translate-x-20 sm:translate-y-16">
            <h2 className="mb-1 text-[#e34b4b] font-bold text-2xl sm:text-3xl">
              Welcome trainer!
            </h2>
            <p className="font-semibold  sm:text-lg pb-8">
              Let's begin with your name. What is it?
            </p>

            <form onSubmit={handleSubmit}>
              <input
                className="focus:outline-none rounded-l-md p-2"
                autoComplete="off"
                placeholder="your name..."
                id="nameTrainer"
                type="text"
                required
              />
              <button className="text-white p-2 bg-[#D93F3F] rounded-r-md">
                Go!
              </button>
            </form>
          </article>

          <div className="grid justify-center ml-8 max-w-[18rem] sm:-translate-x-8 sm:max-w-[24rem] w-[80%] my-4">
            <img
              src="images/oak.png"
              alt="Professor Samuel Oak"
              className="justify-center w-full"
            />
          </div>
        </div>
      </section>

      <FooterPokeball />
    </main>
  );
};
export default Home;

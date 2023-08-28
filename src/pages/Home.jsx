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
    <main className="min-h-screen grid grid-rows-[1fr]">
      <section>
        <article>
          <div>
            <img src="images/pokedexLogo.png" alt="Logo" />
          </div>
          <h2>Welcome trainer!</h2>
          <p>In order to begin, provide us with your name</p>
        </article>
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            placeholder="your name..."
            id="nameTrainer"
            type="text"
            required
          />
          <button>Start</button>
        </form>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;

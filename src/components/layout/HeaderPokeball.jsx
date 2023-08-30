const HeaderPokeball = ({ children }) => {
  return (
    <section>
      <header>
        <div className="h-12 bg-red-600 relative">
            <div className=" z-10 absolute left-0 -bottom-2 w-[50%] max-w-[14rem]">
                <img src="/images/pokedexLogo.png" alt="" /></div>
        </div>
        <div className="h-12 bg-black relative">
          <div className="h-16 bg-white aspect-square rounded-full absolute right-0 -translate-x-1/2 border-[8px] border-black -top-8 after:block after:content-[''] after:h-9 after:aspect-square after:bg-slate-800 after:border-4 after:border-black after:rounded-full after:translate-x-[0.38rem] after:translate-y-[0.38rem]"></div>
        </div>
      </header>
      {children}
    </section>
  );
};
export default HeaderPokeball;

const HeaderPokeball = ({ children }) => {
  return (
    <section>
      <header>
        <div className="h-11 bg-red-600 relative"></div>
        <div className="h-8 bg-black relative"></div>
      </header>
      <div className=" -translate-y-20 relative grid place-content-center mx-auto max-w-[1000px] border border-red-500">
        <div className=" z-10 absolute top-5 ml-8 w-[55%] max-w-[14rem] s900:max-w-[17.6rem]">
          <img src="/images/pokedexLogo.png" alt="" />
        </div>
        <div className="h-16 mr-12 bg-white aspect-square rounded-full absolute
        right-0 top-7 border-[8px] border-black after:block after:content-[''] after:h-9 after:aspect-square after:bg-slate-800 after:border-4 after:border-black after:rounded-full after:translate-x-[0.38rem] after:translate-y-[0.38rem]"></div>
        
      </div>
      
      {children}
    </section>
  );
};
export default HeaderPokeball;

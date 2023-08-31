const BarProgressStat = ({ stat }) => {
  const getPercentBarProgress = (statValue) => {
    const MAX_STAT_VALUE = 255;
    const percent = (100 * statValue) / MAX_STAT_VALUE;

    return `${percent}%`;
  };

  return (
    <article>
      <section className="flex font-novasquare justify-between text-base font-black s600:text-lg px-8 capitalize barfont">
        <h5>{stat.name}</h5>
        <span>{stat.value}/255</span>
      </section>
      <div className="mx-7 h-3 s600:h-5 bg-[#00000050]">
        <div style={{width: getPercentBarProgress(stat.value)}} className="h-full bg-gradient-to-r from-[#FCD676] to-[#E6901E]"></div>
      </div>
    </article>
  );
};
export default BarProgressStat;

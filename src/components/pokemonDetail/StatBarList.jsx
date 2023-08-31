import BarProgressStat from "./BarProgressStat";

const StatBarList = ({ stats }) => {
  return (
    <section className="text-center">
      <h2 className="font-bold text-3xl subtitle_bordered">Stats</h2>
      <section>
        {stats?.map((stat) => (
          <BarProgressStat key={stat.name} stat={stat} />
        ))}
      </section>
    </section>
  );
};
export default StatBarList;

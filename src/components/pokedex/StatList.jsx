const StatList = ({ stats }) => {
 

  if (!stats) {
    return <div className="flex place-content-center pt-10 h-[12.5rem]">
      <img src="images/statsloader.gif" alt="loading" className="w-20 h-20" />
    </div>;}
  const customOrder = [0, 5, 1, 3, 2, 4];
  const reorderedStats = customOrder.map(index => stats[index]);

  return (
    <ul className="grid gap-2 grid-cols-2 text-[0.65rem] px-3 py-4">
      {reorderedStats.map((stat) => (
        <li key={stat.name}>
          <h4 className="uppercase line-clamp-1 text-slate-500">{stat.name}</h4>
          <span className="font-semibold text-base">{stat.value}</span>
        </li>
      ))}
    </ul>
  );
};
export default StatList;

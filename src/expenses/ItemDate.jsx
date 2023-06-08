export default function ItemDate({ data }) {
  const day = data.getDate();
  const month = data.toLocaleString("en-US", { month: "short" });
  const year = data.getFullYear();

  return (
    <div className="bg-slate-900 flex-none h-20 w-20 mr-2 border-2 border-white rounded-xl flex flex-col justify-center items-center  ">
      <div className="text-xs font-bold">{month}</div>
      <div className="text-xs">{day}</div>
      <div className="text-xs font-bold">{year}</div>
    </div>
  );
}

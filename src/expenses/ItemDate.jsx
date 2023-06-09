import moment from "moment/moment";

export default function ItemDate({ data }) {
  const day = moment(data).format("D");
  const month = moment(data).format("MMM");
  const year = moment(data).format("YYYY");

  return (
    <div className="bg-slate-900 flex-none h-20 w-20 mr-2 border-2 border-white rounded-xl flex flex-col justify-center items-center  ">
      <div className="text-xs font-bold">{month}</div>
      <div className="text-xs">{day}</div>
      <div className="text-xs font-bold">{year}</div>
    </div>
  );
}

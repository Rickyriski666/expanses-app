import ItemDate from "./ItemDate";
import ItemPrice from "./ItemPrice";
import ItemTitle from "./ItemTitle";

export default function ItemList({ title, price, date }) {
  return (
    <div className="bg-slate-800 px-5 py-4 rounded-2xl text-white flex mb-4">
      <ItemDate data={date} />
      <ItemTitle data={title} />
      <ItemPrice data={price} />
    </div>
  );
}

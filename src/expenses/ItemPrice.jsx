export default function ItemPrice({ data }) {
  const price = (data) => data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <div className="flex-none h-20 w-20 mr-2 flex justify-center items-center">
      <div className="font-bold">Rp.{price(data)}</div>
    </div>
  );
}

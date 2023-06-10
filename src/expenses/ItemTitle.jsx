export default function ItemTitle({ data }) {
  return (
    <div className="grow h-20 w-20 px-4 mr-2 flex justify-start items-center flex-wrap">
      <h2 className="font-bold text-lg ">{data}</h2>
    </div>
  );
}

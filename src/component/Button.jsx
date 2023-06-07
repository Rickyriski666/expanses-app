export default function Button({ text, type }) {
  return (
    <div>
      <button
        type={type}
        className=" bg-slate-50 rounded-2xl px-5 py-2.5 text-sm font-bold min-w-[110px]"
      >
        {text}
      </button>
    </div>
  );
}

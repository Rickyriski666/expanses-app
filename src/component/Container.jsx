export default function Container({ children }) {
  return (
    <div className="bg-slate-900 p-4 my-8 container max-w-[95%] w-[50rem] m-auto rounded-2xl">
      {children}
    </div>
  );
}

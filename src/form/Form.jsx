import InputForm from "./InputForm";
import Button from "../component/Button";

export default function Form() {
  function dataInput(data) {
    console.log(data);
  }

  return (
    <div className="bg-slate-900 p-4 container max-w-[95%] w-[50rem] m-auto rounded-2xl">
      <form action="" className="px-5 py-4 bg-slate-800 rounded-2xl">
        <div className="mb-8">
          <InputForm title="Title" typeinput="text" userInput={dataInput} />
          <InputForm title="Price" typeinput="number" />
          <InputForm title="Date" typeinput="date" />
        </div>

        <div className="flex justify-end mb-3">
          <Button text="Add" type="submit" />
        </div>
      </form>
    </div>
  );
}

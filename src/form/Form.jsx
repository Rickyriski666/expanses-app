import InputForm from "./InputForm";
import Button from "../component/Button";
import { useState } from "react";

export default function Form() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const titleInput = (data) => setTitle(data);
  const priceInput = (data) => setPrice(data);
  const dateInput = (data) => setDate(data);

  console.log(`dari title ${title}`);
  console.log(`dari price ${price}`);
  console.log(`dari date ${date}`);

  return (
    <div className="bg-slate-900 p-4 container max-w-[95%] w-[50rem] m-auto rounded-2xl">
      <form action="" className="px-5 py-4 bg-slate-800 rounded-2xl">
        <div className="mb-8">
          <InputForm title="Title" typeinput="text" userInput={titleInput} />
          <InputForm title="Price" typeinput="number" userInput={priceInput} />
          <InputForm title="Date" typeinput="date" userInput={dateInput} />
        </div>

        <div className="flex justify-end mb-3">
          <Button text="Add" type="submit" />
        </div>
      </form>
    </div>
  );
}

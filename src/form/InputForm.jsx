import { useState } from "react";

export default function InputForm({ title, typeinput, userInput }) {
  const [input, setInput] = useState("");

  function inputHandler(e) {
    setInput(e.target.value);
  }

  console.log(input);
  return (
    <div className="my-3">
      <label htmlFor="" className="block text-gray-200 text-sm font-bold my-3">
        {title}
      </label>
      <input
        onChange={inputHandler}
        type={typeinput}
        className="rounded-lg py-1 px-2 w-full border-black"
      />
    </div>
  );
}

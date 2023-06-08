import InputForm from "./InputForm";
import Button from "../component/Button";
import { useState } from "react";
import Container from "../component/Container";

export default function Form({ userInput }) {
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleInput = (data) => setNewTitle(data);
  const priceInput = (data) => setNewPrice(data);
  const dateInput = (data) => setNewDate(data);

  function submitHandler(e) {
    e.preventDefault();

    const newDataExpanse = {
      title: newTitle,
      amount: newPrice,
      date: newDate,
    };

    userInput(newDataExpanse);
  }

  return (
    <Container>
      <form
        action=""
        onSubmit={submitHandler}
        className="px-5 py-4 bg-slate-800 rounded-2xl"
      >
        <div className="mb-8">
          <InputForm title="Title" typeinput="text" userInput={titleInput} />
          <InputForm title="Price" typeinput="number" userInput={priceInput} />
          <InputForm title="Date" typeinput="date" userInput={dateInput} />
        </div>

        <div className="flex justify-end mb-3">
          <Button text="Add" type="submit" />
        </div>
      </form>
    </Container>
  );
}

import InputForm from "./InputForm";
import Button from "../component/Button";
import { useState } from "react";
import Container from "../component/Container";

export default function Form({ userInput }) {
  const [newTitle, setNewTitle] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newDate, setNewDate] = useState("");

  const titleInput = (input) => setNewTitle(input);
  const priceInput = (input) => setNewPrice(input);
  const dateInput = (input) => setNewDate(input);

  function submitHandler(e) {
    e.preventDefault();

    const newDataExpanse = {
      title: newTitle,
      price: newPrice,
      date: newDate,
    };

    setNewTitle("");
    setNewPrice("");
    setNewDate("");
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
          <InputForm
            title="Title"
            typeinput="text"
            userInput={titleInput}
            value={newTitle}
          />
          <InputForm
            title="Price"
            typeinput="number"
            userInput={priceInput}
            value={newPrice}
          />
          <InputForm
            title="Date"
            typeinput="date"
            userInput={dateInput}
            value={newDate}
          />
        </div>

        <div className="flex justify-end mb-3">
          <Button text="Add" type="submit" />
        </div>
      </form>
    </Container>
  );
}

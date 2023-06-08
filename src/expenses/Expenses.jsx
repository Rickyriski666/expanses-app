import Container from "../component/Container";
import ItemList from "./ItemList";
// import NoData from "./NoData";

export default function Expenses({ dataUser }) {
  const itemList = dataUser.map((expenses) => {
    return (
      <ItemList
        id={expenses.id}
        title={expenses.title}
        price={expenses.price}
        date={expenses.date}
      />
    );
  });

  return <Container>{itemList}</Container>;
}

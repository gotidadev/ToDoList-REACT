import { useState } from "react";
import ItemList from "../../components/ItemList";
import "./App.css";
import FormList from "../../components/FormList";

function App() {
  const [list, SetList] = useState( JSON.parse(localStorage.getItem("Names")) || []);
  return (
    <>
      <FormList SetLists={SetList}></FormList>
      <ItemList lists={list} SetLists={SetList} />
      <span>Tiago Oliveira Portifiolio</span>
    </>
  );
}

export default App;

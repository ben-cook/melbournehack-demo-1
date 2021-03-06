import "./App.css";

import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    "Eggs",
    "Milk",
    "Chocolate",
    "Chips",
    "Fruit",
  ]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item !== itemToRemove));
  };

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div>
        <ul>
          {items.map((item) => (
            <li onClick={() => removeItem(item)}>{item}</li>
          ))}
        </ul>
        <p>You have {items.length} items in your shopping list</p>
        <input onChange={(event) => setInputValue(event.target.value)} />
        <button onClick={() => addItem(inputValue)}>Add item</button>
      </div>
    </div>
  );
}

export default App;

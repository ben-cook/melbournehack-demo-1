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

  return (
    <div className="App">
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <p>You have {items.length} items in your shopping list</p>
        <input></input>
        <button>Add item</button>
      </div>
    </div>
  );
}

export default App;

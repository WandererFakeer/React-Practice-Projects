import React from "react";

import AddNewItemForm from "./AddNewItemForm.jsx";

function App() {
  const [items, setItems] = React.useState([]);

  function handleAddItem(label) {
    const newItem = {
      id: crypto.randomUUID(),
      text: label,
    };

    const nextItem = [...items, newItem];

    setItems(nextItem);
  }

  return (
    <>
      <ol className="list-of-items">
        {items.map(({ id, text }) => (
          <li key={id} className="item">
            {text}
          </li>
        ))}
      </ol>

      <AddNewItemForm handleAddItem={handleAddItem} />
    </>
  );
}

export default App;

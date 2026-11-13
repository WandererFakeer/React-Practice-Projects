import React from "react";

import useMousePosition from "../hooks/useMousePosition.jsx";

function App() {
  const mousePosition = useMousePosition();

  return (
    <p>
      {mousePosition.x} / {mousePosition.y}
    </p>
  );
}

export default App;

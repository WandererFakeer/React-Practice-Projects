import React from "react";

import useResize from "../hooks/useResize.jsx";

function App() {
  const dimensions = useResize();

  return (
    <p>
      {dimensions.width} / {dimensions.height}
    </p>
  );
}

export default App;

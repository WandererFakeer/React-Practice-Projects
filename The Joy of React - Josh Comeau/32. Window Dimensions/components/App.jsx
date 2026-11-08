import React from "react";

function App() {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    function handleDimensions() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleDimensions);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleDimensions);
    };

  }, []);

  return (
    <p>
      {dimensions.width} / {dimensions.height}
    </p>
  );
}

export default App;

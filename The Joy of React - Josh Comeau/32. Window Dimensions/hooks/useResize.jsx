import React from "react";

function useResize() {
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

    return () => {
      window.removeEventListener("resize", handleDimensions);
    };
  }, []);

  return dimensions;
}

export default useResize;

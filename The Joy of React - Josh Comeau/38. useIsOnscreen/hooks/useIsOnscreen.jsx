import React from "react";

function useIsOnscreen() {
  const [isVisible, setIsVisible] = React.useState(false);

  const elementRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsVisible(entry.isIntersecting);
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return [isVisible ? "YES" : "NO", elementRef];
}

export default useIsOnscreen;

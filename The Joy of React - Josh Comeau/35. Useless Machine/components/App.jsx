import React from "react";

import VisuallyHidden from "./VisuallyHidden.jsx";

function App() {
  const [isChecked, setIsChecked] = React.useState(true);

  const inputId = React.useId();

  React.useEffect(() => {
    if (isChecked) {
      return;
    }

    const timerId = window.setTimeout(() => {
      setIsChecked(!isChecked);
    }, 500);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [isChecked]);

  return (
    <form>
      <VisuallyHidden>
        <label htmlFor={inputId}>Toggle Checkbox</label>
      </VisuallyHidden>

      <input
        id={inputId}
        type="checkbox"
        checked={isChecked}
        onChange={(event) => {
          setIsChecked(event.target.checked);
        }}
      />
    </form>
  );
}

export default App;

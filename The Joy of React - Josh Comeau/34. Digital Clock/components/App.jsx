import React from "react";

import DigitalClock from "./DigitalClock.jsx";

function App() {
  const [isClockOn, setIsClockOn] = React.useState(true);

  function handleClock() {
    setIsClockOn(!isClockOn);
  }

  return (
    <article>
      <button className="clock-toggle" onClick={handleClock}>
        Clock {isClockOn ? "ON" : "OFF"}
      </button>

      {isClockOn && <DigitalClock />}
    </article>
  );
}

export default App;

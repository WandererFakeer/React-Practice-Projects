import DigitalClock from "./DigitalClock.jsx";

import useToggle from "../hooks/useToggle.jsx";

function App() {
  const [showClock, toggleClock] = useToggle(true);

  return (
    <article>
      <button className="clock-toggle" onClick={toggleClock}>
        Clock {showClock ? "ON" : "OFF"}
      </button>
      {showClock && <DigitalClock />}
    </article>
  );
}

export default App;

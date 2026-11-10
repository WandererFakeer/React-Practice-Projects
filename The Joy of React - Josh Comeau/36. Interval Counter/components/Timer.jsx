import React from "react";

import styles from "./Timer.module.css";

function Timer() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <header className="timer-wrapper">
      <h1>Seconds since load: </h1>
      <p className={styles.timer}>{count}</p>
    </header>
  );
}

export default Timer;

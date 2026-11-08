import React from "react";

import styles from "./DigitalClock.module.css";

function DigitalClock() {
  const [time, setTime] = React.useState(Temporal.Now.zonedDateTimeISO());

  const timeFormat = time.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(Temporal.Now.zonedDateTimeISO());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <p className={styles.clock} aria-atomic="true" aria-live="assertive">
      {timeFormat}
    </p>
  );
}

export default DigitalClock;

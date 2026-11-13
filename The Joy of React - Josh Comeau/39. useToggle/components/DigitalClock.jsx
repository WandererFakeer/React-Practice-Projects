import useTime from "../hooks/useTime.jsx";

import styles from "./DigitalClock.module.css";

function DigitalClock() {
  const time = useTime();

  return (
    <p className={styles.clock} aria-atomic="true" aria-live="assertive">
      {time}
    </p>
  );
}

export default DigitalClock;

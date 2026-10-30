import React from "react";

import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from "react-feather";

import ButtonComponent from "./ButtonComponent.jsx";
import styles from "./Counter.module.css";

function Counter({ initialValue = 0 }) {
  const [count, setCount] = React.useState(initialValue);

  return (
    <main className={styles["panel-wrapper"]}>
      <article className={styles.panel}>
        <h1>Current value: </h1>

        <p className={styles.count}>{count}</p>

        <ul className={styles["buttons-wrapper"]}>
          <ButtonComponent
            handler={() => setCount((prev) => prev + 1)}
            emoji={<ChevronUp />}
            visuallyHiddenLabel={"Increase the count by 1"}
          />

          <ButtonComponent
            handler={() => setCount((prev) => prev + 10)}
            emoji={<ChevronsUp />}
            visuallyHiddenLabel={"Increase the count by 10"}
          />

          <ButtonComponent
            handler={() => setCount(initialValue)}
            emoji={<RotateCcw />}
            visuallyHiddenLabel={"Reset the count to 0"}
          />

          <ButtonComponent
            handler={() => setCount(Math.floor(Math.random() * 100) + 1)}
            emoji={<Hash />}
            visuallyHiddenLabel={"Random number between 1 and 100"}
          />

          <ButtonComponent
            handler={() => setCount((prev) => prev - 10)}
            emoji={<ChevronsDown />}
            visuallyHiddenLabel={"Decrease the count by 10"}
          />

          <ButtonComponent
            handler={() => setCount((prev) => prev - 1)}
            emoji={<ChevronDown />}
            visuallyHiddenLabel={"Decrease the count by 1"}
          />
        </ul>
      </article>
    </main>
  );
}

export default Counter;

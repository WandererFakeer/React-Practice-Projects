// Each Guess and Status
import styles from "./Guess.module.css";

import { range } from "../../utils.js";
import checkGuess from "../../gameHelpers.js";

const columnArray = range(5);

function Column({ letter, status }) {
  const className = status
    ? `${styles.column} ${styles[status]}`
    : `${styles.column}`;

  return <span className={className}>{letter}</span>;
}

function Guess({ guess, answer }) {
  const guessLettersAndStatus = checkGuess(guess, answer);

  return (
    <li className={styles.row}>
      {columnArray.map((index) => (
        <Column
          key={Math.random()}
          letter={
            guessLettersAndStatus
              ? guessLettersAndStatus[index].letter
              : undefined
          }
          status={
            guessLettersAndStatus
              ? guessLettersAndStatus[index].status
              : undefined
          }
        />
      ))}
    </li>
  );
}

export default Guess;

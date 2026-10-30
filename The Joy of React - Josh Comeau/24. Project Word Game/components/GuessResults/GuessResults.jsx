// Game Board and Guess Results
import styles from "./GuessResults.module.css";

import { range } from "../../utils.js";
import NUM_OF_GUESSES_ALLOWED from "../../constants.js";

import Guess from "../Guess/Guess.jsx";

const rowArray = range(NUM_OF_GUESSES_ALLOWED);

function GuessResults({ guessesList, answer }) {
  return (
    <ol className={styles["game-board"]}>
      {rowArray.map((index) => (
        <Guess key={Math.random()} guess={guessesList[index]} answer={answer} />
      ))}
    </ol>
  );
}

export default GuessResults;

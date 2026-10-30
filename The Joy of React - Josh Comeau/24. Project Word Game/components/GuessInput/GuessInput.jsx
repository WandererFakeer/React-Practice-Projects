// Guess Input
import React from "react";

import styles from "./GuessInput.module.css";

function GuessInput({ gameStatus, handleGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      alert("The minimum and maximum permissible letter is : 5");
      return;
    }

    handleGuess(guess);

    setGuess("");
  }

  return (
    <form
      className={styles["guess-input-wrapper"]}
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>

      <input
        type="text"
        id="guess-input"
        required={true}
        minLength={5}
        maxLength={5}
        disabled={gameStatus !== "running"}
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;

import styles from "./UltimateGameResult.module.css";

// Should only render when, either -
// 1. User wins game within 6 guesses
// 2. User loses at 6th game

function UltimateGameResult({ gameStatus, numberOfGuesses, answer }) {
  if (gameStatus === "won") {
    return (
      <footer className={`${styles.banner} ${styles.happy}`}>
        <p>
          <strong>Congratulations!</strong> Got it in {""}
          <strong>
            {""}
            {numberOfGuesses} {numberOfGuesses === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      </footer>
    );
  } else if (gameStatus === "lost") {
    return (
      <footer className={`${styles.banner} ${styles.sad}`}>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </footer>
    );
  }
}

export default UltimateGameResult;

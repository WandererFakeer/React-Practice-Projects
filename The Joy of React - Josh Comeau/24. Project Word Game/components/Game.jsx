/*                Game
                    ⇓
      GuessResults     GuessInput
          ⇓
        Guess

*/

import React from "react";

import WORDS from "../data.js";
import { sample } from "../utils.js";
import NUM_OF_GUESSES_ALLOWED from "../constants.js";

import GuessInput from "./GuessInput/GuessInput.jsx";
import GuessResults from "./GuessResults/GuessResults.jsx";
import UltimateGameResult from "./UltimateGameResult/UltimateGameResult.jsx";

const answer = sample(WORDS);

console.log({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running");

  const [guessesList, setGuessesList] = React.useState([]);

  function handleGuess(guess) {
    const nextGuessesList = [...guessesList, guess];

    setGuessesList(nextGuessesList);

    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuessesList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <article>
      <GuessResults guessesList={guessesList} answer={answer} />
      <GuessInput gameStatus={gameStatus} handleGuess={handleGuess} />

      {gameStatus !== "running" && (
        <UltimateGameResult
          gameStatus={gameStatus}
          numberOfGuesses={guessesList.length}
          answer={answer}
        />
      )}
    </article>
  );
}

export default Game;

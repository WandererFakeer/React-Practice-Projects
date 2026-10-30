/*                App
                    ⇓
                  Game
                    ⇓
      GuessResults     GuessInput
          ⇓
        Guess

*/

import React from "react";

import Game from "./Game.jsx";

function App() {
  return (
    <>
      <h1>Word Game</h1>
      <Game />
    </>
  );
}

export default App;

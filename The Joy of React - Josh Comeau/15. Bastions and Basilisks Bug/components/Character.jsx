import React from "react";

import styles from "./Character.module.css";

function Character() {

  const [strength, setStrength] = React.useState(6);
  const [dexterity, setDexterity] = React.useState(9);
  const [intelligence, setIntelligence] = React.useState(15);
  const [showMessage, setShowMessage] = React.useState(false);

  function handleButton() {
    const nextStrength = strength + 1;
    const nextDexterity = dexterity + 2;
    const nextIntelligence = intelligence + 3;

    setStrength(nextStrength);
    setDexterity(nextDexterity);
    setIntelligence(nextIntelligence);
    setShowMessage(true);

    alert(
      `
      Congratulations! Your hero now has the following stats:
      Str: ${nextStrength}
      Dex: ${nextDexterity}
      Int: ${nextIntelligence}
    `,
    );
  }

  return (
    <main>
      <figure>
        <img
          className={styles.wizard}
          alt="8-bit wizard character"
          src="https://sandpack-bundler.vercel.app/img/mage-sprite.gif"
        />
      </figure>
      <button onClick={handleButton} className={styles.level}>
        Level Up
      </button>
      {showMessage && (
        <p className={styles.message}>
          {`Congratulations! Your hero now has the following stats:
      Str: ${strength}
      Dex: ${dexterity}
      Int: ${intelligence}`}
        </p>
      )}
    </main>
  );
}

export default Character;

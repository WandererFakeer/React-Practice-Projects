import VisuallyHidden from "./VisuallyHidden.jsx";

import styles from "./BigCoin.module.css";

function BigCoin({ updatedBalance }) {
  function handleClick() {
    updatedBalance();
  }

  return (
    <button className={styles["coin-wrapper"]} onClick={handleClick}>
      <img
        className={styles.coin}
        src="https://sandpack-bundler.vercel.app/img/toonie.png"
      />
      <VisuallyHidden>Add 2 coins</VisuallyHidden>
    </button>
  );
}

export default BigCoin;

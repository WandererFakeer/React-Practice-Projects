import React from "react";

import styles from "./ToggleTheme.module.css";

const styleForDark = {
  false: {
    backgroundColor: "oklch(1 0 0)",
    color: "oklch(0 0 0)",
    "--ball-color": "oklch(1 0 0)",
    "--ball-outline": "oklch(24.354% 0.00003 271.152)",
    "--track-color": "oklch(20.019% 0.00002 271.152)",
  },
  true: {
    backgroundColor: "oklch(0 0 0)",
    color: "oklch(1 0 0)",
    "--ball-color": "oklch(0 0 0)",
    "--ball-outline": "oklch(1 0 0)",
    "--track-color": "oklch(1 0 0)",
  },
};

function ToggleTheme() {
  const id = React.useId();
  const [isDark, setIsDark] = React.useState(false);

  return (
    <main style={styleForDark[isDark]}>
      <form>
        <label htmlFor={id}>Dark Mode</label>
        <input
          type="checkbox"
          className={styles.toggle}
          id={id}
          checked={isDark}
          onChange={(event) => setIsDark(event.target.checked)}
        />
      </form>
    </main>
  );
}

export default ToggleTheme;

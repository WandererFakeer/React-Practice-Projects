import React from "react";

import styles from "./LoginForm.module.css";

function LoginForm({ handleLoginState }) {
  const id = React.useId();
  const emailId = `${id}-email`;
  const passwordId = `${id}-password`;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleLoginState();
  }

  return (
    <form
      className={styles["login-form"]}
      onSubmit={(event) => handleSubmit(event)}
    >
      <div className={styles["input-wrapper"]}>
        <label htmlFor={emailId}>Email:</label>

        <input
          type="email"
          id={emailId}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className={styles["input-wrapper"]}>
        <label htmlFor={passwordId}>Password:</label>

        <input
          type="password"
          id={passwordId}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <button type="submit" className={styles["login-button"]}>
        Log in
      </button>
    </form>
  );
}

export default LoginForm;

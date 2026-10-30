import React from "react";

import styles from "./SignupForm.module.css";

import Field from "./Field.jsx";

function SignupForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [postal, setPostal] = React.useState("");

  React.useEffect(() => {
    console.log({ name });
  }, [name]);

  React.useEffect(() => {
    console.log({ email });
  }, [email]);

  return (
    <form className={styles["signup-form"]}>
      <Field
        type="text"
        className={`${styles["field-wrapper"]} ${styles.name}`}
        value={name}
        handler={(event) => setName(event.target.value)}
      >
        Preferred Name
      </Field>

      <Field
        type="email"
        className={`${styles["field-wrapper"]} ${styles.email}`}
        value={email}
        handler={(event) => setEmail(event.target.value)}
      >
        Email Address
      </Field>

      <Field
        type="text"
        className={`${styles["field-wrapper"]} ${styles.city}`}
        value={city}
        handler={(event) => setCity(event.target.value)}
      >
        City
      </Field>

      <Field
        type="text"
        className={`${styles["field-wrapper"]} ${styles.postal}`}
        value={postal}
        handler={(event) => setPostal(event.target.value)}
      >
        Postal
      </Field>

      <button className={styles["signup-button"]}>Sign up</button>
    </form>
  );
}

export default SignupForm;

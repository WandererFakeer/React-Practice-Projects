import React from "react";

import styles from "./InputComponent.module.css";

function InputComponent({
  type,
  placeholder,
  required,
  searchTerm,
  setSearchTerm,
  children,
}) {
  const inputId = React.useId();

  return (
    <div className={styles["input-wrapper"]}>
      <label className={styles["input-label"]} htmlFor={inputId}>
        {children}
      </label>
      <input
        type={type}
        id={inputId}
        placeholder={placeholder}
        required={required}
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </div>
  );
}

export default InputComponent;

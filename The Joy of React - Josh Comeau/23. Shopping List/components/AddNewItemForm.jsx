import React from "react";

import styles from "./AddNewItemForm.module.css";

function AddNewItemForm({ handleAddItem }) {
  const [inputData, setInputData] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddItem(inputData);

    setInputData("");
  }

  return (
    <form
      className={styles["add-item-form"]}
      onSubmit={(event) => handleSubmit(event)}
    >
      <label htmlFor="add-item">New Item: </label>

      <div className={styles["input-button-wrapper"]}>
        <input
          type="text"
          id="add-item"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
        <button className={styles.action}>Add</button>
      </div>
    </form>
  );
}

export default AddNewItemForm;

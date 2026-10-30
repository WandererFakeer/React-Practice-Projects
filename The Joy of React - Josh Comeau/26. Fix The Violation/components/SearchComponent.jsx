import React from "react";

import styles from "./SearchComponent.module.css";

import VisuallyHidden from "./VisuallyHidden.jsx";

function SearchComponent() {
  const [searchPlaceHolder, setSearchPlaceHolder] = React.useState("");

  const searchId = React.useId();

  return (
    <div className={styles["input-wrapper"]}>
      <label htmlFor={searchId}></label>
      <VisuallyHidden>Search</VisuallyHidden>
      <input
        type="text"
        className={styles["search-bar"]}
        id={searchId}
        value={searchPlaceHolder}
        onChange={(event) => setSearchPlaceHolder(event.target.value)}
      />
    </div>
  );
}

export default SearchComponent;

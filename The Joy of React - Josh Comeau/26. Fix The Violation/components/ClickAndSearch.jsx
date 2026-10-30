import React from "react";
import { X, Search } from "react-feather";

import styles from "./ClickAndSearch.module.css";

import VisuallyHidden from "./VisuallyHidden.jsx";
import SearchComponent from "./SearchComponent.jsx";

function ClickAndSearch() {
  const [showSearchField, setShowSearchField] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const nextClicked = !showSearchField;

    setShowSearchField(nextClicked);
  }

  return (
    <header>
      <form onSubmit={(event) => handleSubmit(event)}>
        {showSearchField && <SearchComponent />}

        <button type="submit" className={styles["search-action"]}>
          {showSearchField ? <X /> : <Search />}
          <VisuallyHidden>Toggle search field</VisuallyHidden>
        </button>
      </form>
    </header>
  );
}

export default ClickAndSearch;

import styles from "./SearchResults.module.css";

import SearchResult from "./SearchResult.jsx";

function SearchResults({ data }) {
  if (data.length === 0) {
    return <p>No Results</p>;
  }

  return (
    <>
      <h1>Search Results: </h1>

      <section className={styles["search-results"]}>
        {data.map((result) => (
          <SearchResult
            key={result.isbn}
            result={result}
          />
        ))}
      </section>
    </>
  );
}

export default SearchResults;

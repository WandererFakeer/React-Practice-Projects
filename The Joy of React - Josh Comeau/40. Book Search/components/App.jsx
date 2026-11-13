import React from "react";

import fetcher from "../helper.js";

import InputComponent from "./InputComponent.jsx";

import SearchResults from "./SearchResults.jsx";

const ENDPOINT = "https://jor-test-api.vercel.app/api/book-search";

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const [data, setData] = React.useState("");

  const [status, setStatus] = React.useState("idle");

  async function handleSearch(event) {
    event.preventDefault();

    setStatus("loading");

    const url = `${ENDPOINT}?searchTerm=${searchTerm}`;

    const result = await fetcher(url);

    if (result.ok) {
      setData(result?.results);
      setStatus("success");
      setSearchTerm("");
    }

    if (result.error) {
      setStatus("error");
    }
  }

  return (
    <>
      <header>
        <form onSubmit={handleSearch}>
          <InputComponent
            type="text"
            placeholder="The Fifth Season"
            required={true}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          >
            Search
          </InputComponent>
          <button className="search-button">Go!</button>
        </form>
      </header>

      <main>
        {status === "idle" && <p>Welcome to Book Search!</p>}
        {status === "loading" && <p>Performing search...</p>}
        {status === "error" && <p>Something went wrong!</p>}
        {status === "success" && <SearchResults data={data} />}
      </main>
    </>
  );
}

export default App;

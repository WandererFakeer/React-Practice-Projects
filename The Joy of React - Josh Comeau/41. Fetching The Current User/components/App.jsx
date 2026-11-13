import useSWR from "swr";

import fetcher from "../helper.js";

import LoadingSpinner from "./LoadingSpinner.jsx";

import UserCard from "./UserCard.jsx";

const ENDPOINT = "https://jor-test-api.vercel.app/api/get-current-user";

function App() {
  const { data, isLoading, error } = useSWR(ENDPOINT, fetcher);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <p>Something went wrong!</p>}
      {data && <UserCard data={data?.user} />}
    </>
  );
}

export default App;

async function fetcher(endpoint) {
  const response = await fetch(endpoint);

  const data = await response.json();

  if (!data.ok) {
    throw data;
  }

  return data;
}

export default fetcher;

async function fetcher(endpoint) {
  const response = await fetch(endpoint);

  return await response.json();
}

export default fetcher;

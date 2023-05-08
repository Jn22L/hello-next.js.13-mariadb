async function fetchJson(url, option) {
  console.log("fetchJson 함수", url, option);
  const response = await fetch(url, option);
  const json = await response.json();
  if (!response.ok) {
    throw new Error(JSON.stringify(json));
  }
  return json;
}

export { fetchJson };

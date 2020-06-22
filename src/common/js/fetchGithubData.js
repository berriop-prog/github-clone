const fetchGithubData = async (endPoint) => {
  const response = await fetch(`https://api.github.com/${endPoint}`);
  const body = await response.json();
  return body;
};

export default fetchGithubData;

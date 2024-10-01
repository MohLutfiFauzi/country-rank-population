const api = (() => {
  const BASE_URL_REST_COUNTRIES = "https://restcountries.com/v3.1";
  const BASE_URL_NYTIMES = "https://api.nytimes.com/svc";
  const KEY_API = import.meta.env.VITE_API_KEY_NYTIMES;

  async function getCountries() {
    const response = await fetch(
      `${BASE_URL_REST_COUNTRIES}/independent?status=true&fields=name,cca2,population,flags,idd`
    );

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const responseJson = await response.json();
    return responseJson;
  }

  async function getCompareCountries(code1, code2) {
    const response = await fetch(
      `${BASE_URL_REST_COUNTRIES}/alpha?codes=${code1},${code2}`
    );

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const responseJson = await response.json();
    return responseJson;
  }

  async function getArticles(section) {
    const results = await fetch(
      `${BASE_URL_NYTIMES}/search/v2/articlesearch.json?q=${section}&sort=newest&api-key=${KEY_API}`
    );

    const { status, response } = await results.json();
    const { docs } = response;

    if (status !== "OK") {
      throw new Error(response.statusText);
    }

    return docs;
  }

  return {
    getArticles,
    getCountries,
    getCompareCountries,
  };
})();

export default api;

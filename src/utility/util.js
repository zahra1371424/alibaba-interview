export const findCountry = (countries, code) => {
  return countries.find((x) => x.numericCode === code);
};

export const searchCountry = (countries, query) => {
  return countries.filter((x) => x.name.toLowerCase().includes(query));
};

export const filterByRegion = (countries, query) => {
  return countries.filter((x) => x.region === query);
};

export const filterCountry = (countries, filter) => {
  const countriesRegion =
    filter.region && filter.region !== "all"
      ? filterByRegion(countries, filter.region)
      : countries;
  return searchCountry(countriesRegion, filter.search);
};

export const getTheme = () => {
  return ["light-mode", "dark-mode"];
};

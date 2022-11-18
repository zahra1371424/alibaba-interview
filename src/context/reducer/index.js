import { filterCountry, findCountry } from "../../utility/util";

const CountryReducer = (state, action) => {
  switch (action.type) {
    case "SET_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
        filterCountries: action.payload,
      };
    case "GET_COUNTRY":
      return {
        ...state,
        selectedCountry: findCountry(state.countries, action.payload),
      };
    case "FILTER_COUNTRY":
      return {
        ...state,
        filterCountries: filterCountry(state.countries, action.payload),
      };
    default:
      return state;
  }
};

export default CountryReducer;

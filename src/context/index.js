import { createContext, useReducer } from "react";
import CountryReducer from "./reducer";

const COUNTRY_STATE = {
  countries: [],
  filterCountries: [],
  selectedCountry: null,
};
export const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CountryReducer, COUNTRY_STATE);

  return (
    <CountryContext.Provider value={{ state, dispatch }}>
      {children}
    </CountryContext.Provider>
  );
};

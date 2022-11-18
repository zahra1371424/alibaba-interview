import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { CountryContext } from "./context";
import Country from "./Pages/country";
import CountryDetails from "./Pages/country/details";
import { getStorage, setStorage } from "./utility/localstorage";
import "font-awesome/scss/font-awesome.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { getTheme } from "./utility/util";

function App() {
  const { dispatch } = useContext(CountryContext);
  useEffect(() => {
    const countries = getStorage("countries");

    let theme = getStorage("theme");
    if (!theme) {
      theme = getTheme()[0];
      setStorage("theme", theme);
    }
    document.body.classList.add(theme);
    if (countries) {
      dispatch({ type: "SET_COUNTRIES", payload: countries });
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Country />} />
          <Route path="details/:id" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

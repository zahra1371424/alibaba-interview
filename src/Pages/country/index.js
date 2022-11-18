import { useContext, useEffect, useState } from "react";
import { CountryContext } from "../../context";
import axios from "axios";
import Countries from "./list";
import { getStorage, setStorage } from "../../utility/localstorage";
import LoadingComponent from "../../Components/Loading/loadingComponent";

const Country = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(CountryContext);
  useEffect(() => {
    (async () => {
      const countries = getStorage("countries");
      if (!!!countries) {
        setLoading(true);
        try {
          const { data: response } = await axios.get(
            "https://restcountries.com/v2/all/"
          );

          dispatch({ type: "SET_COUNTRIES", payload: response });
          setStorage("countries", response);
        } catch (error) {
          console.error(error.message);
        }
        setLoading(false);
      } else {
        if (countries) {
          dispatch({ type: "SET_COUNTRIES", payload: countries });
        }
      }
    })();
  }, [dispatch]);

  return <>{loading ? <LoadingComponent /> : <Countries />}</>;
};

export default Country;

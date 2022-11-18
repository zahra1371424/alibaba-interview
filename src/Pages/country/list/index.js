import { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountryItem from "../../../Components/countryItem";
import Search from "../../../Components/search";
import Select from "../../../Components/select";
import { CountryContext } from "../../../context";
import "./list.style.scss";

const Countries = () => {
  const { state, dispatch } = useContext(CountryContext);
  const [filter, setFilter] = useState({
    search: "",
    region: "",
  });

  useEffect(() => {
    if (filter.search || filter.region)
      dispatch({
        type: "FILTER_COUNTRY",
        payload: filter,
      });
  }, [filter, dispatch]);

  return (
    <>
      <div className="home-page">
        <Container>
          <div className="d-flex pb-4 justify-content-between">
            <div className="w-50">
              <Search setFilter={setFilter} filter={filter.search} />
            </div>
            <Select
              setFilter={setFilter}
              countries={state.countries}
              property="region"
            />
          </div>
          <Row>
            {state?.filterCountries?.map((item, index) => (
              <Col className="pb-5 " key={index} xs={12} md={3}>
                <CountryItem countryInfo={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Countries;

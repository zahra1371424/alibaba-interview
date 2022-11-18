import { useContext, useEffect } from "react";
import { Badge, Button, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { CountryContext } from "../../../context";
import "./detail.style.scss";

const CountryDetails = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(CountryContext);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch({ type: "GET_COUNTRY", payload: id });
  }, [dispatch, id]);

  return (
    <>
      <Container className="details-area">
        <Button
          className="btn btn-light custom-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </Button>
        <Row className="py-5">
          <div className="col-12 col-md-6 ">
            <div className="flag-area pe-0 pe-md-5 d-flex align-items-center">
              <img
                src={state?.selectedCountry?.flag}
                loading="lazy"
                alt={state?.selectedCountry?.name}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 px-4 px-md-0">
            <h2 className="pb-3 font-bold mt-4 mt-md-0">
              {state?.selectedCountry?.name}
            </h2>
            <div className="d-flex flex-column flex-md-row">
              <div className="d-flex flex-column w-50">
                <div className="pb-2">
                  <small className="px-1">
                    <b>Native Name:</b>{" "}
                  </small>
                  <small className="px-1">
                    {state?.selectedCountry?.nativeName}
                  </small>
                </div>
                <div className="pb-2">
                  <small className="px-1">
                    <b>Population: </b>
                  </small>
                  <small className="px-1">
                    {state?.selectedCountry?.population}
                  </small>
                </div>
                <div className="pb-2">
                  <small className="px-1">
                    <b>Region: </b>
                  </small>
                  <small> {state?.selectedCountry?.region}</small>
                </div>
                <div className="pb-2">
                  <small className="px-1">
                    <b>Sub Region: </b>
                  </small>
                  <small className="px-1">
                    {" "}
                    {state?.selectedCountry?.subregion}
                  </small>
                </div>
                <div className="pb-2">
                  <small className="px-1">
                    <b>Capital: </b>
                  </small>
                  <small className="px-1">
                    {state?.selectedCountry?.capital}
                  </small>
                </div>
              </div>
              <div className="d-flex flex-column w-50 ps-0 ps-md-5">
                <div className="pb-2">
                  <small className="px-1">
                    <b>Top Level Domain: </b>
                  </small>
                  <small className="px-1">
                    {" "}
                    {state?.selectedCountry?.topLevelDomain}
                  </small>
                </div>
                <div className="pb-2">
                  <small className="px-1">
                    <b>Currencies: </b>
                  </small>
                  <small className="px-1">
                    {state?.selectedCountry?.currencies
                      ?.map((item, i) => item.name)
                      .toString()}
                  </small>
                </div>
                <div className="pb-2">
                  <small className="px-1">
                    <b>Languages: </b>
                  </small>
                  <small className="px-1">
                    {state?.selectedCountry?.languages
                      ?.map((item) => item.name)
                      .toString()}
                  </small>
                </div>
              </div>
            </div>

            <div className="d-flex mt-4 flex-wrap">
              <small className="px-1">
                <b>Border Countries:</b>
              </small>
              {state?.selectedCountry?.borders?.map((keyName, i) =>
                state?.countries?.map((item, index) => {
                  if (item.alpha3Code === keyName)
                    return (
                      <small
                        key={index}
                        className="px-1"
                        onClick={() => navigate(`/details/${item.numericCode}`)}
                      >
                        <Badge className="p-2 custom-badge mb-2">
                          {item.name}
                        </Badge>
                      </small>
                    );
                  return null;
                })
              )}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default CountryDetails;

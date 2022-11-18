import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export const CountryContext = React.createContext();

function CountryItem({ countryInfo }) {
  const navigate = useNavigate();
  const { flag, name, population, region, capital, numericCode } = countryInfo;
  return (
    <>
      <div
        onClick={() => navigate(`/details/${numericCode}`)}
        className="h-100"
      >
        <Card key={numericCode} className="h-100">
          <div className="flag-img">
            <Card.Img variant="top" src={flag} className="w-100 h-100" />
          </div>
          <Card.Body className="px-3">
            <Card.Title className="font-bold">
              <b> {name}</b>
            </Card.Title>
            <div>
              <ul key={name} className="p-0">
                <li>
                  <b>population:</b> {population}
                </li>
                <li>
                  <b>Region:</b> {region}
                </li>
                <li>
                  <b>Capital:</b> {capital}
                </li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CountryItem;

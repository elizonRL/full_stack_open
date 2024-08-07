import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);
  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
  const showCountries = (nameOfCountry) => {
    console.log("name of country", nameOfCountry);
    axios
      .get(
        `https://studies.cs.helsinki.fi/restcountries/api/name/${nameOfCountry}`
      )
      .then((response) => {
        setCountry(response.data);
      });

    console.log("country for name -->", country);
  };

  console.log("countries to show", countriesToShow);
  const findCountry = () => {
    if (search === "") {
      return null;
    }
    if (countriesToShow.length > 10) {
      return "Too many matches, specify another filter";
    }
    if (countriesToShow.length > 1 && countriesToShow.length <= 10) {
      return countriesToShow.map((country) => (
        <>
          <li key={country.name.common}>{country.name.common}</li>
          <button onClick={() => showCountries(country.name.common)}>
            show
          </button>
        </>
      ));
    }
    if (countriesToShow.length === 1) {
      return (
        <div>
          <h2>{countriesToShow[0].name.common}</h2>
          <p>capital {countriesToShow[0].capital}</p>
          <p>area {countriesToShow[0].area}</p>
          <h3>languages:</h3>
          <ul>
            {Object.values(countriesToShow[0].languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img src={countriesToShow[0].flags.png} alt="flag" />
        </div>
      );
    }
  };
  console.log("counties -->", countriesToShow);
  return (
    <>
      <h1>Countries</h1>
      find Counties:{" "}
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <ul>{findCountry()}</ul>
      <ul>
        {country && (
          <>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
              {Object.values(country.languages).map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
            <img src={country.flags.png} alt="flag" />
          </>
        )}
      </ul>
    </>
  );
}

export default App;

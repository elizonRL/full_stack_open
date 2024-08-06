import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
 /*  const [country, setCountry] = useState([]); */
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
  console.log("countries to show", countriesToShow);
  const findCountry = () => {
    if(search === "") {
      return null
    }
    if (countriesToShow.length > 10) {
      return "Too many matches, specify another filter";
    }
    if (countriesToShow.length > 1 && countriesToShow.length <= 10) {
      return countriesToShow.map((country) => (
        <li key={country.name.common}>{country.name.common}</li>
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
    /* if (countriesToShow.length === 1) {
      return countriesToShow[0];
    } */
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
      <ul>
        {findCountry()}
      </ul>
    </>
  );
}

export default App;

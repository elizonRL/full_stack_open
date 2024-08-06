import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
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
    if(countriesToShow.length === 1){
        return countriesToShow[0]
    }
  };
  console.log("counties -->",countriesToShow);
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
        {findCountry() ? (
          <li key={findCountry().name.common}>
            {findCountry().name.common} {findCountry().capital}
          </li>
        ) : (
          countriesToShow.map((country) => (
            <li key={country.name.common}>
              {country.name.common} {country.capital}
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default App;

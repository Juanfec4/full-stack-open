import SearchBox from "./components/SearchBox";
import { useState, useEffect } from "react";
import countryService from "./services/countries";
import StateMessage from "./components/StateMessage";
const App = () => {
  const [input, setInput] = useState("");
  const [countries, setCountries] = useState(undefined);
  const [filteredCountries, setFilteredCountries] = useState(undefined);

  //Handle an input typed
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  //Handle show button
  const handleShowButton = (e) => {
    let newCountriesArray = countries.filter((country) => {
      return country.ccn3 === e.target.id;
    });
    setFilteredCountries(newCountriesArray);
  };

  //Get all the countries from the API
  useEffect(() => {
    countryService.getAll().then((response) => {
      setCountries(response.data);
    });
  }, []);

  //Filter countries when input is typed
  useEffect(() => {
    if (!input || !countries) {
      return;
    }
    let newCountriesArray = countries.filter((country) => {
      const countryName = country.name.common;
      if (!country.capital) {
        return false;
      }
      return countryName.toLowerCase().startsWith(input);
    });
    console.log(newCountriesArray);
    setFilteredCountries(newCountriesArray);
  }, [input]);

  return (
    <div>
      <h1>Countries</h1>
      <SearchBox handleInput={handleInputChange} input={input} />
      <StateMessage
        countries={filteredCountries}
        input={input}
        handleShowButton={handleShowButton}
      />
    </div>
  );
};

export default App;

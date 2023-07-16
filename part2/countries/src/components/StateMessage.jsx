import CountryCard from "./CountryCard";

const StateMessage = ({ countries, input ,handleShowButton}) => {
  if (!countries || !input) {
    return;
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter.</p>;
  }
  if (countries.length === 1) {
    return <CountryCard country={countries[0]}/>;
  }
  return (
    <div>
      <h2>Results:</h2>
      {countries.map((country) => {
        return (
          <p key={country.ccn3}>
            {country.name.common} ({country.name.official}){" "}
            <button onClick={handleShowButton} id={country.ccn3}>Show</button>
          </p>
        );
      })}
    </div>
  );
};

export default StateMessage;

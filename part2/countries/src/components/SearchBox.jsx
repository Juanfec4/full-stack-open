const SearchBox = ({handleInput, input}) => {
  return (
    <div>
        <label htmlFor="searchField">Find countries: </label>
      <input id="searchField" value={input} onChange={handleInput}></input>
    </div>
  );
};

export default SearchBox;

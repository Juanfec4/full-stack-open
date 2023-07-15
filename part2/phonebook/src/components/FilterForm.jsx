const FilterForm = ({ handleFilterChange, input }) => {
  return (
    <div>
        <label htmlFor="filter">Search: </label>
      <input
        id="filter"
        value={input.filter}
        onChange={handleFilterChange}
      ></input>
    </div>
  );
};

export default FilterForm;

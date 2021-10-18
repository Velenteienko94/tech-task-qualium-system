import React, { useContext } from "react";
import { FilterContext } from "../../providers/filter-provider";

const Filter = () => {
  const { filterValue, setFilterValue } = useContext(FilterContext);

  const onInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    setFilterValue(ev.target.value);
  };

  return (
    <div>
      <h1>hello im a filter</h1>
      <label htmlFor="searchInput">
        search by title
        <input
          placeholder="set filter value"
          id="searchInput"
          onChange={onInputChange}
          type="text"
          value={filterValue}
        />
      </label>
    </div>
  );
};

export default Filter;

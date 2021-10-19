import { useState } from "react";
import { FilterContext } from ".";

export const FilterProvider: React.FC = ({ children }) => {
  const [filterValue, setFilterValue] = useState("");
  const [paginationValue, setPaginationValue] = useState("");
  return (
    <FilterContext.Provider
      value={{
        filterValue,
        paginationValue,
        setFilterValue,
        setPaginationValue,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

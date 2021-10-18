import { useState } from "react";
import { FilterContext } from ".";

export const FilterProvider: React.FC = ({ children }) => {
  const [filterValue, setFilterValue] = useState("");
  return (
    <FilterContext.Provider value={{ filterValue, setFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

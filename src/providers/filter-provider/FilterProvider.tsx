import { useState } from "react";
import { FilterContext, TFilterValue } from ".";

export const FilterProvider: React.FC = ({ children }) => {
  const [filterValue, setFilterValue] = useState<TFilterValue>("");

  return (
    <FilterContext.Provider value={{ filterValue, setFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

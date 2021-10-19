import { createContext } from "react";

import { FilterProvider } from "./FilterProvider";

export type TFilterContext = {
  filterValue: string;
  paginationValue: string;
  setFilterValue: (value: string) => void;
  setPaginationValue: (value: string) => void;
};

export const FilterContext = createContext<TFilterContext>(
  {} as TFilterContext
);

export default FilterProvider;

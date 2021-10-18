import { createContext } from "react";

import { FilterProvider } from "./FilterProvider";

export type TFilterContext = {
  filterValue: string;
  setFilterValue: (value: string) => void;
};

export const FilterContext = createContext<TFilterContext>(
  {} as TFilterContext
);

export default FilterProvider;

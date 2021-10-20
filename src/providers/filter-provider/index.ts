import { createContext } from "react";
import { FilterProvider } from "./FilterProvider";

export type TFilterValue = string;

export type TFilterContext = {
  filterValue: TFilterValue;
  setFilterValue: (value: TFilterValue) => void;
};

export const FilterContext = createContext<TFilterContext>(
  {} as TFilterContext
);

export default FilterProvider;

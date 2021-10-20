import { createContext } from "react";
import { PaginationProvider } from "./PaginationContext";

export type TPaginationValue = string;

export type TPaginationContext = {
  paginationValue: TPaginationValue;
  setPaginationValue: (value: TPaginationValue) => void;
};

export const PaginationContext = createContext<TPaginationContext>(
  {} as TPaginationContext
);

export default PaginationProvider;

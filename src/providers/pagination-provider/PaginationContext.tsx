import { useState } from "react";
import { PaginationContext, TPaginationValue } from ".";

export const PaginationProvider: React.FC = ({ children }) => {
  const [paginationValue, setPaginationValue] = useState<TPaginationValue>("");

  return (
    <PaginationContext.Provider value={{ paginationValue, setPaginationValue }}>
      {children}
    </PaginationContext.Provider>
  );
};

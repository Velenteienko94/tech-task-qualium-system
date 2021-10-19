import { useState } from "react";
import { EditContext } from ".";

export const EditProvider: React.FC = ({ children }) => {
  const [editValue, setEditValue] = useState({});
  return (
    <EditContext.Provider
      value={{
        editValue,
        setEditValue,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

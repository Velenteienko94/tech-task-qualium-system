import { createContext } from "react";

import { EditProvider } from "./EditProvider";

export type TEditContext = {
  editValue: {};
  setEditValue: (value: {}) => void;
};

export const EditContext = createContext<TEditContext>({} as TEditContext);

export default EditProvider;

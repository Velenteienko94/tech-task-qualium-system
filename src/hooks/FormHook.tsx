import { useState } from "react";

export type TUseFormFieldValues = {
  id: string;
  title: string;
  price: string;
  description: string;
  inCart?: boolean;
};

export type TUseFormValidationRules = {
  title: boolean;
  price: boolean;
  description: boolean;
};

export type TUseFormErrors = {
  error: string;
};

type TUseFormInitialValue = {
  fieldsValues: TUseFormFieldValues;
  validationRules: TUseFormValidationRules;
  errors: TUseFormErrors;
};

const useForm = (initialValue: TUseFormInitialValue) => {
  const [formData, setFormData] = useState(initialValue);

  return formData;
};

export default useForm;

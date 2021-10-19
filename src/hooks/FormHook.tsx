import { useState } from "react";

type TUseFormInitVal = {
  description: string;
  id: number;
  price: string;
  title: string;
};

type TUseFormProps = {
  intialValue?: TUseFormInitVal;
};

const useForm = (initialValue: TUseFormInitVal): TUseFormProps => {
  const [formData, setFormData] = useState({});
  if (initialValue) {
    setFormData(initialValue);
  }
  return formData;
};

export default useForm;

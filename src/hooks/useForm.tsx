import { useState } from 'react';
export const useForm = (initValidated: any) => {
  const [values, setValues] = useState(initValidated);
  const [errors, setErrors] = useState<object>({});

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initValidated);
    setErrors({});
  };
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
};

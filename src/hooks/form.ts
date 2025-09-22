import { useState } from 'react';

type Values = { [key: string]: any };

interface UseFormProps {
  initialValues: Values;
  onSubmit?: (values: Values) => void;
}

export const useForm = ({ initialValues, onSubmit }: UseFormProps) => {
  const [values, setValues] = useState<Values>(initialValues);

  const handleChange = (name: string, value: any) => {
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

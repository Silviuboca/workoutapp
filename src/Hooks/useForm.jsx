import { useState } from 'react';

const useForm = (defaultValue) => {
  const [state, setState] = useState(defaultValue);

  return [
    state,
    (e) => {
      const { name, value } = e.target;
      setState((prev) => ({ ...prev, [name]: value }));
    },
  ];
};

export default useForm;

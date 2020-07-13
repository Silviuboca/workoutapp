import React from 'react';

const FormInput = ({
  value,
  handleChange,
  type,
  name,
  placeholder,
  useTextArea,
}) => (
  <div>
    {useTextArea ? (
      <textarea
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        required
      />
    ) : (
      <input
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        required
      />
    )}
  </div>
);

export default FormInput;

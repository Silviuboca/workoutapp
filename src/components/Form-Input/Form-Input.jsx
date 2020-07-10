import React from 'react';

const FormInput = ({ handleChange, type, name, placeholder, useTextArea }) => (
  <div>
    {useTextArea ? (
      <textarea
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    ) : (
      <input
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    )}
  </div>
);

export default FormInput;

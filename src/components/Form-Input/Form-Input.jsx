import React from 'react';

const FormInput = ({ handleChange, type, name, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default FormInput;

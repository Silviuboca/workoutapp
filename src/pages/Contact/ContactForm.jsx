import React, { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';

const ContactForm = () => {
  const [input, setInput] = useState({
    displayName: '',
    email: '',
    textArea: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setInput({ displayName: '', email: '', textArea: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          placeholder='Display Name'
          handleChange={handleChange}
        />
        <FormInput
          type='email'
          name='email'
          placeholder='Email Address'
          handleChange={handleChange}
        />
        <FormInput
          useTextArea={true}
          name='textArea'
          placeholder=''
          handleChange={handleChange}
        />
        <button onSubmit={handleSubmit}>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;

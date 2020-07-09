import React, { useState } from 'react';
import FormInput from '../../components/Form-Input/Form-Input';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUp = () => {
  const [input, setInput] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.password !== input.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        input.email,
        input.password
      );
      await createUserProfileDocument(user, { displayName: input.displayName });

      setInput({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Display name</span>
        <FormInput
          name='displayName'
          type='text'
          handleChange={handleChange}
          placeholder='Display Name'
        />
        <span>Email</span>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          placeholder='Enter email here'
        />
        <span>Password</span>
        <FormInput
          name='password'
          type='password'
          handleChange={handleChange}
          placeholder='Password'
        />
        <span>Confirm Password</span>
        <FormInput
          name='confirmPassword'
          type='password'
          handleChange={handleChange}
          placeholder='Confirm password'
        />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;

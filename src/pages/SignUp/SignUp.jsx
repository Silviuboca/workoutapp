import React, { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput';
import { auth, createUserProfileDocument } from '../../lib/firebase.utils';

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
      <div>
        <span>Log in with Facebook</span>
        <br />
        <span>Log in with Google</span>
        <br />
        <span>OR</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            placeholder='Email'
          />
          <FormInput
            name='username'
            type='text'
            handleChange={handleChange}
            placeholder='Username'
          />
          <FormInput
            name='password'
            type='password'
            handleChange={handleChange}
            placeholder='Password'
          />
          <button>Sign up</button>
        </form>
      </div>
      <div>
        <span>Have an account?</span>
        <button>Log in</button>
      </div>
    </div>
  );
};

export default SignUp;

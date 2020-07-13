import React, { useState } from 'react';
import FormInput from '../../components/Form-Input/Form-Input';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import useForm from '../../components/Hooks/useForm';

const SignIn = () => {
  const [input, handleChange] = useForm({ email: '', password: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();

    /*
    Redirect to homepage,
    Change sign in to sign out
    Change Header options -Account Option
    */
    try {
      await auth.signInWithEmailAndPassword(input.email, input.password);
      // setInput({
      //   email: '',
      //   password: '',
      // });
      console.log('sign in success');
    } catch (error) {
      console.log('error');
    }
  };
  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <span>Sign In</span>
        <input
          name='email'
          type='email'
          onChange={handleChange}
          placeholder='Enter email here'
        />
        <span>Password</span>
        <input
          name='password'
          type='password'
          onChange={handleChange}
          placeholder='password'
        />
        <button type='submit'>Sign In</button>
        <button onClick={signInWithGoogle}>Sign In With GOOGLE</button>
      </form>
    </div>
  );
};

export default SignIn;

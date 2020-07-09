import React, { useState } from 'react';
import FormInput from '../../components/Form-Input/Form-Input';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [input, setInput] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(input.email, input.password);
      setInput({
        email: '',
        password: '',
      });
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
          placeholder='password'
        />
        <button type='submit'>Sign In</button>
        <button onClick={signInWithGoogle}>Sign In With GOOGLE</button>
      </form>
    </div>
  );
};

export default SignIn;

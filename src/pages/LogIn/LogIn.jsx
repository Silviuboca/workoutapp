import React from 'react';
import { auth, signInWithGoogle } from '../../lib/firebase.utils';
import useForm from '../../Hooks/useForm';

const LogIn = () => {
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
      <h2>Level Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          name='email'
          type='email'
          onChange={handleChange}
          placeholder='Email or Username'
        />
        <span>Password</span>
        <input
          name='password'
          type='password'
          onChange={handleChange}
          placeholder='Password'
        />
        <button>Show</button>
        <button type='submit'>Log In</button>
        <span>OR</span>
        <br />
        <button onClick={signInWithGoogle}>LOGO:Log in with Google</button>
        <br />

        <button>LOGO:Log in with Facebook</button>
      </form>
      <div>
        <form>
          <span>New?</span>
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

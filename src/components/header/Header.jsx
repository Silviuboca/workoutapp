import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to='/'>Home</Link> <Link to='/tasks'>Tasks</Link>{' '}
    <Link to='/calendar'>Calendar</Link> <Link to='/workouts'>Workouts</Link>{' '}
    <Link to='/signin'>Sign In</Link>
    <Link to='/signup'>Sign Up</Link>
  </div>
);

export default Header;

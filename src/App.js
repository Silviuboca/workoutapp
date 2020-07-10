import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tasks from './pages/tasks/tasks';
import Calendar from './pages/Calendar/calendar';
import MealPlan from './pages/Meal-Plan/Meal-Plan';
import Workouts from './pages/Workouts/workouts';
import Homepage from './pages/homepage/Homepage';
import Modular from './components/Modular/Modular';
import Header from './components/Header/Header';
import Exercises from './pages/Exercises/Exercises';
import SignIn from './pages/Sign-In/Sign-In';
import SignUp from './pages/Sign-up/Sign-up';
import ContactForm from './pages/Contact/ContactForm';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route exact path='/tasks'>
          <Tasks />
        </Route>
        <Route exact path='/calendar'>
          <Calendar />
        </Route>
        <Route exact path='/workouts'>
          <Workouts />
        </Route>
        <Route exact path='/workouts/:bodyPart'>
          <Exercises />
        </Route>
        <Route exact path='/mealplan'>
          <MealPlan />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/contact'>
          <ContactForm />
        </Route>
        <Route path='/'>
          <div>404</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

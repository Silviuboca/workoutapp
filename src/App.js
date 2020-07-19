import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TaskManager from './pages/TaskPage/TaskManager';
import Calendar from './pages/Calendar/CalendarPage';
import MealPlan from './pages/MealPlan/mealPlan';
import Workouts from './pages/Workouts/WorkoutPage';
import Homepage from './pages/Homepage/Homepage';
import Header from './components/Header/Header';
// import Exercises from '../';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
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
          <TaskManager />
        </Route>
        <Route exact path='/calendar'>
          <Calendar />
        </Route>
        <Route exact path='/workouts'>
          <Workouts />
        </Route>
        {/*<Route exact path='/workouts/:bodyPart'>
          <Exercises />
        </Route>
  */}
        <Route exact path='/mealplan'>
          <MealPlan />
        </Route>
        <Route exact path='/login'>
          <LogIn />
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

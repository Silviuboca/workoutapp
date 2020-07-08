import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tasks from './pages/tasks/tasks';
import Calendar from './pages/Calendar/calendar';
import MealPlan from './pages/Meal-Plan/meal-plan';
import Workouts from './pages/Workouts/workouts';
import Homepage from './pages/homepage/Homepage';
import Modular from './components/Modular/Modular';
import Header from './components/header/Header';
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
        <Route exact path='/mealplan'>
          <MealPlan />
        </Route>

        <Route path='/modo'>
          <Modular>
            <div>Hi</div>
          </Modular>
        </Route>
        <Route path='/'>
          <div>404</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

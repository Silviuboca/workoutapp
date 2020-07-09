import React, { useState } from 'react';
import DateTracker from 'react-calendar';
import Modular from '../../components/Modular/Modular';
import 'react-calendar/dist/Calendar.css';

const Calendar = () => {
  const [display, setDisplay] = useState(false);

  const showModular = () => {
    setDisplay((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      <h1>Calendar</h1>
      <DateTracker />
    </div>
  );
};

export default Calendar;

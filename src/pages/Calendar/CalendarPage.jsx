import React from 'react';
import DateTracker from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
  const handleChange = (date) => {
    console.log(date);
  };

  return (
    <div>
      <h1>Calendar</h1>
      <DateTracker onChange={handleChange} />
    </div>
  );
};

export default CalendarPage;

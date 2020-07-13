import React, { useState, useContext } from 'react';
import DateTracker from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { ModalContext } from '../../components/Contexts/modal.context';

const Calendar = () => {
  let { handleModal } = useContext(ModalContext);

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

export default Calendar;

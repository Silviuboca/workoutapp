import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BODYPART_DATA from '../../components/BodyPart/BodyPart.data';
import { ModalProvider } from '../../components/Contexts/modal.context';
const Workouts = () => {
  const history = useHistory();

  const handleBodyPart = (e) => {
    const linkUrl = e.target.innerHTML.replace(/\s+/g, '-').toLowerCase();

    return history.push(`/workouts/${linkUrl}`);
  };

  const bodyParts = () => {
    return BODYPART_DATA.map((bodyPart, id) => {
      return (
        <div key={id}>
          <h1 onClick={handleBodyPart}>{bodyPart.title}</h1>
        </div>
      );
    });
  };

  return <div>{bodyParts()}</div>;
};
export default Workouts;

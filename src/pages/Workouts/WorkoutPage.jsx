import React from 'react';
import { useHistory } from 'react-router-dom';
import BODYPART_DATA from '../../components/BodyPartData/BodyPartData';

const Workouts = () => {
  const history = useHistory();

  const handleExercises = (e) => {
    const linkUrl = e.target.innerHTML.replace(/\s+/g, '-').toLowerCase();

    return history.push(`/workouts/${linkUrl}`);
  };

  const bodyParts = () => {
    return BODYPART_DATA.map((exercise, id) => {
      return (
        <div key={id}>
          <h1 onClick={handleExercises}>{exercise.title}</h1>
          <button>Add to Tasks</button>
          <button>Edit</button>
        </div>
      );
    });
  };

  return <div>{bodyParts()}</div>;
};
export default Workouts;

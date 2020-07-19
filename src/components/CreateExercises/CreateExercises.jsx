import React from 'react';
import { useParams } from 'react-router-dom';
import BODYPART_DATA from '../BodyPartData/BodyPartData';

const Exercises = () => {
  const { bodyPart } = useParams();

  const findDiscipline = () => {
    let discipline = BODYPART_DATA.filter((disciplines) => {
      return disciplines.linkUrl === bodyPart;
    });
    console.log(discipline);
    return discipline;
  };

  const { items } = findDiscipline()[0];

  return (
    <div>
      {items.map((exercise) => {
        return (
          <div key={exercise.id}>
            <h2>{exercise.name}</h2>
            <p>{exercise.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Exercises;

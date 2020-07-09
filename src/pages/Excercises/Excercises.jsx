import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BODYPART_DATA from '../../components/BodyPart/BodyPart.data';

const Exercises = () => {
  const { bodyPart } = useParams();

  let discipline = [];

  const findDiscipline = () => {
    discipline = BODYPART_DATA.filter((discipline) => {
      return discipline.imageUrl === bodyPart;
    });
    console.log(discipline);
    return discipline;
  };

  return <div>{findDiscipline()}</div>;
};

export default Exercises;

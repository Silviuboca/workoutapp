import React, { useState } from 'react';
import FormInput from '../../components/Form-Input/Form-Input';
import useForm from '../../components/Hooks/useForm';

const CalorieCalculator = () => {
  const [inputs, handleChange] = useForm({
    age: '',
    height: '',
    weight: '',
    gender: 'male',
  });
  const [outputBMI, setOutputBMI] = useState({ BMI: '' });
  const [outputBMR, setOutputBMR] = useState({ BMR: '' });

  const getBMI = () => {
    const { height, weight } = inputs;
    let bmi;
    let bodyWeight;

    bmi = (weight / height / height) * 10000;

    if (bmi < 18.5) {
      bodyWeight = 'Underweight';
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      bodyWeight = 'Normal Weight';
    }
    if (bmi >= 25 && bmi < 29.9) {
      bodyWeight = 'Overweight';
    }
    if (bmi >= 30) {
      bodyWeight = 'Obesity';
    }
    setOutputBMI({ BMI: bodyWeight });

    return bodyWeight;
  };

  // no bodyfat (metric)
  //if user inputs no => Show BMI and Mifflin BMR
  const getMifflinBMR = () => {
    const { age, height, weight, gender } = inputs;
    let result;

    if (gender === 'male') {
      result = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      result = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    setOutputBMR({ BMR: result });

    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getBMI();
    getMifflinBMR();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='age'
          type='number'
          placeholder='age'
          onChange={handleChange}
          value={inputs.age}
        />
        <input
          name='height'
          type='number'
          placeholder='height'
          onChange={handleChange}
          value={inputs.height}
        />
        <input
          name='weight'
          placeholder='weight'
          type='number'
          onChange={handleChange}
          value={inputs.weight}
        />
        <select name='gender' onChange={handleChange}>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
        <button>Calculate</button>
      </form>
      {outputBMI && (
        <div>
          <h3>{outputBMI.BMI}</h3>
          <h3>{outputBMR.BMR}</h3>
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;

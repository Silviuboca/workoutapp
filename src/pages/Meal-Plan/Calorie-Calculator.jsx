import React, { useState } from 'react';
import FormInput from '../../components/Form-Input/Form-Input';

const CalorieCalculator = () => {
  const [inputs, setInputs] = useState({
    age: '',
    height: '',
    weight: '',
    gender: 'male',
    bodyFat: '',
    useBodyFat: 'true',
  });
  const [outputBMI, setOutputBMI] = useState({ BMI: '' });
  const [outputBMR, setOutputBMR] = useState({ BMR: '' });
  const [displayBFInput, setDisplayBFInput] = useState(false);

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

  // w/ bodyfat lean (metric)
  const getKatchBMR = () => {
    const { age, height, weight, gender, bodyFat } = inputs;

    const lbm = (weight * (100 - bodyFat)) / 100;
    const result = 21.6 * lbm + 370;

    setOutputBMR({ BMR: result });

    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bodyWeight = getBMI();

    if (bodyWeight === 'Underweight' || bodyWeight === 'Normal Weight') {
      setDisplayBFInput(true);
      console.log('displayBFInput');
    } else {
      getMifflinBMR();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
      {!displayBFInput ? (
        <form onSubmit={handleSubmit}>
          <FormInput
            name='age'
            type='number'
            placeholder='age'
            handleChange={handleChange}
            value={inputs.age}
          />
          <FormInput
            name='height'
            type='number'
            placeholder='height'
            handleChange={handleChange}
            value={inputs.height}
          />
          <FormInput
            name='weight'
            placeholder='weight'
            type='number'
            handleChange={handleChange}
            value={inputs.weight}
          />
          <select name='gender' onChange={handleChange}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          <button>Calculate</button>
        </form>
      ) : (
        <form>
          <p>Do you want to use Body Fat?</p>
          <select name='useBodyFat' onChange={handleChange}>
            <option value='true'>Yes</option>
            <option value='false'>No</option>
          </select>
          {inputs.useBodyFat==='true' && (
            <FormInput
              placeholder='enter body fat percentage'
              handleChange={handleChange}
              value={inputs.bodyFat}
            />
          )}
        </form>
      )}
    </div>
  );
};

export default CalorieCalculator;

import React, { useState } from 'react';
import './BMICalculator.css';
function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100; // convert height to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    } else {
      alert('Please enter both height and weight.');
    }
  };

  return (
    <div className='BMICalculator'>
      <h2>BMI Calculator</h2>
      <div>
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <h3>Your BMI is: {bmi}</h3>
          <p>
            Interpretation:
            {bmi < 18.5 && ' Underweight'}
            {bmi >= 18.5 && bmi < 24.9 && ' Normal weight'}
            {bmi >= 25 && bmi < 29.9 && ' Overweight'}
            {bmi >= 30 && ' Obese'}
          </p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;

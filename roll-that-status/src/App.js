import React, { useState, useEffect } from "react";
// import './App.css';

// stolen from copilot :(
// Grab random value from status dictionary
const App = () => {
  // Step 1: Create a dictionary-like object
  const myDict = {
    1: 'Value for key 1',
    2: 'Value for key 2',
    3: 'Value for key 3',
    // Add more key-value pairs as needed
  };

  // Step 2: Generate a random number
  const getRandomNumber = () => {
    return Math.floor(Math.random() * Object.keys(myDict).length) + 1;
  };

  // Step 3: Fetch the value from the object based on the random number
  const [randomValue, setRandomValue] = useState('');

  useEffect(() => {
    const randomNumber = getRandomNumber();
    setRandomValue(myDict[randomNumber]);
  }, []);

  return (
    <div>
      <p>{randomValue}</p>
    </div>
  );
};


export default App;

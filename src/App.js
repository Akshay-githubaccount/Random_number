import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  
  const [randomNumber, setRandomNumber] = useState(null);

  const handleButtonClick = () => {

    if (!isNaN(min) && !isNaN(max)) {
      const minNum = parseInt(min, 10);
      const maxNum = parseInt(max, 10);

      
      const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      
      
      setRandomNumber(randomNum);
    }
  };

  return (
    <>
      <div className="box">
        <div className="container">
          <div>
            <p>
              Random Number <span>{randomNumber !== null ? randomNumber : 'Click the button'}</span>
            </p>
          </div>
          <div className="randomNumber">
            <div>
              <p>Min: </p>
              <input
                type="number"
                value={min}
                onChange={(e) => setMin(e.target.value)}
              />
            </div>
            <div className='space'>
              <p>Max: </p>
              <input
                type="number"
                value={max}
                onChange={(e) => setMax(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button onClick={handleButtonClick}>Click</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

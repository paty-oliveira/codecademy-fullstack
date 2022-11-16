import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [isActive, setIsActive] = useState(false);

  const handleClickButton = () => {
    setButtonColor(newButtonColor)
  }

  const handleCheckboxChange = () => {
    setIsActive(!isActive);
  }

  return (
    <div>
      <button
        style={{backgroundColor: isActive? 'gray': buttonColor}}
        onClick={handleClickButton}
        disabled={isActive}
      >
        Change to {newButtonColor}</button>
        <input
          type="checkbox"
          id="disable-button-checkbox"
          onChange={handleCheckboxChange}/>
        <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;

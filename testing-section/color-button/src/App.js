import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [checkboxState, setCheckboxState] = useState(false);

  const handleClickButton = () => {
    setButtonColor(newButtonColor)
  }

  const handleCheckboxChange = () => {
    setCheckboxState(!checkboxState)
  }

  return (
    <div>
      <button
        style={{backgroundColor: buttonColor}}
        onClick={handleClickButton}
        disabled={checkboxState}
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

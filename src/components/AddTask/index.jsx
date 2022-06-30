import { useState } from 'react';
import { Button } from '../Button';
import './style.css';


export function AddTask({ handleTaskAddition }) {
  const [inputData, setInputData] = useState("");

  function handleInputChange(e) {
    setInputData(e.target.value);
  }

  function handleTaskClick(){
    handleTaskAddition(inputData)
    setInputData('')
  }

  return (
    <div className="add-task-container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input"
        type="text"
      />
      <div className="add-task-button-container">
        <Button onClick={handleTaskClick}>
          <strong>adicionar</strong>
        </Button>
      </div>
    </div>
  );
}
import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = usestate();
  const [names, setNames] = useState([]);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setNames([...names, inputValue]);
    setInputValue("");
  }
  return (
    <div className="App">
      <h1>{inputValue}</h1>
      <div className="container">
        <form onClick={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={inputValue}
            onChange={handleChange}
          />
          <button>Enter</button>
        </form>
        <h2> Names </h2>
        <ul className="name-list">
          {names.map((name, index) => (
            <li key={index}> {name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React from "react";

export default function DiceBox() {
  const [numbers, setNumbers] = React.useState([1, 2, 5, 6, 3]);
  function rollDice() {
    setNumbers((prevNumbers) =>
      prevNumbers.map(() => Math.floor(Math.random() * 6) + 1)
    );
  }

  return (
    <>
      <h1>React Dice</h1>

      <button onClick={rollDice}>Roll Dice</button>
      <div className="dice-div">
        {numbers.map((number, index) => (
          <span className="numbers" key={index}>
            {number}
          </span>
        ))}
      </div>
    </>
  );
}

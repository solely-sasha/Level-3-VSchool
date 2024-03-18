import { useState } from "react";

import "./App.css";

function App() {
  const pink = "#FF1493";
  const blue = "#00FFFF";
  const [people, setPeople] = useState([
    {
      firstName: "John",
      lastName: "Smith",
      age: 30,
    },
  ]);

  const [color, setColor] = useState("pink");
  const [textColor, setTextColor] = useState(pink);
  const [countObject, setCountObject] = useState({
    count: 0,
  });

  // const [someColors, setSomeColors] = useState(["pink", "blue"]);

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "pink" ? "blue" : "pink"));
    setTextColor((prevColor) => (prevColor === pink ? blue : pink));
  };
  const newPerson = () => {
    const newPeople = [
      {
        firstName: "Sasha",
        lastName: "Sims",
      },
      {
        firstName: "Suzie",
        lastName: "Stein",
        age: 30,
      },
    ];

    // Check if any of the new people already exist in the 'people' array
    if (
      !newPeople.some((newPerson) =>
        people.some(
          (person) =>
            person.firstName === newPerson.firstName &&
            person.lastName === newPerson.lastName
        )
      )
    ) {
      setPeople((prevPeople) => [...prevPeople, ...newPeople]);
      setCountObject((prevCountObject) => ({
        count: prevCountObject.count + newPeople.length, // Increment count by the number of new people
      }));
    } else {
      alert("Sorry, no more people to add");
    }
  };

  // Change the following state-setting functions to use an implicit return

  return (
    <div>
      <h1>Practice useState</h1>
      <h2 style={{ color: textColor }}>{color}</h2>
      <button onClick={toggleColor}>Change Color</button>
      {/* <button
        onClick={() => setSomeColors((prevColor) => [...prevColor, "green"])}
      >
        {" "}
        What Color?
      </button> */}
      {/* <h2>{someColors}</h2> */}
      <button onClick={newPerson}>Add People</button>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {person.firstName} {person.age}
          </li>
        ))}
      </ul>

      <h3> New People: {countObject.count}</h3>
    </div>
  );
}

export default App;

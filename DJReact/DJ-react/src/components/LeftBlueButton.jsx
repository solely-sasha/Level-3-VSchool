import React from "react";

export default function LeftBlueButton(props) {
  function handleLeftBlue() {
    props.setColors(["colors[0]", "colors[1]", "blue", "colors[3]"]);
  }

  return (
    <button className="blue-button" onClick={handleLeftBlue}>
      Left Blue
    </button>
  );
}

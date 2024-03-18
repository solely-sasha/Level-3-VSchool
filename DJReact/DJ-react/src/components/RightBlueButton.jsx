import React from "react";

export default function (props) {
  function handleRightBlue() {
    props.setColors(["colors[0]", "colors[1]", "colors[2]", "blue"]);
  }

  return (
    <button className="blue-button" onClick={handleRightBlue}>
      Right Blue
    </button>
  );
}

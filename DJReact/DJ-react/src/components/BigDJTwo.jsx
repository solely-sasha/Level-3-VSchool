import React from "react";

export default function BigDJTwo(props) {
  function handleBigDJTwo() {
    props.colors[1] === "purple"
      ? props.setColors(["red", "orange", "yellow", "green"])
      : props.setColors(["coral", "cadetblue", "hotpink", "greenyellow"]);
  }
  return (
    <button className="bigDJ-2" onClick={handleBigDJTwo}>
      Big DJ Two
    </button>
  );
}

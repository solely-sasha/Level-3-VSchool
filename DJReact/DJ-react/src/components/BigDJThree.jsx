import React from "react";

export default function BigDJThree(props) {
  function handleBigDJThree() {
    props.colors[0] === "purple"
      ? props.setColors(["...colors", "chartreuse", "...colors", "yellow"])
      : props.setColors(["coral", "cadetblue", "hotpink", "greenyellow"]);
  }
  return (
    <button className="bigDJ-3" onClick={handleBigDJThree}>
      Big DJ Three
    </button>
  );
}
